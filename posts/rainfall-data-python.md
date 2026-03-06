---
title: "24 Years of Rainfall Data: What Python Taught Me About Climate"
category: "Programming"
date: "January 2025"
readTime: "6 min read"
---

Project Rainfall was my first serious data science project — processing 24 years of daily rainfall records from multiple geographic locations in Bangladesh. Here's the full story.

## The Dataset Challenge

The data came in a mix of CSV and Excel formats, with inconsistent column names, missing values, and different date formats per station. The first week was almost entirely spent on cleaning.

```python
df = pd.read_excel(file, header=None)
# Detect header row intelligently
header_row = df[df.iloc[:,0].astype(str).str.contains('Date', na=False)].index[0]
df.columns = df.iloc[header_row]
df = df.iloc[header_row+1:].reset_index(drop=True)
```

## The Analysis

Once clean, the data told a clear story: monsoon intensity is increasing. Peak rainfall events (>150mm/day) have become more frequent since 2010. Linear regression confirmed an upward trend in annual totals for 4 out of 6 stations analyzed.

## Visualization

Matplotlib and Seaborn handled the plots. The most revealing chart was the seasonal decomposition — showing the trend component rising even as year-to-year variance increased. Climate change in the data.

The full notebook is on GitHub. It's a good beginner project if you want to practice real-world data wrangling — messy, realistic, and genuinely interesting.
