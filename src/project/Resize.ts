import { v6 as uuidv6 } from 'uuid';
import { Task, Job, CreateDefaultJob, JobCategory, JobType, CreateDefaultTask, Project, Database } from 'verteilen-core';
import { GetFFmpegProject_Database } from '../database/FFmpeg';

const resize = ():Task => {
    const render:Job = {
        ...CreateDefaultJob(),
        category: JobCategory.Execution,
        type: JobType.LIB_COMMAND,
        string_args: ["ffmpeg", "-hide_banner -y -i %root%/%resize.src% -crf %crf% -vf scale=%resize.width%:%resize.height% -c:v %video_encode% -c:a copy %root%/%resize.output%"],
    }
    const t:Task = {
        ...CreateDefaultTask(),
        title: "Resize a media",
        cronjob: true,
        cronjobKey: "frameCount",
        jobs: [
            render
        ]
    }
    return t
}

export const GetFFmpeg_ProjectTemplate_Resize = (r:Project):Project => {
    const para:Database = {
        title: "FFmpeg Database",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetFFmpegProject_Database()
    }
    r.title = "Media Resize"
    r.database = para
    r.tasks.push(...[
        resize(),
    ])
    return r
}