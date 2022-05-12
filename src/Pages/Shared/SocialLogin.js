import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (loading) {
        return <p>Loading</p>
    }
    return (
        <div className="form-control">
            <button onClick={() => signInWithGoogle()} className="btn text-white bg-gradient-to-r from-secondary to-primary">Continue With Google</button>
        </div>
    );
};

export default SocialLogin;