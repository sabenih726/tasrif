/**
 * Voice Input Module (Web Speech API)
 */
const VoiceInput = (() => {
    let recognition = null;
    let isRecording = false;

    function isSupported() {
        return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
    }

    function init() {
        if (!isSupported()) {
            const btn = document.getElementById('voiceBtn');
            if (btn) btn.style.display = 'none';
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.lang = 'ar-SA'; // Arabic
        recognition.interimResults = true;
        recognition.continuous = false;

        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            const input = document.getElementById('userInput');
            if (input) {
                input.value = result;
                if (typeof App !== 'undefined' && App.onSearch) {
                    App.onSearch(result);
                }
            }
        };

        recognition.onend = () => stop();

        recognition.onerror = (event) => {
            console.warn('[Voice] Error:', event.error);
            stop();
            if (event.error === 'not-allowed') {
                UI.showToast('🎤 Izinkan akses mikrofon', 'error');
            }
        };
    }

    function start() {
        if (!recognition) {
            init();
            if (!recognition) {
                UI.showToast('🎤 Browser tidak support voice input', 'error');
                return;
            }
        }

        if (isRecording) {
            stop();
            return;
        }

        try {
            recognition.start();
            isRecording = true;

            const btn = document.getElementById('voiceBtn');
            if (btn) btn.classList.add('recording');

            UI.showToast('🎤 Mulai bicara...');
        } catch (e) {
            console.error('[Voice] Start error:', e);
        }
    }

    function stop() {
        if (recognition && isRecording) {
            try { recognition.stop(); } catch {}
        }
        isRecording = false;

        const btn = document.getElementById('voiceBtn');
        if (btn) btn.classList.remove('recording');
    }

    // Auto-init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return { start, stop, isSupported };
})();
