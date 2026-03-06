import { use, useState } from "react"
import Card from "../Card/Card.jsx";
export default function AllCard({dataPromise,setCurrentTskCnt,completeTskCnt,setCompleteTskCnt}) {

    const cardsData = use(dataPromise);
    const [addTask, setAddTask] = useState([]);
    const [completeTask, setCompleteTask] = useState([]);

    const handleAddTask = (task)=>{
        const updatedTask = [...addTask,task];
        setAddTask(updatedTask);
        
        setCurrentTskCnt(addTask.length+1);
    }
    const handleCompleteTask = (task)=>{
        const updatedCompleteTask = [...completeTask,task];
        setCompleteTask(updatedCompleteTask);
        const updatedAddTask = addTask.filter(t=>t.id !== task.id);
        setAddTask(updatedAddTask);
        setCompleteTskCnt(completeTskCnt + 1);
        setCurrentTskCnt(addTask.length-1);

    }

return (
    <div className="flex max-sm:flex-col gap-[5%] mt-15">
        
        <div className="w-[70%] max-sm:w-[100%]">
        <h2 className="text-[24px] font-semibold mb-4 ">Customer Tickets</h2>
         <div className=" grid grid-cols-2 max-sm:grid-cols-1  gap-5">
                {
                    cardsData.map((card)=><Card key={card.id} card={card} handleAddTask={handleAddTask}  ></Card>)
                }
         </div>
         </div>
         <div className="w-[30%] max-sm:w-[100%] mt-5 max-sm:mt-10">
                <h2 className="text-[24px] text-[#34485A] font-semibold mb-4 ">Task Status</h2>
                <div>
                    {
                        addTask.length===0 && <p className="text-[#627382] mb-4">Select a ticket to add to Task Status</p>
              }   
                     
                     {
                        addTask.map((task)=><div key={task.id} className="p-4 shadow-md rounded-lg mb-2">
                            <h3 className="text-[18px] font-medium mb-2">{task.title}</h3>
                            <button className="w-full bg-[#02A53B] rounded-md text-white text-center py-2" onClick={() => handleCompleteTask(task)}>Complete</button>
                        </div>)
                     }
                
                </div>
                <div>
                    <h3 className="text-[24px] text-[#34485A] font-semibold mb-4 ">Resolved Task</h3>
                  {
                        completeTask.length===0 && <p className="text-[#627382]">No resolved tasks yet.</p>
                  }
                    {
                        completeTask.map((task)=><div key={task.id} className="p-4 shadow-md rounded-lg mb-2 bg-[#E0E7FF]">
                            <h3 className="text-[18px] text-[#001931] font-medium mb-2">{task.title}</h3>
                        </div>)
                    }
                </div>
         </div>
    </div>
)

}