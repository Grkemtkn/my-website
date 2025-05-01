document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("navHamburger");
    let mobileMenu = null;

    if (hamburger) { // Sadece hamburger varsa çalışsın
        hamburger.addEventListener("click", function(e) {
            e.stopPropagation();
            if (!mobileMenu) {
                mobileMenu = document.createElement("div");
                mobileMenu.className = "nav-mobile-menu";
                mobileMenu.innerHTML = `
                    <a href="AnaSafya.html">ANASAYFA</a>
                    <a href="Hakkımızda.html">HAKKIMIZDA</a>
                    <a href="Hizmetlerimiz.html">HİZMETLERİMİZ</a>
                    <a href="İletişim.html">İLETİŞİM</a>
                `;
                hamburger.parentNode.appendChild(mobileMenu);
            } else {
                mobileMenu.remove();
                mobileMenu = null;
            }
        });

        document.addEventListener("click", function(e) {
            if (mobileMenu && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.remove();
                mobileMenu = null;
            }
        });
    }
});
