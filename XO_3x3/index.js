function updateDivValue(id, value, color) {
    const element = document.getElementById(id);
    element.innerHTML = value;
    element.style.color = color;
}

function updateDivValueToX(id) {
    updateDivValue(id, "X", "#000000");
}

function resetGame() {
    for (let i = 1; i <= 9; i++) {
        updateDivValue(`${i}`, "N", "#ffffff");
    }
}
