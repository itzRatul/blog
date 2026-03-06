---
title: "Understanding Self-Attention: The Heart of Transformer Architecture"
category: "AI Research"
date: "March 2025"
readTime: "8 min read"
---

If you've ever wondered what makes ChatGPT, Llama, or Gemini actually *work* — the answer almost always points back to one elegant mechanism: **self-attention**. Today I want to break it down the way I wish someone had explained it to me.

## Why Do We Need Attention?

Before transformers, we had RNNs — recurrent neural networks that processed tokens one by one, left to right. The problem? Long-range dependencies were hard. By the time the model got to token 500, it had nearly forgotten what happened at token 1. Attention was the solution.

## The Q, K, V Intuition

Think of it like a search engine. You have a `Query` (what you're looking for), `Keys` (labels on the data), and `Values` (the actual data). Self-attention computes how much each token should "attend to" every other token in the sequence.

```python
attention_scores = Q @ K.T / sqrt(d_k)
weights = softmax(attention_scores)
output = weights @ V
```

That's it. Three lines. The genius is in what these matrices learn during training — they capture syntactic relationships, semantic proximity, and even long-range grammatical agreement.

## Multi-Head Attention

Instead of running attention once, transformers run it multiple times in parallel with different learned projections. Each "head" can learn to focus on a different type of relationship. One head might track subject-verb agreement; another might track co-reference (he → John).

## What This Means for LLMs

Modern LLMs stack dozens of these attention layers. GPT-2 has 12 layers; LLaMA 3 has 32. Each layer refines the representation, allowing the model to build increasingly abstract understanding of the input. This is why scaling works — more layers = more refined internal world models.

I've been implementing a miniature transformer from scratch using PyTorch as part of my LLM studies. If there's interest, I'll post the full code walkthrough next week.
