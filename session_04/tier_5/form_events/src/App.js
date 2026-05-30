import React, { useState } from 'react';

function Challenge5_4() {
    const [form, setForm] = useState({ email: '', password: '', confirm: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const isEmailValid = form.email.includes('@');
    const isPasswordMatch = form.password === form.confirm && form.password.length > 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!isEmailValid) {
            alert('Email không hợp lệ!');
            return;
        }
        if (!isPasswordMatch) {
            alert('Mật khẩu xác nhận không khớp!');
            return;
        }
        
        setSubmitted(true);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Bài 5.4: Form Events</h2>
            
            {!submitted ? (
                <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
                    <div style={{ marginBottom: "15px" }}>
                        <input 
                            name="email" 
                            value={form.email} 
                            onChange={handleChange} 
                            placeholder="Email" 
                            style={{ width: "100%", padding: "8px", borderColor: (!isEmailValid && form.email) ? "red" : "#ccc" }}
                        />
                        {!isEmailValid && form.email.length > 0 && (
                            <span style={{ color: 'red', fontSize: "12px" }}>Vui lòng nhập email hợp lệ (có @)</span>
                        )}
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <input 
                            type="password" 
                            name="password" 
                            value={form.password} 
                            onChange={handleChange} 
                            placeholder="Mật khẩu" 
                            style={{ width: "100%", padding: "8px" }}
                        />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <input 
                            type="password" 
                            name="confirm" 
                            value={form.confirm} 
                            onChange={handleChange} 
                            placeholder="Xác nhận mật khẩu" 
                            style={{ width: "100%", padding: "8px", borderColor: (!isPasswordMatch && form.confirm) ? "red" : "#ccc" }}
                        />
                        {!isPasswordMatch && form.confirm.length > 0 && (
                            <span style={{ color: 'red', fontSize: "12px" }}>Mật khẩu không khớp!</span>
                        )}
                    </div>

                    <button type="submit" style={{ width: "100%", padding: "10px", cursor: "pointer" }}>
                        Đăng ký
                    </button>
                </form>
            ) : (
                <div style={{ background: "#d4edda", padding: "15px", borderRadius: "4px" }}>
                    <h3>Đăng ký thành công!</h3>
                    <p>Email: {form.email}</p>
                    <button onClick={() => { setSubmitted(false); setForm({email: '', password: '', confirm: ''}); }}>
                        Đăng ký tài khoản khác
                    </button>
                </div>
            )}
        </div>
    );
}

export default Challenge5_4;