---
title: "Running Llama 3.2 Locally with Ollama: My First Experiment Log"
category: "LLM Experiment"
date: "February 2025"
readTime: "5 min read"
---

One of the most exciting things you can do as an LLM enthusiast is run a model *entirely on your own hardware*. No API keys, no rate limits, no data leaving your machine. Here's my honest log of running Llama 3.2 1B via Ollama.

## Setup

Installation was surprisingly smooth. Ollama handles the model download, quantization, and inference loop:

```bash
curl https://ollama.ai/install.sh | sh
ollama run llama3.2:1b
```

## First Impressions

The 1B model is genuinely impressive for its size. Response latency on my machine averages around 400ms for the first token, then ~80ms per subsequent token. For local deployment in a Telegram bot like **M.E.R.C.Y**, this is perfectly acceptable.

## What I Tested

I ran the model through coding assistance, summarization, multi-turn dialogue, and some basic reasoning tasks. It handles Python code quite well. Where it struggles is complex multi-step reasoning — expected for 1B parameters.

## Key Takeaway

Local LLMs are absolutely viable for personal projects. The privacy advantage alone is worth it. Next experiment: fine-tuning with LoRA on a custom dataset. Stay tuned.
