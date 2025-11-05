import { v6 as uuidv6 } from 'uuid';
import * as fs from 'fs'
import * as path from 'path';
import { Task, Job, JobCategory, JobType, Project, CreateDefaultJob, CreateDefaultTask, Database } from 'verteilen-core';
import { GetFFmpegProject_Database } from '../database/FFmpeg';

const Convert = ():Task => {
    const concatfile:Job = {
        ...CreateDefaultJob(),
        category: JobCategory.Execution,
        type: JobType.JAVASCRIPT,
        script: fs.readFileSync(path.join(__dirname, "..", "js", "Concat.js")).toString()
    }
    const render:Job = {
        ...CreateDefaultJob(),
        category: JobCategory.Execution,
        type: JobType.LIB_COMMAND,
        string_args: ["ffmpeg", "-f concat -safe 0 -i %root%/concat.txt -c copy %root%/%Concat.output%"],
    }
    const t:Task = {
        ...CreateDefaultTask(),
        title: "Concat videos to a single video",
        jobs: [
            concatfile,
            render
        ]
    }
    return t
}

export const GetFFmpeg_ProjectTemplate_Concat = (r:Project):Project => {
    const para:Database = {
        title: "FFmpeg Database",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetFFmpegProject_Database()
    }
    r.title = "Media Concat"
    r.database = para
    r.tasks.push(...[
        Convert(),
    ])
    return r
}