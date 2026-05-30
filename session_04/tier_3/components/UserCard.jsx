import React from 'react';

function UserCard({ name, email, avatar }) {
    return (
        <div style={{ 
            border: "1px solid #ddd", 
            borderRadius: "8px",
            padding: "15px",
            margin: "10px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            width: "300px"
        }}>
            <img 
                src={avatar} 
                alt={name} 
                style={{ width: "60px", height: "60px", borderRadius: "50%" }} 
            />
            <div>
                <h3 style={{ margin: "0 0 5px 0" }}>{name}</h3>
                <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>{email}</p>
            </div>
        </div>
    );
}

export default UserCard;