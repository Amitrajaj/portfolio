// JavaScript for Lucide icon replacement and potential interactivity
        document.addEventListener('DOMContentLoaded', () => {
            // Replaces all elements with 'data-lucide' attribute with actual SVG icons
            lucide.createIcons();
            console.log("Lucide Icons initialized.");

            // Simple interactive script
            const skillBadges = document.querySelectorAll('.skill-badge');
            skillBadges.forEach(badge => {
                badge.addEventListener('click', () => {
                    console.log(`Skill badge clicked: ${badge.textContent.trim()}`);
                });
            });
        });

        // Function to simulate dynamic content loading (for demonstration)
        function loadContent() {
            console.log("Sleek profile content loaded and ready.");
        }

        window.onload = loadContent;

        // Initialize when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Lucide icons
            lucide.createIcons();
            console.log("Lucide Icons initialized.");

            // Skill badge interaction
            const skillBadges = document.querySelectorAll('.skill-badge');
            skillBadges.forEach(badge => {
                badge.addEventListener('click', () => {
                    console.log(`Skill badge clicked: ${badge.textContent.trim()}`);
                });
            });
        });

        window.addEventListener('load', () => {
            console.log("Page fully loaded and ready.");
        });