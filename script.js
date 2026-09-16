// Shared gallery + lightbox behavior for the category pages.
// Expects PORTFOLIO_ITEMS to already be loaded from data.js.

function renderGallery(category, emptyMessage) {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  const items = PORTFOLIO_ITEMS.filter(item => item.category === category);

  if (items.length === 0) {
    grid.outerHTML = `<div class="empty-state"><p>${emptyMessage || 'More work coming soon.'}</p></div>`;
    return;
  }

  grid.innerHTML = items.map((item, i) => `
    <button class="gallery-item" type="button" data-index="${i}">
      <span class="thumb-wrap">
        <img src="${encodeURI(item.file)}" alt="${escapeHtml(item.title)}" loading="lazy">
      </span>
      <span class="item-title">${escapeHtml(item.title)}</span>
    </button>
  `).join('');

  setupLightbox(items);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function setupLightbox(items) {
  let current = 0;

  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close">&times;</button>
    <button class="lightbox-nav prev" type="button" aria-label="Previous">&larr;</button>
    <button class="lightbox-nav next" type="button" aria-label="Next">&rarr;</button>
    <div class="lightbox-inner">
      <img src="" alt="">
      <div class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lb);

  const img = lb.querySelector('img');
  const caption = lb.querySelector('.lightbox-caption');

  function show(index) {
    current = (index + items.length) % items.length;
    const item = items[current];
    img.src = encodeURI(item.file);
    img.alt = item.title;
    caption.textContent = `${item.title} (${current + 1} / ${items.length})`;
  }

  function open(index) {
    show(index);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('gallery-grid').addEventListener('click', (e) => {
    const btn = e.target.closest('.gallery-item');
    if (!btn) return;
    open(Number(btn.dataset.index));
  });

  lb.querySelector('.lightbox-close').addEventListener('click', close);
  lb.querySelector('.lightbox-nav.prev').addEventListener('click', () => show(current - 1));
  lb.querySelector('.lightbox-nav.next').addEventListener('click', () => show(current + 1));

  lb.addEventListener('click', (e) => {
    if (e.target === lb) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
}
