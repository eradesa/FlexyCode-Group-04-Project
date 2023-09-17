// eslint-disable-next-line no-unused-vars
import React from "react";
import './Coursepage.css'
import './Option.css'
//import Options from "../Options/Options";
//import Details from "../Details/Details";


import icon1 from '../../grp4med/grp4.png';

const Coursepage = () => {

  return (
    <div className='container-c'>
      <div className='secContainer grid'>
        
          

          <div className="title-section">
            <h3>All Courses</h3>
            <h4>Home &gt; Courses &gt; All Courses</h4>
          </div>

          <div className='courses-detail-section'>
            <div className='singlePortifolio'>
              <div className='image-section'>
                <img className='iconDiv' src={icon1} alt='Icon image' />
                <h6>Why is Early Education Essential</h6>
                <div>
                   {/* <Details/>*/}
                </div>
              </div>

              <div className='dsc-section'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry &apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  <br/>
                  <br/>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  <br/>
                  <br/>
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the bliss of souls like mine.I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
                  <br/>
                  <br/>
                  A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.
                </p>
              </div>
            </div>
            <div className='additional-details'>

              <div className='about-sec'>
                <div><h5>About Course</h5></div>
                <div style={{marginBottom:"15px"}}><p>Lorem Ipsum is simply dummy text of the printing and.</p></div>
                <div style={{display:"flex", justifyContent:"space-between", alignItems: "center" }}>
                  <h6>Duration</h6>
                  <p>3 Years</p>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", alignItems: "center" }}>
                  <h6>Professor</h6>
                  <p>Jimmy Morris</p>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", alignItems: "center" }}>
                  <h6>Course Fee</h6>
                  <p>$ 1500</p>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", alignItems: "center" }}>
                  <h6>Commencement</h6>
                  <p>27th October 2023</p>
                </div>
              </div>

              <div className='op-section'>
                <div className="option_container">
                  <h4 className="option_header">Our Courses</h4>
                  
                  <div>
                    <button style={{cursor:"pointer"}} className="option_button">Computer</button>
                    <button style={{cursor:"pointer"}} className="option_button">Programming</button>
                    <button style={{cursor:"pointer"}} className="option_button">Photoshop</button>
                    <button style={{cursor:"pointer"}} className="option_button">Management</button>
                  </div>

                  <h4 className="option_header">Language</h4>
                  <div className="option_language">
                    <p className="language_content">English</p>
                    <p className="language_content">French</p>
                    <p className="language_content">Bangla</p>
                  </div>

                  <div className="below">
                    <button style={{cursor:"pointer"}} className="option_belowbutton">Add Quiz</button>
                    <button style={{cursor:"pointer"}} className="option_belowbutton">Add Materials</button>
                  </div>
                </div>
              </div>





            </div>
          </div>
          {/*<Options />*/}
        
        {/* <div className='rightContent'>
        <img src={image} alt='Image'/>
      </div>*/}
      </div>
    </div>
  );
};


export default Coursepage


