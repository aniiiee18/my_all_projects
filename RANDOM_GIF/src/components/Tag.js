import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif3 from '../hooks/useGif3';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;



const Tag = () => {

    // const[gif, setGif] = useState('');
    // const[loading, setLoading] = useState(false);
    const[tag, setTag] = useState('cat');

    

    // async function fetchData(){
        
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;

    //     setGif(imageSource);
    //     setLoading(false);

    // }

    // useEffect(()=>{

    //     fetchData();

    // }, [])

    //-------->>>>>>>>>>>using a HOOK<<<<<<<<-----------

    const{gif, loading, fetchData} = useGif3(tag);


    function ChangeHandler(event){
        setTag(event.target.value)
    }

  return (
    <div className='w-1/2 mb-5 bg-blue-400 rounded-lg border
     border-black flex flex-col items-center gap-5 mt-[15px] '>
        <h1 className=' mt-[20px] text-2xl underline uppercase font-bold'>
           Random GIFS {tag}
        </h1>

        {
            loading ? (<Spinner/>):(<img src={gif}/>)
        }

        <input
            className='w-8/12 text-large pl-4  py-2 text-center rounded-lg 
        mt-[10px] '
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        />
      
        <button onClick={() => fetchData(tag)}
        className='w-10/12  bg-slate-200 text-large p-y-2 rounded-lg 
        mt-[20px]  mb-4'
        >
            GENRATE
        </button>
    </div>
  )
}

export default Tag