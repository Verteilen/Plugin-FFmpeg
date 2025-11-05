import { v6 as uuidv6 } from 'uuid';
import { Task, Job, CreateDefaultJob, JobCategory, JobType, CreateDefaultTask, Project, Database } from 'verteilen-core';
import { GetFFmpegProject_Database } from '../database/FFmpeg';

const Info = ():Task => {
    const render:Job = {
        ...CreateDefaultJob(),
        category: JobCategory.Execution,
        type: JobType.LIB_COMMAND,
        string_args: ["ffprobe", "-v quiet -print_format json -show_format -show_streams %root%/%Info.src% > %root%/%Info.output%"],
    }
    const t:Task = {
        ...CreateDefaultTask(),
        title: "Fetch info into json file",
        jobs: [
            render
        ]
    }
    return t
}

export const GetFFmpeg_ProjectTemplate_Info = (r:Project):Project => {
    const para:Database = {
        title: "FFmpeg Database",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetFFmpegProject_Database()
    }
    r.title = "Media Info"
    r.database = para
    r.tasks.push(...[
        Info(),
    ])
    return r
}