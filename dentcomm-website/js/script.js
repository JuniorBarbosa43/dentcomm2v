/**
 * DENTCOMM - JAVASCRIPT MODERNO
 * Versão: 2.1.0 (Dicionário de Tradução Completo)
 * Descrição: Script completo com todas as funcionalidades e traduções implementadas.
 */

// INICIALIZAÇÃO GERAL
document.addEventListener('DOMContentLoaded', function() {
    initHeaderScroll();
    initMobileMenu();
    initSmoothScroll();
    initFAQ();
    initScrollReveal();
    initLanguageSwitcher(); 
    initThemeToggle();
    initROICalculator();
    initContactForm(); 
    initNewsletterForm();
    initLazyLoading();
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
        productsCtaText: 'Não sabe qual solução é ideal para você?',
        productsCtaBtn: 'Fale com um especialista',
        roiTitle: 'Calcule o <span class="highlight">potencial</span> da sua clínica',
        roiSubtitle: 'Descubra quanto você pode faturar investindo em marketing dental profissional.',
        roiInputPatients: 'Pacientes atuais/mês',
        roiInputTicket: 'Ticket médio (R$)',
        roiInputBudget: 'Orçamento marketing (R$)',
        roiInputGoal: 'Meta de crescimento (%)',
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

        // QUEM-SOMOS.HTML
        aboutTitle: 'Marketing com <span class="highlight">propósito.</span><br>Crescimento com <span class="highlight">consciência.</span>',
        aboutIntroTitle: 'Acreditamos que todo dentista pode ser mais que um profissional da saúde. <span class="text-highlight">Pode ser uma marca. Uma referência. Um líder.</span>',
        aboutIntroP1: 'Mas para isso, precisa de mais do que marketing bonito: precisa de estratégia, clareza e retorno.  Somos uma agência de marketing e automação full service especializada em dentistas da América Latina.  Nascemos para transformar a frustração de muitos profissionais em progresso real.',
        aboutIntroP2: 'Na DentComm, não prometemos mágica. <strong data-key="aboutIntroP2Strong">Prometemos estrutura. Performance com posicionamento.</strong>  Ajudamos dentistas a crescerem com inteligência, respeito à ciência e foco em resultado.',
        aboutResult: 'Mais do que marketing. <span class="display-highlight">Resultado!</span>',
        aboutCureTitle: 'Quando o marketing é bem-feito, ele <span class="text-highlight">cura</span> também:',
        aboutCureText: 'Cura a <strong class="highlight">insegurança</strong> de não saber por onde começar.<br>Cura a <strong class="highlight">estagnação</strong> de uma agenda que não cresce.<br>Cura o <strong class="highlight">medo de crescer</strong> de forma desorganizada.',
        aboutCtaTitle: 'Estamos prontos para transformar sua jornada. <span class="highlight">Vamos juntos?</span>',
        aboutCtaBtn: 'Conheça Nossas Soluções',

        // PRODUTOS.HTML
        productsPageTitle: 'Soluções <span class="highlight">inteligentes</span> para cada fase da sua clínica',
        productsPageSubtitle: 'Do dentista que está começando no digital à clínica que busca escalar sua operação. Temos o plano perfeito para o seu momento atual.',
        compareTitle: 'Compare nossas <span class="highlight">soluções</span>',
        compareSubtitle: 'Encontre a solução ideal para o seu perfil e objetivos.',
        featureColumnHeader: 'Recursos',
        gridTitle: 'Conheça cada <span class="highlight">solução</span> em detalhes',
        faqTitle: 'Perguntas <span class="highlight">frequentes</span>',
        faqSubtitle: 'Tire suas dúvidas sobre nossas soluções de marketing dental.',
        
        // CONTATO.HTML
        contactPageTitle: 'Vamos conversar sobre o <span class="highlight">futuro</span> da sua clínica?',
        contactPageSubtitle: 'Agende uma consulta gratuita com nossos especialistas. Vamos analisar sua situação atual e desenhar a estratégia perfeita para seus objetivos.',
        contactFormTitle: 'Solicite uma <span class="highlight">consulta gratuita</span>',
        contactFormSubtitle: 'Preencha o formulário e nossa equipe entrará em contato em até 2 horas úteis.',
        formName: 'Nome completo *',
        formEmail: 'E-mail *',
        formPhone: 'Telefone/WhatsApp *',
        formClinicName: 'Nome da clínica',
        formMessage: 'Conte-nos mais sobre sua clínica e objetivos',
        formMessagePlaceholder: 'Descreva sua situação atual, principais desafios e o que espera alcançar...',
        formBtn: 'Solicitar consulta gratuita',
        formDisclaimer: 'Ao enviar este formulário, você concorda em receber comunicações da DentComm. Seus dados estão protegidos conforme nossa política de privacidade.',
        
        // PÁGINAS DE PRODUTO INDIVIDUAIS
        breadcrumb: '← Voltar para todos os produtos',
        investmentTitle: 'Investimento',
        adsBudgetTitle: 'Verba de anúncios:',
        contractTitle: 'Contrato mínimo:',
        btnTalkToConsultant: 'Falar com um Consultor',
        
        // Base
        baseObjective: 'A estrutura essencial para qualquer dentista atrair pacientes, construir autoridade e entender o retorno de suas ações de forma prática.',
        baseTargetTitle: 'Para quem é o plano Base?',
        basePainsTitle: 'Principais Dores que Resolvemos',
        deliverablesTitleBase: 'O que você <span class="highlight">recebe</span> no plano Base',

        // Flow
        flowObjective: 'Elevar o nível de captação, conversão e gestão da jornada do paciente. O Flow entrega estrutura, automação e escala para crescer com controle e inteligência.',
        flowTargetTitle: 'Para quem é o plano Flow?',
        flowPainsTitle: 'Principais Dores que Resolvemos',
        deliverablesTitleFlow: 'O que você <span class="highlight">recebe</span> no plano Flow',

        // Core360
        core360Objective: 'Integrar marketing, atendimento, vendas e gestão em um ecossistema digital completo para previsibilidade de agenda e crescimento sustentável.',
        core360TargetTitle: 'Para quem é o plano Core360?',
        core360PainsTitle: 'Principais Dores que Resolvemos',
        deliverablesTitleCore360: 'O que você <span class="highlight">recebe</span> no plano Core360',

        // Fullstack
        fullstackObjective: 'Assumir completamente a operação digital da clínica, da estratégia à execução, para que você tenha escala, qualidade, previsibilidade e, acima de tudo, tempo livre.',
        fullstackTargetTitle: 'Para quem é o plano Fullstack?',
        fullstackPainsTitle: 'Principais Dores que Resolvemos',
        deliverablesTitleFullstack: 'O que você <span class="highlight">recebe</span> no plano Fullstack',

    },
    es: {
        // NAV & HEADER
        navHome: 'Inicio',
        navAbout: 'Quiénes Somos',
        navProducts: 'Productos',
        navContact: 'Contacto',

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
        productsCtaText: '¿No sabes qué solución es ideal para ti?',
        productsCtaBtn: 'Habla con un especialista',
        roiTitle: 'Calcula el <span class="highlight">potencial</span> de tu clínica',
        roiSubtitle: 'Descubre cuánto puedes facturar invirtiendo en marketing dental profesional.',
        roiInputPatients: 'Pacientes actuales/mes',
        roiInputTicket: 'Ticket promedio ($)',
        roiInputBudget: 'Presupuesto marketing ($)',
        roiInputGoal: 'Meta de crecimiento (%)',
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
        
        // QUEM-SOMOS.HTML
        aboutTitle: 'Marketing con <span class="highlight">propósito.</span><br>Crecimiento con <span class="highlight">conciencia.</span>',
        aboutIntroTitle: 'Creemos que todo dentista puede ser más que un profesional de la salud. <span class="text-highlight">Puede ser una marca. Un referente. Un líder.</span>',
        aboutIntroP1: 'Pero para eso, necesita más que marketing bonito: necesita estrategia, claridad y retorno. Somos una agencia de marketing y automatización full service especializada en dentistas de América Latina. Nacimos para transformar la frustración de muchos profesionales en progreso real.',
        aboutIntroP2: 'En DentComm, no prometemos magia. <strong>Prometemos estructura. Rendimiento con posicionamiento.</strong> Ayudamos a los dentistas a crecer con inteligencia, respeto a la ciencia y enfoque en los resultados.',
        aboutResult: 'Más que marketing. <span class="display-highlight">¡Resultado!</span>',
        aboutCureTitle: 'Cuando el marketing se hace bien, también <span class="text-highlight">cura</span>:',
        aboutCureText: 'Cura la <strong class="highlight">inseguridad</strong> de no saber por dónde empezar.<br>Cura el <strong class="highlight">estancamiento</strong> de una agenda que no crece.<br>Cura el <strong class="highlight">miedo a crecer</strong> de forma desorganizada.',
        aboutCtaTitle: 'Estamos listos para transformar tu viaje. <span class="highlight">¿Vamos juntos?</span>',
        aboutCtaBtn: 'Conoce Nuestras Soluciones',

        // PRODUTOS.HTML
        productsPageTitle: 'Soluciones <span class="highlight">inteligentes</span> para cada fase de tu clínica',
        productsPageSubtitle: 'Desde el dentista que está comenzando en el mundo digital hasta la clínica que busca escalar su operación. Tenemos el plan perfecto para tu momento actual.',
        compareTitle: 'Compara nuestras <span class="highlight">soluciones</span>',
        compareSubtitle: 'Encuentra la solución ideal para tu perfil y objetivos.',
        featureColumnHeader: 'Recursos',
        gridTitle: 'Conoce cada <span class="highlight">solución</span> en detalle',
        faqTitle: 'Preguntas <span class="highlight">frecuentes</span>',
        faqSubtitle: 'Aclara tus dudas sobre nuestras soluciones de marketing dental.',

        // CONTATO.HTML
        contactPageTitle: '¿Hablamos sobre el <span class="highlight">futuro</span> de tu clínica?',
        contactPageSubtitle: 'Agenda una consulta gratuita con nuestros especialistas. Analizaremos tu situación actual y diseñaremos la estrategia perfecta para tus objetivos.',
        contactFormTitle: 'Solicita una <span class="highlight">consulta gratuita</span>',
        contactFormSubtitle: 'Completa el formulario y nuestro equipo se pondrá en contacto en hasta 2 horas hábiles.',
        formName: 'Nombre completo *',
        formEmail: 'E-mail *',
        formPhone: 'Teléfono/WhatsApp *',
        formClinicName: 'Nombre de la clínica',
        formMessage: 'Cuéntanos más sobre tu clínica y objetivos',
        formMessagePlaceholder: 'Describe tu situación actual, principales desafíos y lo que esperas lograr...',
        formBtn: 'Solicitar consulta gratuita',
        formDisclaimer: 'Al enviar este formulario, aceptas recibir comunicaciones de DentComm. Tus datos están protegidos según nuestra política de privacidad.',

        // PÁGINAS DE PRODUTO INDIVIDUAIS
        breadcrumb: '← Volver a todos los productos',
        investmentTitle: 'Inversión',
        adsBudgetTitle: 'Presupuesto de anuncios:',
        contractTitle: 'Contrato mínimo:',
        btnTalkToConsultant: 'Hablar con un Consultor',

        // Base
        baseObjective: 'La estructura esencial para que cualquier dentista atraiga pacientes, construya autoridad digital y entienda, en la práctica, el retorno de sus acciones.',
        baseTargetTitle: '¿Para quién es el plan Base?',
        basePainsTitle: 'Principales Dolores que Resolvemos',
        deliverablesTitleBase: 'Lo que recibes en el plan <span class="highlight">Base</span>',

        // Flow
        flowObjective: 'Elevar el nivel de captación, conversión y gestión del viaje del paciente. Flow entrega estructura, automatización y escala para crecer con control e inteligencia.',
        flowTargetTitle: '¿Para quién es el plan Flow?',
        flowPainsTitle: 'Principales Dolores que Resolvemos',
        deliverablesTitleFlow: 'Lo que recibes en el plan <span class="highlight">Flow</span>',

        // Core360
        core360Objective: 'Integrar marketing, atención, ventas y gestión en un ecosistema digital completo para la previsibilidad de la agenda y un crecimiento sostenible.',
        core360TargetTitle: '¿Para quién es el plan Core360?',
        core360PainsTitle: 'Principales Dolores que Resolvemos',
        deliverablesTitleCore360: 'Lo que recibes en el plan <span class="highlight">Core360</span>',

        // Fullstack
        fullstackObjective: 'Asumir completamente la operación digital de la clínica, desde la estrategia hasta la ejecución, para que tengas escala, calidad, previsibilidad y, sobre todo, tiempo libre.',
        fullstackTargetTitle: '¿Para quién es el plan Fullstack?',
        fullstackPainsTitle: 'Principales Dolores que Resolvemos',
        deliverablesTitleFullstack: 'Lo que recibes en el plan <span class="highlight">Fullstack</span>',
    }
};

// ... (restante do código do script.js, que permanece o mesmo)
function setLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (el.hasAttribute('placeholder')) {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

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
    const validatePhone = (phone) => /^\d{10,15}$/.test(phone.replace(/\D/g, ''));

    nameInput.addEventListener('blur', () => validateField(nameInput, validateName, 'O nome é obrigatório.'));
    emailInput.addEventListener('blur', () => validateField(emailInput, validateEmail, 'Por favor, insira um e-mail válido.'));
    phoneInput.addEventListener('blur', () => validateField(phoneInput, validatePhone, 'Insira um telefone válido com DDD.'));

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isNameValid = validateField(nameInput, validateName, 'O nome é obrigatório.');
        const isEmailValid = validateField(emailInput, validateEmail, 'Por favor, insira um e-mail válido.');
        const isPhoneValid = validateField(phoneInput, validatePhone, 'Insira um telefone válido com DDD.');

        if (isNameValid && isEmailValid && isPhoneValid) {
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            setTimeout(() => {
                formStatus.innerHTML = '<div class="form-status success">Mensagem enviada com sucesso!</div>';
                contactForm.reset();
                submitBtn.textContent = 'Solicitar consulta gratuita';
                submitBtn.disabled = false;
            }, 1500);
        } else {
            formStatus.innerHTML = '<div class="form-status error">Por favor, corrija os campos destacados.</div>';
        }
    });
}

function initROICalculator() {
    const calculateBtn = document.getElementById('calculate-roi');
    if (!calculateBtn) return;
    calculateBtn.addEventListener('click', calculateROI);
}

function calculateROI() {
    const monthlyPatients = parseInt(document.getElementById('monthly-patients').value) || 0;
    const avgTreatment = parseInt(document.getElementById('avg-treatment').value) || 0;
    const marketingBudget = parseInt(document.getElementById('marketing-budget').value) || 0;
    const growthGoal = parseInt(document.getElementById('growth-goal').value) || 0;
    const resultDiv = document.getElementById('roi-result');

    if (monthlyPatients > 0 && avgTreatment > 0 && marketingBudget > 0 && growthGoal > 0) {
        const newPatients = Math.round((monthlyPatients * growthGoal) / 100);
        const additionalRevenue = newPatients * avgTreatment;
        const roiPercentage = Math.round(((additionalRevenue - marketingBudget) / marketingBudget) * 100);
        const annualGrowth = additionalRevenue * 12;

        document.getElementById('new-patients').textContent = `+${newPatients}`;
        document.getElementById('additional-revenue').textContent = `R$ ${additionalRevenue.toLocaleString('pt-BR')}`;
        document.getElementById('roi-percentage').textContent = `${roiPercentage}%`;
        document.getElementById('annual-growth').textContent = `R$ ${annualGrowth.toLocaleString('pt-BR')}`;

        resultDiv.style.display = 'block';
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        alert('Por favor, preencha todos os campos com valores válidos para calcular.');
    }
}

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
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

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

function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            question.setAttribute('aria-expanded', !isExpanded);
            if (!isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
}

function initTestimonialSlider() {
    const navBtns = document.querySelectorAll('.testimonial-nav-btn');
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (navBtns.length === 0) return;

    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 5000);

    function showSlide(index) {
        testimonials.forEach((t, i) => {
            t.style.display = i === index ? 'block' : 'none';
        });
        navBtns.forEach(b => b.classList.remove('active'));
        navBtns[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showSlide(currentSlide);
    }

    navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            showSlide(index);
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
}

function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (!newsletterForm) return;
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('E-mail cadastrado com sucesso!');
        newsletterForm.reset();
    });
}

function initScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}