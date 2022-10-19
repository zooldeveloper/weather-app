const Forecast = ({ title, forecast, iconCode }) => {

     return (
           forecast && <div>
               <h2 className=''>{ title }</h2>
               <div className='mb-4 my-2 py-2 flex justify-between h-24 border-t'>
                    {forecast.map((hourly, index) => {
                         return (
                              <div
                                   key={index}
                                   className='flex flex-col items-center justify-between'
                              >
                                   <small>{ hourly.title }</small>
                                   <img
                                        src={iconCode(hourly.icon)}
                                        width='50'
                                        alt='clear sky' />
                                   <small>{ hourly.temp.toFixed()}°</small>
                              </div>
                         )
                    })}
               </div>     
          </div>
           
     )
}

export default Forecast;