// REVIVE HEMP — Planetary Market JS
// Mirrors the product tile / copy / open functionality with sleek immersive enhancements.

const PRODUCTS = [
  {
    id: "revive-crumble-with-hte",
    displayName: "Revive Crumble With HTE",
    description: "High-terpene crumble. Intense aroma and powerful effects harvested under the twin moons.",
    perk: "10% off",
    code: "FEDDY",
    url: "https://revivehemp.store/discount/FEDDY?redirect=/products/crumble-with-hte-high-terpene-extract",
    image: "https://raw.githubusercontent.com/codeFEDDY/codeFEDDY.github.io/main/assets/vendor-products-clean/revive-crumble-hte.png",
    tags: ["Revive", "Crumble", "HTE"],
    category: "concentrate"
  },
  {
    id: "revive-thca-diamonds",
    displayName: "Revive THCA Diamonds",
    description: "Pure crystalline THCA. Sparkling like the rings of the Crater Planet.",
    perk: "10% off",
    code: "FEDDY",
    url: "https://revivehemp.store/discount/FEDDY?redirect=/products/thca-diamonds",
    image: "https://raw.githubusercontent.com/codeFEDDY/codeFEDDY.github.io/main/assets/vendor-products-clean/revive-live-resin-diamonds.png",
    tags: ["Revive", "Diamonds", "THCA"],
    category: "concentrate"
  },
  {
    id: "revive-live-resin-diamonds-sauce",
    displayName: "Revive Live Resin Diamonds & Sauce",
    description: "Full-spectrum live resin diamonds swimming in rich terpene sauce.",
    perk: "10% off",
    code: "FEDDY",
    url: "https://revivehemp.store/discount/FEDDY?redirect=/products/live-resin-diamonds-and-sauce",
    image: "https://raw.githubusercontent.com/codeFEDDY/codeFEDDY.github.io/main/assets/vendor-products-clean/revive-live-resin-diamonds.png",
    tags: ["Revive", "Live Resin", "Diamonds"],
    category: "concentrate"
  },
  {
    id: "revive-1g-prerolls",
    displayName: "Revive 1g Pre-Rolled Joints",
    description: "Three premium strains. Hand-rolled for the long expedition across the dunes.",
    perk: "10% off",
    code: "FEDDY",
    url: "https://revivehemp.store/discount/FEDDY?redirect=/products/1-gram-pre-rolled-joints-3-strains",
    image: "https://raw.githubusercontent.com/codeFEDDY/codeFEDDY.github.io/main/assets/vendor-products-clean/revive-prerolls.png",
    tags: ["Revive", "Pre-Rolls", "Flower"],
    category: "flower"
  },
  {
    id: "revive-hawaiian-get-away",
    displayName: "Hawaiian Get Away Cannaisseur Exotics",
    description: "Tropical exotic cultivar. A taste of distant paradise on this alien world.",
    perk: "10% off",
    code: "FEDDY",
    url: "https://revivehemp.store/discount/FEDDY?redirect=/products/hawaiian-get-away-cannaisseur-exotics",
    image: "https://raw.githubusercontent.com/codeFEDDY/codeFEDDY.github.io/main/assets/vendor-products-clean/revive-hawaiian.png",
    tags: ["Revive", "Exotics", "Cannaisseur"],
    category: "flower"
  },
  {
    id: "revive-unterped-badder",
    displayName: "Revive Unterped Badder",
    description: "Unterped BHO badder. Pure, clean, and potent. No added terps — just the planet's essence.",
    perk: "10% off",
    code: "FEDDY",
    url: "https://revivehemp.store/discount/FEDDY?redirect=/products/bho-badder-no-added-terps-new",
    image: "https://raw.githubusercontent.com/codeFEDDY/codeFEDDY.github.io/main/assets/vendor-products-clean/revive-sugar-crumble.png",
    tags: ["Revive", "Badder", "BHO"],
    category: "concentrate"
  },
  {
    id: "revive-hte-extract",
    displayName: "Revive HTE High Terpene Extract",
    description: "Organic cannabis-derived high terpene extract. The soul of the harvest in liquid form.",
    perk: "10% off",
    code: "FEDDY",
    url: "https://revivehemp.store/discount/FEDDY?redirect=/products/hte-high-terpene-extract-organic-cannabis-terpenes",
    image: "https://raw.githubusercontent.com/codeFEDDY/codeFEDDY.github.io/main/assets/vendor-products-clean/revive-hte.png",
    tags: ["Revive", "HTE", "Extract"],
    category: "concentrate"
  }
];

const state = {
  query: "",
  sort: "featured",
  category: "all"
};

function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $all(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function cardHTML(p) {
  const tagsHTML = p.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
  return `
  <article class="shop-card" data-id="${p.id}" data-name="${escapeHtml(p.displayName.toLowerCase())}" data-category="${p.category}">
    <a class="card-media js-offer" href="${p.url}" target="_blank" rel="noopener noreferrer sponsored" data-code="${p.code}" data-name="${escapeHtml(p.displayName)}">
      <img src="${p.image}" alt="${escapeHtml(p.displayName)}" loading="lazy" onerror="this.onerror=null;this.src='https://raw.githubusercontent.com/codeFEDDY/codeFEDDY.github.io/main/assets/drop-placeholder.svg';">
      <span class="badge">${escapeHtml(p.category.toUpperCase())}</span>
    </a>
    <div class="card-body">
      <h3 class="card-title">${escapeHtml(p.displayName)}</h3>
      <p class="card-desc">${escapeHtml(p.description)}</p>
      <div class="tags">${tagsHTML}</div>

      <div class="deal">
        <div>
          <div class="label">SURFACE DISCOUNT</div>
          <div class="code">${escapeHtml(p.perk)} · ${escapeHtml(p.code)}</div>
        </div>
        <button class="copy-btn" data-code="${p.code}" type="button">COPY</button>
      </div>

      <a class="open-link js-offer" href="${p.url}" target="_blank" rel="noopener noreferrer sponsored" data-code="${p.code}" data-name="${escapeHtml(p.displayName)}">
        OPEN WITH FEDDY APPLIED →
      </a>
    </div>
  </article>`;
}

function filteredProducts() {
  const q = state.query.trim().toLowerCase();
  let list = PRODUCTS.filter(p => {
    const hay = (p.displayName + " " + p.description + " " + p.tags.join(" ") + " " + p.category).toLowerCase();
    const qOk = !q || hay.includes(q);
    const cOk = state.category === "all" || p.category === state.category;
    return qOk && cOk;
  });

  if (state.sort === "name") {
    list.sort((a, b) => a.displayName.localeCompare(b.displayName));
  } else if (state.sort === "category") {
    list.sort((a, b) => (a.category + a.displayName).localeCompare(b.category + b.displayName));
  } else {
    // featured: original order (stable)
  }
  return list;
}

function renderGrid() {
  const grid = $("#grid");
  if (!grid) return;
  const list = filteredProducts();
  if (!list.length) {
    grid.innerHTML = `<div class="empty">No products match your search on this sector of the planet.<br>Try broadening the scan.</div>`;
    return;
  }
  grid.innerHTML = list.map(cardHTML).join("");
  attachCardListeners(grid);
}

function attachCardListeners(root) {
  // Copy buttons
  $all(".copy-btn", root).forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const code = btn.dataset.code || "FEDDY";
      try {
        await navigator.clipboard.writeText(code);
        const orig = btn.textContent;
        btn.textContent = "COPIED";
        btn.classList.add("copied");
        showToast(`CODE ${code} COPIED — REDEEM ON SURFACE`);
        setTimeout(() => {
          btn.textContent = orig;
          btn.classList.remove("copied");
        }, 1600);
      } catch (err) {
        showToast(`USE CODE: ${code}`);
      }
    });
  });

  // Offer clicks (auto-copy code except on some)
  $all(".js-offer", root).forEach(link => {
    link.addEventListener("click", () => {
      const code = link.dataset.code;
      if (code) {
        // Fire and forget copy for convenience (matches original behavior)
        navigator.clipboard?.writeText(code).catch(() => {});
        // subtle visual ping on the link
        link.style.transition = "filter 60ms";
        link.style.filter = "brightness(1.6)";
        setTimeout(() => { link.style.filter = ""; }, 180);
      }
    });
  });
}

function setupFilters() {
  const search = $("#search");
  const sort = $("#sort");
  const cat = $("#category");

  if (search) {
    search.addEventListener("input", () => {
      state.query = search.value;
      renderGrid();
    });
  }
  if (sort) {
    sort.addEventListener("change", () => {
      state.sort = sort.value;
      renderGrid();
    });
  }
  if (cat) {
    cat.addEventListener("change", () => {
      state.category = cat.value;
      renderGrid();
    });
  }

  // Keyboard hint
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement.tagName === "BODY") {
      e.preventDefault();
      search?.focus();
    }
  });
}

function showToast(msg) {
  const t = $("#toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove("show"), 2100);
}

function initTilt() {
  const cards = $all(".shop-card");
  cards.forEach(card => {
    let raf;
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      const rotX = (-y * 6).toFixed(1);
      const rotY = (x * 8).toFixed(1);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
      });
    });
    card.addEventListener("mouseleave", () => {
      cancelAnimationFrame(raf);
      card.style.transition = "transform 420ms cubic-bezier(.2,.9,.2,1)";
      card.style.transform = "";
      setTimeout(() => { card.style.transition = ""; }, 420);
    });
  });
}

function initStarfield() {
  const canvas = $("#fx-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d", { alpha: true });
  let w, h, stars = [], orbs = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize, { passive: true });
  resize();

  // Stars
  for (let i = 0; i < 220; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h * 0.9,
      r: Math.random() * 1.1 + 0.3,
      a: Math.random() * 0.7 + 0.3,
      tw: Math.random() * 0.03 + 0.008
    });
  }
  // Neon orbs (echoing the swirls in the reference art)
  for (let i = 0; i < 7; i++) {
    orbs.push({
      x: Math.random() * w,
      y: 80 + Math.random() * (h * 0.55),
      r: 22 + Math.random() * 38,
      hue: Math.random() > 0.5 ? 280 : 185,
      a: 0.035 + Math.random() * 0.045,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.07
    });
  }

  function draw(t = 0) {
    ctx.clearRect(0, 0, w, h);

    // stars
    ctx.fillStyle = "#fff";
    for (const s of stars) {
      const twinkle = 0.65 + Math.sin(t * s.tw) * 0.35;
      ctx.globalAlpha = s.a * twinkle;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      // occasional bigger flare
      if (Math.random() < 0.006) {
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 2.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // soft glowing orbs
    ctx.globalAlpha = 1;
    for (const o of orbs) {
      o.x += o.vx;
      o.y += o.vy;
      if (o.x < -80) o.x = w + 60;
      if (o.x > w + 80) o.x = -60;
      if (o.y < 30) o.y = h * 0.6;
      if (o.y > h * 0.72) o.y = 40;

      const grad = ctx.createRadialGradient(o.x, o.y, 2, o.x, o.y, o.r);
      const col = o.hue === 280 ? "192,38,255" : "0,240,255";
      grad.addColorStop(0, `rgba(${col}, ${o.a})`);
      grad.addColorStop(0.5, `rgba(${col}, ${o.a * 0.4})`);
      grad.addColorStop(1, "rgba(5,5,7,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

function init() {
  // Render initial grid
  const grid = $("#grid");
  if (grid) {
    renderGrid();
  }

  setupFilters();

  // Optional tilt (sleek but not on touch)
  if (!("ontouchstart" in window)) {
    // delay to let cards exist
    setTimeout(initTilt, 80);
  }

  // Starfield + orbs for planet immersion
  initStarfield();

  // Toast container exists in HTML
  // Bonus: press "?" shows all categories hint
  document.addEventListener("keypress", (e) => {
    if (e.key === "?") {
      const cats = [...new Set(PRODUCTS.map(p => p.category))];
      showToast("SECTORS: " + cats.join(" • "));
    }
  });

  // Accessibility: announce ready
  console.log("%c[ReviveHemp] Planetary market initialized — tiles ready.", "color:#00f0ff");
}

// Boot
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}