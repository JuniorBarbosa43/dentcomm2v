document.addEventListener('DOMContentLoaded', () => {
    // 1. DICIONÁRIO DE TRADUÇÕES (PT/ES)
    const translations = {
        pt: {
            // Navegação
            navHome: "Início",
            navAbout: "Quem Somos",
            navProducts: "Produtos",
            navContact: "Contato",
            
            // Geral e Botões
            productBreadcrumb: "&larr; Voltar para todos os produtos",
            investmentTitle: "Investimento",
            adsBudgetTitle: "Verba de anúncios:",
            contractTitle: "Contrato mínimo:",
            btnKnowMore: "Saiba mais",
            btnSeeDetails: "Ver detalhes",
            
            // Página Inicial (Hero)
            heroTitle: "Transforme sua clínica dental em uma <span class=\"highlight\">referência</span> no mercado",
            heroSubtitle: "Marketing inteligente, automação avançada e estratégias que geram resultados reais. Soluções premium para dentistas da América Latina que querem crescer de forma sustentável.",
            heroBtnSolutions: "Conheça nossas soluções",
            heroBtnRoi: "Calcule seu ROI",
            heroStat1: "Dentistas atendidos",
            heroStat2: "Aumento médio de pacientes",
            heroStat3: "ROI médio dos clientes",
            heroScroll: "Role para baixo",

            // Página Inicial (Values)
            valuesTitle: "Por que escolher a <span class=\"highlight\">DentComm</span>?",
            valuesSubtitle: "Os pilares que nos tornam únicos no marketing dental da América Latina.",
            value1Title: "Resultados Comprovados",
            value1Text: "Mais de 500 dentistas transformaram suas clínicas conosco. ROI médio de 8x em 6 meses.",
            value2Title: "Automação Inteligente",
            value2Text: "Sistemas que trabalham 24/7 para captar, nutrir e converter leads em pacientes reais.",
            value3Title: "Especialização Dental",
            value3Text: "Entendemos as particularidades do mercado odontológico e criamos estratégias específicas.",
            value4Title: "Suporte Personalizado",
            value4Text: "Acompanhamento dedicado com consultores especializados em crescimento de clínicas.",

            // Página Inicial (Products Showcase)
            showcaseTitle: "Soluções <span class=\"highlight\">sob medida</span> para cada momento",
            showcaseSubtitle: "Do dentista que está começando no digital à clínica que busca escalar sua operação.",
            showcaseCtaText: "Não sabe qual solução é ideal para você?",
            showcaseCtaBtn: "Fale com um especialista",

            // Página Inicial (ROI Calculator)
            roiTitle: "Calcule o <span class=\"highlight\">potencial</span> da sua clínica",
            roiSubtitle: "Descubra quanto você pode faturar investindo em marketing dental profissional.",
            roiFieldPatients: "Pacientes atuais/mês",
            roiFieldTicket: "Ticket médio (R$)",
            roiFieldBudget: "Orçamento marketing (R$)",
            roiFieldGoal: "Meta de crescimento (%)",
            roiGoalOption1: "50% - Crescimento moderado",
            roiGoalOption2: "100% - Dobrar pacientes",
            roiGoalOption3: "200% - Triplicar pacientes",
            roiGoalOption4: "300% - Crescimento agressivo",
            roiBtnCalculate: "Calcular Potencial",
            roiResultPatients: "Novos pacientes/mês",
            roiResultRevenue: "Faturamento adicional",
            roiResultRoi: "ROI projetado",
            roiResultAnnual: "Crescimento anual",
            roiDisclaimer: "*Projeção baseada na média dos nossos clientes. Resultados podem variar.",
            roiBtnAction: "Quero esses resultados",

            // Página Inicial (Testimonials)
            testimonialsTitle: "Histórias de <span class=\"highlight\">sucesso</span> reais",
            testimonialsSubtitle: "Veja como nossos clientes transformaram suas clínicas com nossas soluções.",
            testimonial1Text: "Em 8 meses, nossa agenda triplicou e conseguimos abrir uma segunda unidade. A DentComm não só entregou resultados, mas nos ensinou a pensar como empresários do setor odontológico.",
            
            // Página Inicial (Newsletter)
            newsletterTitle: "Receba insights <span class=\"highlight\">exclusivos</span>",
            newsletterSubtitle: "Estratégias, tendências e cases de sucesso do marketing dental direto no seu e-mail.",
            newsletterPlaceholder: "Seu melhor e-mail",
            newsletterBtn: "Quero receber",
            newsletterDisclaimer: "Sem spam. Apenas conteúdo de valor. Cancele quando quiser.",
            
            // Página Inicial (Final CTA)
            finalCtaTitle: "Pronto para transformar sua clínica?",
            finalCtaSubtitle: "Agende uma conversa gratuita com nossos especialistas e descubra como podemos acelerar o crescimento da sua clínica dental.",
            finalCtaBtn1: "Agendar consulta gratuita",
            finalCtaBtn2: "Falar no WhatsApp",
            finalCtaGuarantee1: "Consulta 100% gratuita",
            finalCtaGuarantee2: "Sem compromisso",
            finalCtaGuarantee3: "Estratégia personalizada",

            // Página Quem Somos
            aboutTitle: "Marketing com <span class=\"highlight\">propósito.</span><br>Crescimento com <span class=\"highlight\">consciência.</span>",
            aboutIntroTitle: "Acreditamos que todo dentista pode ser mais que um profissional da saúde. <span class=\"text-highlight\">Pode ser uma marca. Uma referência. Um líder.</span>",
            aboutIntroP1: "Mas para isso, precisa de mais do que marketing bonito: precisa de estratégia, clareza e retorno.  Somos uma agência de marketing e automação full service especializada em dentistas da América Latina.  Nascemos para transformar a frustração de muitos profissionais em progresso real.",
            aboutIntroP2: "Na DentComm, não prometemos mágica. <strong data-key=\"aboutIntroP2Strong\">Prometemos estrutura. Performance com posicionamento.</strong>  Ajudamos dentistas a crescerem com inteligência, respeito à ciência e foco em resultado. ",
            aboutResult: "Mais do que marketing. <span class=\"display-highlight\">Resultado!</span>",
            aboutCureTitle: "Quando o marketing é bem-feito, ele <span class=\"text-highlight\">cura</span> também:",
            aboutCureText: "Cura a <strong class=\"highlight\">insegurança</strong> de não saber por onde começar.<br>Cura a <strong class=\"highlight\">estagnação</strong> de uma agenda que não cresce.<br>Cura o <strong class=\"highlight\">medo de crescer</strong> de forma desorganizada.",
            aboutCtaTitle: "Estamos prontos para transformar sua jornada. <span class=\"highlight\">Vamos juntos?</span>",
            aboutCtaBtn: "Conheça Nossas Soluções",

            // Página de Contato
            contactTitle: "Vamos conversar sobre o <span class=\"highlight\">futuro</span> da sua clínica?",
            contactSubtitle: "Agende uma consulta gratuita com nossos especialistas. Vamos analisar sua situação atual e desenhar a estratégia perfeita para seus objetivos.",
            contactFormTitle: "Solicite uma <span class=\"highlight\">consulta gratuita</span>",
            contactFormSubtitle: "Preencha o formulário e nossa equipe entrará em contato em até 2 horas úteis.",
            formName: "Nome completo *",
            formEmail: "E-mail *",
            formPhone: "Telefone/WhatsApp *",
            formClinicName: "Nome da clínica",
            formBtnSubmit: "Solicitar consulta gratuita",
            formDisclaimer: "Ao enviar este formulário, você concorda em receber comunicações da DentComm. Seus dados estão protegidos conforme nossa política de privacidade.",
            formSending: "Enviando...",
            formSuccess: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
            formError: "Por favor, corrija os campos inválidos.",

            // Footer
            footerTagline: "Transformando clínicas dentais em referências de mercado através de marketing inteligente e resultados comprovados.",
            footerNav: "Navegação",
            footerSolutions: "Soluções",
            footerContact: "Contato",
            footerRights: "Todos os direitos reservados.",
            footerPrivacy: "Política de Privacidade",
            footerTerms: "Termos de Uso"
        },
        es: {
            // Navegación
            navHome: "Inicio",
            navAbout: "Quiénes Somos",
            navProducts: "Productos",
            navContact: "Contacto",

            // General y Botones
            productBreadcrumb: "&larr; Volver a todos los productos",
            investmentTitle: "Inversión",
            adsBudgetTitle: "Presupuesto de anuncios:",
            contractTitle: "Contrato mínimo:",
            btnKnowMore: "Saber más",
            btnSeeDetails: "Ver detalles",
            
            // Página Inicial (Hero)
            heroTitle: "Transforme su clínica dental en un <span class=\"highlight\">referente</span> del mercado",
            heroSubtitle: "Marketing inteligente, automatización avanzada y estrategias que generan resultados reales. Soluciones premium para dentistas de América Latina que desean crecer de forma sostenible.",
            heroBtnSolutions: "Conozca nuestras soluciones",
            heroBtnRoi: "Calcule su ROI",
            heroStat1: "Dentistas atendidos",
            heroStat2: "Aumento promedio de pacientes",
            heroStat3: "ROI promedio de los clientes",
            heroScroll: "Desplácese hacia abajo",

            // Página Inicial (Values)
            valuesTitle: "¿Por qué elegir <span class=\"highlight\">DentComm</span>?",
            valuesSubtitle: "Los pilares que nos hacen únicos en el marketing dental de América Latina.",
            value1Title: "Resultados Comprobados",
            value1Text: "Más de 500 dentistas transformaron sus clínicas con nosotros. ROI promedio de 8x en 6 meses.",
            value2Title: "Automatización Inteligente",
            value2Text: "Sistemas que trabajan 24/7 para captar, nutrir y convertir leads en pacientes reales.",
            value3Title: "Especialización Dental",
            value3Text: "Entendemos las particularidades del mercado odontológico y creamos estrategias específicas.",
            value4Title: "Soporte Personalizado",
            value4Text: "Seguimiento dedicado con consultores especializados en el crecimiento de clínicas.",

            // Página Inicial (Products Showcase)
            showcaseTitle: "Soluciones <span class=\"highlight\">a medida</span> para cada momento",
            showcaseSubtitle: "Desde el dentista que está comenzando en el mundo digital hasta la clínica que busca escalar su operación.",
            showcaseCtaText: "¿No sabe qué solución es ideal para usted?",
            showcaseCtaBtn: "Hable con un especialista",

            // Página Inicial (ROI Calculator)
            roiTitle: "Calcule el <span class=\"highlight\">potencial</span> de su clínica",
            roiSubtitle: "Descubra cuánto puede facturar invirtiendo en marketing dental profesional.",
            roiFieldPatients: "Pacientes actuales/mes",
            roiFieldTicket: "Ticket promedio (USD)",
            roiFieldBudget: "Presupuesto marketing (USD)",
            roiFieldGoal: "Meta de crecimiento (%)",
            roiGoalOption1: "50% - Crecimiento moderado",
            roiGoalOption2: "100% - Duplicar pacientes",
            roiGoalOption3: "200% - Triplicar pacientes",
            roiGoalOption4: "300% - Crecimiento agresivo",
            roiBtnCalculate: "Calcular Potencial",
            roiResultPatients: "Nuevos pacientes/mes",
            roiResultRevenue: "Facturación adicional",
            roiResultRoi: "ROI proyectado",
            roiResultAnnual: "Crecimiento anual",
            roiDisclaimer: "*Proyección basada en el promedio de nuestros clientes. Los resultados pueden variar.",
            roiBtnAction: "Quiero estos resultados",
            
            // Página Inicial (Testimonials)
            testimonialsTitle: "Historias de <span class=\"highlight\">éxito</span> reales",
            testimonialsSubtitle: "Vea cómo nuestros clientes transformaron sus clínicas con nuestras soluciones.",
            testimonial1Text: "En 8 meses, nuestra agenda se triplicó y pudimos abrir una segunda unidad. DentComm no solo entregó resultados, sino que nos enseñó a pensar como empresarios del sector odontológico.",

            // Página Inicial (Newsletter)
            newsletterTitle: "Reciba insights <span class=\"highlight\">exclusivos</span>",
            newsletterSubtitle: "Estrategias, tendencias y casos de éxito del marketing dental directamente en su correo.",
            newsletterPlaceholder: "Su mejor correo electrónico",
            newsletterBtn: "Quiero recibir",
            newsletterDisclaimer: "Sin spam. Solo contenido de valor. Cancele cuando quiera.",
            
            // Página Inicial (Final CTA)
            finalCtaTitle: "¿Listo para transformar su clínica?",
            finalCtaSubtitle: "Programe una consulta gratuita con nuestros especialistas y descubra cómo podemos acelerar el crecimiento de su clínica dental.",
            finalCtaBtn1: "Agendar consulta gratuita",
            finalCtaBtn2: "Hablar por WhatsApp",
            finalCtaGuarantee1: "Consulta 100% gratuita",
            finalCtaGuarantee2: "Sin compromiso",
            finalCtaGuarantee3: "Estrategia personalizada",

            // Página Quiénes Somos
            aboutTitle: "Marketing con <span class=\"highlight\">propósito.</span><br>Crecimiento con <span class=\"highlight\">conciencia.</span>",
            aboutIntroTitle: "Creemos que cada dentista puede ser más que un profesional de la salud. <span class=\"text-highlight\">Puede ser una marca. Un referente. Un líder.</span>",
            aboutIntroP1: "Pero para eso, se necesita más que un marketing bonito: se necesita estrategia, claridad y retorno. Somos una agencia de marketing y automatización full service especializada en dentistas de América Latina. Nacimos para transformar la frustración de muchos profesionales en progreso real.",
            aboutIntroP2: "En DentComm, no prometemos magia. <strong data-key=\"aboutIntroP2Strong\">Prometemos estructura. Rendimiento con posicionamiento.</strong> Ayudamos a los dentistas a crecer con inteligencia, respeto a la ciencia y enfoque en los resultados.",
            aboutResult: "Más que marketing. <span class=\"display-highlight\">¡Resultado!</span>",
            aboutCureTitle: "Cuando el marketing está bien hecho, también <span class=\"text-highlight\">cura</span>:",
            aboutCureText: "Cura la <strong class=\"highlight\">inseguridad</strong> de no saber por dónde empezar.<br>Cura el <strong class=\"highlight\">estancamiento</strong> de una agenda que no crece.<br>Cura el <strong class=\"highlight\">miedo a crecer</strong> de forma desorganizada.",
            aboutCtaTitle: "Estamos listos para transformar su jornada. <span class=\"highlight\">¿Vamos juntos?</span>",
            aboutCtaBtn: "Conozca Nuestras Soluciones",
            
            // Página de Contacto
            contactTitle: "¿Hablamos sobre el <span class=\"highlight\">futuro</span> de su clínica?",
            contactSubtitle: "Programe una consulta gratuita con nuestros especialistas. Analizaremos su situación actual y diseñaremos la estrategia perfecta para sus objetivos.",
            contactFormTitle: "Solicite una <span class=\"highlight\">consulta gratuita</span>",
            contactFormSubtitle: "Complete el formulario y nuestro equipo se pondrá en contacto en hasta 2 horas hábiles.",
            formName: "Nombre completo *",
            formEmail: "Correo electrónico *",
            formPhone: "Teléfono/WhatsApp *",
            formClinicName: "Nombre de la clínica",
            formBtnSubmit: "Solicitar consulta gratuita",
            formDisclaimer: "Al enviar este formulario, usted acepta recibir comunicaciones de DentComm. Sus datos están protegidos según nuestra política de privacidad.",
            formSending: "Enviando...",
            formSuccess: "¡Mensaje enviado con éxito! Nos pondremos en contacto en breve.",
            formError: "Por favor, corrija los campos inválidos.",

            // Footer
            footerTagline: "Transformando clínicas dentales en referentes del mercado a través de marketing inteligente y resultados comprobados.",
            footerNav: "Navegación",
            footerSolutions: "Soluciones",
            footerContact: "Contacto",
            footerRights: "Todos los derechos reservados.",
            footerPrivacy: "Política de Privacidad",
            footerTerms: "Términos de Uso"
        }
    };

    /**
     * Aplica o idioma selecionado a todos os elementos com data-key
     * @param {string} lang - 'pt' ou 'es'
     */
    function setLanguage(lang) {
        if (!lang) lang = localStorage.getItem('language') || 'pt';
        
        document.documentElement.lang = lang.startsWith('es') ? 'es' : 'pt';
        localStorage.setItem('language', lang);

        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                const value = translations[lang][key];
                
                // Trata placeholders de inputs e textareas
                if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
                    elem.placeholder = value;
                } else {
                    elem.innerHTML = value;
                }
            }
        });

        const langPtBtn = document.getElementById('lang-pt');
        const langEsBtn = document.getElementById('lang-es');

        if (langPtBtn && langEsBtn) {
            if (lang === 'es') {
                langEsBtn.classList.add('active');
                langPtBtn.classList.remove('active');
            } else {
                langPtBtn.classList.add('active');
                langEsBtn.classList.remove('active');
            }
        }
    }

    /**
     * Inicializa o seletor de idiomas
     */
    function initLanguageSwitcher() {
        const langPtBtn = document.getElementById('lang-pt');
        const langEsBtn = document.getElementById('lang-es');

        if (langPtBtn) langPtBtn.addEventListener('click', () => setLanguage('pt'));
        if (langEsBtn) langEsBtn.addEventListener('click', () => setLanguage('es'));

        setLanguage(); // Aplica o idioma salvo ou o padrão
    }

    /**
     * Inicializa o seletor de tema (Light/Dark)
     */
    function initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;

        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }

        themeToggle.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });

        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);
    }
    
    /**
     * Inicializa animações de entrada ao rolar a página
     */
    function initScrollReveal() {
        if (!('IntersectionObserver' in window)) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    }

    /**
     * Inicializa o menu mobile
     */
    function initMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('.nav');

        if (navToggle && nav) {
            navToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                nav.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
            document.addEventListener('click', (e) => {
                if(nav.classList.contains('active') && !nav.contains(e.target)) {
                    nav.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        }
    }

    /**
     * Inicializa a calculadora de ROI
     */
    function initROICalculator() {
        const calculateBtn = document.getElementById('calculate-roi');
        if (!calculateBtn) return;

        calculateBtn.addEventListener('click', () => {
            const monthlyPatients = parseInt(document.getElementById('monthly-patients').value) || 0;
            const avgTreatment = parseInt(document.getElementById('avg-treatment').value) || 0;
            const marketingBudget = parseInt(document.getElementById('marketing-budget').value) || 0;
            const growthGoal = parseInt(document.getElementById('growth-goal').value) || 0;

            const resultDiv = document.getElementById('roi-result');
            if (!resultDiv) return;

            const newPatientsEl = document.getElementById('new-patients');
            const additionalRevenueEl = document.getElementById('additional-revenue');
            const roiPercentageEl = document.getElementById('roi-percentage');
            const annualGrowthEl = document.getElementById('annual-growth');

            if (monthlyPatients > 0 && avgTreatment > 0 && marketingBudget > 0 && growthGoal > 0) {
                const newPatients = Math.round((monthlyPatients * growthGoal) / 100);
                const additionalRevenue = newPatients * avgTreatment;
                const roiPercentage = ((additionalRevenue / marketingBudget)).toFixed(1);
                const annualGrowth = additionalRevenue * 12;

                if(newPatientsEl) newPatientsEl.textContent = `+${newPatients}`;
                if(additionalRevenueEl) additionalRevenueEl.textContent = `R$ ${additionalRevenue.toLocaleString('pt-BR')}`;
                if(roiPercentageEl) roiPercentageEl.textContent = `${roiPercentage}x`;
                if(annualGrowthEl) annualGrowthEl.textContent = `R$ ${annualGrowth.toLocaleString('pt-BR')}`;
                
                resultDiv.style.display = 'block';
                resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                alert('Por favor, preencha todos os campos com valores válidos.');
            }
        });
    }

    /**
     * Inicializa o formulário de contato com validação
     */
    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const submitBtn = document.getElementById('submit-btn');
        const formStatus = document.getElementById('form-status');

        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        
        function setValidation(field, isValid) {
            if(!field) return;
            if (isValid) {
                field.classList.remove('invalid');
            } else {
                field.classList.add('invalid');
            }
        }

        function showStatus(message, type) {
            if(!formStatus) return;
            formStatus.innerHTML = message;
            formStatus.className = `form-status ${type}`;
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let allValid = true;
            const currentLang = localStorage.getItem('language') || 'pt';

            const isNameValid = name.value.trim() !== '';
            setValidation(name, isNameValid);
            if(!isNameValid) allValid = false;

            const isEmailValid = validateEmail(email.value);
            setValidation(email, isEmailValid);
            if(!isEmailValid) allValid = false;
            
            const isPhoneValid = phone.value.trim().length > 8;
            setValidation(phone, isPhoneValid);
            if(!isPhoneValid) allValid = false;

            if (allValid) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = translations[currentLang].formSending;
                showStatus('', '');

                // Simulação de envio
                setTimeout(() => {
                    showStatus(translations[currentLang].formSuccess, 'success');
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = translations[currentLang].formBtnSubmit;
                }, 1500);
            } else {
                showStatus(translations[currentLang].formError, 'error');
            }
        });
    }

    /**
     * Inicializa o lazy loading de imagens
     */
    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        if (lazyImages.length === 0 || !('IntersectionObserver' in window)) return;
        
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: "0px 0px 200px 0px" });

        lazyImages.forEach(img => lazyImageObserver.observe(img));
    }
    
    // Inicialização de todas as funcionalidades
    initLanguageSwitcher();
    initThemeToggle();
    initScrollReveal();
    initMobileMenu();
    initROICalculator();
    initContactForm();
    initLazyLoading();
});