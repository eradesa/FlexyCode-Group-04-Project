import React from 'react';
import Header from '../components/global/MessageHeader';
import './Dashboard.css'


// eslint-disable-next-line react/prop-types
const Dashboard = ({isDarkMode}) => {
  return (
    <React.Fragment>
      <Header isDarkMode={isDarkMode} title="Well Come Back, John Doe Anderson" subtitle="Hear's your Dashboard" />
      <div className="row1">
        <div className="column1">
          <div className="card">
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
           
          </div>
        </div>

        <div className="column1">
          <div className="card">
            <h3>Card 2</h3>
            <p>Some text</p>
            <p>Some text</p>
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column1">
          <div className="card">
            <h3>Card 3</h3>
            <p>Some text</p>
            <p>Some text</p>
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="column2">
          <div className="card">
            <h3>Card 4</h3>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column3">
          <div className="card">
            <h3>Card 5</h3>
            <p>Some text</p>
            <p>Some text</p><p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
            <p>Some text</p>
           
          </div>
        </div>
      </div>
    
  </React.Fragment>
  );
};

export default Dashboard;
