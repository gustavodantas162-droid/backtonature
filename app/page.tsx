"use client";

import { useRef, useState } from "react";

const CHECKOUT_HREF = "https://pay.cakto.com.br/36xkx9j_1059298";

const journey = [
  { range: "DIAS 1–3", title: "Arrume o terreno", text: "Você organiza a cozinha, entende a proposta e prepara uma rotina que caiba na sua vida." },
  { range: "DIAS 4–7", title: "Monte sua base", text: "Aprende o que priorizar, como comprar e como montar refeições simples de comida de verdade." },
  { range: "DIAS 8–14", title: "Faça virar rotina", text: "Aplica o plano nos dias normais, nos dias corridos e ajusta o que não funcionou na prática." },
  { range: "DIAS 15–21", title: "Ganhe autonomia", text: "Consolida os hábitos, lê melhor os sinais do corpo e termina com um caminho claro para continuar." },
];

const inside = [
  { eyebrow: "O CAMINHO", title: "Desafio Selva — 21 Dias", text: "Uma jornada diária, curta e progressiva. Você sabe o que fazer hoje sem precisar entender tudo de uma vez.", image: "/images/material-plano-pratica.png" },
  { eyebrow: "A BASE", title: "Plano Selva completo", text: "Seis módulos para entender o sistema alimentar, escolher sua base e construir uma rotina mais natural.", image: "/images/module-03-base-alimentacao.png" },
  { eyebrow: "O AMBIENTE", title: "Comunidade da Selva", text: "Um espaço para dúvidas, trocas e acompanhamento durante o desafio, ao lado de quem está no mesmo processo.", image: "/images/comunidade-selva-cover.png" },
];

const modules = [
  { tag: "MÓDULO 01", title: "O sistema alimentar", image: "/images/module-01-sistema-alimentar.png" },
  { tag: "MÓDULO 02", title: "Entendendo a Selva", image: "/images/module-02-entendendo-selva.png" },
  { tag: "MÓDULO 03", title: "A base da alimentação", image: "/images/module-03-base-alimentacao.png" },
  { tag: "MÓDULO 04", title: "Desenvolvendo a intuição", image: "/images/module-04-intuicao.png" },
  { tag: "MÓDULO 05", title: "Construindo sua Selva", image: "/images/module-05-construindo-selva.png" },
  { tag: "MÓDULO 06", title: "Selva + performance", image: "/images/module-06-performance.png" },
];

const deliverables = [
  ["01", "Plano Selva completo", "Os fundamentos organizados em seis módulos, com mapas e materiais de apoio."],
  ["02", "Jornada diária de 21 dias", "Um próximo passo por dia para tirar o plano do papel."],
  ["03", "Lista de compras", "Uma referência simples para chegar ao mercado sabendo o que procurar."],
  ["04", "Modelos de refeições", "Combinações práticas para montar seus pratos sem cardápio engessado."],
  ["05", "Guia de preparação", "Como deixar a base pronta e reduzir decisões durante a semana."],
  ["06", "Checklists de progresso", "Marque o que fez, perceba o que mudou e mantenha o ritmo."],
  ["07", "Comunidade e encontros", "Acompanhamento coletivo e encontros semanais durante a jornada."],
];

const faqs = [
  ["O que é o Desafio Selva 21 Dias?", "É uma jornada prática para organizar sua alimentação e construir uma rotina de comida de verdade em 21 dias. Você recebe uma direção por dia, materiais de apoio e acesso à comunidade durante o desafio."],
  ["Preciso seguir um cardápio rígido?", "Não. Você recebe modelos de refeições e uma base de alimentos para adaptar à sua fome, rotina e disponibilidade. A proposta é dar direção sem transformar sua vida numa planilha."],
  ["O Plano Selva está incluído?", "Sim. O Plano Selva completo, com seis módulos, mapas e materiais de apoio, faz parte desta oferta."],
  ["Como funcionam a comunidade e os encontros?", "Durante o desafio, a comunidade é o ponto de troca e acompanhamento. O calendário e as orientações dos encontros semanais são publicados lá dentro."],
  ["É assinatura?", "Não. Esta compra é um pagamento único de R$ 47,00. Qualquer opção de continuidade na comunidade será apresentada separadamente, sem cobrança automática nesta compra."],
  ["Como recebo o acesso?", "Assim que o pagamento for confirmado, as instruções de acesso são enviadas para o e-mail informado no checkout. Use um e-mail que você consulta."],
  ["E se eu entrar e não gostar?", "Você tem 7 dias de garantia. Dentro desse prazo, pode solicitar o reembolso conforme as condições informadas no checkout."],
];

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <a className={`cta ${className}`} href={CHECKOUT_HREF}><span>{children}</span><b aria-hidden="true">COMEÇAR →</b></a>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const modulesRef = useRef<HTMLDivElement>(null);
  const moveModules = (direction: number) => {
    const carousel = modulesRef.current;
    if (carousel) carousel.scrollBy({ left: Math.min(carousel.clientWidth * 0.82, 390) * direction, behavior: "smooth" });
  };

  return (
    <main id="top">
      <header className="site-header page-width">
        <a className="brand" href="#top" aria-label="Desafio Selva — início"><span className="brand-mark">DS</span><span>DESAFIO SELVA <small>21 DIAS</small></span></a>
        <a className="header-cta" href={CHECKOUT_HREF}>COMEÇAR O DESAFIO</a>
      </header>

      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="kicker">PLANO DIÁRIO • COMIDA DE VERDADE • 21 DIAS</span>
          <h1 id="hero-title">Reconstrua sua rotina de alimentação em <em>21 dias</em> com o Plano Selva.</h1>
          <p>Receba um plano diário, lista de compras, modelos de refeições, encontros semanais e acompanhamento para colocar a Dieta da Selva em prática.</p>
          <CTA>QUERO COMEÇAR O DESAFIO</CTA>
          <div className="trust-line"><span>Pagamento único</span><span>Acesso imediato após confirmação</span><span>7 dias de garantia</span></div>
        </div>
        <figure className="hero-visual">
          <img src="/images/ryan-plano-selva-hero.png" alt="Ryan Stevan apresentando o Plano Selva" width="1254" height="1254" />
          <figcaption><strong>21</strong><span>dias para sair<br />do improviso</span></figcaption>
        </figure>
      </section>

      <section className="clarity-strip page-width" aria-label="Resumo da oferta">
        <div><strong>1 tarefa por dia</strong><span>curta e aplicável</span></div><div><strong>Comida de verdade</strong><span>sem cardápio impossível</span></div><div><strong>R$ 47,00</strong><span>pagamento único</span></div>
      </section>

      <section className="section intro-section page-width" aria-labelledby="intro-title">
        <div className="section-label">01 — O DESAFIO</div>
        <div className="section-split"><h2 id="intro-title">Você não precisa de mais uma dieta para salvar. Precisa saber <em>o que fazer amanhã.</em></h2><div className="body-copy"><p>O problema não é falta de informação. É tentar mudar tudo de uma vez, sem uma sequência e sem saber se está no caminho certo.</p><p><strong>O Desafio Selva transforma o Plano Selva em uma jornada de 21 dias:</strong> uma tarefa por vez, uma refeição por vez, uma rotina possível de sustentar.</p></div></div>
      </section>

      <section className="friction-section page-width" aria-labelledby="friction-title">
        <div className="friction-heading"><span className="section-label light">02 — PARA QUEM É</span><h2 id="friction-title">Se a alimentação sempre desanda na vida real, <em>comece pela vida real.</em></h2></div>
        <div className="friction-grid">
          <article><span>01</span><h3>Você sabe o básico, mas trava na hora de aplicar</h3><p>Compra sem plano, improvisa com fome e termina a semana de volta ao mesmo ponto.</p></article>
          <article><span>02</span><h3>Sua rotina é corrida</h3><p>Você precisa de opções simples para o mercado, o trabalho e os dias em que cozinhar parece impossível.</p></article>
          <article><span>03</span><h3>Já tentou recomeçar várias vezes</h3><p>Não quer outra promessa extrema. Quer uma sequência clara para finalmente criar ritmo.</p></article>
          <article><span>04</span><h3>Quer comer melhor sem viver contando tudo</h3><p>Procura princípios práticos, comida reconhecível e mais autonomia nas escolhas.</p></article>
        </div><CTA>QUERO UMA ROTINA POSSÍVEL</CTA>
      </section>

      <section className="section journey-section page-width" aria-labelledby="journey-title">
        <div className="section-label">03 — OS 21 DIAS</div>
        <div className="journey-heading"><h2 id="journey-title">Um começo, um meio e um fim. <em>Sem se perder no caminho.</em></h2><p>Você não recebe uma pilha de aulas e um “boa sorte”. A jornada avança por etapas para transformar entendimento em rotina.</p></div>
        <div className="journey-list">{journey.map((step, index) => <article key={step.range}><div className="journey-number">0{index + 1}</div><span>{step.range}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </section>

      <section className="inside-section page-width" aria-labelledby="inside-title">
        <div className="inside-heading"><span className="section-label light">04 — POR DENTRO</span><h2 id="inside-title">Tudo começa disponível na sua <em>área de membros.</em></h2><p>O desafio, o método e o ambiente de apoio ficam organizados no mesmo lugar.</p></div>
        <div className="inside-grid">{inside.map((item) => <article key={item.title}><div className="inside-image"><img loading="lazy" src={item.image} alt={`Prévia de ${item.title}`} width="941" height="1672" /></div><div><span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        <div className="modules-heading"><div><span>PLANO SELVA</span><h3>Os seis módulos da base</h3></div><div><button type="button" onClick={() => moveModules(-1)} aria-label="Módulo anterior">←</button><button type="button" onClick={() => moveModules(1)} aria-label="Próximo módulo">→</button></div></div>
        <div className="modules-carousel" ref={modulesRef} aria-label="Módulos do Plano Selva">{modules.map((module) => <article key={module.title}><img loading="lazy" src={module.image} alt={`Capa: ${module.title}`} width="941" height="1672" /><div><span>{module.tag}</span><h3>{module.title}</h3></div></article>)}</div>
      </section>

      <section className="section deliverables-section page-width" aria-labelledby="deliverables-title">
        <div className="section-label">05 — O QUE VOCÊ RECEBE</div>
        <div className="deliverables-heading"><h2 id="deliverables-title">Não é só conteúdo. É a estrutura para <em>passar 21 dias fazendo.</em></h2><p>Da primeira compra no mercado ao fechamento do desafio, cada material tem uma função na sua rotina.</p></div>
        <div className="deliverables-list">{deliverables.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="transformation-section page-width" aria-labelledby="transformation-title">
        <div className="transformation-copy"><span className="section-label light">06 — DE ONDE VEIO O MÉTODO</span><h2 id="transformation-title">O desafio organiza os princípios que Ryan aplicou na <em>própria mudança.</em></h2><p>Antes de ensinar esse caminho, Ryan Stevan também viveu preso à alimentação convencional e a uma rotina que não mostrava o potencial do próprio corpo.</p><p>A mudança veio ao reorganizar a base: comida de verdade, treino, repetição e escolhas que cabiam no dia a dia.</p><strong>O Desafio Selva não promete copiar o corpo de outra pessoa. Ele entrega a sequência para você começar a construir a sua própria rotina.</strong></div>
        <div className="before-after"><figure><img loading="lazy" src="/images/expert-before-01.jpg" alt="Ryan antes de reorganizar sua alimentação" width="1200" height="1600" /><figcaption>ANTES <span>sem uma base organizada</span></figcaption></figure><figure><img loading="lazy" src="/images/expert-after-main.png" alt="Ryan após aplicar os princípios do Plano Selva" width="591" height="1280" /><figcaption>DEPOIS <span>comida, treino e constância</span></figcaption></figure></div>
      </section>

      <section className="community-section page-width" aria-labelledby="community-title">
        <div className="community-photo"><img loading="lazy" src="/images/material-team-selva.png" alt="Arte da Comunidade da Selva" width="941" height="1672" /></div>
        <div className="community-copy"><span className="section-label light">07 — VOCÊ NÃO CAMINHA SOZINHO</span><h2 id="community-title">A comunidade segura o processo quando a motivação oscila.</h2><p>Durante o desafio, você entra num ambiente criado para trocar experiências, tirar dúvidas e acompanhar os encontros semanais.</p><ul><li>Compartilhe o que funcionou.</li><li>Aprenda com as dúvidas de quem está na mesma jornada.</li><li>Receba o calendário e as orientações dos encontros.</li></ul><CTA>QUERO ENTRAR NO DESAFIO</CTA></div>
      </section>

      <section className="offer-section page-width" id="oferta" aria-labelledby="offer-title">
        <div className="offer-copy"><span className="section-label light">08 — SUA ENTRADA NA SELVA</span><h2 id="offer-title">21 dias para parar de improvisar sua alimentação.</h2><ul><li>Desafio diário de 21 dias</li><li>Plano Selva completo</li><li>Lista de compras e modelos de refeições</li><li>Guia de preparação e checklists</li><li>Comunidade e encontros semanais</li></ul></div>
        <div className="price-card"><span>PAGAMENTO ÚNICO</span><p>Todo o Desafio Selva 21 Dias por</p><div className="price"><small>R$</small><strong>47</strong><small>,00</small></div><CTA>QUERO COMEÇAR AGORA</CTA><p className="price-note">Compra única. Sem cobrança recorrente nesta oferta.</p><div className="guarantee"><strong>7 DIAS DE GARANTIA</strong><span>Entre, conheça e decida com calma.</span></div></div>
      </section>

      <section className="section faq-section page-width" aria-labelledby="faq-title">
        <div className="faq-heading"><span className="section-label">09 — DÚVIDAS FREQUENTES</span><h2 id="faq-title">Leia antes de <em>começar.</em></h2></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => { const isOpen = openFaq === index; return <article className={`faq-item ${isOpen ? "open" : ""}`} key={question}><button id={`faq-question-${index}`} type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}><span>{question}</span><i aria-hidden="true">{isOpen ? "−" : "+"}</i></button><div id={`faq-answer-${index}`} className="faq-answer" role="region" aria-labelledby={`faq-question-${index}`} hidden={!isOpen}><p>{answer}</p></div></article>; })}</div>
      </section>

      <section className="final-section page-width" aria-labelledby="final-title"><span className="section-label light">10 — DIA UM</span><h2 id="final-title">Sua rotina não precisa estar perfeita para começar. <em>Ela começa a mudar quando você sabe o próximo passo.</em></h2><CTA>QUERO COMEÇAR O DESAFIO</CTA><p>Pagamento único de R$ 47,00 • 7 dias de garantia</p></section>

      <footer className="site-footer page-width"><a className="brand" href="#top"><span className="brand-mark">DS</span><span>DESAFIO SELVA <small>21 DIAS</small></span></a><p>© {new Date().getFullYear()} Desafio Selva. Todos os direitos reservados.</p><small>Conteúdo educacional. Resultados variam conforme contexto, rotina e aplicação individual.</small></footer>
    </main>
  );
}
