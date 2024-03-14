const home = document.querySelector('#home');
const homeSubtitle = home.querySelector('#about-trigger');

const controller = new ScrollMagic.Controller();

const firstScene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: homeSubtitle,
  triggerHook: 0,
  reverse: false,
})
  .addIndicators()
  .addTo(controller);

gsap.registerEffect({
  name: 'fadeIn',
  effect: (targets, config) => {
    config = {...config, duration: 1, opacity: 1, ease: 'power2.inOut'};

    if (config.toLeft) {
      config = {...config, left: 0};
    }

    if (config.toTop) {
      config = {...config, top: 0};
    }

    if (config.toRight) {
      config = {...config, right: 0};
    }

    if (config.toBottom) {
      config = {...config, bottom: 0};
    }

    return gsap.to(targets, config);
  },
  defaults: {duration: 1},
  extendTimeline: true,
});

// firstScene.on('start', () => {
//   const about = document.querySelector('#about');
//   const bentoBox = about.querySelector('#bento-box');
//   const bentoBoxLeft = about.querySelector('.bento-box__left');
//   const bentoBoxRightTop = bentoBox.querySelector(
//     '.bento-box__right > .bento-box__right__top'
//   );
//   const bentoBoxRightBottomLeft = bentoBox.querySelector(
//     '.bento-box__right > .bento-box__right__bottom > .bento-box__right__bottom__left'
//   );
//   const bentoBoxRightBottomRight = bentoBox.querySelector(
//     '.bento-box__right > .bento-box__right__bottom > .bento-box__right__bottom__right'
//   );

//   gsap.effects.fadeIn(bentoBoxLeft, {toLeft: true, toTop: true});
//   gsap.effects.fadeIn(bentoBoxRightTop, {toRight: true, delay: 0.2});
//   gsap.effects.fadeIn(bentoBoxRightBottomRight, {
//     toTop: true,
//     toLeft: true,
//     delay: 0.4,
//   });
//   gsap.effects.fadeIn(bentoBoxRightBottomLeft, {toTop: true, delay: 0.6});
// });
