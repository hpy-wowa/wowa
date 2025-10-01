// JavaScript source code
window.addEventListener("scroll", function () {
    const img = document.getElementById("eedohead");
    const scrollY = window.scrollY; // ÇöÀç ½ºÅ©·Ñ À§Ä¡

    let a = Math.floor(scrollY / 60) % 12; 

    img.src = "img/face00" + a + ".png";
});

