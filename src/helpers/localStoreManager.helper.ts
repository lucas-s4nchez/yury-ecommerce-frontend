export enum LocalStorageKeys {
  ACCESS_TOKEN = "accessToken",
}

export const saveInLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getInLocalStorage = (key: string) => {
  const result = localStorage.getItem(key);
  if (typeof result === "string") {
    return result;
  }
  return !!result && typeof result && JSON.parse(result);
};

export const removeInLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
