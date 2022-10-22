import { useState } from 'react';
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inputs = ({ handleInputValue, setQuery, setUnit }) => {

     const [inputValue, setInputValue] = useState('');

     const handleCurrentLocation = () => {
          if (navigator.geolocation) {
               toast.info("Fetching user's location");
               navigator.geolocation.getCurrentPosition((postion) => {
                    const lat = postion.coords.latitude;
                    const lon = postion.coords.longitude;
                    setTimeout(() => toast.success("Successfully fetched user's location"), 2000)
                    setQuery({lat, lon})
               })
          }
     }

     const handleUnits = (e) => {
          setUnit(e.target.name);
     }


     return (
          <div className='my-5 flex flex-col sm:flex-row justify-around items-center'>
               <div className='mb-5 sm:mb-0 relative w-fit'>
                    <input
                         value={inputValue}
                         onChange={(e) => setInputValue(e.target.value)}
                         type='text'
                         placeholder='Search for a city...'
                         className='p-2 w-72 outline-0 text-black'
                    />
                    <UilSearch
                         onClick={() => {
                              handleInputValue(inputValue)
                              setTimeout(() => setInputValue(''), 700)
                         }}
                         className="text-cyan-700 absolute right-3 top-2 cursor-pointer" />
               </div>
               <div className='w-full ms:w-1/4 flex justify-around'>
                    <UilMapMarker
                         onClick={handleCurrentLocation}
                         className='cursor-pointer'
                    />
                    <div className='w-16 flex justify-between items-center text-xl font-medium'>
                         <button
                              onClick={(e) => handleUnits(e)}
                              name='metric'>°C
                         </button>
                         <span>|</span>
                         <button
                              onClick={(e) => handleUnits(e)}
                              name="imperial">°F
                         </button>
                    </div>
               </div>
          </div> 
     )
}

export default Inputs;