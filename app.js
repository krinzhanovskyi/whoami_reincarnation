document.addEventListener("DOMContentLoaded", () => {
  const outputDiv = document.getElementById("output");
  const inputLine = document.getElementById("input-line");

  const commandSequence = [
    "whoami",
    "about",
    "skills",
    "education",
    "projects",
    "hobbies",
    "contact",
  ];

  let startDelay = 1500;

  function typeCommand(cmdText, textElement, cursorElement, callback) {
    let i = 0;

    const typeInterval = setInterval(
      () => {
        textElement.textContent += cmdText.charAt(i);
        i++;

        window.scrollTo(0, document.body.scrollHeight);

        if (i >= cmdText.length) {
          clearInterval(typeInterval);
          setTimeout(callback, 400);
        }
      },
      50 + Math.random() * 60,
    );
  }

  function processSequence(index) {
    if (index >= commandSequence.length) {
      inputLine.style.display = "flex";
      window.scrollTo(0, document.body.scrollHeight);
      return;
    }

    const currentCmd = commandSequence[index];
    const outputData = PortfolioData[currentCmd];

    const cmdBlock = document.createElement("div");
    cmdBlock.style.display = "flex";
    cmdBlock.style.alignItems = "center";
    cmdBlock.innerHTML = `
            <span class="prompt">root@alex-dev:~#</span>
            <span class="cmd-text" style="color: #fff; margin-right: 2px;"></span>
            <span class="cursor active-cursor">_</span>
        `;
    outputDiv.appendChild(cmdBlock);

    const cmdTextContainer = cmdBlock.querySelector(".cmd-text");
    const activeCursor = cmdBlock.querySelector(".active-cursor");

    typeCommand(currentCmd, cmdTextContainer, activeCursor, () => {
      activeCursor.remove();

      if (outputData) {
        const outBlock = document.createElement("div");
        outBlock.className = "output-text";
        outBlock.innerHTML = outputData.replace(/\n/g, "<br>");
        outputDiv.appendChild(outBlock);
      }

      window.scrollTo(0, document.body.scrollHeight);

      // Pause before processing the next command
      setTimeout(() => {
        processSequence(index + 1);
      }, 1200);
    });
  }

  // Запускаем шоу
  setTimeout(() => {
    processSequence(0);
  }, startDelay);
});
