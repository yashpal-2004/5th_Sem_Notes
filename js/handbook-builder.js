/**
 * Dynamic In-Browser Short Notes Handbook Generator
 * Automatically discovers all lectures from the DOM,
 * lets the user customize the lecture range,
 * renders a custom Cover Page & Table of Contents on HTML5 Canvas,
 * and compiles a consolidated PDF directly in the browser via pdf-lib.
 */

(function () {
    'use strict';

    // Ensure PDFLib is loaded
    function ensurePdfLib(callback) {
        if (window.PDFLib) {
            callback();
            return;
        }
        // Try local script first, fallback to unpkg
        const script = document.createElement('script');
        script.src = '../js/pdf-lib.min.js';
        script.onload = () => callback();
        script.onerror = () => {
            const fallbackScript = document.createElement('script');
            fallbackScript.src = 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js';
            fallbackScript.onload = () => callback();
            document.head.appendChild(fallbackScript);
        };
        document.head.appendChild(script);
    }

    // Detect subject details from DOM
    function getSubjectDetails() {
        const titleText = (document.title || '').toLowerCase();
        const logoText = (document.querySelector('.logo-text')?.textContent || '').toLowerCase();
        const fullText = titleText + ' ' + logoText;

        if (fullText.includes('deep learning') || fullText.includes('dl')) {
            return {
                id: 'DL',
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
                borderColor: '#dae0dc'
            };
        } else if (fullText.includes('advanced machine learning') || fullText.includes('aml')) {
            return {
                id: 'AML',
                title: 'Advanced Machine Learning',
                code: 'NST-CS-AML502',
                midSemLimitDisplay: '12',
                midSemLabel: 'Mid-Sem (L1 - L12)',
                themeColor: '#162238',
                accentColor: '#365584',
                accentLight: '#ecf2fa',
                bgColor: '#f8fafc',
                textDark: '#162238',
                textMuted: '#647080',
                borderColor: '#dae2ec'
            };
        } else if (fullText.includes('network') || fullText.includes('cn')) {
            return {
                id: 'CN',
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
                borderColor: '#d7e6e9'
            };
        } else if (fullText.includes('architecture') || fullText.includes('mca')) {
            return {
                id: 'MCA',
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
                borderColor: '#e6dcd6'
            };
        }

        // Generic fallback
        return {
            id: 'Course',
            title: document.querySelector('.logo-text')?.textContent || 'Course Notes',
            code: 'NST-5TH-SEM',
            themeColor: '#1c1c1c',
            accentColor: '#4a5568',
            accentLight: '#edf2f7',
            bgColor: '#ffffff',
            textDark: '#1a202c',
            textMuted: '#718096',
            borderColor: '#e2e8f0'
        };
    }

    // Scan all lecture cards dynamically from the current DOM
    function scanLectures() {
        const cards = Array.from(document.querySelectorAll('.lecture-card'));
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

    // Modal Manager
    let modalOverlay = null;

    function buildModalDOM() {
        if (modalOverlay) return;

        // Ensure stylesheet is linked
        if (!document.querySelector('link[href*="handbook-modal.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '../css/handbook-modal.css';
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
                        <button type="button" class="handbook-preset-btn" id="presetMid1Btn">Mid-Sem (L1 - L7)</button>
                        <button type="button" class="handbook-preset-btn" id="presetMid2Btn">Latter Half (L8+)</button>
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
                            <span class="handbook-summary-val" id="summaryRangeVal">Lecture 01 to Lecture 14</span>
                        </div>
                        <div class="handbook-summary-item">
                            <span class="handbook-summary-label">Short Notes Units:</span>
                            <span class="handbook-summary-val" id="summaryUnitsVal">14 Cheatsheet Pages</span>
                        </div>
                        <div class="handbook-summary-item">
                            <span class="handbook-summary-label">Compiled Document:</span>
                            <span class="handbook-summary-val" id="summaryPagesVal">15 Pages (Cover & Table of Contents + Notes)</span>
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
            const subject = getSubjectDetails();
            const lectures = scanLectures();

            startSel.selectedIndex = 0;
            let targetIdx = -1;
            lectures.forEach((lec, idx) => {
                const numClean = lec.displayNum.replace(/[^0-9]/g, '');
                const targetClean = (subject.midSemLimitDisplay || '').replace(/[^0-9]/g, '');
                if (numClean === targetClean || lec.displayNum.toLowerCase() === (subject.midSemLimitDisplay || '').toLowerCase()) {
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
            const subject = getSubjectDetails();
            const lectures = scanLectures();

            let targetIdx = -1;
            lectures.forEach((lec, idx) => {
                const numClean = lec.displayNum.replace(/[^0-9]/g, '');
                const targetClean = (subject.midSemLimitDisplay || '').replace(/[^0-9]/g, '');
                if (numClean === targetClean || lec.displayNum.toLowerCase() === (subject.midSemLimitDisplay || '').toLowerCase()) {
                    targetIdx = idx;
                }
            });

            if (targetIdx !== -1 && targetIdx < lectures.length - 1) {
                startSel.selectedIndex = targetIdx + 1;
                endSel.selectedIndex = endSel.options.length - 1;
            } else {
                startSel.selectedIndex = 0;
                endSel.selectedIndex = Math.max(0, Math.floor((lectures.length - 1) / 2));
            }
            onRangeChanged();
        });

        document.getElementById('handbookCompileBtn').addEventListener('click', compileCustomHandbook);
    }

    function openModal() {
        buildModalDOM();
        const lectures = scanLectures();
        if (!lectures.length) {
            alert('No lecture cards found on this page.');
            return;
        }

        const startSel = document.getElementById('handbookStartSelect');
        const endSel = document.getElementById('handbookEndSelect');

        startSel.innerHTML = '';
        endSel.innerHTML = '';

        lectures.forEach((lec, idx) => {
            const optStart = new Option(`Lecture ${lec.displayNum}: ${lec.title}`, String(idx));
            const optEnd = new Option(`Lecture ${lec.displayNum}: ${lec.title}`, String(idx));
            startSel.add(optStart);
            endSel.add(optEnd);
        });

        startSel.selectedIndex = 0;
        endSel.selectedIndex = lectures.length - 1;

        // Reset progress UI
        const progWrap = document.getElementById('handbookProgressWrap');
        progWrap.classList.remove('active');
        document.getElementById('handbookCompileBtn').disabled = false;

        const subject = getSubjectDetails();
        const midBtn = document.getElementById('presetMid1Btn');
        const postMidBtn = document.getElementById('presetMid2Btn');

        if (midBtn) {
            midBtn.textContent = subject.midSemLabel || 'Mid-Sem Syllabus';
        }

        let targetEndIdx = -1;
        lectures.forEach((lec, idx) => {
            const numClean = lec.displayNum.replace(/[^0-9]/g, '');
            const targetClean = (subject.midSemLimitDisplay || '').replace(/[^0-9]/g, '');
            if (numClean === targetClean || lec.displayNum.toLowerCase() === (subject.midSemLimitDisplay || '').toLowerCase()) {
                targetEndIdx = idx;
            }
        });
        if (targetEndIdx === -1) targetEndIdx = lectures.length - 1;

        if (postMidBtn) {
            if (targetEndIdx < lectures.length - 1) {
                const nextLec = lectures[targetEndIdx + 1];
                postMidBtn.textContent = `Post Mid-Sem (L${nextLec.displayNum}+)`;
                postMidBtn.style.display = 'inline-block';
            } else {
                const halfIdx = Math.max(0, Math.floor((lectures.length - 1) / 2));
                postMidBtn.textContent = `First Half (L1 - L${lectures[halfIdx].displayNum})`;
                postMidBtn.style.display = 'inline-block';
            }
        }

        const directLink = document.getElementById('handbookDirectFullLink');
        if (directLink) {
            const defaultPdf = `${subject.id === 'DL' ? 'DL' : subject.id}_Short_Notes_Handbook.pdf`;
            directLink.href = defaultPdf;
            directLink.download = defaultPdf;
        }

        onRangeChanged();
        modalOverlay.classList.add('active');
    }

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    }

    function onRangeChanged() {
        const startSel = document.getElementById('handbookStartSelect');
        const endSel = document.getElementById('handbookEndSelect');
        const lectures = scanLectures();

        let startIdx = parseInt(startSel.value, 10);
        let endIdx = parseInt(endSel.value, 10);

        if (startIdx > endIdx) {
            // Keep them valid
            endIdx = startIdx;
            endSel.value = String(endIdx);
        }

        const selectedCount = endIdx - startIdx + 1;
        const startLec = lectures[startIdx];
        const endLec = lectures[endIdx];

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
            // Pill card background
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
        // Dynamically clamp row height so few lectures don't look stretched and many fit comfortably
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
        // Attempt direct fetch
        try {
            const resp = await fetch(url);
            if (resp.ok) {
                const buffer = await resp.arrayBuffer();
                return { bytes: new Uint8Array(buffer), isPng: !url.toLowerCase().endsWith('.jpg') };
            }
        } catch (e) {
            // Fetch failed (likely file:/// CORS restriction); fall back to Image + Canvas
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

            const lectures = scanLectures();
            const startIdx = parseInt(document.getElementById('handbookStartSelect').value, 10);
            const endIdx = parseInt(document.getElementById('handbookEndSelect').value, 10);
            const selectedLectures = lectures.slice(startIdx, endIdx + 1);

            if (!selectedLectures.length) {
                throw new Error('No lectures selected.');
            }

            const subject = getSubjectDetails();
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

                const imgData = await fetchImageBytes(lec.imgUrl);
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

    // Expose globally so buttons can trigger openHandbookModal()
    window.openHandbookModal = openModal;

    // Attach automatically to any elements with data-action="custom-handbook" or class "trigger-handbook-modal"
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-action="custom-handbook"], .trigger-handbook-modal').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        });
    });
})();
