"use client";

import { useRef, useState } from "react";

const CHECKOUT_HREF = "https://pay.cakto.com.br/36xoasa_1070318";

// Preencha uma data ou quantidade real quando a condição de fundador for definida.
// Exemplos: deadlineLabel: "15/09/2026" ou spotsRemaining: 50.
const FOUNDER_CAMPAIGN: { deadlineLabel: string; spotsRemaining: number | null } = {
  deadlineLabel: "",
  spotsRemaining: null,
};

const foodGallery = [
  { image: "/images/selva-food-04.jpg", title: "Comida da selva", text: "Carne, raízes e frutas: uma base simples, forte e reconhecível." },
  { image: "/images/selva-food-02.jpg", title: "Proteína de verdade", text: "Ovos e carne: densidade nutricional para sustentar energia e vitalidade." },
  { image: "/images/selva-food-01.jpg", title: "Alimento por inteiro", text: "Comida de verdade, sem uma lista interminável de ingredientes." },
  { image: "/images/selva-food-03.jpg", title: "Da terra para o prato", text: "Ingredientes simples que ainda parecem comida." },
  { image: "/images/1785530340559_image.png", title: "Snack ancestral", text: "Tâmaras, manteiga e sal no lugar de mais um ultraprocessado." },
  { image: "/images/1785530345622_image.png", title: "Energia da terra", text: "Frutas como fonte natural de sabor, variedade e energia." },
  { image: "/images/1785530355245_image.png", title: "Rotina possível", text: "Comida de verdade também cabe nos dias corridos." },
];

const chapters = [
  { number: "1", tag: "1 MÓDULO", title: "O sistema alimentar", text: "Entenda o sistema antes de voltar ao natural", image: "/images/module-01-sistema-alimentar.png" },
  { number: "2", tag: "2 MÓDULO", title: "Entendendo a Selva", text: "Recupere o que a alimentação moderna complicou", image: "/images/module-02-entendendo-selva.png" },
  { number: "3", tag: "3 MÓDULO", title: "A base da alimentação", text: "Conheça os alimentos que sustentam a Selva", image: "/images/module-03-base-alimentacao.png" },
  { number: "4", tag: "4 MÓDULO", title: "Desenvolvendo a intuição", text: "Fome, saciedade, energia e resposta do corpo", image: "/images/module-04-intuicao.png" },
  { number: "5", tag: "5 MÓDULO", title: "Construindo sua Selva", text: "Transforme a teoria em uma rotina sustentável", image: "/images/module-05-construindo-selva.png" },
  { number: "6", tag: "6 MÓDULO", title: "Selva + performance", text: "Alimente o treino e recupere o corpo", image: "/images/module-06-performance.png" },
  { number: "7", tag: "MAPA", title: "Mapa das proteínas", text: "As principais fontes para montar sua base", image: "/images/material-mapa-proteinas.png" },
  { number: "8", tag: "MAPA", title: "Mapa da energia natural", text: "Frutas, mel e raízes para fome, treino e rotina", image: "/images/material-mapa-energia.png" },
  { number: "9", tag: "GUIA", title: "Plano Selva na prática", text: "Observe, experimente, perceba e ajuste", image: "/images/material-plano-pratica.png" },
  { number: "10", tag: "COMUNIDADE", title: "Comunidade da Selva", text: "Troca, direção e evolução com pessoas que seguem o mesmo caminho.", image: "/images/material-team-selva.png" },
];

const faqs = [
  ["O que é a Comunidade da Selva?", "É um grupo para pessoas que saíram do tradicional e querem aprender, aplicar e evoluir ao lado de pessoas alinhadas ao mesmo objetivo."],
  ["O Plano Selva está incluído?", "Sim. O Plano Selva completo está incluído na assinatura, com todos os módulos, mapas e materiais práticos, sem custo adicional enquanto ela estiver ativa."],
  ["Como funcionam os seminários?", "Os seminários acontecem semanalmente. [CONFIRMAR: se são ao vivo, gravados ou ambos, e em qual área ou plataforma ficam disponíveis.]"],
  ["O que são as indicações do Ryan?", "São descontos exclusivos em marcas parceiras selecionadas pelo Ryan e compartilhados dentro da comunidade quando estiverem disponíveis."],
  ["Por quanto tempo tenho acesso?", "O acesso é mantido enquanto a assinatura mensal estiver ativa. A cobrança é recorrente e o acesso termina em caso de cancelamento ou interrupção do pagamento."],
  ["Como recebo o acesso?", "Depois da confirmação do pagamento, você recebe no e-mail usado na compra o link e as instruções de acesso. [PRAZO DE LIBERAÇÃO A CONFIRMAR.]"],
];

function CTA({ children, light = false, className = "" }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <a className={`cta ${light ? "cta-light" : ""} ${className}`} href={CHECKOUT_HREF}>
      <span>{children}</span><span className="cta-icon" aria-hidden="true">↗</span>
    </a>
  );
}

function FounderUrgency() {
  const detail = FOUNDER_CAMPAIGN.spotsRemaining !== null
    ? `${FOUNDER_CAMPAIGN.spotsRemaining} vagas disponíveis com esta condição.`
    : FOUNDER_CAMPAIGN.deadlineLabel
      ? `Valor de lançamento válido até ${FOUNDER_CAMPAIGN.deadlineLabel}.`
      : "Valor de lançamento disponível enquanto a condição de fundador estiver ativa.";

  return (
    <div className="founder-urgency" role="note" aria-label="Condição de fundador">
      <span aria-hidden="true" />
      <p><strong>Condição de fundador</strong>{detail}</p>
    </div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const chaptersRef = useRef<HTMLDivElement>(null);

  const moveChapters = (direction: number) => {
    const carousel = chaptersRef.current;
    if (!carousel) return;
    carousel.scrollBy({ left: Math.min(carousel.clientWidth * 0.86, 410) * direction, behavior: "smooth" });
  };

  return (
    <main id="top">
      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="kicker">COMUNIDADE DA SELVA</span>
          <h1 id="hero-title">Você despertou. Agora esteja cercado por quem também saiu do automático.</h1>
          <p>UM GRUPO PARA DESPERTADOS.</p>
          <p className="hero-sub">Entre para um grupo de pessoas alinhadas ao mesmo objetivo: sair do tradicional e retomar o que a modernidade roubou delas.</p>
          <CTA>QUERO ENTRAR PARA A COMUNIDADE</CTA>
          <FounderUrgency />
        </div>

        <div className="product-stage" aria-label="Comunidade da Selva">
          <img className="product-cover-image" src="/images/comunidade-selva-cover.png" alt="Capa da Comunidade da Selva" width="1254" height="1254" />
        </div>
      </section>

      <section className="section problem-section page-width" aria-labelledby="problem-title">
        <div className="section-index">01 <span /> O PROBLEMA</div>
        <div className="split-copy">
          <h2 id="problem-title">É difícil sustentar uma vida diferente quando todos ao seu redor continuam vivendo igual.</h2>
          <div className="prose">
            <p><strong>Informação sozinha não basta.</strong></p>
            <p>Sem um ambiente que fortaleça suas escolhas, é fácil voltar aos hábitos e ideias que você decidiu abandonar.</p>
            <p className="impact-line">Você precisa estar perto de pessoas que enxergam o que você também começou a enxergar.</p>
          </div>
        </div>
      </section>

      <section className="dark-panel transformation page-width" aria-labelledby="story-title">
        <div className="panel-heading">
          <div className="section-index on-dark">02 <span /> A MUDANÇA</div>
          <h2 id="story-title">O Ryan também precisou sair do tradicional.</h2>
          <p>Durante anos, ele seguiu <strong>a alimentação e os hábitos que empurram para todo mundo.</strong></p>
        </div>

        <div className="before-after">
          <figure>
            <div className="photo-frame"><img src="/images/expert-before-01.jpg" alt="Novo expert antes da Dieta da Selva" width="1200" height="1600" /></div>
            <figcaption><span>ANTES</span><strong>O corpo sob a alimentação convencional</strong></figcaption>
          </figure>
          <span className="versus" aria-hidden="true">→</span>
          <figure>
            <div className="photo-frame"><img src="/images/expert-after-main.png" alt="Ryan depois da Dieta da Selva" width="591" height="1280" /></div>
            <figcaption><span>DEPOIS</span><strong>A aparência real começa a aparecer</strong></figcaption>
          </figure>
        </div>

        <div className="story-grid">
          <div className="alt-comparison">
            <figure><img src="/images/expert-before-02.jpg" alt="Novo expert antes da mudança alimentar" width="1058" height="1600" /><span>ANTES DA DIETA DA SELVA</span></figure>
            <figure><img src="/images/expert-after-02.jpg" alt="Novo expert após a mudança alimentar" width="738" height="1600" /><span>DEPOIS DA MUDANÇA</span></figure>
          </div>
          <div className="story-copy prose on-dark-prose">
            <p>A transformação começou quando ele retomou <strong>a comida de verdade, o treino e uma rotina mais coerente com sua natureza.</strong></p>
            <p>Sem dieta da moda. Sem complicação.</p>
            <p className="impact-line">Agora, ele reúne pessoas que escolheram seguir esse mesmo caminho.</p>
            <div className="authority-bio">
              <strong>Sobre o Ryan</strong>
              <p>Há <strong>[X anos]</strong> estudando alimentação ancestral e estilo de vida natural, Ryan já ajudou <strong>[X pessoas / número a confirmar]</strong> a saírem do automático e retomarem uma vida mais alinhada com sua natureza.</p>
            </div>
            <CTA light>QUERO FAZER PARTE DA SELVA</CTA>
          </div>
        </div>
      </section>

      <section className="section food-section page-width" aria-labelledby="food-title">
        <div className="section-index">03 <span /> A BASE QUE NOS UNE</div>
        <div className="split-copy food-intro">
          <h2 id="food-title">O que vem da terra e do animal. <em>Não do laboratório.</em></h2>
          <div className="prose">
            <p><strong>Comida de verdade não precisa de 20 ingredientes.</strong></p>
            <p>É proteína, gordura de verdade, fruta e raiz. Simples, nutritivo e reconhecível.</p>
            <p className="impact-line">Não é sobre contar caloria. É sobre qualidade.</p>
          </div>
        </div>

        <div className="food-grid">
          {foodGallery.map((item, index) => (
            <figure className={`food-card food-card-${index + 1}`} key={item.image}>
              <img loading="lazy" src={item.image} alt={item.title} width="952" height="1269" />
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{item.title}</strong><p>{item.text}</p></div></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="solution-section page-width" aria-labelledby="solution-title">
        <div className="solution-photo">
          <img loading="lazy" src="/images/selva-food-04.jpg" alt="Prato de comida de verdade do novo expert" width="738" height="1600" />
          <span>COMIDA REAL. VIDA REAL.</span>
        </div>
        <div className="solution-copy">
          <div className="section-index on-dark">04 <span /> A COMUNIDADE</div>
          <h2 id="solution-title">Mais do que um curso. <em>Um ambiente para viver a Selva todos os dias.</em></h2>
          <div className="prose on-dark-prose">
            <p>Dentro da <strong>Comunidade da Selva</strong>, você terá conhecimento, aplicação prática e contato com pessoas que compartilham seus objetivos.</p>
          </div>
          <div className="method-steps">
            <article><span>01</span><div><h3>Entenda</h3><p>Acesse o método completo do Plano Selva e compreenda os princípios da alimentação e do estilo de vida ancestral.</p></div></article>
            <article><span>02</span><div><h3>Aplique</h3><p>Participe do Desafio de 21 Dias e transforme o conhecimento em ações simples na sua rotina.</p></div></article>
            <article><span>03</span><div><h3>Permaneça</h3><p>Evolua com os seminários semanais e com pessoas que escolheram o mesmo caminho.</p></div></article>
          </div>
          <blockquote>O conhecimento desperta. <strong>O ambiente mantém você no caminho.</strong></blockquote>
        </div>
      </section>

      <section className="section curriculum-section page-width" aria-labelledby="curriculum-title">
        <div className="curriculum-heading">
          <div>
            <div className="section-index">05 <span /> O QUE VOCÊ RECEBE</div>
            <h2 id="curriculum-title">O Plano Selva completo, <em>agora dentro da comunidade.</em></h2>
          </div>
          <div className="carousel-controls">
            <button type="button" onClick={() => moveChapters(-1)} aria-label="Item anterior">←</button>
            <button type="button" onClick={() => moveChapters(1)} aria-label="Próximo item">→</button>
          </div>
        </div>

        <div className="chapters-carousel" ref={chaptersRef} aria-label="Módulos e materiais do Plano Selva">
          {chapters.map((chapter) => (
            <article className="chapter-card" key={chapter.number}>
              <div className="chapter-visual">
                <img loading="lazy" src={chapter.image} alt={`Capa de ${chapter.title}`} width="941" height="1672" />
                <span className="chapter-tag">{chapter.tag}</span>
              </div>
              <div className="chapter-copy"><h3>{chapter.title}</h3><p>{chapter.text}</p></div>
            </article>
          ))}
        </div>
        <p className="update-note">Além do método, você recebe o Desafio de 21 Dias, indicações do Ryan, seminários semanais e acesso à comunidade.</p>

      </section>

      <section className="offer-section page-width" id="oferta" aria-labelledby="offer-title">
        <div className="offer-copy">
          <div className="section-index on-dark">06 <span /> SUA ASSINATURA</div>
          <h2 id="offer-title">Entre para a <em>Comunidade da Selva.</em></h2>
          <p>Por <strong>R$ 47,90 por mês</strong>, você recebe:</p>
          <ul>
            <li><span>•</span><strong>Plano Selva completo com módulos, mapas e guias práticos.</strong></li>
            <li><span>•</span><strong>Desafio de 21 Dias da Selva.</strong></li>
            {/* Para remover este benefício depois, exclua somente o item abaixo. */}
            <li><span>•</span><strong>Descontos exclusivos em marcas parceiras selecionadas pelo Ryan.</strong></li>
            <li><span>•</span><strong>Seminário semanal sobre ancestralidade.</strong></li>
            <li><span>•</span><strong>Acesso à Comunidade da Selva.</strong></li>
          </ul>
        </div>
        <div className="price-card">
          <span>ASSINATURA MENSAL</span>
          <p>Entre para a comunidade por</p>
          <div className="price"><small>R$</small><strong>47,90</strong><small>/mês</small></div>
          <FounderUrgency />
          <CTA light>QUERO ENTRAR PARA A COMUNIDADE</CTA>
          <p className="price-note">Assinatura mensal. O acesso permanece ativo enquanto a assinatura estiver vigente.</p>
        </div>
      </section>

      <section className="guarantee-section page-width" aria-labelledby="guarantee-title">
        <div className="guarantee-seal"><strong>7</strong><span>DIAS</span></div>
        <div>
          <div className="section-index">07 <span /> GARANTIA</div>
          <h2 id="guarantee-title">Risco zero.<br /><em>Sem perguntas.</em></h2>
        </div>
        <p><strong>7 dias de garantia incondicional.</strong> Se você sentir que não é pra você, devolvemos 100% do seu dinheiro. Sem perguntas.</p>
      </section>

      <section className="section faq-section page-width" aria-labelledby="faq-title">
        <div className="faq-heading">
          <div className="section-index">08 <span /> DÚVIDAS FREQUENTES</div>
          <h2 id="faq-title">Antes de dar<br /><em>o primeiro passo.</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => {
            const isOpen = openFaq === index;
            return (
              <article className={`faq-item ${isOpen ? "open" : ""}`} key={question}>
                <button
                  id={`faq-question-${index}`}
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{question}</span><i aria-hidden="true">{isOpen ? "−" : "+"}</i>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <p>{answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="final-section page-width" aria-labelledby="final-title">
        <div className="final-copy">
          <div className="section-index on-dark">09 <span /> ENTRE PARA A SELVA</div>
          <h2 id="final-title">Você já percebeu que o tradicional não serve para você. <em>Agora escolha estar próximo de pessoas que também decidiram sair dele.</em></h2>
          <CTA light>QUERO FAZER PARTE DA SELVA</CTA>
        </div>
        <div className="final-photo"><img loading="lazy" src="/images/expert-after-01.jpg" alt="Novo expert após a mudança alimentar" width="738" height="1600" /><span>VOLTE<br />À SELVA.</span></div>
      </section>

      <footer className="site-footer page-width">
        <a className="brand footer-brand" href="#top"><span className="brand-box">CS</span><span>COMUNIDADE DA SELVA</span></a>
        <p>© {new Date().getFullYear()} Comunidade da Selva. Todos os direitos reservados.</p>
        <a href="#top">VOLTAR AO TOPO ↑</a>
        <small>Este produto oferece conteúdo educacional. Resultados variam conforme contexto, rotina e aplicação individual.</small>
      </footer>

      <a className="mobile-cta" href={CHECKOUT_HREF}><span>ENTRAR NA COMUNIDADE</span><strong>R$ 47,90/MÊS ↗</strong></a>
    </main>
  );
}
