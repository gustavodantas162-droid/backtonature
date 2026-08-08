"use client";

import { useRef, useState } from "react";

const CHECKOUT_HREF = "https://pay.kiwify.com.br/cI4acSj";

const foodGallery = [
  { image: "/images/1785530347484_image.png", title: "Proteína de verdade", text: "Ovos + carne vermelha: densidade nutricional que sustenta energia e vitalidade." },
  { image: "/images/1785530351080_image.png", title: "Refeição completa", text: "Comida reconhecível, simples e sem uma lista interminável de ingredientes." },
  { image: "/images/1785530338310_image.png", title: "O simples funciona", text: "Ovos: alimento prático, versátil e naturalmente nutritivo." },
  { image: "/images/1785530342591_image.png", title: "Minerais da natureza", text: "Ostras com limão: comida real e naturalmente rica em micronutrientes." },
  { image: "/images/1785530340559_image.png", title: "Snack ancestral", text: "Tâmaras, manteiga e sal no lugar de mais um ultraprocessado." },
  { image: "/images/1785530345622_image.png", title: "Energia da terra", text: "Frutas como fonte natural de sabor, variedade e energia." },
  { image: "/images/1785530355245_image.png", title: "Rotina possível", text: "Comida de verdade também cabe nos dias corridos." },
];

const chapters = [
  { number: "1", title: "A prisão alimentar moderna", text: "Como a indústria influencia suas escolhas", visual: "label" },
  { number: "2", title: "Desprogramação alimentar", text: "As crenças que precisam ser questionadas", visual: "mind" },
  { number: "3", title: "Fundamentos da alimentação ancestral", text: "O que realmente comer", image: "/images/1785530347484_image.png" },
  { number: "4", title: "Montando sua alimentação", text: "Refeições, compras e rotina real", image: "/images/1785530351080_image.png" },
  { number: "5", title: "Alimentação para o shape", text: "Massa, gordura e energia pro treino", image: "/images/1785530370386_image.png" },
  { number: "6", title: "Corpo, saúde e vitalidade", text: "Energia, sono, hormônio e testosterona", image: "/images/1785530326793_image.png" },
  { number: "7", title: "Sua vida Back to Nature", text: "Transição, autonomia e longo prazo", image: "/images/1785530329200_image.png" },
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
      <header className="site-header page-width">
        <a className="brand" href="#top" aria-label="Back to Nature — início">
          <span className="brand-box">BTN</span><span>BACK TO NATURE</span>
        </a>
        <span className="header-note">EAT GOOD · LOOK GOOD · FEEL GOOD</span>
        <a className="header-cta" href={CHECKOUT_HREF}>COMEÇAR AGORA</a>
      </header>

      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="kicker">PROTOCOLO BACK TO NATURE</span>
          <h1 id="hero-title">Se sua energia, sua libido e sua disposição não são mais as mesmas, <em>o problema não é força de vontade.</em></h1>
          <p>É o que a indústria alimentar te ensinou a comer.</p>
          <p className="hero-sub">O Protocolo Back to Nature te devolve o que o mundo moderno tirou de você: <strong>saúde, energia e vitalidade</strong> — voltando pra alimentação que seu corpo já sabe reconhecer.</p>
          <CTA>Quero recuperar minha energia — R$97</CTA>
          <small>Pagamento único · Acesso imediato · 7 dias de garantia</small>
        </div>

        <div className="product-stage" aria-label="Produto Protocolo Back to Nature">
          <div className="product-orbit orbit-one" aria-hidden="true" />
          <div className="product-orbit orbit-two" aria-hidden="true" />
          <div className="product-book">
            <div className="book-spine"><span>BACK TO NATURE</span></div>
            <div className="book-cover">
              <span className="cover-label">PROTOCOLO</span>
              <img src="/product-back-to-nature.png" alt="Capa do Protocolo Back to Nature" width="128" height="128" />
              <div><strong>BACK TO</strong><em>NATURE</em></div>
              <small>CONHECIMENTO · EXECUÇÃO · CONEXÃO</small>
            </div>
          </div>
          <span className="product-caption">ACESSO VITALÍCIO<br />+ ATUALIZAÇÕES</span>
        </div>
      </section>

      <section className="instant-cta page-width">
        <p>Se você já se identificou com tudo isso, não precisa esperar — <strong>o método está disponível agora.</strong></p>
        <CTA light>Quero começar agora — R$97</CTA>
      </section>

      <section className="section problem-section page-width" aria-labelledby="problem-title">
        <div className="section-index">01 <span /> A CAUSA</div>
        <div className="split-copy">
          <h2 id="problem-title">Não é culpa sua.<br /><em>E não é “coisa da idade”.</em></h2>
          <div className="prose">
            <p>A indústria alimentar te ensinou a ter medo de <strong>comida natural</strong>, a contar caloria sem olhar qualidade, a substituir refeição de verdade por produto industrializado — e isso afasta seu corpo do que ele reconhece.</p>
            <p>O resultado: <strong className="accent-text">hormônio desregulado, energia baixa, libido em queda.</strong></p>
            <p>Ninguém nunca te disse isso. Por isso nenhuma dieta da moda resolveu.</p>
          </div>
        </div>
      </section>

      <section className="dark-panel transformation page-width" aria-labelledby="story-title">
        <div className="panel-heading">
          <div className="section-index on-dark">02 <span /> A TRANSFORMAÇÃO DO LÉO</div>
          <h2 id="story-title">Eu não nasci assim.</h2>
          <p>Não é teoria — <strong>é o que funcionou comigo primeiro.</strong></p>
        </div>

        <div className="before-after">
          <figure>
            <div className="photo-frame"><img src="/images/1785530233131_image.png" alt="Léo antes da mudança de estilo de vida" width="952" height="1269" /></div>
            <figcaption><span>ANTES</span><strong>Distante de como meu corpo funciona</strong></figcaption>
          </figure>
          <span className="versus" aria-hidden="true">→</span>
          <figure>
            <div className="photo-frame"><img src="/images/1785530326793_image.png" alt="Léo após aplicar o Back to Nature" width="952" height="1269" /></div>
            <figcaption><span>DEPOIS</span><strong>Energia que aparece no corpo</strong></figcaption>
          </figure>
        </div>

        <div className="story-grid">
          <div className="alt-comparison">
            <figure><img src="/images/1785530315808_image.png" alt="Léo em sua antiga rotina com fast-food" width="510" height="640" /><span>FAST-FOOD DE TERÇA</span></figure>
            <figure><img src="/images/1785530373363_image.png" alt="Léo em sua rotina atual" width="952" height="1269" /><span>AUTONOMIA NA PRÁTICA</span></figure>
          </div>
          <div className="story-copy prose on-dark-prose">
            <p>Teve uma época em que minha rotina era cerveja de sexta, fast-food de terça e treino “quando dava”. Eu não sabia disso na época, mas cada uma dessas escolhas estava me afastando cada vez mais de como meu corpo funciona de verdade — e eu sentia isso em energia, em disposição, em tudo.</p>
            <p>O que você vê hoje não veio de suplemento, dieta da moda ou horas trancado numa academia. Veio de <strong>voltar pro básico: comida de verdade, treino direto ao ponto</strong>, e entender o que a indústria queria que eu acreditasse sobre alimentação — pra poder ignorar.</p>
            <p className="impact-line">Esse protocolo é literalmente o caminho que eu segui.</p>
            <CTA light>Quero o mesmo caminho — R$97</CTA>
          </div>
        </div>
      </section>

      <section className="section food-section page-width" aria-labelledby="food-title">
        <div className="section-index">03 <span /> COMIDA DE VERDADE</div>
        <div className="split-copy food-intro">
          <h2 id="food-title">O que vem da terra e do animal. <em>Não do laboratório.</em></h2>
          <div className="prose">
            <p><strong>Comida de verdade não tem tabela nutricional de 20 ingredientes</strong> que você não sabe pronunciar.</p>
            <p>É proteína de qualidade, gordura de verdade, fruta, raiz — o que seu corpo reconhece e sabe processar, sem confundir fome com vontade, sem picos de açúcar escondidos, sem aditivo pensado pra você comer mais do que precisa.</p>
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
          <img loading="lazy" src="/images/1785530329200_image.png" alt="Léo preparando comida de verdade" width="826" height="1456" />
          <span>COMIDA REAL. VIDA REAL.</span>
        </div>
        <div className="solution-copy">
          <div className="section-index on-dark">04 <span /> A SOLUÇÃO</div>
          <h2 id="solution-title">Não é mais uma dieta. <em>É o caminho de volta.</em></h2>
          <div className="prose on-dark-prose">
            <p>O <strong>Protocolo Back to Nature</strong> existe pra romper esse ciclo — não te dando mais uma regra pra seguir, mas te devolvendo o entendimento de como comer de verdade, treinar direito e recuperar a energia, a libido e a disposição que a indústria alimentar foi lentamente tirando de você.</p>
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
            <button type="button" onClick={() => moveChapters(-1)} aria-label="Capítulo anterior">←</button>
            <button type="button" onClick={() => moveChapters(1)} aria-label="Próximo capítulo">→</button>
          </div>
        </div>

        <div className="chapters-carousel" ref={chaptersRef} aria-label="Os sete capítulos do método">
          {chapters.map((chapter) => (
            <article className="chapter-card" key={chapter.number}>
              <div className={`chapter-visual ${chapter.visual ? `visual-${chapter.visual}` : ""}`}>
                {chapter.image ? <img loading="lazy" src={chapter.image} alt="" width="952" height="1269" /> : null}
                {chapter.visual === "label" ? <div className="editorial-visual"><span>RÓTULO</span><strong>20</strong><small>ingredientes?</small></div> : null}
                {chapter.visual === "mind" ? <div className="editorial-visual mind-visual"><span>RE</span><strong>PRO<br />GRA<br />ME</strong></div> : null}
                <span className="chapter-tag">{chapter.number} CAPÍTULO</span>
              </div>
              <div className="chapter-copy"><h3>{chapter.title}</h3><p>{chapter.text}</p></div>
            </article>
          ))}
        </div>
        <p className="update-note">(Contém atualização periódica de conteúdo)</p>

        <div className="ecosystem-grid">
          <article><span className="card-number">01</span><p className="card-kicker">CONHECIMENTO</p><h3>O Método Libertação Ancestral</h3><p>Desprogramar → Reaproximar → Reconstruir, em 7 partes diretas ao ponto.</p></article>
          <article><span className="card-number">02</span><p className="card-kicker">EXECUÇÃO</p><h3>Sua IA personalizada</h3><p>Depois de analisar seu perfil e sua rotina, a IA monta um plano completo e individual pra você aplicar o que aprendeu — sem ficar perdido tentando adaptar sozinho.</p></article>
          <article><span className="card-number">03</span><p className="card-kicker">CONEXÃO</p><h3>Comunidade Back to Nature</h3><p>Acesso à comunidade de quem também está voltando ao básico — pra trocar conhecimento, aprender coisas novas e se conectar com quem já saiu das amarras do sistema alimentar moderno.</p></article>
        </div>

        <div className="bonus-panel">
          <div><span className="bonus-label">INCLUÍDOS</span><h3>Bônus para transformar conhecimento em rotina.</h3></div>
          <ul>{bonuses.map((bonus) => <li key={bonus}><span aria-hidden="true">•</span><strong>{bonus}</strong></li>)}</ul>
        </div>
      </section>

      <section className="offer-section page-width" id="oferta" aria-labelledby="offer-title">
        <div className="offer-copy">
          <div className="section-index on-dark">06 <span /> PREÇO DE LANÇAMENTO</div>
          <h2 id="offer-title">Comece agora a construir sua vida <em>Back to Nature.</em></h2>
          <p>Acesso completo ao ecossistema: os 7 capítulos do método, sua IA personalizada, a comunidade Back to Nature e todos os bônus — <strong>liberado na hora.</strong></p>
          <ul>
            <li><span>•</span><strong>Acesso vitalício</strong></li>
            <li><span>•</span><strong>Atualizações periódicas</strong></li>
            <li><span>•</span><strong>Garantia incondicional de 7 dias</strong></li>
          </ul>
        </div>
        <div className="price-card">
          <span>OFERTA DE LANÇAMENTO</span>
          <p>De <s>R$397</s> por apenas</p>
          <div className="price"><small>R$</small><strong>97</strong></div>
          <CTA light>Quero começar agora — R$97</CTA>
          <p className="price-note">Pagamento único · Acesso imediato</p>
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
          <CTA light>Quero recuperar minha energia — R$97</CTA>
          <small>Pagamento único · Acesso imediato · Garantia de 7 dias</small>
        </div>
        <div className="final-photo"><img loading="lazy" src="/images/1785530370386_image.png" alt="Léo treinando com halteres" width="840" height="1455" /><span>VOLTE<br />AO BÁSICO.</span></div>
      </section>

      <footer className="site-footer page-width">
        <a className="brand footer-brand" href="#top"><span className="brand-box">BTN</span><span>BACK TO NATURE</span></a>
        <p>© {new Date().getFullYear()} Back to Nature. Todos os direitos reservados.</p>
        <a href="#top">VOLTAR AO TOPO ↑</a>
        <small>Este produto oferece conteúdo educacional. Resultados variam conforme contexto, rotina e aplicação individual.</small>
      </footer>

      <a className="mobile-cta" href={CHECKOUT_HREF}><span>QUERO COMEÇAR</span><strong>R$97 ↗</strong></a>
    </main>
  );
}
