
        // Mobile Menu Toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const nav = document.querySelector('nav');

        mobileMenu.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Sticky Header on Scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.contact-form');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closePopup');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                popup.style.display = 'flex';
                form.reset();
            } else {
                alert('Submission failed. Please try again.');
            }
        })
        .catch(() => {
            alert('Something went wrong. Please try again.');
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close popup on outside click
    window.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
