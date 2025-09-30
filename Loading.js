// JavaScript source code
// 모든 리소스가 로드되면 실행
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const content = document.querySelector(".cont");

    if (preloader && content) {
        // 로딩 완료 후 3초 동안 유지
        setTimeout(function () {
            preloader.style.display = "none";   // 로딩 화면 제거
            document.body.style.overflow = "auto"; // 스크롤 허용
        }, 3000); // 3초
    }

});
