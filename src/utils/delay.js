export const delay = (ms , response) => new Promise((res) => setTimeout(() => res(response), ms));
