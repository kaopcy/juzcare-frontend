export const getStoredToken = () => {
   if (typeof window === 'undefined') return null;
   const storedAccessToken = window.localStorage.getItem(process.env.NEXT_PUBLIC_ACCESSTOKEN_STORAGE_KEY);
   return storedAccessToken ? storedAccessToken : null;
};

export const setStoredToken = (token) => {
   if (typeof window === 'undefined') return null;
   if (!token) return;
   window.localStorage.setItem(process.env.NEXT_PUBLIC_ACCESSTOKEN_STORAGE_KEY, token);
};

export const removeStoredToken = () => {
   if (typeof window === 'undefined') return null;
   window.localStorage.removeItem(process.env.NEXT_PUBLIC_ACCESSTOKEN_STORAGE_KEY);
};
