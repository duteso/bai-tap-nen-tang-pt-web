// 1. Lọc sản phẩm còn hàng
const getInStock = (products) => products.filter(p => p.stock > 0);

// 2. Lọc theo category VÀ khoảng giá
const filterProducts = (products, category, minPrice, maxPrice) => 
    products.filter(p => p.category === category && p.price >= minPrice && p.price <= maxPrice);

// 3. Sắp xếp theo giá
const sortByPrice = (products, order = "asc") => 
    [...products].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);

// 4. Tìm sản phẩm rẻ nhất mỗi category
const cheapestByCategory = (products) => 
    products.reduce((acc, curr) => {
        if (!acc[curr.category] || curr.price < acc[curr.category].price) {
            acc[curr.category] = curr;
        }
        return acc;
    }, {});

// 5. Tính tổng giá trị kho
const totalInventoryValue = (products) => 
    products.reduce((sum, p) => sum + (p.price * p.stock), 0);

// 6. Tạo mảng chỉ chứa { name, formattedPrice }
const formatProductList = (products) => 
    products.map(p => ({
        name: p.name,
        formattedPrice: p.price.toLocaleString("vi-VN") + "đ"
    }));

// 7. Tính rating trung bình
const averageRating = (products) => 
    Number((products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1));

// 8. Tìm sản phẩm theo keyword
const searchProducts = (products, keyword) => {
    const lowerKeyword = keyword.toLowerCase();
    return products.filter(p => p.name.toLowerCase().includes(lowerKeyword));
};