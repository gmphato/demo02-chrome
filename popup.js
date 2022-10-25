document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    addBorders();

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = getBarkedTitle(tabs[0].title);
    });
});

function addBorders() {
    const els = document.querySelectorAll('body');
    els.forEach(el => {
        el.style.border = '2px dotted #2a9d8f';
    });
}