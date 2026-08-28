const translations = {
  fr: {
    "nav.projects": "Projets",

    "project.back": "← Retour aux projets",
    "project.category": "NLP · Machine learning · Projet académique",
    "project.title": "Classification de données sociales",
    "project.introduction":
      "Comparaison de plusieurs approches de classification textuelle pour détecter automatiquement les discours haineux, sexistes ou discriminatoires dans des contenus issus des réseaux sociaux.",
    "project.github": "Voir le code sur GitHub",
    "project.report": "Lire le rapport",
    "project.caseStudy": "Découvrir le projet",

    "metadata.period": "Période",
    "metadata.context": "Contexte",
    "metadata.contextValue": "TER — Master 1 DCI",
    "metadata.role": "Rôle",
    "metadata.roleValue": "Expérimentation NLP",
    "metadata.type": "Type",
    "metadata.typeValue": "Benchmark de modèles",

    "summary.title": "Sommaire",
    "summary.context": "Le contexte",
    "summary.objective": "Les objectifs",
    "summary.methodology": "La méthodologie",
    "summary.pipeline": "Le pipeline",
    "summary.results": "Les résultats",
    "summary.lessons": "Enseignements",

    "context.title": "Le contexte",
    "context.p1":
      "Les réseaux sociaux produisent un volume important de textes courts, spontanés et peu structurés. Leur analyse peut aider à identifier des signaux faibles, mais aussi à automatiser la détection de contenus haineux, sexistes ou discriminatoires.",
    "context.p2":
      "Réalisé dans le cadre d’un TER de Master 1, ce projet étudie plusieurs méthodes adaptées au français. AngryBERT a été étudié comme approche spécialisée dans l’état de l’art, tandis que le benchmark expérimental confronte principalement CamemBERT à des modèles classiques.",

    "objective.title": "Les objectifs",
    "objective.card1Title": "Comparer les modèles",
    "objective.card1Text":
      "Mesurer les performances de SVM, Random Forest, XGBoost et CamemBERT sur plusieurs corpus francophones.",
    "objective.card2Title": "Évaluer les compromis",
    "objective.card2Text":
      "Mettre en regard précision, robustesse et temps d’exécution afin d’identifier les approches les plus pertinentes.",
    "objective.card3Title": "Tester les émotions",
    "objective.card3Text":
      "Vérifier si des annotations comme la colère, la peur ou la tristesse améliorent la détection des contenus problématiques.",

    "methodology.title": "La méthodologie",
    "methodology.text":
      "La comparaison a été menée sur plusieurs jeux de données de tailles et de niveaux de difficulté très différents. Les mêmes étapes de préparation et d’évaluation ont été appliquées afin d’obtenir une lecture cohérente des performances.",
    "methodology.feature1Title": "Corpus variés",
    "methodology.feature1Text":
      "Tweets haineux, commentaires Reddit toxiques, corpus EmoTyC, textes sexistes et petit corpus de contenus extrémistes.",
    "methodology.feature2Title": "Prétraitement textuel",
    "methodology.feature2Text":
      "Nettoyage, séparation des textes et des étiquettes, puis transformation en représentations Bag of Words ou TF-IDF.",
    "methodology.feature3Title": "Modélisation",
    "methodology.feature3Text":
      "Entraînement de modèles classiques avec scikit-learn et XGBoost, puis fine-tuning de CamemBERT avec TensorFlow.",
    "methodology.feature4Title": "Évaluation commune",
    "methodology.feature4Text":
      "Comparaison de l’accuracy et du temps d’exécution, avec une attention particulière portée à la taille et à la qualité des données disponibles.",

    "pipeline.title": "Le pipeline expérimental",
    "pipeline.dataLabel": "Données",
    "pipeline.dataText":
      "Nettoyage, reconstruction des labels et séparation des jeux d’entraînement et de test",
    "pipeline.modelsLabel": "Modèles",
    "pipeline.modelsText":
      "Vectorisation BoW ou TF-IDF, ou tokenisation Transformer et fine-tuning",
    "pipeline.evaluationLabel": "Évaluation",
    "pipeline.evaluationText":
      "Analyse comparative des performances, des coûts de calcul et de la robustesse",

    "results.title": "Les résultats principaux",
    "results.text":
      "CamemBERT obtient les meilleurs scores globaux sur les corpus suffisamment riches, tandis que les modèles classiques restent très rapides et parfois proches en précision. Les expériences montrent également que l’enrichissement émotionnel ne produit pas de gain significatif dans ce cadre.",

    "lessons.title": "Ce que ce projet m'a appris",
    "lessons.text":
      "Ce TER m’a permis de construire un protocole expérimental complet en NLP, de comparer des familles de modèles très différentes et d’interpréter les résultats au-delà d’un simple score de précision.",
    "lessons.item1":
      "Concevoir un pipeline reproductible de classification textuelle",
    "lessons.item2":
      "Fine-tuner un Transformer français avec des ressources limitées",
    "lessons.item3":
      "Comparer précision, rapidité et coût computationnel",
    "lessons.item4":
      "Mesurer l’impact de la taille et de la qualité des corpus",
    "lessons.item5":
      "Questionner la valeur réelle de variables émotionnelles ajoutées",

    "next.label": "Projet suivant",
    "next.title": "Prédiction de tsunami",

    "footer.back": "Retour aux projets ↑"
  },

  en: {
    "nav.projects": "Projects",

    "project.back": "← Back to projects",
    "project.category": "NLP · Machine learning · Academic project",
    "project.title": "Social Data Classification",
    "project.introduction":
      "A comparison of several text-classification approaches designed to automatically detect hateful, sexist or discriminatory language in social-media content.",
    "project.github": "View code on GitHub",
    "project.report": "Read the report",
    "project.caseStudy": "Explore the project",

    "metadata.period": "Period",
    "metadata.context": "Context",
    "metadata.contextValue": "Research project — M1 DCI",
    "metadata.role": "Role",
    "metadata.roleValue": "NLP experimentation",
    "metadata.type": "Type",
    "metadata.typeValue": "Model benchmark",

    "summary.title": "Contents",
    "summary.context": "Context",
    "summary.objective": "Objectives",
    "summary.methodology": "Methodology",
    "summary.pipeline": "Pipeline",
    "summary.results": "Results",
    "summary.lessons": "Key learnings",

    "context.title": "Context",
    "context.p1":
      "Social networks generate a large volume of short, spontaneous and weakly structured texts. Analysing them can help identify weak signals and automate the detection of hateful, sexist or discriminatory content.",
    "context.p2":
      "Completed as a first-year master's research project, this study explores several methods designed for French. AngryBERT was reviewed as a specialised approach in the literature, while the experimental benchmark mainly compares CamemBERT with classical models.",

    "objective.title": "Objectives",
    "objective.card1Title": "Compare models",
    "objective.card1Text":
      "Measure the performance of SVM, Random Forest, XGBoost and CamemBERT across several French-language datasets.",
    "objective.card2Title": "Assess trade-offs",
    "objective.card2Text":
      "Compare accuracy, robustness and execution time to identify the most relevant approaches.",
    "objective.card3Title": "Test emotion features",
    "objective.card3Text":
      "Evaluate whether annotations such as anger, fear or sadness improve the detection of problematic content.",

    "methodology.title": "Methodology",
    "methodology.text":
      "The comparison was conducted on datasets with very different sizes and difficulty levels. The same preparation and evaluation steps were applied to obtain a consistent view of model performance.",
    "methodology.feature1Title": "Diverse datasets",
    "methodology.feature1Text":
      "Hateful tweets, toxic Reddit comments, the EmoTyC corpus, sexist texts and a very small extremist-content dataset.",
    "methodology.feature2Title": "Text preprocessing",
    "methodology.feature2Text":
      "Cleaning, separating texts from labels, then converting the content into Bag of Words or TF-IDF representations.",
    "methodology.feature3Title": "Modelling",
    "methodology.feature3Text":
      "Training classical models with scikit-learn and XGBoost, then fine-tuning CamemBERT with TensorFlow.",
    "methodology.feature4Title": "Common evaluation",
    "methodology.feature4Text":
      "Comparison of accuracy and execution time, while accounting for the size and quality of the available data.",

    "pipeline.title": "Experimental pipeline",
    "pipeline.dataLabel": "Data",
    "pipeline.dataText":
      "Cleaning, label reconstruction and train-test splitting",
    "pipeline.modelsLabel": "Models",
    "pipeline.modelsText":
      "BoW or TF-IDF vectorisation, or Transformer tokenisation and fine-tuning",
    "pipeline.evaluationLabel": "Evaluation",
    "pipeline.evaluationText":
      "Comparative analysis of performance, computational cost and robustness",

    "results.title": "Main results",
    "results.text":
      "CamemBERT achieves the best overall scores on sufficiently rich datasets, while classical models remain extremely fast and sometimes close in accuracy. The experiments also show that emotion enrichment does not provide a significant benefit in this setting.",

    "lessons.title": "What I learned",
    "lessons.text":
      "This research project taught me how to build a complete NLP experimental protocol, compare very different model families and interpret results beyond a single accuracy score.",
    "lessons.item1":
      "Build a reproducible text-classification pipeline",
    "lessons.item2":
      "Fine-tune a French Transformer with limited resources",
    "lessons.item3":
      "Compare accuracy, speed and computational cost",
    "lessons.item4":
      "Measure the impact of dataset size and quality",
    "lessons.item5":
      "Challenge the actual value of additional emotion features",

    "next.label": "Next project",
    "next.title": "Tsunami Prediction",

    "footer.back": "Back to projects ↑"
  }
};


const root = document.documentElement;
const languageButton = document.querySelector(".language-toggle");
const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeColor = document.querySelector('meta[name="theme-color"]');

let language =
  localStorage.getItem("portfolio-language") || "fr";

let theme =
  localStorage.getItem("portfolio-theme") ||
  (
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  );


function updateGalleryAccessibility() {
  const languageKey = language === "fr" ? "Fr" : "En";

  document.querySelectorAll(".gallery-thumbnail").forEach((thumbnail) => {
    const ariaLabel = thumbnail.dataset[`aria${languageKey}`];
    const altText = thumbnail.dataset[`alt${languageKey}`];
    const thumbnailImage = thumbnail.querySelector("img");

    if (ariaLabel) {
      thumbnail.setAttribute("aria-label", ariaLabel);
    }

    // Affiche la description au survol
    if (altText) {
      thumbnail.setAttribute("title", altText);
    }

    // Met également à jour le texte alternatif de la miniature
    if (thumbnailImage && altText) {
      thumbnailImage.alt = altText;
    }
  });

  const activeThumbnail =
    document.querySelector(".gallery-thumbnail.active");

  const mainGalleryImage =
    document.querySelector("#gallery-main-image");

  const activeAlt =
    activeThumbnail?.dataset[`alt${languageKey}`];

  if (mainGalleryImage && activeAlt) {
    mainGalleryImage.alt = activeAlt;
  }
}


function applyLanguage(nextLanguage) {
  language = nextLanguage;
  root.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation =
      translations[language]?.[element.dataset.i18n];

    if (translation) {
      element.textContent = translation;
    }
  });

  if (languageButton) {
    languageButton.textContent =
      language === "fr" ? "EN" : "FR";

    languageButton.setAttribute(
      "aria-label",
      language === "fr"
        ? "Switch website to English"
        : "Passer le site en français"
    );
  }

  updateGalleryAccessibility();
  localStorage.setItem("portfolio-language", language);
}


function applyTheme(nextTheme) {
  theme = nextTheme;
  root.dataset.theme = theme;

  if (themeIcon) {
    themeIcon.textContent =
      theme === "dark" ? "☼" : "☾";
  }

  if (themeColor) {
    themeColor.setAttribute(
      "content",
      theme === "dark" ? "#070b14" : "#f5f7fb"
    );
  }

  localStorage.setItem("portfolio-theme", theme);
}


applyLanguage(language);
applyTheme(theme);


languageButton?.addEventListener("click", () => {
  applyLanguage(language === "fr" ? "en" : "fr");
});


themeButton?.addEventListener("click", () => {
  applyTheme(theme === "dark" ? "light" : "dark");
});


/* Galerie interactive */

const mainGalleryImage =
  document.querySelector("#gallery-main-image");

const galleryThumbnails =
  document.querySelectorAll(".gallery-thumbnail");

galleryThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const image = thumbnail.dataset.image;
    const languageKey = language === "fr" ? "Fr" : "En";
    const alt = thumbnail.dataset[`alt${languageKey}`];

    if (!mainGalleryImage || !image) {
      return;
    }

    mainGalleryImage.src = image;
    mainGalleryImage.alt = alt || "";

    galleryThumbnails.forEach((button) => {
      button.classList.remove("active");
    });

    thumbnail.classList.add("active");
  });
});


/* Navigation active du sommaire */

const summaryLinks = [
  ...document.querySelectorAll(
    '.case-study-navigation a[href^="#"]'
  )
];

const summarySections = summaryLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateActiveSummaryLink() {
  if (!summarySections.length) {
    return;
  }

  const detectionPosition = window.innerHeight * 0.35;
  let activeSection = summarySections[0];

  summarySections.forEach((section) => {
    if (section.getBoundingClientRect().top <= detectionPosition) {
      activeSection = section;
    }
  });

  summaryLinks.forEach((link) => {
    const isActive =
      link.getAttribute("href") === `#${activeSection.id}`;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("scroll", updateActiveSummaryLink, {
  passive: true
});

window.addEventListener("resize", updateActiveSummaryLink);

updateActiveSummaryLink();


/* Année automatique */

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* Carrousel principal */

if (typeof Swiper !== "undefined") {
  new Swiper(".project-cover-frame", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  });
}


/* Animations au défilement */

const animatedElements = document.querySelectorAll(`
  .project-hero-content,
  .project-metadata,
  .project-cover-frame,
  .case-study-navigation,
  .content-section h2,
  .content-section > p,
  .objective-card,
  .feature-item,
  .architecture-block,
  .project-gallery,
  .lessons-list li,
  .next-project-link
`);

animatedElements.forEach((element) => {
  element.classList.add("scroll-animation");
});

if ("IntersectionObserver" in window) {
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    },
    {
      threshold: 0.1,
      rootMargin: "+2% 0px -5% 0px"
    }
  );

  animatedElements.forEach((element) => {
    animationObserver.observe(element);
  });
} else {
  animatedElements.forEach((element) => {
    element.classList.add("visible");
  });
}


/* Bordure de l'en-tête au défilement */

const projectHeader = document.querySelector(".project-header");

function updateHeaderBorder() {
  projectHeader?.classList.toggle("scrolled", window.scrollY > 0);
}

window.addEventListener("scroll", updateHeaderBorder, {
  passive: true
});

updateHeaderBorder();
