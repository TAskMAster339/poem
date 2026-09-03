# Произведения

Шаблон для `index.html` → нужный раздел → `.works-list`.

Разделы: `stories`, `poetry`, `novels`, `games`, `experiments`.

```html
<li class="work-entry">
  <div class="work-info">
    <h3 lang="ru">Название произведения</h3>
    <p class="work-date">
      <span data-i18n="writtenOn">Написано</span>:
      <time datetime="2026-09-03">03.09.2026</time>
    </p>
  </div>
  <div class="work-actions">
    <a class="work-action"
       href="https://example.com/story"
       target="_blank" rel="noopener"
       data-i18n="readWork">Читать</a>
    <a class="work-action"
       href="works/story.pdf" download
       data-i18n="downloadPdf">Скачать PDF</a>
  </div>
</li>
```

- Первое произведение заменяет `<li class="empty">…</li>`.
- Название и `lang` — оригинальные; `data-i18n` — только у подписей интерфейса.
- `<time>` — дата написания. Допустим только год: `<time datetime="2026">2026</time>`.
- Внешняя ссылка и PDF независимы: ненужный `<a>` удалить.
- PDF — в `works/`, путь без начального `/`. Для `download` нужен файл на том же origin.
- Публикация: push в `main` → GitHub Actions.
