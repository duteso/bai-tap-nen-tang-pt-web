let danhSachSV = JSON.parse(localStorage.getItem('danhSachSV')) || [];

const tableBody = document.getElementById('tableBody');
const soSVElement = document.getElementById('soSV');
const diemTBElement = document.getElementById('diemTB');

const formModal = document.getElementById('formModal');
const svForm = document.getElementById('svForm');
const formTitle = document.getElementById('formTitle');
const addBtn = document.getElementById('addBtn');
const cancelBtn = document.getElementById('cancelBtn');
const editIndex = document.getElementById('editIndex');

hienThiDanhSach();

function hienThiDanhSach() {
    tableBody.innerHTML = '';

    if (danhSachSV.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7" style="text-align:center;">Chưa có dữ liệu</td></tr>';
    } else {
        for (let i = 0; i < danhSachSV.length; i++) {
            let sv = danhSachSV[i];
            let htmlRow = `
                <tr>
                    <td>${sv.msv}</td>
                    <td>${sv.ten}</td>
                    <td>${sv.ngaySinh}</td>
                    <td>${sv.lop}</td>
                    <td>${sv.diem}</td>
                    <td>${sv.email}</td>
                    <td>
                        <button class="btn-sua" onclick="suaSV(${i})">Sửa</button>
                        <button class="btn-xoa" onclick="xoaSV(${i})">Xóa</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += htmlRow;
        }
    }
    
    capNhatThongSo();
}

function capNhatThongSo() {
    soSVElement.innerText = danhSachSV.length;

    let tongDiem = 0;
    for (let i = 0; i < danhSachSV.length; i++) {
        tongDiem += parseFloat(danhSachSV[i].diem);
    }

    let diemTrungBinh = danhSachSV.length > 0 ? (tongDiem / danhSachSV.length).toFixed(2) : "0.0";
    diemTBElement.innerText = diemTrungBinh;
}

addBtn.addEventListener('click', function() {
    formModal.style.display = 'block';
    formTitle.innerText = "Thêm sinh viên";
    svForm.reset();
    editIndex.value = -1;
});

cancelBtn.addEventListener('click', function() {
    formModal.style.display = 'none';
});

svForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let svMoi = {
        msv: document.getElementById('inputMSV').value,
        ten: document.getElementById('inputTen').value,
        ngaySinh: document.getElementById('inputNgaySinh').value,
        lop: document.getElementById('inputLop').value,
        diem: document.getElementById('inputDiem').value,
        email: document.getElementById('inputEmail').value
    };

    let viTriSua = editIndex.value;

    if (viTriSua == -1) {
        danhSachSV.push(svMoi);
    } else {
        danhSachSV[viTriSua] = svMoi;
    }

    luuVaHienThi();
    formModal.style.display = 'none';
});

function suaSV(index) {
    let sv = danhSachSV[index];

    document.getElementById('inputMSV').value = sv.msv;
    document.getElementById('inputTen').value = sv.ten;
    document.getElementById('inputNgaySinh').value = sv.ngaySinh;
    document.getElementById('inputLop').value = sv.lop;
    document.getElementById('inputDiem').value = sv.diem;
    document.getElementById('inputEmail').value = sv.email;

    formTitle.innerText = "Sửa sinh viên";
    editIndex.value = index;

    formModal.style.display = 'block';
}

function xoaSV(index) {
    let xacNhan = confirm("Bạn có chắc chắn muốn xóa không?");
    if (xacNhan) {
        danhSachSV.splice(index, 1);
        luuVaHienThi();
    }
}

function luuVaHienThi() {
    localStorage.setItem('danhSachSV', JSON.stringify(danhSachSV));
    hienThiDanhSach();
}