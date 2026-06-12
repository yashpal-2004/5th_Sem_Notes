// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/Hide Back to Top button
window.onscroll = function() {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }

    updateActiveSection();
};

// Active Section Highlighting
function updateActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.index-list a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    // Collapse all sub-indexes
    document.querySelectorAll('.sub-index').forEach(sub => {
        sub.classList.remove('expanded');
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
            const parentLi = link.parentElement;
            if (parentLi) {
                const subIndex = parentLi.querySelector('.sub-index');
                if (subIndex) {
                    subIndex.classList.add('expanded');
                }
            }
        }
    });
}

// Search Functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    const sections = document.querySelectorAll('.topic-section');
    
    sections.forEach(section => {
        const text = section.innerText.toLowerCase();
        if (text.includes(term)) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
});

// Collapsible Sections
function toggleSection(contentId) {
    const content = document.getElementById(contentId);
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0px';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        // Optionally reset to auto after animation so it resizes correctly if window changes
        setTimeout(() => {
            if(content.style.maxHeight !== '0px') {
                content.style.maxHeight = 'none';
            }
        }, 300);
    }
}

// Ensure sections are open by default
window.onload = () => {
    const contents = document.querySelectorAll('.collapsible-content');
    contents.forEach(content => {
        content.style.maxHeight = 'none';
    });
    updateActiveSection();
}


