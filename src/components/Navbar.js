import {Link,NavLink, Outlet} from 'react-router-dom';

function Navbar(){
    return(
        <>
        <div className='nav'>
            <NavLink
             style={({isActive})=>(isActive ? {color: 'blue'} : undefined)}
            to="/">
                <h4>HOME</h4>
            </NavLink>

            <NavLink 
            style={({isActive})=>(isActive ? {color: 'blue'} : undefined)}
            to="/root/about">
                <h4>ABOUT</h4>
            </NavLink>

            <NavLink
            style={({isActive})=>(isActive ? {color: 'blue'} : undefined)}
            to="/root/items">
                <h4>ITEMS</h4>
            </NavLink>
        </div>
        <Outlet/>
        </>
        
    )
}

export default Navbar;
