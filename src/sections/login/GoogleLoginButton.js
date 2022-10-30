import { useEffect, useRef } from 'react';

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
            size: ' ',
            width: '300px',
        });
        google.accounts.id.prompt();
    }, []);

    return <div {...other} ref={googleButtonRef} />;
};

export default GoogleLoginButton;
