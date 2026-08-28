const translations = {
  fr: {
    "page.title":
      "Data Analyst / Data Scientist — Société Générale Assurances — Quentin Wendling",
    "page.description":
      "Étude de cas d'un stage de six mois en Data Analyse et Data Science : automatisation de traitements, analyse de données de formation, NLP et industrialisation, présentés sans données confidentielles.",

    "nav.projects": "Projets",

    "project.back": "← Retour aux projets",
    "project.category": "Data Analyse · Data Science · NLP · Stage",
    "project.title": "Data & IA pour l'analyse de retour de formations",
    "project.introduction":
      "Conception de pipelines end-to-end pour automatiser des analyses récurrentes, fiabiliser des données hétérogènes et transformer des retours quantitatifs et textuels en restitutions directement exploitables par les équipes métier.",
    "project.caseStudy": "Découvrir le stage",
    "project.architecture": "Voir le pipeline",
    "project.confidentiality":
      "Stage confidentiel — données, volumes précis, règles métier et visuels sont volontairement anonymisés ou représentés de manière conceptuelle.",

    "metadata.period": "Période",
    "metadata.periodValue": "Stage de 6 mois",
    "metadata.context": "Entreprise",
    "metadata.role": "Rôle",
    "metadata.roleValue": "Data Analyst / Data Scientist",
    "metadata.type": "Périmètre",
    "metadata.typeValue": "Automatisation · Analyse · NLP",

    "visual.caption":
      "Représentation conceptuelle d'un pipeline allant de sources de données hétérogènes vers des traitements Python, des analyses quantitatives et NLP, puis des restitutions Excel et HTML.",
    "visual.status": "Pipeline conceptuel",
    "visual.inputLabel": "Entrées",
    "visual.inputTitle": "Sources hétérogènes",
    "visual.inputItem1": "Exports tabulaires",
    "visual.inputItem2": "Référentiels complémentaires",
    "visual.prepLabel": "Préparation",
    "visual.prepTitle": "Qualité & normalisation",
    "visual.prepItem1": "Contrôles et nettoyage",
    "visual.prepItem2": "Règles robustes aux variations",
    "visual.analysisLabel": "Analyse",
    "visual.analysisTitle": "Indicateurs & NLP",
    "visual.analysisItem1": "Agrégations multi-axes",
    "visual.analysisItem2": "Clustering & sentiment",
    "visual.outputLabel": "Restitution",
    "visual.outputTitle": "Livrables exploitables",
    "visual.outputItem1": "Reporting Excel automatisé",
    "visual.outputItem2": "Synthèses HTML interactives",
    "visual.panelTitle": "Axes du projet",
    "visual.metric1Label": "Traitement",
    "visual.metric1Value": "Automatisé",
    "visual.metric2Label": "Volumétrie",
    "visual.metric2Value": "Millions de lignes",
    "visual.metric3Label": "Analyse",
    "visual.metric3Value": "Quantitatif + NLP",
    "visual.principleLabel": "Principe directeur",
    "visual.principleValue": "Robuste · Reproductible · Maintenable",

    "summary.title": "Sommaire",
    "summary.context": "Le contexte",
    "summary.objective": "Les objectifs",
    "summary.contributions": "Mes contributions",
    "summary.architecture": "Le pipeline",
    "summary.results": "Les résultats",
    "summary.lessons": "Enseignements",

    "context.title": "Le contexte",
    "context.p1":
      "Certaines analyses liées à l'évaluation des formations reposaient sur des exports volumineux et hétérogènes pouvant représenter plusieurs millions de lignes, avec une part importante de lecture, de tri et de consolidation manuelle. Le besoin était récurrent et devait pouvoir être reproduit de façon fiable à chaque nouvelle campagne d'analyse.",
    "context.p2":
      "Mon stage a consisté à transformer ces traitements en chaînes d'analyse automatisées : comprendre les règles métier, fiabiliser les données, calculer les indicateurs attendus et restituer les résultats sous une forme directement exploitable, tout en explorant des approches de Data Science pour les commentaires textuels.",
    "context.confidentialityLabel": "Confidentialité",
    "context.confidentialityText":
      "Cette page décrit les méthodes, responsabilités et compétences mises en œuvre. Les données réelles, règles internes, seuils, volumes précis, résultats chiffrés et interfaces utilisées en entreprise ne sont pas reproduits.",

    "objective.title": "Les objectifs",
    "objective.card1Title": "Automatiser l'analyse",
    "objective.card1Text":
      "Remplacer des manipulations récurrentes par des traitements Python reproductibles et conçus pour être relancés simplement.",
    "objective.card2Title": "Fiabiliser à grande échelle",
    "objective.card2Text":
      "Gérer des fichiers et formats variables, les valeurs manquantes, les doublons et les incohérences sur des jeux pouvant atteindre plusieurs millions de lignes, sans bloquer toute la chaîne.",
    "objective.card3Title": "Extraire plus d'information",
    "objective.card3Text":
      "Compléter le reporting quantitatif par une analyse de commentaires afin de faire émerger thèmes récurrents et tendances de sentiment.",

    "contributions.title": "Mes contributions",
    "contributions.text":
      "J'ai pris en charge plusieurs briques de bout en bout, depuis l'exploration des données et la formalisation du besoin jusqu'à la génération des livrables, la documentation et la mise à disposition. Le volet NLP a été mené avec l'appui de l'équipe Data Science pour les modèles autorisés dans l'environnement de l'entreprise.",
    "contributions.feature1Title": "Pipeline Data end-to-end",
    "contributions.feature1Text":
      "Exploration d'exports, sélection des informations utiles, nettoyage, normalisation, gestion des cas incomplets et consolidation de plusieurs sources avec Python et Pandas, y compris sur des volumes de plusieurs millions de lignes.",
    "contributions.feature2Title": "Robustesse & qualité de données",
    "contributions.feature2Text":
      "Mise en place de règles tolérantes aux variations de saisie, rapprochements approximatifs lorsque nécessaire, contrôles de cohérence et traitement explicite des doublons.",
    "contributions.feature3Title": "Reporting automatisé",
    "contributions.feature3Text":
      "Calcul d'indicateurs d'évaluation, analyses selon plusieurs axes métier et génération de fichiers Excel structurés avec OpenPyXL, incluant des visualisations adaptées à la lecture utilisateur.",
    "contributions.feature4Title": "Analyse de commentaires par NLP",
    "contributions.feature4Text":
      "Nettoyage de verbatims, représentation vectorielle, réduction de dimension, clustering, réduction du bruit, sélection de commentaires représentatifs et classification de sentiment.",
    "contributions.feature5Title": "Restitution interactive",
    "contributions.feature5Text":
      "Génération d'une synthèse HTML permettant de parcourir les grands thèmes détectés, leur poids relatif, le sentiment associé et des exemples représentatifs, sans exposer le code d'analyse aux utilisateurs finaux.",
    "contributions.feature6Title": "Industrialisation & transmission",
    "contributions.feature6Text":
      "Optimisation des lectures de fichiers, de l'utilisation mémoire et des calculs, documentation utilisateur, simplification du lancement et préparation d'un environnement commun afin que la solution puisse être reprise et maintenue.",
    "contributions.evaluationLabel": "Cadre d'évaluation",
    "contributions.evaluationTitle": "Du ressenti au transfert en situation de travail",
    "contributions.level1Title": "Satisfaction",
    "contributions.level1Text":
      "Automatisation des indicateurs de retour et des synthèses destinées au suivi des formations.",
    "contributions.level2Title": "Apprentissage",
    "contributions.level2Text":
      "Analyse des résultats d'évaluation selon plusieurs dimensions afin d'identifier plus finement les tendances.",
    "contributions.level3Title": "Transfert",
    "contributions.level3Text":
      "Proposition d'un suivi différé pour mesurer l'utilisation des acquis et automatisation de la restitution associée.",
    "contributions.stackLabel": "Approches & outils mobilisés",

    "architecture.title": "Un pipeline pensé pour être relancé",
    "architecture.text":
      "Plutôt que de construire une analyse ponctuelle, j'ai structuré les traitements comme une chaîne réutilisable. Chaque étape a une responsabilité claire et peut évoluer sans remettre en cause tout le processus.",
    "architecture.inputLabel": "Sources",
    "architecture.inputTitle": "Exports · Référentiels",
    "architecture.inputText":
      "Lecture de fichiers hétérogènes et rassemblement des informations nécessaires à l'analyse.",
    "architecture.prepLabel": "Préparation",
    "architecture.prepTitle": "Nettoyage · Contrôles · Rapprochement",
    "architecture.prepText":
      "Normalisation, gestion des données manquantes, variations de format et règles de qualité avant calcul.",
    "architecture.analysisLabel": "Analyse",
    "architecture.analysisTitle": "KPI · Segmentation · NLP",
    "architecture.analysisText":
      "Agrégations, analyses multi-axes, clustering de commentaires et classification lorsque le besoin le nécessite.",
    "architecture.outputLabel": "Restitution",
    "architecture.outputTitle": "Excel · Visualisations · HTML",
    "architecture.outputText":
      "Production automatique de livrables lisibles, documentés et conçus pour une utilisation récurrente par les équipes.",
    "architecture.noteLabel": "Choix de conception",
    "architecture.noteText":
      "Les détails de schéma, de règles métier et d'infrastructure ne sont volontairement pas représentés. Le diagramme montre uniquement la logique fonctionnelle générale du travail réalisé.",

    "results.title": "Les résultats principaux",
    "results.text":
      "Le stage a permis de remplacer plusieurs opérations manuelles par des traitements reproductibles, conçus pour rester robustes sur des volumes pouvant atteindre plusieurs millions de lignes. L'analyse a également été élargie aux dimensions quantitatives et textuelles, puis préparée pour un usage durable au-delà d'un simple prototype individuel.",
    "results.metric1Label": "Processus",
    "results.metric1Value": "Automatisé",
    "results.metric1Text":
      "Des analyses récurrentes peuvent être relancées à partir de nouveaux exports sans reprendre manuellement tout le traitement.",
    "results.metric2Label": "Volumétrie",
    "results.metric2Value": "Plusieurs millions",
    "results.metric2Text":
      "de lignes peuvent être traitées par les pipelines, avec une attention portée aux performances, à la mémoire et à la robustesse des données.",
    "results.metric3Label": "Analyse",
    "results.metric3Value": "360°",
    "results.metric3Text":
      "Les restitutions combinent indicateurs, segmentations métier, visualisations et analyse de verbatims.",
    "results.metric4Label": "Transmission",
    "results.metric4Value": "Maintenable",
    "results.metric4Text":
      "Documentation, lancement simplifié et environnement partagé ont été intégrés à la réflexion de mise en production interne.",
    "results.takeawayLabel": "À retenir",
    "results.takeawayText":
      "La valeur du stage ne repose pas sur un modèle isolé, mais sur la mise en place d'une chaîne complète : comprendre le besoin, fiabiliser les données, automatiser l'analyse, valider les résultats et livrer un outil réellement utilisable.",

    "lessons.title": "Ce que ce stage m'a appris",
    "lessons.text":
      "Cette expérience m'a permis de travailler sur toute la chaîne de valeur d'un projet Data, avec des contraintes concrètes de volumétrie, de qualité, de confidentialité, de performance et d'adoption par les utilisateurs.",
    "lessons.item1":
      "Transformer un besoin métier récurrent en pipeline de données robuste",
    "lessons.item2":
      "Optimiser les lectures, la mémoire et les calculs sur des données imparfaites du réel",
    "lessons.item3":
      "Combiner Data Analyse, Machine Learning et NLP dans un même produit",
    "lessons.item4":
      "Évaluer un modèle avec plusieurs métriques plutôt qu'un score unique",
    "lessons.item5":
      "Penser documentation, UX et maintenabilité dès la phase de développement",
    "lessons.item6":
      "Collaborer avec les équipes métier et Data/IA tout en respectant la confidentialité",

    "next.label": "Projet suivant",
    "next.title": "Classification de données sociales",

    "footer.back": "Retour aux projets ↑"
  },

  en: {
    "page.title":
      "Data Analyst / Data Scientist — Societe Generale Assurances — Quentin Wendling",
    "page.description":
      "Case study of a six-month Data Analytics and Data Science internship covering automation, training-data analysis, NLP and operational delivery, presented without confidential data.",

    "nav.projects": "Projects",

    "project.back": "← Back to projects",
    "project.category": "Data Analytics · Data Science · NLP · Internship",
    "project.title": "Data & AI for analyzing training feedback",
    "project.introduction":
      "Design of end-to-end pipelines to automate recurring analyses, make heterogeneous data more reliable, and turn quantitative and textual feedback into outputs directly usable by business teams.",
    "project.caseStudy": "Explore the internship",
    "project.architecture": "View the pipeline",
    "project.confidentiality":
      "Confidential internship — data, precise volumes, business rules and visuals are intentionally anonymised or shown conceptually.",

    "metadata.period": "Period",
    "metadata.periodValue": "6-month internship",
    "metadata.context": "Company",
    "metadata.role": "Role",
    "metadata.roleValue": "Data Analyst / Data Scientist",
    "metadata.type": "Scope",
    "metadata.typeValue": "Automation · Analytics · NLP",

    "visual.caption":
      "Conceptual representation of a pipeline moving from heterogeneous data sources to Python processing, quantitative and NLP analyses, then Excel and HTML outputs.",
    "visual.status": "Conceptual pipeline",
    "visual.inputLabel": "Inputs",
    "visual.inputTitle": "Heterogeneous sources",
    "visual.inputItem1": "Tabular exports",
    "visual.inputItem2": "Complementary reference data",
    "visual.prepLabel": "Preparation",
    "visual.prepTitle": "Quality & normalisation",
    "visual.prepItem1": "Controls and cleaning",
    "visual.prepItem2": "Rules robust to variations",
    "visual.analysisLabel": "Analysis",
    "visual.analysisTitle": "Metrics & NLP",
    "visual.analysisItem1": "Multi-axis aggregations",
    "visual.analysisItem2": "Clustering & sentiment",
    "visual.outputLabel": "Delivery",
    "visual.outputTitle": "Usable outputs",
    "visual.outputItem1": "Automated Excel reporting",
    "visual.outputItem2": "Interactive HTML summaries",
    "visual.panelTitle": "Project dimensions",
    "visual.metric1Label": "Processing",
    "visual.metric1Value": "Automated",
    "visual.metric2Label": "Scale",
    "visual.metric2Value": "Millions of rows",
    "visual.metric3Label": "Analysis",
    "visual.metric3Value": "Quantitative + NLP",
    "visual.principleLabel": "Guiding principle",
    "visual.principleValue": "Robust · Reproducible · Maintainable",

    "summary.title": "Contents",
    "summary.context": "Context",
    "summary.objective": "Objectives",
    "summary.contributions": "My contributions",
    "summary.architecture": "Pipeline",
    "summary.results": "Results",
    "summary.lessons": "Key learnings",

    "context.title": "Context",
    "context.p1":
      "Some training-evaluation analyses relied on large, heterogeneous exports that could represent several million rows, with a significant amount of manual reading, filtering and consolidation. The need was recurring and had to be reproduced reliably for each new analysis cycle.",
    "context.p2":
      "My internship focused on turning these operations into automated analysis chains: understanding business rules, improving data reliability, computing expected indicators and delivering results in a directly usable form, while also exploring Data Science approaches for textual feedback.",
    "context.confidentialityLabel": "Confidentiality",
    "context.confidentialityText":
      "This page describes the methods, responsibilities and skills involved. Real data, internal rules, thresholds, exact volumes, numerical results and company interfaces are not reproduced.",

    "objective.title": "Objectives",
    "objective.card1Title": "Automate analysis",
    "objective.card1Text":
      "Replace recurring manual operations with reproducible Python processing designed to be rerun easily.",
    "objective.card2Title": "Make data reliable at scale",
    "objective.card2Text":
      "Handle variable files and formats, missing values, duplicates and inconsistencies on datasets that can reach several million rows without blocking the entire workflow.",
    "objective.card3Title": "Extract more insight",
    "objective.card3Text":
      "Extend quantitative reporting with comment analysis to surface recurring themes and sentiment trends.",

    "contributions.title": "My contributions",
    "contributions.text":
      "I owned several components end-to-end, from data exploration and business-need formalisation to output generation, documentation and operational delivery. The NLP work was carried out with support from the Data Science team for models authorised in the company environment.",
    "contributions.feature1Title": "End-to-end data pipeline",
    "contributions.feature1Text":
      "Exploration of exports, selection of useful information, cleaning, normalisation, handling incomplete cases and consolidating multiple sources with Python and Pandas, including datasets containing several million rows.",
    "contributions.feature2Title": "Data robustness & quality",
    "contributions.feature2Text":
      "Implementation of rules tolerant to input variations, approximate matching where relevant, consistency checks and explicit duplicate handling.",
    "contributions.feature3Title": "Automated reporting",
    "contributions.feature3Text":
      "Computation of evaluation indicators, analyses across multiple business dimensions, and generation of structured Excel files with OpenPyXL, including user-oriented visualisations.",
    "contributions.feature4Title": "NLP comment analysis",
    "contributions.feature4Text":
      "Feedback cleaning, vector representations, dimensionality reduction, clustering, noise reduction, representative-comment selection and sentiment classification.",
    "contributions.feature5Title": "Interactive delivery",
    "contributions.feature5Text":
      "Generation of an HTML summary for exploring major detected themes, their relative weight, associated sentiment and representative examples without exposing the analysis code to end users.",
    "contributions.feature6Title": "Operationalisation & handover",
    "contributions.feature6Text":
      "Optimisation of file reads, memory usage and computations, user documentation, simplified execution and preparation of a shared environment so the solution can be reused and maintained.",
    "contributions.evaluationLabel": "Evaluation framework",
    "contributions.evaluationTitle": "From immediate feedback to transfer into day-to-day work",
    "contributions.level1Title": "Satisfaction",
    "contributions.level1Text":
      "Automation of feedback indicators and summaries used to monitor training programmes.",
    "contributions.level2Title": "Learning",
    "contributions.level2Text":
      "Analysis of assessment results across several dimensions to identify trends more precisely.",
    "contributions.level3Title": "Transfer",
    "contributions.level3Text":
      "Proposal for a delayed follow-up to measure use of acquired skills and automation of the associated reporting.",
    "contributions.stackLabel": "Approaches & tools used",

    "architecture.title": "A pipeline designed to be rerun",
    "architecture.text":
      "Rather than building a one-off analysis, I structured the work as a reusable chain. Each stage has a clear responsibility and can evolve without forcing a redesign of the whole process.",
    "architecture.inputLabel": "Sources",
    "architecture.inputTitle": "Exports · Reference data",
    "architecture.inputText":
      "Reading heterogeneous files and gathering the information required for analysis.",
    "architecture.prepLabel": "Preparation",
    "architecture.prepTitle": "Cleaning · Controls · Matching",
    "architecture.prepText":
      "Normalisation, handling missing data, format variations and quality rules before computation.",
    "architecture.analysisLabel": "Analysis",
    "architecture.analysisTitle": "KPIs · Segmentation · NLP",
    "architecture.analysisText":
      "Aggregations, multi-axis analyses, comment clustering and classification when required by the use case.",
    "architecture.outputLabel": "Delivery",
    "architecture.outputTitle": "Excel · Visualisations · HTML",
    "architecture.outputText":
      "Automatic production of readable, documented outputs designed for recurring use by teams.",
    "architecture.noteLabel": "Design choice",
    "architecture.noteText":
      "Schema details, business rules and infrastructure are intentionally not represented. The diagram only shows the general functional logic of the work completed.",

    "results.title": "Main results",
    "results.text":
      "The internship replaced several manual operations with reproducible processing designed to remain robust on datasets that can reach several million rows. The analysis was also broadened to quantitative and textual dimensions and prepared for sustainable use beyond an individual prototype.",
    "results.metric1Label": "Process",
    "results.metric1Value": "Automated",
    "results.metric1Text":
      "Recurring analyses can be rerun on new exports without manually rebuilding the entire processing chain.",
    "results.metric2Label": "Scale",
    "results.metric2Value": "Several million",
    "results.metric2Text":
      "rows can be processed by the pipelines, with attention to performance, memory usage and data robustness.",
    "results.metric3Label": "Analysis",
    "results.metric3Value": "360°",
    "results.metric3Text":
      "Outputs combine indicators, business segmentations, visualisations and text-feedback analysis.",
    "results.metric4Label": "Handover",
    "results.metric4Value": "Maintainable",
    "results.metric4Text":
      "Documentation, simplified execution and a shared environment were included in the internal operationalisation approach.",
    "results.takeawayLabel": "Key takeaway",
    "results.takeawayText":
      "The value of the internship does not lie in a single model, but in a complete chain: understand the need, make the data reliable, automate the analysis, validate results and deliver a genuinely usable tool.",

    "lessons.title": "What I learned",
    "lessons.text":
      "This experience let me work across the full value chain of a Data project, with real constraints around scale, quality, confidentiality, performance and user adoption.",
    "lessons.item1":
      "Turn a recurring business need into a robust data pipeline",
    "lessons.item2":
      "Optimise file reads, memory usage and computations on imperfect real-world data",
    "lessons.item3":
      "Combine Data Analytics, Machine Learning and NLP in one product",
    "lessons.item4":
      "Evaluate a model using several metrics rather than a single score",
    "lessons.item5":
      "Think about documentation, UX and maintainability from the development phase",
    "lessons.item6":
      "Collaborate with business and Data/AI teams while maintaining confidentiality.",

    "next.label": "Next project",
    "next.title": "Social Data Classification",

    "footer.back": "Back to projects ↑"
  }
};


const root = document.documentElement;
const languageButton = document.querySelector(".language-toggle");
const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeColor = document.querySelector('meta[name="theme-color"]');
const descriptionMeta = document.querySelector('meta[name="description"]');

let language =
  localStorage.getItem("portfolio-language") || "fr";

let theme =
  localStorage.getItem("portfolio-theme") ||
  (
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  );


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

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const translation =
      translations[language]?.[element.dataset.i18nAriaLabel];

    if (translation) {
      element.setAttribute("aria-label", translation);
    }
  });

  document.title = translations[language]["page.title"];

  descriptionMeta?.setAttribute(
    "content",
    translations[language]["page.description"]
  );

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
  .evaluation-scope,
  .tech-stack-card,
  .data-architecture-block,
  .architecture-note,
  .confidentiality-callout,
  .result-metrics article,
  .result-takeaway,
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


/* Animation séquentielle du pipeline conceptuel */

const pipelineSteps = [
  ...document.querySelectorAll("[data-pipeline-step]")
];

const pipelineConnectors = [
  ...document.querySelectorAll(".data-pipeline-connector")
];

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const setActivePipelineStep = (activeIndex) => {
  pipelineSteps.forEach((step, index) => {
    step.classList.toggle("active", index === activeIndex);
  });
};

if (pipelineSteps.length) {
  setActivePipelineStep(0);
}

if (
  pipelineSteps.length &&
  pipelineConnectors.length &&
  !reduceMotion
) {
  let currentConnector = 0;
  let restartTimeout;

  const clearActiveConnector = () => {
    pipelineConnectors.forEach((connector) => {
      connector.classList.remove("stream-active");
    });
  };

  const animateNextConnector = () => {
    clearActiveConnector();

    const connector = pipelineConnectors[currentConnector];
    const sourceStep = currentConnector;
    const destinationStep = Math.min(
      currentConnector + 1,
      pipelineSteps.length - 1
    );

    // La carte de départ reste active pendant le déplacement du collecteur.
    setActivePipelineStep(sourceStep);

    // Force un nouveau cycle d'animation lorsque l'on revient au premier lien.
    void connector.offsetWidth;
    connector.classList.add("stream-active");

    const handleStreamEnd = (event) => {
      if (
        event.animationName !== "data-stream" &&
        event.animationName !== "data-stream-mobile"
      ) {
        return;
      }

      connector.removeEventListener("animationend", handleStreamEnd);
      connector.classList.remove("stream-active");

      // À l'arrivée du collecteur, l'étape suivante devient active.
      setActivePipelineStep(destinationStep);

      if (currentConnector < pipelineConnectors.length - 1) {
        currentConnector += 1;
        restartTimeout = window.setTimeout(
          animateNextConnector,
          420
        );
      } else {
        // Petite pause sur la dernière carte avant de repartir du début.
        currentConnector = 0;
        restartTimeout = window.setTimeout(() => {
          setActivePipelineStep(0);
          animateNextConnector();
        }, 900);
      }
    };

    connector.addEventListener("animationend", handleStreamEnd);
  };

  restartTimeout = window.setTimeout(animateNextConnector, 500);

  window.addEventListener("pagehide", () => {
    window.clearTimeout(restartTimeout);
  });
}
