const background = document.querySelector('.background');
const layers = Array.from(background.querySelectorAll('.layer'));

background.addEventListener('mousemove', e => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  layers.forEach((layer, index) => {
    const speed = index / 15;
    const x = (mouseX - centerX) * speed;
    const y = (mouseY - centerY) * speed;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});
