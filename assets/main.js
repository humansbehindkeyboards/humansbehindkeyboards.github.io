// https://phuoc.ng/collection/css-animation/typewriter/

document.addEventListener("DOMContentLoaded", () => {
    const content = 'We are simply human beings';
    const textEle = document.getElementById('text');
    const cursorEle = document.getElementById('cursor');
    let charIndex = 0;

    const type = () => {
        if (charIndex < content.length) {
            cursorEle.classList.remove('cursor__blink');
            textEle.textContent += content.charAt(charIndex);
            charIndex++;
            setTimeout(type, 120);
        } else {
            cursorEle.classList.add('cursor__blink');
        }
    };

    type();
});