// =============================================
// LENIS SMOOTH SCROLL
// =============================================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// =============================================
// GSAP + SCROLLTRIGGER REVEAL ANIMATIONS
// =============================================
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.reveal').forEach((el) => {
    const delay = parseFloat(el.dataset.delay) || 0;
    gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
            }
        }
    );
});

// =============================================
// MAGNETIC BUTTONS
// =============================================
document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
            x: x * 0.15,
            y: y * 0.15,
            duration: 0.4,
            ease: 'power2.out',
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.3)',
        });
    });
});

// =============================================
// CUSTOM CURSOR
// =============================================
const glow = document.getElementById('cursorGlow');
const dot = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
}
animateGlow();

document.querySelectorAll('a, button, .service-card, .about-card, .tool-category, .metric-card, .cert-item, .testimonial-card, .speaking-card, .whatsapp-float, .back-to-top, .social-link').forEach((el) => {
    el.addEventListener('mouseenter', () => {
        glow.classList.add('hover');
        dot.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        glow.classList.remove('hover');
        dot.classList.remove('hover');
    });
});

// =============================================
// TYPEWRITER EFFECT
// =============================================
const typewriterEl = document.getElementById('typewriterText');

if (typewriterEl) {
    const phrases = [
        'Your HR Strategy Partner.',
        'Building Better Workplaces.',
        'Talent & Culture Expert.',
        'People Operations Leader.'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentPhrase.length) {
            isWaiting = true;
            speed = 2000;
            setTimeout(() => {
                isWaiting = false;
                isDeleting = true;
                typeWriter();
            }, speed);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 400;
            setTimeout(typeWriter, speed);
            return;
        }

        if (!isWaiting) {
            setTimeout(typeWriter, speed);
        }
    }

    setTimeout(typeWriter, 1000);
}

// =============================================
// STATS COUNTING ANIMATION
// =============================================
function animateStats() {
    const stats = [
        { id: 'stat1', target: 7, suffix: '+' },
        { id: 'stat2', target: 500, suffix: '+' },
        { id: 'stat3', target: 100, suffix: '+' },
    ];

    stats.forEach((stat) => {
        const el = document.getElementById(stat.id);
        if (!el) return;

        let current = 0;
        const duration = 1800;
        const steps = 60;
        const increment = stat.target / steps;
        const stepTime = duration / steps;

        const interval = setInterval(() => {
            current += increment;
            if (current >= stat.target) {
                current = stat.target;
                el.textContent = Math.floor(current) + stat.suffix;
                clearInterval(interval);
            } else {
                el.textContent = Math.floor(current) + stat.suffix;
            }
        }, stepTime);
    });
}

animateStats();

// =============================================
// IMPACT METRICS COUNTER
// =============================================
function animateMetrics() {
    document.querySelectorAll('.metric-number').forEach((metric) => {
        const target = parseInt(metric.dataset.target);
        const suffix = metric.dataset.suffix || '';
        let current = 0;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        const stepTime = duration / steps;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            metric.textContent = Math.floor(current) + suffix;
                            clearInterval(interval);
                        } else {
                            metric.textContent = Math.floor(current) + suffix;
                        }
                    }, stepTime);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(metric);
    });
}

animateMetrics();

// =============================================
// TESTIMONIAL CAROUSEL
// =============================================
const track = document.getElementById('testimonialTrack');
const dotsContainer = document.getElementById('testimonialDots');
const prevBtn = document.getElementById('testimonialPrev');
const nextBtn = document.getElementById('testimonialNext');

let currentIndex = 0;
let totalSlides = 0;
let slidesPerView = 1;
let autoSlideInterval = null;
const autoSlideDelay = 4500;

function getSlidesPerView() {
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

function updateCarousel() {
    slidesPerView = getSlidesPerView();
    const cards = track.querySelectorAll('.testimonial-card');
    totalSlides = cards.length;

    if (currentIndex > totalSlides - slidesPerView) {
        currentIndex = Math.max(0, totalSlides - slidesPerView);
    }

    const cardWidth = cards[0]?.offsetWidth || 0;
    const gap = 24;
    const slideWidth = cardWidth + gap;
    const offset = currentIndex * slideWidth;

    gsap.to(track, {
        x: -offset,
        duration: 0.6,
        ease: 'power3.out',
    });

    const dots = dotsContainer.querySelectorAll('.dot');
    const totalDots = Math.ceil(totalSlides / slidesPerView);
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
    });
}

function createDots() {
    const cards = track.querySelectorAll('.testimonial-card');
    totalSlides = cards.length;
    const totalDots = Math.ceil(totalSlides / getSlidesPerView());

    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
        dot.dataset.index = i;
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }
}

function goToSlide(index) {
    const totalDots = Math.ceil(totalSlides / getSlidesPerView());
    if (index < 0) index = totalDots - 1;
    if (index >= totalDots) index = 0;
    currentIndex = index;
    updateCarousel();
}

function nextSlide() { goToSlide(currentIndex + 1); }
function prevSlide() { goToSlide(currentIndex - 1); }

function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
}

function resetAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
}

function initCarousel() {
    createDots();
    currentIndex = 0;
    updateCarousel();
    startAutoSlide();
}

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const newSlidesPerView = getSlidesPerView();
        if (newSlidesPerView !== slidesPerView) {
            createDots();
            currentIndex = 0;
            updateCarousel();
            resetAutoSlide();
        } else {
            updateCarousel();
        }
    }, 200);
});

if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });

document.addEventListener('DOMContentLoaded', initCarousel);

// =============================================
// CERTIFICATIONS CAROUSEL - SEAMLESS LOOP
// =============================================
const certTrack = document.getElementById('certTrack');
const certPrev = document.getElementById('certPrev');
const certNext = document.getElementById('certNext');

let certAnimation = null;

function initCertCarousel() {
    if (certAnimation) {
        gsap.killTweensOf(certTrack);
    }

    const cards = certTrack.querySelectorAll('.cert-item');
    const totalWidth = certTrack.scrollWidth / 2;

    gsap.set(certTrack, { x: 0 });

    // SEAMLESS ANIMATION - NO JUMP BACK
    certAnimation = gsap.to(certTrack, {
        x: -totalWidth,
        duration: 35,
        ease: 'none',
        repeat: -1,
    });

    const wrapper = certTrack.closest('.cert-carousel-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => {
            if (certAnimation) certAnimation.pause();
        });
        wrapper.addEventListener('mouseleave', () => {
            if (certAnimation) certAnimation.resume();
        });
    }
}

document.addEventListener('DOMContentLoaded', initCertCarousel);

let certResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(certResizeTimeout);
    certResizeTimeout = setTimeout(() => {
        if (certAnimation) {
            gsap.killTweensOf(certTrack);
            initCertCarousel();
        }
    }, 300);
});

if (certPrev) {
    certPrev.addEventListener('click', () => {
        const cardWidth = certTrack.querySelector('.cert-item')?.offsetWidth || 0;
        const gap = 24;
        const slideWidth = cardWidth + gap;

        let currentX = parseFloat(certTrack._gsap?.x || 0);
        const totalWidth = certTrack.scrollWidth / 2;

        if (currentX >= 0) {
            gsap.set(certTrack, { x: -totalWidth });
        }

        gsap.to(certTrack, {
            x: `+=${slideWidth}`,
            duration: 0.6,
            ease: 'power2.out',
        });
        if (certAnimation) certAnimation.pause();
        setTimeout(() => {
            if (certAnimation) certAnimation.resume();
        }, 3000);
    });
}

if (certNext) {
    certNext.addEventListener('click', () => {
        const cardWidth = certTrack.querySelector('.cert-item')?.offsetWidth || 0;
        const gap = 24;
        const slideWidth = cardWidth + gap;
        const totalWidth = certTrack.scrollWidth / 2;
        let currentX = parseFloat(certTrack._gsap?.x || 0);

        if (currentX <= -totalWidth * 1.8) {
            gsap.set(certTrack, { x: 0 });
        }

        gsap.to(certTrack, {
            x: `-=${slideWidth}`,
            duration: 0.6,
            ease: 'power2.out',
        });
        if (certAnimation) certAnimation.pause();
        setTimeout(() => {
            if (certAnimation) certAnimation.resume();
        }, 3000);
    });
}

// =============================================
// BACK TO TOP BUTTON
// =============================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    lenis.scrollTo(0, { duration: 1.2, offset: 0 });
});

// =============================================
// FLOATING WHATSAPP BUTTON
// =============================================
const whatsappBtn = document.getElementById('whatsappFloat');
const phoneNumber = '2347068956795';
const whatsappMessage = 'Hi Esther! I saw your portfolio and would like to connect.';

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        whatsappBtn.classList.add('visible');
        if (!whatsappBtn.dataset.pulsed) {
            whatsappBtn.classList.add('pulse');
            whatsappBtn.dataset.pulsed = 'true';
        }
    } else {
        whatsappBtn.classList.remove('visible');
        whatsappBtn.classList.remove('pulse');
    }
});

whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
});

whatsappBtn.addEventListener('mousemove', (e) => {
    const rect = whatsappBtn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(whatsappBtn, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.4,
        ease: 'power2.out',
    });
});

whatsappBtn.addEventListener('mouseleave', () => {
    gsap.to(whatsappBtn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
    });
});

// =============================================
// NAVBAR SCROLL EFFECT
// =============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =============================================
// MOBILE NAV TOGGLE
// =============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('show');
            }
        });
    });
}

// =============================================
// SMOOTH SCROLL FOR NAV LINKS
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                lenis.scrollTo(target, {
                    offset: -80,
                    duration: 1.2,
                });
            }
        }
    });
});

// =============================================
// CONTACT FORM
// =============================================
const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const btn = this.querySelector('.btn');
        const originalContent = btn.innerHTML;
        const formData = new FormData(this);

        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        try {
            const response = await fetch('https://formspree.io/f/xoeqlnar', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                btn.style.background = '#25D366';
                btn.style.color = '#fff';
                this.reset();

                setTimeout(() => {
                    btn.innerHTML = originalContent;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.disabled = false;
                }, 3000);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
            btn.style.background = '#dc3545';
            btn.style.color = '#fff';

            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
            }, 3000);

            console.error('Form submission error:', error);
        }
    });
}

// =============================================
// CONSOLE
// =============================================
console.log('🏆 Esther Okoro, PHRi™ · HR Executive & Talent Management');
console.log('✅ Features: Lenis, GSAP, Custom Cursor, Glassmorphism, Typewriter');
console.log('📊 Stats: 7+ Years Experience · 500+ Employees Trained · 100+ Staff Recruited');
console.log('🎨 Colors: Wine Red #7B0323 · Charcoal #1A1A1A · Cream #FDF8F9');
console.log('📞 Contact: estherokoro338@gmail.com · +234 706 895 6795');
console.log('🔗 LinkedIn: linkedin.com/in/esther-okoro');
console.log('🏆 Certifications: PHRi™, Total Reward, IKIGAI, Stormy Waters, HR Effectiveness');
console.log('🎤 Speaking: Rotary Club, Santus Consulting, NCC Emergency Center');
console.log('📊 Impact Metrics: 500+ Trained, 100+ Recruited, 90% Client Satisfaction');
console.log('📝 Formspree: Connected & ready');
console.log('✨ Typewriter: Personal + Professional - "Esther Okoro — Your HR Strategy Partner"');
console.log('💬 WhatsApp: Connected & ready at bottom-left');
console.log('⬆️ Back to Top: Connected & ready at bottom-right');
console.log('📅 Consultation: Calendly link ready');
console.log('🔄 Hero Layout: Content LEFT | Image RIGHT');
console.log('📸 Certifications: COMPACT BOXES - Two separate pills, no empty space');
console.log('🏆 Awards: Gold text on dark background for award titles');
console.log('🔄 Credentials Carousel: SEAMLESS LOOP - No sharp jump!');