const wrapper = document.querySelector(".wrapper"),
      qrInput = wrapper.querySelector(".form input"),
      generateBtn = wrapper.querySelector(".form button"),
      qrImg = wrapper.querySelector(".qr-code img");
      

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim(); 
    if (!qrValue) return;

    generateBtn.innerText = "Generating QR Code...";

    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(qrValue)}`;
    console.log("QR Code URL:", qrUrl); 

    qrImg.src = qrUrl;
    qrImg.onload = () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    };
    qrImg.onerror = (error) => {
        console.error("Error loading QR code:", error);
        generateBtn.innerText = "Generate QR Code";
    };
});


qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
    }
});




