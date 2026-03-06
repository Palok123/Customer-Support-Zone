
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import calenderLogo from '../../assets/ri_calendar-line.png';
import { toast } from "react-toastify";
export default function Card({card,handleAddTask}) {
    const notify = () => toast("In progress");

    return(
        <div className="p-5 shadow-md" onClick={()=>{handleAddTask(card);notify() }}>
            <div className="flex justify-between  items-center mb-2">
                <p className="text-[18px] font-medium">{card.title}</p>
                <button className={`${card.status==='In Progress'? 'bg-[#F8F3B9]' : 'bg-[#B9F8CF]'} px-2 py-1 font-medium rounded-full text-[16px] flex items-center justify-center gap-1`}><FontAwesomeIcon icon={faCircle} className={`text-[16px] ${card.status==='In Progress'? 'text-[#FEBB0C]' : 'text-[#02A53B]'}`}/>{card.status}</button>
            </div>
            <p className="text-[#627382] text-[14px] mb-2">{card.description}</p>
            <div className="flex justify-between items-center ">
                <div className="flex gap-3 items-center">
                    <p className="text-[#627382] text-[14px]">#100{card.id}</p>
                    <p className={` font-semibold ${card.priority==='High'?'text-[#F83044]': card.priority==='Medium'?'text-[#FEBB0C]':'text-[#02A53B]'}`}>{card.priority} Priority</p>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="text-[#627382] text-[14px]">{card.customer}</p>
                    <p className="flex gap-1 items-center"><img src={calenderLogo} alt="calender-img" /><span className="text-[#627382] text-[14px]">{card.createdAt}</span></p>
                </div>
            </div>

        </div>
    )
}