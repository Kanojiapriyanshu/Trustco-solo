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
    

//for displaying current year
document.getElementById("currentYear").textContent = new Date().getFullYear();


//form functionality
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const inputs = form.querySelectorAll("input, textarea");
    const submitBtn = form.querySelector(".submit-btn");

    // Add focus effect on inputs
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.parentElement.classList.add("focused");
        });

        input.addEventListener("blur", () => {
            if (!input.value.trim()) {
                input.parentElement.classList.remove("focused");
            }
        });
    });

    // Validate checkboxes
    submitBtn.addEventListener("click", (event) => {
        const termsCheckbox = document.getElementById("terms");
        if (!termsCheckbox.checked) {
            alert("Please agree to the Terms & Conditions before submitting.");
            event.preventDefault(); // Prevent form submission
        }
    });

    // Test if labels are associated with inputs
    document.querySelectorAll("label").forEach(label => {
        const forAttribute = label.getAttribute("for");
        if (forAttribute) {
            const associatedInput = document.getElementById(forAttribute);
            if (!associatedInput) {
                console.warn(`Label with 'for="${forAttribute}"' has no associated input.`);
            }
        }
    });
});
