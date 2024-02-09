import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {

    let courses = props.courses;

    const[LikedCourse, setLikedCourse] = useState([]);
    let category = props.category;
  

    function getCourses() {

        if(category == "All")
        {
            let allCourses = [];
            Object.values(courses).forEach(array =>{
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else
        {
            //mai sirf specific data pass krunga 
            return courses[category];
        }


    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map( (course) =>(
                
                <Card key={course.id} course = {course}
                LikedCourse={LikedCourse}
                setLikedCourse={setLikedCourse}></Card>
            ))
        }
    </div>
  )
}

export default Cards

