import React from "react";
import "./ArrayMethod.css";

export default function ArrayMethod() {
  const Student = [
    {
      name: "user",
      email: "user@gmail.com",
      phone: "1234567890",
      address: "Mangalore",
    },
    {
      name: "Aston",
      email: "aston@gmail.com",
      phone: "1234567890",
      address: "Mangalore",
    },
    {
      name: "tester",
      email: "tester@gmail.com",
      phone: "1234567890",
      address: "Mangalore",
    },
    {
      name: "people",
      email: "people@gmail.com",
      phone: "1234567890",
      address: "Mangalore",
    },
  ];

  const num = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {num.map((data) => (
        <h3>{data}</h3>
      ))}

      {/* {Student.map((studdata)=>{
        return(
            <>
            <h1>{studdata.name}</h1>
            <h1>{studdata.email}</h1>
            <h1>{studdata.phone}</h1>
            <h1>{studdata.address}</h1>
            </>
        )
      })} */}
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {Student.map((mydata) => (
            <tr>
              <td>{mydata.name}</td>
              <td>{mydata.email}</td>
              <td>{mydata.address}</td>
              <td>{mydata.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
