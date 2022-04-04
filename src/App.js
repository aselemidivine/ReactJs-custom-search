// import CustomSearch from './CustomSearch';
// import Table from 'react-bootstrap/Table'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from 'react/cjs/react.production.min';


// function App() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);
//   useEffect(() =>{
//     const fetchUsers = async () => {
//       const res = await axios.get("http//localhost:5000");
//       setData(res.data);
//     };
//     fetchUsers()
//   },[])
//   return (
//     <div className="app">
      
//       <Table>
//             <tr>
//                 <td>
//                     <input 
//                     className='form-control' 
//                     type= "text" placeholder='Enter Name...' 
//                     onChange={(e)=> setQuery(e.target.value)}
//                     />
//                 </td>
//                 <td>
//                     <select className = 'form-control'>
//                         <option value='Doctor'>Select</option>
//                         <option value='Software engineer'>Doctor</option>
//                         <option value='Mechanical engineer'>Youtuber</option>
//                         <option value='Youtuber'>Mechanical engineer</option>
//                         <option value='Footballer'>Footballer</option>
//                     </select>
//                 </td>
//                 <td>
//                     <button className="btn btn-primary"
//                     //  onClick={()=> handleSearch()}
//                      >Search</button>
//                 </td>
//             </tr>
//         </Table>
//       <CustomSearch data ={data}/>
//     </div>
//   );
// }

// export default App;

const chatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats [activeChat];

    const renderReadReceipts = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div
                 key={`read{index}`}
                 className = "read-receipts"
                 style={{float: isMyMessage ? "right" : "left", backgroungImage:`url(${person?.person?.avatar})`}}
            />
        )) 

    }


    const renderMessages = () => {
        const keys = object.keys(messages);
        
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.userName;

            return (
                <div key = {`msg_${index}`} style = {{width: "100%"}}>
                    <div className = "message-block" >
                        {
                            isMyMessage 
                            ? <MyMessage message={message}/> 
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}
                            />
                        }
                        <div className = "Read-receipts" style ={{marginRight: isMyMessage ? "18px" : "0px", marginLeft: isMyMessage ? "0px" : "68px"}}>
                            {renderReadReceipts(message, isMyMessage)}

                        </div>

                    </div>

                </div>
            );

        })
    } 
    

    if(!chat) return "loading";

    return (
        <div className="chat-feed">
            <div className="chat-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle"> 
                    {chat.people.map((person) => ` ${person.person.username}` )}
                </div>
            </div>
            {/* dynamic logic to call the renderMessages logic */}
             {renderMessages()}
             <div style={{height: '100px'}}/>
             <div className="message-form-container"></div>
                <messageForm {...props} chadId={activeChat} />
        </div>
    );
}

export default chatFeed;


