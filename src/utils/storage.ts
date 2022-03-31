export const get = (key: string): string => {
  const value = sessionStorage.getItem(key);
  return value || '';
};

export const save = (key: string, value: string): void => {
  sessionStorage.setItem(key, value);
};

export const remove = (key: string): void => {
  sessionStorage.removeItem(key);
};

export const clear = (): void => {
  sessionStorage.clear();
};
