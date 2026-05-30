# Bài 6.1 — Render danh sách (8 phút)
```
import React, { useState } from "react";

function ListBasics() {
    const [students] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);
    
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = (totalAge / students.length).toFixed(1);
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>Danh sách sinh viên</h2>
            <p><strong>Tuổi trung bình:</strong> {averageAge}</p>
            
            {students.map((student, index) => (
                <div 
                    key={student.id} 
                    style={{ 
                        padding: "8px", 
                        margin: "5px 0",
                        background: "#f9f9f9",
                        color: student.age >= 20 ? "blue" : "black" 
                    }}
                >
                    {/* Sử dụng tham số index (bắt đầu từ 0) để tạo STT */}
                    {index + 1}. {student.name} - {student.age} tuổi
                </div>
            ))}
        </div>
    );
}

export default ListBasics;
```

# Bài 6.2 — Thêm phần tử (CREATE) (10 phút)
```
import React, { useState, useRef } from "react";

function CreateItem() {
    const [items, setItems] = useState([{ id: 1, name: "HTML" }]);
    const [newName, setNewName] = useState("");
    const [message, setMessage] = useState("");
    const inputRef = useRef(null);
    
    function handleAdd() {
        if (newName.trim() === "") {
            setMessage("Tên không được để trống!");
            return; 
        }
        
        const newItem = { id: Date.now(), name: newName };
        setItems([...items, newItem]);
        setNewName("");
        
        setMessage("Đã thêm thành công!");
        setTimeout(() => setMessage(""), 3000);
        
        inputRef.current.focus();
    }
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>Thêm môn học</h2>
            
            <div style={{ marginBottom: "15px" }}>
                <input 
                    ref={inputRef} 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                    placeholder="Nhập tên..."
                />
                <button onClick={handleAdd}>Thêm</button>
            </div>
            
            {message && <p style={{ color: message === "Đã thêm thành công!" ? "green" : "red" }}>{message}</p>}
            
            {items.map(item => <div key={item.id}>{item.name}</div>)}
        </div>
    );
}

export default CreateItem;
```

# Bài 6.3 — Xóa phần tử (DELETE) (10 phút)
```
import React, { useState, useRef } from "react";

function DeleteItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh" },
        { id: 2, name: "An" }
    ]);
    
    const [deletedItem, setDeletedItem] = useState(null);
    const [message, setMessage] = useState("");
    const timeoutRef = useRef(null);
    
    function handleDelete(item) {
        if (window.confirm(`Bạn có chắc muốn xóa "${item.name}"?`)) {
            setItems(items.filter(i => i.id !== item.id));
            setDeletedItem(item);
            setMessage(`Đã xóa ${item.name}`);
            
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setDeletedItem(null);
                setMessage("");
            }, 5000);
        }
    }
    
    function handleUndo() {
        if (deletedItem) {
            setItems([...items, deletedItem]);
            setDeletedItem(null);
            setMessage("Đã hoàn tác!");
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setTimeout(() => setMessage(""), 3000);
        }
    }
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>Xóa sinh viên</h2>
            
            {message && (
                <div style={{ background: "#f0f0f0", padding: "10px", marginBottom: "15px", display: "flex", justifyContent: "space-between" }}>
                    <span>{message}</span>
                    {deletedItem && <button onClick={handleUndo}>Hoàn tác</button>}
                </div>
            )}
            
            {items.map(item => (
                <div key={item.id} style={{ display: "flex", gap: "10px", margin: "5px 0" }}>
                    <span style={{ width: "50px" }}>{item.name}</span>
                    <button onClick={() => handleDelete(item)}>Xóa</button>
                </div>
            ))}
        </div>
    );
}

export default DeleteItem;
```

# Bài 6.4 — Sửa phần tử (UPDATE) (15 phút)
```
import React, { useState } from "react";

function UpdateItem() {
    const [items, setItems] = useState([{ id: 1, name: "Minh" }]);
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [message, setMessage] = useState("");
    
    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
    }
    
    function saveEdit() {
        if (editName.trim() === "") {
            alert("Tên không được để trống!");
            return;
        }
        
        setItems(items.map(item => 
            item.id === editingId ? { ...item, name: editName } : item
        ));
        
        setEditingId(null);
        setMessage("Đã lưu!");
        setTimeout(() => setMessage(""), 3000);
    }
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>Sửa thông tin</h2>
            {message && <p style={{ color: "green" }}>{message}</p>}
            
            {items.map(item => (
                <div key={item.id} style={{ padding: "10px", margin: "5px 0", background: "#f9f9f9" }}>
                    {editingId === item.id ? (
                        <div style={{ display: "flex", gap: "10px" }}>
                            <input 
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                                autoFocus
                                style={{ 
                                    padding: "4px", 
                                    border: "2px solid #3498db", 
                                    outline: "none",
                                    boxShadow: "0 0 5px rgba(52, 152, 219, 0.5)"
                                }}
                            />
                            <button onClick={saveEdit}>Lưu</button>
                            <button onClick={() => setEditingId(null)}>Hủy</button>
                        </div>
                    ) : (
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>{item.name}</span>
                            <button onClick={() => startEdit(item)}>Sửa</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UpdateItem;
```