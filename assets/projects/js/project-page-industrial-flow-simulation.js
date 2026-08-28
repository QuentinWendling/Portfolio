const translations = {
  fr: {
    "page.title": "Simulation de flux industriels — Quentin Wendling",
    "page.description":
      "Étude de cas d'un projet de simulation de flux industriels développé en Rust pour modéliser des lignes de production et comparer différents scénarios de décision.",

    "nav.projects": "Projets",

    "project.back": "← Retour aux projets",
    "project.category": "Rust · Simulation · Intelligence artificielle · Stage",
    "project.title": "Simulation de flux industriels",
    "project.introduction":
      "Développement en équipe d'une solution modulaire permettant de représenter des lignes de production, de simuler les déplacements entre convoyeurs et nœuds, puis de comparer plusieurs scénarios de décision.",
    "project.caseStudy": "Découvrir le projet",
    "project.architecture": "Voir l'architecture",
    "project.confidentiality":
      "Projet réalisé en entreprise - les visuels présentés sont conceptuels.",

    "metadata.period": "Période",
    "metadata.periodValue": "Stage en entreprise",
    "metadata.context": "Contexte",
    "metadata.role": "Rôle",
    "metadata.roleValue": "Développement Rust & modélisation",
    "metadata.type": "Type",
    "metadata.typeValue": "Simulateur de flux industriels",

    "visual.caption":
      "Représentation conceptuelle d'une ligne industrielle composée de convoyeurs, de nœuds de décision et de postes de traitement.",
    "visual.status": "Simulation conceptuelle",
    "visual.scenariosLabel": "Scénarios de simulation",
    "visual.scenarioA": "Scénario A",
    "visual.scenarioB": "Scénario B",
    "visual.scenarioC": "Scénario C",
    "visual.source": "Entrée",
    "visual.sourceType": "Source",
    "visual.node": "Nœud",
    "visual.decision": "Décision",
    "visual.stationA": "Poste A",
    "visual.stationB": "Poste B",
    "visual.processing": "Traitement",
    "visual.optimized": "Optimisé",
    "visual.output": "Sortie",
    "visual.destination": "Destination",
    "visual.metrics": "Indicateurs simulés",
    "visual.throughput": "Débit",
    "visual.stable": "Stable",
    "visual.utilization": "Utilisation",
    "visual.balanced": "Équilibrée",
    "visual.recommendation": "Décision suggérée",
    "visual.routeB": "Prioriser le poste B",

    "summary.title": "Sommaire",
    "summary.context": "Le contexte",
    "summary.objective": "Les objectifs",
    "summary.contributions": "Mes contributions",
    "summary.architecture": "L'architecture",
    "summary.results": "Les résultats",
    "summary.lessons": "Enseignements",

    "context.title": "Le contexte",
    "context.p1":
      "Une chaîne de production industrielle peut être représentée comme un réseau de sources, de convoyeurs, de nœuds de décision, de postes de traitement et de sorties. La performance globale dépend autant de chaque équipement que de la manière dont les flux sont orientés.",
    "context.p2":
      "Durant mon stage, j'ai participé avec une équipe de stagiaires au développement d'une solution pour le Groupe Conseil Filion. Le but était de disposer d'un environnement générique pour construire des chemins industriels, lancer des simulations et observer les effets de différentes règles de décision.",

    "objective.title": "Les objectifs",
    "objective.card1Title": "Modéliser les flux",
    "objective.card1Text":
      "Représenter de manière modulaire les convoyeurs, les nœuds, les postes et les règles qui composent une ligne industrielle.",
    "objective.card2Title": "Tester des scénarios",
    "objective.card2Text":
      "Modifier les chemins et les décisions afin de comparer leur impact sur le débit, les attentes et l'utilisation du système.",
    "objective.card3Title": "Aider à l'optimisation",
    "objective.card3Text":
      "Exploiter des algorithmes d'optimisation et d'intelligence artificielle pour identifier des configurations plus efficaces.",

    "contributions.title": "Mes contributions",
    "contributions.text":
      "Le travail a combiné analyse métier, conception logicielle et expérimentation. La solution devait rester suffisamment générique pour représenter plusieurs organisations de production sans être liée à une seule chaîne industrielle.",
    "contributions.feature1Title": "Analyse des données logistiques",
    "contributions.feature1Text":
      "Étude des flux, des temps de passage et des contraintes afin d'identifier les informations nécessaires à la simulation.",
    "contributions.feature2Title": "Modèle de domaine modulaire",
    "contributions.feature2Text":
      "Conception de composants réutilisables pour assembler des convoyeurs, des nœuds, des ressources et des règles de routage.",
    "contributions.feature3Title": "Moteur de simulation en Rust",
    "contributions.feature3Text":
      "Développement d'une base robuste et performante pour faire évoluer les entités, propager les événements et collecter les indicateurs.",
    "contributions.feature4Title": "Évaluation de décisions",
    "contributions.feature4Text":
      "Création de simulations comparables pour mesurer les effets de différentes stratégies et orienter l'optimisation des flux.",
    "contributions.feature5Title": "Travail collaboratif Agile",
    "contributions.feature5Text":
      "Coordination avec les autres stagiaires, revues de code, découpage des fonctionnalités et itérations régulières avec l'équipe projet.",

    "architecture.title": "L'architecture de la solution",
    "architecture.text":
      "L'architecture sépare la description du système, l'exécution de la simulation et l'analyse des résultats. Cette organisation facilite l'ajout de nouveaux composants et la comparaison de scénarios sans modifier l'ensemble du moteur.",
    "architecture.inputLabel": "Configuration",
    "architecture.inputTitle": "Convoyeurs · Nœuds · Ressources",
    "architecture.inputText":
      "Construction d'un graphe industriel et définition des règles de circulation, capacités et contraintes.",
    "architecture.engineLabel": "Moteur Rust",
    "architecture.engineTitle": "Événements · États · Routage",
    "architecture.engineText":
      "Exécution des déplacements, résolution des décisions et suivi de l'évolution du système simulé.",
    "architecture.outputLabel": "Analyse",
    "architecture.outputTitle": "Scénarios · Indicateurs · Optimisation",
    "architecture.outputText":
      "Comparaison des performances et identification des configurations offrant le meilleur comportement global.",

    "results.title": "Les résultats principaux",
    "results.text":
      "Le projet a abouti à une base de simulation capable de représenter différents chemins industriels, d'exécuter plusieurs scénarios et de produire des indicateurs comparables. Les évolutions réalisées ont apporté des gains mesurables de performance tout en renforçant la modularité de la solution.",
    "results.metric1Label": "Performance",
    "results.metric1Value": "Mesurable",
    "results.metric1Text":
      "Des indicateurs permettent d'observer l'effet réel des choix de routage et des optimisations.",
    "results.metric2Label": "Modularité",
    "results.metric2Value": "Extensible",
    "results.metric2Text":
      "De nouveaux composants et comportements peuvent être intégrés sans reconstruire toute la solution.",
    "results.metric3Label": "Décision",
    "results.metric3Value": "Multi-scénarios",
    "results.metric3Text":
      "Plusieurs stratégies peuvent être exécutées dans un cadre commun afin de faciliter leur comparaison.",
    "results.metric4Label": "Développement",
    "results.metric4Text":
      "Une progression itérative soutenue par la collaboration, les retours réguliers et les revues de code.",
    "results.takeawayLabel": "À retenir",
    "results.takeawayText":
      "La principale valeur de la solution est de transformer une chaîne industrielle complexe en un modèle testable : les décisions peuvent être comparées avant d'être appliquées à un système réel.",

    "lessons.title": "Ce que ce projet m'a appris",
    "lessons.text":
      "Ce stage m'a permis d'aborder un problème industriel concret en reliant compréhension métier, architecture logicielle et mesure de performance. J'ai également découvert les contraintes d'un projet collaboratif destiné à évoluer au-delà d'un prototype isolé.",
    "lessons.item1":
      "Modéliser un système industriel sous forme de graphe de composants",
    "lessons.item2":
      "Concevoir un moteur de simulation modulaire et performant en Rust",
    "lessons.item3":
      "Transformer des données logistiques en indicateurs exploitables",
    "lessons.item4":
      "Comparer des scénarios plutôt que rechercher une solution unique",
    "lessons.item5":
      "Développer en équipe avec des pratiques Agile et des revues de code",

    "next.label": "Projet suivant",
    "next.title": "Collaborative Map",

    "footer.back": "Retour aux projets ↑"
  },

  en: {
    "page.title": "Industrial Flow Simulation — Quentin Wendling",
    "page.description":
      "Case study of an industrial-flow simulation project developed in Rust to model production lines and compare decision scenarios.",

    "nav.projects": "Projects",

    "project.back": "← Back to projects",
    "project.category": "Rust · Simulation · Artificial intelligence · Internship",
    "project.title": "Industrial Flow Simulation",
    "project.introduction":
      "Team development of a modular solution for representing production lines, simulating movement between conveyors and nodes, and comparing multiple decision scenarios.",
    "project.caseStudy": "Explore the project",
    "project.architecture": "View the architecture",
    "project.confidentiality":
      "Company project - all visuals shown here are conceptual.",

    "metadata.period": "Period",
    "metadata.periodValue": "Company internship",
    "metadata.context": "Context",
    "metadata.role": "Role",
    "metadata.roleValue": "Rust development & modelling",
    "metadata.type": "Type",
    "metadata.typeValue": "Industrial-flow simulator",

    "visual.caption":
      "Conceptual representation of an industrial line composed of conveyors, decision nodes and processing stations.",
    "visual.status": "Conceptual simulation",
    "visual.scenariosLabel": "Simulation scenarios",
    "visual.scenarioA": "Scenario A",
    "visual.scenarioB": "Scenario B",
    "visual.scenarioC": "Scenario C",
    "visual.source": "Input",
    "visual.sourceType": "Source",
    "visual.node": "Node",
    "visual.decision": "Decision",
    "visual.stationA": "Station A",
    "visual.stationB": "Station B",
    "visual.processing": "Processing",
    "visual.optimized": "Optimised",
    "visual.output": "Output",
    "visual.destination": "Destination",
    "visual.metrics": "Simulated metrics",
    "visual.throughput": "Throughput",
    "visual.stable": "Stable",
    "visual.utilization": "Utilisation",
    "visual.balanced": "Balanced",
    "visual.recommendation": "Suggested decision",
    "visual.routeB": "Prioritise station B",

    "summary.title": "Contents",
    "summary.context": "Context",
    "summary.objective": "Objectives",
    "summary.contributions": "My contributions",
    "summary.architecture": "Architecture",
    "summary.results": "Results",
    "summary.lessons": "Key learnings",

    "context.title": "Context",
    "context.p1":
      "An industrial production chain can be represented as a network of sources, conveyors, decision nodes, processing stations and outputs. Overall performance depends both on each piece of equipment and on how flows are routed.",
    "context.p2":
      "During my internship, I worked with a team of interns on a solution for Groupe Conseil Filion. The objective was to provide a generic environment for building industrial paths, running simulations and observing the effects of different decision rules.",

    "objective.title": "Objectives",
    "objective.card1Title": "Model the flows",
    "objective.card1Text":
      "Represent the conveyors, nodes, stations and rules that compose an industrial line through modular components.",
    "objective.card2Title": "Test scenarios",
    "objective.card2Text":
      "Change routes and decisions to compare their impact on throughput, waiting times and system utilisation.",
    "objective.card3Title": "Support optimisation",
    "objective.card3Text":
      "Use optimisation and artificial-intelligence algorithms to identify more efficient configurations.",

    "contributions.title": "My contributions",
    "contributions.text":
      "The work combined business analysis, software design and experimentation. The solution had to remain generic enough to represent several production organisations rather than a single industrial chain.",
    "contributions.feature1Title": "Logistics data analysis",
    "contributions.feature1Text":
      "Studying flows, transit times and constraints to identify the information required by the simulation.",
    "contributions.feature2Title": "Modular domain model",
    "contributions.feature2Text":
      "Designing reusable components for assembling conveyors, nodes, resources and routing rules.",
    "contributions.feature3Title": "Rust simulation engine",
    "contributions.feature3Text":
      "Developing a robust and efficient foundation to evolve entities, propagate events and collect metrics.",
    "contributions.feature4Title": "Decision evaluation",
    "contributions.feature4Text":
      "Creating comparable simulations to measure the effects of different strategies and guide flow optimisation.",
    "contributions.feature5Title": "Agile collaboration",
    "contributions.feature5Text":
      "Coordinating with the other interns through code reviews, feature breakdown and regular iterations with the project team.",

    "architecture.title": "Solution architecture",
    "architecture.text":
      "The architecture separates system description, simulation execution and result analysis. This organisation makes it easier to add components and compare scenarios without modifying the entire engine.",
    "architecture.inputLabel": "Configuration",
    "architecture.inputTitle": "Conveyors · Nodes · Resources",
    "architecture.inputText":
      "Building an industrial graph and defining circulation rules, capacities and constraints.",
    "architecture.engineLabel": "Rust engine",
    "architecture.engineTitle": "Events · States · Routing",
    "architecture.engineText":
      "Executing movements, resolving decisions and tracking the evolution of the simulated system.",
    "architecture.outputLabel": "Analysis",
    "architecture.outputTitle": "Scenarios · Metrics · Optimisation",
    "architecture.outputText":
      "Comparing performance and identifying configurations with the best overall behaviour.",

    "results.title": "Main results",
    "results.text":
      "The project produced a simulation foundation capable of representing different industrial paths, executing multiple scenarios and generating comparable metrics. The implemented changes delivered measurable performance gains while improving the solution's modularity.",
    "results.metric1Label": "Performance",
    "results.metric1Value": "Measurable",
    "results.metric1Text":
      "Metrics reveal the actual effect of routing choices and optimisation work.",
    "results.metric2Label": "Modularity",
    "results.metric2Value": "Extensible",
    "results.metric2Text":
      "New components and behaviours can be integrated without rebuilding the complete solution.",
    "results.metric3Label": "Decision-making",
    "results.metric3Value": "Multi-scenario",
    "results.metric3Text":
      "Multiple strategies can run within a common framework, making them easier to compare.",
    "results.metric4Label": "Development",
    "results.metric4Text":
      "Iterative progress supported by collaboration, regular feedback and code reviews.",
    "results.takeawayLabel": "Key takeaway",
    "results.takeawayText":
      "The solution's main value is its ability to turn a complex industrial chain into a testable model: decisions can be compared before they are applied to a real system.",

    "lessons.title": "What I learned",
    "lessons.text":
      "This internship taught me how to approach a concrete industrial problem by combining business understanding, software architecture and performance measurement. I also discovered the constraints of a collaborative project designed to evolve beyond an isolated prototype.",
    "lessons.item1":
      "Model an industrial system as a graph of components",
    "lessons.item2":
      "Design a modular and efficient simulation engine in Rust",
    "lessons.item3":
      "Turn logistics data into actionable metrics",
    "lessons.item4":
      "Compare scenarios rather than search for one universal solution",
    "lessons.item5":
      "Develop as a team using Agile practices and code reviews",

    "next.label": "Next project",
    "next.title": "MAP collaborative",

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
  .architecture-block,
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
