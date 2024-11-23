const wheel = document.querySelector('.wheel');
    const button = document.querySelector('.spin-btn');

    let isSpinning = false;

    button.addEventListener('click', () => {
      if (isSpinning) return;

      isSpinning = true;
      const randomDegree = Math.floor(Math.random() * 360) + 720;
      wheel.style.transition = 'transform 3s ease-out';
      wheel.style.transform = `rotate(${randomDegree}deg)`;

      setTimeout(() => {
        isSpinning = false;
        const normalizedDegree = randomDegree % 360;
        const section = Math.floor(normalizedDegree / 45);
        alert(`You landed on section ${section + 1}`);
      }, 3000);
    });