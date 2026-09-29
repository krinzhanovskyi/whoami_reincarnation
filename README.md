# Terminal_OS Portfolio 💻

> An interactive, personal portfolio for reincarnation.

## Overview

This project is a web-based portfolio designed to look and function like a classic CRT terminal. It abandons the traditional scrolling webpage format in favor of a command-line interface where users interact with my professional profile, skills, and projects through typed commands.

## Features

- **Interactive CLI:** Navigate the portfolio using commands (e.g., `whoami`, `projects`, `skills`, `clear`).
- **Retro Aesthetics:** Custom CSS scanlines, text-shadow glowing effects, and a dynamic Matrix digital rain background rendered on an HTML5 `<canvas>`.
- **Modular Architecture:** Clean separation of concerns. Data is decoupled from logic, allowing easy content updates without modifying the core engine.

## Project Structure

```bash
/
├── LICENSE # Project license
├── README.md # Project documentation
├── index.html # Main DOM structure and UI layout
├── app.js # Core terminal engine and input handling
├── matrix.js # Canvas animation logic for the background
├── script.js # Legacy logic script (initial iteration)
└── style.css # CRT effects, terminal styling, and animations
```

## Quick Start

1. Clone the repository:

   ```bash
   git clone git@github.com:YourUsername/whoami_reincarnation.git
   ```

2. Open `index.html` in any modern web browser.
3. Type `help` in the terminal prompt and press **Enter** to see available commands.

## Tech Stack

- **Frontend:** HTML5, CSS3 (CSS Variables, Keyframe Animations)
- **Logic:** Vanilla JavaScript (ES6+)
- **Environment:** Developed on Windows / WSL2 (Ubuntu)
