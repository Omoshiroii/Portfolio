'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import FluxLines from './FluxLines';
import DepthCarousel from './DepthCarousel';
import BranchedMenu from './BranchedMenu';
import GlowCursor from './GlowCursor';

type ProjectItem = { id: string; src: string; title: string; alt: string; subtitle: string };
type PortfolioWindow = Window & { portfolioI18n?: { t: (value: string) => string } };
const translate = (value: string) => (window as PortfolioWindow).portfolioI18n?.t(value) || value;

function useMotionPaused() {
  const [paused, setPaused] = useState(true);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPaused(media.matches || document.body.classList.contains('effects-paused') || document.body.classList.contains('dialog-open') || document.hidden);
    const observer = new MutationObserver(update);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    media.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    update();
    return () => { observer.disconnect(); media.removeEventListener('change', update); document.removeEventListener('visibilitychange', update); };
  }, []);
  return paused;
}

function Atmosphere() {
  const paused = useMotionPaused();
  return <FluxLines colors={['#ffffff', '#ffffff', '#ffffff']} glow={2} rimWidth={0.2} lineWidth={1} flowDirection="down" mouseInteraction={!paused} clickSwirl={!paused} speed={0.5} scale={1.6} turbulence={1} fluidity={0.1} sharpness={2.5} shimmer={1.5} mouseStrength={1} mouseRadius={0.35} intro={!paused} lightMode={false} paused={paused} dpr={1} />;
}

function ProjectCarousel({ items, mount }: { items: ProjectItem[]; mount: HTMLElement }) {
  const paused = useMotionPaused();
  const [language, setLanguage] = useState(document.documentElement.lang);
  const [ready, setReady] = useState(false);
  const [interacting, setInteracting] = useState(false);
  useEffect(() => {
    const change = () => setLanguage(document.documentElement.lang);
    document.addEventListener('portfolio:languagechange', change);
    return () => document.removeEventListener('portfolio:languagechange', change);
  }, []);
  useEffect(() => {
    const showcase = mount.closest<HTMLElement>('[data-project-showcase]')!;
    let current = 0;
    const updateInteraction = () => setInteracting(showcase.matches(':hover, :focus-within'));
    const onLeaveFocus = () => requestAnimationFrame(updateInteraction);
    showcase.addEventListener('pointerenter', updateInteraction);
    showcase.addEventListener('pointerleave', updateInteraction);
    showcase.addEventListener('focusin', updateInteraction);
    showcase.addEventListener('focusout', onLeaveFocus);
    const select = (index: number) => {
      const target = (index + items.length) % items.length;
      mount.querySelector('.depth-carousel')?.dispatchEvent(new CustomEvent('carousel:navigate', { detail: target }));
    };
    const click = (event: MouseEvent) => {
      const button = (event.target as Element).closest<HTMLElement>('[data-project-index],[data-project-step]');
      if (!button) return;
      select(button.dataset.projectIndex !== undefined ? Number(button.dataset.projectIndex) : current + Number(button.dataset.projectStep));
    };
    const update = (event: Event) => { current = (event as CustomEvent<number>).detail; };
    showcase.addEventListener('click', click);
    mount.addEventListener('project:change', update);
    return () => {
      showcase.removeEventListener('click', click); mount.removeEventListener('project:change', update);
      showcase.removeEventListener('pointerenter', updateInteraction); showcase.removeEventListener('pointerleave', updateInteraction);
      showcase.removeEventListener('focusin', updateInteraction); showcase.removeEventListener('focusout', onLeaveFocus);
    };
  }, [items, mount]);
  const change = useCallback((index: number) => {
    setReady(true);
    const showcase = mount.closest<HTMLElement>('[data-project-showcase]')!;
    showcase.classList.add('carousel-ready');
    showcase.querySelectorAll<HTMLElement>('[data-project-panel]').forEach(panel => { panel.hidden = panel.dataset.projectPanel !== items[index].id; });
    showcase.querySelectorAll<HTMLElement>('[data-project-index]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.projectIndex) === index)));
    const counter = showcase.querySelector('[data-project-position]');
    if (counter) counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;
    mount.dispatchEvent(new CustomEvent('project:change', { detail: index }));
  }, [items, mount]);
  // Translation reads the global dictionary; language invalidates the memo.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const slides = useMemo(() => items.map(item => ({ image: item.src, alt: translate(item.alt || item.title) })), [items, language]);
  useEffect(() => { change(0); }, [change]); // Initial panel also works without WebGL.
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(mount); return () => observer.disconnect();
  }, [mount]);
  return <DepthCarousel items={slides} cardWidth={520} cardHeight={340} depth={220} spread={110} tilt={22} tiltDirection="right" perspective={1400} visibleCards={4} falloff={0.2} blur={4} radius={12} autoplay={!paused && ready && !interacting && visible} autoplayDelay={6000} loop showControls={false} showIndicators={false} onChange={change} />;
}

function PortfolioDirectory({ mount }: { mount: HTMLElement }) {
  const [language, setLanguage] = useState(document.documentElement.lang);
  const [active, setActive] = useState('work');
  const paused = useMotionPaused();
  useEffect(() => {
    const change = () => setLanguage(document.documentElement.lang);
    document.addEventListener('portfolio:languagechange', change);
    const directory = mount.closest<HTMLDetailsElement>('details')!;
    const mobile = window.matchMedia('(max-width: 900px)');
    const resize = () => { directory.open = !mobile.matches; };
    resize(); mobile.addEventListener('change', resize);
    const sections = ['work', 'skills', 'about', 'certifications', 'contact'].map(id => document.getElementById(id)!);
    let frame = 0;
    const update = () => {
      frame = 0;
      const current = sections.filter(section => section.getBoundingClientRect().top <= window.innerHeight * .4).pop();
      setActive(current?.id || 'work');
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', scroll, { passive: true }); update();
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobile.matches && directory.open) { directory.open = false; directory.querySelector('summary')?.focus(); }
    };
    directory.addEventListener('keydown', escape);
    return () => { document.removeEventListener('portfolio:languagechange', change); mobile.removeEventListener('change', resize); window.removeEventListener('scroll', scroll); cancelAnimationFrame(frame); directory.removeEventListener('keydown', escape); };
  }, [mount]);
  const items = useMemo(() => [
    { label: translate('The work'), children: [{ value: 'work', label: '01 / ' + translate('Projects') }, { value: 'skills', label: '02 / ' + translate('Skills') }] },
    { label: translate('The background'), children: [{ value: 'about', label: '03 / ' + translate('Experience') }, { value: 'certifications', label: '04 / ' + translate('Certifications') }] },
    { label: translate('The next chapter'), children: [{ value: 'contact', label: '05 / ' + translate('Contact') }] }
  // Translation reads the global dictionary; language invalidates the memo.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [language]);
  useEffect(() => {
    const label = mount.closest('details')?.querySelector('[data-current-chapter]');
    const names: Record<string, string> = { work: 'Projects', skills: 'Skills', about: 'Experience', certifications: 'Certifications', contact: 'Contact' };
    if (label) label.textContent = translate(names[active]);
  }, [active, language, mount]);
  const navigate = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    if (window.matchMedia('(max-width: 900px)').matches) mount.closest<HTMLDetailsElement>('details')!.open = false;
    section.scrollIntoView({ behavior: paused ? 'instant' : 'smooth', block: 'start' });
    history.replaceState(null, '', '#' + id);
    const heading = section.querySelector<HTMLElement>('h2');
    if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
    setActive(id);
  };
  return <BranchedMenu items={items} defaultOpen={[0, 1, 2]} defaultActive="work" activeValue={active} onSelect={navigate} accentColor="#efabb2" lineColor="#414045" width={235} rowHeight={44} indent={27} trunk={8} radius={7} fontSize={12} drawDuration={paused ? 0 : 400} foldDuration={paused ? 0 : 300} />;
}

function ContactGlow() {
  const paused = useMotionPaused();
  return <GlowCursor color="#f8e2c5" secondaryColor="#bf5368" intensity={0.8} trailWidth={2} linger={1.1} glow={1.2} clickBurst theme="dark" quality="low" maxDevicePixelRatio={1} enabled={!paused} />;
}

function enhance() {
  if (document.documentElement.dataset.experienceReady) return;
  document.documentElement.dataset.experienceReady = 'true';
  const flux = document.querySelector<HTMLElement>('[data-flux-lines]');
  if (flux) createRoot(flux).render(<Atmosphere />);
  document.querySelectorAll<HTMLElement>('[data-project-carousel]').forEach(mount => {
    let items: ProjectItem[];
    try { items = JSON.parse(mount.dataset.items || '[]'); } catch { return; }
    if (!items.length) return;
    mount.classList.add('is-mounted');
    createRoot(mount).render(<ProjectCarousel items={items} mount={mount} />);
  });

  document.querySelectorAll<HTMLElement>('[data-branched-menu]').forEach(mount => createRoot(mount).render(<PortfolioDirectory mount={mount} />));
  const glow = document.querySelector<HTMLElement>('[data-contact-glow]');
  if (glow) createRoot(glow).render(<ContactGlow />);

  const originalToggle = document.querySelector<HTMLButtonElement>('.motion-toggle');
  const chapterToggle = document.querySelector<HTMLButtonElement>('[data-toggle-effects]');
  if (originalToggle && chapterToggle) {
    chapterToggle.addEventListener('click', () => originalToggle.click());
    const sync = () => {
      chapterToggle.textContent = translate(originalToggle.getAttribute('aria-pressed') === 'true' ? 'RESUME EFFECTS' : 'PAUSE EFFECTS');
      chapterToggle.setAttribute('aria-pressed', originalToggle.getAttribute('aria-pressed') || 'false');
      chapterToggle.disabled = originalToggle.disabled;
    };
    new MutationObserver(sync).observe(originalToggle, { attributes: true, attributeFilter: ['aria-pressed', 'disabled'] });
    document.addEventListener('portfolio:languagechange', sync);
    sync();
  }

  const deck = document.querySelector<HTMLElement>('.certification-list');
  if (deck) {
    const buttons = document.querySelectorAll<HTMLButtonElement>('[data-credential-step]');
    const update = () => buttons.forEach(button => { button.disabled = Number(button.dataset.credentialStep) < 0 ? deck.scrollLeft < 5 : deck.scrollLeft + deck.clientWidth >= deck.scrollWidth - 5; });
    buttons.forEach(button => button.addEventListener('click', () => {
      const card = deck.querySelector<HTMLElement>('.certification-card')!;
      const paused = document.body.classList.contains('effects-paused') || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      deck.scrollBy({ left: (card.offsetWidth + 22) * Number(button.dataset.credentialStep), behavior: paused ? 'instant' : 'smooth' });
    }));
    deck.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(deck);
    update();
  }

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll<HTMLElement>('[data-tilt],.skill-evidence>a,.project-stage').forEach(card => {
    let frame = 0;
    card.addEventListener('pointermove', event => {
      if (frame || !finePointer.matches || reduced.matches || document.body.classList.contains('effects-paused')) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty('--tilt-x', `${(0.5 - y) * 9}deg`);
        card.style.setProperty('--tilt-y', `${(x - 0.5) * 12}deg`);
        card.style.setProperty('--shine-x', `${x * 100}%`);
        card.style.setProperty('--shine-y', `${y * 100}%`);
      });
    }, { passive: true });
    card.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame); frame = 0;
      card.style.setProperty('--tilt-x', '0deg'); card.style.setProperty('--tilt-y', '0deg');
    });
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enhance, { once: true });
else enhance();
