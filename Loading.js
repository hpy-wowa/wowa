// JavaScript source code
// ��� ���ҽ��� �ε�Ǹ� ����
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const content = document.querySelector(".cont");

    if (preloader && content) {
        // �ε� �Ϸ� �� 3�� ���� ����
        setTimeout(function () {
            preloader.style.display = "none";   // �ε� ȭ�� ����
            document.body.style.overflow = "auto"; // ��ũ�� ���
        }, 3000); // 3��
    }

});
