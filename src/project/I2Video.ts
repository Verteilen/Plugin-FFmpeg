import { v6 as uuidv6 } from 'uuid';
import { Task, Job, CreateDefaultJob, JobCategory, JobType, CreateDefaultTask, Project, Database } from 'verteilen-core';
import { GetFFmpegProject_Database } from '../database/FFmpeg';

const Convert = ():Task => {
    const render:Job = {
        ...CreateDefaultJob(),
        category: JobCategory.Execution,
        type: JobType.LIB_COMMAND,
        string_args: ["ffmpeg", "-hide_banner -y -framerate %I2Video% -ss %r_start% "+
            "-i %root%/%r_src% -to %r_end% -c:v %video_encode% -b:v %video_bitrate% -crf %crf% -pix_fmt %pixel_format% "+
            "%root%/%r_output%"],
    }
    const t:Task = {
        ...CreateDefaultTask(),
        title: "Images to Videos",
        cronjob: true,
        cronjobKey: "I2Video.data.length",
        properties: [
            {
                name: "e_src",
                expression: "STRING(['I2Video.data.', ck, '.src'])"
            },
            {
                name: "e_start",
                expression: "STRING(['I2Video.data.', ck, '.start'])"
            },
            {
                name: "e_end",
                expression: "STRING(['I2Video.data.', ck, '.end'])"
            },
            {
                name: "e_output",
                expression: "STRING(['I2Video.data.', ck, '.output'])"
            },
            {
                name: "r_src",
                expression: "e_src",
                deep: 2
            },
            {
                name: "r_start",
                expression: "e_start",
                deep: 2
            },
            {
                name: "r_end",
                expression: "e_end",
                deep: 2
            },
            {
                name: "r_output",
                expression: "e_output",
                deep: 2
            }
        ],
        jobs: [
            render
        ]
    }
    return t
}

export const GetFFmpeg_ProjectTemplate_Image2Video = (r:Project):Project => {
    const para:Database = {
        title: "FFmpeg Database",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetFFmpegProject_Database()
    }
    r.title = "Images to Videos"
    r.database = para
    r.tasks.push(...[
        Convert(),
    ])
    return r
}