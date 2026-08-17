/*
 * مصدر بيانات المنيو المركزي. يمكن استبدال image لاحقاً بمسار صورة المنتج
 * من دون تغيير أي جزء من واجهة العرض أو السلة.
 */
const categoryData = [
  { id: "all", label: "كل المنيو", icon: "✦" },
  { id: "broast", label: "وجبات بروست", icon: "🍗" },
  { id: "strips", label: "وجبات استربس", icon: "🌶️" },
  { id: "syrian", label: "سندوتشات سوري", icon: "🌯" },
  { id: "rizo", label: "ريزو", icon: "🍚" },
  { id: "mac", label: "ماك تشيز", icon: "🧀" },
  { id: "chicken-burger", label: "تشيكن برجر", icon: "🍔" },
  { id: "beef-burger", label: "بيف برجر", icon: "🍔" },
  { id: "fries", label: "فرايز", icon: "🍟" },
  { id: "protein-fries", label: "فرايز بروتين", icon: "🍟" },
  { id: "mix-fries", label: "فرايز ميكس", icon: "🍟" },
  { id: "drinks", label: "مشروبات", icon: "🥤" },
  { id: "extras", label: "الإضافات", icon: "➕" },
  { id: "offers", label: "عروض", icon: "⭐" }
];

const sharedExtras = [
  { name: "إضافة صوص", price: 10 },
  { name: "كول سلو", price: 10 },
  { name: "إضافة تركي مدخن أو سلامي", price: 20 },
  { name: "إضافة بيكون أو هوت دوج", price: 30 },
  { name: "إضافة جبنة شيدر", price: 50 },
  { name: "أرز", price: 20 }
];

const mealExtras = () => sharedExtras;
const mealNote = "تُقدَّم مع فرايز وكول سلو وبطاطس وثومية.";

const menuItems = [
  // وجبات البروست
  { id: "broast-2", name: "وجبة بروست ٢ قطع", category: "broast", description: mealNote, image: null, visual: "🍗", visualClass: "visual-chicken", prices: [{ price: 110 }], extras: mealExtras() },
  { id: "broast-3", name: "وجبة بروست ٣ قطع", category: "broast", description: mealNote, image: null, visual: "🍗", visualClass: "visual-chicken", prices: [{ price: 165 }], extras: mealExtras() },
  { id: "broast-4", name: "وجبة بروست ٤ قطع", category: "broast", description: mealNote, image: null, visual: "🍗", visualClass: "visual-chicken", prices: [{ price: 210 }], extras: mealExtras() },
  { id: "broast-6", name: "وجبة بروست ٦ قطع", category: "broast", description: mealNote, image: null, visual: "🍗", visualClass: "visual-chicken", prices: [{ price: 315 }], extras: mealExtras() },
  { id: "broast-9", name: "وجبة بروست ٩ قطع", category: "broast", description: mealNote, image: null, visual: "🍗", visualClass: "visual-chicken", prices: [{ price: 420 }], extras: mealExtras() },
  { id: "broast-12", name: "وجبة بروست ١٢ قطعة", category: "broast", description: mealNote, image: null, visual: "🍗", visualClass: "visual-chicken", prices: [{ price: 540 }], extras: mealExtras() },
  { id: "broast-15", name: "وجبة بروست ١٥ قطعة", category: "broast", description: mealNote, image: null, visual: "🍗", visualClass: "visual-chicken", prices: [{ price: 680 }], extras: mealExtras() },
  { id: "broast-18", name: "وجبة بروست ١٨ قطعة", category: "broast", description: mealNote, image: null, visual: "🍗", visualClass: "visual-chicken", prices: [{ price: 750 }], extras: mealExtras() },

  // وجبات الاستربس
  { id: "strips-2", name: "وجبة استربس ٢ قطع", category: "strips", description: mealNote, image: null, visual: "🌶️", visualClass: "visual-chicken", prices: [{ price: 100 }], extras: mealExtras() },
  { id: "strips-3", name: "وجبة استربس ٣ قطع", category: "strips", description: mealNote, image: null, visual: "🌶️", visualClass: "visual-chicken", prices: [{ price: 140 }], extras: mealExtras() },
  { id: "strips-4", name: "وجبة استربس ٤ قطع", category: "strips", description: mealNote, image: null, visual: "🌶️", visualClass: "visual-chicken", prices: [{ price: 180 }], extras: mealExtras() },
  { id: "strips-5", name: "وجبة استربس ٥ قطع", category: "strips", description: mealNote, image: null, visual: "🌶️", visualClass: "visual-chicken", prices: [{ price: 210 }], extras: mealExtras() },
  { id: "strips-6", name: "وجبة استربس ٦ قطع", category: "strips", description: mealNote, image: null, visual: "🌶️", visualClass: "visual-chicken", prices: [{ price: 250 }], extras: mealExtras() },
  { id: "strips-9", name: "وجبة استربس ٩ قطع", category: "strips", description: mealNote, image: null, visual: "🌶️", visualClass: "visual-chicken", prices: [{ price: 340 }], extras: mealExtras() },
  { id: "strips-12", name: "وجبة استربس ١٢ قطعة", category: "strips", description: mealNote, image: null, visual: "🌶️", visualClass: "visual-chicken", prices: [{ price: 440 }], extras: mealExtras() },

  // السندوتشات السوري
  { id: "syrian-potato", name: "بطاطس", category: "syrian", description: "سندوتش بطاطس سوري.", image: null, visual: "🌯", visualClass: "visual-fries", prices: [{ price: 30 }], extras: mealExtras() },
  { id: "syrian-cheese", name: "بطاطس جبنة", category: "syrian", description: "سندوتش بطاطس بالجبنة.", image: null, visual: "🌯", visualClass: "visual-fries", prices: [{ price: 45 }], extras: mealExtras() },
  { id: "syrian-cheese-mix", name: "بطاطس جبنة ميكس", category: "syrian", description: "سندوتش بطاطس جبنة ميكس.", image: null, visual: "🌯", visualClass: "visual-fries", prices: [{ price: 55 }], extras: mealExtras() },
  { id: "syrian-strips", name: "بطاطس استربس", category: "syrian", description: "سندوتش بطاطس مع استربس.", image: null, visual: "🌯", visualClass: "visual-chicken", prices: [{ price: 65 }], extras: mealExtras() },

  // ريزو
  { id: "rizo-classic", name: "ريزو كلاسيك", category: "rizo", description: "قطع الاستربس مع شيدر وصوصات بطاطسكا.", image: null, visual: "🍚", visualClass: "visual-rice", prices: [{ size: "M", price: 85 }, { size: "L", price: 110 }], options: [{ name: "اختر صوصك المفضل", values: ["رانش", "باربكيو", "مايونيز", "شيدر", "هالبينو"] }], extras: mealExtras() },
  { id: "rizo-margna", name: "ريزو مارجنا", category: "rizo", description: "صوص مارجنا مع قطع الاستربس وشيدر وصوصات بطاطسكا.", image: null, visual: "🍚", visualClass: "visual-rice", prices: [{ size: "M", price: 120 }, { size: "L", price: 160 }], options: [{ name: "اختر صوصك المفضل", values: ["رانش", "باربكيو", "مايونيز", "شيدر", "هالبينو"] }], extras: mealExtras() },

  // ماك تشيز
  { id: "mac-crispy-bbq", name: "كرسبي تشيكن باربكيو", category: "mac", description: "مكرونة مع قطع الاستربس وصوص باربكيو وبطاطس.", image: null, visual: "🧀", visualClass: "visual-pasta", prices: [{ size: "M", price: 110 }, { size: "L", price: 140 }], extras: mealExtras() },
  { id: "mac-crispy-ranch", name: "كرسبي تشيكن رانش", category: "mac", description: "مكرونة مع قطع الاستربس وصوص رانش.", image: null, visual: "🧀", visualClass: "visual-pasta", prices: [{ size: "M", price: 110 }, { size: "L", price: 145 }], extras: mealExtras() },
  { id: "mac-sausage-mix", name: "سجق خضار ميكس لحوم", category: "mac", description: "مكرونة مع سجق بلدي وسلامي وهوت دوج وصوصات وبطاطس.", image: null, visual: "🧀", visualClass: "visual-pasta", prices: [{ size: "M", price: 130 }, { size: "L", price: 170 }], extras: mealExtras() },
  { id: "mac-baladi-sausage", name: "سجق بلدي", category: "mac", description: "مكرونة مع قطع السجق وصوصات وبطاطس.", image: null, visual: "🧀", visualClass: "visual-pasta", prices: [{ size: "M", price: 110 }, { size: "L", price: 150 }], extras: mealExtras() },
  { id: "mac-cheese-fries", name: "ماك تشيز + فرايز", category: "mac", description: "مكرونة مع قطع الاستربس وفرايز وصوصات بطاطسكا.", image: null, visual: "🧀", visualClass: "visual-pasta", prices: [{ size: "M", price: 100 }, { size: "L", price: 130 }], extras: mealExtras() },

  // تشيكن برجر
  { id: "chicken-riby", name: "ريبي ماستر تشيكن", category: "chicken-burger", description: "فرايز مع جبنة شيدر وصوص بطاطسكا.", image: null, visual: "🍔", visualClass: "visual-burger", prices: [{ size: "S", price: 110 }, { size: "D", price: 150 }, { size: "T", price: 195 }], extras: mealExtras() },
  { id: "chicken-fried", name: "فرايد برجر تشيكن", category: "chicken-burger", description: "فرايز مع جبنة وصوص بطاطسكا.", image: null, visual: "🍔", visualClass: "visual-burger", prices: [{ size: "S", price: 110 }, { size: "D", price: 155 }, { size: "T", price: 205 }], extras: mealExtras() },
  { id: "chicken-sweet-smoke", name: "سويت اسموك تشيكن", category: "chicken-burger", description: "فرايز مع جبنة وبيكون وبصل مكرمل وصوص بطاطسكا.", image: null, visual: "🍔", visualClass: "visual-burger", prices: [{ size: "S", price: 120 }, { size: "D", price: 165 }, { size: "T", price: 220 }], extras: mealExtras() },
  { id: "chicken-crispy", name: "كرسبي تشيكن برجر", category: "chicken-burger", description: "فرايز مع جبنة وباربكيو وبيكون وصوص بطاطسكا.", image: null, visual: "🍔", visualClass: "visual-burger", prices: [{ size: "S", price: 140 }, { size: "D", price: 170 }, { size: "T", price: 220 }], extras: mealExtras() },

  // بيف برجر
  { id: "beef-riby", name: "ريبي ماستر لحم", category: "beef-burger", description: "قطع برجر لحم مع جبنة وخضار وصوص بطاطسكا.", image: null, visual: "🍔", visualClass: "visual-burger", prices: [{ size: "S", price: 110 }, { size: "D", price: 150 }, { size: "T", price: 195 }], extras: mealExtras() },
  { id: "beef-sweet-onion", name: "سويت أونيون لحم", category: "beef-burger", description: "قطع لحم مع جبنة وبصل مكرمل وصوص بطاطسكا.", image: null, visual: "🍔", visualClass: "visual-burger", prices: [{ size: "S", price: 115 }, { size: "D", price: 155 }, { size: "T", price: 215 }], extras: mealExtras() },
  { id: "beef-fried", name: "فرايد برجر لحم", category: "beef-burger", description: "قطع لحم مع جبنة وتركي وصوص بطاطسكا.", image: null, visual: "🍔", visualClass: "visual-burger", prices: [{ size: "S", price: 120 }, { size: "D", price: 165 }, { size: "T", price: 220 }], extras: mealExtras() },
  { id: "beef-sweet-smoke", name: "سويت سموك لحم", category: "beef-burger", description: "قطع لحم مع جبنة وبيكون وصوص بطاطسكا.", image: null, visual: "🍔", visualClass: "visual-burger", prices: [{ size: "S", price: 125 }, { size: "D", price: 155 }, { size: "T", price: 215 }], extras: mealExtras() },
  { id: "beef-vip", name: "برجر بطاطسكا (VIP)", category: "beef-burger", description: "قطع برجر مع شيدر وهالبينو وصوصات.", image: null, visual: "🍔", visualClass: "visual-burger", prices: [{ size: "S", price: 155 }, { size: "D", price: 200 }, { size: "T", price: 250 }], extras: mealExtras() },

  // فرايز
  { id: "fries-classic", name: "كلاسيك فرايز", category: "fries", description: "بطاطس مع بهارات.", image: null, visual: "🍟", visualClass: "visual-fries", prices: [{ size: "M", price: 30 }, { size: "L", price: 40 }], extras: mealExtras() },
  { id: "fries-cheesy", name: "تشيزي فرايز", category: "fries", description: "بطاطس مع جبنة وبهارات.", image: null, visual: "🍟", visualClass: "visual-fries", prices: [{ size: "M", price: 50 }, { size: "L", price: 70 }], extras: mealExtras() },
  { id: "fries-cheesy-sauce", name: "تشيزي فرايز صوص", category: "fries", description: "بطاطس مع جبنة وصوصات بطاطسكا: باربكيو أو رانش أو تكساس أو هالبينو.", image: null, visual: "🍟", visualClass: "visual-fries", prices: [{ size: "M", price: 60 }, { size: "L", price: 80 }], options: [{ name: "اختر الصوص", values: ["باربكيو", "رانش", "تكساس", "هالبينو"] }], extras: mealExtras() },

  // فرايز بروتين
  { id: "protein-chicken", name: "تشيكن فرايز (حار - عادي)", category: "protein-fries", description: "قطع فرايز مع بطاطس وجبنة وصوص تشيكنلو.", image: null, visual: "🍟", visualClass: "visual-chicken", prices: [{ size: "M", price: 85 }, { size: "L", price: 105 }], options: [{ name: "اختار الطعم", values: ["حار", "عادي"] }], extras: mealExtras() },
  { id: "protein-beef", name: "بيف فرايز", category: "protein-fries", description: "قطعة برجر لحم مع بطاطس وجبنة.", image: null, visual: "🍟", visualClass: "visual-burger", prices: [{ size: "M", price: 95 }, { size: "L", price: 110 }], extras: mealExtras() },
  { id: "protein-sausage", name: "سجق فرايز", category: "protein-fries", description: "سجق مع بطاطس وجبنة.", image: null, visual: "🍟", visualClass: "visual-fries", prices: [{ size: "M", price: 85 }, { size: "L", price: 105 }], extras: mealExtras() },

  // فرايز ميكس
  { id: "mix-strips-sausage", name: "فرايز استربس سجق", category: "mix-fries", description: "بطاطس مع قطع الدجاج وسجق وجبنة وصوصات بطاطسكا.", image: null, visual: "🍟", visualClass: "visual-chicken", prices: [{ size: "M", price: 110 }, { size: "L", price: 130 }], extras: mealExtras() },
  { id: "mix-strips-bacon", name: "فرايز استربس بيكن", category: "mix-fries", description: "بطاطس مع قطع الدجاج وبيكن وجبنة وصوصات بطاطسكا.", image: null, visual: "🍟", visualClass: "visual-fries", prices: [{ size: "M", price: 120 }, { size: "L", price: 140 }], extras: mealExtras() },
  { id: "mix-strips-salami", name: "فرايز استربس سلامي", category: "mix-fries", description: "بطاطس مع قطع الدجاج وسلامي وجبنة وصوصات بطاطسكا.", image: null, visual: "🍟", visualClass: "visual-fries", prices: [{ size: "M", price: 120 }, { size: "L", price: 130 }], extras: mealExtras() },
  { id: "mix-meats", name: "فرايز ميكس لحوم", category: "mix-fries", description: "بطاطس مع قطع سجق وبيكن وسلامي وجبنة وصوص بطاطسكا.", image: null, visual: "🍟", visualClass: "visual-fries", prices: [{ size: "M", price: 120 }, { size: "L", price: 140 }], extras: mealExtras() },

  // المشروبات
  { id: "drink-water", name: "مياه", category: "drinks", description: "مياه معدنية.", image: null, visual: "💧", visualClass: "visual-drink", prices: [{ price: 7 }] },
  { id: "drink-cola", name: "كولا ماشين", category: "drinks", description: "مشروب كولا من الماكينة.", image: null, visual: "🥤", visualClass: "visual-drink", prices: [{ price: 20 }] },
  { id: "drink-orange", name: "برتقال ماشين", category: "drinks", description: "مشروب برتقال من الماكينة.", image: null, visual: "🥤", visualClass: "visual-drink", prices: [{ price: 20 }] },
  { id: "drink-sprite", name: "سبرايت ماشين", category: "drinks", description: "مشروب سبرايت من الماكينة.", image: null, visual: "🥤", visualClass: "visual-drink", prices: [{ price: 20 }] },
  { id: "drink-can", name: "كان بيبسي غازية", category: "drinks", description: "كان مشروب غازي.", image: null, visual: "🥤", visualClass: "visual-drink", prices: [{ price: 20 }] },

  // الإضافات
  { id: "extra-sauce", name: "إضافة صوص", category: "extras", description: "إضافة منفصلة من الصوص.", image: null, visual: "➕", visualClass: "visual-extra", prices: [{ price: 10 }] },
  { id: "extra-coleslaw", name: "كول سلو", category: "extras", description: "إضافة كول سلو.", image: null, visual: "🥗", visualClass: "visual-extra", prices: [{ price: 10 }] },
  { id: "extra-turkey-salami", name: "إضافة تركي مدخن أو سلامي", category: "extras", description: "إضافة تركي مدخن أو سلامي.", image: null, visual: "➕", visualClass: "visual-extra", prices: [{ price: 20 }] },
  { id: "extra-bacon-hotdog", name: "إضافة بيكون أو هوت دوج", category: "extras", description: "إضافة بيكون أو هوت دوج.", image: null, visual: "➕", visualClass: "visual-extra", prices: [{ price: 30 }] },
  { id: "extra-cheddar", name: "إضافة جبنة شيدر", category: "extras", description: "إضافة جبنة شيدر.", image: null, visual: "🧀", visualClass: "visual-extra", prices: [{ price: 50 }] },
  { id: "extra-rice", name: "أرز", category: "extras", description: "إضافة أرز.", image: null, visual: "🍚", visualClass: "visual-extra", prices: [{ price: 20 }] },

  // العرض الظاهر في المنيو
  { id: "offer-cheese-fries-drink", name: "عرض بطاطس تشيز + مشروب", category: "offers", description: "ادفع ٣٥ جنيه وخد بطاطس تشيز ومشروب.", image: null, visual: "⭐", visualClass: "visual-fries", prices: [{ price: 35 }] }
];

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const currency = (value) => `${value} ج.م`;
const labelForCategory = (id) => categoryData.find((category) => category.id === id)?.label || "المنيو";
const escapeHTML = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));

const elements = {
  grid: $("#menu-grid"),
  tabs: $("#category-tabs"),
  search: $("#menu-search"),
  clearSearch: $("#clear-search"),
  resultsTitle: $("#results-title"),
  resultsCount: $("#results-count"),
  categoryLabel: $("#category-label"),
  empty: $("#empty-state"),
  reset: $("#reset-filters"),
  itemsTotal: $("#items-total"),
  overlay: $("#overlay"),
  cart: $("#cart-drawer"),
  closeCart: $("#close-cart"),
  floatingCart: $("#floating-cart"),
  floatingCartCount: $("#floating-cart-count"),
  cartItems: $("#cart-items"),
  cartEmpty: $("#cart-empty"),
  cartFooter: $("#cart-footer"),
  cartTotal: $("#cart-total"),
  orderWhatsApp: $("#order-whatsapp"),
  modal: $("#item-modal"),
  closeModal: $("#close-modal"),
  modalContent: $("#modal-content"),
  toast: $("#toast")
};

let activeCategory = "all";
let searchQuery = "";
let modalState = null;
let lastTrigger = null;
let toastTimer = null;

// تحقق دفاعي من بنية عنصر السلة المخزّن لمنع أي بيانات تالفة/خبيثة في localStorage
// من كسر العرض أو حقن قيم غير صالحة (البيانات تُعرض عبر escapeHTML لكن التحقق يمنع أخطاء الأنواع).
function sanitizeLine(line) {
  if (!line || typeof line !== "object") return null;
  const quantity = Number(line.quantity);
  const unitPrice = Number(line.unitPrice);
  if (!Number.isFinite(quantity) || !Number.isFinite(unitPrice) || quantity <= 0) return null;
  if (typeof line.name !== "string" || !line.name) return null;
  const extras = Array.isArray(line.extras)
    ? line.extras.filter((extra) => extra && typeof extra === "object" && typeof extra.name === "string" && Number.isFinite(Number(extra.price)))
    : [];
  return {
    lineId: typeof line.lineId === "string" ? line.lineId : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    configKey: typeof line.configKey === "string" ? line.configKey : "",
    itemId: typeof line.itemId === "string" ? line.itemId : "",
    name: line.name,
    size: typeof line.size === "string" ? line.size : "",
    options: Array.isArray(line.options) ? line.options.map((value) => String(value)) : [],
    extras,
    unitPrice,
    quantity: Math.min(quantity, 99)
  };
}

function readCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem("patatska-cart"));
    if (!Array.isArray(savedCart)) return [];
    return savedCart.map(sanitizeLine).filter(Boolean).slice(0, 100);
  } catch {
    return [];
  }
}

let cart = readCart();

function saveCart() {
  localStorage.setItem("patatska-cart", JSON.stringify(cart));
}

function visualMarkup(item, mode = "card") {
  if (item.image) {
    return `<img src="${escapeHTML(item.image)}" alt="صورة ${escapeHTML(item.name)}">`;
  }
  const accent = item.category === "chicken-burger" || item.category === "beef-burger" ? "🍟" : "";
  return `<span class="food-placeholder" aria-hidden="true">${item.visual}${accent ? `<span>${accent}</span>` : ""}</span>`;
}

function priceMarkup(prices) {
  return prices.map(({ size, price }) => `<span class="price-chip">${size ? `<small>${size}</small>` : ""}${currency(price)}</span>`).join("");
}

function filteredItems() {
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase("ar-EG");
  return menuItems.filter((item) => {
    const categoryMatches = activeCategory === "all" || item.category === activeCategory;
    const searchableText = [item.name, item.description, labelForCategory(item.category), ...(item.options?.flatMap((option) => option.values) || [])].join(" ").toLocaleLowerCase("ar-EG");
    return categoryMatches && (!normalizedQuery || searchableText.includes(normalizedQuery));
  });
}

function renderTabs() {
  elements.tabs.innerHTML = categoryData.map((category) => {
    const selected = category.id === activeCategory;
    return `<button class="category-tab ${selected ? "is-active" : ""}" type="button" role="tab" aria-selected="${selected}" data-category="${category.id}">${category.icon} ${category.label}</button>`;
  }).join("");
}

function renderSkeletons() {
  elements.grid.innerHTML = Array.from({ length: 8 }, () => '<div class="menu-card skeleton" aria-hidden="true"></div>').join("");
}

function renderItems() {
  const items = filteredItems();
  const categoryLabel = activeCategory === "all" ? "كل المنيو" : labelForCategory(activeCategory);
  elements.grid.setAttribute("aria-busy", "false");
  elements.categoryLabel.textContent = categoryLabel;
  elements.resultsTitle.textContent = searchQuery ? `نتائج البحث عن «${searchQuery}»` : categoryLabel;
  elements.resultsCount.textContent = `${items.length} ${items.length === 1 ? "صنف" : "أصناف"}`;
  elements.grid.hidden = items.length === 0;
  elements.empty.hidden = items.length !== 0;

  if (!items.length) {
    elements.grid.innerHTML = "";
    return;
  }

  elements.grid.innerHTML = items.map((item, index) => `
    <article class="menu-card" style="animation-delay:${Math.min(index * 24, 250)}ms">
      <div class="card-visual ${item.visualClass}">
        ${visualMarkup(item)}
        <span class="card-badge">${labelForCategory(item.category)}</span>
      </div>
      <div class="card-content">
        <h3>${escapeHTML(item.name)}</h3>
        <p class="card-description">${escapeHTML(item.description)}</p>
        <div class="price-list" aria-label="الأسعار">${priceMarkup(item.prices)}</div>
        <div class="card-actions">
          <button class="primary-button" type="button" data-action="add" data-id="${item.id}">أضف للسلة</button>
        </div>
      </div>
    </article>
  `).join("");
}

function chooseCategory(category) {
  activeCategory = category;
  renderTabs();
  renderItems();
}

function getModalTotal() {
  if (!modalState) return 0;
  const selectedPrice = modalState.item.prices.find((price) => (price.size || "") === modalState.size) || modalState.item.prices[0];
  const extrasPrice = [...modalState.extras].reduce((total, index) => total + (modalState.item.extras?.[Number(index)]?.price || 0), 0);
  return (selectedPrice?.price || 0) * modalState.quantity + extrasPrice * modalState.quantity;
}

function optionsMarkup(item) {
  if (!item.options?.length) return "";
  return item.options.map((option, optionIndex) => `
    <section class="selection-group">
      <h3>${escapeHTML(option.name)}</h3>
      <div class="option-values">
        ${option.values.map((value, valueIndex) => `
          <label class="choice">
            <input type="radio" name="option-${optionIndex}" value="${escapeHTML(value)}" data-modal-option="${optionIndex}" ${modalState.options[optionIndex] === value ? "checked" : ""}>
            <span>${escapeHTML(value)}</span>
          </label>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function extrasMarkup(item) {
  if (!item.extras?.length) return "";
  return `
    <section class="selection-group">
      <h3>الإضافات <small>اختياري</small></h3>
      <div class="option-values">
        ${item.extras.map((extra, extraIndex) => `
          <label class="choice">
            <input type="checkbox" value="${extraIndex}" data-modal-extra ${modalState.extras.has(extraIndex) ? "checked" : ""}>
            <span>${escapeHTML(extra.name)} <b class="add-on-price">+${currency(extra.price)}</b></span>
          </label>
        `).join("")}
      </div>
    </section>
  `;
}

function renderModal() {
  if (!modalState) return;
  const { item, size, quantity, editingLineId } = modalState;
  const multipleSizes = item.prices.length > 1;
  const submitLabel = editingLineId ? "حفظ التعديل" : "أضف إلى السلة";
  elements.modalContent.innerHTML = `
    <div class="modal-layout">
      <div class="modal-art ${item.visualClass}">${visualMarkup(item, "modal")}</div>
      <div class="modal-details">
        <p class="section-kicker">${labelForCategory(item.category)}</p>
        <h2 id="modal-name">${escapeHTML(item.name)}</h2>
        <p class="modal-description">${escapeHTML(item.description)}</p>
        ${multipleSizes ? `
          <section class="selection-group">
            <h3>اختر الحجم</h3>
            <div class="size-options">
              ${item.prices.map((price) => `
                <label class="choice">
                  <input type="radio" name="size" value="${price.size || ""}" data-modal-size ${size === (price.size || "") ? "checked" : ""}>
                  <span>${price.size || "السعر"} — ${currency(price.price)}</span>
                </label>
              `).join("")}
            </div>
          </section>` : `<div class="price-list"><span class="price-chip">${currency(item.prices[0].price)}</span></div>`}
        ${optionsMarkup(item)}
        ${extrasMarkup(item)}
        <div class="quantity-and-total">
          <div>
            <small>الكمية</small>
            <div class="quantity-control" aria-label="تحديد الكمية">
              <button type="button" data-modal-quantity="increase" aria-label="زيادة الكمية">+</button>
              <span>${quantity}</span>
              <button type="button" data-modal-quantity="decrease" aria-label="تقليل الكمية">−</button>
            </div>
          </div>
          <div>
            <small>الإجمالي</small>
            <strong>${currency(getModalTotal())}</strong>
          </div>
        </div>
        <button class="primary-button modal-add" type="button" data-modal-add>${submitLabel} · ${currency(getModalTotal())}</button>
      </div>
    </div>
  `;
}

function openModal(itemId, trigger, lineToEdit = null) {
  const item = menuItems.find((menuItem) => menuItem.id === itemId);
  if (!item) return;
  lastTrigger = trigger || null;
  const selectedExtraIndexes = (lineToEdit?.extras || []).map((extra) => item.extras?.findIndex((itemExtra) => itemExtra.name === extra.name)).filter((index) => index >= 0);
  modalState = {
    item,
    size: lineToEdit?.size || item.prices[0].size || "",
    options: lineToEdit?.options?.length === (item.options || []).length ? [...lineToEdit.options] : (item.options || []).map((option) => option.values[0]),
    extras: new Set(selectedExtraIndexes),
    quantity: lineToEdit?.quantity || 1,
    editingLineId: lineToEdit?.lineId || null
  };
  renderModal();
  elements.modal.hidden = false;
  document.body.classList.add("no-scroll");
  window.setTimeout(() => $("[data-modal-size], [data-modal-option], [data-modal-extra], [data-modal-add]", elements.modalContent)?.focus(), 0);
}

function closeModal() {
  if (elements.modal.hidden) return;
  elements.modal.hidden = true;
  modalState = null;
  document.body.classList.toggle("no-scroll", elements.cart.classList.contains("is-open"));
  lastTrigger?.focus?.();
}

function addItem(item, { size = item.prices[0].size || "", options = (item.options || []).map((option) => option.values[0]), extras = [], quantity = 1 } = {}) {
  const selectedPrice = item.prices.find((price) => (price.size || "") === size) || item.prices[0];
  const selectedExtras = [...extras].map((index) => item.extras?.[Number(index)]).filter(Boolean);
  const unitPrice = selectedPrice.price + selectedExtras.reduce((total, extra) => total + extra.price, 0);
  const configKey = JSON.stringify({ id: item.id, size, options, extras: selectedExtras.map((extra) => extra.name) });
  const existing = cart.find((line) => line.configKey === configKey);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      lineId: `${item.id}-${Date.now()}`,
      configKey,
      itemId: item.id,
      name: item.name,
      size,
      options,
      extras: selectedExtras,
      unitPrice,
      quantity
    });
  }
  saveCart();
  renderCart();
  showToast(`تمت إضافة «${item.name}» إلى السلة`);
}

function addCurrentItem() {
  if (!modalState) return;
  const { item, size, options, extras, quantity, editingLineId } = modalState;
  if (editingLineId) {
    updateEditedItem(editingLineId, item, { size, options, extras, quantity });
    closeModal();
    return;
  }
  addItem(item, { size, options, extras, quantity });
  closeModal();
}

function lineDetails(line) {
  const details = [];
  if (line.size) details.push(line.size);
  details.push(...line.options.filter(Boolean));
  details.push(...line.extras.map((extra) => extra.name));
  return details.join(" • ");
}

function cartTotal() {
  return cart.reduce((total, line) => total + line.unitPrice * line.quantity, 0);
}

function renderCart() {
  const count = cart.reduce((total, line) => total + line.quantity, 0);
  elements.floatingCartCount.textContent = count;
  syncFloatingCart();
  elements.cartItems.innerHTML = cart.map((line) => `
    <article class="cart-line">
      <div>
        <h3>${escapeHTML(line.name)}</h3>
        ${lineDetails(line) ? `<p>${escapeHTML(lineDetails(line))}</p>` : ""}
      </div>
      <strong>${currency(line.unitPrice * line.quantity)}</strong>
      <div class="cart-line-controls">
        <div class="quantity-control" aria-label="تعديل كمية ${escapeHTML(line.name)}">
          <button type="button" data-cart-action="increase" data-line-id="${line.lineId}" aria-label="زيادة الكمية">+</button>
          <span>${line.quantity}</span>
          <button type="button" data-cart-action="decrease" data-line-id="${line.lineId}" aria-label="تقليل الكمية">−</button>
        </div>
        <button class="edit-button" type="button" data-cart-action="edit" data-line-id="${line.lineId}">تعديل</button>
        <button class="remove-button" type="button" data-cart-action="remove" data-line-id="${line.lineId}">حذف</button>
      </div>
    </article>
  `).join("");
  elements.cartEmpty.hidden = cart.length > 0;
  elements.cartFooter.hidden = cart.length === 0;
  elements.cartTotal.textContent = currency(cartTotal());
  const orderLines = cart.map((line) => `• ${line.name}${lineDetails(line) ? ` (${lineDetails(line)})` : ""} × ${line.quantity} = ${currency(line.unitPrice * line.quantity)}`);
  const message = ["مرحباً بطاطسكا، أريد طلب:", ...orderLines, "", `الإجمالي: ${currency(cartTotal())}`].join("\n");
  elements.orderWhatsApp.href = `https://wa.me/201208367773?text=${encodeURIComponent(message)}`;
}

function updateCart(lineId, action) {
  const line = cart.find((cartLine) => cartLine.lineId === lineId);
  if (!line) return;
  if (action === "edit") {
    setCartOpen(false);
    openModal(line.itemId, elements.floatingCart, line);
    return;
  }
  if (action === "increase") line.quantity += 1;
  if (action === "decrease") line.quantity -= 1;
  if (action === "remove" || line.quantity <= 0) cart = cart.filter((cartLine) => cartLine.lineId !== lineId);
  saveCart();
  renderCart();
}

function updateEditedItem(lineId, item, { size, options, extras, quantity }) {
  const line = cart.find((cartLine) => cartLine.lineId === lineId);
  if (!line) return;
  const selectedPrice = item.prices.find((price) => (price.size || "") === size) || item.prices[0];
  const selectedExtras = [...extras].map((index) => item.extras?.[Number(index)]).filter(Boolean);
  const unitPrice = selectedPrice.price + selectedExtras.reduce((total, extra) => total + extra.price, 0);
  const configKey = JSON.stringify({ id: item.id, size, options, extras: selectedExtras.map((extra) => extra.name) });
  const matchingLine = cart.find((cartLine) => cartLine.lineId !== lineId && cartLine.configKey === configKey);

  if (matchingLine) {
    matchingLine.quantity += quantity;
    cart = cart.filter((cartLine) => cartLine.lineId !== lineId);
  } else {
    Object.assign(line, { configKey, itemId: item.id, name: item.name, size, options, extras: selectedExtras, unitPrice, quantity });
  }
  saveCart();
  renderCart();
  showToast(`تم تعديل «${item.name}»`);
}

function syncFloatingCart() {
  const hasItems = cart.some((line) => line.quantity > 0);
  elements.floatingCart.hidden = !hasItems || elements.cart.classList.contains("is-open");
}

function setCartOpen(isOpen) {
  if (isOpen) {
    elements.overlay.hidden = false;
    window.requestAnimationFrame(() => elements.overlay.classList.add("is-visible"));
    elements.cart.classList.add("is-open");
    elements.cart.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    syncFloatingCart();
    elements.closeCart.focus();
  } else {
    elements.overlay.classList.remove("is-visible");
    elements.cart.classList.remove("is-open");
    elements.cart.setAttribute("aria-hidden", "true");
    window.setTimeout(() => { elements.overlay.hidden = true; }, 250);
    document.body.classList.toggle("no-scroll", !elements.modal.hidden);
    syncFloatingCart();
    if (!elements.floatingCart.hidden) elements.floatingCart.focus();
  }
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-showing");
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-showing"), 3000);
}

elements.tabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-category]");
  if (tab) chooseCategory(tab.dataset.category);
});

elements.search.addEventListener("input", (event) => {
  searchQuery = event.target.value.trim();
  elements.clearSearch.hidden = !searchQuery;
  renderItems();
});

elements.clearSearch.addEventListener("click", () => {
  elements.search.value = "";
  searchQuery = "";
  elements.clearSearch.hidden = true;
  renderItems();
  elements.search.focus();
});

elements.reset.addEventListener("click", () => {
  activeCategory = "all";
  searchQuery = "";
  elements.search.value = "";
  elements.clearSearch.hidden = true;
  renderTabs();
  renderItems();
});

elements.grid.addEventListener("click", (event) => {
  const addButton = event.target.closest('[data-action="add"]');
  if (!addButton) return;
  openModal(addButton.dataset.id, addButton);
});

elements.modalContent.addEventListener("change", (event) => {
  if (!modalState) return;
  if (event.target.matches("[data-modal-size]")) modalState.size = event.target.value;
  if (event.target.matches("[data-modal-option]")) modalState.options[Number(event.target.dataset.modalOption)] = event.target.value;
  if (event.target.matches("[data-modal-extra]")) {
    const extraIndex = Number(event.target.value);
    if (event.target.checked) modalState.extras.add(extraIndex);
    else modalState.extras.delete(extraIndex);
  }
  renderModal();
});

elements.modalContent.addEventListener("click", (event) => {
  if (!modalState) return;
  const quantityButton = event.target.closest("[data-modal-quantity]");
  if (quantityButton) {
    modalState.quantity = Math.max(1, modalState.quantity + (quantityButton.dataset.modalQuantity === "increase" ? 1 : -1));
    renderModal();
  }
  if (event.target.closest("[data-modal-add]")) addCurrentItem();
});

elements.floatingCart.addEventListener("click", () => setCartOpen(true));
elements.closeCart.addEventListener("click", () => setCartOpen(false));
elements.overlay.addEventListener("click", () => setCartOpen(false));
elements.closeModal.addEventListener("click", closeModal);
elements.modal.addEventListener("click", (event) => { if (event.target === elements.modal) closeModal(); });
elements.cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (button) updateCart(button.dataset.lineId, button.dataset.cartAction);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!elements.modal.hidden) closeModal();
  else if (elements.cart.classList.contains("is-open")) setCartOpen(false);
});

elements.itemsTotal.textContent = menuItems.length;
document.querySelector("#current-year").textContent = new Date().getFullYear();
renderSkeletons();
renderCart();
window.setTimeout(() => {
  renderTabs();
  renderItems();
}, 220);
