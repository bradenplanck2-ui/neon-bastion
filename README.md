# 🛡️ Neon Prime: Bastion

![Version](https://img.shields.io/badge/version-16.12-cyan?style=for-the-badge) ![Status](https://img.shields.io/badge/status-LIVE-green?style=for-the-badge) ![Tech](https://img.shields.io/badge/tech-HTML5_Canvas-orange?style=for-the-badge)

**Neon Prime: Bastion** is a high-intensity, single-file roguelite survival shooter built entirely in vanilla JavaScript. It features procedural wave generation, an upgrade system, and synthesized audio—all contained within a single HTML file with **zero external assets**.

### 🔗 [Play the Live Demo on Render](YOUR_RENDER_URL_HERE)

---

## 🕹️ Game Overview

You are a stationary defense protocol. Your objective: Survive endless waves of geometric anomalies.
The game utilizes an "Asset-Less" architecture. Every sound effect, particle, and texture is generated mathematically at runtime using the HTML5 Canvas API and Web Audio API.

### Key Features
* **Asset-Less Engine:** 0kb of images or audio files. Everything is drawn and synthesized via code.
* **Infinite Scaling:** Difficulty scales exponentially (`1.1^Wave`).
* **Roguelite Progression:** XP system with randomized perk cards and hull evolutions.
* **Boss Rush System:** Duel unique bosses (Hex-Core, Iron Clad, Viper, Crimson Star) every 5 waves.
* **Reactive UI:** Smart HUD that adapts to mobile touch controls and avoids occlusion.

---

## 🎮 Controls

The game supports both Desktop (Mouse/Keyboard) and Mobile (Touch/Virtual Joystick).

| Action | PC (Keyboard/Mouse) | Mobile (Touch) |
| :--- | :--- | :--- |
| **Aim** | Mouse Cursor | Left Virtual Joystick |
| **Fire** | Hold Left Click | Auto-fire while aiming |
| **Repulsor** | `SPACE` | Button / Double Tap Screen |
| **Overdrive** | `F` | Button |
| **Pause** | `P` or `ESC` | Top Right Pause Icon |

## 🛠️ Technical Stack

* **Core:** HTML5 Canvas (2D Context) for rendering.
* **Logic:** Vanilla JavaScript (ES6+).
* **Audio:** Web Audio API (Real-time synthesis using Oscillators and Noise Buffers).
* **Styling:** Tailwind CSS (via CDN) for UI overlay.
* **Persistence:** `localStorage` for High Scores and Save States.

### Game Loop Architecture
The engine uses a standard delta-time loop with optimized "dirty checking" for DOM updates to maintain 60 FPS.

### 📱 Development Story
**Engineered on Mobile.**
This entire game engine—including the physics system, audio synthesis, and game balance—was developed, tested, and deployed 100% on a mobile device using AI-assisted iteration.
