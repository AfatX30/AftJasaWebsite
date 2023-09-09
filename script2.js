// Fungsi yang akan dijalankan saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    console.log("Halaman dimuat sepenuhnya jangan lupa ibadahSs.");

    // Contoh interaksi JavaScript sederhana
    const projectElements = document.querySelectorAll(".project");
    projectElements.forEach((project, index) => {
        project.addEventListener("click", () => {
            alert(`Anda mengklik Proyek Selamat datang ${index + 1}`);
        });
    });
});
