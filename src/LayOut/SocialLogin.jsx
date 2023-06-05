import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);

            const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
            fetch('https://bistro-boss-server-green.vercel.app/users',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(() => {
                        navigate(from, {replace: true});
                })
            
        })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className='text-center pb-5'>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;