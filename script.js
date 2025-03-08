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
    let qrImage = document.querySelector("#qrcode img");
    if (qrImage) {
        let link = document.createElement("a");
        link.href = qrImage.src;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("Generate QR dulu sebelum download!")
    }
}

