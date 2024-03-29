import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';



const Card = (props) => {

    let course = props.course;

    let LikedCourse = props.LikedCourse;
    let setLikedCourse = props.setLikedCourse;

    function clickHandler(){

        if(LikedCourse.includes(course.id)){
            setLikedCourse((prev) => prev.filter((cid)=>(cid !==course.id)));
            toast.warning("Like removed")
        }
        else
        {
            if(LikedCourse.length === 0)
            {
                setLikedCourse([course.id]);
            }
            else
            {
                setLikedCourse((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }

    }
    
    return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden '>
        <div className='relative'>
            <img src={course.image.url}/>

            <div className='w-[40px] h-[40px] bg-white absolute
            rounded-full right-2 bottom-[-11px] grid place-items-center'>
            <button onClick={clickHandler}>
                {
                    LikedCourse.includes(course.id) ?
                    (<FcLike fontSize="1.7rem"/>) : 
                    (<FcLikePlaceholder fontSize={"1.75rem"}/>)
                }
            </button> 
        </div>
        </div>
        <div className=' p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white '>
            {
                course.description.length >100 ? 
                (course.description.substr(0,100) + "...") : 
                (course.description)
            }
            </p>
        </div>
    </div>
  )
}

export default Card
