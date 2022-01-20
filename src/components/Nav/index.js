import { React, useState, useEffect }  from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation({ active, setActive }) {

  const [currentCategory, setCurrentCategory] = useState('Corinne Marshall || Portfolio');
  const categories = ['About', 'Portfolio', 'Resume', 'Contact'];

  useEffect(() => {
    document.title = `Corinne Marshall || ${currentCategory}`;
 }, [currentCategory]);

  return (
    <Disclosure as="nav" className="bg-pink-800 font-serif">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex justify-around items-stretch ">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {categories.map((category) => (
                      <ul className={`" rounded-full  px-4 text-xl lg:px-8 xl:text-2xl  hover:text-white " 
                        ${currentCategory === category ? " rounded-full  text-black" : "text-white"} `} 
                        key={category}>
                          <a href="#" 
                          className="uppercase" 
                          onClick={() => { setActive(category); setCurrentCategory(category); }}
                      >
                        {category}
                          </a>
                      </ul>
                      ))}
                  </div>
                </div>
              </div>
            </div>
        </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {categories.map((categories) => (
                <Disclosure.Button
                  key={categories.name}
                  as="a"
                  href={categories.href}
                  className={classNames(
                    categories.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={categories.current ? 'page' : undefined}
                >
                  {categories.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}