window.addEventListener("scroll", function() {
    const btn = document.getElementById("scrollToTopBtn");
    if (window.scrollY > 300) {
        btn.style.display = "flex";
        btn.innerHTML = "/\\";
    } else {
        btn.style.display = "none";
    }
});
document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};