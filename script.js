/* ==========================================
   HAPPY BIRTHDAY MERI JAAN — JAVASCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- SONG LIST DATA ---
    const songList = [
        "Ordinary",
        "Majboor (Zoha Waseem)",
        "paparazzi",
        "its not your fault",
        "entropy",
        "made in japan",
        "love again",
        "there's nothing holding me back",
        "bubblegum bitch",
        "senioriya",
        "7 rings",
        "baby one more time",
        "cake by the ocean",
        "love me like you do",
        "stereo hearts",
        "I wanna be your slave",
        "hips don't lie",
        "heat waves",
        "strangers once again",
        "stay",
        "young and beautiful",
        "kings and queens",
        "counting stars",
        "sunroof",
        "beggin",
        "babydoll",
        "galway girl",
        "die with a smile",
        "Saphire",
        "sunflower",
        "baby ko bass pasand hai",
        "shape of you",
        "perfect",
        "medusa",
        "the cult of dionises",
        "die without u",
        "puppet",
        "queen and poet",
        "crimson sky",
        "my head is spinning",
        "bad by michael jackson",
        "Rewrite the stars",
        "If I can't have you",
        "into you",
        "love you like a love song",
        "Unholy",
        "TiK ToK",
        "Bad romance",
        "Rude",
        "Shut up and dance with me",
        "I want it that way",
        "Kiss me more",
        "Loverboy",
        "Smooth operator",
        "careless whisper",
        "daylight",
        "golden hour",
        "ashes",
        "the red means I love you",
        "pizza pasta (Our gag)",
        "Partners in crime",
        "If I killed someone for you",
        "Dancing with your ghost",
        "All i want is you",
        "Night dancer",
        "Beautiful things",
        "To love someone",
        "The night we met",
        "Co2",
        "Snowman",
        "Sh-boom",
        "Glimpse of us",
        "Honeypie",
        "Tonight you belong to me",
        "Something stupid",
        "Good old fashioned loverboy",
        "Mystical Magical",
        "2 dumb kids",
        "love story",
        "sloppy seconds",
        "Sweet but a psycho",
        "Forbidden fruit",
        "Ghost",
        "How i'd kill",
        "seven",
        "carry you home",
        "A million dreams",
        "masochistic lover",
        "poppin skittles",
        "partner in crime by elio mei",
        "miss possessive",
        "dear god",
        "you're mine",
        "obsessed by mariah carey",
        "what if things get worse",
        "affection addiction",
        "falling for u",
        "Despair",
        "just my type",
        "Ordinary wedding"
    ];

    // --- AUDIO SYSTEM & BOUNCE SOUND ---
    const bgMusic = document.getElementById('bg-music');
    const audioToggle = document.getElementById('audio-toggle');
    const audioStatus = audioToggle.querySelector('.audio-status');
    let isMusicPlaying = false;

    // Web Audio API Sound Effect for Basketball Bounce
    function playBasketballBounceSound() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(160, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.15);

            gain.gain.setValueAtTime(0.5, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } catch (e) {
            console.log('AudioContext not allowed yet:', e);
        }
    }

    const bounceInterval = setInterval(playBasketballBounceSound, 600);

    bgMusic.volume = 0.35;

    function startBackgroundMusic() {
        bgMusic.play().then(() => {
            isMusicPlaying = true;
            audioStatus.textContent = "Music Playing";
            audioToggle.style.borderColor = "var(--accent-orange)";
        }).catch(err => {
            console.log("Autoplay blocked, waiting for user interaction:", err);
            isMusicPlaying = false;
            audioStatus.textContent = "Click to Play Music";
        });
    }

    audioToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            isMusicPlaying = false;
            audioStatus.textContent = "Music Paused";
            audioToggle.style.borderColor = "var(--card-border)";
        } else {
            bgMusic.play().then(() => {
                isMusicPlaying = true;
                audioStatus.textContent = "Music Playing";
                audioToggle.style.borderColor = "var(--accent-orange)";
            });
        }
    });

    // --- LOADING SCREEN DISMISSAL ---
    setTimeout(() => {
        clearInterval(bounceInterval);
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 600);

        startBackgroundMusic();
    }, 2400);

    const enableAudioOnInteraction = () => {
        if (!isMusicPlaying && bgMusic.paused) {
            bgMusic.play().then(() => {
                isMusicPlaying = true;
                audioStatus.textContent = "Music Playing";
            }).catch(() => {});
        }
        window.removeEventListener('click', enableAudioOnInteraction);
        window.removeEventListener('keydown', enableAudioOnInteraction);
    };
    window.addEventListener('click', enableAudioOnInteraction);
    window.addEventListener('keydown', enableAudioOnInteraction);


    // --- THEME TOGGLE ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    const savedTheme = localStorage.getItem('fatima_theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            themeIcon.textContent = '🌙';
            localStorage.setItem('fatima_theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            themeIcon.textContent = '☀️';
            localStorage.setItem('fatima_theme', 'dark');
        }
    });


    // --- ANNIVERSARY COUNTER (29 July 2025, 5:00 PM IST) ---
    const anniversaryDate = new Date('2025-07-29T17:00:00+05:30');

    const counterDays = document.getElementById('counter-days');
    const counterHours = document.getElementById('counter-hours');
    const counterMinutes = document.getElementById('counter-minutes');
    const counterSeconds = document.getElementById('counter-seconds');

    function updateCounter() {
        const now = new Date();
        const diff = now - anniversaryDate;

        if (diff < 0) {
            counterDays.textContent = "00";
            counterHours.textContent = "00";
            counterMinutes.textContent = "00";
            counterSeconds.textContent = "00";
            return;
        }

        const secondsTotal = Math.floor(diff / 1000);
        const days = Math.floor(secondsTotal / (3600 * 24));
        const hours = Math.floor((secondsTotal % (3600 * 24)) / 3600);
        const minutes = Math.floor((secondsTotal % 3600) / 60);
        const seconds = secondsTotal % 60;

        counterDays.textContent = String(days).padStart(2, '0');
        counterHours.textContent = String(hours).padStart(2, '0');
        counterMinutes.textContent = String(minutes).padStart(2, '0');
        counterSeconds.textContent = String(seconds).padStart(2, '0');
    }

    setInterval(updateCounter, 1000);
    updateCounter();


    // --- MOON PHASE & 3D ROTATING BIG SOLAR SYSTEM ---
    function initAstronomy() {
        // Moon Phase calculation
        const targetDate = new Date('2025-07-29T17:00:00+05:30');
        const refNewMoon = new Date('2000-01-06T18:14:00Z');
        const synodicMonth = 29.53058867;

        const daysSinceRef = (targetDate - refNewMoon) / (1000 * 60 * 60 * 24);
        const phase = (daysSinceRef % synodicMonth) / synodicMonth;

        const illumination = (1 - Math.cos(phase * 2 * Math.PI)) / 2;
        const percent = Math.round(illumination * 100);

        let phaseName = "";
        if (phase < 0.03 || phase > 0.97) phaseName = "New Moon";
        else if (phase < 0.22) phaseName = "Waxing Crescent";
        else if (phase < 0.28) phaseName = "First Quarter";
        else if (phase < 0.47) phaseName = "Waxing Gibbous";
        else if (phase < 0.53) phaseName = "Full Moon";
        else if (phase < 0.72) phaseName = "Waning Gibbous";
        else if (phase < 0.78) phaseName = "Third Quarter";
        else phaseName = "Waning Crescent";

        document.getElementById('moon-phase-name').textContent = `${phaseName} (${percent}% Illuminated)`;
        
        const illumEl = document.getElementById('moon-illumination');
        const angle = phase * 360;
        illumEl.style.transform = `rotate(${angle}deg) scale(${1 - illumination * 0.8})`;

        // 3D Rotating Big Solar System Generation
        const solarContainer = document.getElementById('solar-system');
        const planetsData = [
            { name: 'Mercury', distance: 45, size: 16, color: '#a1a1aa', angle: 120, label: '☿' },
            { name: 'Venus', distance: 68, size: 22, color: '#fde047', angle: 210, label: '♀' },
            { name: 'Earth', distance: 95, size: 26, color: '#38bdf8', angle: 45, label: '🌍' },
            { name: 'Mars', distance: 120, size: 20, color: '#f87171', angle: 300, label: '♂' },
            { name: 'Jupiter', distance: 155, size: 38, color: '#fb923c', angle: 180, label: '♃' },
            { name: 'Saturn', distance: 190, size: 34, color: '#facc15', angle: 90, label: '♄' }
        ];

        planetsData.forEach(p => {
            const orbit = document.createElement('div');
            orbit.className = 'orbit-2d';
            orbit.style.width = `${p.distance * 2}px`;
            orbit.style.height = `${p.distance * 2}px`;
            solarContainer.appendChild(orbit);

            const planet = document.createElement('div');
            planet.className = 'planet-2d';
            planet.style.width = `${p.size}px`;
            planet.style.height = `${p.size}px`;
            planet.style.backgroundColor = p.color;
            planet.textContent = p.label;
            planet.style.fontSize = `${p.size * 0.55}px`;
            
            const rad = (p.angle * Math.PI) / 180;
            const x = Math.cos(rad) * p.distance;
            const y = Math.sin(rad) * p.distance;
            planet.style.transform = `translate(${x - p.size/2}px, ${y - p.size/2}px)`;
            planet.title = `${p.name} (3D Position on July 29, 2025)`;

            solarContainer.appendChild(planet);
        });
    }

    initAstronomy();


    // --- PICTORIAL MEMORIES GENERATION ---
    const memoriesImages = [
        { file: 'bd15img1.jpg', name: 'The message that started Everything', text: 'This very image is what keeps me up at night. One message started something so beautiful' },
        { file: 'bd15img2.jpg', name: 'When we met (You look so cuteeee)', text: 'You look so cute flipping me off 😝' },
        { file: 'bd15img3.jpg', name: 'Kissing the Mango huh-', text: 'One of the first photos I got of you, and I cherish it every day' },
        { file: 'bd15img4.png', name: 'Watchu lookin over there gng...', text: 'but no genuinely when I saw you wearing my gifted jwellery I felt so damn good' },
        { file: 'bd15img5.png', name: 'Smash.', text: 'No further information gng, Smash. Smash Smash Smash. Every position every variation.' },
        { file: 'bd15img6.jpg', name: 'You being you', text: 'I miss these spontaneous messages gng, I miss you more' },
        { file: 'bd15img7.jpg', name: 'Marked Property indeed', text: 'I marked you both ways that visit meri jaan, youre mine, you aint leavin me anytime soon' },
        { file: 'bd15img8.png', name: 'Your short hair', text: 'Your hair deserves a seperate Birthday gift in my opinion because it attracts me in a completely different and unique way than your body' },
        { file: 'bd15img9.jpg', name: 'Proof of Marriage', text: 'No matter what youre doin darling, remember this certificate, itll remind you something wheather its something I know or not.' },
        { file: 'bd15img10.jpg', name: 'The Most Magical Moment', text: "Don't got a photo of our first kiss but this one will do too. Both moments, best of my life." }
    ];

    const scrapbookContainer = document.getElementById('scrapbook-container');

    memoriesImages.forEach((img, idx) => {
        const itemNumber = idx + 1;
        const isEven = itemNumber % 2 === 0;

        const itemDiv = document.createElement('div');
        itemDiv.className = `scrapbook-item ${isEven ? 'even' : 'odd'}`;

        itemDiv.innerHTML = `
            <div class="scrapbook-photo-frame">
                <div class="scrapbook-tape"></div>
                <img src="${img.file}" alt="Memory ${itemNumber}" class="scrapbook-img" loading="lazy">
            </div>
            <div class="scrapbook-writing">
                <h4>${img.name}</h4>
                <p>${img.text}</p>
            </div>
        `;

        scrapbookContainer.appendChild(itemDiv);
    });

    // --- LA MUSIQUE SONGS POPULATION ---
    const songsGrid = document.getElementById('songs-grid');
    const spotifyPlaylistUrl = "https://open.spotify.com/playlist/60Ov61rPPGNQMsbJuOyKyF?si=SAEY44ubQZ-tPz35c04qaw&utm_source=copy_link&pt=84449d0c548decc7355bfcd2448c754d";

    songList.forEach((song, idx) => {
        const songEl = document.createElement('a');
        songEl.href = spotifyPlaylistUrl;
        songEl.target = '_blank';
        songEl.className = 'song-item';
        songEl.innerHTML = `
            <span class="song-number">${String(idx + 1).padStart(2, '0')}</span>
            <span class="song-name">${song}</span>
            <span class="song-icon">▶</span>
        `;
        songsGrid.appendChild(songEl);
    });


    // --- LOAD LETTER & REVEAL TEXT FILES ---
    async function loadTextFiles() {
        try {
            const letterRes = await fetch('Letter.txt');
            if (letterRes.ok) {
                const letterText = await letterRes.text();
                document.getElementById('letter-content').textContent = letterText;
            }
        } catch (e) {
            console.log('Could not load Letter.txt via fetch, using fallback.');
        }

        try {
            const revealRes = await fetch('Reveal.txt');
            if (revealRes.ok) {
                const revealText = await revealRes.text();
                document.getElementById('reveal-content').textContent = revealText;
            }
        } catch (e) {
            console.log('Could not load Reveal.txt via fetch, using fallback.');
        }
    }
    loadTextFiles();


    // --- NAVIGATION & PROGRESSIVE UNLOCK STATE MACHINE ---
    const sections = {
        home: document.getElementById('section-home'),
        memories: document.getElementById('section-memories'),
        music: document.getElementById('section-music'),
        letter: document.getElementById('section-letter'),
        reveal: document.getElementById('section-reveal'),
        final: document.getElementById('section-final')
    };

    let completedSections = {
        memories: false,
        music: false,
        letter: false,
        reveal: false,
        final: false
    };

    let finalReached = false;

    function navigateTo(targetId) {
        Object.values(sections).forEach(sec => {
            if (sec) sec.classList.remove('active');
        });

        const targetSec = sections[targetId];
        if (targetSec) {
            targetSec.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const cdMusic = document.getElementById('cd-music')?.querySelector('.cd-disc');
        const cdReveal = document.getElementById('cd-reveal')?.querySelector('.cd-disc');
        if (targetId === 'music') {
            cdMusic?.classList.remove('paused');
        } else {
            cdMusic?.classList.add('paused');
        }

        if (targetId === 'reveal') {
            cdReveal?.classList.remove('paused');
        } else {
            cdReveal?.classList.add('paused');
        }
    }

    // When the user clicks the up-arrow button at the bottom of a section
    function completeSectionAndReturn(sectionName) {
        completedSections[sectionName] = true;
        updateProgression();
        navigateTo('home');
    }

    function updateProgression() {
        const btnMusic = document.getElementById('btn-music');
        const btnLetter = document.getElementById('btn-letter');
        const btnReveal = document.getElementById('btn-reveal');
        const btnFinal = document.getElementById('btn-final');

        if (finalReached) {
            [btnMusic, btnLetter, btnReveal, btnFinal].forEach(btn => {
                btn.classList.remove('locked');
                btn.removeAttribute('disabled');
            });
            return;
        }

        if (completedSections.memories) {
            btnMusic.classList.remove('locked');
            btnMusic.removeAttribute('disabled');
        }
        if (completedSections.music) {
            btnLetter.classList.remove('locked');
            btnLetter.removeAttribute('disabled');
        }
        if (completedSections.letter) {
            btnReveal.classList.remove('locked');
            btnReveal.removeAttribute('disabled');
        }
        if (completedSections.reveal) {
            btnFinal.classList.remove('locked');
            btnFinal.removeAttribute('disabled');
        }
    }

    // Top navigation pills click listener
    document.querySelectorAll('.nav-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            if (pill.classList.contains('locked')) return;
            const target = pill.getAttribute('data-target');
            if (target === 'final') {
                finalReached = true;
                updateProgression();
            }
            navigateTo(target);
        });
    });

    // Back to home / glide buttons with upward arrow
    document.querySelectorAll('.back-home-btn, .glide-top-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const currentActive = document.querySelector('.page-section.active');
            if (!currentActive) return;
            const activeId = currentActive.id.replace('section-', '');

            if (activeId === 'memories') completeSectionAndReturn('memories');
            else if (activeId === 'music') completeSectionAndReturn('music');
            else if (activeId === 'letter') completeSectionAndReturn('letter');
            else if (activeId === 'reveal') completeSectionAndReturn('reveal');
            else navigateTo('home');
        });
    });

});
