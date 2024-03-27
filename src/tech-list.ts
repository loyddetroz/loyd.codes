const initTechList = (tech: string[]) => {
  const techListElement = document.querySelector('#tech-list');

  tech.forEach(t => {
    const item = document.createElement('li');
    item.className =
      'h-min w-min rounded-md bg-blue text-center text-white py-1 px-2 flex items-center whitespace-nowrap';
    item.textContent = t;

    techListElement?.append(item);
  });
};

export default initTechList;
