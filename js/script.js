document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.full-page');
    let currentSection = 0;

    const scrollSection = (index) => {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSection = index;
    };

    const handleScroll = (event) => {
        if (event.deltaY > 0 && currentSection < sections.length - 1) {
            scrollSection(currentSection + 1);
        } else if (event.deltaY < 0 && currentSection > 0) {
            scrollSection(currentSection - 1);
        }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown' && currentSection < sections.length - 1) {
            scrollSection(currentSection + 1);
        } else if (event.key === 'ArrowUp' && currentSection > 0) {
            scrollSection(currentSection - 1);
        }
    });

    let lastScrollTop = 0;
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    const adjustHeaderForMobile = () => {
        const headerLinks = document.querySelector('.header-links');
        const buttons = document.querySelectorAll('.header-links a.button');
        const socialIcons = document.querySelectorAll('.header-links a.social-icon');

        if (window.innerWidth <= 768) {
            header.style.position = 'relative';
            header.style.padding = '0.5rem 1rem';
            headerLinks.style.flexDirection = 'column';
            headerLinks.style.padding = '0.5rem';
            buttons.forEach(button => {
                button.style.width = '90%';
                button.style.margin = '0.5rem 0';
            });
            socialIcons.forEach(icon => {
                icon.style.margin = '0.5rem 0';
            });
        } else {
            header.style.position = 'fixed';
            header.style.padding = '1rem 2rem';
            headerLinks.style.flexDirection = 'row';
            headerLinks.style.padding = '0';
            buttons.forEach(button => {
                button.style.width = '';
                button.style.margin = '0.5rem';
            });
            socialIcons.forEach(icon => {
                icon.style.margin = '';
            });
        }
    };

    adjustHeaderForMobile();
    window.addEventListener('resize', adjustHeaderForMobile);
});
