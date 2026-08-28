const translations = {
 fr: {
    "header.homeAria": "Retour à l'accueil",
    "nav.projects": "Projets",
    "theme.toggleAria": "Changer le thème",
    "project.back": "← Retour aux projets",
    "project.category": "Data Science · Étude statistique sous R",
    "project.title": "Stephen Curry & le tir à trois points",
    "project.introduction": "Une analyse de données NBA pour mesurer les performances de Stephen Curry, comparer son profil aux grands tireurs de l'histoire et étudier son influence sur l'évolution du tir à trois points.",
    "project.github": "Voir l'analyse sur GitHub",
    "project.caseStudy": "Découvrir l'étude",
    "metadata.period": "Période",
    "metadata.context": "Contexte",
    "metadata.contextValue": "Projet universitaire · UQAC",
    "metadata.role": "Rôle",
    "metadata.roleValue": "Analyse de données & visualisation",
    "metadata.type": "Type",
    "metadata.typeValue": "Étude statistique NBA",
    "images.curry": "Aperçu de statistique réalisé",
    "images.efficiency": "Aperçu de statistique réalisé",
    "images.evolution": "Aperçu de statistique réalisé",
    "summary.title": "Sommaire",
    "summary.context": "Le contexte",
    "summary.objective": "Les questions",
    "summary.solution": "La méthode",
    "summary.results": "Les résultats",
    "summary.gallery": "Galerie",
    "summary.lessons": "Enseignements",
    "context.title": "Le contexte",
    "context.p1": "Réalisé dans le cadre d'un cours d'introduction à la science des données, ce projet part d'une question très présente dans la culture NBA : Stephen Curry peut-il être considéré comme le meilleur tireur à trois points de l'histoire ?",
    "context.p2": "L'étude s'appuie sur des données de Basketball-Reference pour replacer ses performances dans le temps, les comparer à celles d'autres grands spécialistes et observer l'évolution du tir longue distance dans la ligue.",
    "objective.title": "Les questions d'analyse",
    "objective.card1Title": "Mesurer la performance",
    "objective.card1Text": "Étudier le volume, l'adresse et la part du tir à trois points dans le jeu de Stephen Curry au fil des saisons.",
    "objective.card2Title": "Comparer les références",
    "objective.card2Text": "Mettre son profil en perspective avec Ray Allen, Reggie Miller, James Harden et Kyle Korver selon plusieurs indicateurs.",
    "objective.card3Title": "Observer l'évolution de la NBA",
    "objective.card3Text": "Analyser la progression du nombre et de la proportion de tirs à trois points tentés dans la ligue depuis son arrivée.",
    "solution.title": "La méthode d'analyse",
    "solution.text": "Les données de carrière, de saison et les moyennes de la NBA ont été importées dans R, nettoyées et rapprochées afin de construire des indicateurs comparables. Les résultats ont ensuite été présentés sous forme de graphiques pour rendre les tendances immédiatement lisibles.",
    "solution.feature1Title": "Collecte des données",
    "solution.feature1Text": "Import de fichiers CSV et Excel provenant de Basketball-Reference : leaders en carrière, records saisonniers et statistiques par joueur.",
    "solution.feature2Title": "Préparation sous R",
    "solution.feature2Text": "Filtrage, conversion de variables, jointures et création de ratios avec tidyverse, dplyr, readr et readxl.",
    "solution.feature3Title": "Visualisation",
    "solution.feature3Text": "Construction de diagrammes en barres, nuages de points et séries temporelles avec ggplot2, puis présentation avec xaringan.",
    "results.title": "Les résultats clés",
    "results.introduction": "L'analyse ne réduit pas le titre de « meilleur tireur » à une seule statistique. Elle montre plutôt que Stephen Curry se distingue par une combinaison rare de volume, d'efficacité, de régularité et de records.",
    "results.volumeLabel": "Volume",
    "results.volumeTitle": "Production historique",
    "results.volumeText": "Curry se situe à l'extrémité des comparaisons combinant nombre de tirs réussis et efficacité.",
    "results.recordsLabel": "Records",
    "results.recordsTitle": "Saisons dominantes",
    "results.recordsText": "Plusieurs de ses saisons figurent parmi les plus productives de l'histoire au tir à trois points.",
    "results.impactLabel": "Impact",
    "results.impactTitle": "Transformation du jeu",
    "results.impactText": "La période étudiée montre une forte hausse de la place du tir à trois points dans les choix offensifs de la NBA.",
    "gallery.title": "Galerie de l'analyse",
    "gallery.button1Aria": "Afficher le graphique volume et efficacité",
    "gallery.button2Aria": "Afficher le graphique des records saisonniers",
    "gallery.button3Aria": "Afficher le graphique de l'évolution NBA",
    "lessons.title": "Ce que ce projet m'a appris",
    "lessons.text": "Ce projet m'a permis de parcourir un cycle complet d'analyse de données : formuler une question, sélectionner des indicateurs, préparer plusieurs sources et construire une narration visuelle capable de soutenir une conclusion sans masquer les limites de l'étude.",
    "lessons.item1": "Nettoyer et combiner des jeux de données hétérogènes sous R",
    "lessons.item2": "Choisir des indicateurs complémentaires plutôt qu'une métrique unique",
    "lessons.item3": "Concevoir des visualisations comparatives avec ggplot2",
    "lessons.item4": "Transformer une analyse sportive en récit statistique clair",
    "next.label": "Projet suivant",
    "next.title": "Simulation de flux industriels",
    "footer.back": "Retour aux projets ↑"
    },
    en: {
    "header.homeAria": "Back to home",
    "nav.projects": "Projects",
    "theme.toggleAria": "Change theme",
    "project.back": "← Back to projects",
    "project.category": "Data Science · Statistical study in R",
    "project.title": "Stephen Curry & the three-point shot",
    "project.introduction": "An NBA data analysis designed to measure Stephen Curry's performance, compare his profile with the greatest shooters in history, and study his influence on the evolution of three-point shooting.",
    "project.github": "View the analysis on GitHub",
    "project.caseStudy": "Explore the study",
    "metadata.period": "Period",
    "metadata.context": "Context",
    "metadata.contextValue": "University project · UQAC",
    "metadata.role": "Role",
    "metadata.roleValue": "Data analysis & visualization",
    "metadata.type": "Type",
    "metadata.typeValue": "NBA statistical study",
    "images.curry": "Statistical Overview Completed",
    "images.efficiency": "Statistical Overview Completed",
    "images.evolution": "Statistical Overview Completed",
    "summary.title": "Contents",
    "summary.context": "Context",
    "summary.objective": "Questions",
    "summary.solution": "Method",
    "summary.results": "Results",
    "summary.gallery": "Gallery",
    "summary.lessons": "Key learnings",
    "context.title": "Context",
    "context.p1": "Created for an introductory data science course, this project starts with a major question in NBA culture: can Stephen Curry be considered the greatest three-point shooter in history?",
    "context.p2": "The study relies on Basketball-Reference data to place his performance over time, compare it with other elite specialists, and observe how long-range shooting evolved across the league.",
    "objective.title": "Analysis questions",
    "objective.card1Title": "Measure performance",
    "objective.card1Text": "Study the volume, accuracy, and share of three-point shots in Stephen Curry's game across seasons.",
    "objective.card2Title": "Compare the benchmarks",
    "objective.card2Text": "Put his profile into perspective with Ray Allen, Reggie Miller, James Harden, and Kyle Korver using several indicators.",
    "objective.card3Title": "Observe the NBA's evolution",
    "objective.card3Text": "Analyze the growth in both the number and proportion of three-point attempts in the league since his arrival.",
    "solution.title": "Analysis method",
    "solution.text": "Career, season, and NBA average datasets were imported into R, cleaned, and combined to build comparable indicators. The results were then presented as charts to make the trends immediately readable.",
    "solution.feature1Title": "Data collection",
    "solution.feature1Text": "CSV and Excel imports from Basketball-Reference, including career leaders, single-season records, and player statistics.",
    "solution.feature2Title": "Preparation in R",
    "solution.feature2Text": "Filtering, variable conversion, joins, and ratio creation with tidyverse, dplyr, readr, and readxl.",
    "solution.feature3Title": "Visualization",
    "solution.feature3Text": "Bar charts, scatter plots, and time series built with ggplot2, then presented with xaringan.",
    "results.title": "Key results",
    "results.introduction": "The study does not reduce the title of “greatest shooter” to a single statistic. Instead, it shows that Stephen Curry stands out through a rare combination of volume, efficiency, consistency, and records.",
    "results.volumeLabel": "Volume",
    "results.volumeTitle": "Historic production",
    "results.volumeText": "Curry sits at the extreme end of comparisons combining three-pointers made and shooting efficiency.",
    "results.recordsLabel": "Records",
    "results.recordsTitle": "Dominant seasons",
    "results.recordsText": "Several of his seasons rank among the most productive three-point campaigns in history.",
    "results.impactLabel": "Impact",
    "results.impactTitle": "Changing the game",
    "results.impactText": "The period studied shows a major rise in the role of three-point shooting within NBA offensive choices.",
    "gallery.title": "Analysis gallery",
    "gallery.button1Aria": "Show the volume and efficiency chart",
    "gallery.button2Aria": "Show the single-season records chart",
    "gallery.button3Aria": "Show the NBA evolution chart",
    "lessons.title": "What this project taught me",
    "lessons.text": "This project allowed me to complete a full data analysis cycle: formulate a question, select indicators, prepare multiple sources, and build a visual narrative that supports a conclusion without hiding the study's limitations.",
    "lessons.item1": "Clean and combine heterogeneous datasets in R",
    "lessons.item2": "Choose complementary indicators rather than a single metric",
    "lessons.item3": "Design comparative visualizations with ggplot2",
    "lessons.item4": "Turn a sports analysis into a clear statistical story",
    "next.label": "Next project",
    "next.title": "Industrial Flow Simulation",
    "footer.back": "Back to projects ↑"
    }
};

const root = document.documentElement;
const languageButton = document.querySelector(".language-toggle");
const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeColor = document.querySelector('meta[name="theme-color"]');

let currentLanguage =
    localStorage.getItem("portfolio-language") || "fr";

let currentTheme =
    localStorage.getItem("portfolio-theme") ||
    (
    window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark"
    );

function applyLanguage(nextLanguage) {
    currentLanguage = translations[nextLanguage] ? nextLanguage : "fr";
    root.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation =
        translations[currentLanguage]?.[element.dataset.i18n];

    if (translation) {
        element.textContent = translation;
    }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const translation =
        translations[currentLanguage]?.[element.dataset.i18nAria];

    if (translation) {
        element.setAttribute("aria-label", translation);
    }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const translation =
        translations[currentLanguage]?.[element.dataset.i18nAlt];

    if (translation) {
        element.setAttribute("alt", translation);
    }
    });

    if (languageButton) {
    languageButton.textContent =
        currentLanguage === "fr" ? "EN" : "FR";

    languageButton.setAttribute(
        "aria-label",
        currentLanguage === "fr"
        ? "Switch website to English"
        : "Passer le site en français"
    );
    }

    const activeThumbnail =
    document.querySelector(".gallery-thumbnail.active");

    const mainGalleryImage =
    document.querySelector("#gallery-main-image");

    if (activeThumbnail && mainGalleryImage) {
    mainGalleryImage.alt =
        currentLanguage === "fr"
        ? activeThumbnail.dataset.altFr || ""
        : activeThumbnail.dataset.altEn || "";
    }

    localStorage.setItem(
    "portfolio-language",
    currentLanguage
    );
}

function applyTheme(nextTheme) {
    currentTheme = nextTheme;
    root.dataset.theme = currentTheme;

    if (themeIcon) {
    themeIcon.textContent =
        currentTheme === "dark" ? "☼" : "☾";
    }

    if (themeColor) {
    themeColor.setAttribute(
        "content",
        currentTheme === "dark" ? "#070b14" : "#f5f7fb"
    );
    }

    localStorage.setItem("portfolio-theme", currentTheme);
}

applyLanguage(currentLanguage);
applyTheme(currentTheme);

languageButton?.addEventListener("click", () => {
    applyLanguage(
    currentLanguage === "fr" ? "en" : "fr"
    );
});

themeButton?.addEventListener("click", () => {
    applyTheme(
    currentTheme === "dark" ? "light" : "dark"
    );
});

/* Galerie interactive */

const mainGalleryImage =
    document.querySelector("#gallery-main-image");

const galleryThumbnails =
    document.querySelectorAll(".gallery-thumbnail");

galleryThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
    const image = thumbnail.dataset.image;

    if (!mainGalleryImage || !image) {
        return;
    }

    mainGalleryImage.src = image;
    mainGalleryImage.alt =
        currentLanguage === "fr"
        ? thumbnail.dataset.altFr || ""
        : thumbnail.dataset.altEn || "";

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
    .map((link) =>
    document.querySelector(link.getAttribute("href"))
    )
    .filter(Boolean);

function updateActiveSummaryLink() {
    if (!summarySections.length) {
    return;
    }

    const detectionPosition = window.innerHeight * 0.35;
    let activeSection = summarySections[0];

    summarySections.forEach((section) => {
    if (
        section.getBoundingClientRect().top <=
        detectionPosition
    ) {
        activeSection = section;
    }
    });

    summaryLinks.forEach((link) => {
    const isActive =
        link.getAttribute("href") ===
        `#${activeSection.id}`;

    link.classList.toggle("active", isActive);

    if (isActive) {
        link.setAttribute("aria-current", "location");
    } else {
        link.removeAttribute("aria-current");
    }
    });
}

window.addEventListener(
    "scroll",
    updateActiveSummaryLink,
    { passive: true }
);

window.addEventListener(
    "resize",
    updateActiveSummaryLink
);

updateActiveSummaryLink();

/* Année automatique */

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent =
    new Date().getFullYear();
}

/* Carrousel principal */

if (window.Swiper) {
    new Swiper(".project-cover-frame", {
    speed: 400,
    loop: true,
    autoHeight: true,
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

const animatedElements =
    document.querySelectorAll(`
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
    const animationObserver =
    new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle(
            "visible",
            entry.isIntersecting
            );
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

const projectHeader =
    document.querySelector(".project-header");

function updateHeaderBorder() {
    projectHeader?.classList.toggle(
    "scrolled",
    window.scrollY > 0
    );
}

window.addEventListener(
    "scroll",
    updateHeaderBorder,
    { passive: true }
);

updateHeaderBorder();