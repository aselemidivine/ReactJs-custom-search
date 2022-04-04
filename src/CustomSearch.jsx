// import React from 'react';
// import Table from 'react-bootstrap/Table'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CustomSearch = ({ data }) => {

    

    // const keys = ["first_name", "last_name", "email"]

    // console.log(Users[0]["email"])
   
    // const handleSearch = (data) => {
    //     return data.filter(
    //         (item) => 
    //         keys.some(key => item[key].toLowerCase().includes(query))
            

    //     )   
    // }
//   return (
//     <div>
//       <Table responsive stripped size="md">
//           <thead>
//               <tr>
//                   <th>Name</th>
//                   <th>Surname</th>
//                   <th>Email</th>
//                   <th>Gender</th>
//               </tr>
//           </thead>
//           <tbody>
//               {
//                    data.map((item)=> (
//                     <tr key={item.id}>
//                         <td>{item.first_name}</td>
//                         <td>{item.last_name}</td>
//                         <td>{item.gender}</td>
//                         <td>{item.email}</td>
//                     </tr>
//                     ))}
//           </tbody>
//       </Table>
//     </div>
//   );
// };

// export default CustomSearch



// import React from 'react';
// import { useState } from "react";
// import Table from 'react-bootstrap/Table'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Users  from "./Users";



// function CustomSearch({data}) {

//     const [query, setQuery] = useState(""); 
//   return (
//     <div>
//       <Table>
//              <tr>
//                  <td>
//                      <input 
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
//                     <button className="btn btn-primary"> Search</button>
//                 </td>
//             </tr>
          
//         </Table>

//         <Table responsive stripped size="sm">
//            <thead>
//                <tr>
//                    <th>Name</th>
//                    <th>Surname</th>
//                    <th>Email</th>
//                </tr>
//            </thead>
//            <tbody>
//                {
//                     data.map((item) => (
//                     <tr key={item.id}>
//                         <td>{item.first_name}</td>
//                         <td>{item.last_name}</td>
//                         <td>{item.email}</td>
//                     </tr>
//                    ))}
//           </tbody>
//       </Table>
//     </div>
//   )
// }

// export default CustomSearch

function getPlanetName(id) {
  var name;
  // while using the switch cases, if there is no break statement, its always going to return the last case
  switch(id) {
    case 1:
      name = "Mercury"
      break;
      // with a break statement its always going to break and come down to the return statement and return the correct state
    case 2:
      name = "venus"
      break;
    case 3:
      name = "Earth"
      break;
    case 4:
      name = "Mars"
      break;
    case 5:
      name = "jupiter"
      break;
    case 6:
      name = "uranus"
      break;
    case 7:
      name = "pluto"
      break;
    case 7:
      name = "Saturn"
      break;
    case 7:
      name = "Neptune"
  }
  // return the correct case or name
  return name;
}

// using a modulus operator to solve an ODD and EVEN problem
// with a modulus opertor, an even number that is being divided gives us 0 because there is no remainder and an odd gives us 1

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}


import React from 'react'

const myMessage = ({message}) => {
  if(message?.attacment?.length > 0) {
    return (
      <img
        src={message.attacment[0].file}
        alt = "message-attachment"
        className='message-image'
        style={{float:"right"}} 
      />
    )
  }
  return (
    <div className='message' style={{float:"right", marginRight:"18px", color:"white", backgroundColour:"#3b2a50"}}>

      {message.text} 
    </div>
  );
}

export default myMessage;
