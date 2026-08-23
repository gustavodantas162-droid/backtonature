"use client";

import { useRef, useState } from "react";

const CHECKOUT_HREF = "#oferta";

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
  { number: "10", tag: "COMUNIDADE", title: "Team Selva", text: "Dicas, missões e aprendizado coletivo", image: "/images/material-team-selva.png" },
];

const bonuses = [
  "Lista de compras Eat Good",
  "Guia de restaurante",
  "Cardápios prontos",
  "Exercícios substitutos",
  "Checklist semanal",
  "Planner de hábitos",
  "Diário de treino",
];

const faqs = [
  ["Preciso de academia?", "Não. O treino tem versão pra casa e pra academia."],
  ["Serve pra iniciante?", "Sim. Programa pra iniciante, intermediário e avançado."],
  ["Quanto tempo leva pra sentir diferença?", "O método ataca a causa raiz — a maioria sente diferença na energia já nos primeiros dias."],
  ["Por quanto tempo tenho acesso?", "Vitalício."],
  ["Como recebo o acesso?", "Na hora, por e-mail, após confirmação do pagamento."],
];

function CTA({ children, light = false, className = "" }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <a className={`cta ${light ? "cta-light" : ""} ${className}`} href={CHECKOUT_HREF}>
      <span>{children}</span><span className="cta-icon" aria-hidden="true">↗</span>
    </a>
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
          <span className="kicker">PLANO SELVA</span>
          <h1 id="hero-title">Recupere sua energia, sua libido e sua disposição.</h1>
          <p>O problema não é força de vontade.</p>
          <p className="hero-sub">É o que a indústria te ensinou a comer. O <strong>Plano Selva</strong> te leva de volta à comida que seu corpo reconhece.</p>
          <CTA>Quero conhecer o Plano Selva</CTA>
          <small>Novos detalhes e checkout em breve</small>
        </div>

        <div className="product-stage" aria-label="Ryan no Plano Selva">
          <img className="product-cover-image" src="/images/ryan-plano-selva-hero.png" alt="Ryan apresentando o Plano Selva" width="1254" height="1254" />
        </div>
      </section>

      <section className="instant-cta page-width">
        <p>Se você já se identificou com tudo isso, <strong>o Plano Selva está sendo preparado.</strong></p>
        <CTA light>Quero conhecer o Plano Selva</CTA>
      </section>

      <section className="section problem-section page-width" aria-labelledby="problem-title">
        <div className="section-index">01 <span /> A CAUSA</div>
        <div className="split-copy">
          <h2 id="problem-title">Não é culpa sua.<br /><em>E não é “coisa da idade”.</em></h2>
          <div className="prose">
            <p>Você foi ensinado a temer <strong>comida natural</strong>, contar calorias e trocar refeições por produtos.</p>
            <p>O resultado: <strong className="accent-text">energia baixa, libido em queda e um corpo que não responde.</strong> Não é idade. É uma base errada.</p>
          </div>
        </div>
      </section>

      <section className="dark-panel transformation page-width" aria-labelledby="story-title">
        <div className="panel-heading">
          <div className="section-index on-dark">02 <span /> ANTES DO PLANO SELVA</div>
          <h2 id="story-title">A aparência real estava ofuscada.</h2>
          <p>Antes da mudança, <strong>a alimentação convencional escondia o potencial do corpo.</strong></p>
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
            <p>Os alimentos convencionais que empurraram pra ele durante anos deixavam o corpo sem responder e ofuscavam a aparência que ele realmente podia construir.</p>
            <p>A virada começou ao trocar essa base por <strong>comida de verdade e uma rotina coerente.</strong> Sem dieta da moda. Sem complicação.</p>
            <p className="impact-line">O Plano Selva organiza esse caminho.</p>
            <CTA light>Quero conhecer o Plano Selva</CTA>
          </div>
        </div>
      </section>

      <section className="section food-section page-width" aria-labelledby="food-title">
        <div className="section-index">03 <span /> COMIDA DE VERDADE</div>
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
          <div className="section-index on-dark">04 <span /> A SOLUÇÃO</div>
          <h2 id="solution-title">Não é mais uma dieta. <em>É o caminho de volta.</em></h2>
          <div className="prose on-dark-prose">
            <p>O <strong>Plano Selva</strong> te ensina a comer de verdade, treinar direito e recuperar energia, libido e disposição.</p>
          </div>
          <div className="method-steps">
            <article><span>01</span><div><h3>Desprogramar</h3><p>Entender as crenças e os hábitos modernos que controlam sua alimentação sem você perceber.</p></div></article>
            <article><span>02</span><div><h3>Reaproximar</h3><p>Voltar a basear sua alimentação em comida de verdade, sem complicar sua rotina.</p></div></article>
            <article><span>03</span><div><h3>Reconstruir</h3><p>Usar essa base pra melhorar seu corpo, sua energia e sua saúde de forma sustentável.</p></div></article>
          </div>
          <blockquote>A dieta pode acabar. <strong>O conhecimento e a autonomia permanecem.</strong></blockquote>
        </div>
      </section>

      <section className="section curriculum-section page-width" aria-labelledby="curriculum-title">
        <div className="curriculum-heading">
          <div>
            <div className="section-index">05 <span /> O QUE VOCÊ RECEBE</div>
            <h2 id="curriculum-title">O ecossistema completo: <em>Conhecimento + Execução + Conexão.</em></h2>
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
        <p className="update-note">(Contém atualização periódica de conteúdo)</p>

        <div className="ecosystem-grid">
          <article><span className="card-number">01</span><p className="card-kicker">CONHECIMENTO</p><h3>O Método Plano Selva</h3><p>Entenda → Sinta → Construa, em 7 partes diretas ao ponto.</p></article>
          <article><span className="card-number">02</span><p className="card-kicker">EXECUÇÃO</p><h3>Sua IA personalizada</h3><p>Um plano individual baseado no seu perfil e na sua rotina.</p></article>
          <article><span className="card-number">03</span><p className="card-kicker">CONEXÃO</p><h3>Comunidade Plano Selva</h3><p>Troque conhecimento e evolua com quem também voltou ao básico.</p></article>
        </div>

        <div className="bonus-panel">
          <div><span className="bonus-label">INCLUÍDOS</span><h3>Bônus para transformar conhecimento em rotina.</h3></div>
          <ul>{bonuses.map((bonus) => <li key={bonus}><span aria-hidden="true">•</span><strong>{bonus}</strong></li>)}</ul>
        </div>
      </section>

      <section className="offer-section page-width" id="oferta" aria-labelledby="offer-title">
        <div className="offer-copy">
          <div className="section-index on-dark">06 <span /> PREÇO DE LANÇAMENTO</div>
          <h2 id="offer-title">Prepare-se para construir sua vida com o <em>Plano Selva.</em></h2>
          <p>Uma estrutura completa para transformar conhecimento em rotina. <strong>Você recebe tudo desde o primeiro acesso:</strong></p>
          <ul>
            <li><span>•</span><strong>Acesso ao Plano Selva com mais de 7 módulos de conteúdo</strong></li>
            <li><span>•</span><strong>Acesso ao Desafio de 21 Dias da Selva</strong></li>
            <li><span>•</span><strong>Acesso vitalício à área de membros</strong></li>
            <li><span>•</span><strong>Acesso à Comunidade Selva</strong></li>
            <li><span>•</span><strong>Atualizações constantes</strong></li>
          </ul>
        </div>
        <div className="price-card">
          <span>OFERTA DE LANÇAMENTO</span>
          <p>Tudo isso por apenas</p>
          <div className="price"><small>R$</small><strong>47,90</strong></div>
          <CTA light>Quero conhecer o Plano Selva</CTA>
          <p className="price-note">Acesso vitalício + atualizações constantes</p>
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
                <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                  <span>{question}</span><i aria-hidden="true">{isOpen ? "−" : "+"}</i>
                </button>
                {isOpen ? <div className="faq-answer"><p>{answer}</p></div> : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="final-section page-width" aria-labelledby="final-title">
        <div className="final-copy">
          <div className="section-index on-dark">09 <span /> SUA DECISÃO</div>
          <h2 id="final-title">Você pode continuar sentindo o que sente hoje — <em>ou pode dar o primeiro passo agora.</em></h2>
          <CTA light>Quero conhecer o Plano Selva</CTA>
          <small>Novos detalhes e checkout em breve</small>
        </div>
        <div className="final-photo"><img loading="lazy" src="/images/expert-after-01.jpg" alt="Novo expert após a mudança alimentar" width="738" height="1600" /><span>VOLTE<br />À SELVA.</span></div>
      </section>

      <footer className="site-footer page-width">
        <a className="brand footer-brand" href="#top"><span className="brand-box">PS</span><span>PLANO SELVA</span></a>
        <p>© {new Date().getFullYear()} Plano Selva. Todos os direitos reservados.</p>
        <a href="#top">VOLTAR AO TOPO ↑</a>
        <small>Este produto oferece conteúdo educacional. Resultados variam conforme contexto, rotina e aplicação individual.</small>
      </footer>

      <a className="mobile-cta" href={CHECKOUT_HREF}><span>CONHECER O PLANO</span><strong>R$ 47,90 ↗</strong></a>
    </main>
  );
}
