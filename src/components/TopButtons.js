const TopButtons = ({ handleStaticValue }) => {

     const cities = [
          {
               id: 1,
               name: 'Tokyo'
          },
          {
               id: 2,
               name: 'Paris'
          },
          {
               id: 3,
               name: 'Dakar'
          },
          {
               id: 4,
               name: 'Miami'
          },
          {
               id: 5,
               name: 'Dubai'
          },

     ]


     return (
          <div className='w-full flex justify-around font-medium'>
               {cities.map(city => (
                    <button
                         onClick={() => handleStaticValue(city.name)}
                         key={city.id}>{city.name}
                    </button>
               ))}
          </div>
     )
}

export default TopButtons