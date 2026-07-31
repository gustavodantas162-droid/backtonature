"use client";

import { useRef, useState } from "react";

const CHECKOUT_HREF = "https://pay.kiwify.com.br/cI4acSj";

const foods = [
  {
    image: "/images/1785530347484_image.png",
    title: "Proteína que sustenta",
    text: "Carne e ovos: saciedade e matéria-prima de verdade.",
  },
  {
    image: "/images/1785530351080_image.png",
    title: "Refeição sem complicação",
    text: "Comida reconhecível, saborosa e sem rótulo quilométrico.",
  },
  {
    image: "/images/1785530338310_image.png",
    title: "O simples funciona",
    text: "Ovos: densidade nutricional em uma refeição prática.",
  },
  {
    image: "/images/1785530342591_image.png",
    title: "Minerais essenciais",
    text: "Ostras são naturalmente ricas em zinco e micronutrientes.",
  },
  {
    image: "/images/1785530340559_image.png",
    title: "Snack ancestral",
    text: "Tâmaras, manteiga e sal no lugar do ultraprocessado.",
  },
  {
    image: "/images/1785530345622_image.png",
    title: "Energia da natureza",
    text: "Frutas como fonte natural de carboidrato e vitalidade.",
  },
  {
    image: "/images/1785530355245_image.png",
    title: "Vida real, todos os dias",
    text: "Variedade, cor e autonomia para montar sua rotina.",
  },
];

const currentLeoImages = [
  { image: "/images/1785530326793_image.png", label: "O físico como consequência" },
  { image: "/images/1785530329200_image.png", label: "Comida de verdade na rotina" },
  { image: "/images/1785530370386_image.png", label: "Treino com direção" },
  { image: "/images/1785530373363_image.png", label: "Energia que aparece no corpo" },
];

const modules = [
  ["01", "A prisão alimentar moderna", "Entenda como conveniência, marketing e medo te afastaram da comida de verdade."],
  ["02", "Desprogramação", "Quebre crenças sobre gordura, carne, colesterol, calorias e tudo o que colocaram no seu prato."],
  ["03", "Fundamentos ancestrais", "Aprenda os princípios que devolvem clareza para suas escolhas, sem terrorismo nutricional."],
  ["04", "Montando sua alimentação", "Organize refeições simples, possíveis e alinhadas à sua rotina — sem cardápio engessado."],
  ["05", "Alimentação para o shape", "Ajuste quantidade, frequência e escolhas para que o físico seja consequência do processo."],
  ["06", "Corpo, saúde e vitalidade", "Conecte alimentação, sono, luz, movimento e hábitos que sustentam energia e disposição."],
  ["07", "Sua vida Back to Nature", "Transforme conhecimento em autonomia e construa um estilo de vida que permanece."],
];

const bonuses = [
  "Consultoria personalizada com o Léo, com treino e dieta montados para você",
  "Guia prático para montar seu prato de comida de verdade",
  "Lista de compras Back to Nature",
  "Estratégias para comer bem fora de casa",
  "Acesso vitalício a todo o conteúdo e futuras atualizações",
];

const faqs = [
  ["Preciso fazer academia?", "Não. O protocolo é sobre alimentação e estilo de vida. O treino potencializa resultados, mas você pode aplicar os fundamentos independentemente de academia."],
  ["Serve para quem está começando?", "Sim. O conteúdo foi estruturado do fundamento à prática, com linguagem direta e passos claros para quem nunca organizou a própria alimentação."],
  ["Quanto tempo leva para sentir diferença?", "Cada corpo e rotina respondem de uma forma. Muitas pessoas percebem mudanças na disposição e saciedade ao melhorar as escolhas, mas o método não promete prazo ou resultado individual."],
  ["Por quanto tempo tenho acesso?", "O acesso é vitalício. Você pode assistir no seu ritmo e voltar ao conteúdo sempre que precisar."],
  ["Como recebo o acesso?", "Assim que o pagamento for confirmado, os dados de acesso são enviados para o e-mail informado na compra."],
];

function ArrowIcon() {
  return <span aria-hidden="true" className="cta-arrow">→</span>;
}

function CheckIcon() {
  return <span aria-hidden="true" className="check-icon">✓</span>;
}

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a className={`cta ${className}`} href={CHECKOUT_HREF}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveCarousel = (direction: number) => {
    carouselRef.current?.scrollBy({
      left: carouselRef.current.clientWidth * 0.82 * direction,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to Nature — início">
          <span className="brand-mark"><img src="/favicon.png" alt="" width="40" height="40" /></span>
          <span>BACK TO NATURE</span>
        </a>
        <span className="header-mantra">EAT GOOD <i /> LOOK GOOD <i /> FEEL GOOD</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span /> Protocolo Back to Nature</span>
            <h1>Assista o vídeo abaixo <em>até o final</em> antes de continuar</h1>
            <p className="hero-lead">Vou te mostrar por que sua energia, sua libido e sua disposição caíram — e por que isso não é sobre força de vontade. É sobre o que a indústria alimentar te ensinou a comer.</p>

            <div className="vsl-frame">
              {/* Substitua este placeholder pelo embed da VSL oficial. */}
              <button className="play-button" type="button" aria-label="Reproduzir vídeo de apresentação">
                <span aria-hidden="true" />
              </button>
              <div className="vsl-caption">
                <span>APRESENTAÇÃO EXCLUSIVA</span>
                <strong>Dê o play e entenda a causa.</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Léo Frota treinando com halteres">
            <img src="/images/1785530370386_image.png" alt="Léo Frota durante treino intenso com halteres" width="840" height="1500" />
            <div className="hero-stamp">
              <strong>VOLTE</strong>
              <span>A SENTIR-SE VIVO</span>
            </div>
          </div>
        </div>
      </section>

      <section className="delivery-section" aria-labelledby="delivery-title">
        <div className="container">
          <div className="delivery-heading">
            <div>
              <span className="section-number">O QUE VOCÊ RECEBE</span>
              <h2 id="delivery-title">Não é só um curso.<br /><em>É um plano feito com você.</em></h2>
            </div>
            <p>Assim que entrar, você recebe todo o conhecimento do Back to Nature e o acompanhamento direto para transformar esse conhecimento em uma rotina feita para o seu corpo.</p>
          </div>

          <div className="delivery-grid">
            <article><span>01</span><h3>Curso completo</h3><p>Os 7 módulos do Método Libertação Ancestral, do fundamento à aplicação.</p></article>
            <article><span>02</span><h3>Consultoria com o Léo</h3><p>Uma orientação personalizada para entender seu momento, objetivo e rotina.</p></article>
            <article><span>03</span><h3>Treino personalizado</h3><p>Um treino montado pelo Léo para o seu nível e para onde você quer chegar.</p></article>
            <article><span>04</span><h3>Dieta personalizada</h3><p>Uma estratégia alimentar montada para você, alinhada ao protocolo e à sua realidade.</p></article>
            <article><span>05</span><h3>Bônus + acesso vitalício</h3><p>Materiais práticos, futuras atualizações e liberdade para rever quando quiser.</p></article>
          </div>

          <div className="carousel-header">
            <div><span className="section-number">BACK TO NATURE NA PRÁTICA</span><h3>O método que o Léo vive todos os dias.</h3></div>
            <div className="carousel-controls">
              <button type="button" onClick={() => moveCarousel(-1)} aria-label="Imagem anterior">←</button>
              <button type="button" onClick={() => moveCarousel(1)} aria-label="Próxima imagem">→</button>
            </div>
          </div>
          <div className="creator-carousel" ref={carouselRef}>
            {currentLeoImages.map((item, index) => (
              <figure key={item.image}>
                <img loading="lazy" src={item.image} alt={`${item.label}, foto ${index + 1} de Léo Frota`} width="950" height="1268" />
                <figcaption><span>0{index + 1}</span><strong>{item.label}</strong></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-cta">
        <div className="container quick-cta-inner">
          <p>Se você já se identificou com tudo isso, não precisa esperar. <strong>O método está disponível agora.</strong></p>
          <CTA>Quero recuperar minha energia — R$97</CTA>
        </div>
      </section>

      <section className="section blame-section">
        <div className="container split-copy">
          <div>
            <span className="section-number">01 / A CAUSA</span>
            <h2>Não é culpa sua.<br /><em>Mas agora é sua responsabilidade.</em></h2>
          </div>
          <div className="body-copy">
            <p>Você foi ensinado a ter medo da comida natural. A contar calorias sem olhar para a qualidade. A trocar carne, ovos e frutas por produtos “fit” embalados, fórmulas mágicas e falsas conveniências.</p>
            <p><strong>A indústria lucra quando você terceiriza suas escolhas.</strong> Enquanto isso, sua saciedade, sua energia e sua disposição pagam a conta.</p>
            <p>O primeiro passo não é fazer mais força. É enxergar o que te afastou daquilo que seu corpo reconhece como alimento.</p>
          </div>
        </div>
        <div className="marquee" aria-hidden="true">
          <span>MENOS PRODUTO. MAIS ALIMENTO. MENOS CONFUSÃO. MAIS AUTONOMIA.</span>
          <span>MENOS PRODUTO. MAIS ALIMENTO. MENOS CONFUSÃO. MAIS AUTONOMIA.</span>
        </div>
      </section>

      <section className="section transformation">
        <div className="container">
          <div className="section-heading">
            <span className="section-number">02 / A TRANSFORMAÇÃO</span>
            <h2>Eu não nasci assim.<br /><em>Eu encontrei o caminho.</em></h2>
            <p>Antes de ensinar o protocolo, eu precisei sair do mesmo lugar em que talvez você esteja agora.</p>
          </div>

          <div className="comparison primary-comparison">
            <figure>
              <div className="image-wrap"><img loading="lazy" src="/images/1785530233131_image.png" alt="Léo antes da mudança de estilo de vida" width="950" height="1268" /></div>
              <figcaption><span>ANTES</span><strong>Distante do meu potencial</strong></figcaption>
            </figure>
            <div className="versus" aria-hidden="true">VS</div>
            <figure>
              <div className="image-wrap"><img loading="lazy" src="/images/1785530326793_image.png" alt="Léo após aplicar seu novo estilo de vida" width="950" height="1268" /></div>
              <figcaption><span>DEPOIS</span><strong>Energia que aparece no corpo</strong></figcaption>
            </figure>
          </div>

          <div className="story-row">
            <div className="comparison mini-comparison">
              <figure><img loading="lazy" src="/images/1785530315808_image.png" alt="Léo em sua antiga rotina com fast-food" width="510" height="512" /><span>Velha rotina</span></figure>
              <figure><img loading="lazy" src="/images/1785530373363_image.png" alt="Léo atualmente em frente ao espelho" width="950" height="1268" /><span>Nova identidade</span></figure>
            </div>
            <div className="story-copy">
              <span className="quote-mark" aria-hidden="true">“</span>
              <p>Minha virada não aconteceu quando encontrei uma dieta perfeita. Aconteceu quando parei de delegar minha saúde e reaprendi a comer.</p>
              <p>O Back to Nature é o caminho que eu mesmo percorri, organizado para você não precisar juntar peças soltas por anos.</p>
              <CTA className="cta-secondary">Quero seguir esse caminho</CTA>
            </div>
          </div>
        </div>
      </section>

      <section className="section food-section">
        <div className="container">
          <div className="food-heading">
            <div>
              <span className="section-number">03 / COMIDA DE VERDADE</span>
              <h2>Seu corpo não precisa<br />de mais um <em>produto.</em></h2>
            </div>
            <p>Comida de verdade não é sobre contar cada caloria. É sobre voltar a reconhecer qualidade, densidade nutricional e saciedade.</p>
          </div>
          <div className="food-grid">
            {foods.map((food, index) => (
              <figure className={`food-card food-${index + 1}`} key={food.title}>
                <img loading="lazy" src={food.image} alt={food.title} width="900" height="1200" />
                <figcaption><span>0{index + 1}</span><strong>{food.title}</strong><p>{food.text}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-section">
        <div className="container solution-grid">
          <div className="solution-photo">
            <img loading="lazy" src="/images/1785530329200_image.png" alt="Léo preparando comida de verdade em casa" width="950" height="1425" />
            <span>COMIDA QUE CONSTRÓI</span>
          </div>
          <div className="solution-copy">
            <span className="section-number">04 / A SOLUÇÃO</span>
            <p className="pretitle">Método Libertação Ancestral</p>
            <h2>Volte ao essencial.<br /><em>Reconstrua de dentro pra fora.</em></h2>
            <div className="method-steps">
              <div><span>01</span><p><strong>Desprogramar</strong>Remover o medo e as crenças que confundem suas escolhas.</p></div>
              <div><span>02</span><p><strong>Reaproximar</strong>Voltar à comida que seu corpo reconhece e sabe usar.</p></div>
              <div><span>03</span><p><strong>Reconstruir</strong>Criar uma rotina forte, autônoma e sustentável.</p></div>
            </div>
            <blockquote>“A dieta pode acabar. O conhecimento e a autonomia permanecem.”</blockquote>
          </div>
        </div>
      </section>

      <section className="section modules-section">
        <div className="container">
          <div className="modules-heading">
            <div>
              <span className="section-number">05 / O PROTOCOLO</span>
              <h2>O que você recebe</h2>
            </div>
            <p>Uma jornada em 7 módulos para entender, aplicar e sustentar uma alimentação mais natural.</p>
          </div>
          <div className="modules-list">
            {modules.map(([number, title, text]) => (
              <article className="module-row" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
          <div className="bonus-box">
            <div><span className="bonus-kicker">INCLUÍDO</span><h3>Bônus para tirar o conhecimento do papel</h3></div>
            <ul>{bonuses.map((bonus) => <li key={bonus}><CheckIcon />{bonus}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="offer-section" id="checkout">
        <div className="container offer-grid">
          <div className="offer-copy">
            <span className="eyebrow"><span /> Condição de acesso</span>
            <h2>Comece hoje a voltar para a sua <em>melhor versão.</em></h2>
            <ul>
              <li><CheckIcon /> 7 módulos completos</li>
              <li><CheckIcon /> Consultoria personalizada com treino e dieta montados pelo Léo</li>
              <li><CheckIcon /> Todos os bônus incluídos</li>
              <li><CheckIcon /> Acesso imediato e vitalício</li>
            </ul>
          </div>
          <div className="price-card">
            <span className="price-label">PREÇO ESPECIAL DE LANÇAMENTO</span>
            <p className="old-price">De <s>R$397</s> por apenas:</p>
            <div className="price"><small>R$</small><strong>97</strong><span>pagamento<br />único</span></div>
            <CTA>Quero meu acesso agora</CTA>
            <p className="payment-note">Cartão em até 12x, PIX ou boleto</p>
            <div className="secure-note"><CheckIcon /><span><strong>Acesso imediato</strong> após a confirmação do pagamento</span></div>
          </div>
        </div>
      </section>

      <section className="guarantee-section">
        <div className="container guarantee-inner">
          <div className="guarantee-seal"><strong>7</strong><span>DIAS</span></div>
          <div><span className="section-number">RISCO ZERO</span><h2>Experimente por 7 dias.<br /><em>Sem perguntas, sem burocracia.</em></h2></div>
          <p>Entre, assista e aplique. Se dentro de 7 dias você entender que o protocolo não é para você, basta solicitar o reembolso e devolveremos seu investimento.</p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="faq-heading"><span className="section-number">DÚVIDAS FREQUENTES</span><h2>Antes de<br />dar o passo.</h2><p>Ainda ficou alguma dúvida? Aqui estão as respostas mais importantes.</p></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div className={`faq-item ${isOpen ? "open" : ""}`} key={question}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}>
                    <span>{question}</span><i aria-hidden="true">{isOpen ? "−" : "+"}</i>
                  </button>
                  <div id={`faq-answer-${index}`} className="faq-answer" hidden={!isOpen}><p>{answer}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-grid">
          <div className="final-copy">
            <span className="eyebrow"><span /> A decisão é sua</span>
            <h2>Você pode continuar sentindo o que sente hoje — <em>ou pode dar o primeiro passo agora.</em></h2>
            <p>Enquanto está aqui. Enquanto a decisão ainda está clara.</p>
            <CTA>Quero começar o Back to Nature</CTA>
            <small>R$97 • acesso vitalício • 7 dias de garantia</small>
          </div>
          <div className="final-photo"><img loading="lazy" src="/images/1785530373363_image.png" alt="Léo Frota em sua forma atual" width="950" height="1268" /><span>LOOK GOOD.<br />FEEL GOOD.</span></div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner"><span className="brand"><span className="brand-mark"><img src="/favicon.png" alt="" width="40" height="40" /></span><span>BACK TO NATURE</span></span><p>© 2026 Léo Frota. Todos os direitos reservados.</p><a href="https://instagram.com/leoxfrota" target="_blank" rel="noreferrer">@leoxfrota</a></div>
        <p className="disclaimer container">Este produto oferece conteúdo educacional sobre alimentação e estilo de vida. Não substitui avaliação, diagnóstico ou acompanhamento médico ou nutricional individual. Resultados variam de pessoa para pessoa.</p>
      </footer>

      <a className="mobile-cta" href={CHECKOUT_HREF}><span>COMEÇAR AGORA</span><strong>R$97</strong></a>
    </main>
  );
}
