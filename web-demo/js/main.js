// Main JavaScript for the Prompt Engineering Guide Demo

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initSmoothScrolling();
    initCardAnimations();
    initTypingEffect();
    initStatsCounter();
    
    console.log('🚀 Guía Maestra de Prompts - Demo cargado correctamente');
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
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
}

// Card hover animations
function initCardAnimations() {
    const cards = document.querySelectorAll('.ai-card, .resource-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-content h2');
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Animated counter for stats
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const increment = target / 50;
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            const displayValue = Math.floor(current);
            if (element.textContent.includes('+')) {
                element.textContent = displayValue + '+';
            } else {
                element.textContent = displayValue;
            }
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = element.textContent.includes('+') ? target + '+' : target;
        }
    };
    
    updateCounter();
}

// Interactive comparison table
function initComparisonTable() {
    const table = document.querySelector('.comparison-table table');
    if (!table) return;
    
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--bg-secondary)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
}

// Theme toggle functionality (for future implementation)
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
}

// Search functionality (for future implementation)
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.ai-card, .resource-card');
        
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!mobileToggle || !navMenu) return;
    
    mobileToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;
    
    window.addEventListener('scroll', function() {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

// Copy to clipboard functionality for code examples
function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.textContent = 'Copiar';
        button.className = 'copy-btn';
        
        button.addEventListener('click', async function() {
            try {
                await navigator.clipboard.writeText(block.textContent);
                this.textContent = '¡Copiado!';
                setTimeout(() => {
                    this.textContent = 'Copiar';
                }, 2000);
            } catch (err) {
                console.error('Error al copiar:', err);
            }
        });
        
        block.parentNode.insertBefore(button, block);
    });
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add loading states
function showLoading(element) {
    element.classList.add('loading');
    element.setAttribute('aria-busy', 'true');
}

function hideLoading(element) {
    element.classList.remove('loading');
    element.setAttribute('aria-busy', 'false');
}

// Utility functions
const utils = {
    // Debounce function for performance
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Format numbers with k/M suffix
    formatNumber: function(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    }
};

// Export for potential use in other scripts
window.PromptGuide = {
    init: function() {
        initSmoothScrolling();
        initCardAnimations();
        initTypingEffect();
        initStatsCounter();
        initComparisonTable();
        initCodeCopy();
        initLazyLoading();
    },
    utils: utils
};