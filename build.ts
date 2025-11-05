import { PluginBuild } from "verteilen-core";
import { FFmpeg_ProjectTempGroup, FFmpeg_DatabaseTempGroup } from './src/projectTemplate'

/**
 * Build Plugin To Dist
 */
PluginBuild(
// Destinations
"dist",
{
    // Plugins metadata
    plugins: [
        {
            name: "ffmpeg",
            requireVersion: "1.3",
            description: "ffmpeg execute",
            version: "0.1.0",
            contents: [
                {
                    filename: "ffmpeg.exe",
                    url: "https://github.com/Verteilen/Plugin-FFmpeg/releases/download/0.1.0-window/ffmpeg.exe",
                    platform: "win32",
                    arch: "x64",
                    unpack: false,
                },
                {
                    filename: "ffmpeg",
                    url: "https://github.com/Verteilen/Plugin-FFmpeg/releases/download/0.1.0-linux/ffmpeg",
                    platform: "linux",
                    arch: "x64",
                    unpack: false,
                }
            ]
        },
        {
            name: "ffplay",
            requireVersion: "1.3",
            description: "ffplay execute",
            version: "0.1.0",
            contents: [
                {
                    filename: "ffplay.exe",
                    url: "https://github.com/Verteilen/Plugin-FFmpeg/releases/download/0.1.0-window/ffplay.exe",
                    platform: "win32",
                    arch: "x64",
                    unpack: false,
                },
                {
                    filename: "ffplay",
                    url: "https://github.com/Verteilen/Plugin-FFmpeg/releases/download/0.1.0-linux/ffplay",
                    platform: "linux",
                    arch: "x64",
                    unpack: false,
                }
            ]
        },
        {
            name: "ffprobe",
            requireVersion: "1.3",
            description: "ffprobe execute",
            version: "0.1.0",
            contents: [
                {
                    filename: "ffprobe.exe",
                    url: "https://github.com/Verteilen/Plugin-FFmpeg/releases/download/0.1.0-window/ffprobe.exe",
                    platform: "win32",
                    arch: "x64",
                    unpack: false,
                },
                {
                    filename: "ffprobe",
                    url: "https://github.com/Verteilen/Plugin-FFmpeg/releases/download/0.1.0-linux/ffprobe",
                    platform: "linux",
                    arch: "x64",
                    unpack: false,
                }
            ]
        }
    ]
}, {
    // Template metadata
    projects: FFmpeg_ProjectTempGroup,
    databases: FFmpeg_DatabaseTempGroup
})