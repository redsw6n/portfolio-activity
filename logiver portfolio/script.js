document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = document.querySelector('nav').offsetHeight; 
            const spacing = 10; 
            const elementPosition = targetElement.offsetTop - navbarHeight - spacing; 

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        }
    });
});

document.getElementById('scrollDown').addEventListener('click', function() {
    const targetElement = document.getElementById('about');
    if (targetElement) {
        const navbarHeight = document.querySelector('nav').offsetHeight; 
        const spacing = 10; 
        const elementPosition = targetElement.offsetTop - navbarHeight - spacing; 

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
        });
    }
});
