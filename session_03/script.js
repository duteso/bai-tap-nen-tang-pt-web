let students = JSON.parse(localStorage.getItem('students')) || [];

const tableBody = document.getElementById('studentTableBody');
const modal = document.getElementById('studentModal');
const studentForm = document.getElementById('studentForm');
const modalTitle = document.getElementById('modalTitle');
const editIndexInput = document.getElementById('editIndex');

renderStudents();

function renderStudents() {
    tableBody.innerHTML = ''; 

    if (students.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7" style="text-align:center;">Chưa có dữ liệu sinh viên</td></tr>';
    } else {
        for (let i = 0; i < students.length; i++) {
            let sv = students[i];
            let row = `<tr>
                <td>${sv.maSV}</td>
                <td>${sv.hoTen}</td>
                <td>${sv.ngaySinh}</td>
                <td>${sv.lopHoc}</td>
                <td>${sv.diemTB}</td>
                <td>${sv.email}</td>
                <td>
                    <button class="btn-edit" onclick="editStudent(${i})">Sửa</button>
                    <button class="btn-delete" onclick="deleteStudent(${i})">Xóa</button>
                </td>
            </tr>`;
            tableBody.innerHTML += row;
        }
    }
    updateStatistics();
}

function updateStatistics() {
    document.getElementById('totalStudents').innerText = students.length;
    
    let totalScore = 0;
    for (let i = 0; i < students.length; i++) {
        totalScore += parseFloat(students[i].diemTB);
    }

    let avg = students.length > 0 ? (totalScore / students.length).toFixed(2) : 0;
    document.getElementById('avgScore').innerText = avg;
}

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    studentForm.reset(); 
    editIndexInput.value = -1; 
    modalTitle.innerText = "Thêm Sinh Viên";
}

studentForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let svMoi = {
        maSV: document.getElementById('maSV').value,
        hoTen: document.getElementById('hoTen').value,
        ngaySinh: document.getElementById('ngaySinh').value,
        lopHoc: document.getElementById('lopHoc').value,
        diemTB: document.getElementById('diemTB').value,
        email: document.getElementById('email').value
    };

    let currentIndex = editIndexInput.value;

    if (currentIndex == -1) {
        students.push(svMoi);
    } else {
        students[currentIndex] = svMoi;
    }

    saveAndRender();
    closeModal();
});

function editStudent(index) {
    let sv = students[index];
    
    document.getElementById('maSV').value = sv.maSV;
    document.getElementById('hoTen').value = sv.hoTen;
    document.getElementById('ngaySinh').value = sv.ngaySinh;
    document.getElementById('lopHoc').value = sv.lopHoc;
    document.getElementById('diemTB').value = sv.diemTB;
    document.getElementById('email').value = sv.email;

    modalTitle.innerText = "Cập Nhật Sinh Viên";
    editIndexInput.value = index;

    openModal();
}

function deleteStudent(index) {
    let confirmDelete = confirm("Bạn có chắc chắn muốn xóa sinh viên này không?");
    if (confirmDelete) {
        students.splice(index, 1); 
        saveAndRender();
    }
}

function saveAndRender() {
    localStorage.setItem('students', JSON.stringify(students));
    renderStudents();
}