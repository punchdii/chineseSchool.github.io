document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', (event) => {
        const programColumn = event.target.parentElement;
        const programBoxes = programColumn.querySelector('.program-boxes');
        programBoxes.scrollLeft += 200;
    });
});
