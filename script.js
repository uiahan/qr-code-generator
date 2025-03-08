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
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");

        canvas.width = qrImage.width + 20;
        canvas.height = qrImage.height + 20;
        
        context.fillStyle = "#ffffff"; 
        context.fillRect(0, 0, canvas.width, canvas.height);

        let img = new Image();
        img.crossOrigin = "anonymous";
        img.src = qrImage.src;
        img.onload = function () {
            context.drawImage(img, 10, 10, qrImage.width, qrImage.height);

            let link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "qr-code.png";
            link.click();
        };
    } else {
        alert("Buat QR Code dulu sebelum download!");
    }
}