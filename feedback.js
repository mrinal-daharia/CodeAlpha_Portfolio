document.addEventListener("DOMContentLoaded", () => {
    const message = localStorage.getItem("feedback");
    if (message) {
        const alertBox = document.createElement("div");
        alertBox.textContent = message;
        alertBox.style.position = "fixed";
        alertBox.style.top = "20px";
        alertBox.style.left = "50%";
        alertBox.style.transform = "translateX(-50%)";
        alertBox.style.backgroundColor = "#222";
        alertBox.style.color = "#fff";
        alertBox.style.padding = "15px 25px";
        alertBox.style.borderRadius = "10px";
        alertBox.style.fontWeight = "bold";
        alertBox.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
        alertBox.style.zIndex = "9999";
        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.remove();
        }, 4000); // remove after 4 seconds

        localStorage.removeItem("feedback"); // Clear after showing
    }
});