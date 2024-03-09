import { Fragment, useContext, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/linglogo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import { AppContext } from '../context/AppContext'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const {isLogin, setIsLogin} = useContext(AppContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        setIsLogin(false)
        navigate("/")
    }
    return (
        <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-10">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex flex-shrink-0 items-center cursor-pointer" onClick={()=>{navigate("/")}}>
                                    <img
                                        className="h-8 w-auto"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                    <h3 className='text-white mx-2 font-medium'>Lingua Connect</h3>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    {isLogin ? <div className="flex space-x-4">
                                        <NavLink
                                            to={'/dashboard/student'}
                                            className={({ isActive }) =>
                                                [
                                                    isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                ].join(" ")
                                            }
                                        >
                                            Dashboard
                                        </NavLink>
                                    </div> : <div className="flex space-x-4">
                                        <NavLink
                                            to={'/'}
                                            className={({ isActive }) =>
                                                [
                                                    isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                ].join(" ")
                                            }
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            to={'/login'}
                                            className={({ isActive }) =>
                                                [
                                                    isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                ].join(" ")
                                            }
                                        >
                                            Login
                                        </NavLink>
                                        <NavLink
                                            to={'/signup'}
                                            className={({ isActive }) =>
                                                [
                                                    isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                ].join(" ")
                                            }
                                        >
                                            Sign Up
                                        </NavLink>
                                    </div>}
                                </div>
                            </div>
                            {isLogin ? <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/dashboard/student"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={handleLogout}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div> : <></>}
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        {isLogin ? <div className="space-y-1 px-2 pb-3 pt-2">
                            <Disclosure.Button
                                as="a"
                                href={'/'}
                                className={({ isActive }) =>
                                    [
                                        // isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                    ].join(" ")
                                }
                            >
                                Dashboard
                            </Disclosure.Button></div>:<div className="space-y-1 px-2 pb-3 pt-2">
                                <Disclosure.Button
                                    as="a"
                                    href={'/'}
                                    className={({ isActive }) =>
                                        [
                                            // isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        ].join(" ")
                                    }
                                >
                                    Home
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href={'/login'}
                                    className={({ isActive }) =>
                                        [
                                            isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        ].join(" ")
                                    }
                                >
                                    Login
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href={'/signup'}
                                    className={({ isActive }) =>
                                        [
                                            isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        ].join(" ")
                                    }
                                >
                                    Signup
                                </Disclosure.Button>
                            </div>}
                        </Disclosure.Panel>
                </>
            )}
                </Disclosure>
            )
}
