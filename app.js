document.addEventListener("DOMContentLoaded", () => {
    const urlInput = document.getElementById("urlInput");
    const button = document.getElementById("generateBtn");
    const placeholder = document.getElementById("qrOutput");

    button.addEventListener("click", () => {
        placeholder.innerHTML = ''; 
        QrCreator.render({
            text: urlInput.value,
            radius: 100,
            ecLevel: 'H',
            fill: '#000000ff',
            background: null,
            size: 260
        }, placeholder);
    });
});
