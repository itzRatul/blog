---
title: "What is RLHF? Reinforcement Learning from Human Feedback Explained"
category: "AI Research"
date: "March 2025"
readTime: "6 min read"
---

If you've heard "ChatGPT was trained with RLHF" and wondered what that means — this post is for you. RLHF is one of the most important techniques in modern AI alignment, and understanding it will change how you think about these models.

## The Problem RLHF Solves

A language model trained purely on text prediction learns to be a good *text completer* — not necessarily a good *assistant*. It might complete a story about how to make explosives just as happily as it completes a recipe for cookies. RLHF teaches it what humans actually want.

## The Three Phases

**Phase 1: Supervised Fine-Tuning (SFT).** Human trainers write example conversations demonstrating ideal behavior. The model is fine-tuned on these.

**Phase 2: Reward Model Training.** The model generates multiple responses; human raters rank them. A separate "reward model" is trained to predict these human preferences.

**Phase 3: PPO Training.** The original model is optimized using the reward model as a signal, via Proximal Policy Optimization — a reinforcement learning algorithm. The model learns to produce outputs the reward model scores highly.

## Why It's Imperfect

RLHF is limited by the quality of human feedback. Biases in raters become biases in the model. There's also "reward hacking" — the model learns to produce outputs that score well with the reward model without actually being helpful. Anthropic's Constitutional AI (CAI) is one attempt to address this.
