import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Bishnu");
  const [lastName, setLastName] = useState("Thapa");
  const [submitData, setSubmitData] = useState([]);
  const [error, setError]= useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    console.log(event)
    event.preventDefault()
  
    const formData = {firstName: firstName, lastName: lastName}
    const newArray = [...submitData, formData]
    setSubmitData(newArray)
    setFirstName("")
    setLastName("")
    setError([])
 
  }

    const listOfArray = submitData.map((data, index)=>{
      return (
        <div key={index}>
          {data.firstName} {data.lastName}
        </div> )})

  return (<>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {/* {error.length >0 ? error.map((error, index)=>{
      <p key={index} style={{color:"red"}}>{error}</p>
    }): null  } */}


    <h3>Submissions</h3>
      {listOfArray}
    </>);
}

export default Form;
