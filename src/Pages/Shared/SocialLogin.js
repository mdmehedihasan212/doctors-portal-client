import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from './Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="form-control">
            <button onClick={() => signInWithGoogle()} className="btn text-white bg-gradient-to-r from-secondary to-primary">Continue With Google</button>
        </div>
    );
};

export default SocialLogin;