import React, {useRef, useState} from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate  } from 'react-router-dom';
const Signup = () => {
    const emailRef= useRef();
    const passRef = useRef();
    const confPassRef = useRef();
    const {signup,selected,setSelected,options} = useAuth()
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = event => {
      console.log(event.target.value);
      setSelected(event.target.value);
    };
    async function handleSubmit (e) {
    e.preventDefault();
    if(passRef.current.value !== confPassRef.current.value){
    return setError('Password do not match');
    }
    else {
        try {
            setError('')
            setLoading(true)
           await signup(emailRef.current.value,passRef.current.value);
           setTimeout(() => {
            navigate ("/signin")
          }, 3000);
         
        }
       catch(error) {
       console.log(error)
       setError('Failed to create Account')
       }
    setLoading(false)
    }
    }
  return (
   <>
   <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8
   font-poppins bg-primary h-screen">
        <div className="w-full max-w-md space-y-8">
          <div>
          {loading && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Congratulations! You have registered.</strong>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>}
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign Up to your account
            </h2>
            
          </div>
          {error && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Failed!</strong>
  <span class="block sm:inline">{error}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>}
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  ref={emailRef}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none
                   rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
                    placeholder-gray-500 focus:z-10 
                    focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  ref={passRef}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none 
                   border border-gray-300 px-3 py-2 text-gray-900
                    placeholder-gray-500 focus:z-10 
                      focus:border-secondary focus:outline-none focus:ring-secondarysm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="Confpassword"
                  ref={confPassRef}
                  name="confPassword"
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none
                    border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
                    focus:border-secondary focus:outline-none focus:ring-secondary sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
             
            </div>

           

            <div>
              <button
              disabled={loading }
                type="submit"
                className="group relative flex w-full justify-center rounded-md border
                border-transparent bg-secondary hover:bg-dimYellow py-2 px-4 text-sm font-medium
                 text-white "
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5
                   text-white" aria-hidden="true" />
                </span>
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between">
              <div className="flex items-center">
              <p>Already have an account? </p>
                <label htmlFor="remember-me" 
                className="ml-2 block text-sm text-gray-900 underline">
                <Link to="/signin"><text className='font-bold text-secondary'>
                  Login Here</text></Link>
                </label>
              </div>

             
            </div>
        </div>
      </div>
   </>
  )
}

export default Signup
