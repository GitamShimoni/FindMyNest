import '../App.css';

import Welcoming from './Welcoming';
import Commercial from './Commercial';
import MortgageCalculator from './MortgageCalculator';


const Homepage = () => {


  return (
    <div className="App">
          <Welcoming/>
          <Commercial/>
          <MortgageCalculator/>
    </div>
  )
}

export default Homepage