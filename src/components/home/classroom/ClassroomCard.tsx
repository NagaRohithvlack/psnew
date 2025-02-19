// import { ClassroomData } from "./ClassroomData";

// function ClassroomCard() {
//     return(
//         <div className="bg=[#101720] flex gap-4 justify-center items-center">
//             {ClassroomData.map((item) => {
//                 return(
//                     <div className="w-1/6 bg-white flex flex-col gap-4 p-4 h-[300px] ">
//                         <div className="flex justify-center">
//                         <img src={item.svg} className="w-20"/>
//                         </div>

//                         <div className="flex flex-col justify-around gap-2 items-center">
//                             <div className="h-2/6">

//                         <p className="text-xl font-bold">
//                             {item.title}
//                         </p>
//                         <p className="text-base">
//                             {item.content}
//                         </p>
//                             </div>
//                         <button className="border border-slate-950 bg-black text-white rounded-lg p-2 w-5/6">Read More</button>
//                         </div>
//                     </div>
//                 )
//             })}

//         </div>
//     )
// }

// export default ClassroomCard;

import { ClassroomData } from "./ClassroomData";

function ClassroomCard() {
    return(
        <div className="bg-[#101720] flex gap-10 justify-center items-center p-4">
            {ClassroomData.map((item, index) => {
                return(
                    <div key={index} className="w-1/6 bg-white flex flex-col gap-4 p-4 h-[300px] rounded-lg shadow-md">
                        <div className="flex justify-center">
                            <img src={item.svg} className="w-20" alt={`${item.title} icon`} />
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <div className="flex flex-col gap-2">
                                <p className="text-xl font-bold text-center">
                                    {item.title}
                                </p>
                                <p className="text-base text-center">
                                    {item.content}
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <button className="border border-slate-950 bg-black text-white rounded-lg p-2 w-5/6">Read More</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ClassroomCard;
