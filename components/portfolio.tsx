/* eslint-disable @next/next/no-img-element */
import Script from 'next/script';

const github = 'https://github.com/Omoshiroii';
const linkedin = 'https://www.linkedin.com/in/taha-zerrad-a9601a241/';

function Bat({ className = '' }: { className?: string }) {
  return <svg className={'bat-mark ' + className} viewBox="0 0 1040 320" fill="currentColor" aria-hidden="true" focusable="false"><path d="M0 0H354C353 50 389 86 434 87C451 87 468 81 479 74L495 13L498 54C511 44 529 44 542 54L545 13L561 74C572 81 589 87 606 87C651 86 687 50 686 0H1040C951 2 869 63 856 143C853 163 853 182 854 198C738 170 607 204 520 320C433 204 302 170 186 198C187 182 187 163 184 143C171 63 89 2 0 0Z" /></svg>;
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
        <text textLength="690" lengthAdjust="spacingAndGlyphs"><textPath href="#smile-baseline" startOffset="50%" textAnchor="middle">WHY SO SERIOUS?</textPath></text>
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

type Project = {
  id: string; category: 'web' | 'data' | 'systems'; number: string;
  label: string; title: string; description: string; tags: string;
  image: string; alt: string; details: string;
  gallery?: { image: string; caption: string }[]; fallback?: string;
  repo?: string; live?: string; contribution?: boolean; privateRepo?: boolean;
};

// Add a filename from public/assets/ to `image` when a screenshot is ready.
// Keep missing images empty: ProjectPreview renders an intentional image space.
const projects: Project[] = [
  { id: 'lilook', category: 'web', number: '01', label: 'JEWELRY SHOP', title: 'LILOOK', description: 'A jewelry storefront built for a client, from the collection to the shopping experience.', tags: 'NEXT.JS / REACT / EXPRESS / MONGODB', image: 'lilook.png', alt: 'LILOOK jewelry storefront with its collection and pink accents', details: 'A full-stack jewelry catalogue and storefront. Explore the live experience or browse the source code.', repo: 'https://github.com/Omoshiroii/jewelry-shop', live: 'https://lilook.vercel.app' },
  { id: 'adsum', category: 'data', number: '02', label: 'AI / ATTENDANCE', title: 'ADSUM', description: 'Contributed to a real-time attendance system using facial recognition.', tags: 'PYTHON / OPENCV / INSIGHTFACE / ONNX', image: 'projects/adsum.png', alt: 'ADSUM attendance command deck', details: 'My contribution included GPU-aware inference and a persistent worker with vectorized embedding matching, keeping AI processing separate from the interface.', repo: 'https://github.com/H4zeyaf/Adsum-B', contribution: true, privateRepo: true },
  { id: 'campus', category: 'systems', number: '03', label: 'SCHOOL MANAGEMENT', title: 'Campus des Nobles', description: 'A school management system developed in C++.', tags: 'C++', image: 'projects/campus.png', alt: 'Campus des Nobles school management console', details: 'An application for school management, built as a C++ project. The repository contains the implementation.', repo: 'https://github.com/Omoshiroii/Campus-des-Nobles' },
  { id: 'task-manager', category: 'web', number: '04', label: 'EVERYDAY TOOLS', title: 'Task Manager', description: 'A personal task manager for organizing work and tracking progress.', tags: 'HTML / CSS / JAVASCRIPT', image: 'projects/taskmngr.png', alt: 'Task Manager planner with task filters and progress', details: 'A practical project to strengthen web development fundamentals while building a tool I can use myself.', repo: 'https://github.com/Omoshiroii/Task-Manager-App', live: 'https://omoshiroii.github.io/Task-Manager-App/' },
  { id: 'library', category: 'web', number: '05', label: 'LARAVEL APPLICATION', title: 'Library', description: 'A library project built with Laravel.', tags: 'LARAVEL / PHP', image: 'projects/library-primary.jpg', fallback: 'projects/library-backup.jpg', alt: 'Library shelves — illustrative photograph', details: 'A Laravel project focused on a library application. Source access depends on the repository’s visibility.', repo: 'https://github.com/Omoshiroii/library', privateRepo: true },
  { id: 'emploi', category: 'web', number: '06', label: 'COLLABORATIVE PROJECT', title: 'Projet emploi', description: 'A contribution to the shared projet-emploi project.', tags: 'TEAM PROJECT', image: '', alt: '', details: 'A collaborative project to which I contributed. The linked repository belongs to the project team.', repo: 'https://github.com/H4zeyaf/projet-emploi', contribution: true, privateRepo: true },
  { id: 'cinephoria', category: 'web', number: '07', label: 'WEB DEVELOPMENT', title: 'Cinephoria', description: 'Three weeks. One team. A cinema experience brought to life with code.', tags: 'PHP / MYSQL / JAVASCRIPT', image: 'cinephoria.jpeg', alt: 'Cinephoria cinema website with film listings', details: 'A three-week team project combining a cinema interface, PHP, and MySQL. A lesson in communication as much as code.' },
  { id: 'recruitment', category: 'web', number: '08', label: 'INTERNSHIP / TEAM PROJECT', title: 'Recruitment Engine', description: 'An internship application built with colleagues. My focus: the administration dashboard.', tags: 'DASHBOARD / RECRUITMENT / TEAMWORK', image: 'projects/recruitment-home.png', alt: 'Recruitment platform homepage', details: 'Developed during my internship with a few colleagues. I worked on the dashboard, including the administration experience shown here: user management, reported users, job offers, and settings. The gallery also shows the shared application’s public pages and login screen.', live: 'https://recruitment-engine-sand.vercel.app/', contribution: true, gallery: [
    { image: 'projects/recruitment-users.png', caption: 'Dashboard · User management' },
    { image: 'projects/recruitment-reports.png', caption: 'Dashboard · Reported users' },
    { image: 'projects/recruitment-jobs.png', caption: 'Dashboard · Job offers' },
    { image: 'projects/recruitment-settings.png', caption: 'Dashboard · Settings' },
    { image: 'projects/recruitment-home.png', caption: 'Team application · Homepage' },
    { image: 'projects/recruitment-about.png', caption: 'Team application · About page' },
    { image: 'projects/recruitment-login.png', caption: 'Team application · Login' },
  ] },
  { id: 'calculator', category: 'web', number: '09', label: 'THE FIRST CHAPTER', title: 'Small build. Big start.', description: 'The humble calculator that turned curiosity into something I could actually use.', tags: 'HTML / CSS / JAVASCRIPT', image: 'calculator.png', alt: 'Calculator project with number pad and a display', details: 'A first exploration of interfaces, user input, and JavaScript logic.', live: 'https://omoshiroii.github.io/Simple-Calculator/' },
];

function ProjectLinks({ project }: { project: Project }) {
  return <>{project.live && <a className="text-link" href={project.live} target="_blank" rel="noreferrer">LIVE WEBSITE <Arrow /></a>}{project.repo && <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">{project.privateRepo ? 'REPOSITORY (ACCESS LIMITED)' : 'GITHUB REPOSITORY'} <Arrow /></a>}</>;
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.image) return <img src={'public/assets/' + project.image} alt={project.alt} loading="lazy" width="600" height="400" data-image-fallback={project.fallback ? "public/assets/" + project.fallback : undefined} />;

  return <div className="project-placeholder" aria-hidden="true"><span className="placeholder-frame">＋</span><strong>{project.title}</strong><span>PROJECT PREVIEW</span><small>Images coming soon</small></div>;
}

function ProjectGallery({ project, context }: { project: Project; context: string }) {
  const gallery = project.gallery || [];
  const id = 'gallery-' + context + '-' + project.id;
  return <div className="project-gallery" data-gallery role="region" aria-label="Project screenshot gallery">
    <div className="gallery-viewport" id={id} data-gallery-viewport tabIndex={0} aria-label="Swipe or use arrow keys to browse screenshots">
      {gallery.map((slide, index) => <figure className="gallery-slide" key={slide.image} data-gallery-slide><img src={'public/assets/' + slide.image} alt={slide.caption} loading="lazy" width="1867" height="875" /><figcaption><span>{slide.caption}</span><a href={'public/assets/' + slide.image} target="_blank" rel="noreferrer">OPEN FULL IMAGE <Arrow /></a></figcaption></figure>)}
    </div>
    <div className="gallery-controls"><button type="button" data-gallery-prev aria-controls={id} aria-label="Previous screenshot">←</button><span data-gallery-status aria-live="polite" aria-atomic="true">1 / {gallery.length}</span><button type="button" data-gallery-next aria-controls={id} aria-label="Next screenshot">→</button></div>
    <div className="gallery-dots" role="group" aria-label="Choose screenshot">{gallery.map((slide,index) => <button type="button" key={slide.image} data-gallery-index={index} aria-controls={id} aria-pressed={index===0} aria-label={slide.caption}>{String(index+1).padStart(2,'0')}</button>)}</div>
  </div>;
}

const featured = ['lilook', 'recruitment', 'adsum'].map(id => projects.find(project => project.id === id)!);
function ProjectCard({ project }: { project: Project }) { return <article className={'project-card project-' + project.id} key={project.id} data-project-category={project.category} data-contribution={project.contribution ? "true" : undefined}>
                <><button className="project-visual" type="button" data-open-case={project.id} aria-label={'View project: ' + project.title}>
                  <ProjectPreview project={project} />
                  <span className="project-number">{project.number}</span><span className="project-open" aria-hidden="true">↗</span>
                </button></>
                <div className="project-summary"><p className="eyebrow">{project.label}</p><h3>{project.title}</h3>{project.contribution && <span className="contribution-badge">CONTRIBUTOR</span>}<p className="project-description">{project.description}</p><p className="project-stack">{project.tags}</p><div className="project-actions"><button type="button" className="button button-outline" data-open-case={project.id}>PROJECT DETAILS <Arrow /></button><ProjectLinks project={project} /></div></div>
              </article>; }
function ProjectDialogs({ items = projects }: { items?: Project[] }) { return <>{items.map(project => <dialog className="case-dialog" id={'case-' + project.id} key={project.id} aria-labelledby={'case-title-' + project.id}><div className="dialog-top"><span>PROJECT / {project.number}</span><button data-close-dialog type="button" aria-label="Close project details">×</button></div><p className="eyebrow">{project.label}</p><h2 id={'case-title-' + project.id}>{project.title}</h2>{project.contribution && <span className="contribution-badge">CONTRIBUTOR</span>}<div className="dialog-preview">{project.gallery ? <ProjectGallery project={project} context="dialog" /> : <ProjectPreview project={project} />}</div><div className="dialog-body"><p>{project.description}</p><p>{project.details}</p>{project.id === "library" && <p className="image-credit">Illustrative library photos: <a href="https://unsplash.com/photos/ggeZ9oyI-PE" target="_blank" rel="noreferrer">Priscilla Du Preez</a> / <a href="https://unsplash.com/photos/f7fsz-4U0PA" target="_blank" rel="noreferrer">Isaac Smith</a> · Unsplash</p>}{project.privateRepo && <p className="repository-note">This repository is not publicly accessible at the moment.</p>}</div><p className="case-tags">{project.tags}</p><div className="dialog-actions"><ProjectLinks project={project} />{!project.repo && !project.live && <a className="text-link" href={github} target="_blank" rel="noreferrer">GITHUB PROFILE <Arrow /></a>}</div></dialog>)}</>; }
function LanguageSwitcher() { return <nav aria-label="Choose language" className="language-switcher"><button type="button" data-language="en" lang="en" aria-pressed="true">English</button><button type="button" data-language="fr" lang="fr" aria-pressed="false">Français</button><button type="button" data-language="es" lang="es" aria-pressed="false">Español</button></nav>; }
function TechTape() {
 const tech = [['react','React'],['nextjs','Next.js'],['typescript','TypeScript'],['javascript','JavaScript'],['laravel','Laravel'],['php','PHP'],['python','Python'],['mysql','MySQL'],['mongodb','MongoDB'],['cplusplus','C++'],['git','Git'],['java','Java']];
 return <div className="tech-tape" aria-label="Technologies"><div className="tech-track">{[0,1].map(copy=><div className="tech-group" key={copy} aria-hidden={copy===1 ? true : undefined}>{tech.map(([icon,name])=><span className="tech-item" key={icon}><img src={'public/assets/tech/'+icon+'.svg'} alt="" width="34" height="34" loading="lazy" /><span>{name}</span></span>)}</div>)}</div></div>;
}
function BlinkingField() { return <div className="blinking-field" aria-hidden="true">{Array.from({length:240},(_,i)=><i key={i} style={{animationDelay:-(i*1.37%11)+'s',animationDuration:(4+i%7)+'s',opacity:(i*17%11)/18}} />)}</div>; }

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to the front page</a>
      <div className="desk-label" aria-hidden="true"><span>THE INDEPENDENT PORTFOLIO OF TAHA ZERRAD</span><span>DESIGNED AFTER DARK. BUILT WITH PURPOSE.</span></div>
      <div className="language-bar"><a href="#home" className="language-brand">TZ / PORTFOLIO</a><nav aria-label="Choose language" className="language-switcher"><button type="button" data-language="en" lang="en" aria-pressed="true">English</button><button type="button" data-language="fr" lang="fr" aria-pressed="false">Français</button><button type="button" data-language="es" lang="es" aria-pressed="false">Español</button></nav></div>
      <main className="portfolio" id="main-content">
        <div className="newspaper">
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
            <a href="#home" data-section-link aria-current="location">Home</a><a href="#work" data-section-link>Projects</a><a href="#about" data-section-link>About me</a><a href="#skills" data-section-link>Skills</a><a href="#contact" data-section-link>Contact <Arrow /></a>
          </nav>
        </div>

        <section className="front-page" aria-labelledby="hero-title">
          <div className="front-page-kicker"><span><i className="red-square" /> SPECIAL REPORT / A CITY ON THE EDGE</span><span>FEAR. OBSESSION. THE WILL TO BUILD.</span></div>
          <h1 className="hero-title" id="hero-title"><svg className="hero-wordmark" viewBox="0 0 1200 215" preserveAspectRatio="none" aria-hidden="true"><defs><pattern id="headline-ink" patternUnits="userSpaceOnUse" width="1200" height="215"><rect width="1200" height="215" fill="#171916" /><image href="public/assets/gotham-edition.jpeg" width="1200" height="1680" y="-267" opacity=".7" /><rect width="1200" height="215" fill="#171916" opacity=".25" /></pattern></defs><text x="4" y="210" textLength="1192" lengthAdjust="spacingAndGlyphs" fill="url(#headline-ink)">TAHA ZERRAD</text></svg><span className="sr-only">Taha Zerrad — The Gotham Times engineering portfolio</span></h1>
          <div className="hero-intro-bar">
            <p><strong>Engineering student. Building with purpose.</strong><span>Software, data &amp; a restless curiosity.</span></p>
            <div className="hero-actions"><a className="button button-red" href="#work">VIEW PROJECTS <Arrow /></a><a className="button button-outline" href="#contact">GET IN TOUCH <Arrow /></a></div>
          </div>
          <div className="front-visual">
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
          <JokerGraffiti />
          </div>
          <div className="front-columns">
            <article className="identity-column">
              <p className="panel-label">BEHIND THE MASK / THE DEVELOPER</p><h2>TAHA ZERRAD.</h2>
              <p className="article-byline">Engineering student. Builder after dark.</p>
              <p className="drop-cap">I’m Taha, an engineering student building a foundation in software while exploring AI, data and cloud. This is where the experiments, late nights, and lessons become projects.</p>
              <a className="ink-button" href="#about">MORE ABOUT ME <Arrow /></a>
            </article>
            <article className="dispatch-column">
              <p className="panel-label">DISPATCH 01 / THE ORIGIN</p><h3>No cape.<br />Just conviction.</h3>
              <p>A foundation in full-stack development. A new chapter in Computer Engineering and Networks. I’m learning how to turn complex problems into software people can use.</p><a className="article-link" href="#about">READ MY STORY <Arrow /></a>
            </article>
            <article className="dispatch-column case-column">
              <p className="panel-label">DISPATCH 02 / THE EVIDENCE</p><h3>The work leaves<br />a paper trail.</h3>
              <p>A jewelry shop for a client. An internship dashboard built with colleagues. The first small builds that made the fundamentals click. Each project has a story.</p>
              <div className="mini-classified"><span>LILOOK · INTERNSHIP · FIRST BUILDS</span><a href="#work">EXPLORE ALL PROJECTS <Arrow /></a></div>
            </article>
            <aside className="classified-column">
              <blockquote className="joker-quote"><strong>“PUT A SMILE<br />ON THAT FACE.”</strong><cite>— JOKER</cite></blockquote>
              <p className="panel-label">PERSONAL ADS / THE SIGNAL IS OPEN</p><p>Wanted: good ideas, difficult problems, and people who care about what they build.</p>
              <a className="signal-classified" href="#contact"><Bat /><span>GOT A MISSION?<small>SEND A SIGNAL <Arrow /></small></span></a>
            </aside>
          </div>
          <div className="hero-ribbon"><span>THE NIGHT IS DARKEST JUST BEFORE THE DAWN.</span><a href="#about">TURN THE PAGE ↓</a></div>
        </section>
        </div>
        <div className="edition-controls"><span><i /> LIVE FROM THE NIGHT SHIFT · TAHA ZERRAD</span><button className="motion-toggle" type="button" aria-pressed="false">PAUSE EFFECTS</button><span>THE STORY CONTINUES BELOW ↓</span></div>
        </div>

        <div className="night-edition night-chapters">
          <div className="night-opening">
            <div className="skyline-scene" aria-hidden="true"><img src="public/assets/gotham-skyline.svg" alt="" width="1600" height="900" /><div className="skyline-searchlight" /><div className="skyline-mist" /><div className="skyline-bat"><Bat /></div></div>
            <div className="night-opening-copy"><p className="eyebrow">THE JOURNAL ENDS. THE JOURNEY BEGINS.</p><h2>Skills for<br />your next project.</h2><p>Full-stack developer · Engineering student<br />Available for internships and junior opportunities.</p><a className="button button-paper" href="#work">EXPLORE MY WORK <Arrow /></a><span className="scene-coordinate">TANGIER, MOROCCO / 35.76° N</span></div>
            <a className="scene-scroll" href="#skills">EXPLORE MY SKILLS <span aria-hidden="true">↓</span></a>
          </div>
          <nav className="chapter-nav" aria-label="Portfolio chapters"><a href="#work">Projects</a><a href="#skills">Skills</a><a href="#about">Experience</a><a href="#journey">Milestones</a><a href="#contact">Contact</a><a className="cv-shortcut" href="public/cv/Taha-Zerrad-CV.pdf" download>DOWNLOAD CV <span aria-hidden="true">↓</span></a></nav>

          <section className="capability-section paper-section" id="skills" data-nav-section aria-labelledby="skills-heading">
            <BlinkingField /><div className="chapter-heading" data-reveal="left"><p className="eyebrow">01 / WHAT I CAN CONTRIBUTE</p><h2 id="skills-heading">Full-stack skills.<br />Practical experience.</h2><p>Engineering student at EMSI, Tangier. Seeking a development internship or junior opportunity.</p></div>
            <div className="skill-evidence"><a href="#work" data-reveal="left"><span>01 / WEB</span><h3>Build web applications</h3><p>React, Next.js, PHP &amp; Laravel</p><small>Client work · LILOOK storefront</small><Arrow /></a><a href="#work" data-reveal="right"><span>02 / DASHBOARDS</span><h3>Make complex tasks usable</h3><p>Administration interfaces &amp; databases</p><small>Internship · Recruitment Engine</small><Arrow /></a><a href="#work" data-reveal="left"><span>03 / PYTHON</span><h3>Contribute to AI systems</h3><p>Python, OpenCV &amp; InsightFace</p><small>Team contribution · ADSUM</small><Arrow /></a></div>
            <TechTape /><div className="recruiter-actions"><a className="button button-paper" href="public/cv/Taha-Zerrad-CV.pdf" download>DOWNLOAD CV ↓</a><a className="text-link" href="mailto:tahazerrad123@gmail.com">DISCUSS AN OPPORTUNITY <Arrow /></a></div>
          </section>
          <section className="work-section paper-section" id="work" data-nav-section aria-labelledby="work-heading">
            <div className="chapter-heading" data-reveal="left"><p className="eyebrow">02 / SELECTED PROJECTS</p><h2 id="work-heading">Three projects. Real experience.</h2><p>Client work, an internship, and a team contribution.</p></div>
            <div className="featured-carousel" data-gallery role="region" aria-label="Featured projects">
              <div className="featured-track" id="featured-projects" data-gallery-viewport tabIndex={0} aria-label="Swipe or use arrow keys to browse projects">{featured.map(project=><div className="featured-slide" data-gallery-slide key={project.id}><ProjectCard project={project} /></div>)}</div>
              <div className="gallery-controls"><button type="button" data-gallery-prev aria-controls="featured-projects" aria-label="Previous project">←</button><span data-gallery-status aria-live="polite">1 / 3</span><button type="button" data-gallery-next aria-controls="featured-projects" aria-label="Next project">→</button></div>
              <div className="gallery-dots" role="group" aria-label="Choose project">{featured.map((project,i)=><button type="button" key={project.id} data-gallery-index={i} aria-controls="featured-projects" aria-pressed={i===0}>{project.title}</button>)}</div>
            </div>
            <a className="collection-link" href="projects.html"><span>VIEW ALL PROJECTS</span><span>09 <Arrow /></span></a>
          </section>

          <section className="experience-section paper-section" id="about" data-nav-section aria-labelledby="story-heading">
            <div className="experience-profile" data-reveal="left"><div className="personal-image"><img src="public/assets/taha-portrait.jpeg" alt="Portrait of Taha Zerrad" width="390" height="583" loading="lazy" /><span>TAHA ZERRAD / TANGIER</span><Bat /></div><p className="eyebrow">03 / EDUCATION &amp; EXPERIENCE</p><h2 id="story-heading">A foundation you can build on.</h2><p>Full-stack graduate. Engineering student. Experience with client and team projects.</p><a className="text-link" href="mailto:tahazerrad123@gmail.com">LET’S TALK <Arrow /></a><a className="email-link" href="mailto:tahazerrad123@gmail.com"></a></div>
            <div id="journey" className="experience-timeline" data-reveal="right"><div className="milestones">
              <details open><summary><span className="milestone-date">2023 — 2025 / PAST</span><strong>Full-stack diploma</strong><span className="milestone-toggle" aria-hidden="true">+</span></summary><p>Full-stack Web Development diploma at OFPPT–ISMO, Tétouan. The foundations of software, databases, and working as a team.</p></details>
              <details><summary><span className="milestone-date">APRIL 2025 / EXPERIENCE</span><strong>IT internship · SNOP FSD</strong><span className="milestone-toggle" aria-hidden="true">+</span></summary><p>IT internship at SNOP FSD, Tangier. A Laravel application for manufacturing orders, alongside IT support and an introduction to network infrastructure.</p></details>
              <details><summary><span className="milestone-date">2025 — PRESENT</span><strong>Computer Engineering · EMSI</strong><span className="milestone-toggle" aria-hidden="true">+</span></summary><p>Computer Engineering and Networks at EMSI, Tangier. Developing stronger engineering foundations while continuing to build practical projects.</p></details>
              <details><summary><span className="milestone-date">NEXT / FUTURE</span><strong>Next opportunity</strong><span className="milestone-toggle" aria-hidden="true">+</span></summary><p>Explore AI, data engineering, and cloud systems. Find opportunities to learn with a team and turn useful ideas into working products.</p></details>
            </div></div>
          </section>

          <section className="contact-section" id="contact" data-nav-section aria-labelledby="contact-heading"><div className="contact-copy"><p className="eyebrow">05 / THE NEXT CHAPTER</p><h2 id="contact-heading">Let’s build<br /><em>something.</em></h2><p>Looking for a developer or an intern?<br />Let’s discuss where I can contribute.</p><div className="contact-links"><a className="button button-paper" href="mailto:tahazerrad123@gmail.com">SEND AN EMAIL <Arrow /></a><a className="button button-outline" href="public/cv/Taha-Zerrad-CV.pdf" download>DOWNLOAD CV <span aria-hidden="true">↓</span></a></div><div className="social-links"><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href={github} target="_blank" rel="noreferrer">GitHub <Arrow /></a><span>PDF · Original French version</span></div></div><div className="signal-art" aria-hidden="true"><div className="signal-circle"><Bat /></div></div></section>
          <footer className="paper-footer"><a href="#home" className="footer-brand">The Gotham Times</a><p>© <span data-year>2026</span> TAHA ZERRAD</p><a href="#home" className="back-top" aria-label="Back to top">↑</a></footer>
        </div>
      </main>
      <div className="desk-footer"><span>END OF THIS EDITION. NOT THE STORY.</span><Bat /><span>CRAFTED WITH CURIOSITY &amp; A LITTLE OBSESSION.</span></div>

      <ProjectDialogs items={featured} />
      <Script src="public/translations.js" strategy="afterInteractive" />
      <Script src="public/newspaper.js" strategy="afterInteractive" />
    </>
  );
}

export function ProjectArchive() { return <><div className="language-bar"><a href="index.html#work" className="language-brand">← BACK TO PORTFOLIO</a><LanguageSwitcher /></div><main className="night-edition night-chapters project-archive" id="main-content"><header className="archive-intro"><p className="eyebrow">TAHA ZERRAD / PROJECT COLLECTION</p><h1>Explore the work.</h1><p>Filter by skill. Open a project for screenshots, my role, and source links.</p><a className="text-link" href="mailto:tahazerrad123@gmail.com">DISCUSS AN OPPORTUNITY <Arrow /></a></header>          <section className="work-section paper-section" id="work" data-nav-section aria-labelledby="work-heading">
            <div className="chapter-heading"><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-heading">Ideas, made real.</h2><p>A few builds from the journey so far.</p></div>
            <div className="project-filters" role="group" aria-label="Filter projects"><button type="button" data-filter="all" aria-pressed="true">ALL PROJECTS</button><button type="button" data-filter="web" aria-pressed="false">WEB</button><button type="button" data-filter="data" aria-pressed="false">DATA</button><button type="button" data-filter="systems" aria-pressed="false">C++ / SYSTEMS</button><button type="button" data-filter="contributions" aria-pressed="false">CONTRIBUTIONS</button></div>
            <div className="projects-grid">
              {projects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
            <div className="work-footer"><span data-filter-status role="status" aria-live="polite">9 stories in this edition</span><a className="text-link" href={github} target="_blank" rel="noreferrer">GITHUB PROFILE <Arrow /></a></div>
          </section>

<section className="archive-contact"><a className="button button-paper" href="public/cv/Taha-Zerrad-CV.pdf" download>DOWNLOAD CV ↓</a><a className="text-link" href="index.html#contact">CONTACT ME <Arrow /></a></section></main><ProjectDialogs /><Script src="public/translations.js" strategy="afterInteractive" /><Script src="public/newspaper.js" strategy="afterInteractive" /></>; }
