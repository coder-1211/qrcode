const wrapper = document.querySelector(".wrapper"),
    qrvalue = wrapper.querySelector(".form input"),
    bttn = wrapper.querySelector(".form button"),
    qrimg = wrapper.querySelector(".qrcode img"),
    dow = wrapper.querySelector(".down");


bttn.addEventListener("click", () => {
    let qrValue = qrvalue.value;
    if (!qrValue) {
        alert('Please enter a value to generate the Qr code!');
        return;
    }

    bttn.innerText = "GENERATING QR CODE!....";
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}&format=jpeg&bgcolor=caf0f8`;
    qrimg.addEventListener("load", () => {
        wrapper.classList.add("active");
        bttn.innerText = "GENERATE";
    })

})
dow.addEventListener("click", () => {

    let qrValue = qrvalue.value;
    if (!qrValue) {
        alert('Please enter a value to generate the Qr code!');

        return;
    }
    dow.href = qrimg.src;

});







