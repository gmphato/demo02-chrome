const divs = document.querySelectorAll('div');

divs.forEach(d => {
    d.style.border = '1px dotted #2a9d8f'
    const node = createItem('DIV')
    d.appendChild(node)
});

function createItem(name) {
    let pre = document.createElement('pre');
    pre.textContent = name;
    pre.style.fontSize = '12px'
    pre.style.border = '1px dotted red';
    pre.style.position = 'absolute',
    pre.style.zIndex = 99999;
    return pre;
}