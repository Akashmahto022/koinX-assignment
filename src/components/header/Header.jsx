import React,{useState} from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
    <Link to='/'>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ww5aYn5_3C8Kc9dj0hlvQnHdpdSWl_WDEc976bLSWu2P4Mj7xAESLMsRW86q36PxKA&usqp=CAU"} alt="" />
    </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          Crypto Taxes
        </li>
        <li>
          Free Tools
        </li>
        <li>
          Resource Center
        </li>
      <button className='bg-blue-700 px-6 p-2 text-lg text-white rounded-md'>Get Start</button>
      </ul>
    </nav>
  );
}

export default Header
