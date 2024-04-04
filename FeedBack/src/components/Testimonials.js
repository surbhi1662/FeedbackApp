import React from "react";
import Card from "./Card";
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import { useState } from "react";


function Testimonials(props) {
    let reviews=props.reviews;
    const [index,setIndex]=useState(0);
    function leftHandler()
    {
        if(index<0)
        setIndex(reviews.length-1);
        else
        setIndex(index-1);

    }
    function rightHandler()
    {
        if(index+1>=reviews.length)
        setIndex(0);
         else
         setIndex(index+1);

    }
    function randomHandler()
    {
        let randomIndex=Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);


    }
    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
                <Card  review={reviews[index]} />
        
            <div className="flex justify-center text-2xl mt-5 gap-3 text-violet-400 font-bold">
                    <button onClick={leftHandler}
                     className="cursor-pointer hover:text-violet-500"><AiOutlineLeft/></button>
        <button onClick={rightHandler} 
        className="cursor-pointer hover:text-violet-500"><AiOutlineRight/></button>
        </div>
         <div className="text-center pb-4 mt-6">
        <button onClick={randomHandler} 
        className="bg-violet-400 hover:bg-blue-500 trabsition-all duration-200 cursor-pointer px-10 py-2 text-white
         font-bold txt-lg rounded-md">Surprise Me</button>
         </div>
         </div>
    );
}

export default Testimonials;
