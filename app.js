document.addEventListener("DOMContentLoaded", () => {
  const subtitleText =
    "Applikationsentwickler EFZ @ | Neue Zürcher Zeitung AG | Zürich, Switzerland";
  const targetElement = document.getElementById("typing-subtitle");
  const cursor = document.getElementById("main-cursor");
  let currentIndex = 0;

  function typeWriter() {
    if (currentIndex < subtitleText.length) {
      targetElement.textContent += subtitleText.charAt(currentIndex);
      currentIndex++;

      let speed = 25 + Math.random() * 35;
      const char = subtitleText.charAt(currentIndex - 1);
      if (char === "@" || char === "|") {
        speed += 200;
      }
      setTimeout(typeWriter, speed);
    } else {
      cursor.style.animation = "blink 1s step-end infinite";
    }
  }

  setTimeout(typeWriter, 700);
});
