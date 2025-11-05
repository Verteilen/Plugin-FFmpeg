import { v6 as uuidv6 } from 'uuid';
import { Task, Job, JobCategory, JobType, Project, Database, CreateDefaultJob, CreateDefaultTask } from 'verteilen-core';
import { GetFFmpegProject_Database } from '../database/FFmpeg';

const Convert = ():Task => {
    const mkdir:Job = {
        ...CreateDefaultJob(),
        category: JobCategory.Execution,
        type: JobType.CREATE_DIR,
        string_args: ["%root%/%Video2I.folder%/%Video2I.folder%"],
    }
    const render:Job = {
        ...CreateDefaultJob(),
        category: JobCategory.Execution,
        type: JobType.LIB_COMMAND,
        string_args: ["ffmpeg", "-hide_banner -y -i %root%/%Video2I.src% "+
            "-vf fps=%Video2I.fps% %root%/%Video2I.folder%/%Video2I.output%"],
    }
    const t:Task = {
        ...CreateDefaultTask(),
        title: "Video to Images",
        jobs: [
            mkdir,
            render
        ]
    }
    return t
}

export const GetFFmpeg_ProjectTemplate_Video2Image = (r:Project):Project => {
    const para:Database = {
        title: "FFmpeg Database",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetFFmpegProject_Database()
    }
    r.title = "Video to Images"
    r.database = para
    r.tasks.push(...[
        Convert(),
    ])
    return r
}
