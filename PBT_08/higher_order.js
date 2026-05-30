// 1. pipe()
const pipe = (...fns) => (val) => fns.reduce((acc, fn) => fn(acc), val);

// 2. memoize()
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// 3. debounce()
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

// 4. retry()
async function retry(fn, maxAttempts = 3) {
    for (let i = 0; i < maxAttempts; i++) {
        try {
            return await fn(); // Chạy hàm
        } catch (error) {
            if (i === maxAttempts - 1) throw error; // Quăng lỗi nếu là lần cuối
        }
    }
}