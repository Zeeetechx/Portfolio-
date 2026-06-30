document.addEventListener('DOMContentLoaded', () => {
    const headerAnchors = document.querySelectorAll('.nav-link');
    const layoutPanels = document.querySelectorAll('.canvas-panel');

    // Central Core Single-Page Application Router
    function navigateToPanel(targetPanelId) {
        // Task Phase 1: Toggle functional active styles over navigation anchor nodes
        headerAnchors.forEach(anchor => {
            if (anchor.getAttribute('data-view') === targetPanelId) {
                anchor.classList.add('active');
            } else {
                anchor.classList.remove('active');
            }
        });

        // Task Phase 2: Switch display visibility for viewport panels
        layoutPanels.forEach(panel => {
            if (panel.id === targetPanelId) {
                panel.classList.add('active-panel');
                // Instantly realign layout perspective back up to top coordination limits
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                panel.classList.remove('active-panel');
            }
        });
    }

    // Connect trigger click click parameters to target links
    headerAnchors.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const requestedPanel = btn.getAttribute('data-view');
            navigateToPanel(requestedPanel);
        });
    });

    // Share router function safely within global execution window container context
    window.navigateToPanel = navigateToPanel;
});
