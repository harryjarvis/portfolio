const flags = ["uk.png", "es.jpg", "fr.png"];
const languages = ["en", "es", "fr"];
let currentIndex = 0;

const flagIcon = document.getElementById("flag-icon");
const button = document.getElementById("lang-toggle");

const translations = {
    en: {
      about: "about",
      projects: "projects",
      media: "media",
      role: "junior web developer <span style='color: #43a25a;'>•</span>",
      bio: `Hey, I'm <span style='color: #43a25a;'>Harry!</span> 
            Currently pursuing my Master's in CS, <br style='margin: 4px;'>passionate about creating
            satisfying web experiences.
            <br style='margin: 4px;'>
            This is my portfolio and personal website, with all my <span style='color: #43a25a;'>work</span>, 
            <br style='margin: 4px;'><span style='color: #43a25a;'>experiences</span>
            and cool other stuff. You can grab a copy of my resume <span class="pointer" style='color: #43a25a; text-decoration: underline;'>here.</span>`,
        stack: "stack<span style='font-size: 0.7rem;'>(wip)</span>",
        copied: "copied!",
    },
    es: {
      about: "sobre",
      projects: "proyectos",
      media: "medios",
      role: "desarrollador web júnior <span style='color: #43a25a;'>•</span>",
      bio: `Hey, soy <span style='color: #43a25a;'>Harry!</span> Actualmente estoy cursando mi máster en informática, <br style='margin: 4px;'>apasionado por crear experiencias web satisfactorias.
            <br style='margin: 4px;'>
            Este es mi portafolio y sitio web personal, con todo mi <span style='color: #43a25a;'>trabajo</span>, 
            <br style='margin: 4px;'><span style='color: #43a25a;'>experiencia</span>
            y otras cosas geniales. Puedes obtener una copia de mi currículum <a href="/resume.pdf"><span class="pointer" style='color: #43a25a; text-decoration: underline;'>aquí.</span></a>`,
      stack: "stack tecnológico<span style='font-size: 0.7rem;'>(wip)</span>",
      copied: "¡Copiado!",
    },
    fr: {
      about: "à propos",
      projects: "projets",
      media: "médias",
      role: "développeur web junior <span style='color: #43a25a;'>•</span>",
      bio: `Salut, je suis <span style='color: #43a25a;'>Harry!</span> 
            Actuellement en master d'informatique, <br style='margin: 4px;'>passionné par la création
            d'expériences web enrichissantes.
            <br style='margin: 4px;'>
            Ceci est mon portfolio et site personnel, avec tout mon <span style='color: #43a25a;'>travail</span>,
            <br style='margin: 4px;'><span style='color: #43a25a;'>expérience</span>
            et d'autres choses intéressantes. Vous pouvez obtenir une copie de mon CV <a href="/resume.pdf"><span class="pointer" style='color: #43a25a; text-decoration: underline;'>ici.</span></a>`,
    stack: "stack technologique<span style='font-size: 0.7rem;'>(wip)</span>",
    copied: "Copié!",
    },
  };
  

function updateText(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = translations[lang] [key];
    });
}

button.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flags.length;
  const lang = languages[currentIndex];
  flagIcon.src = `flags/${flags[currentIndex]}`;
  updateText(lang);
});

// Email Clipboard API script

  function copyEmail() {
    const email = "harryjarvis32@gmail.com"; // Stored only in JS

    // Use Clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => {
        showCopiedMessage();
      }).catch(err => {
        console.error("Clipboard write failed", err);
      });
    } else {
      // Fallback for older browsers
      const tempInput = document.createElement("input");
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      showCopiedMessage();
    }
  }

  function showCopiedMessage() {
    const msg = document.querySelector(".email-popup");
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 1500);
  }