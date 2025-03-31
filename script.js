
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
