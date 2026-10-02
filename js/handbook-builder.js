/**
 * Dynamic In-Browser Short Notes Handbook Generator
 * Supports subject pages and homepage hub.
 * Lets the user customize the lecture range,
 * renders a custom Cover Page & Table of Contents on HTML5 Canvas,
 * and compiles a consolidated PDF directly in the browser via pdf-lib.
 */

(function () {
    'use strict';

    // Global subject catalog with fallback manifests
    const SUBJECT_CATALOG = {
        dl: {
            id: 'DL',
            folder: 'DL_Sem5',
            title: 'Deep Learning',
            code: 'NST-CS-DL501',
            midSemLimitDisplay: '11',
            midSemLabel: 'Mid-Sem (L1 - L11)',
            themeColor: '#132219',
            accentColor: '#2e593f',
            accentLight: '#eaf2ed',
            bgColor: '#fbfbf9',
            textDark: '#132219',
            textMuted: '#69736e',
            borderColor: '#dae0dc',
            lectures: [
                { index: 1, displayNum: '01', title: 'Where it Begins: The Neuron & Decision Boundaries', imgUrl: 'images/1.png' },
                { index: 2, displayNum: '02', title: 'The Activation Function and the Update Rule', imgUrl: 'images/2.png' },
                { index: 3, displayNum: '03', title: 'Modern Activations & Vanishing Gradients', imgUrl: 'images/3.png' },
                { index: 4, displayNum: '04', title: 'Multilayer Perceptrons & Backpropagation', imgUrl: 'images/4.png' },
                { index: 5, displayNum: '05', title: 'Optimization & Learning-Rate Control', imgUrl: 'images/5.png' },
                { index: 6, displayNum: '06', title: 'Gradient Descent Mechanics & Loss Landscapes', imgUrl: 'images/6.png' },
                { index: 7, displayNum: '07', title: 'Optimizers with Memory: Momentum, NAG, AdaGrad & Adam', imgUrl: 'images/7.png' },
                { index: 8, displayNum: '08', title: 'Adaptive Learning Rates: AdaGrad, RMSProp & Adam', imgUrl: 'images/8.png' },
                { index: 9, displayNum: '09', title: 'Regularisation: L2, L1, Early Stopping & Dropout', imgUrl: 'images/9.png' },
                { index: 10, displayNum: '10a', title: 'CNN Foundations: From Pixels to Patterns', imgUrl: 'images/10_part_1.png' },
                { index: 11, displayNum: '10b', title: 'Inside LeNet, AlexNet & VGG-16', imgUrl: 'images/10_part_2.png' },
                { index: 12, displayNum: '11', title: 'Modern Architectures: Inception & ResNet', imgUrl: 'images/11.png' }
            ]
        },
        aml: {
            id: 'AML',
            folder: 'AML',
            title: 'Advanced Machine Learning',
            code: 'NST-CS-AML502',
            midSemLimitDisplay: '14',
            midSemLabel: 'Mid-Sem (L1 - L14)',
            themeColor: '#162238',
            accentColor: '#365584',
            accentLight: '#ecf2fa',
            bgColor: '#f8fafc',
            textDark: '#162238',
            textMuted: '#647080',
            borderColor: '#dae2ec',
            lectures: [
                { index: 1, displayNum: '01', title: 'Setting the Foundation: From Code to Learning', imgUrl: 'images/1.png' },
                { index: 2, displayNum: '02', title: 'The ML Project Lifecycle (Part 1)', imgUrl: 'images/2.png' },
                { index: 3, displayNum: '03', title: 'Simple Linear Regression Using the OLS Method', imgUrl: 'images/3.png' },
                { index: 4, displayNum: '04', title: 'Multiple Linear Regression Using the OLS Method', imgUrl: 'images/4.png' },
                { index: 5, displayNum: '05', title: 'Batch Gradient Descent for Multiple Linear Regression', imgUrl: 'images/5.png' },
                { index: 6, displayNum: '06', title: 'Stochastic & Mini-Batch Gradient Descent', imgUrl: 'images/6.png' },
                { index: 7, displayNum: '07', title: 'Regression and Classification Evaluation Metrics', imgUrl: 'images/7.png' },
                { index: 8, displayNum: '08', title: 'Polynomial Regression & Assumptions', imgUrl: 'images/8.png' },
                { index: 9, displayNum: '09', title: 'Bias, Variance and the Bias-Variance Tradeoff', imgUrl: 'images/9.png' },
                { index: 10, displayNum: '10', title: 'Feature Selection', imgUrl: 'images/10.png' },
                { index: 11, displayNum: '11', title: 'Dimensionality Reduction & PCA', imgUrl: 'images/11.png' },
                { index: 12, displayNum: '12', title: 'Regularization: L1 (Lasso) & L2 (Ridge)', imgUrl: 'images/12.png' },
                { index: 13, displayNum: '13', title: 'Time Series Analysis: Stationarity, AR & MA', imgUrl: 'images/13.png' },
                { index: 14, displayNum: '14', title: 'Maximum Likelihood Estimation & Logistic Regression', imgUrl: 'images/14.png' }
            ]
        },
        cn: {
            id: 'CN',
            folder: 'CN',
            title: 'Computer Networks',
            code: 'NST-CS-CN503',
            midSemLimitDisplay: '13',
            midSemLabel: 'Mid-Sem (L1 - L13)',
            themeColor: '#0d282d',
            accentColor: '#1e606d',
            accentLight: '#e9f5f7',
            bgColor: '#f8fbfb',
            textDark: '#0d282d',
            textMuted: '#5f7378',
            borderColor: '#d7e6e9',
            lectures: [
                { index: 1, displayNum: '01', title: 'Introduction: The Cloud, Infrastructure & Top-Down Layers', imgUrl: 'images/1.png' },
                { index: 2, displayNum: '02', title: 'Moving Data Through the Core: Switching, Delays & Bottlenecks', imgUrl: 'images/2.png' },
                { index: 3, displayNum: '03', title: 'The OSI and TCP/IP Reference Models', imgUrl: 'images/3.png' },
                { index: 4, displayNum: '04', title: 'Networking Devices, Topologies & The Cloud Network', imgUrl: 'images/4.png' },
                { index: 5, displayNum: '05', title: 'Application Layer: Architecture, Protocols & APIs', imgUrl: 'images/5.png' },
                { index: 6, displayNum: '06', title: 'HTTPS & TLS Handshake: Securing the Web', imgUrl: 'images/6.png' },
                { index: 7, displayNum: '07', title: 'Electronic Mail Protocols: SMTP, POP3, IMAP & DNS MX', imgUrl: 'images/7.png' },
                { index: 8, displayNum: '08', title: 'The Socket API & Network Programming', imgUrl: 'images/8.png' },
                { index: 9, displayNum: '09', title: 'The Transport Layer & User Datagram Protocol (UDP)', imgUrl: 'images/9.png' },
                { index: 10, displayNum: '10', title: 'Principles of Reliable Data Transfer (rdt)', imgUrl: 'images/10.png' },
                { index: 11, displayNum: '11', title: 'TCP Congestion Control & Flow Control', imgUrl: 'images/11.png' },
                { index: 12, displayNum: '12', title: 'Cloud Load Balancing & Traffic Management', imgUrl: 'images/12.png' },
                { index: 13, displayNum: '13', title: 'Addressing the World: IPv4 & Classless CIDR Routing', imgUrl: 'images/13.png' },
                { index: 14, displayNum: '14', title: 'Subnetting in Practice & Network Address Translation (NAT)', imgUrl: 'images/14.png' }
            ]
        },
        mca: {
            id: 'MCA',
            folder: 'MCA',
            title: 'Modern Computer Architecture',
            code: 'NST-CS-MCA504',
            midSemLimitDisplay: '14',
            midSemLabel: 'Mid-Sem (L1 - L14)',
            themeColor: '#2a1e17',
            accentColor: '#6d4c3d',
            accentLight: '#f7f0ec',
            bgColor: '#fbf9f7',
            textDark: '#2a1e17',
            textMuted: '#786962',
            borderColor: '#e6dcd6',
            lectures: [
                { index: 1, displayNum: '01', title: 'Course Intro & Boolean Algebra', imgUrl: 'images/1.png' },
                { index: 2, displayNum: '02', title: 'Logic Minimisation & Universal Gates', imgUrl: 'images/2.png' },
                { index: 3, displayNum: '03', title: 'Combinational Building Blocks: CISC vs RISC ISA', imgUrl: 'images/3.png' },
                { index: 4, displayNum: '04', title: 'Number Systems, Two\'s Complement & Overflow', imgUrl: 'images/4.png' },
                { index: 5, displayNum: '05', title: 'Sequential Logic: Feedback, Latches & Memory', imgUrl: 'images/5.png' },
                { index: 6, displayNum: '06', title: 'Latches, Flip-Flops & Timing Foundations', imgUrl: 'images/6.png' },
                { index: 7, displayNum: '07', title: 'Metastability, Synchronizers & Static Timing Analysis', imgUrl: 'images/7.png' },
                { index: 8, displayNum: '08', title: 'Flip-Flop Types, Registers & Digital Counters', imgUrl: 'images/8.png' },
                { index: 9, displayNum: '09', title: 'Register Files & Finite State Machines (FSMs)', imgUrl: 'images/9.png' },
                { index: 10, displayNum: '10', title: 'Memory Technologies: SRAM vs. DRAM & Architecture', imgUrl: 'images/10.png' },
                { index: 11, displayNum: '11', title: 'Von Neumann vs. Harvard Architecture & Bottleneck', imgUrl: 'images/11.png' },
                { index: 12, displayNum: '12', title: 'ISA Design Principles: RISC vs. CISC Architecture', imgUrl: 'images/12.png' },
                { index: 13, displayNum: '13', title: 'MIPS32 & RISC-V Instruction Formats (R, I, and J)', imgUrl: 'images/13.png' },
                { index: 14, displayNum: '14', title: 'Control Flow Translation & Stack Calling Conventions', imgUrl: 'images/14.png' }
            ]
        }
    };

    function isRootPage() {
        if (document.querySelectorAll('.lecture-card').length > 0) return false;
        return !window.location.pathname.match(/[\/\\](DL_Sem5|AML|CN|MCA)[\/\\]/i);
    }

    // Ensure PDFLib is loaded
    function ensurePdfLib(callback) {
        if (window.PDFLib) {
            callback();
            return;
        }
        const script = document.createElement('script');
        script.src = isRootPage() ? 'js/pdf-lib.min.js' : '../js/pdf-lib.min.js';
        script.onload = () => callback();
        script.onerror = () => {
            const fallbackScript = document.createElement('script');
            fallbackScript.src = 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js';
            fallbackScript.onload = () => callback();
            document.head.appendChild(fallbackScript);
        };
        document.head.appendChild(script);
    }

    // Detect subject details
    function getSubjectDetails(subjectKey) {
        if (subjectKey && SUBJECT_CATALOG[subjectKey.toLowerCase()]) {
            return SUBJECT_CATALOG[subjectKey.toLowerCase()];
        }

        const titleText = (document.title || '').toLowerCase();
        const logoText = (document.querySelector('.logo-text')?.textContent || '').toLowerCase();
        const fullText = titleText + ' ' + logoText;

        if (fullText.includes('deep learning') || fullText.includes('dl')) {
            return SUBJECT_CATALOG.dl;
        } else if (fullText.includes('advanced machine learning') || fullText.includes('aml')) {
            return SUBJECT_CATALOG.aml;
        } else if (fullText.includes('network') || fullText.includes('cn')) {
            return SUBJECT_CATALOG.cn;
        } else if (fullText.includes('architecture') || fullText.includes('mca')) {
            return SUBJECT_CATALOG.mca;
        }

        return SUBJECT_CATALOG.dl;
    }

    // Scan all lecture cards dynamically
    function getLecturesForSubject(subject) {
        const cards = Array.from(document.querySelectorAll('.lecture-card'));
        if (cards.length > 0) {
            return cards.map((card, idx) => {
                const numEl = card.querySelector('.lecture-number');
                const titleEl = card.querySelector('h2');
                const imgLink = card.querySelector('a[href*="images/"]');
                
                const numText = numEl ? numEl.textContent.trim() : String(idx + 1).padStart(2, '0');
                const titleText = titleEl ? titleEl.textContent.trim() : `Lecture ${numText}`;
                let imgUrl = imgLink ? imgLink.getAttribute('href') : `images/${idx + 1}.png`;
                return {
                    index: idx + 1,
                    displayNum: numText,
                    title: titleText,
                    imgUrl: imgUrl
                };
            });
        }

        if (subject && subject.lectures && subject.lectures.length) {
            return subject.lectures.map(l => ({ ...l }));
        }

        return [];
    }

    // Active State
    let currentSubject = null;
    let currentLectures = [];
    let modalOverlay = null;

    function buildModalDOM() {
        if (modalOverlay) return;

        // Ensure stylesheet is linked
        if (!document.querySelector('link[href*="handbook-modal.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = isRootPage() ? 'css/handbook-modal.css' : '../css/handbook-modal.css';
            document.head.appendChild(link);
        }

        modalOverlay = document.createElement('div');
        modalOverlay.className = 'handbook-modal-overlay';
        modalOverlay.id = 'handbookModalOverlay';

        modalOverlay.innerHTML = `
            <div class="handbook-modal" role="dialog" aria-modal="true" aria-labelledby="handbookModalTitle">
                <div class="handbook-modal-header">
                    <div class="handbook-modal-title-wrap">
                        <h3 id="handbookModalTitle">Custom PDF Handbook Builder</h3>
                        <p class="handbook-modal-subtitle">Select your lecture range to compile into a tailored revision handbook with an automated Table of Contents.</p>
                    </div>
                    <button class="handbook-modal-close" id="handbookModalCloseBtn" title="Close modal" aria-label="Close">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="handbook-modal-body">
                    <div class="handbook-presets-row">
                        <span class="handbook-preset-label">Presets:</span>
                        <button type="button" class="handbook-preset-btn" id="presetAllBtn">All Lectures</button>
                        <button type="button" class="handbook-preset-btn" id="presetMid1Btn">Mid-Sem Syllabus</button>
                        <button type="button" class="handbook-preset-btn" id="presetMid2Btn">Post Mid-Sem</button>
                    </div>
                    <div class="handbook-range-grid">
                        <div class="handbook-field">
                            <label for="handbookStartSelect">From Lecture</label>
                            <select id="handbookStartSelect" class="handbook-select"></select>
                        </div>
                        <div class="handbook-field">
                            <label for="handbookEndSelect">To Lecture</label>
                            <select id="handbookEndSelect" class="handbook-select"></select>
                        </div>
                    </div>
                    <div class="handbook-summary-box">
                        <div class="handbook-summary-item">
                            <span class="handbook-summary-label">Selected Range:</span>
                            <span class="handbook-summary-val" id="summaryRangeVal">Lecture 01 to Lecture 11</span>
                        </div>
                        <div class="handbook-summary-item">
                            <span class="handbook-summary-label">Short Notes Units:</span>
                            <span class="handbook-summary-val" id="summaryUnitsVal">11 Cheatsheet Pages</span>
                        </div>
                        <div class="handbook-summary-item">
                            <span class="handbook-summary-label">Compiled Document:</span>
                            <span class="handbook-summary-val" id="summaryPagesVal">12 Pages (Cover & Table of Contents + Notes)</span>
                        </div>
                    </div>
                    <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.78rem;color:var(--text-muted, #667069);padding:0 2px;">
                        <span>Auto-scans current lectures dynamically</span>
                        <a id="handbookDirectFullLink" href="#" download style="color:var(--text-dark, #132219);font-weight:600;text-decoration:underline;">Download pre-compiled full handbook</a>
                    </div>
                    <div class="handbook-progress-wrap" id="handbookProgressWrap">
                        <div class="handbook-progress-status" id="handbookProgressStatus">Preparing compilation...</div>
                        <div class="handbook-progress-bar-bg">
                            <div class="handbook-progress-bar-fill" id="handbookProgressBarFill"></div>
                        </div>
                    </div>
                </div>
                <div class="handbook-modal-footer">
                    <button type="button" class="handbook-btn-secondary" id="handbookCancelBtn">Cancel</button>
                    <button type="button" class="handbook-btn-compile" id="handbookCompileBtn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        <span>Generate &amp; Download PDF</span>
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modalOverlay);

        // Bind basic events
        document.getElementById('handbookModalCloseBtn').addEventListener('click', closeModal);
        document.getElementById('handbookCancelBtn').addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });

        document.getElementById('handbookStartSelect').addEventListener('change', onRangeChanged);
        document.getElementById('handbookEndSelect').addEventListener('change', onRangeChanged);

        document.getElementById('presetAllBtn').addEventListener('click', () => {
            const startSel = document.getElementById('handbookStartSelect');
            const endSel = document.getElementById('handbookEndSelect');
            startSel.selectedIndex = 0;
            endSel.selectedIndex = endSel.options.length - 1;
            onRangeChanged();
        });

        document.getElementById('presetMid1Btn').addEventListener('click', () => {
            const startSel = document.getElementById('handbookStartSelect');
            const endSel = document.getElementById('handbookEndSelect');
            startSel.selectedIndex = 0;
            let targetIdx = -1;
            currentLectures.forEach((lec, idx) => {
                const numClean = lec.displayNum.replace(/[^0-9]/g, '');
                const targetClean = (currentSubject.midSemLimitDisplay || '').replace(/[^0-9]/g, '');
                if (numClean === targetClean || lec.displayNum.toLowerCase() === (currentSubject.midSemLimitDisplay || '').toLowerCase()) {
                    targetIdx = idx;
                }
            });
            if (targetIdx === -1) targetIdx = endSel.options.length - 1;
            endSel.selectedIndex = targetIdx;
            onRangeChanged();
        });

        document.getElementById('presetMid2Btn').addEventListener('click', () => {
            const startSel = document.getElementById('handbookStartSelect');
            const endSel = document.getElementById('handbookEndSelect');
            let targetIdx = -1;
            currentLectures.forEach((lec, idx) => {
                const numClean = lec.displayNum.replace(/[^0-9]/g, '');
                const targetClean = (currentSubject.midSemLimitDisplay || '').replace(/[^0-9]/g, '');
                if (numClean === targetClean || lec.displayNum.toLowerCase() === (currentSubject.midSemLimitDisplay || '').toLowerCase()) {
                    targetIdx = idx;
                }
            });

            if (targetIdx !== -1 && targetIdx < currentLectures.length - 1) {
                startSel.selectedIndex = targetIdx + 1;
                endSel.selectedIndex = endSel.options.length - 1;
            } else {
                startSel.selectedIndex = 0;
                endSel.selectedIndex = Math.max(0, Math.floor((currentLectures.length - 1) / 2));
            }
            onRangeChanged();
        });

        document.getElementById('handbookCompileBtn').addEventListener('click', compileCustomHandbook);
    }

    function populateSelectOptions() {
        const startSel = document.getElementById('handbookStartSelect');
        const endSel = document.getElementById('handbookEndSelect');
        if (!startSel || !endSel) return;

        startSel.innerHTML = '';
        endSel.innerHTML = '';

        currentLectures.forEach((lec, idx) => {
            const optStart = new Option(`Lecture ${lec.displayNum}: ${lec.title}`, String(idx));
            const optEnd = new Option(`Lecture ${lec.displayNum}: ${lec.title}`, String(idx));
            startSel.add(optStart);
            endSel.add(optEnd);
        });

        startSel.selectedIndex = 0;
        endSel.selectedIndex = currentLectures.length - 1;
    }

    function openModal(subjectKey) {
        buildModalDOM();

        currentSubject = getSubjectDetails(subjectKey);
        currentLectures = getLecturesForSubject(currentSubject);

        if (!currentLectures.length) {
            alert('No lecture materials found for this subject.');
            return;
        }

        // Header and subtitle
        const titleEl = document.getElementById('handbookModalTitle');
        if (titleEl) {
            titleEl.textContent = `${currentSubject.title} Handbook Builder`;
        }
        const subtitleEl = document.querySelector('.handbook-modal-subtitle');
        if (subtitleEl) {
            subtitleEl.textContent = `Select lecture range for ${currentSubject.title} to compile into an offline revision PDF handbook with an automated Table of Contents.`;
        }

        populateSelectOptions();

        // Reset progress UI
        const progWrap = document.getElementById('handbookProgressWrap');
        progWrap.classList.remove('active');
        document.getElementById('handbookCompileBtn').disabled = false;

        const midBtn = document.getElementById('presetMid1Btn');
        const postMidBtn = document.getElementById('presetMid2Btn');

        if (midBtn) {
            midBtn.textContent = currentSubject.midSemLabel || 'Mid-Sem Syllabus';
        }

        let targetEndIdx = -1;
        currentLectures.forEach((lec, idx) => {
            const numClean = lec.displayNum.replace(/[^0-9]/g, '');
            const targetClean = (currentSubject.midSemLimitDisplay || '').replace(/[^0-9]/g, '');
            if (numClean === targetClean || lec.displayNum.toLowerCase() === (currentSubject.midSemLimitDisplay || '').toLowerCase()) {
                targetEndIdx = idx;
            }
        });
        if (targetEndIdx === -1) targetEndIdx = currentLectures.length - 1;

        if (postMidBtn) {
            if (targetEndIdx < currentLectures.length - 1) {
                const nextLec = currentLectures[targetEndIdx + 1];
                postMidBtn.textContent = `Post Mid-Sem (L${nextLec.displayNum}+)`;
                postMidBtn.style.display = 'inline-block';
            } else {
                const halfIdx = Math.max(0, Math.floor((currentLectures.length - 1) / 2));
                postMidBtn.textContent = `First Half (L1 - L${currentLectures[halfIdx].displayNum})`;
                postMidBtn.style.display = 'inline-block';
            }
        }

        const directLink = document.getElementById('handbookDirectFullLink');
        if (directLink) {
            const defaultPdf = `${currentSubject.id === 'DL' ? 'DL' : currentSubject.id}_Short_Notes_Handbook.pdf`;
            const fullHref = (isRootPage() && currentSubject.folder) ? `${currentSubject.folder}/${defaultPdf}` : defaultPdf;
            directLink.href = fullHref;
            directLink.download = defaultPdf;
        }

        onRangeChanged();
        modalOverlay.classList.add('active');

        // Optional background refresh if on homepage
        if (isRootPage() && currentSubject.folder) {
            fetch(`${currentSubject.folder}/index.html`)
                .then(res => res.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const fetchedCards = Array.from(doc.querySelectorAll('.lecture-card'));
                    if (fetchedCards.length > 0 && currentSubject && (currentSubject.folder === subjectKey || currentSubject.id.toLowerCase() === (subjectKey || '').toLowerCase())) {
                        const refreshed = fetchedCards.map((card, idx) => {
                            const numEl = card.querySelector('.lecture-number');
                            const titleEl = card.querySelector('h2');
                            const imgLink = card.querySelector('a[href*="images/"]');
                            const numText = numEl ? numEl.textContent.trim() : String(idx + 1).padStart(2, '0');
                            const titleText = titleEl ? titleEl.textContent.trim() : `Lecture ${numText}`;
                            const imgUrl = imgLink ? imgLink.getAttribute('href') : `images/${idx + 1}.png`;
                            return {
                                index: idx + 1,
                                displayNum: numText,
                                title: titleText,
                                imgUrl: imgUrl
                            };
                        });
                        if (refreshed.length !== currentLectures.length) {
                            currentLectures = refreshed;
                            populateSelectOptions();
                            onRangeChanged();
                        }
                    }
                })
                .catch(() => {});
        }
    }

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    }

    function onRangeChanged() {
        const startSel = document.getElementById('handbookStartSelect');
        const endSel = document.getElementById('handbookEndSelect');
        if (!currentLectures.length || !startSel || !endSel) return;

        let startIdx = parseInt(startSel.value, 10);
        let endIdx = parseInt(endSel.value, 10);

        if (isNaN(startIdx)) startIdx = 0;
        if (isNaN(endIdx)) endIdx = currentLectures.length - 1;

        if (startIdx > endIdx) {
            endIdx = startIdx;
            endSel.value = String(endIdx);
        }

        const selectedCount = endIdx - startIdx + 1;
        const startLec = currentLectures[startIdx];
        const endLec = currentLectures[endIdx];

        document.getElementById('summaryRangeVal').textContent = `Lecture ${startLec.displayNum} to Lecture ${endLec.displayNum}`;
        document.getElementById('summaryUnitsVal').textContent = `${selectedCount} Unit${selectedCount > 1 ? 's' : ''}`;
        document.getElementById('summaryPagesVal').textContent = `${selectedCount + 1} Pages (Cover & Table of Contents + ${selectedCount} Notes)`;
    }

    // Off-screen canvas cover page renderer
    function renderCoverPageCanvas(subject, selectedLectures) {
        const W = 1024;
        const H = 1536;
        const canvas = document.createElement('canvas');
        canvas.width = W;
        canvas.height = H;
        const ctx = canvas.getContext('2d');

        // Background
        ctx.fillStyle = subject.bgColor;
        ctx.fillRect(0, 0, W, H);

        const margin = 40;
        // Outer decorative double frame
        ctx.strokeStyle = subject.borderColor;
        ctx.lineWidth = 2;
        ctx.strokeRect(margin, margin, W - 2 * margin, H - 2 * margin);

        ctx.strokeStyle = '#e2e7e4';
        ctx.lineWidth = 1;
        ctx.strokeRect(margin + 6, margin + 6, W - 2 * (margin + 6), H - 2 * (margin + 6));

        // Top Header Banner
        const headerTop = margin + 12;
        const headerHeight = 200;
        ctx.fillStyle = subject.themeColor;
        ctx.fillRect(margin + 12, headerTop, W - 2 * (margin + 12), headerHeight);

        // Accent bottom line on banner
        ctx.fillStyle = subject.accentColor;
        ctx.fillRect(margin + 12, headerTop + headerHeight - 6, W - 2 * (margin + 12), 6);

        // Header Text
        const padX = margin + 40;
        ctx.fillStyle = '#c8ded0';
        ctx.font = 'bold 15px "Segoe UI", Arial, sans-serif';
        ctx.fillText('NST ACADEMIC COMPENDIUM • CUSTOM SHORT NOTES HANDBOOK', padX, headerTop + 45);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 44px "Playfair Display", Georgia, serif';
        ctx.fillText(subject.title, padX, headerTop + 105);

        ctx.fillStyle = '#dde8e1';
        ctx.font = '16px "Segoe UI", Arial, sans-serif';
        const startNum = selectedLectures[0].displayNum;
        const endNum = selectedLectures[selectedLectures.length - 1].displayNum;
        const rangeText = `${subject.code}  |  Semester 5 Examination Prep  |  Lectures ${startNum} to ${endNum}`;
        ctx.fillText(rangeText, padX, headerTop + 155);

        // Metadata Cards Row
        const metaY = headerTop + headerHeight + 25;
        const metaH = 55;
        const cardW = Math.floor((W - 2 * padX - 30) / 3);

        const metaItems = [
            { label: 'SELECTED UNITS', val: `${selectedLectures.length} Lectures (L${startNum} - L${endNum})` },
            { label: 'DOCUMENT PAGES', val: `${selectedLectures.length + 1} Total Pages (Cover + Notes)` },
            { label: 'EDITION', val: 'Custom Revision Handbook' }
        ];

        metaItems.forEach((item, idx) => {
            const cx = padX + idx * (cardW + 15);
            ctx.fillStyle = subject.accentLight;
            roundRect(ctx, cx, metaY, cardW, metaH, 6, true, false);
            ctx.strokeStyle = subject.borderColor;
            ctx.lineWidth = 1;
            roundRect(ctx, cx, metaY, cardW, metaH, 6, false, true);

            ctx.fillStyle = subject.accentColor;
            ctx.font = 'bold 12px "Segoe UI", Arial, sans-serif';
            ctx.fillText(item.label, cx + 16, metaY + 22);

            ctx.fillStyle = subject.textDark;
            ctx.font = 'bold 14px "Segoe UI", Arial, sans-serif';
            ctx.fillText(item.val, cx + 16, metaY + 42);
        });

        // Table of Contents Header
        const tocTop = metaY + metaH + 32;
        ctx.fillStyle = subject.textDark;
        ctx.font = 'bold 18px "Segoe UI", Arial, sans-serif';
        ctx.fillText('TABLE OF CONTENTS & INDEX', padX, tocTop);

        ctx.strokeStyle = subject.accentColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padX, tocTop + 10);
        ctx.lineTo(W - padX, tocTop + 10);
        ctx.stroke();

        // Table Header Row
        const thY = tocTop + 20;
        const thH = 32;
        ctx.fillStyle = '#ebeef0';
        ctx.fillRect(padX, thY, W - 2 * padX, thH);

        ctx.fillStyle = subject.textMuted;
        ctx.font = 'bold 12px "Segoe UI", Arial, sans-serif';
        ctx.fillText('UNIT', padX + 16, thY + 20);
        ctx.fillText('LECTURE TOPIC & SUMMARY', padX + 95, thY + 20);
        ctx.fillText('PAGE', W - padX - 70, thY + 20);

        // Lecture Rows
        const rowStartY = thY + thH + 4;
        const numLectures = selectedLectures.length;
        const availH = (H - margin - 55) - rowStartY;
        const rowH = Math.min(50, Math.max(34, Math.floor(availH / numLectures)));

        selectedLectures.forEach((lec, idx) => {
            const ry = rowStartY + idx * rowH;
            const pageNum = idx + 2;

            if (idx % 2 === 1) {
                ctx.fillStyle = '#f5f7f8';
                ctx.fillRect(padX, ry, W - 2 * padX, rowH);
            }

            // Divider line
            ctx.strokeStyle = '#e6eaec';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(padX, ry + rowH);
            ctx.lineTo(W - padX, ry + rowH);
            ctx.stroke();

            // Unit pill
            const pillW = 60;
            const pillH = 22;
            const py = ry + Math.floor((rowH - pillH) / 2);
            ctx.fillStyle = subject.accentLight;
            roundRect(ctx, padX + 12, py, pillW, pillH, 4, true, false);
            ctx.strokeStyle = subject.accentColor;
            ctx.lineWidth = 1;
            roundRect(ctx, padX + 12, py, pillW, pillH, 4, false, true);

            ctx.fillStyle = subject.accentColor;
            ctx.font = 'bold 12px "Segoe UI", Arial, sans-serif';
            ctx.fillText(`L-${lec.displayNum}`, padX + 20, py + 16);

            // Title
            ctx.fillStyle = subject.textDark;
            ctx.font = '14px "Segoe UI", Arial, sans-serif';
            let titleStr = lec.title;
            if (titleStr.length > 68) {
                titleStr = titleStr.substring(0, 65) + '...';
            }
            ctx.fillText(titleStr, padX + 95, ry + Math.floor(rowH / 2) + 5);

            // Page number
            ctx.fillStyle = subject.accentColor;
            ctx.font = 'bold 13px "Segoe UI", Arial, sans-serif';
            const pageStr = `Page ${String(pageNum).padStart(2, '0')}`;
            ctx.fillText(pageStr, W - padX - 70, ry + Math.floor(rowH / 2) + 5);
        });

        // Footer
        const footerY = H - margin - 25;
        ctx.fillStyle = subject.textMuted;
        ctx.font = '12px "Segoe UI", Arial, sans-serif';
        ctx.fillText('NST 5th Semester • High-Resolution Cheatsheets Handbook • Generated On-Demand', padX, footerY);
        ctx.fillText('Cover Page 01', W - padX - 90, footerY);

        return canvas;
    }

    // Helper for rounded rect in canvas
    function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (fill) ctx.fill();
        if (stroke) ctx.stroke();
    }

    // Robust image byte loader with canvas fallback
    async function fetchImageBytes(url) {
        try {
            const resp = await fetch(url);
            if (resp.ok) {
                const buffer = await resp.arrayBuffer();
                return { bytes: new Uint8Array(buffer), isPng: !url.toLowerCase().endsWith('.jpg') };
            }
        } catch (e) {
            // Fetch failed; fall back to Image + Canvas
        }

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth || 1024;
                canvas.height = img.naturalHeight || 1536;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                canvas.toBlob((blob) => {
                    if (!blob) {
                        reject(new Error('Canvas blob conversion failed'));
                        return;
                    }
                    blob.arrayBuffer().then((buf) => {
                        resolve({ bytes: new Uint8Array(buf), isPng: true });
                    });
                }, 'image/png');
            };
            img.onerror = () => reject(new Error('Failed to load image from ' + url));
            img.src = url;
        });
    }

    // Main Compilation Routine
    async function compileCustomHandbook() {
        const compileBtn = document.getElementById('handbookCompileBtn');
        const progressWrap = document.getElementById('handbookProgressWrap');
        const progressStatus = document.getElementById('handbookProgressStatus');
        const progressBarFill = document.getElementById('handbookProgressBarFill');

        compileBtn.disabled = true;
        progressWrap.classList.add('active');

        function setProgress(percent, text) {
            progressBarFill.style.width = percent + '%';
            progressStatus.textContent = text;
        }

        try {
            setProgress(5, 'Loading PDF assembly engine...');
            await new Promise((resolve) => ensurePdfLib(resolve));

            if (!window.PDFLib) {
                throw new Error('PDFLib library could not be initialized.');
            }

            const startIdx = parseInt(document.getElementById('handbookStartSelect').value, 10);
            const endIdx = parseInt(document.getElementById('handbookEndSelect').value, 10);
            const selectedLectures = currentLectures.slice(startIdx, endIdx + 1);

            if (!selectedLectures.length) {
                throw new Error('No lectures selected.');
            }

            const subject = currentSubject;
            setProgress(15, 'Rendering custom Cover Page & Table of Contents...');

            // Render cover canvas
            const coverCanvas = renderCoverPageCanvas(subject, selectedLectures);
            const coverBlob = await new Promise((res) => coverCanvas.toBlob(res, 'image/png'));
            const coverBuffer = await coverBlob.arrayBuffer();

            setProgress(25, 'Initializing PDF document...');
            const { PDFDocument } = window.PDFLib;
            const pdfDoc = await PDFDocument.create();

            // Embed cover page
            const coverImg = await pdfDoc.embedPng(coverBuffer);
            const coverPage = pdfDoc.addPage([1024, 1536]);
            coverPage.drawImage(coverImg, { x: 0, y: 0, width: 1024, height: 1536 });

            // Embed each selected short notes image
            const totalLectures = selectedLectures.length;
            for (let i = 0; i < totalLectures; i++) {
                const lec = selectedLectures[i];
                const pct = 25 + Math.floor(((i + 1) / totalLectures) * 65);
                setProgress(pct, `Embedding Lecture ${lec.displayNum}: ${lec.title.substring(0, 30)}... (${i + 1}/${totalLectures})`);

                let imgUrl = lec.imgUrl;
                if (isRootPage() && subject.folder && !imgUrl.startsWith(subject.folder + '/')) {
                    imgUrl = subject.folder + '/' + imgUrl;
                }

                const imgData = await fetchImageBytes(imgUrl);
                let embeddedImg;
                if (!imgData.isPng) {
                    embeddedImg = await pdfDoc.embedJpg(imgData.bytes);
                } else {
                    embeddedImg = await pdfDoc.embedPng(imgData.bytes);
                }

                const page = pdfDoc.addPage([embeddedImg.width || 1024, embeddedImg.height || 1536]);
                page.drawImage(embeddedImg, {
                    x: 0,
                    y: 0,
                    width: page.getWidth(),
                    height: page.getHeight()
                });
            }

            setProgress(95, 'Finalizing and packaging PDF...');
            const pdfBytes = await pdfDoc.save();
            const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

            const startNum = selectedLectures[0].displayNum;
            const endNum = selectedLectures[selectedLectures.length - 1].displayNum;
            const downloadFilename = `${subject.id}_Short_Notes_L${startNum}_to_L${endNum}.pdf`;

            const link = document.createElement('a');
            link.href = URL.createObjectURL(pdfBlob);
            link.download = downloadFilename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setProgress(100, `Downloaded ${downloadFilename}!`);
            setTimeout(() => {
                closeModal();
            }, 1200);
        } catch (err) {
            console.error('Handbook generation failed:', err);
            setProgress(100, `Error: ${err.message || 'Generation failed'}`);
            compileBtn.disabled = false;
        }
    }

    // Expose globally so buttons can trigger openHandbookModal(subjectKey)
    window.openHandbookModal = openModal;

    // Attach automatically to any elements with data-action="custom-handbook" or class "trigger-handbook-modal"
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-action="custom-handbook"], .trigger-handbook-modal').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const subj = el.getAttribute('data-subject');
                openModal(subj);
            });
        });
    });
})();
