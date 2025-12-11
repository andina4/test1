document.addEventListener("DOMContentLoaded", function () {

    const btn = document.querySelector(".btn");

    // Pastikan tombol ditemukan
    if (!btn) return;

    // Saat tombol diklik
    btn.addEventListener("click", function () {

        // Popup cute
        const popup = document.createElement("div");
        popup.className = "popup-cute";
        popup.innerText = "Hi Mama Ina! 🩷✨";

        document.body.appendChild(popup);

        // Menghilang otomatis
        setTimeout(() => {
            popup.remove();
        }, 2000);

        // Efek love jatuh
        createFallingLove();
    });

    // Fungsi love jatuh
    function createFallingLove() {
        const love = document.createElement("div");
        love.className = "love";
        love.innerHTML = "💗";

        // Posisi acak
        love.style.left = Math.random() * 100 + "vw";
        love.style.animationDuration = (Math.random() * 2 + 2) + "s";

        document.body.appendChild(love);

        // Hapus love setelah jatuh
        setTimeout(() => {
            love.remove();
        }, 4000);
    }

});
