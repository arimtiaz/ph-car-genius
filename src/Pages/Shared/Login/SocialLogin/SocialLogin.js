import React from 'react';
import google from '../../../../images/google_logo-removebg-preview.png'
import github from '../../../../images/25231.png'
import facebook from '../../../../images/pngegg.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    if (error || error1) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading || loading1) {
        return <p>Loading...</p>;
      }
      if (user || user1) {
        return (
          navigate('/home')
        );
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className="bg-primary w-50"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className="bg-primary w-50"></div>
            </div>
            <div className="">
            <div className=''>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-light shadow bg-white w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()}
                    className='btn btn-light shadow bg-white w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
                <button
                    className='btn btn-light shadow bg-white w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
            </div>
            </div>
        </div>
    );
};

export default SocialLogin;