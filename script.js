// Typing Effect

const text = ["Data Analyst", "SQL Specialist", "Dashboard Creator", "BI Enthusiast"];

let i = 0, j = 0;

const speed = 150;

const typingText = document.getElementById("typing-text");

function type() {

  if (j < text[i].length) {

    typingText.textContent += text[i][j];

    j++;

    setTimeout(type, speed);

  } else {

    setTimeout(erase, 1000);

  }

}

function erase() {

  if (j > 0) {

    typingText.textContent = text[i].substring(0, j-1);

    j--;

    setTimeout(erase, speed/2);

  } else {

    i = (i+1) % text.length;

    setTimeout(type, speed);

  }

}

document.addEventListener("DOMContentLoaded", type);

// Project Filter

function filterProjects(category) {

  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {

    if (category === "all" || project.classList.contains(category)) {

      project.classList.remove("hidden");

    } else {

      project.classList.add("hidden");

    }

  });

}