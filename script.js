window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
      // Si se hace scroll, la barra se vuelve transparente y el texto cambia a negro
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      navbar.querySelectorAll('a').forEach(link => {
        link.style.color = '#000';  // Texto negro
      });
    } else {
      // Si está en la parte superior, vuelve a su color original
      navbar.style.backgroundColor = '#333';  // Color oscuro
      navbar.querySelectorAll('a').forEach(link => {
        link.style.color = '#fff';  // Texto blanco
      });
    }
  });
  