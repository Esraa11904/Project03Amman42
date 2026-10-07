const mainTitle = document.getElementById("main-title");
const description = document.querySelector(".description");
const card = document.getElementById("card");
const button = document.querySelector("#btn-change");

button.addEventListener("click", function () {
    mainTitle.textContent = "Updated DOM Title!";
    description.textContent = "The content has been modified successfully using textContent.";

    card.style.borderColor = "#2e7d32";

    card.classList.add("active");
});