document.addEventListener('mousemove', (e) => {
    const mataContainer = document.querySelector('.mata');
    const mata = document.querySelectorAll('.mata > div');
    if (!mataContainer || mata.length !== 2) return;
    const containerRect = mataContainer.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;
    const angle = Math.atan2(e.clientY - containerCenterY, e.clientX - containerCenterX);
    const distance = Math.min(mata[0].offsetWidth / 4, Math.sqrt(Math.pow(e.clientX - containerCenterX, 2)+ Math.pow(e.clientY - containerCenterY, 2))
    );
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;
    mata.forEach(mata => {
        const mataBall = mata.querySelector('i');
        mataBall.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
})