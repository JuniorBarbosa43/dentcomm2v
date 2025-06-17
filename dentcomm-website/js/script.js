/**
 * DENTCOMM - JAVASCRIPT MODERNO E FUNCIONAL
 * Versão Final: 5.0.4 (Polimento Final Corrigido)
 * Descrição: Script completo com todas as funcionalidades solicitadas,
 * incluindo tradução completa (PT/ES), modo claro/escuro, troca de moeda,
 * calculadora de ROI, validação de formulário aprimorada e otimizações de performance.
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

        // FOOTER
        footerTagline: 'Transformando clínicas dentais em referências de mercado através de marketing inteligente e resultados comprovados.',
        footerNav: 'Navegação',
        footerSolutions: 'Soluções',
        footerContact: 'Contato',
        footerAddress: 'Avenida Paulista, 1374 – 16º Andar, Bela Vista, CEP 01310-100 | São Paulo – SP, Brasil',
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
        valuesTitle: 'Nossos <span class="highlight">Valores</span>',
        valuesSubtitle: 'Os pilares que nos tornam únicos no marketing dental da América Latina.',
        value1Title: 'Resultados Comprovados',
        value1Desc: 'Mais de 500 dentistas transformaram suas clínicas conosco. ROI médio de 8x em 6 meses.',
        value2Title: 'Automação Inteligente',
        value2Desc: 'Sistemas que trabalham 24/7 para captar, nutrir e converter leads em pacientes reais.',
        value3Title: 'Especialização Dental',
        value3Desc: 'Entendemos as particularidades do mercado odontológico e criamos estratégias específicas.',
        productsShowcaseTitle: 'Soluções <span class="highlight">sob medida</span> para cada momento',
        productsShowcaseSubtitle: 'Do dentista que está começando no digital à clínica que busca escalar sua operação.',
        baseDesc: 'Ideal para dentistas que querem começar no marketing digital com estrutura sólida e resultados rápidos.',
        flowDesc: 'Para clínicas que querem automatizar processos e escalar a captação de pacientes com inteligência.',
        core360Desc: 'Solução completa que integra marketing, vendas e gestão em um ecossistema único de crescimento.',
        fullstackDesc: 'Assumimos 100% da sua operação digital para você focar exclusivamente no que faz de melhor: cuidar dos pacientes.',
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
        testimonial3Text: 'O ROI foi impressionante: para cada real investido em marketing, tivemos 8 reais de retorno. Nunca imaginei que seria possível crescer tanto mantendo a qualidade.',
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

        // QUEM-SOMOS.HTML
        aboutTitle: 'Marketing com <span class="highlight">propósito.</span><br>Crescimento com <span class="highlight">consciência.</span>',
        aboutIntroTitle: 'Acreditamos que todo dentista pode ser mais que um profissional da saúde. <span class="text-highlight">Pode ser uma marca. Uma referência. Um líder.</span>',
        aboutIntroP1: 'Mas para isso, precisa de mais do que marketing bonito: precisa de estratégia, clareza e retorno. Somos uma agência de marketing e automação full service especializada em dentistas da América Latina. Nascemos para transformar a frustração de muitos profissionais em progresso real.',
        aboutIntroP2: 'Na DentComm, não prometemos mágica. <strong>Prometemos estrutura. Performance com posicionamento.</strong> Ajudamos dentistas a crescerem com inteligência, respeito à ciência e foco em resultado.',
        aboutResult: 'Mais do que marketing. <span class="display-highlight">Resultado!</span>',
        valueClareza: 'Clareza',
        valueClarezaDesc: 'Comunicação transparente e relatórios que você entende.',
        valueResultado: 'Resultado',
        valueResultadoDesc: 'Foco total em performance e crescimento mensurável.',
        valueInteligencia: 'Inteligência',
        valueInteligenciaDesc: 'Estratégias baseadas em dados para decisões assertivas.',
        valueTransformacao: 'Transformação',
        valueTransformacaoDesc: 'Elevamos sua clínica a um novo patamar de referência.',
        valueParceria: 'Parceria',
        valueParceriaDesc: 'Seu sucesso é o nosso sucesso. Crescemos juntos.',
        valuePerformance: 'Performance',
        valuePerformanceDesc: 'Otimização contínua para maximizar seu ROI.',
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
        productBase: 'Base',
        productFlow: 'Flow',
        productCore360: 'Core360',
        productFullstack: 'Fullstack',
        featureSite: 'Site profissional',
        featureGoogle: 'Google Ads',
        featureSocial: 'Redes sociais',
        featureAutomation: 'Automação de leads',
        featureCRM: 'CRM integrado',
        featureWhatsapp: 'WhatsApp Business',
        featureBI: 'BI e Analytics',
        featureTeam: 'Gestão de equipe',
        featureDedicated: 'Equipe dedicada',
        featureSupport: 'Suporte 24/7',
        baseTagline: 'Essencial',
        flowTagline: 'Automação',
        core360Tagline: 'Completo',
        fullstackTagline: 'Dedicado',
        badgePopular: 'Mais Popular',
        badgePremium: 'Premium',
        btnSeeDetails: 'Ver detalhes',
        gridTitle: 'Conheça cada <span class="highlight">solução</span> em detalhes',
        badgeBeginner: 'Iniciante',
        badgeAdvanced: 'Avançado',
        priceUponRequest: 'sob consulta',
        pricePersonalized: 'Personalizado',
        priceFrom: 'A partir de',
        pricePeriod: '/mês',
        baseGridObjective: 'A estrutura essencial para atrair pacientes, construir autoridade e entender o retorno de suas ações de forma prática.',
        flowGridObjective: 'Eleve o nível de captação, conversão e gestão da jornada do paciente com automação e escala inteligente.',
        core360GridObjective: 'Integre marketing, atendimento e gestão em um ecossistema completo para previsibilidade de agenda e crescimento sustentável.',
        fullstackGridObjective: 'A solução definitiva onde assumimos sua operação digital, da estratégia à execução, para você focar 100% nos seus pacientes.',
        faqTitle: 'Perguntas <span class="highlight">frequentes</span>',
        faqSubtitle: 'Tire suas dúvidas sobre nossas soluções de marketing dental.',
        faq1Question: 'Qual a diferença entre os planos Base e Flow?',
        faq1Answer: 'O Base é ideal para dentistas que estão começando no marketing digital, oferecendo os fundamentos: site, Google Ads e redes sociais. O Flow adiciona automação completa, CRM integrado e funis de conversão para quem quer escalar a operação.',
        faq2Question: 'Quanto tempo leva para ver os primeiros resultados?',
        faq2Answer: 'Os primeiros leads começam a aparecer entre 15-30 dias. Resultados consistentes e ROI positivo geralmente são alcançados entre 60-90 dias, dependendo do mercado local e investimento em mídia paga.',
        faq3Question: 'Vocês trabalham com clínicas de todas as especialidades?',
        faq3Answer: 'Sim! Atendemos clínicas gerais e todas as especialidades: ortodontia, implantodontia, estética, endodontia, periodontia, cirurgia oral e muito mais. Adaptamos a estratégia para cada especialidade.',
        faq4Question: 'Existe contrato de fidelidade?',
        faq4Answer: 'Trabalhamos com contratos de 12 meses para garantir tempo suficiente para implementação e otimização das estratégias. Isso nos permite entregar os melhores resultados e ROI para sua clínica.',
        faq5Question: 'O investimento em mídia paga está incluso?',
        faq5Answer: 'Não, o investimento em mídia paga (Google Ads, Facebook Ads) é adicional e fica por sua conta. Recomendamos um investimento mínimo de R$ 1.500/mês para resultados consistentes. Nós gerenciamos e otimizamos suas campanhas.',
        ctaProductTitle: 'Ainda tem dúvidas sobre qual solução escolher?',
        ctaProductSubtitle: 'Agende uma conversa gratuita com nossos especialistas. Vamos analisar sua clínica e recomendar a melhor estratégia para seus objetivos.',

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
        formInvestQuestion: 'Você já investe em marketing digital? *',
        formInvestYes: 'Sim',
        formInvestNo: 'Não',
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

        // PÁGINAS DE PRODUTO INDIVIDUAIS
        breadcrumb: '← Voltar para todos os produtos',
        investmentTitle: 'Investimento',
        adsBudgetText: 'Verba de anúncios:',
        adsBudgetBase: 'USD 200 (sugerido)',
        adsBudgetFlow: 'USD 450 (sugerido)',
        adsBudgetCore360: 'USD 1000 (sugerido)',
        adsBudgetFullstack: 'USD 1500 (sugerido)',
        contractText: 'Contrato mínimo:',
        contractBase: '3 meses',
        contractFlow: '4 meses',
        contractCore360: '6 meses',
        contractFullstack: '6 meses',
        btnTalkToConsultant: 'Falar com um Consultor',
        deliverablesTitle: 'O que você <span class="highlight">recebe</span>',
        
        // Base
        baseObjective: 'A estrutura essencial para qualquer dentista atrair pacientes, construir autoridade e entender o retorno de suas ações de forma prática.',
        baseTargetTitle: 'Para quem é o plano Base?',
        baseTargetLi1: 'Dentistas que estão começando ou reestruturando sua presença digital.',
        baseTargetLi2: 'Profissionais que desejam captar pacientes ativamente pelo WhatsApp.',
        baseTargetLi3: 'Consultórios sem equipe ou processos comerciais bem definidos.',
        baseTargetLi4: 'Quem precisa de resultados, mas com baixo risco e complexidade.',
        basePainsTitle: 'Principais Dores que Resolvemos',
        basePainsLi1: 'Publica conteúdo, mas não vê retorno em pacientes.',
        basePainsLi2: 'Sente que perde pacientes por desorganização no atendimento.',
        basePainsLi3: 'Faz "marketing", mas não sabe se realmente dá resultado financeiro.',
        basePainsLi4: 'Não tem clareza de como transformar seguidores em agenda cheia.',
        baseDeliverable1Title: 'Estrutura de Captação e Atendimento',
        baseDeliverable1Li1: 'Landing page por especialidade com prova social e botão de WhatsApp.',
        baseDeliverable1Li2: 'Formulário de qualificação integrado ao CRM.',
        baseDeliverable1Li3: 'Implantação de funil de vendas com etapas odontológicas personalizadas.',
        baseDeliverable2Title: 'Identidade Digital e Presença Online',
        baseDeliverable2Li1: 'Criação de logotipo e paleta visual profissional.',
        baseDeliverable2Li2: 'Textos prontos para bio do Instagram e apresentação no WhatsApp.',
        baseDeliverable2Li3: 'Kit semanal com 4 artes produzidas pela DentComm.',
        baseDeliverable2Li4: 'Organização visual inicial do feed e destaques.',
        baseDeliverable3Title: 'Tráfego e Captação de Pacientes',
        baseDeliverable3Li1: '2 campanhas ativas por mês no Meta Ads.',
        baseDeliverable3Li2: 'Captação local direcionada para o WhatsApp.',
        baseDeliverable3Li3: 'Posicionamento de autoridade por especialidade.',
        baseDeliverable3Li4: 'Segmentação inteligente por cidade, faixa etária e interesse.',
        baseDeliverable4Title: 'Suporte e Estratégia',
        baseDeliverable4Li1: 'Treinamento gravado: como atender no WhatsApp e converter.',
        baseDeliverable4Li2: 'Templates de mensagens para acelerar o atendimento.',
        baseDeliverable4Li3: '1 reunião quinzenal de estratégia com especialista.',
        baseDeliverable5Title: 'Análise de Resultados e ROI',
        baseDeliverable5Li1: 'Relatório de leads, custo por lead e performance.',
        baseDeliverable5Li2: 'Cálculo de ROI realista (investimento vs faturamento).',
        baseDeliverable5Li3: 'Orientação para tomada de decisão sobre campanhas.',

        // Flow
        flowObjective: 'Eleve o nível de captação, conversão e gestão da jornada do paciente. O Flow entrega estrutura, automação e escala para crescer com controle e inteligência.',
        flowTargetTitle: 'Para quem é o plano Flow?',
        flowTargetLi1: 'Dentistas e clínicas que já têm uma presença digital básica estruturada.',
        flowTargetLi2: 'Quem deseja aumentar o volume de pacientes com previsibilidade.',
        flowTargetLi3: 'Profissionais que sentem estar perdendo oportunidades por falta de tempo ou automação.',
        flowTargetLi4: 'Quem precisa organizar o atendimento e mensurar o retorno real com clareza.',
        flowPainsTitle: 'Principais Dores que Resolvemos',
        flowPainsLi1: 'Captação inconsistente: um mês a agenda está cheia, no outro, vazia.',
        flowPainsLi2: 'Baixa conversão: os pacientes chegam pelo marketing, mas não agendam.',
        flowPainsLi3: 'Atendimento confuso, repetitivo e sem padronização.',
        flowPainsLi4: 'Falta de nutrição para leads que não fecham na primeira conversa.',
        flowPainsLi5: 'Produção de conteúdo é uma obrigação cansativa e pouco eficaz.',
        flowDeliverable1Title: 'Rebranding Completo',
        flowDeliverable1Li1: 'Redesenho total da identidade visual do consultório.',
        flowDeliverable1Li2: 'Criação de nova logo, paleta de cores e tipografia.',
        flowDeliverable1Li3: 'Manual de identidade visual profissional (PDF).',
        flowDeliverable2Title: 'Conteúdo e Posicionamento',
        flowDeliverable2Li1: '5 artes por semana produzidas pela DentComm.',
        flowDeliverable2Li2: 'Reavaliação estratégica da identidade visual.',
        flowDeliverable2Li3: 'Textos otimizados para bio, WhatsApp e campanhas.',
        flowDeliverable3Title: 'Campanhas de Tráfego',
        flowDeliverable3Li1: '5 campanhas simultâneas no Meta Ads.',
        flowDeliverable3Li2: '2 campanhas no Google Ads (Pesquisa e YouTube).',
        flowDeliverable3Li3: 'Segmentações otimizadas por comportamento.',
        flowDeliverable4Title: 'CRM e Atendimento Automatizado',
        flowDeliverable4Li1: 'CRM com segmentação por especialidade e origem.',
        flowDeliverable4Li2: 'Automação de WhatsApp (entrada, pré-triagem, lembrete).',
        flowDeliverable4Li3: 'Funil de conversão ajustado por canal.',
        flowDeliverable5Title: 'Nutrição e Reativação',
        flowDeliverable5Li1: '3 campanhas de email marketing mensais.',
        flowDeliverable5Li2: 'Reengajamento de até 1.000 leads da base anterior.',
        flowDeliverable5Li3: 'Disparos segmentados com rastreio.',
        flowDeliverable6Title: 'Inteligência Artificial Ativada',
        flowDeliverable6Li1: 'Implantação de IA do RD Station Marketing.',
        flowDeliverable6Li2: 'Sugestão de títulos de e-mails e segmentação por IA.',
        flowDeliverable6Li3: 'Treinamento para uso da IA nos fluxos de automação.',

        // Core360
        core360Objective: 'Integrar marketing, atendimento, vendas e gestão em um ecossistema digital completo para previsibilidade de agenda e crescimento sustentável.',
        core360TargetTitle: 'Para quem é o plano Core360?',
        core360TargetLi1: 'Clínicas que possuem pelo menos duas especialidades ativas.',
        core360TargetLi2: 'Quem já validou a presença digital e deseja escalar com controle.',
        core360TargetLi3: 'Estruturas com equipe interna ou atendimento terceirizado estruturado.',
        core360TargetLi4: 'Quem precisa de um sistema previsível para gestão comercial e marketing.',
        core360PainsTitle: 'Principais Dores que Resolvemos',
        core360PainsLi1: 'Crescimento desorganizado e que se tornou difícil de escalar.',
        core360PainsLi2: 'Equipe sem um padrão claro de atendimento e conversão.',
        core360PainsLi3: 'Falta de rastreamento do retorno por campanha e por canal.',
        core360PainsLi4: 'ROI baixo por ausência de uma visão integrada das ações de marketing.',
        core360PainsLi5: 'Perda de pacientes por falhas na jornada de nutrição e agendamento.',
        core360Deliverable1Title: 'Integração Total do Ecossistema',
        core360Deliverable1Li1: 'Site institucional + páginas específicas por especialidade.',
        core360Deliverable1Li2: 'Central de agendamento conectada ao CRM e Google Agenda.',
        core360Deliverable1Li3: 'Chatbots com fluxo customizado por especialidade.',
        core360Deliverable2Title: 'Conteúdo Operacional',
        core360Deliverable2Li1: '6 artes por semana, com variação por canal e público.',
        core360Deliverable2Li2: 'Kit complementar de stories, vídeos curtos e formatos interativos.',
        core360Deliverable2Li3: 'Planejamento editorial tático vinculado às campanhas.',
        core360Deliverable3Title: 'CRM Avançado e Automação',
        core360Deliverable3Li1: 'Funis por canal, tipo de paciente, especialidade e origem.',
        core360Deliverable3Li2: 'Automação por comportamento (clicou, agendou, ignorou).',
        core360Deliverable3Li3: 'Histórico completo de cada lead visível no dashboard.',
        core360Deliverable4Title: 'Inteligência Artificial Aplicada',
        core360Deliverable4Li1: 'Pontuação automática de leads com base em comportamento.',
        core360Deliverable4Li2: 'Sugestão de conteúdos e campanhas com base em dados.',
        core360Deliverable4Li3: 'Otimização de horário de envio de campanhas por IA.',
        core360Deliverable5Title: 'Relatórios e Dashboard Executivo',
        core360Deliverable5Li1: 'Relatórios semanais (leads por canal, CPL, taxa de agendamento).',
        core360Deliverable5Li2: 'ROI por especialidade e por campanha.',
        core360Deliverable5Li3: 'Dashboard exclusivo com dados em tempo real.',

        // Fullstack
        fullstackObjective: 'Assumir completamente a operação digital da clínica, da estratégia à execução, para que você tenha escala, qualidade, previsibilidade e, acima de tudo, tempo livre.',
        fullstackTargetTitle: 'Para quem é o plano Fullstack?',
        fullstackTargetLi1: 'Clínicas com múltiplos dentistas, especialidades e recepcionistas.',
        fullstackTargetLi2: 'Dentistas com foco total no atendimento e sem tempo para a operação comercial.',
        fullstackTargetLi3: 'Estruturas que exigem delegação total com confiança e geração de resultados.',
        fullstackTargetLi4: 'Grupos odontológicos que buscam padronização, escala e reputação digital.',
        fullstackPainsTitle: 'Principais Dores que Resolvemos',
        fullstackPainsLi1: 'Falta de tempo para cuidar da área comercial e do marketing.',
        fullstackPainsLi2: 'Inconsistência na agenda entre diferentes profissionais e especialidades.',
        fullstackPainsLi3: 'Atendimento desorganizado e com conversão abaixo do potencial.',
        fullstackPainsLi4: 'Falta de um gestor que "puxe" a operação com foco em resultado.',
        fullstackPainsLi5: 'Crescimento baseado em "achismos", sem dados, controle e clareza de ROI.',
        fullstackDeliverable1Title: 'Operação 100% Gerenciada',
        fullstackDeliverable1Li1: 'DentComm assume toda a rotina de marketing e pré-vendas.',
        fullstackDeliverable1Li2: 'Interação direta com a recepção para feedbacks e alinhamentos.',
        fullstackDeliverable1Li3: 'Consultor exclusivo DentComm dedicado ao seu projeto.',
        fullstackDeliverable2Title: 'Conteúdo e Imagem Premium',
        fullstackDeliverable2Li1: '8 artes por semana (feed, stories, Reels, campanhas).',
        fullstackDeliverable2Li2: 'Vídeos, animações e kits gráficos sob demanda.',
        fullstackDeliverable2Li3: 'Redesign contínuo para ações sazonais e promoções.',
        fullstackDeliverable3Title: 'Performance Máxima de Tráfego',
        fullstackDeliverable3Li1: 'Campanhas ilimitadas no Meta Ads, Google Ads e YouTube.',
        fullstackDeliverable3Li2: 'A/B testing contínuo de criativos, públicos e ofertas.',
        fullstackDeliverable3Li3: 'Gestão de orçamento, escalabilidade e reengajamento automático.',
        fullstackDeliverable4Title: 'CRM + Pré-venda Gerenciada',
        fullstackDeliverable4Li1: 'DentComm assume o gerenciamento de leads no CRM.',
        fullstackDeliverable4Li2: 'Triagem, qualificação e agendamento ativo via WhatsApp ou e-mail.',
        fullstackDeliverable4Li3: 'Comunicação direta e diária com a clínica.',
        fullstackDeliverable5Title: 'Inteligência Estratégica',
        fullstackDeliverable5Li1: 'IA aplicada em toda a jornada do lead (previsão, sugestão, etc.).',
        fullstackDeliverable5Li2: 'Pontuação de leads com rastreamento de comportamento.',
        fullstackDeliverable5Li3: 'Acesso completo à IA do RD Station e relatórios preditivos.',
        fullstackDeliverable6Title: 'Suporte Total à Clínica',
        fullstackDeliverable6Li1: 'Treinamento da equipe interna apenas onde for necessário.',
        fullstackDeliverable6Li2: 'Consultoria de posicionamento comercial e estrutura de atendimento.',
        fullstackDeliverable6Li3: 'Participação da DentComm em reuniões internas da clínica.',
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
        footerAddress: 'Avenida Paulista, 1374 – 16º Piso, Bela Vista, CEP 01310-100 | São Paulo – SP, Brasil',
        footerRights: 'Todos los derechos reservados.',
        footerPrivacy: 'Política de Privacidad',
        footerTerms: 'Términos de Uso',

        // INDEX.HTML
        heroTitle: 'Transforma tu clínica dental en un <span class="display-highlight">referente</span> del mercado',
        heroSubtitle: 'Marketing inteligente, automatización avanzada y estrategias que generan resultados reales. Soluciones premium para dentistas de América Latina que desean crecer de forma sostenible.',
        heroBtn1: 'Conoce nuestras soluciones',
        heroBtn2: 'Calcula tu ROI',
        heroStat1: 'Dentistas atendidos',
        heroStat2: 'Aumento promedio de pacientes',
        heroStat3: 'ROI promedio de los clientes',
        valuesTitle: 'Nuestros <span class="highlight">Valores</span>',
        valuesSubtitle: 'Los pilares que nos hacen únicos en el marketing dental de América Latina.',
        value1Title: 'Resultados Comprobados',
        value1Desc: 'Más de 500 dentistas han transformado sus clínicas con nosotros. ROI promedio de 8x en 6 meses.',
        value2Title: 'Automatización Inteligente',
        value2Desc: 'Sistemas que trabajan 24/7 para captar, nutrir y convertir leads en pacientes reales.',
        value3Title: 'Especialización Dental',
        value3Desc: 'Entendemos las particularidades del mercado odontológico y creamos estrategias específicas.',
        productsShowcaseTitle: 'Soluciones <span class="highlight">a medida</span> para cada momento',
        productsShowcaseSubtitle: 'Desde el dentista que está comenzando en el mundo digital hasta la clínica que busca escalar su operación.',
        baseDesc: 'Ideal para dentistas que quieren comenzar en el marketing digital con una estructura sólida y resultados rápidos.',
        flowDesc: 'Para clínicas que quieren automatizar procesos y escalar la captación de pacientes con inteligencia.',
        core360Desc: 'Solución completa que integra marketing, ventas y gestión en un ecosistema único de crecimiento.',
        fullstackDesc: 'Asumimos el 100% de tu operación digital para que te enfoques exclusivamente en lo que haces mejor: cuidar de los pacientes.',
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

        // QUEM-SOMOS.HTML
        aboutTitle: 'Marketing con <span class="highlight">propósito.</span><br>Crecimiento con <span class="highlight">conciencia.</span>',
        aboutIntroTitle: 'Creemos que todo dentista puede ser más que un profesional de la salud. <span class="text-highlight">Puede ser una marca. Un referente. Un líder.</span>',
        aboutIntroP1: 'Pero para eso, necesita más que marketing bonito: necesita estrategia, claridad y retorno. Somos una agencia de marketing y automatización full service especializada en dentistas de América Latina. Nacimos para transformar la frustración de muchos profesionales en progreso real.',
        aboutIntroP2: 'En DentComm, no prometemos magia. <strong>Prometemos estructura. Rendimiento con posicionamiento.</strong> Ayudamos a los dentistas a crecer con inteligencia, respeto a la ciencia y enfoque en los resultados.',
        aboutResult: 'Más que marketing. <span class="display-highlight">¡Resultado!</span>',
        valueClareza: 'Claridad',
        valueClarezaDesc: 'Comunicación transparente e informes que entiendes.',
        valueResultado: 'Resultado',
        valueResultadoDesc: 'Enfoque total en el rendimiento y crecimiento medible.',
        valueInteligencia: 'Inteligencia',
        valueInteligenciaDesc: 'Estrategias basadas en datos para decisiones asertivas.',
        valueTransformacao: 'Transformación',
        valueTransformacaoDesc: 'Elevamos tu clínica a un nuevo nivel de referencia.',
        valueParceria: 'Asociación',
        valueParceriaDesc: 'Tu éxito es nuestro éxito. Crecemos juntos.',
        valuePerformance: 'Rendimiento',
        valuePerformanceDesc: 'Optimización continua para maximizar tu ROI.',
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
        productBase: 'Base',
        productFlow: 'Flow',
        productCore360: 'Core360',
        productFullstack: 'Fullstack',
        featureSite: 'Sitio web profesional',
        featureGoogle: 'Google Ads',
        featureSocial: 'Redes sociales',
        featureAutomation: 'Automatización de leads',
        featureCRM: 'CRM integrado',
        featureWhatsapp: 'WhatsApp Business',
        featureBI: 'BI y Analytics',
        featureTeam: 'Gestión de equipo',
        featureDedicated: 'Equipo dedicado',
        featureSupport: 'Soporte 24/7',
        baseTagline: 'Esencial',
        flowTagline: 'Automatización',
        core360Tagline: 'Completo',
        fullstackTagline: 'Dedicado',
        badgePopular: 'Más Popular',
        badgePremium: 'Premium',
        btnSeeDetails: 'Ver detalles',
        gridTitle: 'Conoce cada <span class="highlight">solución</span> en detalle',
        badgeBeginner: 'Principiante',
        badgeAdvanced: 'Avanzado',
        priceUponRequest: 'bajo consulta',
        pricePersonalized: 'Personalizado',
        priceFrom: 'Desde',
        pricePeriod: '/mes',
        baseGridObjective: 'La estructura esencial para atraer pacientes, construir autoridad y entender el retorno de sus acciones de forma práctica.',
        flowGridObjective: 'Eleva el nivel de captación, conversión y gestión del viaje del paciente con automatización y escala inteligente.',
        core360GridObjective: 'Integra marketing, atención y gestión en un ecosistema completo para la previsibilidad de la agenda y un crecimiento sostenible.',
        fullstackGridObjective: 'La solución definitiva donde asumimos tu operación digital, desde la estrategia hasta la ejecución, para que te enfoques 100% en tus pacientes.',
        faqTitle: 'Preguntas <span class="highlight">frecuentes</span>',
        faqSubtitle: 'Aclara tus dudas sobre nuestras soluciones de marketing dental.',
        faq1Question: '¿Cuál es la diferencia entre los planes Base y Flow?',
        faq1Answer: 'El plan Base es ideal para dentistas que están comenzando en el marketing digital, ofreciendo los fundamentos: sitio web, Google Ads y redes sociales. El plan Flow agrega automatización completa, CRM integrado y embudos de conversión para aquellos que desean escalar la operación.',
        faq2Question: '¿Cuánto tiempo se tarda en ver los primeros resultados?',
        faq2Answer: 'Los primeros leads comienzan a aparecer entre 15 y 30 días. Los resultados consistentes y un ROI positivo generalmente se logran entre 60 y 90 días, dependiendo del mercado local y la inversión en medios pagados.',
        faq3Question: '¿Trabajan con clínicas de todas las especialidades?',
        faq3Answer: '¡Sí! Atendemos clínicas generales y todas las especialidades: ortodoncia, implantología, estética, endodoncia, periodoncia, cirugía oral y mucho más. Adaptamos la estrategia para cada especialidad.',
        faq4Question: '¿Hay un contrato de permanencia?',
        faq4Answer: 'Trabajamos con contratos de 12 meses para asegurar tiempo suficiente para la implementación y optimización de las estrategias. Esto nos permite entregar los mejores resultados y ROI para tu clínica.',
        faq5Question: '¿La inversión en medios pagados está incluida?',
        faq5Answer: 'No, la inversión en medios pagados (Google Ads, Facebook Ads) es adicional y corre por tu cuenta. Recomendamos una inversión mínima de $300 USD/mes para resultados consistentes. Nosotros gestionamos y optimizamos tus campañas.',
        ctaProductTitle: '¿Aún tienes dudas sobre qué solución elegir?',
        ctaProductSubtitle: 'Agenda una conversación gratuita con nuestros especialistas. Analizaremos tu clínica y te recomendaremos la mejor estrategia para tus objetivos.',

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
        formInvestQuestion: '¿Ya inviertes en marketing digital? *',
        formInvestYes: 'Sí',
        formInvestNo: 'No',
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

        // PÁGINAS DE PRODUTO INDIVIDUAIS
        breadcrumb: '← Volver a todos los productos',
        investmentTitle: 'Inversión',
        adsBudgetText: 'Presupuesto de anuncios:',
        adsBudgetBase: 'USD 200 (sugerido)',
        adsBudgetFlow: 'USD 450 (sugerido)',
        adsBudgetCore360: 'USD 1000 (sugerido)',
        adsBudgetFullstack: 'USD 1500 (sugerido)',
        contractText: 'Contrato mínimo:',
        contractBase: '3 meses',
        contractFlow: '4 meses',
        contractCore360: '6 meses',
        contractFullstack: '6 meses',
        btnTalkToConsultant: 'Hablar con un Consultor',
        deliverablesTitle: 'Lo que <span class="highlight">recibes</span>',
        
        // Base
        baseObjective: 'La estructura esencial para que cualquier dentista atraiga pacientes, construya autoridad y entienda el retorno de sus acciones de forma práctica.',
        baseTargetTitle: '¿Para quién es el plan Base?',
        baseTargetLi1: 'Dentistas que están comenzando o reestructurando su presencia digital.',
        baseTargetLi2: 'Profesionales que desean captar pacientes activamente por WhatsApp.',
        baseTargetLi3: 'Consultorios sin equipo o procesos comerciales bien definidos.',
        baseTargetLi4: 'Quienes necesitan resultados, pero con bajo riesgo y complejidad.',
        basePainsTitle: 'Principales Dolores que Resolvemos',
        basePainsLi1: 'Publica contenido, pero no ve retorno en pacientes.',
        basePainsLi2: 'Siente que pierde pacientes por desorganización en la atención.',
        basePainsLi3: 'Hace "marketing", pero no sabe si realmente da resultado financiero.',
        basePainsLi4: 'No tiene claridad de cómo transformar seguidores en una agenda llena.',
        baseDeliverable1Title: 'Estructura de Captación y Atención',
        baseDeliverable1Li1: 'Landing page por especialidad con prueba social y botón de WhatsApp.',
        baseDeliverable1Li2: 'Formulario de cualificación integrado al CRM.',
        baseDeliverable1Li3: 'Implementación de embudo de ventas con etapas odontológicas personalizadas.',
        baseDeliverable2Title: 'Identidad Digital y Presencia Online',
        baseDeliverable2Li1: 'Creación de logotipo y paleta visual profesional.',
        baseDeliverable2Li2: 'Textos listos para la bio de Instagram y presentación en WhatsApp.',
        baseDeliverable2Li3: 'Kit semanal con 4 artes producidas por DentComm.',
        baseDeliverable2Li4: 'Organización visual inicial del feed y destacados.',
        baseDeliverable3Title: 'Tráfico y Captación de Pacientes',
        baseDeliverable3Li1: '2 campañas activas por mes en Meta Ads.',
        baseDeliverable3Li2: 'Captación local dirigida a WhatsApp.',
        baseDeliverable3Li3: 'Posicionamiento de autoridad por especialidad.',
        baseDeliverable3Li4: 'Segmentación inteligente por ciudad, rango de edad e interés.',
        baseDeliverable4Title: 'Soporte y Estrategia',
        baseDeliverable4Li1: 'Entrenamiento grabado: cómo atender por WhatsApp y convertir.',
        baseDeliverable4Li2: 'Plantillas de mensajes para acelerar la atención.',
        baseDeliverable4Li3: '1 reunión quincenal de estrategia con especialista.',
        baseDeliverable5Title: 'Análisis de Resultados y ROI',
        baseDeliverable5Li1: 'Informe de leads, costo por lead y rendimiento.',
        baseDeliverable5Li2: 'Cálculo de ROI realista (inversión vs facturación).',
        baseDeliverable5Li3: 'Orientación para la toma de decisiones sobre campañas.',

        // Flow
        flowObjective: 'Eleva el nivel de captación, conversión y gestión del viaje del paciente. Flow entrega estructura, automatización y escala para crecer con control e inteligencia.',
        flowTargetTitle: '¿Para quién es el plan Flow?',
        flowTargetLi1: 'Dentistas y clínicas que ya tienen una presencia digital básica estructurada.',
        flowTargetLi2: 'Quienes desean aumentar el volumen de pacientes con previsibilidad.',
        flowTargetLi3: 'Profesionales que sienten que están perdiendo oportunidades por falta de tiempo o automatización.',
        flowTargetLi4: 'Quienes necesitan organizar la atención y medir el retorno real con claridad.',
        flowPainsTitle: 'Principales Dolores que Resolvemos',
        flowPainsLi1: 'Captación inconsistente: un mes la agenda está llena, al otro, vacía.',
        flowPainsLi2: 'Baja conversión: los pacientes llegan por el marketing, pero no agendan.',
        flowPainsLi3: 'Atención confusa, repetitiva y sin estandarización.',
        flowPainsLi4: 'Falta de nutrición para leads que no cierran en la primera conversación.',
        flowPainsLi5: 'La producción de contenido es una obligación agotadora y poco eficaz.',
        flowDeliverable1Title: 'Rebranding Completo',
        flowDeliverable1Li1: 'Rediseño total de la identidad visual del consultorio.',
        flowDeliverable1Li2: 'Creación de nuevo logo, paleta de colores y tipografía.',
        flowDeliverable1Li3: 'Manual de identidad visual profesional (PDF).',
        flowDeliverable2Title: 'Contenido y Posicionamiento',
        flowDeliverable2Li1: '5 artes por semana producidas por DentComm.',
        flowDeliverable2Li2: 'Reevaluación estratégica de la identidad visual.',
        flowDeliverable2Li3: 'Textos optimizados para bio, WhatsApp y campañas.',
        flowDeliverable3Title: 'Campañas de Tráfico',
        flowDeliverable3Li1: '5 campañas simultáneas en Meta Ads.',
        flowDeliverable3Li2: '2 campañas en Google Ads (Búsqueda y YouTube).',
        flowDeliverable3Li3: 'Segmentaciones optimizadas por comportamiento.',
        flowDeliverable4Title: 'CRM y Atención Automatizada',
        flowDeliverable4Li1: 'CRM con segmentación por especialidad y origen.',
        flowDeliverable4Li2: 'Automatización de WhatsApp (entrada, pre-calificación, recordatorio).',
        flowDeliverable4Li3: 'Embudo de conversión ajustado por canal.',
        flowDeliverable5Title: 'Nutrición y Reactivación',
        flowDeliverable5Li1: '3 campañas de email marketing mensuales.',
        flowDeliverable5Li2: 'Reenganche de hasta 1,000 leads de la base anterior.',
        flowDeliverable5Li3: 'Envíos segmentados con seguimiento.',
        flowDeliverable6Title: 'Inteligencia Artificial Activada',
        flowDeliverable6Li1: 'Implementación de IA de RD Station Marketing.',
        flowDeliverable6Li2: 'Sugerencia de títulos de correos y segmentación por IA.',
        flowDeliverable6Li3: 'Entrenamiento para uso de la IA en los flujos de automatización.',

        // Core360
        core360Objective: 'Integrar marketing, atención, ventas y gestión en un ecosistema digital completo para la previsibilidad de la agenda y un crecimiento sostenible.',
        core360TargetTitle: '¿Para quién es el plan Core360?',
        core360TargetLi1: 'Clínicas que tienen al menos dos especialidades activas.',
        core360TargetLi2: 'Quienes ya han validado su presencia digital y desean escalar con control.',
        core360TargetLi3: 'Estructuras con equipo interno o atención tercerizada estructurada.',
        core360TargetLi4: 'Quienes necesitan un sistema predecible para la gestión comercial y de marketing.',
        core360PainsTitle: 'Principales Dolores que Resolvemos',
        core360PainsLi1: 'Crecimiento desorganizado y que se ha vuelto difícil de escalar.',
        core360PainsLi2: 'Equipo sin un estándar claro de atención y conversión.',
        core360PainsLi3: 'Falta de seguimiento del retorno por campaña y por canal.',
        core360PainsLi4: 'Bajo ROI por falta de una visión integrada de las acciones de marketing.',
        core360PainsLi5: 'Pérdida de pacientes por fallas en el viaje de nutrición y agendamiento.',
        core360Deliverable1Title: 'Integración Total del Ecosistema',
        core360Deliverable1Li1: 'Sitio institucional + páginas específicas por especialidad.',
        core360Deliverable1Li2: 'Central de agendamiento conectada al CRM y Google Calendar.',
        core360Deliverable1Li3: 'Chatbots con flujo personalizado por especialidad.',
        core360Deliverable2Title: 'Contenido Operacional',
        core360Deliverable2Li1: '6 artes por semana, con variación por canal y público.',
        core360Deliverable2Li2: 'Kit complementario de stories, videos cortos y formatos interactivos.',
        core360Deliverable2Li3: 'Planificación editorial táctica vinculada a las campañas.',
        core360Deliverable3Title: 'CRM Avanzado y Automatización',
        core360Deliverable3Li1: 'Embudos por canal, tipo de paciente, especialidad y origen.',
        core360Deliverable3Li2: 'Automatización por comportamiento (hizo clic, agendó, ignoró).',
        core360Deliverable3Li3: 'Historial completo de cada lead visible en el dashboard.',
        core360Deliverable4Title: 'Inteligencia Artificial Aplicada',
        core360Deliverable4Li1: 'Puntuación automática de leads basada en comportamiento.',
        core360Deliverable4Li2: 'Sugerencia de contenidos y campañas basada en datos.',
        core360Deliverable4Li3: 'Optimización del horario de envío de campañas por IA.',
        core360Deliverable5Title: 'Informes y Dashboard Ejecutivo',
        core360Deliverable5Li1: 'Informes semanales (leads por canal, CPL, tasa de agendamiento).',
        core360Deliverable5Li2: 'ROI por especialidad y por campaña.',
        core360Deliverable5Li3: 'Dashboard exclusivo con datos en tiempo real.',

        // Fullstack
        fullstackObjective: 'Asumir completamente la operación digital de la clínica, desde la estrategia hasta la ejecución, para que tengas escala, calidad, previsibilidad y, sobre todo, tiempo libre.',
        fullstackTargetTitle: '¿Para quién es el plan Fullstack?',
        fullstackTargetLi1: 'Clínicas con múltiples dentistas, especialidades y recepcionistas.',
        fullstackTargetLi2: 'Dentistas con enfoque total en la atención y sin tiempo para la operación comercial.',
        fullstackTargetLi3: 'Estructuras que requieren delegación total con confianza y generación de resultados.',
        fullstackTargetLi4: 'Grupos odontológicos que buscan estandarización, escala y reputación digital.',
        fullstackPainsTitle: 'Principales Dolores que Resolvemos',
        fullstackPainsLi1: 'Falta de tiempo para ocuparse del área comercial y del marketing.',
        fullstackPainsLi2: 'Inconsistencia en la agenda entre diferentes profesionales y especialidades.',
        fullstackPainsLi3: 'Atención desorganizada y con una conversión por debajo del potencial.',
        fullstackPainsLi4: 'Falta de un gestor que "impulse" la operación con enfoque en resultados.',
        fullstackPainsLi5: 'Crecimiento basado en "suposiciones", sin datos, control y claridad de ROI.',
        fullstackDeliverable1Title: 'Operación 100% Gestionada',
        fullstackDeliverable1Li1: 'DentComm asume toda la rutina de marketing y pre-ventas.',
        fullstackDeliverable1Li2: 'Interacción directa con la recepción para feedbacks y alineaciones.',
        fullstackDeliverable1Li3: 'Consultor exclusivo de DentComm dedicado a tu proyecto.',
        fullstackDeliverable2Title: 'Contenido e Imagen Premium',
        fullstackDeliverable2Li1: '8 artes por semana (feed, stories, Reels, campañas).',
        fullstackDeliverable2Li2: 'Videos, animaciones y kits gráficos bajo demanda.',
        fullstackDeliverable2Li3: 'Rediseño continuo para acciones estacionales y promociones.',
        fullstackDeliverable3Title: 'Rendimiento Máximo de Tráfico',
        fullstackDeliverable3Li1: 'Campañas ilimitadas en Meta Ads, Google Ads y YouTube.',
        fullstackDeliverable3Li2: 'Pruebas A/B continuas de creativos, públicos y ofertas.',
        fullstackDeliverable3Li3: 'Gestión de presupuesto, escalabilidad y reenganche automático.',
        fullstackDeliverable4Title: 'CRM + Pre-venta Gestionada',
        fullstackDeliverable4Li1: 'DentComm asume la gestión de leads en el CRM.',
        fullstackDeliverable4Li2: 'Clasificación, cualificación y agendamiento activo por WhatsApp o correo electrónico.',
        fullstackDeliverable4Li3: 'Comunicación directa y diaria con la clínica.',
        fullstackDeliverable5Title: 'Inteligencia Estratégica',
        fullstackDeliverable5Li1: 'IA aplicada en todo el viaje del lead (predicción, sugerencia, etc.).',
        fullstackDeliverable5Li2: 'Puntuación de leads con seguimiento de comportamiento.',
        fullstackDeliverable5Li3: 'Acceso completo a la IA de RD Station e informes predictivos.',
        fullstackDeliverable6Title: 'Soporte Total a la Clínica',
        fullstackDeliverable6Li1: 'Entrenamiento del equipo interno solo donde sea necesario.',
        fullstackDeliverable6Li2: 'Consultoría de posicionamiento comercial y estructura de atención.',
        fullstackDeliverable6Li3: 'Participación de DentComm en reuniones internas de la clínica.',
    }
};


/**
 * Aplica as traduções e a troca de moeda.
 * @param {string} lang - O idioma a ser aplicado ('pt' ou 'es').
 */
function setLanguage(lang) {
    document.documentElement.lang = lang;
    
    // 1. Tradução de texto via data-key
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

    // 2. Troca de Moeda
    const BRL_TO_USD_RATE = 5.4; // Taxa de conversão atualizada
    const priceElements = document.querySelectorAll('[data-price-brl]');

    priceElements.forEach(el => {
        const priceBRL = parseFloat(el.getAttribute('data-price-brl'));
        if (isNaN(priceBRL)) return;

        let newPriceHTML = '';
        const fromText = translations[lang].priceFrom || (lang === 'es' ? 'Desde' : 'A partir de');
        const periodText = translations[lang].pricePeriod || '/mes';

        if (lang === 'es') {
            const priceUSD = Math.round(priceBRL / BRL_TO_USD_RATE);
            if (el.classList.contains('investment-card__price')) {
                 newPriceHTML = `${fromText} <strong>$${priceUSD.toLocaleString('en-US')}</strong> ${periodText}`;
            } else if (el.classList.contains('price')) { // Para a tabela de comparação
                 newPriceHTML = `$${priceUSD.toLocaleString('en-US')}${periodText}`;
            }
             else {
                newPriceHTML = `<span class="price-value">$${priceUSD.toLocaleString('en-US')}</span><span class="price-period">${periodText}</span>`;
            }
        } else {
            const formattedBRL = priceBRL.toLocaleString('pt-BR');
             if (el.classList.contains('investment-card__price')) {
                 newPriceHTML = `${fromText} <strong>R$ ${formattedBRL}</strong> ${periodText}`;
            } else if (el.classList.contains('price')) { // Para a tabela de comparação
                 newPriceHTML = `R$ ${formattedBRL}${periodText}`;
            }
            else {
                 newPriceHTML = `<span class="price-value">R$ ${formattedBRL}</span><span class="price-period">${periodText}</span>`;
            }
        }
        el.innerHTML = newPriceHTML;
    });
     // Lida com o preço "Sob Consulta"
    const personalizedPriceElements = document.querySelectorAll('[data-key="pricePersonalized"]');
    personalizedPriceElements.forEach(el => {
        const parent = el.parentElement;
        if(parent.querySelector('[data-key="priceUponRequest"]')) {
            if (lang === 'es') {
                el.innerHTML = translations.es.pricePersonalized;
                parent.querySelector('[data-key="priceUponRequest"]').innerHTML = translations.es.priceUponRequest;
            } else {
                el.innerHTML = translations.pt.pricePersonalized;
                parent.querySelector('[data-key="priceUponRequest"]').innerHTML = translations.pt.priceUponRequest;
            }
        }
    });


    // 3. Ajuste da Calculadora de ROI e outros textos dependentes de moeda
    const ticketLabel = document.querySelector('[data-key="roiInputTicket"]');
    const budgetLabel = document.querySelector('[data-key="roiInputBudget"]');
    if (ticketLabel && budgetLabel) {
        ticketLabel.innerHTML = translations[lang].roiInputTicket;
        budgetLabel.innerHTML = translations[lang].roiInputBudget;
    }
}

/**
 * Inicializa o seletor de idiomas.
 */
function initLanguageSwitcher() {
    const langSwitcherBtn = document.getElementById('lang-switcher-btn');
    if (!langSwitcherBtn) return;

    let currentLang = localStorage.getItem('language') || 'pt';

    const updateButtonFlag = (lang) => {
        langSwitcherBtn.innerHTML = lang === 'es' ? '🇪🇸' : '🇧🇷';
    };
    
    // Set initial state
    setLanguage(currentLang);
    updateButtonFlag(currentLang);

    langSwitcherBtn.addEventListener('click', () => {
        // Toggle language
        currentLang = currentLang === 'pt' ? 'es' : 'pt';
        localStorage.setItem('language', currentLang);
        
        // Update UI
        setLanguage(currentLang);
        updateButtonFlag(currentLang);
    });
}

/**
 * Inicializa o toggle de tema claro/escuro.
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
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
    const specialtySelect = document.getElementById('specialty');
    const revenueSelect = document.getElementById('monthly-revenue');
    const investsRadioGroup = document.querySelectorAll('input[name="invests"]');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');

    const validateField = (input, validationFn, errorMessage) => {
        const formGroup = input.closest('.form-group, .form-group-radio');
        const errorSpan = formGroup.querySelector('.error-message');
        if (!formGroup || !errorSpan) return true;

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

    const validateRadio = (radioGroup) => {
        for (const radio of radioGroup) {
            if (radio.checked) return true;
        }
        return false;
    };
    
    const validateName = (name) => name.trim() !== '';
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
    const validatePhone = (phone) => /^\+?[0-9\s-()]{10,15}$/.test(phone.replace(/\D/g, ''));
    const validateSelect = (value) => value.trim() !== '';

    const errorMessages = {
        pt: { 
            name: 'O nome é obrigatório.', 
            email: 'Por favor, insira um e-mail válido.', 
            phone: 'Insira um telefone válido com DDD.',
            select: 'Por favor, selecione uma opção.',
            radio: 'Por favor, selecione uma opção.'
        },
        es: { 
            name: 'El nombre es obligatorio.', 
            email: 'Por favor, ingrese un e-mail válido.', 
            phone: 'Ingrese un teléfono válido con código de área.',
            select: 'Por favor, seleccione una opción.',
            radio: 'Por favor, seleccione una opción.'
        }
    };

    const getErrorMessage = (field) => {
        const currentLang = localStorage.getItem('language') || 'pt';
        return errorMessages[currentLang][field];
    }
    
    nameInput.addEventListener('input', () => validateField(nameInput, validateName, getErrorMessage('name')));
    emailInput.addEventListener('input', () => validateField(emailInput, validateEmail, getErrorMessage('email')));
    phoneInput.addEventListener('input', () => validateField(phoneInput, validatePhone, getErrorMessage('phone')));
    specialtySelect.addEventListener('change', () => validateField(specialtySelect, validateSelect, getErrorMessage('select')));
    revenueSelect.addEventListener('change', () => validateField(revenueSelect, validateSelect, getErrorMessage('select')));
    investsRadioGroup.forEach(radio => radio.addEventListener('change', () => {
        const formGroup = radio.closest('.form-group-radio');
        const errorSpan = formGroup.querySelector('.error-message');
        if (validateRadio(investsRadioGroup)) {
            errorSpan.textContent = '';
        }
    }));

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isNameValid = validateField(nameInput, validateName, getErrorMessage('name'));
        const isEmailValid = validateField(emailInput, validateEmail, getErrorMessage('email'));
        const isPhoneValid = validateField(phoneInput, validatePhone, getErrorMessage('phone'));
        const isSpecialtyValid = validateField(specialtySelect, validateSelect, getErrorMessage('select'));
        const isRevenueValid = validateField(revenueSelect, validateSelect, getErrorMessage('select'));
        
        let isInvestsValid = validateRadio(investsRadioGroup);
        if (!isInvestsValid) {
            const formGroup = investsRadioGroup[0].closest('.form-group-radio');
            const errorSpan = formGroup.querySelector('.error-message');
            errorSpan.textContent = getErrorMessage('radio');
        }

        if (isNameValid && isEmailValid && isPhoneValid && isSpecialtyValid && isRevenueValid && isInvestsValid) {
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
 * Inicializa o carregamento lazy de imagens e vídeos.
 */
function initLazyLoading() {
    const lazyMedia = document.querySelectorAll('img[data-src], video[data-src]');
    
    if ('IntersectionObserver' in window) {
        const mediaObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const media = entry.target;
                    media.src = media.dataset.src;
                    media.removeAttribute('data-src');
                    media.classList.remove('lazy');
                    observer.unobserve(media);
                }
            });
        });
        lazyMedia.forEach(media => mediaObserver.observe(media));
    } else { // Fallback para browsers antigos
        lazyMedia.forEach(media => {
            media.src = media.dataset.src;
            media.removeAttribute('data-src');
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
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (!question || !answer) return;

        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // Fecha todos os outros
            faqItems.forEach(otherItem => {
                if(otherItem !== item) {
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                }
            });

            // Abre ou fecha o item clicado
            if (isExpanded) {
                question.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = '0';
            } else {
                question.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
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

    const navBtns = document.querySelectorAll('.testimonial-nav-btn');
    const testimonials = document.querySelectorAll('.testimonials__slider .testimonial-card');
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
        setTimeout(() => testimonials[index].classList.add('active'), 10); // Pequeno delay para a animação
        navBtns[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % testimonials.length;
        showSlide(nextIndex);
    }
    
    function startInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 7000);
    }

    navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            showSlide(index);
            startInterval();
        });
    });

    showSlide(0);
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
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}