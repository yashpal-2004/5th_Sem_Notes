/**
 * Interactive Timetable Engine
 * Section A - Semester V Course Hub
 * Handles live status calculation, dual mode (Day View & Weekly Matrix),
 * and track toggle (Personalized: Entrepreneurship Minor & Lab 2 vs Full Cohort View).
 */

(function () {
    'use strict';

    const TIMETABLE_DATA = {
        slots: [
            { id: 's1', label: '08:40 - 10:00', start: '08:40', end: '10:00', startM: 8 * 60 + 40, endM: 10 * 60 },
            { id: 's2', label: '10:10 - 11:10', start: '10:10', end: '11:10', startM: 10 * 60 + 10, endM: 11 * 60 + 10 },
            { id: 's3', label: '11:20 - 12:20', start: '11:20', end: '12:20', startM: 11 * 60 + 20, endM: 12 * 60 + 20 },
            { id: 'lunch', label: '12:30 - 01:30', start: '12:30', end: '13:30', startM: 12 * 60 + 30, endM: 13 * 60 + 30, isBreak: true },
            { id: 's4', label: '01:30 - 02:50', start: '13:30', end: '14:50', startM: 13 * 60 + 30, endM: 14 * 60 + 50 },
            { id: 's5', label: '02:55 - 04:15', start: '14:55', end: '16:15', startM: 14 * 60 + 55, endM: 16 * 60 + 15 },
            { id: 's6', label: '04:20 - 05:30', start: '16:20', end: '17:30', startM: 16 * 60 + 20, endM: 17 * 60 + 30 },
            { id: 'snacks', label: '05:30 - 06:00', start: '17:30', end: '18:00', startM: 17 * 60 + 30, endM: 18 * 60, isBreak: true }
        ],
        days: [
            {
                key: 'mon',
                name: 'Monday',
                dayNum: 1,
                schedule: [
                    {
                        slotId: 's1',
                        subject: 'Advanced Machine Learning',
                        code: 'aml',
                        type: 'Lecture',
                        room: 'Room A409',
                        link: 'AML/index.html'
                    },
                    {
                        slotId: 's2',
                        minor: { subject: 'Entrepreneurship - 1 (SBG)', code: 'minor', type: 'Minor Track', room: 'Room C104' },
                        elective: { subject: 'App Dev / Embedded Systems', code: 'elective', type: 'Lecture', room: 'App Dev: A405 / Embedded: A403' }
                    },
                    {
                        slotId: 's3',
                        minor: { subject: 'Entrepreneurship - 2 (CGE)', code: 'minor', type: 'Minor Track', room: 'Room A410' },
                        elective: { subject: 'Game Theory / Quantum Computing', code: 'elective', type: 'Lecture', room: 'Game Theory: A403 / Quantum: A405' }
                    },
                    {
                        slotId: 'lunch',
                        subject: 'Lunch Break',
                        code: 'break',
                        type: 'Break',
                        room: 'Dining Hall'
                    },
                    {
                        slotId: 's4',
                        subject: 'Deep Learning',
                        code: 'dl',
                        type: 'Lecture',
                        room: 'Room A409',
                        link: 'DL_Sem5/index.html'
                    },
                    {
                        slotId: 's5',
                        subject: 'Modern Computer Architecture',
                        code: 'mca',
                        type: 'Lab',
                        room: 'Lab A409',
                        link: 'MCA/index.html'
                    },
                    {
                        slotId: 's6',
                        subject: 'Computer Networks',
                        code: 'cn',
                        type: 'Lecture',
                        room: 'Room A409',
                        link: 'CN/index.html'
                    },
                    {
                        slotId: 'snacks',
                        subject: 'Evening Snacks Break',
                        code: 'break',
                        type: 'Break',
                        room: 'Cafeteria'
                    }
                ]
            },
            {
                key: 'tue',
                name: 'Tuesday',
                dayNum: 2,
                schedule: [
                    {
                        slotId: 's1',
                        subject: 'Computer Networks',
                        code: 'cn',
                        type: 'Lab',
                        room: 'Lab A409',
                        link: 'CN/index.html'
                    },
                    {
                        slotId: 's2',
                        minor: { subject: 'Entrepreneurship - 1 (SBG)', code: 'minor', type: 'Minor Track', room: 'Room C104' },
                        elective: { subject: 'App Dev / Embedded Systems', code: 'elective', type: 'Lab', room: 'App Dev: A405 / Embedded: A403' }
                    },
                    {
                        slotId: 's3',
                        minor: { subject: 'Entrepreneurship - 2 (CGE)', code: 'minor', type: 'Minor Track', room: 'Room A410' },
                        elective: { subject: 'Game Theory / Quantum Computing', code: 'elective', type: 'Lab', room: 'Game Theory: A403 / Quantum: A405' }
                    },
                    {
                        slotId: 'lunch',
                        subject: 'Lunch Break',
                        code: 'break',
                        type: 'Break',
                        room: 'Dining Hall'
                    },
                    {
                        slotId: 's4',
                        minor: { subject: 'Deep Learning (Lab 2)', code: 'dl', type: 'Lab', room: 'Lab 2: Room A405', link: 'DL_Sem5/index.html' },
                        elective: { subject: 'Deep Learning Lab', code: 'dl', type: 'Lab', room: 'Lab 1: A403 / Lab 2: A405', link: 'DL_Sem5/index.html' }
                    },
                    {
                        slotId: 's5',
                        minor: { subject: 'Advanced Machine Learning (Lab 2)', code: 'aml', type: 'Lab', room: 'Lab 2: Room A405', link: 'AML/index.html' },
                        elective: { subject: 'Advanced Machine Learning Lab', code: 'aml', type: 'Lab', room: 'Lab 1: A403 / Lab 2: A405', link: 'AML/index.html' }
                    },
                    {
                        slotId: 's6',
                        subject: 'Modern Computer Architecture',
                        code: 'mca',
                        type: 'Lecture',
                        room: 'Room A409',
                        link: 'MCA/index.html'
                    },
                    {
                        slotId: 'snacks',
                        subject: 'Evening Snacks Break',
                        code: 'break',
                        type: 'Break',
                        room: 'Cafeteria'
                    }
                ]
            },
            {
                key: 'wed',
                name: 'Wednesday',
                dayNum: 3,
                schedule: [
                    {
                        slotId: 's1',
                        subject: 'Advanced Machine Learning',
                        code: 'aml',
                        type: 'Lecture',
                        room: 'Room A409',
                        link: 'AML/index.html'
                    },
                    {
                        slotId: 's2',
                        minor: { subject: 'Entrepreneurship - 1 (SBG)', code: 'minor', type: 'Minor Track', room: 'Room C104' },
                        elective: { subject: 'App Dev / Embedded Systems', code: 'elective', type: 'Lecture', room: 'App Dev: A405 / Embedded: A403' }
                    },
                    {
                        slotId: 's3',
                        minor: { subject: 'Entrepreneurship - 2 (CGE)', code: 'minor', type: 'Minor Track', room: 'Room A410' },
                        elective: { subject: 'Game Theory / Quantum Computing', code: 'elective', type: 'Lecture', room: 'Game Theory: A403 / Quantum: A405' }
                    },
                    {
                        slotId: 'lunch',
                        subject: 'Lunch Break',
                        code: 'break',
                        type: 'Break',
                        room: 'Dining Hall'
                    },
                    {
                        slotId: 's4',
                        subject: 'Deep Learning',
                        code: 'dl',
                        type: 'Lecture',
                        room: 'Room A409',
                        link: 'DL_Sem5/index.html'
                    },
                    {
                        slotId: 's5',
                        subject: 'Modern Computer Architecture',
                        code: 'mca',
                        type: 'Lab',
                        room: 'Lab A409',
                        link: 'MCA/index.html'
                    },
                    {
                        slotId: 's6',
                        subject: 'Computer Networks',
                        code: 'cn',
                        type: 'Lecture',
                        room: 'Room A409',
                        link: 'CN/index.html'
                    },
                    {
                        slotId: 'snacks',
                        subject: 'Evening Snacks Break',
                        code: 'break',
                        type: 'Break',
                        room: 'Cafeteria'
                    }
                ]
            },
            {
                key: 'thu',
                name: 'Thursday',
                dayNum: 4,
                schedule: [
                    {
                        slotId: 's1',
                        minor: { subject: 'Advanced Machine Learning (Lab 2)', code: 'aml', type: 'Lab', room: 'Lab 2: Room A502', link: 'AML/index.html' },
                        elective: { subject: 'Advanced Machine Learning Lab', code: 'aml', type: 'Lab', room: 'Lab 1: A501 / Lab 2: A502', link: 'AML/index.html' }
                    },
                    {
                        slotId: 's2',
                        minor: { subject: 'Entrepreneurship - 1 (SBG)', code: 'minor', type: 'Minor Track', room: 'Room C104' },
                        elective: { subject: 'App Dev / Embedded Systems', code: 'elective', type: 'Lab', room: 'App Dev: A405 / Embedded: A403' }
                    },
                    {
                        slotId: 's3',
                        minor: { subject: 'Entrepreneurship - 2 (CGE)', code: 'minor', type: 'Minor Track', room: 'Room A410' },
                        elective: { subject: 'Game Theory / Quantum Computing', code: 'elective', type: 'Lab', room: 'Game Theory: A403 / Quantum: A405' }
                    },
                    {
                        slotId: 'lunch',
                        subject: 'Lunch Break',
                        code: 'break',
                        type: 'Break',
                        room: 'Dining Hall'
                    },
                    {
                        slotId: 's4',
                        subject: 'Computer Networks',
                        code: 'cn',
                        type: 'Lab',
                        room: 'Lab A409',
                        link: 'CN/index.html'
                    },
                    {
                        slotId: 's5',
                        minor: { subject: 'Deep Learning (Lab 2)', code: 'dl', type: 'Lab', room: 'Lab 2: Room A405', link: 'DL_Sem5/index.html' },
                        elective: { subject: 'Deep Learning Lab', code: 'dl', type: 'Lab', room: 'Lab 1: A403 / Lab 2: A405', link: 'DL_Sem5/index.html' }
                    },
                    {
                        slotId: 's6',
                        subject: 'Modern Computer Architecture',
                        code: 'mca',
                        type: 'Lecture',
                        room: 'Room A409',
                        link: 'MCA/index.html'
                    },
                    {
                        slotId: 'snacks',
                        subject: 'Evening Snacks Break',
                        code: 'break',
                        type: 'Break',
                        room: 'Cafeteria'
                    }
                ]
            },
            {
                key: 'fri',
                name: 'Friday',
                dayNum: 5,
                schedule: [
                    {
                        slotId: 'lunch',
                        subject: 'Lunch Break',
                        code: 'break',
                        type: 'Break',
                        room: 'Dining Hall'
                    },
                    {
                        slotId: 's4',
                        customTimeLabel: '02:00 - 04:30',
                        subject: 'Contests, Internals, Quizzes & Mock Interviews',
                        code: 'contest',
                        type: 'Assessment',
                        room: 'Campus Lab / Testing Hall',
                        spanSlots: ['s4', 's5']
                    },
                    {
                        slotId: 'snacks',
                        subject: 'Evening Snacks Break',
                        code: 'break',
                        type: 'Break',
                        room: 'Cafeteria'
                    }
                ]
            }
        ]
    };

    let activeView = 'day'; // 'day' | 'matrix'
    let selectedDayKey = 'mon';
    let isMinorTrack = true; // Entrepreneurship & Lab 2 by default

    // Detect today's day of week
    function getTodayKey() {
        const dayIdx = new Date().getDay(); // 0 is Sun, 1 is Mon, 5 is Fri
        if (dayIdx >= 1 && dayIdx <= 5) {
            return TIMETABLE_DATA.days[dayIdx - 1].key;
        }
        return 'mon'; // Default to Monday if on weekend
    }

    // Resolve an item depending on user track
    function resolvePeriod(item) {
        if (item.minor && item.elective) {
            return isMinorTrack ? item.minor : item.elective;
        }
        return item;
    }

    // Live state calculator
    function updateLiveBanner() {
        const banner = document.getElementById('timetableLiveBanner');
        if (!banner) return;

        const now = new Date();
        const currentDay = now.getDay();
        const curM = now.getHours() * 60 + now.getMinutes();

        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const timeBadge = banner.querySelector('.live-status-time');
        if (timeBadge) timeBadge.textContent = timeStr;

        const statusEl = banner.querySelector('.live-status-text');
        if (!statusEl) return;

        if (currentDay === 0 || currentDay === 6) {
            statusEl.innerHTML = `<strong>Weekend Break:</strong> Next session begins Monday at 08:40 AM (Advanced Machine Learning).`;
            return;
        }

        const todayObj = TIMETABLE_DATA.days.find(d => d.dayNum === currentDay);
        if (!todayObj) return;

        let activePeriod = null;
        let nextPeriod = null;

        for (const slot of TIMETABLE_DATA.slots) {
            const periodRaw = todayObj.schedule.find(p => p.slotId === slot.id);
            if (!periodRaw) continue;

            const period = resolvePeriod(periodRaw);

            if (curM >= slot.startM && curM < slot.endM) {
                activePeriod = { ...period, slot };
                break;
            } else if (curM < slot.startM && !nextPeriod) {
                nextPeriod = { ...period, slot };
            }
        }

        if (activePeriod) {
            statusEl.innerHTML = `<strong>Active Now (${activePeriod.slot.label}):</strong> ${activePeriod.subject} &bull; ${activePeriod.room}`;
        } else if (nextPeriod) {
            statusEl.innerHTML = `<strong>Upcoming Next (${nextPeriod.slot.label}):</strong> ${nextPeriod.subject} in ${nextPeriod.room}`;
        } else if (curM < 8 * 60 + 40) {
            statusEl.innerHTML = `<strong>First Session Today:</strong> Begins at 08:40 AM.`;
        } else {
            statusEl.innerHTML = `<strong>Classes Completed:</strong> Sessions wrapped for today. Rest up and review notes!`;
        }
    }

    // Render day view cards
    function renderDayView() {
        const container = document.getElementById('timetableCardsView');
        if (!container) return;

        const dayObj = TIMETABLE_DATA.days.find(d => d.key === selectedDayKey);
        if (!dayObj) return;

        const now = new Date();
        const currentDay = now.getDay();
        const curM = now.getHours() * 60 + now.getMinutes();
        const isActuallyToday = dayObj.dayNum === currentDay;

        container.innerHTML = '';

        dayObj.schedule.forEach(itemRaw => {
            const item = resolvePeriod(itemRaw);
            const slot = TIMETABLE_DATA.slots.find(s => s.id === itemRaw.slotId) || { label: itemRaw.customTimeLabel || 'TBD', startM: 0, endM: 0 };

            const isNow = isActuallyToday && (curM >= slot.startM && curM < slot.endM);

            const card = document.createElement('div');
            card.className = `period-card ${item.code} ${isNow ? 'is-active-now' : ''}`;

            const timeLabel = itemRaw.customTimeLabel || slot.label;
            const durationMins = slot.endM - slot.startM;
            const durationText = durationMins > 0 ? `${durationMins} Mins` : '';

            let notesActionHtml = '';
            if (item.link) {
                notesActionHtml = `<a href="${item.link}" class="period-notes-btn" title="View ${item.subject} notes & handbook">Open Notes &rarr;</a>`;
            }

            card.innerHTML = `
                <div class="period-card-stripe"></div>
                <div class="period-header">
                    <span class="period-time">${timeLabel}</span>
                    <div class="period-badges">
                        ${isNow ? '<span class="today-indicator-pill" style="background:#059669;">LIVE NOW</span>' : ''}
                        <span class="period-type-badge">${item.type}</span>
                    </div>
                </div>
                <h3 class="period-subject-title">${item.subject}</h3>
                <div class="period-location-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${item.room}</span>
                </div>
                <div class="period-footer">
                    <span class="period-duration">${durationText}</span>
                    ${notesActionHtml}
                </div>
            `;

            container.appendChild(card);
        });
    }

    // Render full weekly matrix table
    function renderMatrixView() {
        const container = document.getElementById('timetableMatrixView');
        if (!container) return;

        const now = new Date();
        const currentDay = now.getDay();

        let tableHtml = `
            <table class="timetable-table">
                <thead>
                    <tr>
                        <th class="timetable-day-header-cell">Day</th>
        `;

        TIMETABLE_DATA.slots.forEach(slot => {
            tableHtml += `<th class="time-col-header">${slot.label}</th>`;
        });

        tableHtml += `
                    </tr>
                </thead>
                <tbody>
        `;

        TIMETABLE_DATA.days.forEach(day => {
            const isToday = day.dayNum === currentDay;
            tableHtml += `<tr class="${isToday ? 'today-row' : ''}">`;
            tableHtml += `<td class="timetable-day-header-cell">${day.name.substring(0, 3)}${isToday ? '<br><span class="today-indicator-pill">TODAY</span>' : ''}</td>`;

            TIMETABLE_DATA.slots.forEach(slot => {
                const itemRaw = day.schedule.find(s => s.slotId === slot.id);

                if (!itemRaw) {
                    if (day.key === 'fri' && slot.id === 's5') {
                        tableHtml += `<td><span style="opacity:0.4;font-size:0.75rem;">(Contest continues)</span></td>`;
                    } else if (day.key === 'fri' && slot.id === 's6') {
                        tableHtml += `<td><span style="opacity:0.3;font-size:0.75rem;">&mdash;</span></td>`;
                    } else {
                        tableHtml += `<td><span style="opacity:0.3;font-size:0.75rem;">&mdash;</span></td>`;
                    }
                    return;
                }

                const item = resolvePeriod(itemRaw);
                tableHtml += `
                    <td>
                        <div class="matrix-cell-block ${item.code}">
                            <span class="matrix-type-tag">${item.type}</span>
                            <span class="matrix-subj-title">${item.subject}</span>
                            <span class="matrix-room-code">${item.room}</span>
                        </div>
                    </td>
                `;
            });

            tableHtml += `</tr>`;
        });

        tableHtml += `
                </tbody>
            </table>
        `;

        container.innerHTML = tableHtml;
    }

    // Set active tab
    function setDayTab(dayKey) {
        selectedDayKey = dayKey;
        document.querySelectorAll('.timetable-day-tab').forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-day') === dayKey);
        });
        renderDayView();
    }

    // Set view mode (Day vs Matrix)
    function setViewMode(mode) {
        activeView = mode;
        const dayControls = document.getElementById('timetableDayTabs');
        const cardsView = document.getElementById('timetableCardsView');
        const matrixView = document.getElementById('timetableMatrixView');

        document.getElementById('toggleDayBtn').classList.toggle('active', mode === 'day');
        document.getElementById('toggleMatrixBtn').classList.toggle('active', mode === 'matrix');

        if (mode === 'day') {
            if (dayControls) dayControls.style.display = 'flex';
            if (cardsView) cardsView.style.display = 'grid';
            if (matrixView) matrixView.classList.remove('active');
            renderDayView();
        } else {
            if (dayControls) dayControls.style.display = 'none';
            if (cardsView) cardsView.style.display = 'none';
            if (matrixView) matrixView.classList.add('active');
            renderMatrixView();
        }
    }

    // Render interactive Hero Live Class Card
    function updateHeroLiveWidget() {
        const container = document.getElementById('heroLiveContent');
        if (!container) return;

        const now = new Date();
        const currentDay = now.getDay(); // 0 is Sun, 1 is Mon, 5 is Fri, 6 is Sat
        const curM = now.getHours() * 60 + now.getMinutes();
        const timeFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Weekend check
        if (currentDay === 0 || currentDay === 6) {
            const monday = TIMETABLE_DATA.days[0];
            let scheduleHtml = '';
            monday.schedule.forEach(itemRaw => {
                const item = resolvePeriod(itemRaw);
                const slot = TIMETABLE_DATA.slots.find(s => s.id === itemRaw.slotId) || { label: itemRaw.customTimeLabel || '', start: '' };
                scheduleHtml += `
                    <div class="hero-today-item">
                        <div class="hero-today-left">
                            <span class="hero-today-time">${slot.start || slot.label}</span>
                            <span class="hero-today-title">${item.subject}</span>
                        </div>
                        <span class="hero-today-room">${item.room}</span>
                    </div>
                `;
            });

            container.innerHTML = `
                <div class="hero-live-featured">
                    <div class="hero-live-badge-row">
                        <span class="hero-live-status-pill done">Weekend</span>
                        <span class="hero-live-clock">${timeFormatted}</span>
                    </div>
                    <div>
                        <h4 class="hero-live-subj-title">Weekend Break</h4>
                        <div class="hero-live-meta" style="margin-top: 4px;">
                            <span>Next class: Monday 08:40 AM &bull; Advanced Machine Learning</span>
                        </div>
                    </div>
                    <a href="AML/index.html" class="hero-live-notes-btn">Prepare AML Notes &rarr;</a>
                </div>

                <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                    <span>Upcoming: Monday's Lineup</span>
                    <span style="color:#059669; font-weight: 700; font-size: 0.68rem; background: #eaf2ed; padding: 2px 6px; border-radius: 4px;">Lab 2 &bull; Entr.</span>
                </div>
                <div class="hero-today-list">
                    ${scheduleHtml}
                </div>

                <div class="hero-live-footer-row">
                    <span class="hero-live-clock">NST &bull; Sec A Sem V</span>
                    <a href="#timetable" class="hero-view-all-link">Full Timetable &darr;</a>
                </div>
            `;
            return;
        }

        const todayObj = TIMETABLE_DATA.days.find(d => d.dayNum === currentDay);
        if (!todayObj) return;

        let activePeriod = null;
        let nextPeriod = null;

        for (const slot of TIMETABLE_DATA.slots) {
            const periodRaw = todayObj.schedule.find(p => p.slotId === slot.id);
            if (!periodRaw) continue;

            const period = resolvePeriod(periodRaw);

            if (curM >= slot.startM && curM < slot.endM) {
                activePeriod = { ...period, slot };
                break;
            } else if (curM < slot.startM && !nextPeriod) {
                nextPeriod = { ...period, slot };
            }
        }

        // Generate Featured Card HTML
        let featuredHtml = '';
        if (activePeriod) {
            const isBreak = activePeriod.slot.isBreak;
            const totalM = activePeriod.slot.endM - activePeriod.slot.startM;
            const elapsedM = Math.max(0, curM - activePeriod.slot.startM);
            const pct = Math.min(100, Math.max(0, Math.round((elapsedM / totalM) * 100)));
            const remainingM = totalM - elapsedM;

            featuredHtml = `
                <div class="hero-live-featured">
                    <div class="hero-live-badge-row">
                        <span class="hero-live-status-pill ${isBreak ? 'done' : 'active'}">
                            ${!isBreak ? '<span class="live-pulse-dot-sm"></span>' : ''}
                            ${isBreak ? activePeriod.subject.toUpperCase() : 'LIVE NOW'}
                        </span>
                        <span class="hero-live-clock">${timeFormatted}</span>
                    </div>
                    <div>
                        <h4 class="hero-live-subj-title">${activePeriod.subject}</h4>
                        <div class="hero-live-meta" style="margin-top: 4px;">
                            <span class="hero-live-venue-chip">${activePeriod.room}</span>
                            <span>&bull;</span>
                            <span>${activePeriod.slot.label}</span>
                        </div>
                    </div>
                    <div class="hero-live-progress-bar-bg" title="${pct}% elapsed">
                        <div class="hero-live-progress-bar-fill" style="width: ${pct}%;"></div>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:0.72rem; color:var(--text-muted); margin-top:-2px;">
                        <span>${elapsedM}m elapsed (${pct}%)</span>
                        <span>${remainingM}m remaining</span>
                    </div>
                    ${activePeriod.link ? `<a href="${activePeriod.link}" class="hero-live-notes-btn">Open ${activePeriod.code.toUpperCase()} Notes &amp; Handbook &rarr;</a>` : ''}
                </div>
            `;
        } else if (nextPeriod) {
            const minsToStart = nextPeriod.slot.startM - curM;
            const timeDesc = minsToStart <= 60 ? `in ${minsToStart} mins` : `at ${nextPeriod.slot.start}`;

            featuredHtml = `
                <div class="hero-live-featured">
                    <div class="hero-live-badge-row">
                        <span class="hero-live-status-pill upcoming">
                            UPCOMING NEXT
                        </span>
                        <span class="hero-live-clock">${timeFormatted}</span>
                    </div>
                    <div>
                        <h4 class="hero-live-subj-title">${nextPeriod.subject}</h4>
                        <div class="hero-live-meta" style="margin-top: 4px;">
                            <span class="hero-live-venue-chip">${nextPeriod.room}</span>
                            <span>&bull;</span>
                            <span>Starts ${timeDesc} (${nextPeriod.slot.label})</span>
                        </div>
                    </div>
                    ${nextPeriod.link ? `<a href="${nextPeriod.link}" class="hero-live-notes-btn">Preview ${nextPeriod.code.toUpperCase()} Notes &rarr;</a>` : ''}
                </div>
            `;
        } else {
            // Day ended
            featuredHtml = `
                <div class="hero-live-featured">
                    <div class="hero-live-badge-row">
                        <span class="hero-live-status-pill done">CLASSES CONCLUDED</span>
                        <span class="hero-live-clock">${timeFormatted}</span>
                    </div>
                    <div>
                        <h4 class="hero-live-subj-title">All Classes Wrapped</h4>
                        <div class="hero-live-meta" style="margin-top: 4px;">
                            <span>Today's scheduled sessions have finished. Great job!</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // Today's list
        let todayListHtml = '';
        todayObj.schedule.forEach(itemRaw => {
            const item = resolvePeriod(itemRaw);
            const slot = TIMETABLE_DATA.slots.find(s => s.id === itemRaw.slotId) || { label: itemRaw.customTimeLabel || '', start: '', startM: 0, endM: 0 };

            const isCurrent = curM >= slot.startM && curM < slot.endM;
            const isPast = curM >= slot.endM;

            let rowClass = 'hero-today-item';
            if (isCurrent) rowClass += ' is-current';
            if (isPast) rowClass += ' is-past';

            todayListHtml += `
                <div class="${rowClass}" title="${item.subject} (${slot.label})">
                    <div class="hero-today-left">
                        <span class="hero-today-time">${slot.start || slot.label}</span>
                        <span class="hero-today-title">${item.subject}</span>
                    </div>
                    <span class="hero-today-room">${item.room.replace('Room ', '').replace('Lab ', 'L-')}</span>
                </div>
            `;
        });

        const dayDisplay = todayObj.name;

        container.innerHTML = `
            ${featuredHtml}

            <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
                <span>Today's Schedule (${dayDisplay})</span>
                <span style="color:#059669; font-weight: 700; font-size: 0.68rem; background: #eaf2ed; padding: 2px 6px; border-radius: 4px;">Lab 2 &bull; Entr.</span>
            </div>
            <div class="hero-today-list">
                ${todayListHtml}
            </div>

            <div class="hero-live-footer-row">
                <span class="hero-live-clock">Auto-refreshing &bull; 30s</span>
                <a href="#timetable" class="hero-view-all-link">Full Timetable &darr;</a>
            </div>
        `;
    }

    // Initialize DOM events and initial render
    document.addEventListener('DOMContentLoaded', () => {
        selectedDayKey = getTodayKey();

        // Bind Day Tabs
        document.querySelectorAll('.timetable-day-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                setDayTab(tab.getAttribute('data-day'));
            });
        });

        // Set "TODAY" pill on active tab
        const todayKey = getTodayKey();
        const currentTab = document.querySelector(`.timetable-day-tab[data-day="${todayKey}"]`);
        if (currentTab) {
            const todayBadge = document.createElement('span');
            todayBadge.className = 'today-indicator-pill';
            todayBadge.textContent = 'Today';
            currentTab.appendChild(todayBadge);
        }

        setDayTab(selectedDayKey);

        // Bind View Mode Switchers
        const dayBtn = document.getElementById('toggleDayBtn');
        const matrixBtn = document.getElementById('toggleMatrixBtn');
        if (dayBtn) dayBtn.addEventListener('click', () => setViewMode('day'));
        if (matrixBtn) matrixBtn.addEventListener('click', () => setViewMode('matrix'));

        // Bind Track Toggle
        const trackToggleBtn = document.getElementById('timetableTrackToggle');
        if (trackToggleBtn) {
            trackToggleBtn.addEventListener('click', () => {
                isMinorTrack = !isMinorTrack;
                trackToggleBtn.textContent = isMinorTrack ? 'Track: Entr. Minor (Lab 2)' : 'Track: Full Cohort View';
                if (activeView === 'day') {
                    renderDayView();
                } else {
                    renderMatrixView();
                }
                updateHeroLiveWidget();
            });
        }

        updateLiveBanner();
        updateHeroLiveWidget();

        setInterval(() => {
            updateLiveBanner();
            updateHeroLiveWidget();
        }, 30000); // Check every 30s
    });
})();

