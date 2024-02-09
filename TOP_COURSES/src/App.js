import React, { useEffect, useState } from "react";
import Navbar from "./Componants/Navbar";
import Filter from "./Componants/Filter";
import Cards from "./Componants/Cards";
import Spinner from "./Componants/Spinner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";


const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(){

    setLoading(true);
    try{

      let response = await fetch(apiUrl);
      let output  = await response.json();

      //giving all thhe data

      setCourses(output.data);

    }
    catch(error)
    {
      toast.error("network me dikkat hai bhai")
    }
    setLoading(false);

  }

  useEffect(() => {

    fetchData();

  }, [])
  
  return (
  <div className="min-h-screen flex flex-col">
      
      <div>
          <Navbar/>
      </div>

      <div className="bg-bgDark2 min-h-[100vh]">
          <div>
              <Filter filterData={filterData}
                setCategory={setCategory}
                category={category}
              />
          </div>
          <div className=" w-11/12 max-w-[1200px] mx-auto flex justify-center
          items-centerflex-wrap min-h-[50vh]">
            {
              loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
            }
          </div>
      </div>
  </div>
  )
};

export default App;
