
document.querySelectorAll('.skill-img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.src = img.dataset.color;
    });

    img.addEventListener('mouseout', () => {
        img.src = img.dataset.bw;
    });
});
