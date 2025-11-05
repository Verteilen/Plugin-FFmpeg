import { v6 as uuidv6 } from 'uuid';
import { Task, Job, CreateDefaultJob, JobCategory, JobType, CreateDefaultTask, Project, Database } from 'verteilen-core';
import { GetFFmpegProject_Database } from '../database/FFmpeg';

const trans = ():Task => {
    const render:Job = {
        ...CreateDefaultJob(),
        category: JobCategory.Execution,
        type: JobType.LIB_COMMAND,
        string_args: ["ffmpeg", "-hide_banner "+
            "-y -i %src% -crf %crf% -c:v %video_encode% -c:a %audio_encode% "+
            "-pix_fmt %pixel_format% -color_primaries %color_primaries% "+
            "-color_trc %color_trc% -colorspace %colorspace% %output%"],
    }
    const t:Task = {
        ...CreateDefaultTask(),
        title: "Render frame one by one",
        cronjob: true,
        cronjobKey: "frameCount",
        jobs: [
            render
        ]
    }
    return t
}

export const GetFFmpeg_ProjectTemplate_Transcode = (r:Project):Project => {
    const para:Database = {
        title: "FFmpeg Database",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetFFmpegProject_Database()
    }
    r.title = "Media Transcode"
    r.database = para
    r.tasks.push(...[
        trans(),
    ])
    return r
}