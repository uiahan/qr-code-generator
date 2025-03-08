function generateQR() {
    let text = document.getElementById("text-input").value;
    let qrContainer = document.getElementById("qrcode");
    let color = document.getElementById("color").value;
    let bgColor = document.getElementById("bg-color").value;

    qrContainer.innerHTML = "";

    if (text.trim() !== "") {
        new QRCode(qrContainer, {
            text: text,
            width: 200,
            height: 200,
            colorDark: color,
            colorLight: bgColor
        });
        setTimeout(() => {
            let qrImage = document.querySelector("#qrcode img");
            if (qrImage) {
                qrImage.style.padding = "10px";  
                qrImage.style.background = "white";
                qrImage.style.borderRadius = "10px";
            }
        }, 100);
    } else {
        alert("Masukan text atau URL dulu!");
    }
}

function downloadQR() {
    let svg = document.querySelector("#qrcode svg");

    if (svg) {
        let serializer = new XMLSerializer();
        let svgBlob = new Blob([serializer.serializeToString(svg)], { type: "image/svg+xml" });

        let link = document.createElement("a");
        link.href = URL.createObjectURL(svgBlob);
        link.download = "qr-code.svg";
        link.click();
    } else {
        alert("Buat QR Code dulu sebelum download!");
    }
}