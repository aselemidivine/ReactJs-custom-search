import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


const TheirMessage = ({ lastMessge, message }) => {
  const isFirstMessageByUser = !lastMessge || lastMessge.sender.username !== message.sender.username; 
  return (
      <div className='message-row'>
          {isFirstMessageByUser && (
            <div
              className='message-avatar'
              style={{backgroungImage:`url(${message?.sender?.avatar})`}}
            />
          )}
            {message?.attacment?.length > 0 
                ? (
                    <img
                      src={message.attacment[0].file}
                      alt = "message-attachment"
                      className='message-image'
                      style={{marginLeft:isFirstMessageByUser ? "4px" : "48px" }} 
                    />
                ) : (
                  <div className='message' style={{float:"left", backgroundColour:"#CABCDC", marginLeft:isFirstMessageByUser ? "4px" : "48px" }}>
                      {message.text} 
                  </div>
                )
            } 
      </div>
  );


}

export default TheirMessage