import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [token] = useToken(user);
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (token) {
        console.log('Navigate Completely');
        navigate(from, { replace: true });
    }

    return (
        <div className="form-control">
            <button onClick={() => signInWithGoogle()} className="btn text-white bg-gradient-to-r from-secondary to-primary">Continue With Google</button>
        </div>
    );
};

export default SocialLogin;