const addBtn = document.getElementById("add-btn");
const cancelBtn = document.getElementById("cancel-btn");
const formContainer = document.getElementById("form-container");
const deviceForm = document.getElementById("deviceForm");
const devicesGrid = document.getElementById("divicesGrid");
const searchBox = document.querySelector(".searchbox");

let devices = [];

function loadInitialDevices() {
    const cards = document.querySelectorAll(".device-card");

    cards.forEach((card) => {
        const name = card.querySelector("h3").innerText;
        const sn = card.querySelector("p:nth-of-type(1)").innerText.replace("SN:", "").trim();
        const type = card.querySelector("p:nth-of-type(2)").innerText;
        const status = card.querySelector(".status").innerText;

        devices.push({ name, sn, type, status });
    });
}

function renderDevices(data = devices) {
    devicesGrid.innerHTML = "";

    data.forEach((device, index) => {
        devicesGrid.innerHTML += `
            <div class="device-card">
                <h3>${device.name}</h3>
                <p><strong>SN:</strong> ${device.sn}</p>
                <p>${device.type}</p>
                <p class="status">${device.status}</p>
                <div class="device-buttons">
                    <button onclick="editDevice(${index})">Sửa</button>
                    <button onclick="deleteDevice(${index})">Xóa</button>
                </div>
            </div>
        `;
    });
}

addBtn.addEventListener("click", () => {
    formContainer.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
    formContainer.style.display = "none";
    deviceForm.reset();
});

deviceForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("deviceName").value;
    const sn = document.getElementById("deviceSN").value;
    const type = document.getElementById("deviceType").value;

    const newDevice = {
        name,
        sn,
        type,
        status: "Hoạt động"
    };

    devices.push(newDevice);

    renderDevices();

    deviceForm.reset();
    formContainer.style.display = "none";
});

searchBox.addEventListener("input", () => {
    const keyword = searchBox.value.toLowerCase();

    const filtered = devices.filter(device =>
        device.name.toLowerCase().includes(keyword) ||
        device.sn.toLowerCase().includes(keyword) ||
        device.type.toLowerCase().includes(keyword)
    );

    renderDevices(filtered);
});

loadInitialDevices();