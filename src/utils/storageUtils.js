export const getStoredToken = () => {
   const storedAccessToken = window.localStorage.getItem(process.env.NEXT_PUBLIC_ACCESSTOKEN_STORAGE_KEY);
   return storedAccessToken ? storedAccessToken : null;
};

export const setStoredToken = (token) => {
   if (!token) return;
   window.localStorage.setItem(process.env.NEXT_PUBLIC_ACCESSTOKEN_STORAGE_KEY, token);
};

export const removeStoredToken = () => {
   window.localStorage.removeItem(process.env.NEXT_PUBLIC_ACCESSTOKEN_STORAGE_KEY);
};
