import { useState } from "react";

function Card({id, image, info, price, name, removeTour}){

    const[readmore, setreadmore] = useState(false);

    const description = readmore ? info: `${info.substring(0,200)}....`

    function readmorehandler()
    {
        setreadmore(!readmore);
    }



    return(
        <div className="card">
            
            <img src={image} className="image"></img>
            
            <div className="tour-info"> 
                <div className="tours-datail">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="Description">
                    {description}
                    <span className="readbtn" onClick={readmorehandler}>
                        {readmore ? `show less`: `read more`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={()=>removeTour(id)}>
                Not Intrested
            </button>



        </div>
    )
}

export default Card;