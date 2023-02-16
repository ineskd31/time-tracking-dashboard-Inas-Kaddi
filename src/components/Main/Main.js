import Report from "./Report/Report"
import Cards from "./Cards/Cards"
import data from "../../data.json"


export default function Main(){
    return(

        <div className="flex justify-center mt-52 gap-5 flex-wrap ml-56 mr-">
            <Report />

            {data.map(element => {
                return(
                    <Cards title={element.title} current={element.timeframes.daily.current} previous={element.timeframes.daily.previous}/>
                )
            })
            }
            
            
        </div>
    )
}