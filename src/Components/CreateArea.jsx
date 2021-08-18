import firebase from "../util/firebase";
import $ from "jquery";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Select from "react-select";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
var validator = require("validator");

// This component allows us to create an employee card by selecting a department & title
// along with adding a name, email and location

// The validator loosely makes sure that the entered info is not null and that the email contains '.com'
//react-Select is used for the selection menus

function CreateArea(props) {
  const DepartmentMenu = [
    { value: "Department", label: "Marketing" },
    { value: "Department", label: "Operations" },
    { value: "Department", label: "Finance" },
    { value: "Department", label: "Engineering" },
    { value: "Department", label: "HR" },
    { value: "Department", label: "Other" },
  ];
  const TitleMenu = [
    { value: "Title", label: "Associate" },
    { value: "Title", label: "Contractor" },
    { value: "Title", label: "Manager" },
    { value: "Title", label: "Director" },
    { value: "Title", label: "Vice President" },
    { value: "Title", label: "CEO" },
  ];

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    Department: "",
    Title: "",
    Name: "",
    Location: "",
    Email: "",
    Picture: "",
  });

  function handleNameChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        //here we are pulling in a letter avatar using an API, based on the first initial of the input name
        Picture:
          "https://ui-avatars.com/api/?background=random&length=1&size=128&name=" + note.Name,
      };
    });
  }

  function handleLocationChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleEmailChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleChange2(event) {
    const { value, label } = event;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [value]: label,
      };
    });
  }


  const createEmployee = () => {
    const employeeCardRef = firebase.database().ref("Employee");
    const employeeinfo = {
      note,
      complete: false,
    };
    // pushing the new employee card component to our database and resetting our state
    employeeCardRef.push(employeeinfo);
    setNote({
      Department: "",
      Title: "",
      Name: "",
      Location: "",
      Email: "",
      Picture: "",
      });
      close();
  };

  function expand() {
    setExpanded(true);
  }
  function close() {
    setExpanded(false);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <Select
            name="Department"
            onChange={handleChange2}
            placeholder={"Department"}
            options={DepartmentMenu}
          />
        )}
        {isExpanded && (
          <Select
            name="Title"
            onChange={handleChange2}
            placeholder={"Title"}
            options={TitleMenu}
          />
        )}
        {isExpanded && (
          <textarea
            name="Name"
            onClick={expand}
            onChange={handleNameChange}
            value={note.name}
            placeholder={isExpanded ? "Name (First  Last)" : ""}
            rows={isExpanded ? 1 : 0}
          />
        )}
        {isExpanded && (
          <textarea
            name="Location"
            onClick={expand}
            onChange={handleLocationChange}
            value={note.Location}
            placeholder={isExpanded ? "Location" : ""}
            rows={isExpanded ? 1 : 0}
          />
        )}

        <textarea
          id="lightText"
          name="Email"
          onClick={expand}
          onChange={handleEmailChange}
          value={note.Email}
          placeholder={isExpanded ? "Email" : "Add an Employee... "}
          rows={isExpanded ? 1 : 1}
        />

        <Zoom in={isExpanded}>
          <Fab
            onClick={
              //loosely making sure all required fields are entered
              validator.contains(note.Email, ".com") &&
              note.Name !== "" &&
              note.Location !== "" &&
              note.Department !== "" &&
              note.Title !== ""
              ? createEmployee : () => {
                    setNote((prevNote) => {
                      return {
                        ...prevNote,
                        Email: "",
                      };
                    });
                    $("#lightText").attr(
                      "placeholder",
                      "Info Incomplete, please try again!"
                    ); 
                    }}>
            
            <AddIcon />
          </Fab>
        
        </Zoom>
        <div>
          <Zoom in={isExpanded}>
            <Fab id="createNote2" onClick={close}>
              <CloseOutlinedIcon />
            </Fab>
          </Zoom>

        </div>
      </form>
    </div>
  );
}

export default CreateArea;
