document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        themeToggleBtn.textContent = "Light"; // Text instead of sun
    } else {
        document.body.removeAttribute("data-theme");
        themeToggleBtn.textContent = "Dark"; // Text instead of moon
    }

    // Toggle theme on click
    themeToggleBtn.addEventListener("click", () => {
        if (document.body.hasAttribute("data-theme")) {
            // Switch to Light Mode
            document.body.removeAttribute("data-theme");
            themeToggleBtn.textContent = "Dark";
            localStorage.setItem("theme", "light");
        } else {
            // Switch to Dark Mode
            document.body.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "Light";
            localStorage.setItem("theme", "dark");
        }
    });
});
