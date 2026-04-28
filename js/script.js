/* ================================
   LOADER — typewriter + slide up
================================ */
(function () {
  const loader    = document.getElementById('loader');
  const typedEl   = document.getElementById('loader-typed');
  const text      = 'AntonAiTech';
  const typeSpeed = 110;  // мс между буквами
  const holdTime  = 300;  // пауза после набора текста
  let i = 0;


  function typeNext() {
    if (i < text.length) {
      typedEl.textContent += text[i];
      i++;
      setTimeout(typeNext, typeSpeed);
    } else {
      // Текст набран — пауза, потом уезжаем вверх
      setTimeout(() => {
        loader.classList.add('slide-up');
        // После окончания анимации убираем из DOM
        loader.addEventListener('transitionend', () => {
          loader.style.display = 'none';
        }, { once: true });
      }, holdTime);
    }
  }

  // Небольшая задержка перед стартом печати
  setTimeout(typeNext, 300);
})();

/* ================================
   PARTICLES
================================ */
particlesJS('particles-js', {
  particles: {
    number: {
      value: 55,
      density: { enable: true, value_area: 900 }
    },
    color: { value: '#22c55e' },
    shape: { type: 'circle' },
    opacity: {
      value: 0.25,
      random: true,
      anim: { enable: true, speed: 0.6, opacity_min: 0.05, sync: false }
    },
    size: {
      value: 2.5,
      random: true,
      anim: { enable: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#22c55e',
      opacity: 0.12,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.0,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false }
    }
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: false },
      resize: true
    },
    modes: {
      grab: {
        distance: 180,
        line_linked: { opacity: 0.45 }
      }
    }
  },
  retina_detect: true
});

/* ================================
   BURGER MENU
================================ */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Закрыть меню при клике на ссылку
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ================================
   SCROLL REVEAL (IntersectionObserver)
================================ */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach(el => revealObserver.observe(el));

/* ================================
   GUARANTEE — LETTER ANIMATION
================================ */
const guaranteeTitle = document.getElementById('guarantee-title');
const guaranteeText  = '100% ВОЗВРАТ ДЕНЕГ';

// Строим HTML: каждая буква в <span class="char">, пробел — span.space
function buildLetterHTML(text) {
  return text.split('').map(ch => {
    if (ch === ' ') return '<span class="space"> </span>';
    return `<span class="char">${ch}</span>`;
  }).join('');
}

guaranteeTitle.innerHTML = buildLetterHTML(guaranteeText);

const chars = guaranteeTitle.querySelectorAll('.char');

const guaranteeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Анимируем буквы по очереди
        chars.forEach((char, i) => {
          setTimeout(() => {
            char.classList.add('visible');
          }, i * 55);
        });
        guaranteeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

guaranteeObserver.observe(guaranteeTitle);

/* ================================
   NAVBAR — scroll shadow
================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.borderBottomColor = 'rgba(30,41,59,0.8)';
  } else {
    navbar.style.borderBottomColor = '';
  }
}, { passive: true });
