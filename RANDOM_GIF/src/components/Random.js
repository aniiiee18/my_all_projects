import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif3 from '../hooks/useGif3';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;



const Random = () => {

    // const[gif, setGif] = useState('');
    // const[loading, setLoading] = useState(false);

    

    // async function fetchData(){
        
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;

    //     setGif(imageSource);
    //     setLoading(false);

    // }

    // useEffect(()=>{

    //     fetchData();

    // }, [])
    
    //---------->>>>>using a HOOK<<<<<<<-----------
    
    const{gif, loading, fetchData} = useGif3();


    function clickHandler(){
        fetchData();

    }

  return (
    <div className='w-1/2 bg-green-600 rounded-lg border
     border-black flex flex-col items-center gap-5 mt-[15px] '>
        <h1 className=' mt-[20px] text-2xl underline uppercase font-bold'>
            A Random GIFS
        </h1>

        {
            loading ? (<Spinner/>):(<img src={gif}/>)
        }
      
        <button onClick={() => fetchData()}
        className='w-10/12  bg-slate-200 text-large p-y-2 rounded-lg 
        mt-[20px] mb-4'
        >
            GENRATE
        </button>
    </div>
  )
}

export default Random