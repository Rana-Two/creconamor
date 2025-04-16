// Animación suave del scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto de aparición en las tarjetas al hacer scroll
const cards = document.querySelectorAll('.card');
const levelCards = document.querySelectorAll('.level-card');

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar efecto de aparición a las tarjetas
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

levelCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Efecto de confeti al hacer clic en el botón de "Comienza tu aventura"
const button = document.querySelector('.bounce');
button.addEventListener('click', () => {
    createConfetti();
});

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Estilos aleatorios para cada confeti
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Color aleatorio
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(confetti);
        
        // Eliminar el confeti después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Agregar estilos CSS para el confeti
const style = document.createElement('style');
style.textContent = `
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        background-color: #ff6b6b;
        pointer-events: none;
        animation: confettiFall linear forwards;
    }

    @keyframes confettiFall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Animación del título
const rainbowText = document.querySelector('.rainbow-text');
rainbowText.addEventListener('mouseover', () => {
    rainbowText.style.transform = 'scale(1.1)';
    rainbowText.style.transition = 'transform 0.3s ease';
});

rainbowText.addEventListener('mouseout', () => {
    rainbowText.style.transform = 'scale(1)';
});

// Formulario de contacto
const form = document.querySelector('.contact-form form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Animación de envío
    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = '¡Mensaje enviado! 🎉';
    button.style.backgroundColor = '#4CAF50';
    
    // Resetear el formulario y el botón después de un tiempo
    setTimeout(() => {
        form.reset();
        button.textContent = originalText;
        button.style.backgroundColor = '';
    }, 2000);
}); 