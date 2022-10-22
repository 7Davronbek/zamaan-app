export const LANGUAGE = 'zamaan-app'

export const API_PATH = `https://backend.zamaan.uz/${localStorage.getItem(LANGUAGE) ? localStorage.getItem(LANGUAGE) : 'ru'}/main`

export const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
};

