(function () {
  const _btnMenu = document.querySelector('.btn__menu');

  _btnMenu.addEventListener('click', meunOpen);
  bottomFixed('.button__bottom-fixed');

  window.addEventListener('scroll', function () {
    bottomFixed('.button__bottom-fixed');
  });
})();

// menu open
let st = 0;
function meunOpen() {
  const navItems = document.querySelector('.nav__wrap');
  if (this.classList.contains('open')) {
    document.documentElement.classList.remove('fixed');
    document.documentElement.removeAttribute('style');
    window.scrollTo({ top: st });
    this.classList.remove('open');
    navItems.classList.remove('open');
  } else {
    st = window.scrollY;
    document.documentElement.classList.add('fixed');
    document.documentElement.style.top = -st + 'px';
    this.classList.add('open');
    navItems.classList.add('open');
  }
}

let wst = 0;
function bottomFixed(el) {
  const elem = document.querySelector(el) ? document.querySelector(el) : null;
  if (elem !== null) {
    let visualH = document.querySelector('.section__visual').offsetHeight;
    swt = window.scrollY;
    if (swt > visualH) {
      elem.classList.add('trans');
    } else {
      elem.classList.remove('trans');
    }
  } else {
    return false;
  }
}

function imgModal() {
  const _bntModal = document.querySelectorAll('.btn__open-modal').length ? document.querySelectorAll('.btn__open-modal') : null;
  let imgModal = document.querySelector('.img-modal') ? document.querySelector('.img-modal') : null;

  if (_bntModal !== null) {
    let imgSrc = null;
    _bntModal.forEach((btn) => {
      btn.addEventListener('click', function () {
        shotSwiper.autoplay.stop();
        imgSrc = this.querySelector('img').getAttribute('src');
        console.log(imgSrc);
        imgModal.querySelector('img').setAttribute('src', imgSrc);
        st = window.scrollY;
        document.documentElement.classList.add('fixed');
        document.documentElement.style.top = -st + 'px';
        imgModal.classList.add('open');
      });
    });

    imgModal.querySelector('.btn-close').addEventListener('click', function () {
      shotSwiper.autoplay.start();
      imgModal.classList.remove('open');
      document.documentElement.classList.remove('fixed');
      document.documentElement.removeAttribute('style');
      window.scrollTo({ top: st });
    });
    imgModal.querySelector('.dimmed').addEventListener('click', function () {
      shotSwiper.autoplay.start();
      imgModal.classList.remove('open');
      document.documentElement.classList.remove('fixed');
      document.documentElement.removeAttribute('style');
      window.scrollTo({ top: st });
    });
  }
}
