document.addEventListener('DOMContentLoaded', function () {
    const clickButton = document.getElementById('clickButton');

    if (clickButton) {
        clickButton.addEventListener('click', function () {
            showColorfulAlert('Hello, World!');
        });
    } else {
        console.error('Button not found');
    }

    function showColorfulAlert(message) {
        const colorfulAlert = document.createElement('div');
        colorfulAlert.className = 'colorful-alert';
        colorfulAlert.innerHTML = message;

        document.body.appendChild(colorfulAlert);

        setTimeout(() => {
            colorfulAlert.remove();
        }, 2000);
    }
});