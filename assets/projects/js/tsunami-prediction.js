const translations = {
  fr: {
    "header.homeAria": "Retour à l'accueil",
    "nav.projectAria": "Navigation du projet",
    "nav.projects": "Projets",
    "theme.toggleAria": "Changer le thème",
    "project.back": "← Retour aux projets",
    "project.category": "Data Science · Classification supervisée & données déséquilibrées",
    "project.title": "Détection de séismes océaniques",
    "project.introduction": "Conception d'un pipeline complet pour explorer des données sismiques, traiter une classe extrêmement rare et comparer plusieurs stratégies de modélisation avec une lecture critique des performances.",
    "project.disclaimer": "La variable « tsunami » est utilisée comme classe d'événement sismique océanique important. Le projet ne simule ni la vague, ni sa propagation, et ne constitue pas un système d'alerte.",
    "project.tagsAria": "Technologies utilisées",
    "project.github": "Voir le projet sur GitHub",
    "project.caseStudy": "Découvrir l'étude",
    "metadata.type": "Type",
    "metadata.typeValue": "Classification binaire",
    "metadata.challenge": "Défi principal",
    "metadata.challengeValue": "Classe positive extrêmement rare",
    "metadata.role": "Rôle",
    "metadata.roleValue": "Analyse, modélisation & évaluation",
    "metadata.models": "Modèles",
    "metadata.modelsValue": "Random Forest, SVM & XGBoost",
    "cover.sectionAria": "Aperçu de l'analyse",
    "cover.caption": "Exploration des relations entre magnitude, position, profondeur, distance à la côte et variable cible.",
    "images.correlationMatrix": "Matrice de corrélation des variables sismiques",
    "summary.title": "Sommaire",
    "summary.context": "Le défi",
    "summary.objective": "Les compétences",
    "summary.solution": "La méthode",
    "summary.results": "Les résultats",
    "summary.gallery": "Les visualisations",
    "summary.lessons": "Enseignements",
    "context.title": "Construire un modèle sur un signal rare",
    "context.p1": "Le projet part d'un problème particulièrement exigeant en data science : identifier une classe positive très rare au sein de plusieurs centaines de milliers d'événements sismiques. Dans ce contexte, une accuracy élevée peut être obtenue sans produire un modèle réellement utile.",
    "context.p2": "Mon travail a donc consisté à structurer l'analyse autour du déséquilibre des classes, à tester plusieurs techniques d'échantillonnage et à comparer les modèles avec des métriques détaillées pour chaque classe.",
    "context.scopeAria": "Enjeux du projet",
    "context.challengeLabel": "Défi data",
    "context.challengeTitle": "Détecter l'exception dans la masse",
    "context.challengeText": "La classe positive représente environ 0,045 % des observations visibles dans la matrice de confusion.",
    "context.valueLabel": "Valeur du projet",
    "context.valueTitle": "Faire des choix de modèle argumentés",
    "context.valueText": "L'objectif n'est pas d'afficher un score flatteur, mais de comprendre les compromis entre détection, faux positifs et généralisation.",
    "objective.title": "Les compétences mobilisées",
    "objective.card1Title": "Explorer et préparer",
    "objective.card1Text": "Étudier les corrélations, sélectionner les variables et préparer magnitude, coordonnées, profondeur et distance à la côte.",
    "objective.card2Title": "Traiter le déséquilibre",
    "objective.card2Text": "Comparer RandomOverSampler, SMOTE et plusieurs méthodes de sous-échantillonnage pour rendre l'apprentissage plus pertinent.",
    "objective.card3Title": "Évaluer avec discernement",
    "objective.card3Text": "Lire précision, rappel, F1-score et matrice de confusion par classe plutôt que de s'arrêter à l'accuracy globale.",
    "solution.title": "Un benchmark conçu pour le déséquilibre",
    "solution.text": "La démarche combine analyse exploratoire, rééquilibrage du jeu d'entraînement et comparaison de plusieurs familles de modèles. Chaque expérimentation est évaluée séparément sur les classes 0 et 1 afin de rendre visibles les compromis que masquerait une métrique unique.",
    "solution.feature1Title": "Analyse exploratoire",
    "solution.feature1Text": "Construction d'une matrice de corrélation et étude ciblée des relations entre les variables explicatives et la classe « tsunami ».",
    "solution.feature2Title": "Stratégies d'échantillonnage",
    "solution.feature2Text": "Test d'un apprentissage sans correction, du sur-échantillonnage aléatoire, de SMOTE et de deux approches de sous-échantillonnage.",
    "solution.feature3Title": "Comparaison de modèles",
    "solution.feature3Text": "Benchmark de Random Forest, SVM et XGBoost afin d'observer leur comportement face à une cible rare.",
    "solution.feature4Title": "Analyse des erreurs",
    "solution.feature4Text": "Lecture détaillée des vrais positifs, faux négatifs et faux positifs pour juger l'utilité réelle du modèle.",
    "results.title": "Interpréter au-delà de l'accuracy",
    "results.introduction": "La matrice de confusion fournie met en évidence le cœur du problème : le modèle retrouve la majorité des événements positifs, mais la rareté extrême de cette classe transforme un faible taux de faux positifs en plusieurs milliers de prédictions positives erronées.",
    "results.metricsAria": "Indicateurs calculés à partir de la matrice de confusion",
    "results.metric1Label": "Part de la classe positive",
    "results.metric1Text": "382 événements positifs sur 840 462 observations.",
    "results.metric2Label": "Rappel de la classe positive",
    "results.metric2Text": "366 événements détectés et 16 manqués.",
    "results.metric3Label": "Précision de la classe positive",
    "results.metric3Text": "La majorité des prédictions positives sont des faux positifs.",
    "results.metric4Label": "Accuracy globale",
    "results.metric4Text": "Un score élevé qui masque le déséquilibre du problème.",
    "results.takeawayLabel": "Lecture data science",
    "results.takeawayText": "Le projet démontre qu'un modèle ne se choisit pas sur son accuracy seule. Sur une cible rare, il faut arbitrer entre rappel, précision et coût des faux positifs, puis relier ces métriques au besoin réel.",
    "gallery.title": "Les résultats en images",
    "gallery.introduction": "Ces visualisations retracent l'analyse : relations entre variables, comparaison des expériences de rééquilibrage et lecture des erreurs du modèle.",
    "gallery.buttonsAria": "Choisir une visualisation",
    "gallery.button1Aria": "Afficher la matrice de corrélation",
    "gallery.button2Aria": "Afficher la comparaison des modèles",
    "gallery.button3Aria": "Afficher les corrélations avec la cible",
    "gallery.button4Aria": "Afficher la matrice de confusion",
    "gallery.caption1": "Matrice de corrélation : exploration des relations entre les variables du jeu de données.",
    "gallery.caption2": "Benchmark : comparaison de Random Forest, SVM et XGBoost avec plusieurs méthodes de rééquilibrage.",
    "gallery.caption3": "Corrélation avec la cible : les relations linéaires restent très faibles et justifient l'exploration de modèles non linéaires.",
    "gallery.caption4": "Matrice de confusion : analyse des vrais négatifs, faux positifs, faux négatifs et vrais positifs.",
    "lessons.title": "Ce que ce projet démontre",
    "lessons.text": "Au-delà du modèle, ce projet met en avant ma capacité à construire une démarche expérimentale complète, à identifier les pièges d'un jeu de données déséquilibré et à transformer des résultats techniques en conclusions compréhensibles et argumentées.",
    "lessons.item1": "Analyser un problème de classification rare sans se laisser tromper par l'accuracy",
    "lessons.item2": "Mettre en place et comparer plusieurs stratégies de rééquilibrage",
    "lessons.item3": "Benchmarker plusieurs familles de modèles avec des métriques par classe",
    "lessons.item4": "Interpréter une matrice de confusion et expliciter les compromis du modèle",
    "lessons.limitLabel": "Périmètre de la démonstration",
    "lessons.limitText": "Le modèle classe des événements à partir de données sismiques. Il ne modélise pas les mécanismes physiques nécessaires à une prévision opérationnelle de tsunami.",
    "next.label": "Projet suivant",
    "next.title": "Stephen Curry & le tir à trois points",
    "footer.back": "Retour aux projets ↑"
  },
  en: {
    "header.homeAria": "Back to home",
    "nav.projectAria": "Project navigation",
    "nav.projects": "Projects",
    "theme.toggleAria": "Change theme",
    "project.back": "← Back to projects",
    "project.category": "Data Science · Supervised classification & imbalanced data",
    "project.title": "Oceanic earthquake detection",
    "project.introduction": "Design of a complete pipeline to explore seismic data, handle an extremely rare class, and compare several modeling strategies through a critical reading of performance.",
    "project.disclaimer": "The “tsunami” feature is used as a class for significant oceanic seismic events. The project does not simulate a wave or its propagation and is not a warning system.",
    "project.tagsAria": "Technologies used",
    "project.github": "View the project on GitHub",
    "project.caseStudy": "Explore the study",
    "metadata.type": "Type",
    "metadata.typeValue": "Binary classification",
    "metadata.challenge": "Main challenge",
    "metadata.challengeValue": "Extremely rare positive class",
    "metadata.role": "Role",
    "metadata.roleValue": "Analysis, modeling & evaluation",
    "metadata.models": "Models",
    "metadata.modelsValue": "Random Forest, SVM & XGBoost",
    "cover.sectionAria": "Analysis preview",
    "cover.caption": "Exploring relationships between magnitude, location, depth, distance to shore, and the target variable.",
    "images.correlationMatrix": "Correlation matrix of seismic variables",
    "summary.title": "Contents",
    "summary.context": "Challenge",
    "summary.objective": "Skills",
    "summary.solution": "Method",
    "summary.results": "Results",
    "summary.gallery": "Visualizations",
    "summary.lessons": "Key learnings",
    "context.title": "Building a model around a rare signal",
    "context.p1": "The project starts with a particularly demanding data-science problem: identifying a very rare positive class among several hundred thousand seismic events. In this setting, high accuracy can be achieved without producing a genuinely useful model.",
    "context.p2": "I therefore structured the analysis around class imbalance, tested several sampling techniques, and compared models using detailed metrics for each class.",
    "context.scopeAria": "Project challenges",
    "context.challengeLabel": "Data challenge",
    "context.challengeTitle": "Finding the exception in the mass",
    "context.challengeText": "The positive class accounts for roughly 0.045% of the observations shown in the confusion matrix.",
    "context.valueLabel": "Project value",
    "context.valueTitle": "Making evidence-based model choices",
    "context.valueText": "The goal is not to display a flattering score, but to understand the trade-offs between detection, false positives, and generalization.",
    "objective.title": "Skills demonstrated",
    "objective.card1Title": "Explore and prepare",
    "objective.card1Text": "Study correlations, select features, and prepare magnitude, coordinates, depth, and distance to shore.",
    "objective.card2Title": "Handle imbalance",
    "objective.card2Text": "Compare RandomOverSampler, SMOTE, and several undersampling methods to make learning more relevant.",
    "objective.card3Title": "Evaluate with judgment",
    "objective.card3Text": "Read precision, recall, F1-score, and the confusion matrix per class rather than relying on overall accuracy.",
    "solution.title": "A benchmark designed for imbalance",
    "solution.text": "The workflow combines exploratory analysis, training-set rebalancing, and a comparison of several model families. Each experiment is evaluated separately on classes 0 and 1 to reveal the trade-offs hidden by a single metric.",
    "solution.feature1Title": "Exploratory analysis",
    "solution.feature1Text": "Build a correlation matrix and specifically investigate relationships between explanatory features and the “tsunami” class.",
    "solution.feature2Title": "Sampling strategies",
    "solution.feature2Text": "Test uncorrected learning, random oversampling, SMOTE, and two undersampling approaches.",
    "solution.feature3Title": "Model comparison",
    "solution.feature3Text": "Benchmark Random Forest, SVM, and XGBoost to observe how they behave with a rare target.",
    "solution.feature4Title": "Error analysis",
    "solution.feature4Text": "Examine true positives, false negatives, and false positives to assess the model's actual usefulness.",
    "results.title": "Interpreting beyond accuracy",
    "results.introduction": "The supplied confusion matrix highlights the core problem: the model finds most positive events, but the extreme rarity of the class turns a low false-positive rate into several thousand incorrect positive predictions.",
    "results.metricsAria": "Indicators calculated from the confusion matrix",
    "results.metric1Label": "Positive-class share",
    "results.metric1Text": "382 positive events out of 840,462 observations.",
    "results.metric2Label": "Positive-class recall",
    "results.metric2Text": "366 events detected and 16 missed.",
    "results.metric3Label": "Positive-class precision",
    "results.metric3Text": "Most positive predictions are false positives.",
    "results.metric4Label": "Overall accuracy",
    "results.metric4Text": "A high score that hides the imbalance of the problem.",
    "results.takeawayLabel": "Data-science interpretation",
    "results.takeawayText": "The project shows that a model should not be selected on accuracy alone. With a rare target, recall, precision, and the cost of false positives must be balanced and connected to the real need.",
    "gallery.title": "Results in pictures",
    "gallery.introduction": "These visualizations trace the analysis: relationships between features, comparison of rebalancing experiments, and interpretation of model errors.",
    "gallery.buttonsAria": "Choose a visualization",
    "gallery.button1Aria": "Show the correlation matrix",
    "gallery.button2Aria": "Show the model comparison",
    "gallery.button3Aria": "Show correlations with the target",
    "gallery.button4Aria": "Show the confusion matrix",
    "gallery.caption1": "Correlation matrix: exploring relationships between the dataset's variables.",
    "gallery.caption2": "Benchmark: comparing Random Forest, SVM, and XGBoost with several rebalancing methods.",
    "gallery.caption3": "Target correlations: linear relationships remain very weak, supporting the exploration of nonlinear models.",
    "gallery.caption4": "Confusion matrix: analyzing true negatives, false positives, false negatives, and true positives.",
    "lessons.title": "What this project demonstrates",
    "lessons.text": "Beyond the model itself, this project highlights my ability to build a complete experimental workflow, identify the pitfalls of imbalanced data, and turn technical results into understandable, evidence-based conclusions.",
    "lessons.item1": "Analyze a rare-classification problem without being misled by accuracy",
    "lessons.item2": "Implement and compare several rebalancing strategies",
    "lessons.item3": "Benchmark several model families using per-class metrics",
    "lessons.item4": "Interpret a confusion matrix and explain model trade-offs",
    "lessons.limitLabel": "Demonstration scope",
    "lessons.limitText": "The model classifies events from seismic data. It does not model the physical mechanisms required for operational tsunami forecasting.",
    "next.label": "Next project",
    "next.title": "Stephen Curry & the three-point shot",
    "footer.back": "Back to projects ↑"
  }
};

const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Les préférences restent limitées à la session.
    }
  }
};

const root = document.documentElement;
const languageButton = document.querySelector(".language-toggle");
const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeColor = document.querySelector('meta[name="theme-color"]');
const mainGalleryImage = document.querySelector("#gallery-main-image");
const galleryCaption = document.querySelector("#gallery-caption");
const galleryThumbnails = [...document.querySelectorAll(".gallery-thumbnail")];

let currentLanguage = storage.get("portfolio-language") || "fr";
let currentTheme =
  storage.get("portfolio-theme") ||
  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

function updateGalleryText() {
  const activeThumbnail = document.querySelector(".gallery-thumbnail.active");
  if (!activeThumbnail || !mainGalleryImage) return;

  mainGalleryImage.alt =
    currentLanguage === "fr"
      ? activeThumbnail.dataset.altFr || ""
      : activeThumbnail.dataset.altEn || "";

  const captionKey = activeThumbnail.dataset.captionKey;
  const caption = translations[currentLanguage]?.[captionKey];
  if (galleryCaption && caption) galleryCaption.textContent = caption;
}

function applyLanguage(nextLanguage) {
  currentLanguage = translations[nextLanguage] ? nextLanguage : "fr";
  root.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = translations[currentLanguage]?.[element.dataset.i18n];
    if (translation) element.textContent = translation;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const translation = translations[currentLanguage]?.[element.dataset.i18nAria];
    if (translation) element.setAttribute("aria-label", translation);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const translation = translations[currentLanguage]?.[element.dataset.i18nAlt];
    if (translation) element.setAttribute("alt", translation);
  });

  if (languageButton) {
    languageButton.textContent = currentLanguage === "fr" ? "EN" : "FR";
    languageButton.setAttribute(
      "aria-label",
      currentLanguage === "fr" ? "Switch website to English" : "Passer le site en français"
    );
  }

  updateGalleryText();
  storage.set("portfolio-language", currentLanguage);
}

function applyTheme(nextTheme) {
  currentTheme = nextTheme === "light" ? "light" : "dark";
  root.dataset.theme = currentTheme;

  if (themeIcon) themeIcon.textContent = currentTheme === "dark" ? "☼" : "☾";
  if (themeColor) {
    themeColor.setAttribute("content", currentTheme === "dark" ? "#070b14" : "#f5f7fb");
  }

  storage.set("portfolio-theme", currentTheme);
}

applyLanguage(currentLanguage);
applyTheme(currentTheme);

languageButton?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "fr" ? "en" : "fr");
});

themeButton?.addEventListener("click", () => {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

/* Galerie interactive */

galleryThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const image = thumbnail.dataset.image;
    if (!mainGalleryImage || !image) return;

    mainGalleryImage.src = image;
    galleryThumbnails.forEach((button) => button.classList.remove("active"));
    thumbnail.classList.add("active");
    updateGalleryText();
  });
});

/* Navigation active du sommaire */

const summaryLinks = [...document.querySelectorAll('.case-study-navigation a[href^="#"]')];
const summarySections = summaryLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateActiveSummaryLink() {
  if (!summarySections.length) return;

  const detectionPosition = window.innerHeight * 0.35;
  let activeSection = summarySections[0];

  summarySections.forEach((section) => {
    if (section.getBoundingClientRect().top <= detectionPosition) activeSection = section;
  });

  summaryLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeSection.id}`;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

window.addEventListener("scroll", updateActiveSummaryLink, { passive: true });
window.addEventListener("resize", updateActiveSummaryLink);
updateActiveSummaryLink();

/* Année automatique */

const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

/* Swiper principal */

if (typeof Swiper !== "undefined") {
  new Swiper(".project-cover-frame", {
    speed: 400,
    loop: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
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
  .scope-comparison article,
  .result-metrics article,
  .result-takeaway,
  .project-gallery,
  .limitations-box,
  .lessons-list li,
  .next-project-link
`);

animatedElements.forEach((element) => element.classList.add("scroll-animation"));

if ("IntersectionObserver" in window) {
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("visible", entry.isIntersecting));
    },
    { threshold: 0.1, rootMargin: "+2% 0px -5% 0px" }
  );

  animatedElements.forEach((element) => animationObserver.observe(element));
} else {
  animatedElements.forEach((element) => element.classList.add("visible"));
}

/* Bordure de l'en-tête au défilement */

const projectHeader = document.querySelector(".project-header");
function updateHeaderBorder() {
  projectHeader?.classList.toggle("scrolled", window.scrollY > 0);
}

window.addEventListener("scroll", updateHeaderBorder, { passive: true });
updateHeaderBorder();
