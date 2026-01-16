// This file contains the JavaScript code for the frontend, handling user interactions.

document.addEventListener('DOMContentLoaded', () => {
    // Donation logic temporarily removed as per client request

    function showNotification(message) {
        let notification = document.getElementById('notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'notification';
            document.body.appendChild(notification);
        }
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2500);
    }
});