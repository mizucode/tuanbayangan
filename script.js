const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
    accordionHeader.addEventListener("click", () => {
        accordionHeader.classList.toggle("active");
        const accordionContent = accordionHeader.nextElementSibling;
        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    });
});
