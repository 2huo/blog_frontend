const getClientWidth = (): number | undefined => {
  const width = document.querySelector('body')?.clientWidth;
  return width;
};

export { getClientWidth };
