import React, { useState } from "react";
import data from "./data";
import Tours from "./componants/Tours";

const App = () => {
 
  const[tours, settours] = useState(data);
  
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    settours(newTours) ;     
  }

  if(tours.length == 0)
  {
    return   (
      <div className="refresh">
        <h3>No Tours Left</h3>
        <button className="btn-white" onClick={()=>settours(data)}>
          Refresh
        </button>
      </div>
    )
  }


  return(
    
    <div className="app">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
