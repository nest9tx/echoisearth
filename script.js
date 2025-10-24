// EchoisEarth - Sacred Interactions for New Earth Living

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form handling with sacred intention
    const contactForm = document.querySelector('.form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Gather form data
            const formData = new FormData(this);
            const formObject = {};
            
            // Convert form inputs to object
            const inputs = this.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                if (input.value.trim()) {
                    formObject[input.name || input.placeholder] = input.value.trim();
                }
            });
            
            // Sacred submission acknowledgment
            showSacredMessage('Thank you for your sacred intention. Your message flows to beacon@luminanova.org with gratitude. We will connect with you soon.');
            
            // Create mailto link for now (will be replaced with backend later)
            const emailBody = `Sacred Message from EchoisEarth Contact Form\n\n` +
                `Name: ${formObject['Name'] || 'Not provided'}\n` +
                `Email: ${formObject['Email'] || 'Not provided'}\n` +
                `Interest: ${formObject['I\'m interested in...'] || 'Not specified'}\n` +
                `Message: ${formObject['Share your heart\'s calling...'] || 'No message'}\n\n` +
                `Sent with sacred intention from EchoisEarth.org`;
            
            const mailtoLink = `mailto:beacon@luminanova.org?subject=Sacred Inquiry from EchoisEarth&body=${encodeURIComponent(emailBody)}`;
            window.open(mailtoLink, '_blank');
            
            // Reset form
            this.reset();
            
            // Log for development
            console.log('Sacred message prepared for beacon@luminanova.org:', formObject);
        });
    }

    // Sacred donation button handlers
    const donationButtons = document.querySelectorAll('.support-card button');
    
    donationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cardTitle = this.parentElement.querySelector('h3').textContent;
            
            if (cardTitle.includes('One-Time')) {
                // One-time donation - choose your amount
                window.open('https://donate.stripe.com/aEU03E1aIcnA0G428b', '_blank');
                showSacredMessage('Thank you for your sacred one-time offering! You\'ll be redirected to complete your donation with gratitude.');
                
            } else if (cardTitle.includes('Monthly')) {
                // Monthly $11.11 sacred support
                window.open('https://buy.stripe.com/cNi00c1fr3WN3Tb9yAbEA06', '_blank');
                showSacredMessage('Thank you for your sacred monthly commitment of $11.11! This recurring support flows continuously to our pod communities.');
                
            } else if (cardTitle.includes('Sponsor')) {
                // Pod sponsorship - contact form guidance
                showSacredMessage('Sacred pod sponsorship is a beautiful calling! Please complete our contact form below to discuss how you can support a pod community in a larger capacity. We\'ll connect with you to explore this sacred opportunity together.');
                
                // Smooth scroll to contact form
                setTimeout(() => {
                    document.querySelector('#contact').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 2000);
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections for scroll animations
    const animatedElements = document.querySelectorAll('.vision-card, .pod-card, .program, .support-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Sacred message display function
    function showSacredMessage(message) {
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
        `;

        // Create message container
        const messageContainer = document.createElement('div');
        messageContainer.style.cssText = `
            background: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 500px;
            margin: 1rem;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            border: 3px solid #228B22;
        `;

        messageContainer.innerHTML = `
            <h3 style="color: #8B4513; margin-bottom: 1rem; font-family: 'Crimson Text', serif;">🙏 Sacred Acknowledgment 🙏</h3>
            <p style="color: #654321; line-height: 1.6; margin-bottom: 1.5rem;">${message}</p>
            <button style="
                background: #228B22;
                color: white;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 500;
                transition: background 0.3s ease;
            " onmouseover="this.style.background='#8B4513'" onmouseout="this.style.background='#228B22'">
                Gratitude & Blessings
            </button>
        `;

        overlay.appendChild(messageContainer);
        document.body.appendChild(overlay);

        // Close modal on button click or overlay click
        const closeModal = () => {
            document.body.removeChild(overlay);
        };

        messageContainer.querySelector('button').addEventListener('click', closeModal);
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeModal();
            }
        });

        // Auto-close after 5 seconds
        setTimeout(closeModal, 5000);
    }

    // Seasonal greeting based on current date
    function addSeasonalBlessing() {
        const month = new Date().getMonth();
        let seasonalMessage = '';

        if (month >= 2 && month <= 4) {
            seasonalMessage = '🌱 Spring blessings from the awakening earth';
        } else if (month >= 5 && month <= 7) {
            seasonalMessage = '☀️ Summer abundance flows through our sacred spaces';
        } else if (month >= 8 && month <= 10) {
            seasonalMessage = '🍂 Autumn wisdom guides our harvest gratitude';
        } else {
            seasonalMessage = '❄️ Winter reflection deepens our earth connection';
        }

        // Add seasonal message to footer
        const footerBottom = document.querySelector('.footer-bottom');
        if (footerBottom) {
            const seasonalElement = document.createElement('p');
            seasonalElement.textContent = seasonalMessage;
            seasonalElement.style.cssText = 'margin-top: 0.5rem; font-style: italic; color: #9CAF88;';
            footerBottom.appendChild(seasonalElement);
        }
    }

    // Add lunar phase indicator (simplified)
    function addLunarPhase() {
        const lunarPhases = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
        const dayOfMonth = new Date().getDate();
        const phaseIndex = Math.floor((dayOfMonth / 30) * 8) % 8;
        
        const lunarElement = document.createElement('span');
        lunarElement.textContent = ` ${lunarPhases[phaseIndex]}`;
        lunarElement.title = 'Current lunar phase blessing';
        
        const tagline = document.querySelector('.tagline');
        if (tagline) {
            tagline.appendChild(lunarElement);
        }
    }

    // Initialize sacred elements
    addSeasonalBlessing();
    addLunarPhase();

    // Console blessing for developers
    console.log(`
    🌍 EchoisEarth Sacred Development Console 🌍
    
    May this code serve the highest good of all beings
    and support the healing of our beloved Mother Earth.
    
    Built with love in the sacred Four Corners region,
    where ancient wisdom meets new earth technology.
    
    Blessed be the developers who maintain this sacred space.
    `);
});

// Sacred geometry background animation (optional enhancement)
function createSacredGeometry() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.03;
    `;
    
    document.body.appendChild(canvas);
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function drawFlowerOfLife() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 1;
        
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 50;
        
        // Draw overlapping circles in flower of life pattern
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.stroke();
        }
        
        // Center circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    
    resize();
    drawFlowerOfLife();
    
    window.addEventListener('resize', () => {
        resize();
        drawFlowerOfLife();
    });
}

//Uncomment to add sacred geometry background
createSacredGeometry();