// Menu mobile toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Fechar menu ao clicar em um link (mobile)
const allNavLinkItems = document.querySelectorAll('.nav-links a');
allNavLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Scroll reveal simples - elementos com classe .reveal
const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealThreshold = 100;
    
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - revealThreshold) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);

// Formulário de contato com feedback (não envia de fato, apenas simula)
const formContato = document.getElementById('formContato');
const feedbackDiv = document.getElementById('formFeedback');

if (formContato) {
    formContato.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('nomeContato').value.trim();
        const email = document.getElementById('emailContato').value.trim();
        const mensagem = document.getElementById('mensagemContato').value.trim();
        
        if (nome === '' || email === '' || mensagem === '') {
            feedbackDiv.innerHTML = '❌ Por favor, preencha todos os campos.';
            feedbackDiv.style.color = '#f87171';
            setTimeout(() => { feedbackDiv.innerHTML = ''; }, 3000);
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            feedbackDiv.innerHTML = '📧 Por favor, insira um e-mail válido.';
            feedbackDiv.style.color = '#f87171';
            setTimeout(() => { feedbackDiv.innerHTML = ''; }, 3000);
            return;
        }
        
        feedbackDiv.innerHTML = '✨ Mensagem enviada com sucesso! Em breve retornarei o contato. ✨';
        feedbackDiv.style.color = '#4ade80';
        formContato.reset();
        setTimeout(() => { feedbackDiv.innerHTML = ''; }, 4000);
    });
}

// Melhorar acessibilidade no header: ao rolar, pequena sombra extra
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 20) {
        header.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Tratamento para imagens quebradas
document.querySelectorAll('.thumb img').forEach(img => {
    img.addEventListener('error', function() {
        if (!this.dataset.fallbackSet) {
            this.dataset.fallbackSet = 'true';
            const fallbackText = this.alt || 'Projeto';
            this.src = `https://placehold.co/600x400/1e293b/38bdf8?text=${encodeURIComponent(fallbackText)}`;
        }
    });
});

// Ajuste de foto de perfil fallback
const perfilImg = document.querySelector('.foto-perfil');
if (perfilImg && perfilImg.complete && perfilImg.naturalWidth === 0) {
    perfilImg.src = 'https://placehold.co/400x400/0f172a/38bdf8?text=Edinalva+Alves';
}

// Suave scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#" || targetId === "") return;
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
            e.preventDefault();
            targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Ajuste responsivo ao redimensionar janela
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
});

// Animação inicial atrasada para hero
document.querySelector('.hero').classList.add('fade-in');