// script.js

// Tunggu sampai seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Membuat 'Intersection Observer' untuk mengawasi elemen saat masuk ke layar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Jika elemen terlihat di layar
            if (entry.isIntersecting) {
                // Tambahkan kelas 'show' untuk memicu animasi CSS
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // Picu animasi saat 10% elemen sudah terlihat
    });

    // Pilih semua elemen yang punya kelas 'hidden' untuk diawasi
    const hiddenElements = document.querySelectorAll('.hidden');
    // Suruh observer untuk mengawasi mereka semua
    hiddenElements.forEach(el => observer.observe(el));
});
