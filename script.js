const input = document.getElementById("search");

const pages = {
    "PAGE 1": "./page1.html",
    "PAGE 2": "./page2.html"
};

input.addEventListener("change", () => {
    const page = pages[input.value];

    if (page) {
        window.location.href = page;
    } else {
        alert("Page not found!");
    }
});

