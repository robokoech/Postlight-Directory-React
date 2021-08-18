import React, { useEffect, useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Radio from "./Radio";
import firebase from "../util/firebase";

function App() {

  // 'notes' denote the reusable employee card components
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const employeeRef = firebase.database().ref("Employee");
    employeeRef.on("value", (snapshot) => {
      const directory = snapshot.val();
      const employeeArray = [];
      for (let id in directory) {
        employeeArray.push(directory[id]);
      }
      // employeeArray.reverse();
      setNotes(employeeArray);
    });
  }, []);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
  }

  //This function resets  the filter for our employee directory
  function resetDirectory() {
    const employeeRef = firebase.database().ref("Employee");
    employeeRef.on("value", (snapshot) => {
      const directory = snapshot.val();
      const employeeArray = [];
      for (let id in directory) {
        employeeArray.push(directory[id]);
      }
      // employeeArray.reverse();
      setNotes(employeeArray);
    });
  }

  //This function enables our employee filter based on either department, title or both
  function filterEmployee(Title, Department) {
    setNotes((prevNotes) => {
      if (Title === undefined && Department === undefined) {
        return prevNotes;
      }
      if (Title == undefined) {
        return prevNotes.filter(
          (employee) => employee.note.Department === Department
        );
      }
      if (Department == undefined) {
        return prevNotes.filter((employee) => employee.note.Title === Title);
      } else {
        if (Title != undefined && Department != undefined) {
          return prevNotes.filter(
            (employee) =>
              employee.note.Title === Title &&
              employee.note.Department === Department
          );
        }
      }
    });
  }

  //This function deletes a note, as of right now I have commented out the delete icon on each employee component
  // but it can be easily enabled within the note.jsx file
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Radio onFilter={filterEmployee} onReset={resetDirectory} />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          //props for displaying all the employee information passed below
          <Note
            key={index}
            id={index}
            Department={noteItem.note.Department}
            Title={noteItem.note.Title}
            Name={noteItem.note.Name}
            Location={noteItem.note.Location}
            Email={noteItem.note.Email}
            Picture={noteItem.note.Picture}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
