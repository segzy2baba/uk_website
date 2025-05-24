// Modern Animations & Interactions Controller
class ModernAnimations {
    constructor() {
        this.init();
        this.setupMagneticButtons();
        this.setupScrollAnimations();
        this.setup3DEffects();
        this.setupParallax();
        this.setupTypewriter();
        this.setupGSAPAnimations();
    }

    init() {
        // Register GSAP plugins
        if (typeof gsap !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger, TextPlugin);
        }
        
        // Initialize AOS if available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        }
    }

    setupMagneticButtons() {
        const magneticButtons = document.querySelectorAll('.magnetic-btn');
        
        magneticButtons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                gsap.to(btn, {
                    duration: 0.3,
                    x: x * 0.3,
                    y: y * 0.3,
                    ease: "power2.out"
                });
            });
            
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    duration: 0.5,
                    x: 0,
                    y: 0,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });
    }

    setupScrollAnimations() {
        // Scroll reveal animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        // Observe elements with scroll animation classes
        document.querySelectorAll('.scroll-reveal, .scroll-scale, .slide-in-left, .slide-in-right, .slide-in-up').forEach(el => {
            observer.observe(el);
        });

        // Parallax scroll effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            document.querySelectorAll('.parallax-element').forEach(element => {
                element.style.setProperty('--scroll-speed', `${rate}px`);
            });
        });
    }

    setup3DEffects() {
        // Enhanced 3D card effects with mouse tracking
        document.querySelectorAll('.card-3d').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                gsap.to(card, {
                    duration: 0.3,
                    rotationX: rotateX,
                    rotationY: rotateY,
                    transformPerspective: 1000,
                    ease: "power2.out"
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.5,
                    rotationX: 0,
                    rotationY: 0,
                    ease: "power2.out"
                });
            });
        });

        // Tilt effects
        document.querySelectorAll('.tilt-effect').forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const tiltX = (y / rect.height) * 20;
                const tiltY = (x / rect.width) * 20;
                
                gsap.to(element, {
                    duration: 0.3,
                    rotationX: -tiltX,
                    rotationY: tiltY,
                    transformPerspective: 1000,
                    ease: "power2.out"
                });
            });
            
            element.addEventListener('mouseleave', () => {
                gsap.to(element, {
                    duration: 0.5,
                    rotationX: 0,
                    rotationY: 0,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });
    }

    setupParallax() {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            // Smooth parallax scrolling with GSAP
            gsap.utils.toArray('.parallax-slow').forEach(element => {
                gsap.to(element, {
                    yPercent: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });

            gsap.utils.toArray('.parallax-fast').forEach(element => {
                gsap.to(element, {
                    yPercent: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        }
    }

    setupTypewriter() {
        document.querySelectorAll('.typewriter-text').forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            
            gsap.to(element, {
                duration: text.length * 0.05,
                text: text,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }

    setupGSAPAnimations() {
        if (typeof gsap === 'undefined') return;

        // Hero section animations
        gsap.timeline()
            .from('.hero-title', {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power4.out"
            })
            .from('.hero-subtitle', {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: "power4.out"
            }, "-=0.5")
            .from('.hero-cta', {
                duration: 1,
                scale: 0,
                opacity: 0,
                ease: "elastic.out(1, 0.5)"
            }, "-=0.3");

        // Stagger animations for cards
        gsap.from('.stagger-item', {
            duration: 0.8,
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: '.stagger-container',
                start: "top 80%"
            }
        });

        // Counter animations
        document.querySelectorAll('.counter').forEach(counter => {
            const target = parseInt(counter.dataset.target);
            
            ScrollTrigger.create({
                trigger: counter,
                start: "top 80%",
                onEnter: () => {
                    gsap.to(counter, {
                        duration: 2,
                        innerText: target,
                        snap: { innerText: 1 },
                        ease: "power2.out"
                    });
                }
            });
        });

        // Morphing background shapes
        gsap.to('.morphing-bg', {
            duration: 8,
            rotate: 360,
            repeat: -1,
            ease: "none"
        });

        // Floating elements
        gsap.to('.float-element', {
            duration: 3,
            y: -20,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        });
    }

    // Advanced cursor effect
    setupCustomCursor() {
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                duration: 0.1,
                x: e.clientX,
                y: e.clientY,
                ease: "power2.out"
            });
        });

        document.querySelectorAll('a, button, .clickable').forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
    }

    // Page transition effects
    pageTransition() {
        const tl = gsap.timeline();
        
        tl.to('.page-transition', {
            duration: 0.5,
            scaleY: 1,
            transformOrigin: "bottom",
            ease: "power4.inOut"
        })
        .to('.page-transition', {
            duration: 0.5,
            scaleY: 0,
            transformOrigin: "top",
            ease: "power4.inOut",
            delay: 0.1
        });
    }

    // Smooth scroll implementation
    smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: target,
                        ease: "power2.inOut"
                    });
                }
            });
        });
    }

    // Initialize everything
    static init() {
        document.addEventListener('DOMContentLoaded', () => {
            new ModernAnimations();
        });
    }
}

// Auto-initialize when DOM is ready
ModernAnimations.init();

// Additional utility functions
class AnimationUtils {
    static addGlowEffect(element, color = '#42a5f5') {
        element.style.boxShadow = `0 0 20px ${color}`;
        element.style.transition = 'box-shadow 0.3s ease';
    }

    static createRippleEffect(element, e) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    static animateOnScroll(elements, animation = 'fadeInUp') {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animation);
                }
            });
        });

        elements.forEach(el => observer.observe(el));
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ModernAnimations, AnimationUtils };
}