import {experience} from './data';

const initExp = (exp: typeof experience) => {
  const expNav = document.querySelector('#experience-container-nav');
  const expLeftButton = expNav?.firstElementChild;
  const expRightButton = expNav?.lastElementChild;
  let currentIndex = 0;

  renderExpContainer(exp[currentIndex]);
  renderExpNav(
    exp[currentIndex],
    currentIndex,
    exp.length,
    expNav,
    expLeftButton,
    expRightButton
  );

  expRightButton?.addEventListener('click', () => {
    if (currentIndex >= exp.length - 1) return;

    currentIndex++;
    renderExpContainer(exp[currentIndex]);
    renderExpNav(
      exp[currentIndex],
      currentIndex,
      exp.length,
      expNav,
      expLeftButton,
      expRightButton
    );
  });

  expLeftButton?.addEventListener('click', () => {
    if (currentIndex < 0) return;

    currentIndex--;
    renderExpContainer(exp[currentIndex]);
    renderExpNav(
      exp[currentIndex],
      currentIndex,
      exp.length,
      expNav,
      expLeftButton,
      expRightButton
    );
  });
};

const renderExpContainer = (exp: (typeof experience)[0]) => {
  const experienceContainer = document.querySelector('#experience-container');
  const {position, description, techStack} = exp;
  const expContainer = createExpContainer(position, description, techStack);
  experienceContainer?.replaceChildren(expContainer);
};

const renderExpNav = (
  exp: (typeof experience)[0],
  currentIndex: number,
  length: number,
  experienceNav: Element | null | undefined,
  expLeftButton: Element | null | undefined,
  expRightButton: Element | null | undefined
) => {
  const {company, date} = exp;
  const container = createCompanyAndDateContainer(
    company,
    date,
    currentIndex,
    experience.length
  );

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === length - 1;

  if (!isFirst && !isLast) {
    experienceNav?.replaceChildren(expLeftButton!, container, expRightButton!);
  } else if (isFirst) {
    experienceNav?.replaceChildren(container, expRightButton!);
  } else if (isLast) {
    experienceNav?.replaceChildren(expLeftButton!, container);
  }
};

const createItemContainer = (position: string) => {
  const item = document.createElement('div');
  item.className = 'grid lg:grid-cols-3';

  const expContainer = document.createElement('div');
  expContainer.className = 'col-span-2 fade-in';

  const expHeader = document.createElement('h2');
  expHeader.className = 'text-xl text-blue font-medium mb-3';
  expHeader.textContent = position;

  expContainer.appendChild(expHeader);

  return expContainer;
};

const createCompanyAndDateContainer = (
  company: string,
  date: string,
  position: number,
  length: number
) => {
  const companyAndDate = document.createElement('div');

  const isFirst = position === 0;
  const isLast = position === length - 1;

  if (!isFirst && !isLast) {
    companyAndDate.className = 'flex flex-col items-center justify-center';
  } else if (isFirst) {
    companyAndDate.className = 'flex flex-col items-start justify-center';
  } else if (isLast) {
    companyAndDate.className = 'flex flex-col items-end justify-center';
  }

  const companyParagraph = document.createElement('p');
  companyParagraph.textContent = company;

  const dateParagraph = document.createElement('p');
  dateParagraph.textContent = date;

  companyAndDate.appendChild(companyParagraph);
  companyAndDate.appendChild(dateParagraph);

  return companyAndDate;
};

const createDescription = (description: string) => {
  const expDesc = document.createElement('p');
  expDesc.textContent = description;

  return expDesc;
};

const createTechStack = (techStack: string[]) => {
  const expTechStack = document.createElement('ul');
  expTechStack.className = 'w-full mt-5 flex flex-wrap gap-2';
  techStack.forEach(tech => {
    const item = document.createElement('li');
    item.className =
      'h-min w-min rounded-md bg-blue text-base text-center text-white py-1 px-2 flex items-center whitespace-nowrap';

    item.textContent = tech;
    expTechStack.appendChild(item);
  });

  return expTechStack;
};

const createExpContainer = (
  position: string,
  description: string,
  techStack: string[]
) => {
  const experienceContainer = createItemContainer(position);
  const descriptionContainer = createDescription(description);
  const techStackContainer = createTechStack(techStack);

  experienceContainer.appendChild(descriptionContainer);
  experienceContainer.appendChild(techStackContainer);

  return experienceContainer;
};

export default initExp;
