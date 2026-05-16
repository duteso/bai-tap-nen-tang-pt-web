# PHIẾU BÀI TẬP 04 | CSS LAYOUT — Positioning, Flexbox & Grid
## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)
### Câu A1 (10đ) — 5 Loại Positioning
| Position | Chiếm chỗ? | Mốc tọa độ | Use case |
|-----------|------------|-------------|-----------|
| `static` | Có | Không dùng `top/left` | Mặc định |
| `relative` | Có | Chính nó | Dịch nhẹ, làm mốc cho `absolute` |
| `absolute` | Không | Cha `relative` gần nhất | Badge, dropdown, tooltip |
| `fixed` | Không | Viewport | Chat button, modal overlay |
| `sticky` | Có => Không | Viewport *(khi dính)* | Sticky header, sidebar |

### Câu A2 (10đ) — Flexbox vs Grid
1. Trường hợp 1:
![alt text](screenshots/th1.jpg)
2. Trường hợp 2:
![alt text](screenshots/th2.jpg)
3. Trường hợp 3:
![alt text](screenshots/th3.jpg)
4. Trường hợp 4:
![alt text](screenshots/th4.jpg)
5. Trường hợp 5:
![alt text](screenshots/th5.jpg)

## PHẦN C — SUY LUẬN (20 điểm)
### Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?
1. Nav bar ngang
```
-Dùng Flexbox. Do layout ngang, dùng display: flex, kết hợp justify-content: space-between
để căn chỉnh các thành phần (logo, buttons, menu).
```
2. Lưới ảnh Ins
```
-Dùng Grid. Do layout dạng lưới, có 3 cột, dùng grid và grid-template-columns: repeat(3, 1fr)
để căn chỉnh ảnh tự động, tự động xuống hàng, 3 cột đều nhau
```
3. Layout blog
```
 -Dùng Grid. Do layout 2 cột không đều nhau (main rộng hơn sidebar),
 dùng Grid với grid-template-columns: 2fr 1fr để chia tỷ lệ, dễ responsive (sidebar tự xuống dưới khi mobile).
```
4. Footer với 4 cột thông tin
```
-Dùng Flexbox hoặc Grid (cả 2 đều được).
-Flexbox: dùng flex: 1 cho mỗi cột, chiều rộng tự động dựa vào nội dung.
-Grid: dùng grid-template-columns: repeat(4, 1fr) nếu muốn 4 cột đều nhau chặt chẽ.
```
5. Card sản phẩm
```
-Dùng Flexbox. Do layout dọc, cần đẩy nút xuống đáy card, dùng display: flex với flex-direction: column,
cho phần text flex-grow: 1 để chiếm hết không gian, nút tự dính đáy bất kể text dài ngắn.
```

### Câu C2 (10đ) — Debug Flexbox
1. Lỗi 1: Cards không đều chiều cao - nút "Mua" bị nhảy lên/xuống
![alt text](<screenshots/image copy.png>)
```
Nguyên nhân:
Các card có chiều cao tự động theo nội dung (text dài ngắn khác nhau),
nên nút "Mua" không cùng vị trí. Thiếu cơ chế đẩy nút xuống đáy card.
```
2. Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc, nhưng vẫn dính góc trái trên
![alt text](screenshots/image.png)
```
Nguyên nhân:
Chỉ dùng display: flex mà không có justify-content (căn giữa ngang) và align-items (căn giữa dọc).
```
3. Lỗi 3: Sidebar bị co lại khi content quá dài
![alt text](<screenshots/image copy 2.png>)
```
Nguyên nhân:
Mặc định Flexbox có flex-shrink: 1, tức các item có thể co lại khi không đủ chỗ.
Sidebar width: 250px vẫn bị co khi content bên cạnh quá rộng.
```
4. Sau khi fix:
![alt text](<screenshots/image copy 3.png>)
![alt text](<screenshots/image copy 4.png>)