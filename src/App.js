
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import WeatherDetails from './components/WeatherDetails';

function App() {
     return (
          <div className='mx-auto my-3 p-5 md:px-20 max-w-3xl h-auto bg-gradient-to-br from-cyan-700 to-blue-700 text-white flex flex-col'>
               <TopButtons />
               <Inputs />
               <TimeAndLocation />
               <WeatherDetails />
          </div>
     )
}

export default App;
