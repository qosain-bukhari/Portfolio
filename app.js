(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    const downloadBtn = document.getElementById("download-cv");
    downloadBtn.addEventListener("click", function (e) {
        const link = document.createElement("a");
        link.href = "Qosain_Bukhari_CV.pdf";
        link.download = "Qosain_Bukhari_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
})();