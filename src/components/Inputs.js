import { UilSearch, UilMapMarker } from '@iconscout/react-unicons';

const Inputs = () => {
     return (
          <div className='my-5 flex flex-col sm:flex-row justify-around items-center'>
               <div className='mb-5 sm:mb-0 relative w-fit'>
                    <input
                         type='text'
                         placeholder='Search for a city...'
                         className='p-2 w-72 outline-0 text-black'
                    />
                    <UilSearch
                         color='#000'
                         className="absolute right-3 top-2 cursor-pointer"
                    />
               </div>
               <div className='w-full ms:w-1/4 flex justify-around'>
                    <UilMapMarker />
                    <div className='w-16 flex justify-between items-center font-medium'>
                         <button name='metric'>°C</button>
                         <span>|</span>
                         <button name="imperial">°F</button>
                    </div>
               </div>
          </div> 
     )
}

export default Inputs