import React from "react";
import "./Topbar.css";


// eslint-disable-next-line react/prop-types
export default function Topbar({isOpen}) {
  const moreStyle = {
    width: '15px',
    height: '15px',
    cursor: "pointer"
  };
  const bellStyle = {
    width: '30px',height: '30px',
    cursor: "pointer"
  };
  const openMenue = {
    width: '100px',
    cursor: "none"
  };

  

  return (
    <React.Fragment >
    <div className="nav-main">
    <div className="menuMsg">
      {/*<div id="meg">{isOpen != true ? <img src={'../../assets/open.png'} alt="more" style={openMenue}/> : <img src={'../../assets/close.png'} alt="more" style={openMenue}/>}
      </div>*/}
      <div id="meg">{isOpen != true ? <h3 style={openMenue}>Open Menue</h3> : <h3 style={openMenue}>Close Menue</h3>}
      </div>
     
    </div>
    <div className="top-nav">

      <div className="user-profile" >
        <div style={ {paddingRight: '20px'}}>
          <img src={'../../assets/Speech Bubble.png'} alt="more" style={bellStyle}></img>
        </div>
        <div style={ {paddingRight: '20px'}} >
          <img src={'../../assets/Alarm.png'} alt="more" style={bellStyle}></img>
        </div>
        <img src={'../../assets/user.png'} alt="User Avatar"></img>
        <div className="name-nav">
          <div><h3>John Doe Anderson</h3></div>
         <div>Admin</div>
        </div>
        <div style={ {padding: '10px'}}>
          <img src={'../../assets/Sort Down.png'} alt="more" style={moreStyle}></img>
        </div>
    </div>
  </div>
  </div>
  </React.Fragment>
  );
}
