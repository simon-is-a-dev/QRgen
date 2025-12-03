document.addEventListener("DOMContentLoaded", () => {
    const urlInput = document.getElementById("urlInput");
    const generateBtn = document.getElementById("generateBtn");
    const downloadBtn = document.getElementById("downloadBtn");
    const qrContainer = document.getElementById("qrOutput");

    const qrColorInput = document.getElementById("qrColor");
    const radiusInput = document.getElementById("rad");
    const radValueDisplay = document.getElementById("radValue");

    let hasGenerated = false;
    const size = 220;
    const padding = 10;

    const generateQR = () => {
        const text = urlInput.value.trim();
        if (!text) {
            alert("Enter a URL or text first");
            return;
        }

        qrContainer.innerHTML = '';

        const rawRadius = parseInt(radiusInput.value);
        const calculatedRadius = rawRadius / 100;

        // Create temp canvas for QR
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = size;
        tempCanvas.height = size;

        QrCreator.render({
            text: text,
            radius: calculatedRadius,
            ecLevel: "H",
            fill: qrColorInput.value,
            background: null,
            size: size
        }, tempCanvas);

        // Create final canvas with padding
        const finalCanvas = document.createElement("canvas");
        finalCanvas.width = size + padding * 2;
        finalCanvas.height = size + padding * 2;
        const ctx = finalCanvas.getContext("2d");

        ctx.drawImage(tempCanvas, padding, padding);
        qrContainer.appendChild(finalCanvas);

        hasGenerated = true;
        downloadBtn.removeAttribute("disabled");
    };

    generateBtn.addEventListener("click", generateQR);

    urlInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") generateQR();
    });

    radiusInput.addEventListener("input", (e) => {
        radValueDisplay.textContent = e.target.value;
        if (hasGenerated) generateQR();
    });

    qrColorInput.addEventListener("input", () => {
        if (hasGenerated) generateQR();
    });

    downloadBtn.addEventListener("click", () => {
        const canvas = qrContainer.querySelector("canvas");
        if (!canvas) return;
        const link = document.createElement("a");
        link.download = `qr-code-${Date.now()}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
});
