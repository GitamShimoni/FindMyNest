
import Rental from './Rental';
import './explorerentals.css'

function ExploreRentals(value) {


  return (
    <div id='explore-rentals'>
          <div id='explore-examples'>
            <Rental value={value}/>
          </div>
    </div>
  )
}
export default ExploreRentals;
