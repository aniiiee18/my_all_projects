import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


//STEP-01
export const AppContext = createContext();


export default function AppContextProvider({children}){

    const[loading, setLoading] = useState(false);
    const[page, setPage] = useState(1);
    const[posts, setPosts] = useState([]);
    const[totalPages, setTotalPages] = useState(null);

    async function fetchPosts(page=1)
    {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        try{

            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        }
        catch(error)
        {
            console.log("erroer aaya hai")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);

    }

    function changePageHandler(page){
        setPage(page);
        fetchPosts(page);
    }


    const value = {
        loading, 
        setLoading,
        page,
        setPage,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        fetchPosts,
        changePageHandler
    }

    //STEP-02

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}