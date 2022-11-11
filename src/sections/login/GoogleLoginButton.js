import { useEffect, useRef } from 'react';
// const google = typeof window !== 'undefined' ? window.google : null;

const GoogleLoginButton = ({ ...other }) => {
   const googleButtonRef = useRef();

   const loginCallback = (smt) => {
      console.log(smt);
   };

   useEffect(() => {
      /* global google */
      if (!google) return;
      google.accounts.id.initialize({
         client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
         callback: loginCallback,
      });

      google.accounts.id.renderButton(googleButtonRef.current, {
         theme: 'outline',
         width: 315,
      });
      google.accounts.id.prompt();
   }, []);

   return <div {...other} ref={googleButtonRef} />;
};

export default GoogleLoginButton;
