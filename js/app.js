const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navItems.forEach(btn =>
            btn.classList.remove("active")
        );

        item.classList.add("active");

        console.log(
            `${item.dataset.page} page clicked`
        );

    });

});