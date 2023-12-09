document.querySelectorAll('.tooltip').forEach(function (tooltip) {
    tooltip.addEventListener('mouseover', function () {
        setTimeout(() => {
            tooltip.classList.add('active');
        }, 500); // Délai avant l'affichage du tooltip
    });

    tooltip.addEventListener('mouseout', function () {
        tooltip.classList.remove('active');
    });
});