import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

// After the props are passed in via our database this component symply displays each employees information 
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  // enables each employee email to prompt an email pop up 
  let  email = "mailto:"+ props.Email;
  return (
     
    <div className="note">
      <span className="DepartmentDisplay">{props.Department}</span>
      <span className="TitleDisplay">{props.Title}</span>
      <img className="profilePicture"  src={props.Picture}></img>
      <p className="NameDisplay">{props.Name.substring(0,25)}</p>
      <span className="LocationDisplay"> 📍 {props.Location.substring(0,20)}</span>
      <p className="EmailDisplay"><a href={email}> 📨  {props.Email.substring(0,23)}</a> </p>
      
      {/* code below deletes an employee card, disabled it for simplicity */}
      {/* <button onClick={handleClick}>
        <DeleteIcon />
      </button> */}
    
    </div>
  );
  
}

export default Note;
