import profil from "./image.png"



export default function Report(){
    return(

        <div>
            <div className="h-[355px] w-[255px] bg-ocean rounded-3xl p-7 relative">
                <img className=" border-2 border-white rounded-full mb-8" src={profil} alt="" width="84"/>

                <p className="text-gri">Report</p>
                <p className="text-white text-4xl leading-10">Jeremy <br /> Robson</p>

            </div>

            <div className="bg-deep w-[255px] h-[175px] text-gri rounded-3xl p-5 flex flex-col gap-3 pt-14 -mt-9">
                <p>Daily</p>
                <p>Weekly</p>
                <p>Monthly</p>
            </div>
        </div>
    )
}