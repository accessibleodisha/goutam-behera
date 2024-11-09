// Toggle High Contrast Mode
document.getElementById('high-contrast-toggle').addEventListener('click', function () {
    document.body.classList.toggle('high-contrast');
    
    // Update button text based on mode
    if (document.body.classList.contains('high-contrast')) {
        this.textContent = 'Disable High Contrast';
    } else {
        this.textContent = 'Enable High Contrast';
    }
});
