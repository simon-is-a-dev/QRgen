document.addEventListener("DOMContentLoaded", () => {
    const urlInput = document.getElementById("urlInput");
    const button = document.getElementById("generateBtn");
    const placeholder = document.getElementById("qrOutput");

    button.addEventListener("click", () => {
        placeholder.innerHTML = ''; 
        QrCreator.render({
            text: urlInput.value,
            radius: 2,
            ecLevel: 'H',
            fill: '#536DFE',
            background: null,
            size: 260
        }, placeholder);
    });
});
