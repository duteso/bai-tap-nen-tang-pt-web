const form = document.getElementById('regForm');
const els = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    pwd: document.getElementById('pwd'),
    pwdConf: document.getElementById('pwdConf'),
    phone: document.getElementById('phone')
};
const submitBtn = document.getElementById('submitBtn');
let validState = { name: false, email: false, pwd: false, pwdConf: false, phone: false };

const checkGlobalValid = () => {
    submitBtn.disabled = !Object.values(validState).every(v => v);
};

els.name.addEventListener('input', e => {
    const val = e.target.value.trim();
    validState.name = val.length >= 2 && val.length <= 50;
    document.getElementById('nameStatus').textContent = validState.name ? '✅' : (val.length > 0 ? '❌' : '');
    checkGlobalValid();
});

els.email.addEventListener('input', e => {
    const val = e.target.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validState.email = regex.test(val);
    document.getElementById('emailErr').textContent = validState.email || val.length === 0 ? '' : 'Email không đúng định dạng';
    checkGlobalValid();
});

els.pwd.addEventListener('input', e => {
    const val = e.target.value;
    let strength = 0;
    
    if (val.length >= 8) {
        if (/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(val)) strength = 3;
        else if (/(?=.*[a-zA-Z])(?=.*\d)/.test(val)) strength = 2;
        else strength = 1;
    }

    const bar = document.getElementById('strengthBar');
    if (strength === 0) {
        bar.style.width = val.length > 0 ? '25%' : '0%';
        bar.style.backgroundColor = '#dc3545';
        validState.pwd = false;
    } else if (strength === 1) {
        bar.style.width = '33%';
        bar.style.backgroundColor = '#dc3545';
        validState.pwd = false;
    } else if (strength === 2) {
        bar.style.width = '66%';
        bar.style.backgroundColor = '#ffc107';
        validState.pwd = true;
    } else if (strength === 3) {
        bar.style.width = '100%';
        bar.style.backgroundColor = '#28a745';
        validState.pwd = true;
    }

    els.pwdConf.dispatchEvent(new Event('input'));
    checkGlobalValid();
});

els.pwdConf.addEventListener('input', e => {
    const val = e.target.value;
    validState.pwdConf = val === els.pwd.value && val.length > 0;
    document.getElementById('pwdConfStatus').textContent = validState.pwdConf ? '✅' : (val.length > 0 ? '❌' : '');
    checkGlobalValid();
});

els.phone.addEventListener('input', e => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 10);
    let formatted = val;
    if (val.length > 4) formatted = val.slice(0, 4) + '-' + val.slice(4);
    if (val.length > 7) formatted = formatted.slice(0, 8) + '-' + formatted.slice(8);
    e.target.value = formatted;
    
    validState.phone = val.length === 10;
    document.getElementById('phoneErr').textContent = validState.phone || val.length === 0 ? '' : 'Số điện thoại phải đủ 10 số';
    checkGlobalValid();
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const modal = document.getElementById('modal');
    const info = document.getElementById('modalInfo');
    info.innerHTML = `
        <p><strong>Tên:</strong> ${els.name.value}</p>
        <p><strong>Email:</strong> ${els.email.value}</p>
        <p><strong>SĐT:</strong> ${els.phone.value}</p>
    `;
    modal.classList.add('active');
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('active');
    form.reset();
    validState = { name: false, email: false, pwd: false, pwdConf: false, phone: false };
    document.getElementById('strengthBar').style.width = '0';
    document.querySelectorAll('.status, .error').forEach(el => el.textContent = '');
    checkGlobalValid();
});