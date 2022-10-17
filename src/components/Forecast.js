import { UilClouds } from '@iconscout/react-unicons';

const Forecast = ({ title }) => {

     return (
          <div>
               <h2 className=''>{ title }</h2>
               <div className='mb-4 my-2 py-2 flex justify-between h-24 border-t'>
                    {[1, 2, 3, 4, 5].map(range => {
                         return (
                              <div key={range} className='flex flex-col items-center justify-between'>
                                   <small>01:00 AM</small>
                                   <UilClouds />
                                   {/* <img src={} alt='clear sky' /> */}
                                   <small>18°</small>
                              </div>
                         )
                    })}
               </div>     
          </div>
     )
}

export default Forecast;