export default function Navbar() {

    return (
         <nav className="bg-white flex justify-between items-center p-4 ">
                <p className="font-bold text-2xl ">CS — Ticket System</p>
                <div className="flex gap-8 items-center">
                  <ul className="flex gap-8 items-center text-[16px] text-[#00000090] max-sm:hidden">
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Changelog</li>
                    <li>Blog</li>
                    <li>Download</li>
                    <li>Contact</li>
                  </ul>
                  <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md">+ New Ticket</button>
                </div>
            </nav>
    )



}