// JavaScript source code
window.addEventListener("scroll", function () {
    const img = document.getElementById("eedohead");
    const scrollY = window.scrollY; // 현재 스크롤 위치

    let a = Math.floor(scrollY / 100) % 12; 

    img.src = "img/face00" + a + ".png";
});
