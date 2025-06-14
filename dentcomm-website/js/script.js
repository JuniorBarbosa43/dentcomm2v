// DENTCOMM - JAVASCRIPT MODERNO
// Funcionalidades interativas e animações

document.addEventListener('DOMContentLoaded', function() {
    // Inicialização
    initScrollReveal();
    initHeaderScroll();
    initMobileMenu();
    initThemeToggle();
    initLanguageSwitcher();
    initROICalculator();
    initTestimonialSlider();
    initNewsletterForm();
    initContactForm();
    initFAQ();
    initSmoothScroll();
});

// 1. SCROLL REVEAL ANIMATIONS
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// 2. HEADER SCROLL EFFECT
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// 3. MOBILE MENU
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav__list');
    
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navList.classList.toggle('active');
        });

        // Fechar menu ao clicar em link
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navList.classList.remove('active');
            });
        });
    }
}

// 4. THEME TOGGLE
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        // Verificar tema salvo
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        if (savedTheme === 'dark') {
            themeToggle.classList.add('active');
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.classList.toggle('active');
        });
    }
}

// 5. LANGUAGE SWITCHER
function initLanguageSwitcher() {
    const langPt = document.getElementById('lang-pt');
    const langEs = document.getElementById('lang-es');
    
    if (langPt && langEs) {
        langPt.addEventListener('click', () => {
            langPt.classList.add('active');
            langEs.classList.remove('active');
            // Aqui você pode implementar a troca de idioma
        });

        langEs.addEventListener('click', () => {
            langEs.classList.add('active');
            langPt.classList.remove('active');
            // Aqui você pode implementar a troca de idioma
        });
    }
}

// 6. ROI CALCULATOR
function initROICalculator() {
    const calculateBtn = document.getElementById('calculate-roi');
    const resultDiv = document.getElementById('roi-result');
    
    if (calculateBtn && resultDiv) {
        calculateBtn.addEventListener('click', calculateROI);
    }
}

function calculateROI() {
    const monthlyPatients = parseInt(document.getElementById('monthly-patients').value) || 0;
    const avgTreatment = parseInt(document.getElementById('avg-treatment').value) || 0;
    const marketingBudget = parseInt(document.getElementById('marketing-budget').value) || 0;
    const growthGoal = parseInt(document.getElementById('growth-goal').value) || 0;

    if (monthlyPatients && avgTreatment && marketingBudget && growthGoal) {
        // Cálculos baseados em médias do mercado
        const currentRevenue = monthlyPatients * avgTreatment;
        const newPatients = Math.round((monthlyPatients * growthGoal) / 100);
        const additionalRevenue = newPatients * avgTreatment;
        const roiPercentage = Math.round((additionalRevenue / marketingBudget) * 100);
        const annualGrowth = additionalRevenue * 12;

        // Atualizar resultados
        document.getElementById('new-patients').textContent = newPatients;
        document.getElementById('additional-revenue').textContent = `R$ ${additionalRevenue.toLocaleString()}`;
        document.getElementById('roi-percentage').textContent = `${roiPercentage}%`;
        document.getElementById('annual-growth').textContent = `R$ ${annualGrowth.toLocaleString()}`;

        // Mostrar resultados
        document.getElementById('roi-result').style.display = 'block';
        
        // Scroll suave para os resultados
        document.getElementById('roi-result').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    } else {
        alert('Por favor, preencha todos os campos para calcular o ROI.');
    }
}

// 7. TESTIMONIAL SLIDER
function initTestimonialSlider() {
    const navBtns = document.querySelectorAll('.testimonial-nav-btn');
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    if (navBtns.length && testimonials.length) {
        navBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                // Remover active de todos
                navBtns.forEach(b => b.classList.remove('active'));
                testimonials.forEach(t => {
                    t.style.display = 'none';
                    t.classList.remove('active');
                });
                
                // Ativar selecionado
                btn.classList.add('active');
                testimonials[index].style.display = 'block';
                testimonials[index].classList.add('active');
            });
        });

        // Auto-play do slider
        let currentSlide = 0;
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            navBtns[currentSlide].click();
        }, 5000);
    }
}

// 8. NEWSLETTER FORM
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            if (email) {
                // Simular envio
                showNotification('E-mail cadastrado com sucesso!', 'success');
                newsletterForm.reset();
            }
        });
    }
}

// 9. CONTACT FORM
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Mostrar loading
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simular envio (aqui você integraria com seu backend)
            setTimeout(() => {
                formStatus.innerHTML = '<div class="form-status success">Mensagem enviada com sucesso! Entraremos em contato em breve.</div>';
                contactForm.reset();
                submitBtn.textContent = 'Solicitar consulta gratuita';
                submitBtn.disabled = false;
                
                // Scroll para o status
                formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 2000);
        });
    }
}

// 10. FAQ ACCORDION
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            const answer = question.nextElementSibling;
            
            // Fechar todas as outras
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.style.maxHeight = '0';
                }
            });
            
            // Toggle atual
            question.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
}

// 11. SMOOTH SCROLL
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 12. UTILITY FUNCTIONS
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Estilos inline para a notificação
    Object.assign(notification.style, {
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        padding: '1rem 2rem',
        borderRadius: '0.75rem',
        color: 'white',
        fontWeight: '600',
        zIndex: '9999',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    if (type === 'success') {
        notification.style.background = '#10B981';
    } else if (type === 'error') {
        notification.style.background = '#EF4444';
    } else {
        notification.style.background = '#3B82F6';
    }
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 13. FORM VALIDATION
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// 14. LOADING STATES
function showLoading(element) {
    element.classList.add('loading');
    element.disabled = true;
}

function hideLoading(element) {
    element.classList.remove('loading');
    element.disabled = false;
}

// 15. ANALYTICS TRACKING (Google Analytics, Facebook Pixel, etc.)
function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, parameters);
    }
    
    console.log('Event tracked:', eventName, parameters);
}

// Eventos de tracking
document.addEventListener('DOMContentLoaded', function() {
    // Track page view
    trackEvent('page_view');
    
    // Track button clicks
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const buttonText = e.target.textContent.trim();
            trackEvent('button_click', {
                button_text: buttonText,
                page_location: window.location.href
            });
        });
    });
    
    // Track form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            const formId = e.target.id || 'unknown_form';
            trackEvent('form_submit', {
                form_id: formId,
                page_location: window.location.href
            });
        });
    });
});

// 16. PERFORMANCE OPTIMIZATIONS
// Lazy loading para imagens
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Preload critical resources
function preloadCriticalResources() {
    const criticalResources = [
        '/assets/images/logo.svg',
        '/assets/images/hero-background.jpg'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('.svg') ? 'image' : 'image';
        document.head.appendChild(link);
    });
}

// Service Worker para cache
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

