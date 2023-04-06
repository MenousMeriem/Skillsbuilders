// Pages : 
import React from 'react'
import {RxAvatar} from 'react-icons/rx';
import {NavLink, Outlet} from 'react-router-dom';
import "./Navbar.css"
import image from "../../assets/logo.png"

export default function Navbar() {
  return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="flex-1">
                    <figure className="image w-11 h-11"><img src={image}  alt="Shoes"/></figure>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}> Accueil </NavLink></li>
                        <li><NavLink to={'/Formations'}> Formations </NavLink></li>
                        <li><NavLink to={'/Projets'}> Nos projets</NavLink></li>
                        <li><NavLink to={'/Carriere'}> Carrires </NavLink></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className=""> {/*w-50 rounded-full*/}
                        <RxAvatar/>
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li><NavLink href="/"> Se connecter </NavLink></li>
                    <li><NavLink href="/"> S'inscrire</NavLink></li>
                </ul>
            </div>
            </div>
        <main className=''>
            <Outlet/>
        </main> 
    </div>

  )
}


