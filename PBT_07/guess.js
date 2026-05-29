const targetNumber = Math.floor(Math.random() * 100) + 1;
const maxGuesses = 7;
let attempts = 0;
let guessedNumbers = [];
let isWon = false;

while (attempts < maxGuesses) {
    let input = prompt(`Lần đoán ${attempts + 1}/${maxGuesses}.\nNhập một số từ 1 đến 100:`);

    if (input === null) {
        alert("Bạn đã thoát game!");
        break;
    }

    let guess = Number(input);

    if (isNaN(guess) || !Number.isInteger(guess) || guess < 1 || guess > 100) {
        alert("Đầu vào không hợp lệ! Vui lòng chỉ nhập số nguyên từ 1 đến 100.");
        continue;
    }

    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi! Vui lòng chọn số khác.");
        continue;
    }

    guessedNumbers.push(guess);
    attempts++;

    if (guess === targetNumber) {
        alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
        isWon = true;
        break;
    } else if (guess > targetNumber) {
        alert("Thấp hơn");
    } else {
        alert("Cao hơn");
    }
}

if (!isWon && attempts === maxGuesses) {
    alert(`Bạn đã hết ${maxGuesses} lượt! Thua rồi. Đáp án đúng là: ${targetNumber}`);
}