const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" }
];

let countGioi = 0, countKha = 0, countTB = 0, countYeu = 0;
let maxAvg = -Infinity, minAvg = Infinity;
let bestStudent = "", worstStudent = "";
let totalMath = 0, totalPhysics = 0, totalCS = 0;
let totalScoreM = 0, countM = 0;
let totalScoreF = 0, countF = 0;

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

for (let i = 0; i < students.length; i++) {
    const st = students[i];
    
    let avg = st.math * 0.4 + st.physics * 0.3 + st.cs * 0.3;
    let avgFormatted = avg.toFixed(1);

    let grade = "";
    if (avg >= 8.0) { grade = "Giỏi"; countGioi++; }
    else if (avg >= 6.5) { grade = "Khá"; countKha++; }
    else if (avg >= 5.0) { grade = "Trung bình"; countTB++; }
    else { grade = "Yếu"; countYeu++; }

    let stt = String(i + 1).padEnd(3);
    let name = st.name.padEnd(6);
    let tb = avgFormatted.padEnd(4);
    let xeploai = grade.padEnd(11);
    console.log(`| ${stt} | ${name} | ${tb} | ${xeploai} |`);

    if (avg > maxAvg) { maxAvg = avg; bestStudent = st.name; }
    if (avg < minAvg) { minAvg = avg; worstStudent = st.name; }

    totalMath += st.math;
    totalPhysics += st.physics;
    totalCS += st.cs;

    if (st.gender === "M") { totalScoreM += avg; countM++; }
    else if (st.gender === "F") { totalScoreF += avg; countF++; }
}

const totalStudents = students.length;
console.log("\n--- THỐNG KÊ ---");
console.log(`- Số SV mỗi loại: Giỏi (${countGioi}), Khá (${countKha}), Trung bình (${countTB}), Yếu (${countYeu})`);
console.log(`- SV cao điểm nhất: ${bestStudent} (${maxAvg.toFixed(1)})`);
console.log(`- SV thấp điểm nhất: ${worstStudent} (${minAvg.toFixed(1)})`);
console.log(`- Điểm TB toàn lớp môn Toán: ${(totalMath / totalStudents).toFixed(1)}`);
console.log(`- Điểm TB toàn lớp môn Lý: ${(totalPhysics / totalStudents).toFixed(1)}`);
console.log(`- Điểm TB toàn lớp môn CS: ${(totalCS / totalStudents).toFixed(1)}`);
console.log(`- (Bonus) Điểm TB nam: ${(totalScoreM / countM).toFixed(1)}`);
console.log(`- (Bonus) Điểm TB nữ: ${(totalScoreF / countF).toFixed(1)}`);