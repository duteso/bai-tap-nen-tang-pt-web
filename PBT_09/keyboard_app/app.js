const images = Array.from({ length: 9 }, (_, i) => `https://placehold.co/600x400?text=Image+${i + 1}`);
const commands = [
    { id: 'home', label: 'Go to Home' },
    { id: 'settings', label: 'Open Settings' },
    { id: 'dark', label: 'Toggle Dark Mode' },
    { id: 'about', label: 'About Us' },
    { id: 'logout', label: 'Log Out' }
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const cmdPalette = document.getElementById('cmdPalette');
const cmdInput = document.getElementById('cmdInput');
const cmdList = document.getElementById('cmdList');

let currentIndex = 0;
let isModalOpen = false;
let isPaletteOpen = false;
let isPlaying = false;
let slideInterval;
let filteredCommands = [...commands];
let cmdIndex = 0;

images.forEach((src, idx) => {
    const btn = document.createElement('button');
    btn.className = 'gallery-item';
    btn.style.backgroundImage = `url(${src})`;
    btn.setAttribute('aria-label', `Xem ảnh ${idx + 1}`);
    btn.addEventListener('click', () => openModal(idx));
    gallery.appendChild(btn);
});

function openModal(index) {
    currentIndex = index;
    modalImg.src = images[currentIndex];
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    isModalOpen = true;
}

function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    isModalOpen = false;
    stopSlideshow();
}

function updateModalImg() {
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    modalImg.src = images[currentIndex];
}

function toggleSlideshow() {
    isPlaying = !isPlaying;
    modalImg.classList.toggle('playing', isPlaying);
    if (isPlaying) {
        slideInterval = setInterval(() => {
            currentIndex++;
            updateModalImg();
        }, 1500);
    } else {
        stopSlideshow();
    }
}

function stopSlideshow() {
    isPlaying = false;
    modalImg.classList.remove('playing');
    clearInterval(slideInterval);
}

function renderCommands() {
    cmdList.innerHTML = '';
    filteredCommands.forEach((cmd, idx) => {
        const li = document.createElement('li');
        li.textContent = cmd.label;
        if (idx === cmdIndex) li.classList.add('selected');
        li.addEventListener('click', () => executeCommand(cmd));
        cmdList.appendChild(li);
    });
}

function executeCommand(cmd) {
    alert(`Đã chạy lệnh: ${cmd.label}`);
    closePalette();
}

function openPalette() {
    cmdPalette.classList.add('active');
    cmdPalette.setAttribute('aria-hidden', 'false');
    isPaletteOpen = true;
    cmdInput.value = '';
    filteredCommands = [...commands];
    cmdIndex = 0;
    renderCommands();
    cmdInput.focus();
}

function closePalette() {
    cmdPalette.classList.remove('active');
    cmdPalette.setAttribute('aria-hidden', 'true');
    isPaletteOpen = false;
    document.activeElement.blur();
}

document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        isPaletteOpen ? closePalette() : openPalette();
        return;
    }

    if (e.key === 'Escape') {
        if (isPaletteOpen) closePalette();
        if (isModalOpen) closeModal();
        return;
    }

    if (isPaletteOpen) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (cmdIndex < filteredCommands.length - 1) cmdIndex++;
            renderCommands();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (cmdIndex > 0) cmdIndex--;
            renderCommands();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (filteredCommands[cmdIndex]) executeCommand(filteredCommands[cmdIndex]);
        }
        return;
    }

    if (isModalOpen) {
        if (e.key === 'ArrowRight') {
            currentIndex++;
            updateModalImg();
        } else if (e.key === 'ArrowLeft') {
            currentIndex--;
            updateModalImg();
        } else if (e.key >= '1' && e.key <= '9') {
            currentIndex = parseInt(e.key) - 1;
            updateModalImg();
        } else if (e.key === ' ') {
            e.preventDefault();
            toggleSlideshow();
        }
    }
});

cmdInput.addEventListener('input', e => {
    const val = e.target.value.toLowerCase();
    filteredCommands = commands.filter(c => c.label.toLowerCase().includes(val));
    cmdIndex = 0;
    renderCommands();
});

modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
});

cmdPalette.addEventListener('click', e => {
    if (e.target === cmdPalette) closePalette();
});