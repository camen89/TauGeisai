window.onload = function () {
    const text = document.querySelector('.wave-text');
    const characters = text.textContent.split('');

    text.innerHTML = '';
    characters.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        text.appendChild(span);
    });
};

