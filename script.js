const translations = {
    ja: {
        top: "ページ上部へ",
        writtenOn: "執筆日", readWork: "読む", downloadPdf: "PDFをダウンロード",
        title: "ドミトリー・グリシュコ — 作品集",
        description: "ドミトリー・グリシュコの短編、小説、詩、ゲーム、文学実験を集めた個人作品集。",
        ogDescription: "短編、小説、詩、ゲーム、文学実験を収めた個人作品集。",
        ogAlt: "ドミトリー・グリシュコ作品集の和紙風の表紙",
        skipCatalog: "作品一覧へ", skipContact: "連絡先へ", asideLabel: "作者と目次", author: "ドミトリー・グリシュコ",
        edition: "個人作品集", navLabel: "作品集のセクション", stories: "短編", poetry: "詩", novels: "小説", games: "ゲーム", experiments: "実験",
        languageLabel: "サイトの言語", visionLabel: "高コントラスト", visionEnable: "高コントラスト表示をオンにする", visionDisable: "高コントラスト表示をオフにする",
        visionEnabled: "高コントラスト表示をオンにしました", visionDisabled: "高コントラスト表示をオフにしました", languageChanged: "日本語に切り替えました",
        heroTitle: "作品集", heroLead: "短編、小説、詩、ゲーム、実験をひとつの作者カタログに。", openCatalog: "目次を開く",
        catalogTitle: "作品", catalogLead: "このサイトは、私の作品を集めたものです。すべてではないかもしれませんが、公開するために選んだ作品を収めています。",
        storiesEmpty: "最初の短編は公開準備中です。", poetryEmpty: "詩はこのセクションに掲載されます。", novelsEmpty: "小説はこのセクションに掲載されます。",
        gamesEmpty: "インタラクティブ作品とゲームを公開予定です。", experimentsEmpty: "型にはまらない形式をここで公開します。",
        footerTagline: "個人文学カタログ", footerNavLabel: "連絡先と個人リンク", personalBlog: "個人ブログ", phone: "電話", backResume: "履歴書へ戻る", copyright: "私家版"
    },
    ru: {
        top: "Наверх",
        writtenOn: "Написано", readWork: "Читать", downloadPdf: "Скачать PDF",
        title: "Сборник сочинений — Дмитрий Гришко",
        description: "Личный каталог рассказов, романов, стихов, игр и литературных экспериментов Дмитрия Гришко.",
        ogDescription: "Рассказы, стихи, романы, игры и литературные эксперименты.",
        ogAlt: "Обложка сборника сочинений Дмитрия Гришко на фактурной бумаге",
        skipCatalog: "К произведениям", skipContact: "К контактам", asideLabel: "Об авторе и навигация", author: "Дмитрий Гришко",
        edition: "Сборник сочинений", navLabel: "Разделы сборника", stories: "Рассказы", poetry: "Стихи", novels: "Романы", games: "Игры", experiments: "Эксперименты",
        languageLabel: "Язык сайта", visionLabel: "Высокий контраст", visionEnable: "Включить высококонтрастный режим", visionDisable: "Выключить высококонтрастный режим",
        visionEnabled: "Высококонтрастный режим включён", visionDisabled: "Высококонтрастный режим выключен", languageChanged: "Выбран русский язык",
        heroTitle: "Сборник сочинений", heroLead: "Рассказы, стихи, романы, игры и эксперименты — в одном авторском каталоге.", openCatalog: "Открыть оглавление",
        catalogTitle: "Произведения", catalogLead: "Данный сайт является сборником всех моих трудов, возможно не всех, но точно тех, которые я избрал для демонстрации.",
        storiesEmpty: "Первый рассказ готовится к публикации.", poetryEmpty: "Стихи появятся в этом разделе.", novelsEmpty: "Романы появятся в этом разделе.",
        gamesEmpty: "Здесь будут интерактивные произведения и игры.", experimentsEmpty: "Нестандартные форматы появятся здесь.",
        footerTagline: "Личный литературный каталог", footerNavLabel: "Контакты и личные ссылки", personalBlog: "Личный блог", phone: "Телефон", backResume: "Вернуться к резюме", copyright: "Частное издание"
    },
    en: {
        top: "Back to top",
        writtenOn: "Written", readWork: "Read", downloadPdf: "Download PDF",
        title: "Collected Works — Dmitry Grishko",
        description: "Dmitry Grishko’s personal catalogue of stories, poetry, novels, games, and literary experiments.",
        ogDescription: "Stories, poetry, novels, games, and literary experiments.",
        ogAlt: "Dmitry Grishko collected works cover on textured paper",
        skipCatalog: "Skip to works", skipContact: "Skip to contact", asideLabel: "About the author and navigation", author: "Dmitry Grishko",
        edition: "Collected works", navLabel: "Collection sections", stories: "Stories", poetry: "Poetry", novels: "Novels", games: "Games", experiments: "Experiments",
        languageLabel: "Site language", visionLabel: "High contrast", visionEnable: "Enable high-contrast mode", visionDisable: "Disable high-contrast mode",
        visionEnabled: "High-contrast mode enabled", visionDisabled: "High-contrast mode disabled", languageChanged: "English selected",
        heroTitle: "Collected works", heroLead: "Stories, poetry, novels, games, and experiments in one author catalogue.", openCatalog: "Open contents",
        catalogTitle: "Works", catalogLead: "This site is a collection of all my work—perhaps not all of it, but certainly the pieces I have chosen to share.",
        storiesEmpty: "The first story is being prepared for publication.", poetryEmpty: "Poetry will appear in this section.", novelsEmpty: "Novels will appear in this section.",
        gamesEmpty: "Interactive writing and games will appear here.", experimentsEmpty: "Unconventional formats will appear here.",
        footerTagline: "Personal literary catalogue", footerNavLabel: "Contact and personal links", personalBlog: "Personal blog", phone: "Phone", backResume: "Back to résumé", copyright: "Private edition"
    }
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const currentYear = String(new Date().getFullYear());
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
const transitionLayer = $(".flag-transition");
let currentLanguage = readPreference("poem-language", "ja");
let highContrastEnabled = readPreference("poem-vision", "default") === "high-contrast";
let transitionInProgress = false;

function readPreference(key, fallback) {
    try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}

function writePreference(key, value) {
    try { localStorage.setItem(key, value); } catch { /* Preferences are optional. */ }
}

function setMeta(selector, value) {
    const node = $(selector);
    if (node) node.setAttribute("content", value);
}

function updateVisionControl(t) {
    const control = $("[data-vision-toggle]");
    if (!control) return;
    control.setAttribute("aria-pressed", String(highContrastEnabled));
    control.setAttribute("aria-label", highContrastEnabled ? t.visionDisable : t.visionEnable);
    const label = $("[data-vision-label]");
    if (label) label.textContent = t.visionLabel;
}

function applyVisionMode(enabled, { announce = false } = {}) {
    highContrastEnabled = Boolean(enabled);
    if (highContrastEnabled) document.documentElement.dataset.vision = "high-contrast";
    else delete document.documentElement.dataset.vision;
    writePreference("poem-vision", highContrastEnabled ? "high-contrast" : "default");
    updateVisionControl(translations[currentLanguage]);
    if (announce) $("[data-a11y-status]").textContent = highContrastEnabled ? translations[currentLanguage].visionEnabled : translations[currentLanguage].visionDisabled;
}

function applyLanguage(language, { announce = false } = {}) {
    const t = translations[language] || translations.ja;
    currentLanguage = language in translations ? language : "ja";
    document.documentElement.lang = currentLanguage;
    document.title = t.title;
    setMeta('meta[name="description"]', t.description);
    setMeta('meta[property="og:title"]', t.title);
    setMeta('meta[property="og:description"]', t.ogDescription);
    setMeta('meta[property="og:image:alt"]', t.ogAlt);
    setMeta('meta[name="twitter:title"]', t.title);
    setMeta('meta[name="twitter:description"]', t.ogDescription);
    $$('[data-i18n]').forEach(node => {
        const value = t[node.dataset.i18n];
        if (value !== undefined) node.textContent = value;
    });
    $$('[data-i18n-aria]').forEach(node => {
        const value = t[node.dataset.i18nAria];
        if (value !== undefined) node.setAttribute("aria-label", value);
    });
    $$('[data-current-year]').forEach(node => { node.textContent = currentYear; });
    $$('.language-switcher button').forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === currentLanguage)));
    updateVisionControl(t);
    writePreference("poem-language", currentLanguage);
    if (announce) $("[data-a11y-status]").textContent = t.languageChanged;
}

function transitionLanguage(language) {
    if (!translations[language] || language === currentLanguage || transitionInProgress || !transitionLayer) return;
    const scrollPosition = { left: window.scrollX, top: window.scrollY };
    const focusedElement = document.activeElement;
    const wasInert = document.body.inert;
    transitionInProgress = true;
    document.body.style.setProperty("--transition-scroll-top", `${-scrollPosition.top}px`);
    document.documentElement.classList.add("language-transitioning");
    document.body.classList.add("language-transitioning");
    document.body.inert = true;
    document.body.setAttribute("aria-busy", "true");
    transitionLayer.dataset.language = language;
    transitionLayer.classList.remove("is-active");
    void transitionLayer.offsetWidth;
    transitionLayer.classList.add("is-active");
    const buttons = $$('.language-switcher button');
    buttons.forEach(button => { button.disabled = true; });
    const swapDelay = reduceMotion.matches ? 20 : language === "en" ? 1320 : 620;
    const finishDelay = reduceMotion.matches ? 80 : language === "en" ? 2350 : 1400;
    setTimeout(() => applyLanguage(language, { announce: true }), swapDelay);
    setTimeout(() => {
        transitionLayer.classList.remove("is-active");
        document.body.classList.remove("language-transitioning");
        document.documentElement.classList.remove("language-transitioning");
        document.body.style.removeProperty("--transition-scroll-top");
        document.body.inert = wasInert;
        document.body.removeAttribute("aria-busy");
        buttons.forEach(button => { button.disabled = false; });
        window.scrollTo({ ...scrollPosition, behavior: "instant" });
        if (focusedElement?.isConnected) focusedElement.focus({ preventScroll: true });
        transitionInProgress = false;
        updateToTop();
    }, finishDelay);
}

applyLanguage(translations[currentLanguage] ? currentLanguage : "ja");
applyVisionMode(highContrastEnabled);
$$('.language-switcher button').forEach(button => button.addEventListener("click", () => transitionLanguage(button.dataset.lang)));
$("[data-vision-toggle]")?.addEventListener("click", () => applyVisionMode(!highContrastEnabled, { announce: true }));

const toTop = $("[data-to-top]");
function updateToTop() {
    if (!toTop || transitionInProgress) return;
    const visible = window.scrollY > 640;
    toTop.classList.toggle("visible", visible);
    toTop.inert = !visible;
}
toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" }));
window.addEventListener("scroll", updateToTop, { passive: true });
updateToTop();
