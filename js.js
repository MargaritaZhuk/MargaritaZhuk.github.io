<script>
    document.getElementById('toggleButton').addEventListener('click', function() {
        const hiddenText = document.getElementById('hiddenText');
        hiddenText.style.display = 'block';
        this.disabled = true; // Отключаем кнопку после нажатия
        this.textContent = 'Текст отображен';
    });
</script>