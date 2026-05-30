function createCart() {
    let items = [];
    let discountRate = 0;
    let discountFlat = 0;
    
    return {
        addItem(product, quantity = 1) {
            const existingItem = items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({ ...product, quantity });
            }
        },
        
        removeItem(productId) {
            items = items.filter(item => item.id !== productId);
        },
        
        updateQuantity(productId, newQuantity) {
            const item = items.find(item => item.id === productId);
            if (item) item.quantity = newQuantity;
        },
        
        getTotal() {
            const subTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            return (subTotal * (1 - discountRate)) - discountFlat;
        },
        
        applyDiscount(code) {
            if (code === "SALE10") discountRate = 0.1;
            else if (code === "SALE20") discountRate = 0.2;
            else if (code === "FREESHIP") discountFlat = 30000;
        },
        
        printCart() {
            console.log("┌──────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm      │ SL │ Đơn giá     │ Tổng        │");
            items.forEach((item, index) => {
                const total = item.price * item.quantity;
                console.log(`│ ${index + 1} │ ${item.name.padEnd(13)} │ ${String(item.quantity).padStart(2)} │ ${String(item.price).padStart(10)} │ ${String(total).padStart(10)} │`);
            });
            console.log("├──────────────────────────────────────────────┤");
            console.log(`│ Tổng cộng:                       ${String(this.getTotal()).padStart(10)}đ │`);
            console.log("└──────────────────────────────────────────────┘");
        },
        
        getItemCount() {
            return items.reduce((count, item) => count + item.quantity, 0);
        },
        
        clearCart() {
            items = [];
            discountRate = 0;
            discountFlat = 0;
        }
    };
}