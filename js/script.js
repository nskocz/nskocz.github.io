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

    // Add header show/hide on scroll functionality
    let lastScrollTop = 0;
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Downscroll
            header.classList.add('hidden');
        } else {
            // Upscroll
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
});
