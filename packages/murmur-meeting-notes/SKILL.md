---
name: murmur-meeting-notes
description: Opens Murmur, a meeting recorder that transcribes live, tags speakers and builds a summary, action items and keywords. Use when the user wants to record or transcribe a meeting, call, lecture or interview, take meeting notes, or open the Murmur app. Also use when the user shares a Murmur export (.txt, .md, .srt or .json) and wants a summary, action items, follow-up email or minutes written from it.
---

# Murmur meeting notes

Murmur is a self-contained web app in `assets/murmur.html` (one file with inline CSS and JS, no external requests). It records audio and transcribes it live in the browser with the Web Speech API. It tags speakers, syncs playback with the transcript, and builds a summary, action items, keywords and talk time for each speaker. It exports to TXT, Markdown, SRT, JSON or audio. All data stays in the viewer's browser (IndexedDB).

## When the user wants to record or open the app

1. Read `assets/murmur.html` in full.
2. Give it to the user as an interactive app:
   - If you can create artifacts or interactive HTML pages, publish the file **unchanged** as an HTML artifact titled "Murmur". If artifacts in this environment need the microphone declared as a capability, declare it.
   - Otherwise, give the user the file and tell them to save it as `murmur.html`.
3. Tell the user briefly how to use it:
   - Press the red button to record. Pressing it again pauses.
   - Press `1`–`9` or click a speaker chip to mark who is talking.
   - **Stop & save** opens the conversation, with its summary and action items.
   - To try it without a microphone, use **Add a sample conversation**.
   - Live transcription needs Chrome, Edge or Safari. Firefox records audio only, and you can type notes as you go.
4. If the microphone is blocked inside the artifact, have them download the file and serve it locally. Microphone access needs `localhost` or HTTPS:
   `python3 -m http.server 8000` in the folder that contains `murmur.html`, then open `http://localhost:8000/murmur.html`.

Do not rewrite or "improve" the app when publishing it. Publish the file exactly as it is, unless the user asks for a change.

## When the user shares a Murmur export

Exports use these formats:
- `.txt`: `[m:ss] Speaker: text`, one line per segment
- `.md`: Summary, Action items, Keywords, then the Transcript
- `.json`: `{title, createdAt, duration (ms), speakers[], segments[{start, end, speaker (index into speakers), text, starred}]}`

Murmur's built-in summary is simple keyword scoring. Write a better one from the transcript when asked:
- **Summary:** 3–6 bullets about decisions and outcomes, not a play-by-play.
- **Action items:** owner, task and due date where one was said. Don't invent owners or dates.
- **Open questions** and **risks**, if any came up.
- Cite timestamps (`[m:ss]`) so the user can jump back to that point in Murmur.
- Speech-to-text output often has misheard words. Fix obvious ones silently, and flag any that change the meaning.

Offer follow-ups that fit the meeting: a recap email, meeting minutes, or a task list.
