<script>
     document.getElementById('toggleButton').addEventListener('click', function() {
        const hiddenText = document.getElementById('hiddenText');
        hiddenText.style.display = 'block';
        this.disabled = true; // Отключаем кнопку после нажатия
        this.textContent = 'Мой опыт';
    });
    
    document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});
</script>
