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
            colorLight: bgColor,
            correctLevel: QRCode.CorrectLevel.H,
            useSVG: true 
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
    let qrCanvas = document.querySelector("#qrcode canvas");

    if (!qrCanvas) {
        alert("Buat dulu QR Code sebelum mendownload!");
        return;
    }

    let link = document.createElement("a");
    link.href = qrCanvas.toDataURL("image/png");
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.body.innerHTML = `
    <div class="d-flex flex-column justify-content-center align-items-center px-3" style="background-color: #2C3930; height: 100dvh;">
        <div class="container d-flex justify-content-center">
            <div class="card shadow border-0 p-4 rounded-4" style="background-color: #3c4a40;">
                <h1 class="fw-semibold text-center text-white">
                    <i class="fa-solid fa-qrcode"></i> QR Code
                </h1>
                <div>
                    <input type="text" id="text-input" class="form-control mt-4" placeholder="Masukkan teks atau URL">
                </div>
                <div class="row gx-2">
                    <div class="col-6">
                        <div class="mt-3">
                            <small class="w-100 text-white">QR Code Color</small>
                            <input type="color" id="color" value="#000000" class="w-100">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="mt-3">
                            <small class="w-100 text-white">Background Color</small>
                            <input type="color" id="bg-color" value="#ffffff" class="w-100">
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <button onclick="generateQR()" class="mt-3 me-2 btn text-white w-100 d-flex align-items-center justify-content-center" style="background-color: #2C3930;">
                        <i class="fa-solid fa-qrcode me-1"></i> Generate
                    </button>
                    <button onclick="downloadQR()" class="mt-3 btn text-white w-100 d-flex align-items-center justify-content-center" style="background-color: #2C3930;">
                        <i class="fa-solid fa-download me-1"></i> Download
                    </button>
                </div>
                <div class="d-flex justify-content-center w-100">
                    <div id="qrcode" class="mt-3"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="fixed-bottom">
        <p class="text-white fw-light text-center" style="font-size: 14px;">Create by kkanva for you ❤️</p>
    </div>
`;
