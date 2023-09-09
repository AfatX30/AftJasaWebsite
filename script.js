<script>
    // Efek animasi teks selamat datang
    const animatedTexts = document.querySelectorAll(".animated-text");

    function animateText() {
        animatedTexts.forEach((text, index) => {
            setTimeout(() => {
                text.style.opacity = "1";
                text.style.transform = "translateY(0)";
            }, index * 500); // Munculkan setiap teks dengan selang 500ms
        });
    }

    // Efek gambar yang bergerak
    const movingImage = document.querySelector(".h2 img");

    function moveImage() {
        let position = 0;
        let direction = 1;

        function animateImage() {
            position += direction;
            movingImage.style.transform = `translateX(${position}px)`;

            if (position >= 50 || position <= -50) {
                direction *= -1; // Balik arah gambar saat mencapai batas
            }

            requestAnimationFrame(animateImage);
        }

        animateImage();
    }

    // Jalankan animasi teks dan gambar saat dokumen siap
    document.addEventListener("DOMContentLoaded", () => {
        animateText();
        moveImage();
    });
</script>
