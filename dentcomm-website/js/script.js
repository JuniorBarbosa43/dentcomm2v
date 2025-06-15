/**
 * DENTCOMM - JAVASCRIPT MODERNO E FUNCIONAL
 * Versão: 3.0.0
 * Descrição: Script completo com todas as funcionalidades solicitadas,
 * incluindo tradução, modo claro/escuro, calculadora de ROI, validação de formulário
 * e otimizações de performance.
 */

// INICIALIZAÇÃO GERAL
document.addEventListener('DOMContentLoaded', function() {
    initHeaderScroll();
    initMobileMenu();
    initSmoothScroll();
    initFAQ();
    initScrollReveal();
    initTestimonialSlider();
    initLazyLoading();
    
    // Funcionalidades com dependência de dados
    initLanguageSwitcher(); 
    initThemeToggle();
    initROICalculator();
    initContactForm(); 
    initNewsletterForm();
});

// =================================================================================
// DICIONÁRIO DE TRADUÇÃO COMPLETO (PT/ES)
// =================================================================================
const translations = {
    pt: {
        // NAV & HEADER
        navHome: 'Início',
        navAbout: 'Quem Somos',
        navProducts: 'Produtos',
        navContact: 'Contato',
        scrollDown: 'Role para baixo',

        // FOOTER
        footerTagline: 'Transformando clínicas dentais em referências de mercado através de marketing inteligente e resultados comprovados.',
        footerNav: 'Navegação',
        footerSolutions: 'Soluções',
        footerContact: 'Contato',
        footerRights: 'Todos os direitos reservados.',
        footerPrivacy: 'Política de Privacidade',
        footerTerms: 'Termos de Uso',

        // INDEX.HTML
        heroTitle: 'Transforme sua clínica dental em uma <span class="display-highlight">referência</span> no mercado',
        heroSubtitle: 'Marketing inteligente, automação avançada e estratégias que geram resultados reais. Soluções premium para dentistas da América Latina que querem crescer de forma sustentável.',
        heroBtn1: 'Conheça nossas soluções',
        heroBtn2: 'Calcule seu ROI',
        heroStat1: 'Dentistas atendidos',
        heroStat2: 'Aumento médio de pacientes',
        heroStat3: 'ROI médio dos clientes',
        valuesTitle: 'Por que escolher a <span class="highlight">DentComm</span>?',
        valuesSubtitle: 'Os pilares que nos tornam únicos no marketing dental da América Latina.',
        value1Title: 'Resultados Comprovados',
        value1Desc: 'Mais de 500 dentistas transformaram suas clínicas conosco. ROI médio de 8x em 6 meses.',
        value2Title: 'Automação Inteligente',
        value2Desc: 'Sistemas que trabalham 24/7 para captar, nutrir e converter leads em pacientes reais.',
        value3Title: 'Especialização Dental',
        value3Desc: 'Entendemos as particularidades do mercado odontológico e criamos estratégias específicas.',
        value4Title: 'Suporte Personalizado',
        value4Desc: 'Acompanhamento dedicado com consultores especializados em crescimento de clínicas.',
        productsShowcaseTitle: 'Soluções <span class="highlight">sob medida</span> para cada momento',
        productsShowcaseSubtitle: 'Do dentista que está começando no digital à clínica que busca escalar sua operação.',
        badgePopular: 'Mais Popular',
        badgePremium: 'Premium',
        baseDesc: 'Ideal para dentistas que querem começar no marketing digital com estrutura sólida e resultados rápidos.',
        flowDesc: 'Para clínicas que querem automatizar processos e escalar a captação de pacientes com inteligência.',
        core360Desc: 'Solução completa que integra marketing, vendas e gestão em um ecossistema único de crescimento.',
        fullstackDesc: 'Assumimos 100% da sua operação digital para você focar exclusivamente no que faz de melhor: cuidar dos pacientes.',
        priceFrom: 'A partir de',
        pricePeriod: '/mês',
        priceUponRequest: 'Sob consulta',
        pricePersonalized: 'Personalizado',
        btnLearnMore: 'Saiba mais',
        productsCtaText: 'Não sabe qual solução é ideal para você?',
        productsCtaBtn: 'Fale com um especialista',
        roiTitle: 'Calcule o <span class="highlight">potencial</span> da sua clínica',
        roiSubtitle: 'Descubra quanto você pode faturar investindo em marketing dental profissional.',
        roiInputPatients: 'Pacientes atuais/mês',
        roiInputTicket: 'Ticket médio (R$)',
        roiInputBudget: 'Orçamento marketing (R$)',
        roiInputGoal: 'Meta de crescimento (%)',
        selectOption: 'Selecione',
        roiGoalOption1: '50% - Crescimento moderado',
        roiGoalOption2: '100% - Dobrar pacientes',
        roiGoalOption3: '200% - Triplicar pacientes',
        roiGoalOption4: '300% - Crescimento agressivo',
        roiBtn: 'Calcular Potencial',
        roiResultPatients: 'Novos pacientes/mês',
        roiResultRevenue: 'Faturamento adicional',
        roiResultROI: 'ROI projetado',
        roiResultAnnual: 'Crescimento anual',
        roiDisclaimer: '*Projeção baseada na média dos nossos clientes. Resultados podem variar.',
        roiResultBtn: 'Quero esses resultados',
        testimonialsTitle: 'Histórias de <span class="highlight">sucesso</span> reais',
        testimonialsSubtitle: 'Veja como nossos clientes transformaram suas clínicas com nossas soluções.',
        testimonial1Text: 'Em 8 meses, nossa agenda triplicou e conseguimos abrir uma segunda unidade. A DentComm não só entregou resultados, mas nos ensinou a pensar como empresários do setor odontológico.',
        testimonial1Author: 'Dr. Ricardo Silva',
        testimonial1Clinic: 'Clínica Sorriso Perfeito - São Paulo',
        testimonial1Stat1: '+300% pacientes',
        testimonial1Stat2: 'ROI: 12x',
        testimonial2Text: 'Finalmente entendi como o marketing digital funciona de verdade. Agora tenho controle total sobre minha captação de pacientes e posso prever meu faturamento com precisão.',
        testimonial2Author: 'Dra. Ana Costa',
        testimonial2Clinic: 'Odontologia Integrada - Rio de Janeiro',
        testimonial2Stat1: '+250% conversão',
        testimonial2Stat2: 'ROI: 9x',
        testimonial3Text: 'O ROI foi impressionante: para cada peso investido em marketing, tivemos 8 pesos de retorno. Nunca imaginei que seria possível crescer tanto mantendo a qualidade.',
        testimonial3Author: 'Dr. Miguel Rodriguez',
        testimonial3Clinic: 'Centro Dental Premium - Buenos Aires',
        testimonial3Stat1: '+400% faturamento',
        testimonial3Stat2: 'ROI: 8x',
        newsletterTitle: 'Receba insights <span class="highlight">exclusivos</span>',
        newsletterSubtitle: 'Estratégias, tendências e cases de sucesso do marketing dental direto no seu e-mail.',
        newsletterBtn: 'Quero receber',
        newsletterDisclaimer: 'Sem spam. Apenas conteúdo de valor. Cancele quando quiser.',
        ctaFinalTitle: 'Pronto para transformar sua clínica?',
        ctaFinalSubtitle: 'Agende uma conversa gratuita com nossos especialistas e descubra como podemos acelerar o crescimento da sua clínica dental.',
        ctaFinalBtn1: 'Agendar consulta gratuita',
        ctaFinalBtn2: 'Falar no WhatsApp',
        guarantee1: 'Consulta 100% gratuita',
        guarantee2: 'Sem compromisso',
        guarantee3: 'Estratégia personalizada',

        // CONTATO.HTML
        contactPageTitle: 'Vamos conversar sobre o <span class="highlight">futuro</span> da sua clínica?',
        contactPageSubtitle: 'Agende uma consulta gratuita com nossos especialistas. Vamos analisar sua situação atual e desenhar a estratégia perfeita para seus objetivos.',
        contactFormTitle: 'Solicite uma <span class="highlight">consulta gratuita</span>',
        contactFormSubtitle: 'Preencha o formulário e nossa equipe entrará em contato em até 2 horas úteis.',
        formName: 'Nome completo *',
        formEmail: 'E-mail *',
        formPhone: 'Telefone/WhatsApp *',
        formClinicName: 'Nome da clínica',
        formSpecialty: 'Especialidade principal',
        formRevenue: 'Faturamento mensal aproximado',
        formMessage: 'Conte-nos mais sobre sua clínica e objetivos',
        formMessagePlaceholder: 'Descreva sua situação atual, principais desafios e o que espera alcançar...',
        formBtn: 'Solicitar consulta gratuita',
        formDisclaimer: 'Ao enviar este formulário, você concorda em receber comunicações da DentComm. Seus dados estão protegidos conforme nossa política de privacidade.',
        contactInfoTitle: 'Informações de contato',
        contactInfoEmail: 'E-mail',
        contactInfoPhone: 'Telefone / WhatsApp',
        contactInfoAddress: 'Endereço',
        contactInfoHours: 'Horário de atendimento',
        contactCommitments: 'Nossos compromissos',
        commitment1: 'Resposta em até 2 horas úteis',
        commitment2: 'Consulta 100% gratuita',
        commitment3: 'Análise personalizada da sua clínica',
        commitment4: 'Sem compromisso ou pressão de vendas',
        mapTitle: 'Nossa <span class="highlight">localização</span>',

    },
    es: {
        // NAV & HEADER
        navHome: 'Inicio',
        navAbout: 'Quiénes Somos',
        navProducts: 'Productos',
        navContact: 'Contacto',
        scrollDown: 'Desliza hacia abajo',

        // FOOTER
        footerTagline: 'Transformando clínicas dentales en referentes del mercado a través de marketing inteligente y resultados comprobados.',
        footerNav: 'Navegación',
        footerSolutions: 'Soluciones',
        footerContact: 'Contacto',
        footerRights: 'Todos los derechos reservados.',
        footerPrivacy: 'Política de Privacidad',
        footerTerms: 'Términos de Uso',

        // INDEX.HTML
        heroTitle: 'Transforma tu clínica dental en un <span class="display-highlight">referente</span> en el mercado',
        heroSubtitle: 'Marketing inteligente, automatización avanzada y estrategias que generan resultados reales. Soluciones premium para dentistas de América Latina que desean crecer de forma sostenible.',
        heroBtn1: 'Conoce nuestras soluciones',
        heroBtn2: 'Calcula tu ROI',
        heroStat1: 'Dentistas atendidos',
        heroStat2: 'Aumento promedio de pacientes',
        heroStat3: 'ROI promedio de los clientes',
        valuesTitle: '¿Por qué elegir a <span class="highlight">DentComm</span>?',
        valuesSubtitle: 'Los pilares que nos hacen únicos en el marketing dental de América Latina.',
        value1Title: 'Resultados Comprobados',
        value1Desc: 'Más de 500 dentistas han transformado sus clínicas con nosotros. ROI promedio de 8x en 6 meses.',
        value2Title: 'Automatización Inteligente',
        value2Desc: 'Sistemas que trabajan 24/7 para captar, nutrir y convertir leads en pacientes reales.',
        value3Title: 'Especialización Dental',
        value3Desc: 'Entendemos las particularidades del mercado odontológico y creamos estrategias específicas.',
        value4Title: 'Soporte Personalizado',
        value4Desc: 'Acompañamiento dedicado con consultores especializados en el crecimiento de clínicas.',
        productsShowcaseTitle: 'Soluciones <span class="highlight">a medida</span> para cada momento',
        productsShowcaseSubtitle: 'Desde el dentista que está comenzando en el mundo digital hasta la clínica que busca escalar su operación.',
        badgePopular: 'Más Popular',
        badgePremium: 'Premium',
        baseDesc: 'Ideal para dentistas que quieren comenzar en el marketing digital con una estructura sólida y resultados rápidos.',
        flowDesc: 'Para clínicas que quieren automatizar procesos y escalar la captación de pacientes con inteligencia.',
        core360Desc: 'Solución completa que integra marketing, ventas y gestión en un ecosistema único de crecimiento.',
        fullstackDesc: 'Asumimos el 100% de tu operación digital para que te enfoques exclusivamente en lo que haces mejor: cuidar de los pacientes.',
        priceFrom: 'Desde',
        pricePeriod: '/mes',
        priceUponRequest: 'Bajo consulta',
        pricePersonalized: 'Personalizado',
        btnLearnMore: 'Saber más',
        productsCtaText: '¿No sabes qué solución es ideal para ti?',
        productsCtaBtn: 'Habla con un especialista',
        roiTitle: 'Calcula el <span class="highlight">potencial</span> de tu clínica',
        roiSubtitle: 'Descubre cuánto puedes facturar invirtiendo en marketing dental profesional.',
        roiInputPatients: 'Pacientes actuales/mes',
        roiInputTicket: 'Ticket promedio ($)',
        roiInputBudget: 'Presupuesto marketing ($)',
        roiInputGoal: 'Meta de crecimiento (%)',
        selectOption: 'Seleccione',
        roiGoalOption1: '50% - Crecimiento moderado',
        roiGoalOption2: '100% - Duplicar pacientes',
        roiGoalOption3: '200% - Triplicar pacientes',
        roiGoalOption4: '300% - Crecimiento agresivo',
        roiBtn: 'Calcular Potencial',
        roiResultPatients: 'Nuevos pacientes/mes',
        roiResultRevenue: 'Facturación adicional',
        roiResultROI: 'ROI proyectado',
        roiResultAnnual: 'Crecimiento anual',
        roiDisclaimer: '*Proyección basada en el promedio de nuestros clientes. Los resultados pueden variar.',
        roiResultBtn: 'Quiero estos resultados',
        testimonialsTitle: 'Historias de <span class="highlight">éxito</span> reales',
        testimonialsSubtitle: 'Vea cómo nuestros clientes transformaron sus clínicas con nuestras soluciones.',
        testimonial1Text: 'En 8 meses, nuestra agenda se triplicó y pudimos abrir una segunda unidad. DentComm no solo entregó resultados, sino que nos enseñó a pensar como empresarios del sector odontológico.',
        testimonial1Author: 'Dr. Ricardo Silva',
        testimonial1Clinic: 'Clínica Sonrisa Perfecta - São Paulo',
        testimonial1Stat1: '+300% pacientes',
        testimonial1Stat2: 'ROI: 12x',
        testimonial2Text: 'Finalmente entendí cómo funciona realmente el marketing digital. Ahora tengo control total sobre mi captación de pacientes y puedo prever mi facturación con precisión.',
        testimonial2Author: 'Dra. Ana Costa',
        testimonial2Clinic: 'Odontología Integrada - Río de Janeiro',
        testimonial2Stat1: '+250% conversión',
        testimonial2Stat2: 'ROI: 9x',
        testimonial3Text: 'El ROI fue impresionante: por cada peso invertido en marketing, obtuvimos 8 pesos de retorno. Nunca imaginé que sería posible crecer tanto manteniendo la calidad.',
        testimonial3Author: 'Dr. Miguel Rodriguez',
        testimonial3Clinic: 'Centro Dental Premium - Buenos Aires',
        testimonial3Stat1: '+400% facturación',
        testimonial3Stat2: 'ROI: 8x',
        newsletterTitle: 'Recibe insights <span class="highlight">exclusivos</span>',
        newsletterSubtitle: 'Estrategias, tendencias y casos de éxito del marketing dental directamente en tu correo electrónico.',
        newsletterBtn: 'Quiero recibir',
        newsletterDisclaimer: 'Sin spam. Solo contenido de valor. Cancela cuando quieras.',
        ctaFinalTitle: '¿Listo para transformar tu clínica?',
        ctaFinalSubtitle: 'Agenda una conversación gratuita con nuestros especialistas y descubre cómo podemos acelerar el crecimiento de tu clínica dental.',
        ctaFinalBtn1: 'Agendar consulta gratuita',
        ctaFinalBtn2: 'Hablar por WhatsApp',
        guarantee1: 'Consulta 100% gratuita',
        guarantee2: 'Sin compromiso',
        guarantee3: 'Estrategia personalizada',
        
        // CONTATO.HTML
        contactPageTitle: '¿Hablamos sobre el <span class="highlight">futuro</span> de tu clínica?',
        contactPageSubtitle: 'Agenda una consulta gratuita con nuestros especialistas. Analizaremos tu situación actual y diseñaremos la estrategia perfecta para tus objetivos.',
        contactFormTitle: 'Solicita una <span class="highlight">consulta gratuita</span>',
        contactFormSubtitle: 'Completa el formulario y nuestro equipo se pondrá en contacto en hasta 2 horas hábiles.',
        formName: 'Nombre completo *',
        formEmail: 'E-mail *',
        formPhone: 'Teléfono/WhatsApp *',
        formClinicName: 'Nombre de la clínica',
        formSpecialty: 'Especialidad principal',
        formRevenue: 'Facturación mensual aproximada',
        formMessage: 'Cuéntanos más sobre tu clínica y objetivos',
        formMessagePlaceholder: 'Describe tu situación actual, principales desafíos y lo que esperas lograr...',
        formBtn: 'Solicitar consulta gratuita',
        formDisclaimer: 'Al enviar este formulario, aceptas recibir comunicaciones de DentComm. Tus datos están protegidos según nuestra política de privacidad.',
        contactInfoTitle: 'Información de contacto',
        contactInfoEmail: 'E-mail',
        contactInfoPhone: 'Teléfono / WhatsApp',
        contactInfoAddress: 'Dirección',
        contactInfoHours: 'Horario de atención',
        contactCommitments: 'Nuestros compromisos',
        commitment1: 'Respuesta en hasta 2 horas hábiles',
        commitment2: 'Consulta 100% gratuita',
        commitment3: 'Análisis personalizado de tu clínica',
        commitment4: 'Sin compromiso ni presión de ventas',
        mapTitle: 'Nuestra <span class="highlight">ubicación</span>',
    }
};

/**
 * Aplica as traduções aos elementos da página.
 * @param {string} lang - O idioma a ser aplicado ('pt' ou 'es').
 */
function setLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            const translation = translations[lang][key];
            
            // Lida com placeholders, títulos e conteúdo de texto
            if (el.hasAttribute('placeholder')) {
                el.placeholder = translation;
            } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
                // Para outros atributos de formulário, se necessário no futuro
            } else {
                el.innerHTML = translation;
            }
        }
    });

    // Tradução específica para a calculadora de ROI (formato de moeda)
    const currencySymbol = lang === 'es' ? '$' : 'R$';
    const roiLabels = document.querySelectorAll('[data-key="roiInputTicket"], [data-key="roiInputBudget"]');
    roiLabels.forEach(label => {
        label.textContent = label.textContent.replace(/(R?\$)/, currencySymbol);
    });
}


/**
 * Inicializa o seletor de idiomas.
 */
function initLanguageSwitcher() {
    const langPtBtn = document.getElementById('lang-pt');
    const langEsBtn = document.getElementById('lang-es');
    if (!langPtBtn || !langEsBtn) return;

    const updateButtons = (selectedLang) => {
        if (selectedLang === 'es') {
            langEsBtn.classList.add('active');
            langPtBtn.classList.remove('active');
        } else {
            langPtBtn.classList.add('active');
            langEsBtn.classList.remove('active');
        }
    };

    langPtBtn.addEventListener('click', () => {
        setLanguage('pt');
        localStorage.setItem('language', 'pt');
        updateButtons('pt');
    });

    langEsBtn.addEventListener('click', () => {
        setLanguage('es');
        localStorage.setItem('language', 'es');
        updateButtons('es');
    });

    const savedLang = localStorage.getItem('language') || 'pt';
    setLanguage(savedLang);
    updateButtons(savedLang);
}

/**
 * Inicializa o toggle de tema claro/escuro.
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
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

/**
 * Inicializa a validação do formulário de contato.
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');

    const validateField = (input, validationFn, errorMessage) => {
        const errorSpan = input.parentElement.querySelector('.error-message');
        if (!input || !errorSpan) return true;

        if (validationFn(input.value)) {
            input.classList.remove('error');
            errorSpan.textContent = '';
            return true;
        } else {
            input.classList.add('error');
            errorSpan.textContent = errorMessage;
            return false;
        }
    };

    const validateName = (name) => name.trim() !== '';
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
    const validatePhone = (phone) => /^\+?[0-9\s-()]{10,15}$/.test(phone.replace(/\D/g, ''));

    const errorMessages = {
        pt: {
            name: 'O nome é obrigatório.',
            email: 'Por favor, insira um e-mail válido.',
            phone: 'Insira um telefone válido com DDD.'
        },
        es: {
            name: 'El nombre es obligatorio.',
            email: 'Por favor, ingrese un e-mail válido.',
            phone: 'Ingrese un teléfono válido con código de área.'
        }
    };

    const getErrorMessage = (field) => {
        const currentLang = localStorage.getItem('language') || 'pt';
        return errorMessages[currentLang][field];
    }
    
    nameInput.addEventListener('input', () => validateField(nameInput, validateName, getErrorMessage('name')));
    emailInput.addEventListener('input', () => validateField(emailInput, validateEmail, getErrorMessage('email')));
    phoneInput.addEventListener('input', () => validateField(phoneInput, validatePhone, getErrorMessage('phone')));

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isNameValid = validateField(nameInput, validateName, getErrorMessage('name'));
        const isEmailValid = validateField(emailInput, validateEmail, getErrorMessage('email'));
        const isPhoneValid = validateField(phoneInput, validatePhone, getErrorMessage('phone'));

        if (isNameValid && isEmailValid && isPhoneValid) {
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            setTimeout(() => {
                formStatus.innerHTML = `<div class="form-status success">Mensagem enviada com sucesso!</div>`;
                contactForm.reset();
                submitBtn.textContent = translations[localStorage.getItem('language') || 'pt'].formBtn;
                submitBtn.disabled = false;
                setTimeout(() => formStatus.innerHTML = '', 3000);
            }, 1500);
        } else {
            formStatus.innerHTML = `<div class="form-status error">Por favor, corrija os campos destacados.</div>`;
            setTimeout(() => formStatus.innerHTML = '', 3000);
        }
    });
}

/**
 * Inicializa a calculadora de ROI.
 */
function initROICalculator() {
    const roiForm = document.getElementById('roi-form');
    if (!roiForm) return;

    roiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateROI();
    });
}

/**
 * Calcula e exibe o ROI.
 */
function calculateROI() {
    const monthlyPatients = parseInt(document.getElementById('monthly-patients').value) || 0;
    const avgTreatment = parseInt(document.getElementById('avg-treatment').value) || 0;
    const marketingBudget = parseInt(document.getElementById('marketing-budget').value) || 0;
    const growthGoal = parseInt(document.getElementById('growth-goal').value) || 0;
    const resultDiv = document.getElementById('roi-result');

    if (monthlyPatients > 0 && avgTreatment > 0 && marketingBudget > 0 && growthGoal > 0) {
        const newPatients = Math.round((monthlyPatients * growthGoal) / 100);
        const additionalRevenue = newPatients * avgTreatment;
        const roiPercentage = marketingBudget > 0 ? Math.round(((additionalRevenue - marketingBudget) / marketingBudget) * 100) : 0;
        const annualGrowth = additionalRevenue * 12;

        const currentLang = localStorage.getItem('language') || 'pt';
        const currency = currentLang === 'es' ? 'USD' : 'BRL';
        const locale = currentLang === 'es' ? 'es-AR' : 'pt-BR';
        const currencySymbol = currentLang === 'es' ? '$' : 'R$';

        document.getElementById('new-patients').textContent = `+${newPatients}`;
        document.getElementById('additional-revenue').textContent = `${currencySymbol} ${additionalRevenue.toLocaleString(locale)}`;
        document.getElementById('roi-percentage').textContent = `${roiPercentage}%`;
        document.getElementById('annual-growth').textContent = `${currencySymbol} ${annualGrowth.toLocaleString(locale)}`;

        resultDiv.style.display = 'block';
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        const alertMsg = (localStorage.getItem('language') || 'pt') === 'es' 
            ? 'Por favor, complete todos los campos con valores válidos.'
            : 'Por favor, preencha todos os campos com valores válidos.';
        alert(alertMsg);
    }
}


/**
 * Inicializa o carregamento lazy de imagens.
 */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback para navegadores sem IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

/**
 * Controla o efeito de 'scrolled' no header.
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

/**
 * Inicializa o menu mobile.
 */
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav__list');
    if (!navToggle || !navList) return;

    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navToggle.classList.toggle('active');
        navList.classList.toggle('active');
    });
}

/**
 * Inicializa o scroll suave para âncoras.
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/**
 * Inicializa a funcionalidade de FAQ (acordeão).
 */
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // Fecha todos os outros itens abertos
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.style.maxHeight = '0';
                }
            });

            // Abre ou fecha o item clicado
            question.setAttribute('aria-expanded', String(!isExpanded));
            if (!isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
}

/**
 * Inicializa o slider de depoimentos.
 */
function initTestimonialSlider() {
    const slider = document.querySelector('.testimonials__slider');
    if (!slider) return;

    const navBtns = slider.querySelectorAll('.testimonial-nav-btn');
    const testimonials = slider.querySelectorAll('.testimonial-card');
    if (navBtns.length === 0 || testimonials.length === 0) return;

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        testimonials.forEach((t, i) => {
            t.style.display = 'none';
            t.classList.remove('active');
        });
        navBtns.forEach(b => b.classList.remove('active'));

        testimonials[index].style.display = 'block';
        testimonials[index].classList.add('active');
        navBtns[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % testimonials.length;
        showSlide(nextIndex);
    }
    
    function startInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 7000); // Aumentado o tempo
    }

    navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            showSlide(index);
            startInterval();
        });
    });

    showSlide(0); // Mostra o primeiro slide inicialmente
    startInterval();
}


/**
 * Inicializa o formulário da newsletter.
 */
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (!newsletterForm) return;
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const alertMsg = (localStorage.getItem('language') || 'pt') === 'es' 
            ? '¡Gracias por suscribirte!'
            : 'Obrigado por se inscrever!';
        alert(alertMsg);
        newsletterForm.reset();
    });
}

/**
 * Inicializa as animações de revelação ao rolar a página.
 */
function initScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deixa de observar após animar
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}