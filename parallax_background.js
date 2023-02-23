const background = document.querySelector('.background');
const layers = Array.from(background.querySelectorAll('.layer'));

const backgroundwidth = 1920;

const scaleFacs = layers.map((layer, index)=>{
    const width = backgroundwidth * (index+1);
    const height = (width/16)*9;
    return height/1080;
})

background.addEventListener('mousemove', e => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  layers.forEach((layer, index) => {
    const speed = index / 15;
    const x = (mouseX - centerX) * speed;
    const y = (mouseY - centerY) * speed;

    const scaleFac = scaleFacs[index];

    layer.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scaleFac})`;
  });
});
