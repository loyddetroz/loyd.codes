import {Canvas, Circle} from '@loyddetroz/guhit.js';
import {createNoise3D} from 'simplex-noise';

const offscreenCanvas = new Canvas();
const foreground = new Canvas({selector: '#foreground'});

const PARTICLE_COUNT = 500;
const X_OFFSET = 0.00111;
const Y_OFFSET = 0.00111;
const Z_OFFSET = 0.0001;
const NOISE_STEPS = 8;
const TAU = 2 * Math.PI;

let time = 0;

const noise3D = createNoise3D();

type Configuration = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  hue: number;
};

type Particle = {
  circle: Circle;
  dx: number;
  dy: number;
  life: number;
  ttl: number;
  speed: number;
};

const randomize = (n: number) => n * Math.random();
const randomizeRange = (n: number) => n - randomize(2 * n);

const initialize = () => {
  const particles = createParticles(PARTICLE_COUNT);
  animate(particles);
};

const animate = (particles: Particle[]) => {
  const {innerWidth, innerHeight} = window;
  foreground.context.clearRect(0, 0, innerWidth, innerHeight);
  offscreenCanvas.context.clearRect(0, 0, innerWidth, innerHeight);

  particles = particles.map(p =>
    p.life > p.ttl || !checkWithinWindowBounds(p)
      ? createParticle()
      : updateParticle(p)
  );
  particles.forEach(p => offscreenCanvas.draw(p.circle));
  time++;

  foreground.context.drawImage(offscreenCanvas.element, 0, 0);
  requestAnimationFrame(() => animate(particles));
};

const createParticles = (length: number) =>
  Array.from({length}, () => createParticle());

const createParticle = (): Particle => {
  const centerY = 0.5 * foreground.height;

  const rand = randomize(10);

  const fillStyle =
    rand < 7
      ? `hsla(${180 + randomize(50)},100%,60%,50)`
      : `hsla(${20 + randomize(50)},100%,60%,50)`;

  const options = {
    x: randomize(window.innerWidth),
    y: centerY + randomizeRange(150),
    radius: 0.1 + randomize(5),
    fillStyle,
  };

  return {
    circle: new Circle(options),
    dx: 0,
    dy: 0,
    life: 0,
    ttl: 150 + randomize(200),
    speed: 0.2 + randomize(2),
  };
};

function linearInterpolation(
  startValue: number,
  endValue: number,
  t: number
): number {
  t = Math.max(0, Math.min(1, t));
  return startValue + t * (endValue - startValue);
}

const checkWithinWindowBounds = (particle: Particle): boolean => {
  const {innerWidth, innerHeight} = window;
  const {
    circle: {x, y},
  } = particle;

  return (x > 0 || x < innerWidth) && (y > 0 || y < innerHeight);
};

const updateParticle = (particle: Particle) => {
  const {
    circle: {x, y},
  } = particle;

  const {speed, dx, dy} = particle;

  const noise =
    noise3D(x * X_OFFSET, y * Y_OFFSET, time * Z_OFFSET) * NOISE_STEPS * TAU;

  const interpolatedDx = linearInterpolation(dx, Math.sin(noise), 0.5);
  const interpolatedDy = linearInterpolation(dy, Math.cos(noise), 0.5);

  particle.circle.x = x + interpolatedDx * speed;
  particle.circle.y = y + interpolatedDy * speed;

  particle.life++;
  return particle;
};

const resizeInner = (foreground: Canvas, offscreen: Canvas) => {
  const {innerWidth, innerHeight} = window;
  const {element: foregroundElement, context: foregroundContext} = foreground;
  const {element: offscreenElement, context: offscreenContext} = offscreen;

  foregroundElement.width = innerWidth;
  foregroundElement.height = innerHeight;

  offscreenContext.drawImage(foregroundElement, 0, 0);

  offscreenElement.width = innerWidth;
  offscreenElement.height = innerHeight;

  foregroundContext.drawImage(offscreenElement, 0, 0);
};

const resize = () => resizeInner(foreground, offscreenCanvas);

export {initialize, resize};
