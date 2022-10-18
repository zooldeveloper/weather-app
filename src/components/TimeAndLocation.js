
const TimeAndLocation = ({ timeAndLocation }) => {
     return (
          <div className='my-5 text-center'>
               <h2 className='mb-5 text-2xl font-semibold'>{timeAndLocation.location }</h2>
               <p className='font-light'>{ timeAndLocation.timezone }</p>
          </div>
     )
}

export default TimeAndLocation;