import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

function closeMenu() {
	menuToggle?.setAttribute('aria-expanded', 'false');
	menuToggle?.setAttribute('aria-label', 'Abrir menú');
	mobileNav?.classList.remove('is-open');
	mobileNav?.setAttribute('aria-hidden', 'true');
	document.body.classList.remove('menu-open');
}

menuToggle?.addEventListener('click', () => {
	const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
	menuToggle.setAttribute('aria-expanded', String(!isOpen));
	menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
	mobileNav?.classList.toggle('is-open', !isOpen);
	mobileNav?.setAttribute('aria-hidden', String(isOpen));
	document.body.classList.toggle('menu-open', !isOpen);
});

mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => {
	if (window.innerWidth > 760) closeMenu();
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
	gsap.from('.hero-copy > *, .hero-visual', {
		opacity: 0,
		y: 24,
		duration: 0.9,
		stagger: 0.12,
		ease: 'power2.out',
		delay: 0.12,
	});

	gsap.utils
		.toArray('.section-label, .manifesto-content, .section-heading, .project-info, .service-item, .contact-content')
		.forEach((element) => {
			gsap.from(element, {
				opacity: 0,
				y: 24,
				duration: 0.75,
				ease: 'power2.out',
				scrollTrigger: { trigger: element, start: 'top 88%', once: true },
			});
		});
}
