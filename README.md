# QScroll Web Prototype

**QScroll Web** is a React/TypeScript prototype of a scrollable SAT‑style question interface. It demonstrates the core front‑end interactions and styling for a future adaptive learning platform focused on deep student data collection and personalized feedback.

## What’s Here

- **Question Cards**  
  - Single‑question view with rounded, vibrant cards  
  - Supports two formats:
    - **Multiple‑Choice** (A, B, C, D)  
    - **Self‑Entry** (free‑form answer box)  
  - “Check” button provides immediate visual feedback:
    - Blue border = unanswered  
    - Green glow = correct  
    - Red glow = incorrect  

- **Linear Navigation**  
  - Up/down arrow buttons let students move forward or backward through questions, mimicking a TikTok‑style scroll.

- **Hard‑Coded Questions**  
  - A small set of sample SAT‑style questions lives directly in the front end for rapid prototyping.

- **Styling Inspiration**  
  - Clean, flashcard‑like layout inspired by Quizlet  
  - Playful color palette and micro‑interactions inspired by Duolingo

## Prototype Goals

This front‑end prototype lays the groundwork for:

1. **Adaptive Question Delivery**  
   Collecting user responses (correctness, response time, perceived difficulty) to power a data‑driven algorithm that selects optimal next questions.

2. **Deep Student Analytics**  
   Building dashboards that reveal performance by topic, time‑on‑task, and difficulty trends, enabling learners to understand and direct their own study.

3. **Seamless UX**  
   Testing core interactions—card navigation, answer checking, and difficulty feedback—before adding a backend or persistent storage.

---

*This is an early prototype. The next steps will replace hard‑coded data with a backend API, integrate analytics pipelines, and evolve the UI into a full adaptive learning platform.*  
