function App() {
    return (
        <div>
            <h1>Dương Thế Sơn</h1>
            <p>Hôm nay là ngày đẹp trời</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        </div>
    );
}

// ===== Bài tập: Viết lại HTML thành JSX =====

// HTML thuần (copy từ bài cũ):
/*
<div class="card">
    <img src="avatar.jpg" alt="Avatar">
    <h2>Nguyễn Văn Minh</h2>
    <p>Sinh viên năm 3</p>
    <label for="email">Email:</label>
    <input type="email" id="email">
</div>
*/

// JSX (viết lại):
function StudentCard() {
    return (
        <div className="card">         {/* class → className */}
            <img src="avatar.jpg" alt="Avatar" />  {/* Đóng thẻ */}
            <h2>Dương Thế Sơn</h2>
            <p>Sinh viên năm 2</p>
            <label htmlFor="email">Email:</label>   {/* for → htmlFor */}
            <input type="email" id="email" />       {/* Đóng thẻ */}
        </div>
    );
}

export default StudentCard;
