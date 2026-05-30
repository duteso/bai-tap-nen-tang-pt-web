import React, { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.text);

    const handleSave = () => {
        if (editValue.trim() !== "") {
            onEdit(todo.id, editValue);
        } else {
            setEditValue(todo.text); // Hủy nếu sửa thành rỗng
        }
        setIsEditing(false);
    };

    return (
        <li style={{ display: "flex", alignItems: "center", padding: "12px", border: "1px solid #ddd", marginBottom: "5px", background: todo.done ? '#f9f9f9' : '#fff', borderRadius: "4px" }}>
            <input 
                type="checkbox" 
                checked={todo.done} 
                onChange={() => onToggle(todo.id)} 
                style={{ marginRight: "12px", cursor: "pointer" }} 
            />
            
            {isEditing ? (
                <input 
                    autoFocus
                    value={editValue} 
                    onChange={e => setEditValue(e.target.value)} 
                    onBlur={handleSave}
                    onKeyDown={e => e.key === 'Enter' && handleSave()}
                    style={{ flex: 1, padding: "5px", fontSize: "16px" }}
                />
            ) : (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', cursor: "text" }} onDoubleClick={() => setIsEditing(true)}>
                    <span style={{ textDecoration: todo.done ? "line-through" : "none", color: todo.done ? "#999" : "#333", fontSize: "16px" }}>
                        {todo.text}
                    </span>
                    <span style={{ fontSize: "12px", color: "#aaa", marginTop: "3px" }}>Tạo lúc: {todo.createdAt}</span>
                </div>
            )}

            <button onClick={() => setIsEditing(!isEditing)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px" }}>✏️</button>
            <button onClick={() => onDelete(todo.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", marginLeft: "5px", color: "red" }}>❌</button>
        </li>
    );
}

export default TodoItem;