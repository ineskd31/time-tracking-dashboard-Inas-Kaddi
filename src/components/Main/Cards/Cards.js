import point from "./point.svg"
import cartable from "./cartable.svg"


export default function Cards({title, current, previous}){
    return(
        <div>
            <div className="bg-oran w-[255px] h-[77px] rounded-3xl -mb-8 overflow-hidden relative">
                <img className="absolute -top-2 right-4" src={cartable} alt="" />
            </div>

            <div className=" w-[255px] h-[200px] bg-deep text-white rounded-3xl pt-5  pl-5 pr-5 relative">
                <div className="flex items-center justify-between">
                    <p className="pb-4">{title}</p>
                    <img src={point} alt="" />
                </div>

                <p className="text-6xl mb-4">{current}hrs</p>
                <p className="text-gri">Last Week - {previous}hrs</p>
            </div>
        </div>
    )
}