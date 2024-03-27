import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';

const initScroll = () => {
  const home = document?.querySelector('#home');
  const controller = new ScrollMagic.Controller();
  const windowWidth = window.innerWidth;

  gsap.registerEffect({
    name: 'fadeIn',
    effect: (targets: gsap.TweenTarget, config: gsap.TweenVars) => {
      config = {...config, duration: 1.2, opacity: 1, ease: 'Power2.easeIn'};

      if (config.toLeft) {
        config = {...config, x: 0};
      }

      if (config.toTop) {
        config = {...config, y: 0};
      }

      if (config.toRight) {
        config = {...config, x: 0};
      }

      if (config.toBottom) {
        config = {...config, y: 0};
      }

      return gsap.to(targets, config);
    },
    defaults: {duration: 1},
    extendTimeline: true,
  });

  if (windowWidth < 768) {
    const firstScene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: home,
      triggerHook: 0,
      reverse: false,
    })
      // .addIndicators()
      .addTo(controller);

    const aboutMeCard = document.querySelector('#about-me');
    firstScene.on('end', () => {
      gsap.effects.fadeIn(aboutMeCard, {toTop: true});
    });

    const secondScene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: aboutMeCard,
      triggerHook: 0,
      reverse: false,
    })
      // .addIndicators()
      .addTo(controller);

    const expCard = document.querySelector('#experience');
    secondScene.on('start', () => {
      gsap.effects.fadeIn(expCard, {toTop: true});
    });

    const thirdScene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: expCard,
      triggerHook: 0,
      reverse: false,
      offset: -450,
    })
      // .addIndicators()
      .addTo(controller);

    const techCard = document.querySelector('#tech');
    thirdScene.on('start', () => {
      gsap.effects.fadeIn(techCard, {toTop: true});
    });

    const fourthScene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: techCard,
      triggerHook: 0,
      reverse: false,
      offset: -750,
    })
      // .addIndicators()
      .addTo(controller);

    const contactCard = document.querySelector('#contact');
    fourthScene.on('start', () => {
      gsap.effects.fadeIn(contactCard, {toTop: true});
    });
  } else if (windowWidth >= 1024) {
    const firstScene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: home,
      triggerHook: 0,
      reverse: false,
    })
      // .addIndicators()
      .addTo(controller);

    const aboutMeCard = document.querySelector('#about-me');
    firstScene.on('end', () => {
      gsap.effects.fadeIn(aboutMeCard, {toRight: true});
    });

    const secondScene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: home,
      triggerHook: 0,
      reverse: false,
    })
      // .addIndicators()
      .addTo(controller);

    const expCard = document.querySelector('#experience');
    secondScene.on('end', () => {
      gsap.effects.fadeIn(expCard, {toTop: true, toLeft: true});
    });

    const thirdScene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: home,
      triggerHook: 0,
      reverse: false,
    })
      // .addIndicators()
      .addTo(controller);

    const techCard = document.querySelector('#tech');
    thirdScene.on('end', () => {
      gsap.effects.fadeIn(techCard, {toTop: true});
    });

    const fourthScene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: home,
      triggerHook: 0,
      reverse: false,
    })
      // .addIndicators()
      .addTo(controller);

    const contactCard = document.querySelector('#contact');
    fourthScene.on('end', () => {
      gsap.effects.fadeIn(contactCard, {toTop: true});
    });
  } else {
    const firstScene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: home,
      triggerHook: 0,
      reverse: false,
    })
      // .addIndicators()
      .addTo(controller);

    const aboutMeCard = document.querySelector('#about-me');
    firstScene.on('end', () => {
      gsap.effects.fadeIn(aboutMeCard, {toTop: true});
    });

    const secondScene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: home,
      triggerHook: 0,
      reverse: false,
    })
      // .addIndicators()
      .addTo(controller);

    const expCard = document.querySelector('#experience');
    secondScene.on('end', () => {
      gsap.effects.fadeIn(expCard, {toTop: true});
    });

    const thirdScene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: home,
      triggerHook: 0,
      reverse: false,
    })
      // .addIndicators()
      .addTo(controller);

    const techCard = document.querySelector('#tech');
    thirdScene.on('end', () => {
      gsap.effects.fadeIn(techCard, {toTop: true});
    });

    const fourthScene = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: home,
      triggerHook: 0,
      reverse: false,
    })
      // .addIndicators()
      .addTo(controller);

    const contactCard = document.querySelector('#contact');
    fourthScene.on('end', () => {
      gsap.effects.fadeIn(contactCard, {toTop: true});
    });
  }
};

export default initScroll;
