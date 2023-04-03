import React from 'react'
import {RxAvatar} from 'react-icons/rx';
import {Link, Outlet} from 'react-router-dom';
import "./Navbar.css"


// Pages : 


export default function Navbar() {
  return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}> Acceuil </Link></li>
                        <li><Link to={'/Formations'}> Formations </Link></li>
                        <li><Link> Nos projets</Link></li>
                        <li><Link> Carrires </Link></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className=""> {/*w-50 rounded-full*/}
                        <RxAvatar/>
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li><Link href="/"> Se connecter </Link></li>
                    <li><Link href="/"> S'inscrire</Link></li>
                </ul>
            </div>
            </div>
        <main>
            <Outlet/>
        </main> 
    </div>

  )
}


