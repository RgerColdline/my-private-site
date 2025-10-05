document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function () {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    function generateGibberish(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~@#$%^&*()_+-=[]{}|;:,.<>?/~@#$%^&*()_+-=[]{}|;:,.<>?/~';

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return result;
    }

    function updateGibberish() {
        const element = document.getElementById('gibberish');
        element.textContent = generateGibberish(200); 
        setTimeout(updateGibberish, 100);
    }
    updateGibberish();
})
