import React, { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import TodoFilter from './components/TodoFilter';

function App() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });
    
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (inputValue.trim() === "") return;
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            done: false,
            createdAt: new Date().toLocaleDateString('vi-VN') 
        };
        setTodos([...todos, newTodo]);
        setInputValue("");
    };

    const deleteTodo = (id) => setTodos(todos.filter(t => t.id !== id));
    const toggleTodo = (id) => setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
    const editTodo = (id, newText) => setTodos(todos.map(t => t.id === id ? { ...t, text: newText } : t));

    const filteredTodos = todos.filter(t => {
        if (filter === "active") return !t.done;
        if (filter === "completed") return t.done;
        return true;
    });

    let placeholderText = "Nhập công việc mới...";
    if (filter === "active") placeholderText = "Thêm việc cần làm...";
    if (filter === "completed") placeholderText = "Bạn không thể thêm việc đã xong!";

    return (
        <div style={{ maxWidth: "500px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center" }}>📋 Todo App</h1>
            <p style={{ textAlign: "center", color: "#666" }}>Tổng số công việc: <strong>{todos.length}</strong></p>

            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <input 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} 
                    onKeyDown={e => e.key === 'Enter' && filter !== 'completed' && addTodo()}
                    placeholder={placeholderText}
                    disabled={filter === "completed"}
                    style={{ flex: 1, padding: "10px", fontSize: "16px" }}
                />
                <button 
                    onClick={addTodo} 
                    disabled={filter === "completed"}
                    style={{ padding: "10px 20px", background: filter === "completed" ? "#ccc" : "#3498db", color: "white", border: "none" }}
                >
                    Thêm
                </button>
            </div>

            <TodoFilter filter={filter} setFilter={setFilter} />

            <ul style={{ listStyle: "none", padding: 0 }}>
                {filteredTodos.length === 0 ? (
                    <p style={{ textAlign: "center", color: "#999", marginTop: "40px" }}>Danh sách trống</p>
                ) : (
                    filteredTodos.map(todo => (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            onToggle={toggleTodo} 
                            onDelete={deleteTodo} 
                            onEdit={editTodo} 
                        />
                    ))
                )}
            </ul>
        </div>
    );
}

export default App;