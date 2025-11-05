import { v6 as uuidv6 } from 'uuid';
import { GetFFmpegProject_Database } from '../database/FFmpeg';
import { Task, Job, JobCategory, JobType, Project, CreateDefaultJob, CreateDefaultTask, Database } from 'verteilen-core';

const Download = ():Task => {
    const render:Job = {
        ...CreateDefaultJob(),
        category: JobCategory.Execution,
        type: JobType.LIB_COMMAND,
        string_args: ["ffmpeg", "-hide_banner -y -i %download.src% "+
            "-c:v copy -c:a copy %root%/%download.output%"],
    }
    const t:Task = {
        ...CreateDefaultTask(),
        title: "Download video to source",
        jobs: [
            render
        ]
    }
    return t
}

export const GetFFmpeg_ProjectTemplate_Download = (r:Project):Project => {
    const para:Database = {
        title: "FFmpeg Database",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetFFmpegProject_Database()
    }
    r.title = "Media Download"
    r.database = para
    r.tasks.push(...[
        Download(),
    ])
    return r
}