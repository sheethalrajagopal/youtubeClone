# Murmur: meeting notes and live transcription

An Otter-style note-taking app that runs entirely in the browser. There's no server, no build step and no account.

## Features
- **Live transcription** while you record (Web Speech API), in 15 languages
- **Speaker tagging**: click a speaker chip or press `1`–`9` while recording; rename and reassign speakers afterwards
- **Audio recording** with synced playback: click any timestamp to jump there, and the transcript follows as it plays (speed 0.75×–2×, ±15s skips)
- **Automatic insights**: extractive summary, keywords, action items you can tick off, highlights (starred lines), talk-time per speaker
- **Editing**: fix any transcript line inline; type manual notes while recording
- **Search** within a transcript or across every conversation
- **Export** to TXT, Markdown (with summary), SRT subtitles, JSON, or the original audio
- Light and dark mode, works on mobile; everything is stored locally in IndexedDB

## Run it
Microphone access needs `localhost` or HTTPS:

```bash
cd notetaker
python3 -m http.server 8000
# open http://localhost:8000
```

Live transcription works in Chrome, Edge and Safari. In Firefox the app still records audio and lets you type notes.
Click **Add a sample conversation** to try the transcript, summary and export features without a microphone.

## Shortcuts
| Where | Key | Action |
|---|---|---|
| Recording | `Space` | Pause / resume |
| Recording | `1`–`9` | Switch active speaker |
| Playback | `Space` | Play / pause |
| Playback | `←` / `→` | Back / forward 5s |
