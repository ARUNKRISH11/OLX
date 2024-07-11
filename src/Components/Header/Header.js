import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Store/Context';
import { auth } from '../../Firebase/config';
function Header() {

// <------- Hooks and Variables ------->
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)

  const handleLogout=()=>{
    auth.signOut()
    alert('Logout Successful')
    navigate('/login')
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div onClick={()=> navigate('/login')} className="loginPage">
          <span>{user ? `Welcome ${user.displayName}` : 'Login'}</span>
          <hr />
        </div>
        <div onClick={handleLogout} className="logoutPage">
          <span>{ user && 'Logout'} </span>
          <hr />
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=> navigate('/sell')}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
