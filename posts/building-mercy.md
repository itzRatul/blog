---
title: "Building M.E.R.C.Y: An AI Agent That Actually Remembers You"
category: "Programming"
date: "January 2025"
readTime: "7 min read"
---

**M.E.R.C.Y** started as a question: what if a local LLM could maintain real context about you — not just the last few messages, but your habits, your goals, your mood patterns? This is the story of how I built that.

## The Memory Problem

LLMs are stateless by design. Every time you start a new conversation, the model has no memory of you. The standard solution is RAG (Retrieval Augmented Generation) — store past conversations, retrieve relevant chunks, inject them into context. But I wanted something more structured.

## Architecture

M.E.R.C.Y uses a JSON-based user profile that tracks:

```json
{
  "name": "Ratul",
  "preferences": {...},
  "conversation_history": [...],
  "reminders": [...],
  "mood_log": [...]
}
```

## The Personality System

The most fun part was building adaptive personality. Depending on detected user mood (from message sentiment), M.E.R.C.Y adjusts its system prompt — more gentle and supportive vs. energetic and challenging. It's crude, but it works surprisingly well in practice.

## Deployment via Telegram

Using the `python-telegram-bot` library, M.E.R.C.Y runs as a 24/7 bot. The whole stack costs exactly $0/month — just the Raspberry Pi sitting on my desk.

The full source code is on my GitHub. Happy to answer questions about the architecture in the comments.
