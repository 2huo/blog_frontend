export const get = (key: string): Record<string, string> => {
  const value = localStorage.getItem(key);
  if (!value) return JSON.parse('');
  return value.indexOf('{') === 0 || value.indexOf('[') === 0 ? JSON.parse(value) : value;
};

export const save = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const remove = (key: string): void => {
  localStorage.removeItem(key);
};

export const clear = (): void => {
  localStorage.clear();
};
