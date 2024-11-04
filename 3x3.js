const eredeti = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Kiras(szamok) {
    const grid = document.getElementById("szamsorszamok");
    grid.innerHTML = '';
    szamok.forEach(szam => {
        const div = document.createElement("div");
        div.textContent = szam;
        grid.appendChild(div);
    });
}

function Keveres() {
    const kever = [...eredeti];
    for (let i = kever.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [kever[i], kever[j]] = [kever[j], kever[i]];
    }
    Kiras(kever);
}