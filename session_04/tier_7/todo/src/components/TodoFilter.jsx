import React from 'react';

function TodoFilter({ filter, setFilter }) {
    const filters = [
        { key: 'all', label: 'Tất cả' }, 
        { key: 'active', label: 'Chưa xong' }, 
        { key: 'completed', label: 'Hoàn thành' }
    ];

    return (
        <div style={{ display: "flex", gap: "5px", marginBottom: "20px" }}>
            {filters.map(f => (
                <button 
                    key={f.key} 
                    onClick={() => setFilter(f.key)}
                    style={{ 
                        flex: 1, 
                        background: filter === f.key ? '#3498db' : '#f0f0f0', 
                        color: filter === f.key ? '#fff' : '#333', 
                        padding: "8px", 
                        border: "none", 
                        cursor: "pointer" 
                    }}
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
}

export default TodoFilter;