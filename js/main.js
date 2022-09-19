const allLinks = document.querySelectorAll(".main-nav-link:link");
console.log(allLinks);

allLinks.forEach((link) => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const href = link.getAttribute("href");

        // Scroll back to top
        if(href === "#"){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        // Scroll to other links
        if(href !== "#" && href.startsWith("#")){
            const sectionTarget = document.querySelector(href);
            sectionTarget.scrollIntoView({behavior: "smooth"});
        }

    });
});