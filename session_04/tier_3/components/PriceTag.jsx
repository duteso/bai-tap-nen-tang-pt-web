import React from 'react';

function PriceTag({ originalPrice, salePrice }) {
    return (
        <div style={{ padding: "10px", margin: "10px", background: "#f9f9f9", borderRadius: "4px", display: "inline-block" }}>
            {salePrice ? (
                <>
                    <span style={{ textDecoration: "line-through", color: "#999", marginRight: "10px" }}>
                        {originalPrice.toLocaleString('vi-VN')}đ
                    </span>
                    <span style={{ color: "#e74c3c", fontWeight: "bold", fontSize: "18px" }}>
                        {salePrice.toLocaleString('vi-VN')}đ
                    </span>
                </>
            ) : (
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {originalPrice.toLocaleString('vi-VN')}đ
                </span>
            )}
        </div>
    );
}

export default PriceTag;