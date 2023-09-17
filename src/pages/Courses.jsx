import React from 'react';
import Header from '../components/global/MessageHeader';
import Coursepage from '../components/Coursepage/Coursepage';
//import Options from "../components/Options/Options";


// eslint-disable-next-line react/prop-types
const Comment = ({isDarkMode}) => {
    return (
        <React.Fragment>
            <Header isDarkMode={isDarkMode} title="Courses" subtitle="" />
            
                <Coursepage />
                {/* <Details/> */}
                {/*<Options />*/}
            
          
        </React.Fragment>
      );
    };

export default Comment;