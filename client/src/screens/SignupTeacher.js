import React, { useContext, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import lang from '../constants/languages'
import Select from 'react-select';
import countries from '../constants/countries'
import { useNavigate } from 'react-router-dom';
import ROUTES from '../routes';
import { AppContext } from '../context/AppContext';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Signuptutor = () => {
    const navigate = useNavigate();
    const { signEmail, signUsername, signPassword, setIsLogin, role,loginUser, getUserDetails, setLoginUser } = useContext(AppContext)

    const [selectedLang, setSelectedLang] = useState([])
    const [selectedValue, setSelectedValue] = useState([]);
    const [description, setDescription] = useState('')
    const [Age, setAge] = useState('')
    const [Country, setCountry] = useState('')
    const handleChange = (index, selectedOption) => {
        const newValues = [...selectedValue];
        newValues[index] = { name: selectedLang[index].name, level: selectedOption };
        setSelectedValue(newValues);
    };

    const handlesubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await fetch(`${backendUrl}/auth/createtutor`, {
                method: 'POST',
                body: JSON.stringify({
                    username: signUsername,
                    password: signPassword,
                    email: signEmail,
                    age: Age,
                    role: role,
                    description:description,
                    country: Country.name,
                    languages_known: selectedValue,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': 'true'
                }
            });
            const resp = await response.json();
            console.log(resp);
            if (resp.success) {
                document.cookie = "authcookie=" + resp.token;
                localStorage.setItem("authToken", resp.token)
                setIsLogin(true)
                console.log(resp.token);
                const res = await getUserDetails(resp.token);
                // setLoginUser(res.tutor)
                navigate(ROUTES.tutordash());
            }
            else {
                alert(resp.message)
            }
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <>
            <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Sign up as Tutor 👨‍🏫
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" onSubmit={handlesubmit}>
                        <div className='m-0'>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Age
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="number"
                                    value={Age}
                                    onChange={(e) => { setAge(e.target.value) }}
                                    required
                                    min={5}
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className='m-0'>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Description
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={description}
                                    onChange={(e)=>setDescription(e.target.value)}
                                    required
                                    min={5}
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Country
                                </label>
                            </div>
                            <div className="mt-2">
                                <Select
                                    options={countries}
                                    value={Country}
                                    onChange={setCountry}
                                    getOptionLabel={(option) => option.name}
                                    getOptionValue={(option) => option.name}
                                />
                            </div>
                        </div>
                        <div>

                            <label htmlFor="langs" className="block text-sm font-medium leading-6 text-white">
                                Languages Known
                            </label>
                            <Select
                                defaultValue={[]}
                                isMulti
                                id='langs'
                                name="colors"
                                options={lang}
                                value={selectedLang}
                                onChange={setSelectedLang}
                                isOptionDisabled={() => selectedLang.length >= 5}
                                getOptionLabel={(option) => option.name}
                                getOptionValue={(option) => option.name}
                                className="basic-multi-select mt-2"
                                placeholder="Select Languages"
                                classNamePrefix="select"
                            />
                        </div>
                        <div>
                            {/* {
                                selectedLang.map((e) => {
                                    return <div className='text-white flex flex-row justify-between align-center w-full font-medium'>
                                        <h5>{e.name}</h5>
                                        <ReactStars count={5} value={4} />
                                    </div>
                                })
                            } */}
                            {selectedLang.map((language, index) => (
                                <div key={index} className='text-white flex flex-row justify-between align-center w-full font-medium'>
                                    <p>{language.name}</p>
                                    <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor={`selectOption-${index}`}>Enter Course-level: <strong>{selectedValue[index]?.level}</strong></label>
                                    <select className='bg-gray-500 rounded' id={`selectOption-${index}`} name={`selectOption-${index}`} value={selectedValue[index]?.level} onChange={(e) => handleChange(index, e.target.value)}>
                                        <option className='bg-gray-900' value="A1">A1</option>
                                        <option className='bg-gray-900' value="A2">A2</option>
                                        <option className='bg-gray-900' value="B1">B1</option>
                                        <option className='bg-gray-900' value="B2">B2</option>
                                        <option className='bg-gray-900' value="C1">C1</option>
                                        <option className='bg-gray-900' value="C2">C2</option>
                                    </select>
                                </div>
                            ))}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signuptutor