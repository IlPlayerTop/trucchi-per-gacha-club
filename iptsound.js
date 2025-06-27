/**
 * iptSound - Simple Sound Effect Player
 * Author: IlPlayerTop
 * License: Custom
 */

const iptSound = {
    /**
     * Plays a sound from a given file path.
     * @param {string} src - The path to the audio file.
     */
    play(src) {
        if (typeof src !== 'string' || src.trim() === '') {
            console.error('[iptSound] Invalid audio source.');
            return;
        }

        const audio = new Audio(src);
        audio.play().catch(err => {
            console.error('[iptSound] Failed to play sound:', err);
        });
    }
};

// Example usage:
// iptSound.play('sounds/click.mp3');
// Assicurati che il percorso del file sia corretto e accessibile.

module.exports = iptSound;
