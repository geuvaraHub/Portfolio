const themeToggleBtn = document.getElementById("theme-toggle");
    

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    themeToggleBtn.textContent = "Light"; 
} else {
    document.body.removeAttribute("data-theme");
    themeToggleBtn.textContent = "Dark"; 
}


themeToggleBtn.addEventListener("click", () => {
    if (document.body.hasAttribute("data-theme")) {
        document.body.removeAttribute("data-theme");
        themeToggleBtn.textContent = "Dark";
        localStorage.setItem("theme", "light");
    } else {
        document.body.setAttribute("data-theme", "dark");
        themeToggleBtn.textContent = "Light";
        localStorage.setItem("theme", "dark");
    }
});
