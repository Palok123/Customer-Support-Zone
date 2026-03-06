import fbLogo from "../../assets/fi_5968764.png";
import linkDinLogo from "../../assets/fi_145807.png";
import desLogo from "../../assets/fi_6244710.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
export default function FooterSection(){
    return (
        <footer className="bg-black ">
             <div className="w-[95%] mx-auto py-8 text-white grid grid-cols-5 max-sm:grid-cols-1 gap-4 ">
                <div >
                    <h3 className="text-2xl font-bold mb-3">CS — Ticket System</h3>
                    <p className="text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="ml-8 max-sm:ml-0">
                  <h3 className="text-[20px] font-medium mb-3">Company</h3>
                   <ul className="text-[16px] flex flex-col gap-3">
                    <li>About Us</li>
                    <li>Our Mission</li>
                    <li>Contact Saled</li>
                   </ul>
                </div>
                <div>
                  <h3 className="text-[20px] font-medium mb-3">Services</h3>
                  <ul className="text-[16px] flex flex-col gap-3">
                    <li>Products & Services</li>
                    <li>Customer Stories</li>
                    <li>Download Apps</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[20px] font-medium mb-3">Information</h3>
                  <ul className="text-[16px] flex flex-col gap-3">
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Join Us</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[20px] font-medium mb-3">Social Links</h3>
                  <ul className="text-[16px] flex flex-col gap-3">
                    <li><FontAwesomeIcon icon={faXTwitter} className="text-[10px] mr-1 bg-white text-black rounded-[50%] p-1"></FontAwesomeIcon>@CS — Ticket System</li>
                    <li className="flex gap-2 items-center"><img src={linkDinLogo} className="w-[20px] h-[20px]" /> @CS — Ticket System</li>
                    <li className="flex gap-2 items-center"><img src={fbLogo} className="w-[20px] h-[20px]" /> @CS — Ticket System</li>
                    <li className="flex gap-2 items-center"><img src={desLogo} className="w-[20px] h-[20px]" /> support@cst.com</li>
                  </ul>
                </div>
             </div>
           </footer>
    )
}