const addForm = document.getElementById("addModal");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("closeBtn");
const okBtn = document.getElementById("OK");

let tenCV = document.getElementById("tenCV");
let ndCV = document.getElementById("ndCV");
let hanCV = document.getElementById("hanCV");
let mucCV = document.getElementById("mucCV");
let trangThai = document.getElementById("trangThai");

let tableCV = document.getElementById("tableCV");

let stt = 5;
let editRow = null;

addBtn.addEventListener("click", () => {
    addForm.showModal();
});

closeBtn.addEventListener("click", () => {
    addForm.close();
});

okBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (editRow) {
        capNhatCV();
    } else {
        themCV();
    }
});

function themCV() {
    stt++;

    tableCV.innerHTML += `
        <tr>
            <td>${stt}</td>
            <td>${tenCV.value}</td>
            <td>${ndCV.value}</td>
            <td>${hanCV.value}</td>
            <td>${mucCV.value}</td>
            <td>${trangThai.value}</td>
            <td>
                <button class="btnSua">Sửa</button>
                <button class="btnXoa">Xóa</button>
            </td>
        </tr>
    `;

    resetForm();
    addForm.close();
}

function capNhatCV() {
    let cells = editRow.querySelectorAll("td");

    cells[1].textContent = tenCV.value;
    cells[2].textContent = ndCV.value;
    cells[3].textContent = hanCV.value;
    cells[4].textContent = mucCV.value;
    cells[5].textContent = trangThai.value;

    editRow = null;
    okBtn.textContent = "Thêm";

    resetForm();
    addForm.close();
}

function resetForm() {
    tenCV.value = "";
    ndCV.value = "";
    hanCV.value = "";
    mucCV.value = "";
    trangThai.value = "";
}

tableCV.addEventListener("click", (e) => {

    if (e.target.classList.contains("btnXoa")) {
        let row = e.target.closest("tr");
        row.remove();
    }

    if (e.target.classList.contains("btnSua")) {

        editRow = e.target.closest("tr");
        let cells = editRow.querySelectorAll("td");

        tenCV.value = cells[1].textContent;
        ndCV.value = cells[2].textContent;
        hanCV.value = cells[3].textContent;
        mucCV.value = cells[4].textContent;
        trangThai.value = cells[5].textContent;

        okBtn.textContent = "Cập nhật";
        addForm.showModal();
    }
});