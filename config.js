const PortfolioData = {
  whoami:
    "Name: Oleksandr Krizhanovskyi (Alex)\nRole: Application Developer Apprentice\nLocation: Zurich, Switzerland",

  about: `<strong>> SUMMARY</strong>
I’m an Application Development apprentice at Neue Zürcher Zeitung AG (NZZ) based in Zurich, Switzerland[cite: 3]. 
I’m passionate about Python programming, backend architecture, and exploring artificial intelligence, desktop tools, and data analysis[cite: 3]. 
With a experience in building small analytical projects and managing active technical communities, I enjoy solving practical engineering challenges and writing code[cite: 3].`,

  skills: `<strong>> TECHNICAL SKILLS</strong>
<ul>
    <li><strong>Languages:</strong> Python, JavaScript, SQL, HTML/CSS[cite: 3]</li>
    <li><strong>Backend & Networking:</strong> TCP/IP Socket Programming, Multithreading, REST APIs[cite: 3]</li>
    <li><strong>GUI & Automation:</strong> PyQt6, CustomTkinter, Desktop Automation[cite: 3]</li>
    <li><strong>Data & AI:</strong> Linear Regression, Pandas, NumPy, Prompt Engineering[cite: 3]</li>
    <li><strong>Tools & Environments:</strong> Git & GitHub, VS Code, Filius, Docker, WSL, Windows[cite: 3]</li>
    <li><strong>Community & Collaboration:</strong> Technical Community Management (Discord, Telegram)[cite: 3]</li>
</ul>`,

  education: `<strong>> ACADEMIC & PROFESSIONAL TRAINING</strong>
<ul>
    <li><strong>VET Apprenticeship: Application Developer (Informatiker EFZ)</strong><br>
    Neue Zürcher Zeitung AG (NZZ) <em>(In cooperation with BBW & ZLI)</em><br>
    Zurich, Switzerland | 2026 - Present[cite: 4]</li>
    <br>
    <li><strong>10th School Year (Technology & Computer Science)</strong><br>
    Fachschule Viventa<br>
    Zurich, Switzerland | 2025 - 2026[cite: 4]</li>
    <br>
    <li><strong>Secondary School (Sekundarstufe)</strong><br>
    Schule Im Birch<br>
    Zurich, Switzerland | 2023 - 2025[cite: 4]</li>
</ul>`,

  projects: `<strong>> NOTABLE PROJECTS</strong>
<ul>
    <li><strong>Discord Server for Web3 Community (Mar - Aug 2025)</strong><br>
    Managed a technical Discord server, boosting active participation by 50%. Implemented automated moderation tools, gamified rewards, and blockchain integrations.</li>
    
    <li><strong>Discord To-do Bot (May 2025)</strong><br>
    Developed a Python bot for task management using Discord Commands and integrated an SQLite database for reliable task storage and automatic reminders.</li>
    
    <li><strong>Backend Basics Python (Nov 2024 - Jan 2025)</strong><br>
    Mastered TCP server-client communication, multithreading, error handling, and network programming to build foundational real-world networked applications.</li>
    
    <li><strong>Inflation Analysis Project (Oct - Nov 2024)</strong><br>
    Analyzed inflation and GDP trends using Python, Pandas, and linear regression[cite: 3].</li>
</ul>`,

  contact: `<strong>> GET IN TOUCH</strong>
Feel free to reach out![cite: 4]
<ul>
    <li><strong>Email:</strong> <a href="mailto:krizhanovskyi.gmail" style="color: #88ffaa;">krizhanovskyi.gmail</a>[cite: 4]</li>
    <li><strong>Telegram:</strong> <a href="https://t.me/krizhanovskyi.telegram" style="color: #88ffaa;" target="_blank">krizhanovskyi.telegram</a>[cite: 4]</li>
    <li><strong>Discord:</strong> krizhanovskyi.discord[cite: 4]</li>
    <li><strong>GitHub:</strong> <a href="https://github.com/YourUsername" style="color: #88ffaa;" target="_blank">github.com/YourUsername</a></li>
</ul>`,

  hobbies: `<strong>> OFF-SCREEN (Interests)</strong>
- <strong>Cycling:</strong> Road cycling (Trek Madone 5.9, PR: 200km) and Freeride (Specialized SX Trail).
- <strong>Mechanics:</strong> PC building and complete self-servicing of bicycles (brake bleeding, suspension overhauls).`,
};

const AvailableCommands = Object.keys(PortfolioData).concat(["clear", "help"]);
