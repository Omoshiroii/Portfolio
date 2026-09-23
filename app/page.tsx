/* eslint-disable @next/next/no-img-element */
import Script from 'next/script';

const github = 'https://github.com/Omoshiroii';
const linkedin = 'https://www.linkedin.com/in/taha-zerrad-a9601a241/';

function Bat({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 120 52" fill="currentColor" aria-hidden="true"><path d="M2 4C17 14 22 13 34 10L32 25L49 21L54 7L59 15H63L68 7L72 22L88 25L86 10C99 14 106 12 118 4C111 19 108 25 112 36C94 27 84 31 78 42C68 34 64 39 60 51C56 39 52 34 42 42C35 31 26 27 8 36C12 25 9 18 2 4Z" /></svg>;
}
function Arrow() { return <span aria-hidden="true">↗</span>; }

function JokerGraffiti() {
  return <div className="joker-graffiti" aria-hidden="true">
    <svg className="joker-smile" viewBox="0 0 800 300" fill="none">
      <defs>
        <path id="smile-baseline" d="M45 90 Q370 275 755 75" />
        <filter id="rough-ink"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="3" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="3" /></filter>
      </defs>
      <g filter="url(#rough-ink)">
        <text><textPath href="#smile-baseline" startOffset="50%" textAnchor="middle">WHY SO SERIOUS?</textPath></text>
        <path className="smile-stroke" d="M30 95 Q335 357 770 95 M49 126 Q370 338 750 132 M30 96 L56 158 M770 95 L744 159" />
        <path className="ink-drips" d="M181 221l-5 34m86-9-2 43m372-62 5 36m49-61 3 22" />
      </g>
    </svg>
    <span className="margin-madness">HA<br />HA<br />HA!</span>
    <span className="graffiti-question">?</span>
    <svg className="graffiti-arrow" viewBox="0 0 160 210" fill="none"><path d="M18 190C154 162 164 72 83 26M82 26L89 69M82 26L125 39M26 186L19 198" /></svg>
    <svg className="blood-spatter" viewBox="0 0 200 220" fill="currentColor"><path d="M89 90c-7-6-8-18-13-15s4 16-1 19-18-4-18 1 16 4 15 10-13 10-8 13 14-10 19-5-1 17 5 16 4-14 10-12 9 10 12 5-8-12-3-17 22-1 20-6-19 2-20-4 7-15 2-17-5 17-12 15Z" /><circle cx="123" cy="66" r="5" /><circle cx="57" cy="80" r="3" /><circle cx="144" cy="123" r="6" /><circle cx="123" cy="149" r="2" /><circle cx="71" cy="152" r="4" /><circle cx="159" cy="92" r="2" /><circle cx="39" cy="116" r="2" /><path d="m96 109 2 83-4 9-2-12Zm46 14 3 43-4 9-2-15Z" /></svg>
    <span className="red-scrawl">a little more chaos.</span>
  </div>;
}

const projects = [
  { id: 'cinephoria', category: 'web', number: '01', label: 'WEB DEVELOPMENT', title: 'Cinephoria', description: 'Three weeks. One team. A cinema experience brought to life with code.', tags: 'PHP / MYSQL / JAVASCRIPT', image: 'cinephoria.jpeg', alt: 'Cinephoria cinema website with film listings' },
  { id: 'dashboard', category: 'data', number: '02', label: 'DATA EXPLORATION', title: 'Making data speak.', description: 'Finding the story inside the numbers. An exploration of Python and visual analytics.', tags: 'PYTHON / PANDAS / PLOTLY', image: '', alt: '' },
  { id: 'calculator', category: 'web', number: '03', label: 'THE FIRST CHAPTER', title: 'Small build. Big start.', description: 'The humble calculator that turned curiosity into something I could actually use.', tags: 'HTML / CSS / JAVASCRIPT', image: 'calculator.png', alt: 'Calculator project with number pad and a display' },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to the front page</a>
      <div className="desk-label" aria-hidden="true"><span>THE INDEPENDENT PORTFOLIO OF TAHA ZERRAD</span><span>DESIGNED AFTER DARK. BUILT WITH PURPOSE.</span></div>
      <main className="newspaper" id="main-content">
        <div className="front-edition" id="home" data-nav-section>
        <div className="paper-wear" aria-hidden="true" />
        <header className="masthead-header">
          <a className="edition-badge" href="#home" aria-label="The Gotham Times front page"><Bat /><span>THE PORTFOLIO EDITION</span></a>
          <div className="masthead-center"><p className="overline">GOTHAM CITY’S ONLY INDEPENDENT VOICE · EST. IN THE SHADOWS</p><a className="masthead" href="#home">The Gotham Times</a></div>
          <div className="edition-date"><strong>28<sup>TH</sup></strong><span>NOVEMBER</span></div>
        </header>
        <div className="dawn-ribbon">THE NIGHT IS DARKEST JUST BEFORE THE DAWN</div>
        <div className="edition-line"><span>VOL. 01 / NO. 028</span><span className="edition-line-middle">THE TAHA ZERRAD PORTFOLIO EDITION</span><span>GOTHAM CITY · PRICE: ONE SLEEPLESS NIGHT</span></div>
        <div className="nav-wrap">
          <button className="menu-toggle" type="button" data-menu-toggle aria-controls="edition-nav" aria-expanded="false">EXPLORE THE EDITION <span aria-hidden="true">☰</span></button>
          <nav className="edition-nav" id="edition-nav" aria-label="Main navigation">
            <a href="#home" data-section-link aria-current="location">Front page</a><a href="#about" data-section-link>The story</a><a href="#work" data-section-link>Selected work</a><a href="#skills" data-section-link>The arsenal</a><a href="#contact" data-section-link>Send a signal <Arrow /></a>
          </nav>
        </div>

        <section className="front-page" aria-labelledby="hero-title">
          <div className="front-page-kicker"><span><i className="red-square" /> SPECIAL REPORT / A CITY ON THE EDGE</span><span>FEAR. OBSESSION. THE WILL TO BUILD.</span></div>
          <h1 className="hero-title" id="hero-title"><svg className="hero-wordmark" viewBox="0 0 1200 215" preserveAspectRatio="none" aria-hidden="true"><defs><pattern id="headline-ink" patternUnits="userSpaceOnUse" width="1200" height="215"><rect width="1200" height="215" fill="#171916" /><image href="public/assets/gotham-edition.jpeg" width="1200" height="1680" y="-267" opacity=".7" /><rect width="1200" height="215" fill="#171916" opacity=".25" /></pattern></defs><text x="4" y="210" textLength="1192" lengthAdjust="spacingAndGlyphs" fill="url(#headline-ink)">TAHA ZERRAD</text></svg><span className="sr-only">Taha Zerrad — The Gotham Times engineering portfolio</span></h1>
          <div className="headline-banner"><span>WILL THE DARK KNIGHT RISE TONIGHT?</span><Bat /></div>
          <div className="hero-scene">
            <aside className="joker-poster" aria-label="Gotham Theater Joker poster">
              <span className="poster-top">ONE NIGHT ONLY</span><span className="poster-tonight">TONIGHT</span>
              <strong className="poster-live">LIVE</strong><strong className="poster-joker">JOKER</strong>
              <div className="poster-face" role="img" aria-label="A grainy portrait of the Joker" />
              <span className="poster-theater">GOTHAM THEATER</span><span className="poster-fine">NO RULES. NO REFUNDS. NO WAY OUT.</span>
            </aside>
            <figure className="gotham-photograph">
              <svg className="photo-print" viewBox="238 467 445 266" preserveAspectRatio="xMidYMin slice" role="img" aria-label="A distressed newspaper photograph of Batman looking back over his shoulder in Gotham"><image href="public/assets/gotham-edition.jpeg" width="735" height="1029" /></svg>
              <div className="photo-dateline"><span>GOTHAM CITY / CRIME &amp; CONSEQUENCE</span><span>EXCLUSIVE PHOTOGRAPH · 01</span></div>
              <div className="flying-bats" aria-hidden="true"><Bat /><Bat /><Bat /><Bat /><Bat /></div>
              <span className="photo-evidence" aria-hidden="true">EVIDENCE<br /><b>01—28</b></span>
              <figcaption><span>THE CITY SLEEPS. THE WORK DOESN’T.</span><span>PHOTOGRAPH FROM THE GOTHAM ARCHIVE</span></figcaption>
            </figure>
          </div>
          <div className="front-columns">
            <article className="identity-column">
              <p className="panel-label">BEHIND THE MASK / THE DEVELOPER</p><h2>TAHA ZERRAD.</h2>
              <p className="article-byline">Engineering student. Builder after dark.</p>
              <p className="drop-cap">Every city has a story. This one is mine. I’m Taha, an engineering student turning stubborn curiosity into software. My tools are code, a restless mind, and the willingness to start again.</p>
              <a className="ink-button" href="#work">EXAMINE THE WORK <Arrow /></a>
            </article>
            <article className="dispatch-column">
              <p className="panel-label">DISPATCH 01 / THE ORIGIN</p><h3>No cape.<br />Just conviction.</h3>
              <p>It started with HTML, CSS, and a need to understand the machinery behind the screen. A diploma in full-stack development followed. Now, Computer Engineering and Networks is the next chapter.</p>
              <p>Some nights are spent chasing a bug. Others, chasing an idea. Both are part of the story.</p><a className="article-link" href="#about">CONTINUED ON PAGE 02 <Arrow /></a>
            </article>
            <article className="dispatch-column case-column">
              <p className="panel-label">DISPATCH 02 / THE EVIDENCE</p><h3>The work leaves<br />a paper trail.</h3>
              <p>A cinema experience built with a team in three weeks. Data experiments that find the story inside the numbers. Small first builds that became the foundation for something bigger.</p>
              <div className="mini-classified"><span>OPEN THE CASE FILES</span><a href="#work">01 / CINEPHORIA <Arrow /></a><a href="#work">02 / DATA EXPLORATION <Arrow /></a><a href="#work">03 / THE FIRST BUILD <Arrow /></a></div>
            </article>
            <aside className="classified-column">
              <blockquote className="joker-quote"><strong>“PUT A SMILE<br />ON THAT FACE.”</strong><cite>— JOKER</cite></blockquote>
              <p className="panel-label">PERSONAL ADS / THE SIGNAL IS OPEN</p><p>Wanted: good ideas, difficult problems, and people who care about what they build.</p>
              <a className="signal-classified" href="#contact"><Bat /><span>GOT A MISSION?<small>SEND A SIGNAL <Arrow /></small></span></a>
            </aside>
          </div>
          <div className="hero-ribbon"><span>THE NIGHT IS DARKEST JUST BEFORE THE DAWN.</span><a href="#about">TURN THE PAGE ↓</a></div>
        </section>
        <JokerGraffiti />
        </div>
        <div className="edition-controls"><span><i /> LIVE FROM THE NIGHT SHIFT · TAHA ZERRAD</span><button className="motion-toggle" type="button" aria-pressed="false">PAUSE EFFECTS</button><span>THE STORY CONTINUES BELOW ↓</span></div>

        <section className="story-section paper-section" id="about" data-nav-section aria-labelledby="story-heading">
          <div className="section-heading"><span className="section-label">02 / THE ORIGIN STORY</span><span className="section-rule" /><span className="section-aside">EVERY HERO STARTS SOMEWHERE.</span></div>
          <div className="story-layout">
            <div className="story-portrait"><div className="portrait-frame"><img src="public/assets/portrait.png" alt="Portrait of Taha Zerrad" width="600" height="700" loading="lazy" /><span className="photo-label">THE MAN BEHIND THE KEYBOARD</span></div><span className="handwritten portrait-note">No superpowers.<br />Just persistence.</span></div>
            <article className="story-copy"><p className="eyebrow">PROFILE / TAHA ZERRAD</p><h2 id="story-heading">An ordinary student.<br /><em>An extraordinary appetite.</em></h2><div className="story-columns"><p className="drop-cap">I didn’t start with all the answers. I started with HTML, CSS and a stubborn need to understand how things work. At OFPPT–ISMO, that curiosity became a diploma in web development.</p><p>Now, I’m studying Computer Engineering and Networks. I’m building a stronger foundation in software while exploring the worlds of artificial intelligence, data and cloud computing. The goal is simple: keep learning until I can build things that matter.</p></div><blockquote>“The work is the story.<br />Make it worth reading.”</blockquote><a href={github} target="_blank" rel="noreferrer" className="text-link">FOLLOW THE JOURNEY ON GITHUB <Arrow /></a></article>
            <aside className="timeline"><h3>THE MAKING OF A BUILDER</h3><ol><li><span>2023 — 2025</span><h4>The foundations</h4><p>Web Development / Fullstack<br />OFPPT–ISMO</p></li><li><span>2025 — PRESENT</span><h4>A bigger mission</h4><p>Computer Engineering<br />&amp; Networks</p></li><li><span>THE ROAD TO 2028</span><h4>Beyond the familiar</h4><p>Growing toward AI, data engineering and cloud systems.</p></li></ol><div className="timeline-stamp">WORK IN<br />PROGRESS</div></aside>
          </div>
        </section>

        <section className="work-section paper-section" id="work" data-nav-section aria-labelledby="work-heading">
          <div className="section-heading"><span className="section-label">03 / EVIDENCE OF WORK</span><span className="section-rule" /><span className="section-aside">IDEAS ARE EASY. BUILDING IS THE STORY.</span></div>
          <div className="work-heading-row"><h2 className="section-title" id="work-heading">The work speaks.</h2><div className="project-filters" role="group" aria-label="Filter projects"><button type="button" data-filter="all" aria-pressed="true">ALL STORIES</button><button type="button" data-filter="web" aria-pressed="false">WEB</button><button type="button" data-filter="data" aria-pressed="false">DATA</button></div></div>
          <div className="projects-grid">
            {projects.map(project => <article className={'project-card project-' + project.id} key={project.id} data-project-category={project.category}>
              <button className="project-visual" type="button" data-open-case={project.id} aria-label={'Read the ' + project.title + ' project story'}>
                {project.image ? <img src={'public/assets/' + project.image} alt={project.alt} loading="lazy" width="600" height="400" /> : <div className="data-art" aria-hidden="true"><span>FIELD NOTES / DATA LAB</span><div className="data-bars">{[32, 48, 41, 67, 55, 83, 72, 96].map((height, i) => <i key={i} style={{ height: height + '%' }} />)}</div><strong>BEHIND EVERY NUMBER,<br />THERE’S A STORY.</strong><small>AN EXPLORATION IN PYTHON</small></div>}
                <span className="project-number">EXHIBIT {project.number}</span><span className="project-open" aria-hidden="true">↗</span>
              </button>
              <p className="eyebrow">{project.label}</p><h3><button type="button" data-open-case={project.id}>{project.title}</button></h3><p className="project-description">{project.description}</p><div className="project-meta"><span>{project.tags}</span><button type="button" data-open-case={project.id} aria-label={'Details for ' + project.title}><Arrow /></button></div>
            </article>)}
          </div>
          <div className="work-footer"><span data-filter-status role="status" aria-live="polite">3 stories in this edition</span><a className="text-link" href={github} target="_blank" rel="noreferrer">MORE FROM THE LAB ON GITHUB <Arrow /></a></div>
        </section>

        <section className="skills-section paper-section" id="skills" data-nav-section aria-labelledby="skills-heading">
          <div className="section-heading"><span className="section-label">04 / THE ARSENAL</span><span className="section-rule" /><span className="section-aside">NO GADGET BELT. JUST THE RIGHT TOOLS.</span></div>
          <div className="skills-heading"><h2 className="section-title" id="skills-heading">Curiosity, fully equipped.</h2><p>The tools I build with, the systems I’m exploring,<br />and the things that keep me up past midnight.</p></div>
          <div className="skills-grid"><article><span className="skill-number">I.</span><h3>Build the experience.</h3><p>A foundation in web development.<br />Turning ideas into working interfaces.</p><ul><li>JavaScript</li><li>React</li><li>HTML &amp; CSS</li><li>PHP</li><li>Laravel</li><li>Node.js</li></ul><span className="skill-status">THE FOUNDATION</span></article><article><span className="skill-number">II.</span><h3>Connect the dots.</h3><p>Exploring the patterns behind the data.<br />Learning to ask better questions.</p><ul><li>Python</li><li>SQL</li><li>MongoDB</li><li>Pandas</li><li>AI / ML fundamentals</li></ul><span className="skill-status">THE EXPLORATION</span></article><article><span className="skill-number">III.</span><h3>Think beyond the screen.</h3><p>Understanding how systems fit together.<br />Building stronger engineering habits.</p><ul><li>Git &amp; GitHub</li><li>Linux</li><li>Docker</li><li>Java</li><li>C++</li><li>Cloud fundamentals</li></ul><span className="skill-status">THE NEXT FRONTIER</span></article></div>
          <div className="editor-note"><span>EDITOR’S NOTE</span><p>These are tools in a growing toolkit. Mastery is the mission, not a claim.</p><Bat /></div>
        </section>

        <section className="contact-section" id="contact" data-nav-section aria-labelledby="contact-heading"><div className="contact-copy"><p className="eyebrow">05 / THE SIGNAL IS OPEN</p><h2 id="contact-heading">GOT A <em>MISSION?</em></h2><p>A project, an idea, or a good conversation.<br />Every great collaboration starts with a signal.</p><div className="contact-links"><a className="button button-paper" href={linkedin} target="_blank" rel="noreferrer">LET’S CONNECT <Arrow /></a><a className="contact-github" href={github} target="_blank" rel="noreferrer">FIND ME ON GITHUB <Arrow /></a></div></div><div className="signal-art" aria-hidden="true"><div className="signal-circle"><Bat /></div><span className="handwritten">Your move.</span></div></section>
        <footer className="paper-footer"><a href="#home" className="footer-brand">The Gotham Times</a><p>© <span data-year>2026</span> TAHA ZERRAD. STILL WRITING THE STORY.</p><button type="button" data-print-edition>PRINT THIS EDITION <span aria-hidden="true">↗</span></button><a href="#home" aria-label="Back to top" className="back-top">↑</a></footer>
        <div className="closing-line">THE NIGHT IS DARKEST JUST BEFORE THE DAWN.</div>
      </main>
      <div className="desk-footer"><span>END OF THIS EDITION. NOT THE STORY.</span><Bat /><span>CRAFTED WITH CURIOSITY &amp; A LITTLE OBSESSION.</span></div>

      {projects.map(project => <dialog className="case-dialog" id={'case-' + project.id} key={project.id} aria-labelledby={'case-title-' + project.id}><div className="dialog-top"><span>THE GOTHAM TIMES / EXHIBIT {project.number}</span><button data-close-dialog type="button" aria-label="Close project story">×</button></div><p className="eyebrow">{project.label}</p><h2 id={'case-title-' + project.id}>{project.title}</h2>{project.image && <img className="dialog-image" src={'public/assets/' + project.image} alt={project.alt} loading="lazy" width="600" height="400" />}<div className="dialog-body">{project.id === 'cinephoria' ? <><h3>A team effort, from concept to screen.</h3><p>Cinephoria is a cinema web development project completed with a group in three weeks. It brought PHP, MySQL and JavaScript together in one build, with the challenge of turning an idea into a working experience as a team.</p><p><strong>The lesson:</strong> a good build takes more than code. It takes communication, shared decisions and a willingness to solve problems together.</p></> : project.id === 'dashboard' ? <><h3>Learning to see the bigger picture.</h3><p>A learning project exploring interactive data visualization with Python, Pandas and Plotly. The focus is understanding how data becomes a useful visual story.</p><p><strong>The exploration:</strong> working with data, experimenting with charts and developing the analytical habits that support a future in AI and data engineering.</p><p className="case-note">The newspaper graphic is an editorial illustration of this project.</p></> : <><h3>Every origin story has a first build.</h3><p>A calculator built with HTML, CSS and JavaScript. A small project that made the connection between interface, user input and application logic click.</p><p><strong>The lesson:</strong> simple projects are where the fundamentals become real. Building, testing and improving beats simply reading about it.</p></>}</div><p className="case-tags">{project.tags}</p><div className="dialog-actions">{project.id === 'calculator' && <a className="button button-red" href="https://omoshiroii.github.io/Simple-Calculator/" target="_blank" rel="noreferrer">OPEN LIVE PROJECT <Arrow /></a>}<a className="text-link" href={github} target="_blank" rel="noreferrer">EXPLORE MY GITHUB <Arrow /></a></div></dialog>)}
      <Script src="public/newspaper.js" strategy="afterInteractive" />
    </>
  );
}

