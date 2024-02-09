import Header from "./componants/Header"
import Blog from "./componants/Blog"
import Pageinition from "./componants/Pageinition"
import React, { useContext, useEffect } from "react"
import { AppContext } from "./Context/AppContext"
import "./App.css"

export default function App() {

  const{fetchPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchPosts();
  },[])

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
        <Header/>
        <Blog/>
        <Pageinition/>
    </div>
  );
}
