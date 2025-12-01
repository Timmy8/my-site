document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    const searchInput = document.getElementById("serviceSearch");
    if (searchInput) {
        const sections = document.querySelectorAll(".js-service-list");
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.trim().toLowerCase();
            sections.forEach(section => {
                const items = section.querySelectorAll(".service-item");
                items.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    const tags = item.getAttribute("data-tags") || "";
                    const match = !query || text.includes(query) || tags.toLowerCase().includes(query);
                    item.style.display = match ? "" : "none";
                });
            });
        });
    }
});
