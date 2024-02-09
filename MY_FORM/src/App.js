import React, { useState } from "react";

const App = () => {


  const[formData, setData] = useState({FirstName:"", LastName:"", EmailAdress:"", CountryName:"",
  Adress:"", City:"",State:"", PinCode:"", Comments:false, Candidates:false, Offers:false })

  function ChangeHandler(event){
 

    setData(prevData =>{
      
      const {name, type, value, checked} = event.target

      return{
        ...prevData, 
        [name] : type === "checkbox" ? checked : value
      }

    });


  }

  function submitHandler(event)
  {
    event.preventDefault();
    console.log(formData);
  }



  return (
  <div className="w-[100vw] h-[100vh]">
      <form className="App h-[100vh] w-[700px] mx-auto mt-10" onSubmit={submitHandler}>
           
          <div className="flex flex-col justify-start items-start">
            
            <label htmlFor="FirstName" >First Name</label>
            <input
            type="text"
            placeholder="Pranay"
            name="FirstName"
            className="border-2 pl-3 border-opacity-100 rounded-md  w-full mt-1"
            id="FirstName"
            onChange={ChangeHandler}
            value={formData.FirstName}
            />

            <br/>

            <label htmlFor="LastName" >LastName</label>
            <input
            type="text"
            placeholder="Gupta"
            name="LastName"
            className="border-2 pl-3 border-opacity-100 rounded-md  w-full mt-1"
            id="LastName"
            onChange={ChangeHandler}
            value={formData.LastName}
            />

            <br/>

            <label htmlFor="EmailAdress" >Email Adress</label>
            <input
            type="Email"
            placeholder="Email"
            name="EmailAdress"
            className="border-2 pl-3 border-opacity-100 rounded-md  w-full mt-1"
            id="EmailAdress"
            onChange={ChangeHandler}
            value={formData.EmailAdress}
            />

            <br/>
            
            <lable htmlFor="CountryName">Country Name</lable>
            <select
            name="CountryName"
            id="CountryName"
            onChange={ChangeHandler}
            value={formData.CountryName}
            className="border-2 pl-3 border-opacity-100 rounded-md  w-full mt-1"
            >

              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="America">America</option>
              <option value="England">England</option>

            </select>

            <br/>

            <label htmlFor="Adress" >Street Adress</label>
            <input
            type="text"
            placeholder="Street Adress"
            name="Adress"
            className="border-2 pl-3 border-opacity-100 rounded-md  w-full mt-1"
            id="Adress"
            onChange={ChangeHandler}
            value={formData.Adress}
            />

            <br/>

            <label htmlFor="State" >State</label>
            <input
            type="text"
            placeholder="MadhyPradesh"
            name="State"
            className="border-2 pl-3 border-opacity-100 rounded-md  w-full mt-1"
            id="State"
            onChange={ChangeHandler}
            value={formData.State}
            />

          <br/>

          <label htmlFor="City" >City</label>
          <input
          type="Text"
          placeholder="Banglore"
          name="City"
          className="border-2 pl-3 border-opacity-100 rounded-md  w-full mt-1"
          id="City"
          onChange={ChangeHandler}
          value={formData.City}
          />

          <br/>

          <label htmlFor="PinCode" >Zip/Postal Code</label>
          <input
          type="Text"
          placeholder="07632"
          name="PinCode"
          className="border-2 pl-3 border-opacity-100 rounded-md  w-full mt-1"
          id="PinCode"
          onChange={ChangeHandler}
          value={formData.PinCode}
          />

          <br/>
          <label htmlFor="Comments">
          
          <input
            type="checkbox"
            name="Comments"
            id="Comments"
            onChange={ChangeHandler}
            checked={formData.Comments}
            className="mr-2"
            >
            </input>
            Comments
            <p className=" text-gray-400">Get notified when someone Comments on a posting</p>
          </label>

          <br/>


          <label htmlFor="Offers">
          <input
            type="checkbox"
            name="Offers"
            id="Offers"
            onChange={ChangeHandler}
            checked={formData.Offers}
            className="mr-2"
            >
            </input>
            Offers
            <p className=" text-gray-400">Get notified when Candidates accecpt of rejct offer</p>
          </label>

          <br/>


          <label htmlFor="Candidates">          
          <input
            type="checkbox"
            name="Candidates"
            id="Candidates"
            onChange={ChangeHandler}
            checked={formData.Candidates}
            className="mr-2"
            >
            </input>
            Candidates
            <p className=" text-gray-400">Get notified when Candidates applies for a job</p>
          </label>

          <br/>
          
          <h4 className=" font-bold">Push Notification</h4>
          <p className=" text-gray-400">Get notified when Candidates applies for a job</p>

          <br/>

          <label htmlFor="Everythig">
          <input
          type="radio"
          id="Everything"
          onChange={ChangeHandler}
          name="Radiobtn"
          className="pr-2"
          />
          
          Everything</label>

          <br/>

          <label htmlFor="throughEmail">
          <input
          type="radio"
          id="throughEmail"
          onChange={ChangeHandler}
          name="Radiobtn"
          className="pr-2"
          />

          Same as Emaiil</label>

          <br/>

          <label htmlFor="Notification">
          <input
          type="radio"
          id="Notification"
          onChange={ChangeHandler}
          name="Radiobtn"
          className="pr-2"
          />

          No Push Notification</label>

          <button className=" bg-sky-700 p-2 text-white font-bold rounded-lg mt-3" 
          >Submite</button>


          </div>

      </form> 
  </div>);
};

export default App;
