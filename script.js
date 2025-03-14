function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    let started = false;

    function startCounters() {
        if (!started) {
            counters.forEach(counter => {
                const target = +counter.getAttribute("data-target");
                const increment = target / 100;
                let count = 0;

                const updateCounter = () => {
                    count += increment;
                    if (count < target) {
                        counter.innerText = Math.ceil(count);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };
                updateCounter();
            });
            started = true;
        }
    }
//for sstarting the counter
    function onScroll() {
        const section = document.querySelector(".stats-section");
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight * 0.75) {
            startCounters();
            window.removeEventListener("scroll", onScroll);
        }
    }

    window.addEventListener("scroll", onScroll);
});
    