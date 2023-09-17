/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import './Sidebar.css'
import {
    FaBars,
    /*FaTh,    
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList*/
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = (props) => {
    // isDarkMode and isOpen props sent from child to parent
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => {
        setIsOpen (!isOpen);
        props.sendDataToParentOpen(!isOpen);
    }
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:'../../assets/Control-Panel.png'            
        },
        {
            path:"/students",
            name:"Students",
            icon:'../../assets/Students.png'/*<FaUserAlt/>*/
        },
        {
            path:"/courses",
            name:"Courses",
            icon:'../../assets/E-Learning.png'/*<FaRegChartBar/>*/
        },
        {
            path:"/instructors",
            name:"Instructors",
            icon:'../../assets/Online-Group-Studying.png'/*<FaCommentAlt/>*/
        },
        {
            path:"/announcements",
            name:"Announcements",
            icon:'../../assets/Commercial.png'/*<FaShoppingBag/>*/
        },
        {
            path:"/users",
            name:"Users",
            icon:'../../assets/Users.png'/*<FaThList/>*/
        },
        {
            path:"/permissions",
            name:"Role Permissions",
            icon:'../../assets/Diploma.png'/*<FaThList/>*/
        }
    ]

    const hrStyle = {
        width: '75%', // Set the desired width
        height: '1px', // Set the desired height
        backgroundColor: '#D3D3D3', // Set the desired color
        margin:"auto"
    }
   
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    props.sendDataToParent(!isDarkMode);
  };

  

    
    return (
        
        <React.Fragment>
           
           <div style={{width: isOpen ? "285px" : "50px"}}  className={isDarkMode ? 'sidebar-dark-mode' : 'sidebar'}>
               <div className="top_section">
               
               
              
                   <div style={{marginLeft: isOpen ? "70%" : "10px",cursor: "pointer"}} className="bars" >
                       <FaBars size={25} color="#ADD6FF" onClick={toggle}/>
                    </div>
                        <div>
                            <NavLink to={"/"}>
                                <img alt="logo" src={`../../assets/logo.png`}
                                style={{ cursor: "pointer",display: isOpen ? "block" : "none" }}  className="logo"
                                />
                            </NavLink>
                            
                            <hr style={hrStyle} />
                        </div>
               
               
               </div>
               <div className="bottom_section">  
                    {
                        menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link">
                            
                                <div className="icon" activeclassName="active" onClick={isOpen ? "none" : toggle}>
                                    <img src={item.icon}></img>
                                </div>                             
                                
                                <div style={{display: isOpen ? "block" : "none"}} className="link_text" activeclassName="active" >{item.name}</div>
                               
                            </NavLink>
                        ))
                    }
                </div>
                
                <div style={{display:"flex",alignItems: "center"}}>
                <p style={{fontSize:"16px", marginLeft:"50px", marginRight:"15px", color:"#ADD6FF", fontWeight:"bolder", fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Dark Mode</p>
                    <label class="switch">
                        <input checked={isDarkMode} onChange={toggleMode} type="checkbox"></input>

                        <span class="slider round"></span>
                        
                    </label>
                    
               </div>
           </div>
           {/*<div>{children}</div>*/}
        </React.Fragment>
    );
};

export default Sidebar;