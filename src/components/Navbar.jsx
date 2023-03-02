import React, { useState, useRef } from 'react'

import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate  } from 'react-router-dom';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
const Navbar = () => {
    
  const { currentUser,logout } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const navigation = [
    { name: 'Home', href: '#services', current: true },
    { name: 'Cars', href: '#cars', current: false },
    { name: 'Blogs', href: '#blogs', current: false },
    { name: 'Contact Us', href: '#contact', current: false },
    { name: currentUser ? 'Logout' : 'Account', href: '#', current: false },
  ]
 

      const handleClick = async(e, item) =>{
        console.log()
       e.preventDefault();
       if(item?.name==='Logout')
       {    
try {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
    logout()
  }, 3000);

}catch(error) {
  console.log(error)
}
      
       }
       if(item.name==='Account') {
        
        navigate ("/signin")
       }

      }
  return (
    <Disclosure as="nav" className="bg-primary sticky top-0">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 
        
        lg:px-8 font-poppins">
        {loading && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Logging Out!</strong>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>}
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2
               text-black hover:bg-secondary hover:text-white focus:outline-none 
               focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
               
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e)=>{handleClick(e, item) 
                      }}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' 
                        : 'text-gray-500 hover:bg-secondary hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-secondary hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
    
      </>
    )}
    
  </Disclosure>
  )
}

export default Navbar
