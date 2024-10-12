window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const header = document.querySelector('.header');
    const gradientEndColor = '#00ff00'; // Replace with your desired ending color
  
    if (scrollY > 0) {
      const gradient = `linear-gradient(90deg, #FF13F0, ${gradientEndColor})`;
      header.style.backgroundColor = gradient;
    } else {
      header.style.backgroundColor = '#FF13F0';
    }
  });