"use client";

import { useState } from "react";

const CHECKOUT_HREF = "https://pay.cakto.com.br/36xkx9j_1059298";

const situations = [
  ["A semana começa sem nada preparado", "Use a lista de compras e deixe a base pronta."],
  ["A fome aperta e você decide no impulso", "Abra um modelo de refeição e monte o prato."],
  ["O dia ficou corrido demais para cozinhar", "Escolha uma das opções para dias corridos."],
  ["Você saiu do plano em uma refeição", "Retome na próxima. Sem esperar outra segunda-feira."],
  ["Bate dúvida sobre o que comer", "Leve a pergunta para a comunidade e continue a jornada."],
  ["A motivação caiu no meio do caminho", "Volte ao checklist e enxergue o progresso que já fez."],
];

const inside = [
  {
    number: "01 / 04",
    kicker: "SEU PRÓXIMO PASSO JÁ VEM DEFINIDO",
    title: "Jornada diária de 21 dias",
    text: "Você entra sabendo por onde começar. O desafio organiza as ações em uma sequência curta e progressiva para não tentar mudar tudo de uma vez.",
    image: "/images/plano-selva-21-dias-cover.png",
    tag: "23 páginas na área de membros",
  },
  {
    number: "02 / 04",
    kicker: "A BASE PARA ENTENDER O QUE ESTÁ FAZENDO",
    title: "Plano Selva completo",
    text: "Seis módulos sobre sistema alimentar, alimentação natural, intuição, rotina e performance. Você entende o princípio e aplica no desafio.",
    image: "/images/module-03-base-alimentacao.png",
    tag: "6 módulos + mapas práticos",
  },
  {
    number: "03 / 04",
    kicker: "MENOS DECISÕES NA HORA DA FOME",
    title: "Compras, preparo e refeições",
    text: "Lista de compras, guia de preparação e modelos de refeições para você abrir e usar no mercado, na cozinha e nos dias corridos.",
    image: "/images/selva-food-04.jpg",
    tag: "Materiais feitos para consultar",
  },
  {
    number: "04 / 04",
    kicker: "UM AMBIENTE PARA NÃO FAZER TUDO SOZINHO",
    title: "Comunidade da Selva e encontros",
    text: "Compartilhe o processo, leve suas dúvidas e acompanhe os encontros semanais. O calendário e as orientações ficam disponíveis lá dentro.",
    image: "/images/comunidade-selva-cover.png",
    tag: "Acompanhamento durante o desafio",
  },
];

const comparisons = [
  ["O que fazer hoje", "Tentar lembrar de tudo", "Uma tarefa curta e definida"],
  ["Compras da semana", "Escolher com fome no mercado", "Lista de compras como referência"],
  ["Montar as refeições", "Improvisar toda vez", "Modelos simples para adaptar"],
  ["Quando o dia sai do plano", "Desistir e recomeçar depois", "Ajustar e continuar no próximo passo"],
  ["Acompanhar o progresso", "Depender da memória e motivação", "Checklist ao longo dos 21 dias"],
];

const faqs = [
  ["O que é o Desafio Selva 21 Dias?", "É uma jornada prática para organizar sua alimentação e construir uma rotina de comida de verdade em 21 dias. Você recebe uma direção por dia, materiais de apoio e acesso à comunidade durante o desafio."],
  ["Preciso seguir um cardápio rígido?", "Não. Você recebe modelos de refeições e uma base de alimentos para adaptar à sua fome, rotina e disponibilidade. A proposta é dar direção sem transformar sua vida numa planilha."],
  ["O Plano Selva está incluído?", "Sim. O Plano Selva completo, com seis módulos, mapas e materiais de apoio, faz parte desta oferta."],
  ["Como funcionam a comunidade e os encontros?", "Durante o desafio, a comunidade é o ponto de troca e acompanhamento. O calendário e as orientações dos encontros semanais são publicados lá dentro."],
  ["É assinatura?", "Não. Esta compra é um pagamento único de R$ 47,00. Qualquer opção de continuidade na comunidade será apresentada separadamente, sem cobrança automática nesta compra."],
  ["Como recebo o acesso?", "Assim que o pagamento for confirmado, as instruções são enviadas para o e-mail informado no checkout. Use um e-mail que você consulta."],
  ["E se eu entrar e não gostar?", "Você tem 7 dias de garantia. Dentro desse prazo, pode solicitar o reembolso conforme as condições informadas no checkout."],
];

function CTA({ children, green = false }: { children: React.ReactNode; green?: boolean }) {
  return (
    <a className={`cta ${green ? "cta-green" : ""}`} href={CHECKOUT_HREF}>
      <span>{children}</span><b aria-hidden="true">›</b>
    </a>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main id="top">
      <header className="topbar">
        <div className="topbar-inner">
          <span><i /> PLANO SELVA • DESAFIO DE 21 DIAS</span>
          <a href={CHECKOUT_HREF}>COMEÇAR <b>›</b></a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <span className="eyebrow">UM PLANO PARA COLOCAR EM PRÁTICA</span>
          <h1 id="hero-title">Reconstrua sua rotina de alimentação em <em>21 dias</em> com o Plano Selva.</h1>
          <p>Plano diário, lista de compras, modelos de refeições, encontros semanais e acompanhamento para você sair do improviso e construir uma rotina de comida de verdade.</p>
          <figure className="product-cover">
            <img src="/images/plano-selva-21-dias-cover.png" alt="Capa do Plano Selva 21 Dias" width="1254" height="1254" />
          </figure>
          <CTA>QUERO COMEÇAR O DESAFIO</CTA>
          <small>Pagamento único de R$ 47,00 • acesso após a confirmação • 7 dias de garantia</small>
        </div>
      </section>

      <section className="proof-section section-gray" aria-labelledby="proof-title">
        <div className="narrow">
          <span className="eyebrow mint">A EXPERIÊNCIA QUE DEU ORIGEM AO MÉTODO</span>
          <h2 id="proof-title">A transformação do Ryan</h2>
          <p className="section-intro">O desafio organiza, em 21 dias, os princípios que Ryan Stevan aplicou na própria mudança: comida de verdade, treino, repetição e ajustes que cabem na vida real.</p>
          <div className="proof-tabs"><span className="active">ANTES &amp; DEPOIS <b>3</b></span><span>ROTINA E ALIMENTAÇÃO <b>2</b></span></div>
          <div className="proof-cards">
            <article className="proof-card comparison-card">
              <div><img src="/images/expert-before-01.jpg" alt="Ryan antes de reorganizar sua alimentação" width="1200" height="1600" /><span>ANTES</span></div>
              <div><img src="/images/expert-after-main.png" alt="Ryan depois de aplicar os princípios do Plano Selva" width="591" height="1280" /><span>DEPOIS</span></div>
              <footer><strong>UMA BASE REORGANIZADA</strong><small>Alimentação, treino e constância</small></footer>
            </article>
            <article className="proof-card">
              <img src="/images/expert-after-01.jpg" alt="Ryan após sua mudança de rotina" width="738" height="1600" />
              <footer><strong>O MÉTODO NASCEU DA PRÁTICA</strong><small>Não de uma promessa inventada</small></footer>
            </article>
            <article className="proof-card">
              <img src="/images/selva-food-04.jpg" alt="Prato de comida de verdade" width="738" height="1600" />
              <footer><strong>COMIDA QUE CABE NA ROTINA</strong><small>Simples, reconhecível e possível</small></footer>
            </article>
          </div>
          <p className="proof-note">A história do Ryan é a origem do método, não uma garantia de resultado individual.</p>
        </div>
      </section>

      <section className="problems-section" aria-labelledby="problems-title">
        <div className="problem-box">
          <span className="eyebrow">QUANDO A VIDA SAI DO PLANO</span>
          <h2 id="problems-title">Onde a alimentação normalmente desanda</h2>
          <p>Não é na teoria. É no espaço entre a dúvida e a próxima decisão. O desafio existe para reduzir esse espaço.</p>
          <div className="situations-grid">
            {situations.map(([problem, answer], index) => (
              <article key={problem}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{problem}</strong><p>{answer}</p></div></article>
            ))}
          </div>
          <strong className="problem-close">Você não precisa acertar 21 dias perfeitos. Precisa ter um próximo passo quando a rotina apertar.</strong>
          <CTA green>COMEÇAR O DESAFIO</CTA>
        </div>
      </section>

      <section className="inside-section section-gray" aria-labelledby="inside-title">
        <div className="narrow inside-heading">
          <span className="eyebrow mint">O QUE PASSA A EXISTIR NO SEU DIA</span>
          <h2 id="inside-title">Como é o Desafio Selva por dentro?</h2>
          <p className="section-intro">Não é um monte de arquivos soltos. Cada parte entra para tirar uma decisão da sua frente e colocar a jornada em movimento.</p>
        </div>
        <div className="inside-stack">
          {inside.map((item, index) => (
            <article className={`inside-card ${index % 2 ? "reverse" : ""}`} key={item.title}>
              <div className="inside-visual"><img loading="lazy" src={item.image} alt={`Prévia de ${item.title}`} width="941" height="1672" /></div>
              <div className="inside-copy">
                <span>{item.number}</span>
                <small>{item.kicker}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <b>● {item.tag}</b>
              </div>
            </article>
          ))}
        </div>
        <div className="included-box"><span className="eyebrow mint">TUDO DISPONÍVEL DEPOIS DA COMPRA</span><h3>O caminho, os materiais e o ambiente para atravessar os 21 dias.</h3><p>Você entra, abre o primeiro dia e começa. Sem esperar liberação de módulo para entender o próximo passo.</p><CTA green>QUERO ACESSAR O DESAFIO</CTA></div>
      </section>

      <section className="comparison-section" aria-labelledby="comparison-title">
        <div className="narrow">
          <h2 id="comparison-title">O que muda quando existe uma sequência</h2>
          <p className="section-intro">A mesma rotina. Duas formas de atravessar os próximos 21 dias.</p>
          <div className="comparison-table">
            <div className="table-head"><span>NA SUA ROTINA</span><span>SEM UM ROTEIRO</span><span>COM O DESAFIO</span></div>
            {comparisons.map(([context, alone, challenge]) => <div className="table-row" key={context}><strong>{context}</strong><p><i>×</i>{alone}</p><p><i>●</i>{challenge}</p></div>)}
          </div>
        </div>
      </section>

      <section className="offer-section" id="oferta" aria-labelledby="offer-title">
        <div className="offer-card">
          <span className="eyebrow mint">DESAFIO SELVA • 21 DIAS</span>
          <h2 id="offer-title">Agora, o preço.</h2>
          <p>Plano diário, Plano Selva completo, materiais práticos, comunidade e encontros semanais. Uma compra, um caminho claro para começar.</p>
          <ul><li>Jornada diária de 21 dias</li><li>Plano Selva completo com 6 módulos</li><li>Lista de compras</li><li>Modelos de refeições</li><li>Guia de preparação</li><li>Checklists de progresso</li><li>Acesso à comunidade durante o desafio</li></ul>
          <div className="price-box"><small>DENTRO DO DESAFIO, TUDO JUNTO</small><div><sup>R$</sup><strong>47</strong><sup>,00</sup></div><span>pagamento único • sem mensalidade nesta compra</span></div>
          <CTA>QUERO COMEÇAR O DESAFIO</CTA>
          <div className="security-row"><span>✓ Compra segura</span><span>✓ Acesso após confirmação</span><span>✓ 7 dias de garantia</span></div>
          <div className="guarantee-box"><strong><b>7</b> DIAS</strong><div><h3>Garantia incondicional de 7 dias</h3><p>Entre, conheça o material e veja se a proposta faz sentido para você. Dentro do prazo, pode solicitar o reembolso conforme as condições do checkout.</p></div></div>
        </div>
      </section>

      <section className="faq-section section-gray" aria-labelledby="faq-title">
        <div className="narrow">
          <span className="eyebrow mint">TIRE SUAS DÚVIDAS</span>
          <h2 id="faq-title">Perguntas frequentes</h2>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return <article className={isOpen ? "open" : ""} key={question}><button id={`faq-question-${index}`} type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}><span>{question}</span><b>{isOpen ? "⌃" : "⌄"}</b></button><div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} hidden={!isOpen}><p>{answer}</p></div></article>;
            })}
          </div>
          <CTA>QUERO COMEÇAR O DESAFIO</CTA>
        </div>
      </section>

      <footer className="footer"><strong>PLANO SELVA • 21 DIAS</strong><p>© {new Date().getFullYear()} Todos os direitos reservados.</p><small>Conteúdo educacional. Resultados variam conforme contexto, rotina e aplicação individual.</small></footer>
    </main>
  );
}
