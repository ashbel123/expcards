const panels = document.querySelectorAll(".panel");
console.log("hey45");

panels.forEach((panel) => {
    console.log("heyasodifn");
    panel.addEventListener("click", () => {
        removeActiveClasses();
        console.log("sanths");
        panel.classList.add("active");
    });
});

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        console.log("okk");
        panel.classList.remove("active");
    });
};

