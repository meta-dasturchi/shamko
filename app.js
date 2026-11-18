/**
 * ============================================================
 * RESTORAN KONFIGURATSIYASI (Andijon shahri markazi)
 * Manzil, telefon va ijtimoiy tarmoqlarni shu yerdan o'zgartiring
 * ============================================================
 */
const RESTAURANT_CONFIG = {
    name: "FAST FOOD",
    city: "Andijon shahri markazi",
    address: "Andijon shahri markazi (Aniq ko'cha va mo'ljalni shu yerga kiriting)",
    phoneDisplay: "+998 (XX) XXX-XX-XX",
    phoneHref: "tel:+998000000000",
    workingHours: "Har kuni: 09:00 – 23:00",
    telegramUrl: "https://t.me/",
    instagramUrl: "https://instagram.com/",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48332.74837388184!2d72.30829485!3d40.7820604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xb639004c8308afbe!2sAndijan%2C%20Andijan%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
};

/**
 * ============================================================
 * MAHSULOTLAR MA'LUMOTLAR BAZASI (7 ta kategoriya, 4-5 tadan)
 * ============================================================
 */
const MENU_ITEMS = [
    // 1. BURGERLAR (5 ta)
    {
        id: "b1",
        category: "burger",
        categoryLabel: "Burgerlar",
        name: "Andijon Royal Double Burger",
        ingredients: "2 ta mol go‘shti kotleti, cheddar pishlog‘i, tuzlangan bodring, qizil piyoz, maxsus burger sousi",
        price: 38000,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "b2",
        category: "burger",
        categoryLabel: "Burgerlar",
        name: "Klassik Chizburger",
        ingredients: "Shirali mol go‘shti kotleti, eritilgan pishloq, aysberg salati, pomidor, klassik sous",
        price: 28000,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "b3",
        category: "burger",
        categoryLabel: "Burgerlar",
        name: "Crispy Chicken Burger",
        ingredients: "Qarsildoq tovuq filesi, pishloq, yangi salat bargi, sarimsoqli qaymoqli sous",
        price: 26000,
        image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "b4",
        category: "burger",
        categoryLabel: "Burgerlar",
        name: "BBQ Bacon Burger",
        ingredients: "Mol go‘shti kotleti, dudlangan mol go‘shti bo‘laklari, qovurilgan piyoz halqalari, BBQ sous",
        price: 35000,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "b5",
        category: "burger",
        categoryLabel: "Burgerlar",
        name: "Spicy Jalapeno Burger",
        ingredients: "Mol go‘shti kotleti, achchiq xalapenyo qalampiri, cheddar pishlog‘i, chili sous",
        price: 32000,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
    },

    // 2. LAVASHLAR (4 ta)
    {
        id: "l1",
        category: "lavash",
        categoryLabel: "Lavashlar",
        name: "Klassik Mol Go‘shtli Lavash",
        ingredients: "Yupqa lavash xamiri, marinadlangan mol go‘shti, chips, pomidor, bodring, maxsus oq va qizil sous",
        price: 30000,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "l2",
        category: "lavash",
        categoryLabel: "Lavashlar",
        name: "Pishloqli Tandir Lavash",
        ingredients: "Tandirda qizartirilgan lavash, mol go‘shti, ikki hissa pishloq, yangi sabzavotlar, firmenniy sous",
        price: 34000,
        image: "https://images.unsplash.com/photo-1642783944285-b33b18ef6c3b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "l3",
        category: "lavash",
        categoryLabel: "Lavashlar",
        name: "Tovuqli Lavash",
        ingredients: "Grilda pishgan tovuq go‘shti, qarsildoq kartoshka chipsi, barra bodring, sarimsoqli sous",
        price: 27000,
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "l4",
        category: "lavash",
        categoryLabel: "Lavashlar",
        name: "Achchiq Qalampirli Lavash",
        ingredients: "Mol go‘shti, xalapenyo, pomidor, chips, maxsus achchiq tomat sousi",
        price: 31000,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
    },

    // 3. HOT-DOGLAR (4 ta)
    {
        id: "h1",
        category: "hotdog",
        categoryLabel: "Hot-doglar",
        name: "Qirollik Double Hot-Dog",
        ingredients: "Yumshoq bulochka, 2 ta dudlangan sosiska, pishloq, tuzlangan bodring, xantal va mayonez",
        price: 22000,
        image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "h2",
        category: "hotdog",
        categoryLabel: "Hot-doglar",
        name: "Klassik Hot-Dog",
        ingredients: "Issiq bulochka, halol mol go‘shtli sosiska, karam salati, ketchup va xantal",
        price: 16000,
        image: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "h3",
        category: "hotdog",
        categoryLabel: "Hot-doglar",
        name: "Cheese & Crispy Onion Hot-Dog",
        ingredients: "Sosiska, eritilgan cheddar pishlog‘i, qovurilgan qarsildoq piyoz, pishloqli sous",
        price: 20000,
        image: "https://images.unsplash.com/photo-1627054247926-d3f7541c9223?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "h4",
        category: "hotdog",
        categoryLabel: "Hot-doglar",
        name: "Chili Tex-Mex Hot-Dog",
        ingredients: "Gril sosiska, achchiq go‘shtli sous, xalapenyo bo‘laklari, pishloq",
        price: 24000,
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80"
    },

    // 4. PITSALAR (5 ta)
    {
        id: "p1",
        category: "pizza",
        categoryLabel: "Pitsalar",
        name: "Pepperoni Premium (32 sm)",
        ingredients: "Yupqa xamir, italyan tomat sousi, motsarella pishlog‘i, halol pepperoni kolbasasi",
        price: 68000,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "p2",
        category: "pizza",
        categoryLabel: "Pitsalar",
        name: "Go‘shtli Assorti Pitsa (32 sm)",
        ingredients: "Mol go‘shti, tovuq filesi, dudlangan kolbasa, motsarella, qo‘ziqorin, zaytun",
        price: 78000,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "p3",
        category: "pizza",
        categoryLabel: "Pitsalar",
        name: "Margarita Klassik (32 sm)",
        ingredients: "Motsarella pishlog‘i, yangi pomidor bo‘laklari, reyhan barglari, zaytun moyi",
        price: 56000,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "p4",
        category: "pizza",
        categoryLabel: "Pitsalar",
        name: "Tovuq va Qo‘ziqorinli Pitsa (32 sm)",
        ingredients: "Gril tovuq, shampinyon qo‘ziqorinlari, qaymoqli sous, ikki hissa motsarella",
        price: 69000,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "p5",
        category: "pizza",
        categoryLabel: "Pitsalar",
        name: "4 Pishloq (Quattro Formaggi)",
        ingredients: "Motsarella, cheddar, parmezan va dor-blyu pishloqlari uyg‘unligi",
        price: 72000,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80"
    },

    // 5. DONARLAR (4 ta)
    {
        id: "d1",
        category: "donar",
        categoryLabel: "Donarlar",
        name: "Tarelka Donar Kebab",
        ingredients: "Grilda qovurilgan mol go‘shti, guruch, kartoshka fri, yangi salat, issiq non va sous",
        price: 42000,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "d2",
        category: "donar",
        categoryLabel: "Donarlar",
        name: "Turkcha Non Donar",
        ingredients: "Maxsus tandir noni ichida mol go‘shti, pomidor, qizil piyoz, ko‘katlar va turkcha sous",
        price: 29000,
        image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "d3",
        category: "donar",
        categoryLabel: "Donarlar",
        name: "Tovuqli Donar Box",
        ingredients: "Tovuq donar go‘shti, qarsildoq fri, pishloqli sous, tuzlangan bodring",
        price: 33000,
        image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "d4",
        category: "donar",
        categoryLabel: "Donarlar",
        name: "Iskandar Donar",
        ingredients: "Non bo‘laklari ustida mol go‘shti, issiq tomat sousi, eritilgan sariyog‘ va suzma",
        price: 46000,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },

    // 6. GAZLI ICHIMLIKLAR (4 ta)
    {
        id: "g1",
        category: "gazli",
        categoryLabel: "Gazli ichimliklar",
        name: "Coca-Cola (0.5 L)",
        ingredients: "Muzdek gazlangan salqin ichimlik",
        price: 9000,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "g2",
        category: "gazli",
        categoryLabel: "Gazli ichimliklar",
        name: "Fanta Apelsin (0.5 L)",
        ingredients: "Apelsin ta'mli gazlangan salqin ichimlik",
        price: 9000,
        image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "g3",
        category: "gazli",
        categoryLabel: "Gazli ichimliklar",
        name: "Sprite Limon-Laym (0.5 L)",
        ingredients: "Limon va laym ta'mli tetiklantiruvchi ichimlik",
        price: 9000,
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "g4",
        category: "gazli",
        categoryLabel: "Gazli ichimliklar",
        name: "Mojito Laym-Yalpiz (0.4 L)",
        ingredients: "Yangi laym, yalpiz barglari, muz bo‘laklari va gazlangan suv",
        price: 16000,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },

    // 7. GAZSIZ ICHIMLIKLAR (4 ta)
    {
        id: "ng1",
        category: "gazsiz",
        categoryLabel: "Gazsiz ichimliklar",
        name: "Tabiiy Olma Sharbati (0.5 L)",
        ingredients: "100% tabiiy yetilgan olmalardan tayyorlangan sharbat",
        price: 12000,
        image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "ng2",
        category: "gazsiz",
        categoryLabel: "Gazsiz ichimliklar",
        name: "Muzdek Ko‘k Choy Limonli (0.5 L)",
        ingredients: "Tabiiy damlangan ko‘k choy, limon sharbati va yalpiz",
        price: 10000,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "ng3",
        category: "gazsiz",
        categoryLabel: "Gazsiz ichimliklar",
        name: "Anor va Olcha Kompot (0.5 L)",
        ingredients: "Uy uslubida qaynatilgan mevali kompot",
        price: 13000,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "ng4",
        category: "gazsiz",
        categoryLabel: "Gazsiz ichimliklar",
        name: "Toza Gazsiz Suv (0.5 L)",
        ingredients: "Tog‘ buloqlaridan filtrlangan ichimlik suvi",
        price: 5000,
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80"
    }
];

/**
 * ============================================================
 * AKSIYALAR (COMBO TAKLIFLAR)
 * ============================================================
 */
const PROMO_ITEMS = [
    {
        id: "promo1",
        name: "Burger + Fri + Cola Kombo",
        description: "Klassik Chizburger, o‘rtacha kartoshka fri va muzdek Coca-Cola 0.5 L bitta to‘plamda.",
        oldPrice: 48000,
        price: 39000,
        discount: "-19%",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "promo2",
        name: "Lavash + Ichimlik Seti",
        description: "Klassik Mol Go‘shtli Lavash va tanlovingizga ko‘ra 0.5 L salqin ichimlik.",
        oldPrice: 39000,
        price: 33000,
        discount: "-15%",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "promo3",
        name: "2 ta Pitsa Maxsus Taklif",
        description: "Pepperoni Premium (32 sm) + Tovuq va Qo‘ziqorinli Pitsa (32 sm) katta kompaniya uchun.",
        oldPrice: 137000,
        price: 112000,
        discount: "-18%",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "promo4",
        name: "Oilaviy Katta Combo",
        description: "2 ta Royal Burger, 2 ta Lavash, 2 ta Fri va 4 ta Coca-Cola 0.5 L. Butun oila uchun!",
        oldPrice: 196000,
        price: 159000,
        discount: "-20%",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    }
];

/**
 * ============================================================
 * MIJOZLAR FIKRLARI
 * ============================================================
 */
const TESTIMONIALS = [
    {
        name: "Jasurbek Tursunov",
        role: "Doimiy mijoz",
        rating: 5,
        text: "Andijon markazidagi eng zo‘r burgerlar shu yerda! Go‘shti juda shirali, nonlari esa yumshoq va yangi. Yetkazib berish ham 20 daqiqada keldi.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
        name: "Madinabonu Karimova",
        role: "Talaba",
        rating: 5,
        text: "Pishloqli tandir lavashi va mojitosiga gap yo‘q! Dugonalarim bilan tez-tez kelib turamiz, zali ham juda toza va shinam.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
        name: "Otabek Rahimov",
        role: "Tadbirkor",
        rating: 5,
        text: "Ofisga tushlik uchun 2 ta pitsa kombo buyurtma qildik. Issiq holda, pishlog‘i cho‘zilib turgan holatda yetib keldi. Tavsiya qilaman!",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
        name: "Dilnoza Sobirova",
        role: "Ona",
        rating: 5,
        text: "Oilaviy kombo bolalarimga juda yoqdi. Mahsulotlarning halol va toza tayyorlanishi biz uchun eng muhimi. Rahmat jamoaga!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
    }
];

/**
 * ============================================================
 * GLOBAL STATE (LocalStorage bilan sinxron)
 * ============================================================
 */
let state = {
    cart: JSON.parse(localStorage.getItem("ff_andijon_cart")) || [],
    users: JSON.parse(localStorage.getItem("ff_andijon_users")) || [],
    currentUser: JSON.parse(localStorage.getItem("ff_andijon_current_user")) || null,
    activeCategory: "all",
    searchQuery: "",
    carouselIndex: 0
};

// Narxni chiroyli formatlash (masalan: 38 000 so‘m)
function formatPrice(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so‘m";
}

// Fallback rasm generatori
function getFallbackImage(label) {
    return `https://placehold.co/600x400/1b1b22/ff6b00?text=${encodeURIComponent(label)}`;
}

// Toast xabarnoma ko'rsatish
function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon = type === "success" ? "fa-circle-check" : "fa-circle-exclamation";
    toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(-20px)";
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

/**
 * ============================================================
 * KONFIGURATSIYANI DOM'GA YUKLASH
 * ============================================================
 */
function applyRestaurantConfig() {
    document.getElementById("cfgAddress").textContent = RESTAURANT_CONFIG.address;
    const phoneLink = document.getElementById("cfgPhoneLink");
    phoneLink.textContent = RESTAURANT_CONFIG.phoneDisplay;
    phoneLink.href = RESTAURANT_CONFIG.phoneHref;
    document.getElementById("cfgHours").textContent = RESTAURANT_CONFIG.workingHours;
    document.getElementById("cfgTelegram").href = RESTAURANT_CONFIG.telegramUrl;
    document.getElementById("cfgInstagram").href = RESTAURANT_CONFIG.instagramUrl;
    document.getElementById("cfgMapIframe").src = RESTAURANT_CONFIG.mapEmbedUrl;

    document.getElementById("footerAddress").textContent = RESTAURANT_CONFIG.address;
    document.getElementById("footerPhone").textContent = RESTAURANT_CONFIG.phoneDisplay;
    document.getElementById("footerHours").textContent = RESTAURANT_CONFIG.workingHours;
    document.getElementById("footerTelegram").href = RESTAURANT_CONFIG.telegramUrl;
    document.getElementById("footerInstagram").href = RESTAURANT_CONFIG.instagramUrl;
    document.getElementById("currentYear").textContent = new Date().getFullYear();
}

/**
 * ============================================================
 * MENYU VA AKSIYALARNI CHIZISH
 * ============================================================
 */
function renderMenu() {
    const grid = document.getElementById("menuGrid");
    const query = state.searchQuery.trim().toLowerCase();

    const filtered = MENU_ITEMS.filter(item => {
        const matchesCat = state.activeCategory === "all" || item.category === state.activeCategory;
        const matchesSearch =
            item.name.toLowerCase().includes(query) ||
            item.ingredients.toLowerCase().includes(query);
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-menu-state">
                <i class="fa-solid fa-utensils"></i>
                <h3>Hech qanday taom topilmadi</h3>
                <p>Qidiruv so‘zini o‘zgartirib ko‘ring yoki boshqa kategoriyani tanlang.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(item => `
        <article class="product-card">
            <div class="product-img-box">
                <span class="product-cat-badge">${item.categoryLabel}</span>
                <img 
                    src="${item.image}" 
                    alt="${item.name}" 
                    loading="lazy"
                    onerror="this.onerror=null; this.src='${getFallbackImage(item.name)}';"
                >
            </div>
            <div class="product-body">
                <h3 class="product-title">${item.name}</h3>
                <p class="product-desc">${item.ingredients}</p>
                <div class="product-price-row">
                    <span class="product-price">${formatPrice(item.price)}</span>
                    <div class="qty-selector" data-id="${item.id}">
                        <button type="button" class="qty-btn minus" aria-label="Kamaytirish">-</button>
                        <span class="qty-value">1</span>
                        <button type="button" class="qty-btn plus" aria-label="Ko'paytirish">+</button>
                    </div>
                </div>
                <button type="button" class="btn btn-primary add-to-cart-btn" data-add-id="${item.id}">
                    <i class="fa-solid fa-cart-plus"></i> Savatchaga qo‘shish
                </button>
            </div>
        </article>
    `).join("");
}

function renderPromos() {
    const promoGrid = document.getElementById("promoGrid");
    promoGrid.innerHTML = PROMO_ITEMS.map(promo => `
        <article class="promo-card">
            <span class="promo-discount-tag">${promo.discount}</span>
            <div class="promo-img">
                <img 
                    src="${promo.image}" 
                    alt="${promo.name}" 
                    loading="lazy"
                    onerror="this.onerror=null; this.src='${getFallbackImage(promo.name)}';"
                >
            </div>
            <div class="promo-body">
                <h3>${promo.name}</h3>
                <p>${promo.description}</p>
                <div class="promo-prices">
                    <span class="old-price">${formatPrice(promo.oldPrice)}</span>
                    <span class="new-price">${formatPrice(promo.price)}</span>
                </div>
                <button type="button" class="btn btn-primary btn-block" data-promo-id="${promo.id}">
                    <i class="fa-solid fa-fire"></i> Aksiyani olish
                </button>
            </div>
        </article>
    `).join("");
}

/**
 * ============================================================
 * SAVATCHA (CART) FUNKSIYALARI VA LOCALSTORAGE
 * ============================================================
 */
function saveCart() {
    localStorage.setItem("ff_andijon_cart", JSON.stringify(state.cart));
    renderCart();
}

function addToCart(product, quantity = 1) {
    const existing = state.cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        state.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    saveCart();
    showToast(`"${product.name}" (${quantity} ta) savatchaga qo‘shildi!`);
}

function updateCartQty(id, delta) {
    const index = state.cart.findIndex(item => item.id === id);
    if (index === -1) return;

    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
        state.cart.splice(index, 1);
    }
    saveCart();
}

function removeFromCart(id) {
    state.cart = state.cart.filter(item => item.id !== id);
    saveCart();
    showToast("Mahsulot savatchadan o‘chirildi", "error");
}

function renderCart() {
    const container = document.getElementById("cartItemsContainer");
    const badge = document.getElementById("cartBadge");
    const totalCountEl = document.getElementById("cartTotalCount");
    const totalPriceEl = document.getElementById("cartTotalPrice");
    const checkoutBtn = document.getElementById("proceedCheckoutBtn");

    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    badge.textContent = totalItems;
    totalCountEl.textContent = `${totalItems} ta`;
    totalPriceEl.textContent = formatPrice(totalPrice);

    if (state.cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-bag-shopping"></i>
                <h4>Savatchangiz hozircha bo‘sh</h4>
                <p>Menyudan mazali taomlarni tanlab savatchaga qo‘shing!</p>
            </div>
        `;
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = "0.5";
        return;
    }

    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = "1";

    container.innerHTML = state.cart.map(item => `
        <div class="cart-item">
            <img 
                src="${item.image}" 
                alt="${item.name}" 
                class="cart-item-img"
                onerror="this.onerror=null; this.src='${getFallbackImage(item.name)}';"
            >
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
                <div class="cart-item-controls">
                    <button type="button" class="cart-qty-btn" data-cart-minus="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button type="button" class="cart-qty-btn" data-cart-plus="${item.id}">+</button>
                </div>
            </div>
            <button type="button" class="remove-item-btn" data-cart-remove="${item.id}" aria-label="O'chirish">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `).join("");
}

function toggleCartDrawer(open) {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (open) {
        drawer.classList.add("open");
        overlay.classList.add("active");
    } else {
        drawer.classList.remove("open");
        overlay.classList.remove("active");
    }
}

/**
 * ============================================================
 * MODALLAR VA BUYURTMA BERISH (CHECKOUT)
 * ============================================================
 */
function openModal(modalId) {
    document.getElementById(modalId).classList.add("open");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("open");
}

function openCheckoutModal() {
    if (state.cart.length === 0) {
        showToast("Buyurtma berish uchun avval savatchaga mahsulot qo‘shing!", "error");
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
        return;
    }

    toggleCartDrawer(false);

    // Agar foydalanuvchi login qilgan bo'lsa, ism va telefonni avtomatik to'ldirish
    if (state.currentUser) {
        document.getElementById("orderName").value = state.currentUser.name || "";
        document.getElementById("orderPhone").value = state.currentUser.phone || "";
    }

    const listEl = document.getElementById("checkoutItemsList");
    const totalEl = document.getElementById("checkoutGrandTotal");
    const totalSum = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    listEl.innerHTML = state.cart.map(item => `
        <div class="checkout-item-row">
            <span>${item.name} × <strong>${item.quantity}</strong></span>
            <span>${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join("");

    totalEl.textContent = formatPrice(totalSum);
    openModal("checkoutModal");
}

function handleCheckoutSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById("orderName");
    const phoneInput = document.getElementById("orderPhone");
    const addressInput = document.getElementById("orderAddress");

    let isValid = true;

    // Ism tekshiruvi
    if (nameInput.value.trim().length < 3) {
        setFieldError(nameInput, "orderNameError", "Iltimos, to‘liq ism-familiyangizni kiriting (kamida 3 ta harf).");
        isValid = false;
    } else {
        clearFieldError(nameInput, "orderNameError");
    }

    // Telefon tekshiruvi
    const phoneDigits = phoneInput.value.replace(/\D/g, "");
    if (phoneDigits.length < 9) {
        setFieldError(phoneInput, "orderPhoneError", "To‘g‘ri telefon raqamini kiriting (kamida 9 ta raqam).");
        isValid = false;
    } else {
        clearFieldError(phoneInput, "orderPhoneError");
    }

    // Manzil tekshiruvi
    if (addressInput.value.trim().length < 6) {
        setFieldError(addressInput, "orderAddressError", "Andijon shahridagi yetkazib berish manzilini aniqroq yozing.");
        isValid = false;
    } else {
        clearFieldError(addressInput, "orderAddressError");
    }

    if (!isValid) return;

    // Buyurtma muvaffaqiyatli tasdiqlandi
    const orderNumber = Math.floor(1000 + Math.random() * 9000);
    state.cart = [];
    saveCart();
    e.target.reset();
    closeModal("checkoutModal");

    showToast(`Buyurtma #${orderNumber} qabul qilindi! Operatorimiz tez orada bog‘lanadi.`);
}

/**
 * ============================================================
 * AUTHENTICATION (LOGIN / REGISTER / LOGOUT)
 * ============================================================
 */
function updateAuthUI() {
    const area = document.getElementById("authActionArea");
    if (state.currentUser) {
        area.innerHTML = `
            <div class="user-pill">
                <i class="fa-solid fa-circle-user text-orange"></i>
                <span>${state.currentUser.name}</span>
                <button type="button" id="logoutBtn" class="logout-mini-btn" title="Chiqish" aria-label="Chiqish">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </button>
            </div>
        `;
        document.getElementById("logoutBtn").addEventListener("click", () => {
            state.currentUser = null;
            localStorage.removeItem("ff_andijon_current_user");
            updateAuthUI();
            showToast("Tizimdan chiqdingiz.");
        });
    } else {
        area.innerHTML = `
            <button id="authOpenBtn" class="btn btn-outline btn-sm">
                <i class="fa-regular fa-user"></i> <span>Kirish</span>
            </button>
        `;
        document.getElementById("authOpenBtn").addEventListener("click", () => openModal("authModal"));
    }
}

function switchAuthTab(mode) {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const tabLogin = document.getElementById("tabLoginBtn");
    const tabRegister = document.getElementById("tabRegisterBtn");
    const title = document.getElementById("authModalTitle");

    if (mode === "login") {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
        tabLogin.classList.add("active");
        tabRegister.classList.remove("active");
        title.textContent = "Tizimga kirish";
    } else {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
        tabLogin.classList.remove("active");
        tabRegister.classList.add("active");
        title.textContent = "Ro‘yxatdan o‘tish";
    }
}

function setFieldError(inputEl, errorId, message) {
    inputEl.classList.add("invalid");
    document.getElementById(errorId).textContent = message;
}

function clearFieldError(inputEl, errorId) {
    inputEl.classList.remove("invalid");
    document.getElementById(errorId).textContent = "";
}

function handleRegisterSubmit(e) {
    e.preventDefault();
    const nameEl = document.getElementById("regName");
    const phoneEl = document.getElementById("regPhone");
    const emailEl = document.getElementById("regEmail");
    const passEl = document.getElementById("regPassword");
    const confirmEl = document.getElementById("regConfirmPassword");

    let valid = true;

    if (nameEl.value.trim().length < 2) {
        setFieldError(nameEl, "regNameError", "Ism kamida 2 ta harfdan iborat bo‘lishi kerak.");
        valid = false;
    } else {
        clearFieldError(nameEl, "regNameError");
    }

    if (phoneEl.value.replace(/\D/g, "").length < 9) {
        setFieldError(phoneEl, "regPhoneError", "Telefon raqamni to‘g‘ri kiriting.");
        valid = false;
    } else {
        clearFieldError(phoneEl, "regPhoneError");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailEl.value.trim())) {
        setFieldError(emailEl, "regEmailError", "Yaroqli email manzil kiriting.");
        valid = false;
    } else {
        clearFieldError(emailEl, "regEmailError");
    }

    if (passEl.value.length < 6) {
        setFieldError(passEl, "regPasswordError", "Parol kamida 6 ta belgidan iborat bo‘lishi shart.");
        valid = false;
    } else {
        clearFieldError(passEl, "regPasswordError");
    }

    if (confirmEl.value !== passEl.value || confirmEl.value === "") {
        setFieldError(confirmEl, "regConfirmPasswordError", "Parollar bir-biriga mos kelmadi.");
        valid = false;
    } else {
        clearFieldError(confirmEl, "regConfirmPasswordError");
    }

    if (!valid) return;

    const newUser = {
        name: nameEl.value.trim(),
        phone: phoneEl.value.trim(),
        email: emailEl.value.trim().toLowerCase(),
        password: passEl.value
    };

    state.users.push(newUser);
    state.currentUser = newUser;
    localStorage.setItem("ff_andijon_users", JSON.stringify(state.users));
    localStorage.setItem("ff_andijon_current_user", JSON.stringify(newUser));

    updateAuthUI();
    e.target.reset();
    closeModal("authModal");
    showToast(`Xush kelibsiz, ${newUser.name}! Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi.`);
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const idEl = document.getElementById("loginIdentifier");
    const passEl = document.getElementById("loginPassword");

    let valid = true;
    if (!idEl.value.trim()) {
        setFieldError(idEl, "loginIdentifierError", "Email yoki telefon raqamingizni kiriting.");
        valid = false;
    } else {
        clearFieldError(idEl, "loginIdentifierError");
    }

    if (!passEl.value) {
        setFieldError(passEl, "loginPasswordError", "Parolni kiriting.");
        valid = false;
    } else {
        clearFieldError(passEl, "loginPasswordError");
    }

    if (!valid) return;

    const identifier = idEl.value.trim().toLowerCase();
    const foundUser = state.users.find(
        u => (u.email === identifier || u.phone.replace(/\s/g, "") === identifier.replace(/\s/g, "")) && u.password === passEl.value
    );

    if (!foundUser) {
        setFieldError(passEl, "loginPasswordError", "Login yoki parol noto‘g‘ri. Avval ro‘yxatdan o‘ting.");
        return;
    }

    state.currentUser = foundUser;
    localStorage.setItem("ff_andijon_current_user", JSON.stringify(foundUser));
    updateAuthUI();
    e.target.reset();
    closeModal("authModal");
    showToast(`Xush kelibsiz, ${foundUser.name}!`);
}

/**
 * ============================================================
 * MIJOZLAR FIKRI CAROUSEL
 * ============================================================
 */
function initTestimonialsCarousel() {
    const track = document.getElementById("reviewsTrack");
    const dotsContainer = document.getElementById("carouselDots");

    track.innerHTML = TESTIMONIALS.map(item => `
        <div class="review-slide">
            <div class="review-card">
                <div>
                    <div class="review-stars">
                        ${'<i class="fa-solid fa-star"></i>'.repeat(item.rating)}
                    </div>
                    <p class="review-text">"${item.text}"</p>
                </div>
                <div class="review-author">
                    <img 
                        src="${item.avatar}" 
                        alt="${item.name}" 
                        class="review-avatar"
                        onerror="this.onerror=null; this.src='https://placehold.co/100x100/ff6b00/ffffff?text=${item.name.charAt(0)}';"
                    >
                    <div>
                        <strong>${item.name}</strong>
                        <span>${item.role}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join("");

    dotsContainer.innerHTML = TESTIMONIALS.map((_, idx) => `
        <button type="button" class="dot ${idx === 0 ? "active" : ""}" data-slide="${idx}" aria-label="Slayd ${idx + 1}"></button>
    `).join("");

    function getVisibleSlides() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function updateCarousel() {
        const visible = getVisibleSlides();
        const maxIndex = Math.max(0, TESTIMONIALS.length - visible);
        if (state.carouselIndex > maxIndex) state.carouselIndex = 0;
        if (state.carouselIndex < 0) state.carouselIndex = maxIndex;

        const percent = (100 / visible) * state.carouselIndex;
        track.style.transform = `translateX(-${percent}%)`;

        document.querySelectorAll(".dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === state.carouselIndex);
        });
    }

    document.getElementById("nextReviewBtn").addEventListener("click", () => {
        state.carouselIndex++;
        updateCarousel();
    });

    document.getElementById("prevReviewBtn").addEventListener("click", () => {
        state.carouselIndex--;
        updateCarousel();
    });

    dotsContainer.addEventListener("click", e => {
        if (e.target.classList.contains("dot")) {
            state.carouselIndex = Number(e.target.dataset.slide);
            updateCarousel();
        }
    });

    window.addEventListener("resize", updateCarousel);
    setInterval(() => {
        state.carouselIndex++;
        updateCarousel();
    }, 6000);
}

/**
 * ============================================================
 * BARCHA EVENT LISTENERLAR VA ISHGA TUSHIRISH
 * ============================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Preloader yopish
    setTimeout(() => {
        document.getElementById("preloader").classList.add("fade-out");
    }, 550);

    // 2. Boshlang'ich renderlar
    applyRestaurantConfig();
    renderMenu();
    renderPromos();
    renderCart();
    updateAuthUI();
    initTestimonialsCarousel();

    // 3. Theme (Dark / Light) toggle
    const themeToggle = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("ff_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeToggle.innerHTML = savedTheme === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';

    themeToggle.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("ff_theme", next);
        themeToggle.innerHTML = next === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });

    // 4. Navbar scroll & Scroll-to-Top & Active link
    const header = document.getElementById("header");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        header.classList.toggle("scrolled", scrollY > 40);
        scrollTopBtn.classList.toggle("visible", scrollY > 450);

        sections.forEach(sec => {
            const top = sec.offsetTop - 130;
            const height = sec.offsetHeight;
            const id = sec.getAttribute("id");
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                });
            }
        });
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 5. Mobile Hamburger Menu
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navbar = document.getElementById("navbar");

    hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("active");
        navbar.classList.toggle("open");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburgerBtn.classList.remove("active");
            navbar.classList.remove("open");
        });
    });

    // 6. Hero "Buyurtma berish" tugmasi
    document.getElementById("heroOrderBtn").addEventListener("click", () => {
        if (state.cart.length > 0) {
            openCheckoutModal();
        } else {
            document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
            showToast("Buyurtma berish uchun menyudan taom tanlang!");
        }
    });

    // 7. Kategoriya filterlari va Footer kategoriya havolalari
    document.getElementById("categoryTabs").addEventListener("click", e => {
        const btn = e.target.closest(".cat-btn");
        if (!btn) return;
        document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.activeCategory = btn.dataset.category;
        renderMenu();
    });

    document.querySelectorAll("[data-footer-cat]").forEach(link => {
        link.addEventListener("click", () => {
            const cat = link.dataset.footerCat;
            state.activeCategory = cat;
            document.querySelectorAll(".cat-btn").forEach(b => {
                b.classList.toggle("active", b.dataset.category === cat);
            });
            renderMenu();
        });
    });

    // 8. Mahsulot qidiruvi
    const searchInput = document.getElementById("menuSearchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");

    searchInput.addEventListener("input", () => {
        state.searchQuery = searchInput.value;
        clearSearchBtn.classList.toggle("hidden", state.searchQuery.length === 0);
        renderMenu();
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        state.searchQuery = "";
        clearSearchBtn.classList.add("hidden");
        renderMenu();
    });

    // 9. Menyu kartalaridagi miqdor (+/-) va "Savatchaga qo'shish"
    document.getElementById("menuGrid").addEventListener("click", e => {
        const minusBtn = e.target.closest(".qty-btn.minus");
        const plusBtn = e.target.closest(".qty-btn.plus");
        const addBtn = e.target.closest(".add-to-cart-btn");

        if (minusBtn || plusBtn) {
            const selector = e.target.closest(".qty-selector");
            const valEl = selector.querySelector(".qty-value");
            let currentQty = Number(valEl.textContent);
            if (minusBtn && currentQty > 1) currentQty--;
            if (plusBtn && currentQty < 20) currentQty++;
            valEl.textContent = currentQty;
        }

        if (addBtn) {
            const card = addBtn.closest(".product-card");
            const id = addBtn.dataset.addId;
            const qty = Number(card.querySelector(".qty-value").textContent);
            const product = MENU_ITEMS.find(item => item.id === id);
            if (product) {
                addToCart(product, qty);
                card.querySelector(".qty-value").textContent = "1";
            }
        }
    });

    // 10. Aksiya tugmalari
    document.getElementById("promoGrid").addEventListener("click", e => {
        const btn = e.target.closest("[data-promo-id]");
        if (!btn) return;
        const promo = PROMO_ITEMS.find(p => p.id === btn.dataset.promoId);
        if (promo) {
            addToCart(promo, 1);
            toggleCartDrawer(true);
        }
    });

    // 11. Savatcha ochish/yopish va ichki boshqaruv
    document.getElementById("cartOpenBtn").addEventListener("click", () => toggleCartDrawer(true));
    document.getElementById("cartCloseBtn").addEventListener("click", () => toggleCartDrawer(false));
    document.getElementById("cartOverlay").addEventListener("click", () => toggleCartDrawer(false));

    document.getElementById("cartItemsContainer").addEventListener("click", e => {
        const minus = e.target.closest("[data-cart-minus]");
        const plus = e.target.closest("[data-cart-plus]");
        const remove = e.target.closest("[data-cart-remove]");

        if (minus) updateCartQty(minus.dataset.cartMinus, -1);
        if (plus) updateCartQty(plus.dataset.cartPlus, 1);
        if (remove) removeFromCart(remove.dataset.cartRemove);
    });

    document.getElementById("clearCartBtn").addEventListener("click", () => {
        if (state.cart.length === 0) return;
        state.cart = [];
        saveCart();
        showToast("Savatcha tozalandi", "error");
    });

    document.getElementById("proceedCheckoutBtn").addEventListener("click", openCheckoutModal);
    document.getElementById("checkoutForm").addEventListener("submit", handleCheckoutSubmit);

    // 12. Modallarni yopish (Backdrop & X tugmalari)
    document.querySelectorAll("[data-close-modal]").forEach(el => {
        el.addEventListener("click", () => closeModal(el.dataset.closeModal));
    });

    // 13. Auth Modal tablar va formalar
    document.getElementById("tabLoginBtn").addEventListener("click", () => switchAuthTab("login"));
    document.getElementById("tabRegisterBtn").addEventListener("click", () => switchAuthTab("register"));
    document.getElementById("goToRegister").addEventListener("click", () => switchAuthTab("register"));
    document.getElementById("goToLogin").addEventListener("click", () => switchAuthTab("login"));

    document.getElementById("loginForm").addEventListener("submit", handleLoginSubmit);
    document.getElementById("registerForm").addEventListener("submit", handleRegisterSubmit);

    // Parolni ko'rsatish / yashirish
    document.querySelectorAll(".toggle-pwd").forEach(btn => {
        btn.addEventListener("click", () => {
            const input = document.getElementById(btn.dataset.target);
            const isPwd = input.type === "password";
            input.type = isPwd ? "text" : "password";
            btn.innerHTML = isPwd ? '<i class="fa-regular fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>';
        });
    });

    // 14. Scroll Reveal animatsiyasi (IntersectionObserver)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});