import { TemplateGroup_Database, TemplateGroup_Project } from 'verteilen-core'
import { GetFFmpegProject_Database } from './database/FFmpeg'
import { GetFFmpeg_ProjectTemplate_Concat } from './project/Concat'
import { GetFFmpeg_ProjectTemplate_Download } from './project/Download'
import { GetFFmpeg_ProjectTemplate_Image2Video } from './project/I2Video'
import { GetFFmpeg_ProjectTemplate_Info } from './project/MediaInfo'
import { GetFFmpeg_ProjectTemplate_Resize } from './project/Resize'
import { GetFFmpeg_ProjectTemplate_Transcode } from './project/Transcode'
import { GetFFmpeg_ProjectTemplate_Video2Image } from './project/V2Image'

export const FFmpeg_ProjectTempGroup:Array<TemplateGroup_Project> = [
    { group: "FFmpeg", title: "Concat", filename: "concat", value: 100, template: GetFFmpeg_ProjectTemplate_Concat },
    { group: "FFmpeg", title: "Download", filename: "download", value: 101, template: GetFFmpeg_ProjectTemplate_Download },
    { group: "FFmpeg", title: "Image 2 Video", filename: "i2v", value: 102, template: GetFFmpeg_ProjectTemplate_Image2Video },
    { group: "FFmpeg", title: "Resize", filename: "resize", value: 103, template: GetFFmpeg_ProjectTemplate_Resize },
    { group: "FFmpeg", title: "Transcode", filename: "transcode", value: 104, template: GetFFmpeg_ProjectTemplate_Transcode },
    { group: "FFmpeg", title: "Video 2 Image", filename: "v2i", value: 105, template: GetFFmpeg_ProjectTemplate_Video2Image },
    { group: "FFmpeg", title: "Info", filename: "info", value: 106, template: GetFFmpeg_ProjectTemplate_Info },
]

export const FFmpeg_DatabaseTempGroup:Array<TemplateGroup_Database> = [
    { group: "FFmpeg", title: "FFmpeg Share Data", filename: "database", value: 100, template: GetFFmpegProject_Database },
]