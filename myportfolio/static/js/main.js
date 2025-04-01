document.addEventListener("DOMContentLoaded", function() {
    // Fade-in animation
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(el => el.classList.add("visible"));
    
    // Typewriter effect for the title
    const title = document.querySelector('header h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        typeWriter();
    }
    
    // Add paper-like effect to main content
    const main = document.querySelector('main');
    if (main) {
        main.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
        main.style.backgroundColor = 'rgba(255,255,255,0.7)';
    }
});


/* home */
document.addEventListener("DOMContentLoaded", function() {
    // Add paper texture effect
    document.body.style.backgroundImage = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"none\" stroke=\"%23e17055\" stroke-width=\"0.5\" opacity=\"0.2\"/></svg>')";
    
    // Add subtle noise effect
    const noise = document.createElement('div');
    noise.style.position = 'fixed';
    noise.style.top = '0';
    noise.style.left = '0';
    noise.style.width = '100%';
    noise.style.height = '100%';
    noise.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABOSURBVGhD7cExAQAwDMCg+zfd2VAXEPmTkZGZkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkQEAe2QAAXjBk3IAAAAASUVORK5CYII=")';
    noise.style.opacity = '0.03';
    noise.style.pointerEvents = 'none';
    noise.style.zIndex = '9999';
    document.body.appendChild(noise);
    
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const decoration = card.querySelector('.card-decoration');
            decoration.style.transform = 'scale(1.2)';
            decoration.style.transition = 'transform 0.3s';
        });
        
        card.addEventListener('mouseleave', () => {
            const decoration = card.querySelector('.card-decoration');
            decoration.style.transform = 'scale(1)';
        });
    });
});