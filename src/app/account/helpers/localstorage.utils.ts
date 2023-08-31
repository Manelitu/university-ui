export const setStorage = (field: string, value: any): void => {
  localStorage.setItem(field, value);
}

export const getStorage = (field: string): string | null => localStorage.getItem(field);