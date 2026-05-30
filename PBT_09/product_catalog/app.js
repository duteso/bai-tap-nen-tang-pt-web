const products = [
    { id: 1, name: "iPhone 16 Pro", price: 28990000, category: "phone", image: "https://placehold.co/200", rating: 4.8 },
    { id: 2, name: "Samsung S24 Ultra", price: 31990000, category: "phone", image: "https://placehold.co/200", rating: 4.7 },
    { id: 3, name: "Xiaomi 14", price: 19990000, category: "phone", image: "https://placehold.co/200", rating: 4.5 },
    { id: 4, name: "MacBook Pro M3", price: 45990000, category: "laptop", image: "https://placehold.co/200", rating: 4.9 },
    { id: 5, name: "Dell XPS 15", price: 39990000, category: "laptop", image: "https://placehold.co/200", rating: 4.6 },
    { id: 6, name: "ThinkPad X1 Carbon", price: 35990000, category: "laptop", image: "https://placehold.co/200", rating: 4.7 },
    { id: 7, name: "iPad Pro M4", price: 28990000, category: "tablet", image: "https://placehold.co/200", rating: 4.9 },
    { id: 8, name: "Galaxy Tab S9", price: 19990000, category: "tablet", image: "https://placehold.co/200", rating: 4.5 },
    { id: 9, name: "Xiaomi Pad 6", price: 8990000, category: "tablet", image: "https://placehold.co/200", rating: 4.3 },
    { id: 10, name: "AirPods Pro 2", price: 6590000, category: "accessory", image: "https://placehold.co/200", rating: 4.8 },
    { id: 11, name: "Sony WH-1000XM5", price: 7990000, category: "accessory", image: "https://placehold.co/200", rating: 4.7 },
    { id: 12, name: "Logitech MX Master 3", price: 2490000, category: "accessory", image: "https://placehold.co/200", rating: 4.6 }
];

let currentProducts = [...products];
let cartCount = 0;
let currentCategory = "all";

const app = document.getElementById("app");

const header = document.createElement("header");
const filtersDiv = document.createElement("div");
filtersDiv.className = "filters";
const controlsDiv = document.createElement("div");
controlsDiv.className = "controls";

const categories = [
    { id: "all", label: "Tất cả" },
    { id: "phone", label: "Điện thoại" },
    { id: "laptop", label: "Laptop" },
    { id: "tablet", label: "Tablet" },
    { id: "accessory", label: "Phụ kiện" }
];
categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat.label;
    btn.dataset.category = cat.id;
    if (cat.id === "all") btn.classList.add("active-filter");
    btn.addEventListener("click", filterByCategory);
    filtersDiv.appendChild(btn);
});

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Tìm kiếm sản phẩm...";
searchInput.addEventListener("input", searchProducts);

const sortSelect = document.createElement("select");
sortSelect.innerHTML = `
    <option value="default">Sắp xếp</option>
    <option value="priceAsc">Giá tăng dần</option>
    <option value="priceDesc">Giá giảm dần</option>
    <option value="nameAsc">Tên A-Z</option>
    <option value="ratingDesc">Đánh giá cao nhất</option>
`;
sortSelect.addEventListener("change", sortProducts);

const themeBtn = document.createElement("button");
themeBtn.textContent = "Theme";
themeBtn.addEventListener("click", () => document.body.classList.toggle("dark-mode"));

const cartBtn = document.createElement("button");
cartBtn.innerHTML = `Cart (<span id="cartBadge">0</span>)`;

controlsDiv.append(searchInput, sortSelect, themeBtn, cartBtn);
header.append(filtersDiv, controlsDiv);
app.appendChild(header);

const grid = document.createElement("div");
grid.className = "grid";
app.appendChild(grid);

function renderProducts(dataToRender) {
    grid.innerHTML = ""; 
    
    if (dataToRender.length === 0) {
        grid.innerHTML = "<p>Không tìm thấy sản phẩm nào.</p>";
        return;
    }

    dataToRender.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        
        const img = document.createElement("img");
        img.src = product.image;
        
        const name = document.createElement("h3");
        name.textContent = product.name;
        
        const rating = document.createElement("p");
        rating.textContent = `Rating: ${product.rating}`;
        
        const price = document.createElement("p");
        price.className = "price";
        price.textContent = product.price.toLocaleString("vi-VN") + "đ";

        const addBtn = document.createElement("button");
        addBtn.className = "add-btn";
        addBtn.textContent = "Thêm vào giỏ";
        
        addBtn.addEventListener("click", (e) => {
            e.stopPropagation(); 
            cartCount++;
            document.getElementById("cartBadge").textContent = cartCount;
        });

        card.addEventListener("click", () => openModal(product));

        card.append(img, name, rating, price, addBtn);
        grid.appendChild(card);
    });
}

function searchProducts(e) {
    const keyword = e.target.value.toLowerCase();
    
    currentProducts = products.filter(p => {
        const matchName = p.name.toLowerCase().includes(keyword);
        const matchCategory = currentCategory === "all" || p.category === currentCategory;
        return matchName && matchCategory;
    });
    
    sortProducts(); 
}

function filterByCategory(e) {
    document.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active-filter"));
    e.target.classList.add("active-filter");

    currentCategory = e.target.dataset.category;
    
    searchInput.dispatchEvent(new Event("input")); 
}

function sortProducts() {
    const sortBy = sortSelect.value;
    
    if (sortBy === "priceAsc") {
        currentProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceDesc") {
        currentProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "nameAsc") {
        currentProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "ratingDesc") {
        currentProducts.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(currentProducts);
}

function openModal(product) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal-content";

    const closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "X";
    closeBtn.addEventListener("click", () => overlay.remove());

    const img = document.createElement("img");
    img.src = product.image;
    img.style.width = "200px";

    const name = document.createElement("h2");
    name.textContent = product.name;
    name.style.margin = "15px 0";

    const desc = document.createElement("p");
    desc.textContent = `Phân loại: ${product.category.toUpperCase()} | Trạng thái: ${product.inStock ? 'Còn hàng' : 'Hết hàng'}`;

    const price = document.createElement("h3");
    price.style.color = "#e74c3c";
    price.style.marginTop = "15px";
    price.textContent = product.price.toLocaleString("vi-VN") + "đ";

    modal.append(closeBtn, img, name, desc, price);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
    });
}

renderProducts(currentProducts);