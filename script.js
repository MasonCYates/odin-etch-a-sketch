let container = document.querySelector('.container');
container.style.gridTemplateColumns = 'repeat(16,1fr)';
container.style.gridTemplateRows = 'repeat(16,1fr)';

for(let i = 0; i < 256; i++) {
    let board = document.createElement('div');
    board.style.backgroundColor = 'blue';
    container.insertAdjacentElement("beforeend", board);
}