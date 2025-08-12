(function () {
    // Smooth scrolling functionality
    function smoothScrollTo(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Footer visibility management - Show only on home page
    function updateFooterVisibility() {
        const footer = document.getElementById('footer');
        const activeSection = document.querySelector('.active');
        
        if (footer && activeSection) {
            // Show footer only when home section is active
            if (activeSection.id === 'home') {
                footer.style.display = 'block';
            } else {
                footer.style.display = 'none';
            }
        }
    }

    // Navigation controls
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            // Update active button
            const currentActiveBtn = document.querySelector(".active-btn");
            if (currentActiveBtn) {
                currentActiveBtn.classList.remove("active-btn");
            }
            this.classList.add("active-btn");
            
            // Update active section
            const currentActive = document.querySelector(".active");
            if (currentActive) {
                currentActive.classList.remove("active");
            }
            
            const targetSection = document.getElementById(button.dataset.id);
            if (targetSection) {
                targetSection.classList.add("active");
            }
            
            // Update footer visibility after navigation
            updateFooterVisibility();
        })
    });

    // Footer link navigation
    [...document.querySelectorAll(".footer-link")].forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            
            // Update navigation to show correct active section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Remove active class from current section
                const currentActive = document.querySelector(".active");
                if (currentActive) {
                    currentActive.classList.remove("active");
                }
                
                // Add active class to target section
                targetSection.classList.add("active");
                
                // Update navigation button
                const currentActiveBtn = document.querySelector(".active-btn");
                if (currentActiveBtn) {
                    currentActiveBtn.classList.remove("active-btn");
                }
                
                const targetBtn = document.querySelector(`[data-id="${targetId}"]`);
                if (targetBtn) {
                    targetBtn.classList.add("active-btn");
                }
                
                // Smooth scroll to section
                smoothScrollTo(targetId);
                
                // Update footer visibility after navigation
                setTimeout(updateFooterVisibility, 100);
            }
        });
    });

    // About section button navigation
    [...document.querySelectorAll(".about-btn")].forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            
            // Update navigation to show correct active section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Remove active class from current section
                const currentActive = document.querySelector(".active");
                if (currentActive) {
                    currentActive.classList.remove("active");
                }
                
                // Add active class to target section
                targetSection.classList.add("active");
                
                // Update navigation button
                const currentActiveBtn = document.querySelector(".active-btn");
                if (currentActiveBtn) {
                    currentActiveBtn.classList.remove("active-btn");
                }
                
                const targetBtn = document.querySelector(`[data-id="${targetId}"]`);
                if (targetBtn) {
                    targetBtn.classList.add("active-btn");
                }
                
                // Smooth scroll to section
                smoothScrollTo(targetId);
                
                // Update footer visibility after navigation
                setTimeout(updateFooterVisibility, 100);
            }
        });
    });

    // Theme toggle
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-mode");
        themeBtn.setAttribute("aria-pressed", String(isLight));
    });

    // Initialize footer visibility
    updateFooterVisibility();
})();