document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initProjectDetails();
});

function initTheme() {
    const html = document.documentElement;
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;

    const saved = localStorage.getItem("theme");
    if (saved) html.setAttribute("data-theme", saved);

    btn.textContent = html.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";

    btn.addEventListener("click", () => {
        const current = html.getAttribute("data-theme") || "light";
        const next = current === "light" ? "dark" : "light";
        html.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        btn.textContent = next === "dark" ? "☀️" : "🌙";
    });
}

function initProjectDetails() {
    document.querySelectorAll(".toggle-details").forEach(btn => {
        btn.addEventListener("click", () => {
            const details = btn.nextElementSibling;
            const open = details.classList.contains("show");
            details.classList.toggle("show", !open);
            btn.textContent = open ? "Details" : "Hide";
        });
    });
}
