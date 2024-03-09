import React from 'react';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
// import {payment} from "./screens/Payment.js"
const Flashcard = () => {
    const flashcards= [
      {
          "word1": "apple",
          "language1": "English",
          "word2": "pomme",
          "language2": "French"
      },
      {
          "word1": "book",
          "language1": "English",
          "word2": "livre",
          "language2": "French"
      },
      {
          "word1": "car",
          "language1": "English",
          "word2": "voiture",
          "language2": "French"
      }
    ]
  const [flipped, setFlipped] = useState(Array(flashcards.length).fill(false));
//   const [question, setQuestion] = useState([]);
//   const [answer, setAnswer] = useState([]);
  const [open, setOpen] = useState(true)    
    const handleopen=()=>{
        setOpen(!open);
    }
    const handleClick = (index) => {
        setFlipped((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };
    const handleremove = ()=>{

    }
  const [formData, setFormData] = useState({
    word1: '',
    language1: '',
    word2: '',
    language2: ''
  });
  
  const handleChange = (e) => {
      const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    setFormData({
        word1: '',
        language1: '',
        word2: '',
        language2: ''
      })
  };


  return (<>
  <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        Panel title
                        <div className="container mx-auto">
                            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
                                <h2 className="text-2xl font-bold mb-4">Translation Form</h2>
                                <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="word1" className="block font-bold mb-2">Word 1 (English):</label>
                                    <input type="text" id="word1" name="word1" value={formData.word1} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="language1" className="block font-bold mb-2">Language 1:</label>
                                    <input type="text" id="language1" name="language1" value={formData.language1} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="word2" className="block font-bold mb-2">Word 2 (Translation):</label>
                                    <input type="text" id="word2" name="word2" value={formData.word2} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="language2" className="block font-bold mb-2">Language 2:</label>
                                    <input type="text" id="language2" name="language2" value={formData.language2} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
                                </div>
                                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Submit</button>
                                </form>
                            </div>
                            </div>
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    <button onClick={handleopen} className='m-5 bg-gray-200 p-3 rounded-lg'>ADD CARDS</button>
    {/* <div className={`relative w-64 h-40 border-2 border-gray-300 rounded-md shadow-md overflow-hidden transition-transform transform ${flipped ? 'rotate-y-180' : ''}`} onClick={handleClick}>
      <div className="absolute inset-0 flex justify-center items-center transition-opacity duration-500">
        <div className={`w-full h-full flex justify-center items-center ${flipped ? 'opacity-0' : 'opacity-100'}`}>
        </div>
        <div className={`w-full h-full flex justify-center items-center absolute top-0 left-0 ${flipped ? 'opacity-100' : 'opacity-0'}`}>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center bg-white transition-opacity duration-300">
        <h2 className="text-xl font-semibold mb-2">{flipped ? 'Answer' : 'Question'}</h2>
        <p className="text-lg">{flipped ? answer : question}</p>
      </div>
    </div> */}
    <div className='flex flex-wrap justify-around'>
    {flashcards&&flashcards.map((cards, index)=>(<div className={`relative w-64 mb-5 mt-5 h-40 border-2 border-gray-300 rounded-md shadow-md overflow-hidden transition-transform transform ${flipped[index] ? 'rotate-y-180' : ''}`} onClick={()=>handleClick(index)}>
      <div className="absolute inset-0 flex justify-center items-center transition-opacity duration-500">
        <div className={`w-full h-full flex justify-center items-center ${flipped[index] ? 'opacity-0' : 'opacity-100'}`}>
        </div>
        <div className={`w-full h-full flex justify-center items-center absolute top-0 left-0 ${flipped[index] ? 'opacity-100' : 'opacity-0'}`}>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center bg-white transition-opacity duration-300">
        <h2 className="text-xl font-semibold mb-2">{flipped[index] ? cards["language1"] : cards["language2"]}</h2>
        <p className="text-lg">{flipped[index] ? cards["word1"]  : cards["word2"]}</p>
            <button className="absolute top-1 right-1 bg-gray-600 hover:bg-red-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300" onClick={() => handleremove(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
           
      </div>
    </div>))}
    </div>
    </>
  );
};

export default Flashcard;

