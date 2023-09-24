import { NavLink } from "react-router-dom";
import './navbar.css'


export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-8">
        <div>
            <img className="w-32 md:w-full" src="/logo.png"/>
        </div>
        
        <div className="flex gap-4 md:gap-8">
            <NavLink to='/'> <li className="list-none text-sm md:text-lg font-semibold"> Home </li> </NavLink>
            <NavLink to='/donation'> <li className="list-none text-sm md:text-lg font-semibold"> Donation </li> </NavLink>
            <NavLink to='/statistics'> <li className="list-none text-sm md:text-lg font-semibold"> Statistics </li> </NavLink>
        </div>
    </div>
  )
}
