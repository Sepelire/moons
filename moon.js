const moonPhases1 = document.querySelectorAll('.moon-phase-1');
const moonPhases2 = document.querySelectorAll('.moon-phase-2');
const moonPhases3 = document.querySelectorAll('.moon-phase-3');

moonPhases1.forEach(moon => {
  moon.addEventListener('click', () => {
    moon.classList.toggle('desaturated');
  });
});

moonPhases2.forEach(moon => {
  moon.addEventListener('click', () => {
    moon.classList.toggle('desaturated');
  });
});

moonPhases3.forEach(moon => {
    moon.addEventListener('click', () => {
      moon.classList.toggle('desaturated');
    });
  });
  