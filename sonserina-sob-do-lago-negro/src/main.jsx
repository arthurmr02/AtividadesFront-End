import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Waves, Shield, Droplets, BookOpen, Compass, Feather, Menu, X, ChevronRight, MoonStar } from 'lucide-react';
import './styles.css';

const photos = {
  hero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2200&q=85',
  library: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85',
  stone: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85',
  books: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=85',
  water: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85',
  candle: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85'
};

function SerpentCrest({ small = false }) {
  return <div className={`crest ${small ? 'crest-small' : ''}`} aria-label="Emblema original da página: serpente em escudo">
    <svg viewBox="0 0 100 120" role="img" aria-hidden="true">
      <path d="M50 5 L88 19 L84 68 Q78 94 50 112 Q22 94 16 68 L12 19 Z" fill="#1A472A" stroke="#AAAAAA" strokeWidth="1.5"/>
      <path d="M61 24 C42 17 29 31 37 42 C43 51 62 44 63 55 C64 65 44 66 35 58 C26 50 30 40 37 37" fill="none" stroke="#ECECEC" strokeWidth="4" strokeLinecap="round"/>
      <path d="M36 58 C44 69 62 69 66 82 C69 92 58 97 48 89 C40 83 44 75 51 75 C58 75 60 82 55 85" fill="none" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round"/>
      <path d="M60 24 L74 18 L67 32 Z" fill="#ECECEC"/>
      <circle cx="61" cy="27" r="1.8" fill="#111111"/>
      <path d="M27 25 L34 28 M72 43 L78 41 M27 72 L33 74" stroke="#2A7B4C" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>;
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>;
}

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [['A casa', '#casa'], ['Sala comunal', '#sala'], ['Curiosidades', '#arquivos']];
  return <header className="site-header">
    <a className="wordmark" href="#inicio" aria-label="Sonserina, voltar ao início"><SerpentCrest small /><span>SONSERINA</span></a>
    <button className="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Navegação principal">
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#arquivos" onClick={() => setOpen(false)}>Explorar <ArrowUpRight size={15}/></a>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero" id="inicio" style={{'--hero-image': `url("${photos.hero}")`}}>
    <div className="hero-grain" />
    <div className="hero-content">
      <div className="eyebrow"><span className="eyebrow-line"/><span>HOGWARTS · DESDE A FUNDAÇÃO</span><span className="eyebrow-line"/></div>
      <h1>Além das<br/><em>águas</em> escuras.</h1>
      <p className="hero-description">Há conhecimento nas profundezas. Há ambição em quem ousa procurá-lo.</p>
      <a className="button button-primary" href="#casa">Adentrar a casa <ArrowDown size={16}/></a>
    </div>
    <div className="hero-caption"><span>01 / O LAGO NEGRO</span><span>EST. SÉC. X</span></div>
    <div className="hero-side-note">A CÂMARA SOB AS ÁGUAS</div>
    <div className="crest-overlap"><SerpentCrest /></div>
  </section>;
}

function Intro() {
  return <section className="intro section-wrap" id="casa">
    <div className="intro-heading">
      <SectionLabel number="01">A CASA</SectionLabel>
      <h2>Nem toda grandeza<br/>precisa de <em>luz.</em></h2>
    </div>
    <div className="intro-copy">
      <p className="lead">Sob as águas do Lago Negro, existe um lugar onde a estratégia vale tanto quanto a coragem — e onde o potencial nunca é confundido com acaso.</p>
      <p>Sonserina reúne aqueles que enxergam caminhos onde outros veem limites. Ambição, engenhosidade e determinação são forças que, quando guiadas por propósito, podem mudar o curso da história.</p>
      <a className="text-link" href="#pilares">Conheça os pilares <ArrowUpRight size={16}/></a>
    </div>
    <div className="intro-ornament" aria-hidden="true"><span>AMBITION</span><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit-dot"/></div>
  </section>;
}

const facts = [
  { label: 'FUNDADOR', value: 'Salazar Slytherin', icon: Shield },
  { label: 'ELEMENTO', value: 'Água', icon: Droplets },
  { label: 'SÍMBOLO', value: 'Serpente', icon: Waves },
  { label: 'CORES', value: 'Verde e prata', icon: MoonStar }
];

function HouseFacts() {
  return <section className="facts-band" id="pilares">
    <div className="section-wrap facts-inner">
      <div className="facts-title">
        <SectionLabel number="02">IDENTIDADE</SectionLabel>
        <h2>Uma herança<br/><em>de ambição.</em></h2>
        <p>Uma casa definida não por um único destino, mas pela força de quem escolhe construí-lo.</p>
      </div>
      <div className="fact-grid">
        {facts.map(({label, value, icon: Icon}, i) => <article className="fact-card" key={label}>
          <div className="fact-card-top"><span>0{i+1}</span><Icon size={19} strokeWidth={1.4}/></div>
          <span className="fact-label">{label}</span><strong>{value}</strong>
        </article>)}
      </div>
    </div>
  </section>;
}

const pillars = [
  { number: 'I', title: 'Ambição', text: 'A vontade de ir além do que já existe e transformar intenção em conquista.' },
  { number: 'II', title: 'Engenhosidade', text: 'A capacidade de encontrar uma saída onde os outros enxergam apenas paredes.' },
  { number: 'III', title: 'Determinação', text: 'A disciplina silenciosa de continuar quando o caminho exige mais.' }
];

function Pillars() {
  return <section className="pillars section-wrap">
    <div className="pillars-heading"><SectionLabel number="03">OS PILARES</SectionLabel><h2>O poder está<br/>na <em>intenção.</em></h2></div>
    <div className="pillar-list">{pillars.map(p => <article className="pillar" key={p.number}>
      <span className="pillar-number">{p.number}</span><h3>{p.title}</h3><p>{p.text}</p><ChevronRight className="pillar-arrow" size={18}/>
    </article>)}</div>
  </section>;
}

function CommonRoom() {
  return <section className="common-room" id="sala">
    <div className="section-wrap">
      <div className="gallery-heading"><div><SectionLabel number="04">UM LUGAR ENTRE DOIS MUNDOS</SectionLabel><h2>A sala <em>comunal.</em></h2></div><p>Pedra antiga, reflexos esverdeados e o silêncio profundo de um lago que guarda mais do que revela.</p></div>
      <div className="gallery">
        <figure className="gallery-large"><img src={photos.library} alt="Biblioteca de atmosfera antiga, com estantes de livros" loading="lazy"/><figcaption><span>01 — O CONHECIMENTO</span><strong>O que permanece oculto também pode ser descoberto.</strong></figcaption></figure>
        <figure className="gallery-tall"><img src={photos.stone} alt="Arquitetura de pedra com linhas verticais" loading="lazy"/><figcaption><span>02 — A ESTRUTURA</span><strong>Força construída ao longo do tempo.</strong></figcaption></figure>
        <figure className="gallery-small"><img src={photos.books} alt="Livros e materiais de estudo em composição escura" loading="lazy"/><figcaption><span>03 — OS REGISTROS</span><strong>Cada resposta começa com uma pergunta.</strong></figcaption></figure>
        <figure className="gallery-wide"><img src={photos.water} alt="Paisagem de lago cercada por montanhas sob luz suave" loading="lazy"/><figcaption><span>04 — SOB A SUPERFÍCIE</span><strong>O silêncio das águas esconde outros caminhos.</strong></figcaption></figure>
      </div>
    </div>
  </section>;
}

const curiosities = [
  {
    id: '01', title: 'A Câmara Secreta',
    description: 'Uma lenda escondida sob Hogwarts.',
    icon: BookOpen,
    detail: 'Salazar Slytherin construiu uma câmara secreta no castelo e deixou nela um basilisco, esperando que um herdeiro seu um dia pudesse libertá-lo. Durante séculos, a existência da câmara permaneceu envolta em rumores. Em 1992, Tom Riddle manipulou Gina Weasley para reabrir a câmara e atacar estudantes nascidos-trouxas. Harry Potter encontrou a entrada, enfrentou o basilisco e pôs fim à ameaça.'
  },
  {
    id: '02', title: 'O legado de Salazar',
    description: 'A história de um dos quatro fundadores.',
    icon: Feather,
    detail: 'Salazar Slytherin foi um dos quatro fundadores de Hogwarts. Era conhecido por sua habilidade de falar com serpentes, a língua ofidioglota, e defendia que a educação mágica deveria ser reservada a famílias de sangue puro. Esse preconceito provocou um conflito com os outros fundadores e levou à sua saída da escola. Seu legado é complexo: ambição e astúcia são associadas à casa, mas suas crenças discriminatórias não representam todos os seus membros.'
  },
  {
    id: '03', title: 'O basilisco',
    description: 'A criatura que aterrorizou a escola.',
    icon: Compass,
    detail: 'O basilisco é uma serpente gigantesca cuja visão direta pode matar. Na Câmara Secreta, porém, as vítimas que o viram indiretamente — por reflexos ou através de outros meios — foram petrificadas, em vez de morrer. Harry enfrentou a criatura com a ajuda da fênix Fawkes e da espada de Godric Gryffindor. Uma presa do basilisco foi usada depois para destruir o diário de Tom Riddle, um dos objetos que guardavam parte de sua alma.'
  },
  {
    id: '04', title: 'A sala comunal',
    description: 'Um refúgio nas profundezas do lago.',
    icon: MoonStar,
    detail: 'A sala comunal da Sonserina fica nas masmorras de Hogwarts, abaixo do Lago Negro. O ambiente é descrito com paredes de pedra, luz esverdeada e grandes janelas pelas quais é possível observar a água e, por vezes, criaturas do lago passando. Essa localização dá à sala uma atmosfera silenciosa e misteriosa, distinta das áreas mais iluminadas do castelo.'
  }
];

function Archives() {
  const [expanded, setExpanded] = React.useState(null);
  return <section className="archives section-wrap" id="arquivos">
    <div className="archives-heading"><div><SectionLabel number="05">SEGREDOS DA CASA</SectionLabel><h2>Curiosidades da <em>Sonserina.</em></h2></div><p>Histórias, segredos e acontecimentos que deixaram marcas em Hogwarts. Selecione um cartão para descobrir mais.</p></div>
    <div className="archive-grid">{curiosities.map(({id,title,description,icon: Icon,detail}) => {
      const isExpanded = expanded === id;
      const panelId = `curiosity-detail-${id}`;
      return <article className={`archive-card${isExpanded ? ' archive-card-expanded' : ''}`} key={id}>
        <button className="archive-card-trigger" type="button" aria-expanded={isExpanded} aria-controls={panelId} onClick={() => setExpanded(isExpanded ? null : id)}>
          <span className="archive-top"><span>{id} / CURIOSIDADE</span><Icon size={20} strokeWidth={1.3}/></span>
          <span className="archive-card-title">{title}</span><span className="archive-card-description">{description}</span>
          <span className={`archive-arrow${isExpanded ? ' archive-arrow-open' : ''}`}><ArrowUpRight size={17}/></span>
        </button>
        {isExpanded && <div className="archive-detail" id={panelId}>
          <p>{detail}</p>
          <button className="archive-close" type="button" onClick={() => setExpanded(null)}>Fechar curiosidade <span aria-hidden="true">−</span></button>
        </div>}
      </article>;
    })}</div>
    <p className="spoiler-note">Contém spoilers de acontecimentos dos livros e filmes de Harry Potter.</p>
  </section>;
}

function Manifesto() {
  return <section className="manifesto" id="manifesto">
    <div className="manifesto-bg" style={{backgroundImage:`url("${photos.candle}")`}}/>
    <div className="manifesto-content"><SerpentCrest/><SectionLabel number="06">A ÚLTIMA PALAVRA</SectionLabel>
      <h2>O que está<br/>nas profundezas<br/><em>também floresce.</em></h2>
      <a href="#inicio" className="button button-outline">Voltar ao início <ArrowUpRight size={16}/></a>
    </div>
  </section>;
}

function Footer() {
  return <footer className="footer"><a className="footer-mark" href="#inicio">SONSERINA <span>✦</span></a><p>Um projeto de fã, sem fins comerciais. Harry Potter é uma obra de seus respectivos titulares.</p><a href="#inicio" className="back-top">VOLTAR AO TOPO ↑</a></footer>;
}

function App() {
  return <><Header/><main><Hero/><Intro/><HouseFacts/><Pillars/><CommonRoom/><Archives/><Manifesto/></main><Footer/></>;
}

createRoot(document.getElementById('root')).render(<App/>);