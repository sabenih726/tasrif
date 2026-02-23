/**
 * ============================================
 * fiil-mutal.js - Fi'il Mu'tal Handler
 * Menangani kata Arab dengan huruf illat
 * (و ا ي) pada posisi Fa, Ain, atau Lam
 * ============================================
 */

const FiilMutal = (() => {
    
    // Huruf illat (weak letters)
    const HURUF_ILLAT = ['و', 'ا', 'ي', 'ى'];
    
    /**
     * Cek apakah huruf adalah huruf illat
     * @param {string} char
     * @returns {boolean}
     */
    function isIllat(char) {
        return HURUF_ILLAT.includes(char);
    }
    
    /**
     * Tentukan jenis fi'il mu'tal berdasarkan posisi huruf illat
     * @param {string} fa - Huruf Fa (root 1)
     * @param {string} ain - Huruf Ain (root 2)  
     * @param {string} lam - Huruf Lam (root 3)
     * @returns {Object} { type, position, description }
     */
    function getType(fa, ain, lam) {
        const faIllat = isIllat(fa);
        const ainIllat = isIllat(ain);
        const lamIllat = isIllat(lam);
        
        // Mitsal: huruf illat di Fa (وعد، وجد)
        if (faIllat && !ainIllat && !lamIllat) {
            return {
                type: 'mitsal',
                position: 'fa',
                letter: fa,
                description: `Mitsal (${fa} di Fa')`
            };
        }
        
        // Ajwaf: huruf illat di Ain (قال، نام)
        if (!faIllat && ainIllat && !lamIllat) {
            return {
                type: 'ajwaf',
                position: 'ain',
                letter: ain,
                description: `Ajwaf (${ain} di 'Ain)`
            };
        }
        
        // Naqish: huruf illat di Lam (دعا، رمى)
        if (!faIllat && !ainIllat && lamIllat) {
            return {
                type: 'naqish',
                position: 'lam',
                letter: lam,
                description: `Naqish (${lam} di Lam)`
            };
        }
        
        // Lafif Mafruq: huruf illat di Fa dan Lam (وقى، وفى)
        if (faIllat && !ainIllat && lamIllat) {
            return {
                type: 'lafif_mafruq',
                position: 'fa+lam',
                letter: `${fa}+${lam}`,
                description: `Lafif Mafruq (${fa} di Fa', ${lam} di Lam)`
            };
        }
        
        // Lafif Maqrun: huruf illat di Ain dan Lam (روى، حوى)
        if (!faIllat && ainIllat && lamIllat) {
            return {
                type: 'lafif_maqrun',
                position: 'ain+lam',
                letter: `${ain}+${lam}`,
                description: `Lafif Maqrun (${ain} di 'Ain, ${lam} di Lam)`
            };
        }
        
        // Shahih: tidak ada huruf illat
        return {
            type: 'shahih',
            position: null,
            letter: null,
            description: 'Shahih (tidak ada huruf illat)'
        };
    }
    
    /**
     * Cek apakah root mengandung huruf illat
     * @param {Array} root - Array 3 huruf [fa, ain, lam]
     * @returns {boolean}
     */
    function isMutal(root) {
        if (!root || root.length < 3) return false;
        return root.some(char => isIllat(char));
    }
    
    /**
     * Analyze root dan return info lengkap
     * @param {string} fa
     * @param {string} ain
     * @param {string} lam
     * @returns {Object}
     */
    function analyze(fa, ain, lam) {
        const type = getType(fa, ain, lam);
        return {
            root: [fa, ain, lam],
            rootStr: `${fa}-${ain}-${lam}`,
            isMutal: type.type !== 'shahih',
            ...type
        };
    }
    
    console.log('[FiilMutal] ✅ Module loaded');
    
    // Public API
    return {
        isIllat,
        getType,
        isMutal,
        analyze,
        HURUF_ILLAT
    };
})();
