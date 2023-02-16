import Report from "./Report/Report"
import Cards from "./Cards/Cards"
import data from "../../data.json"
import { useState } from "react";




export default function Main(){
    let [currentTimeFrame, setCurrentTimeFrame] = useState(0);

    return(

        <div className="flex justify-center mt-52 gap-10 ml-72 mr-72">
            
            <div>
            <Report currentTimeFrame={currentTimeFrame} setCurrentTimeFrame={setCurrentTimeFrame} />
            </div>
            <div className="flex flex-wrap gap-10">

            {data.map(element => {
                return(
                    <Cards 
                    title={element.title} 

                    current={currentTimeFrame === 0 ? element.timeframes.daily.current : currentTimeFrame === 1 ? element.timeframes.weekly.current : currentTimeFrame === 2 ? element.timeframes.monthly.current : element.title} 

                    previous={currentTimeFrame === 0 ? element.timeframes.daily.previous : currentTimeFrame === 1 ? element.timeframes.weekly.previous : currentTimeFrame === 2 ? element.timeframes.monthly.previous : element.title}/>
                )
            })
            }
            </div>

            
            
            
        </div>
    )
}