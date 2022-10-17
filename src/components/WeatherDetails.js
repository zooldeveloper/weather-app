import {
     UilTemperature,
     UilTear,
     UilWind,
     UilSun,
     UilSunset,
     UilArrowUp,
     UilArrowDown
} from '@iconscout/react-unicons';

const WeatherDetails = () => {

     const weather = [
          [
               {
                    id: 1,
                    icon: UilTemperature,
                    element: 'Real feel',
                    unit: '19°'
               },
               {
                    id: 2,
                    icon: UilTear,
                    element: 'Humidity',
                    unit: '35%'
               },
               {
                    id: 3,
                    icon: UilWind,
                    element: 'Wind',
                    unit: '4 km/h'
               }
          ],
          [
               {
                    id: 1,
                    icon: UilSun,
                    element: 'Rise',
                    unit: '05:15 am°'
               },
               {
                    id: 2,
                    icon: UilSunset,
                    element: 'Set',
                    unit: '07:45 pm'
               },
               {
                    id: 3,
                    icon: UilArrowUp,
                    element: 'Hight',
                    unit: '19°'
               },
               {
                    id: 4,
                    icon: UilArrowDown,
                    element: 'Low',
                    unit: '17°'
               },
          ]
     ]



     return (
          <div>
               <p className='text-center my-4 text-cyan-200'>Clear</p>
               <div className='flex justify-between items-center'>
                    {/* <img src={} alt='clear sky' /> */}
                    <UilSun size='50' />
                    <h3 className='text-3xl font-medium'>14°</h3>
                    <div className='grid gap-y-2'>
                         {weather[0].map(weather => {
                              return (
                                   <div key={weather.id} className='flex items-center gap-2'>
                                        <weather.icon size='20' />
                                        <small>{weather.element}: <span className='font-semibold'>{weather.unit}</span></small>
                                   </div>
                              )
                         })}
                    </div>
               </div>
               <div className='my-8 flex justify-center sm:justify-between flex-wrap gap-3'>
                    {weather[1].map(weather => {
                         return (
                              <div key={weather.id} className='flex items-center gap-1'>
                                   <weather.icon size='20' />
                                   <small>{weather.element}: <span className='font-semibold'>{weather.unit}</span></small>
                              </div>
                         )
                    })}
               </div>
          </div>
     )
}

export default WeatherDetails;