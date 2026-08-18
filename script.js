console.log("JavaScript is connected!");

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

hiddenElements.forEach((element) => {
    observer.observe(element);
});

document.getElementById("pixelPaletteBtn").addEventListener("click", () => {
    window.open("https://pixelpalettee.netlify.app", "_blank");
});