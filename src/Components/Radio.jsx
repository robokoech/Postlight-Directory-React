import React, { Component } from "react";

//The Radio component creates the two pillbox shaped radio selectors at the
//top of our app, which enable us to filter employees with ease
class Radio extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };

    this.onDepartmentChange = this.onDepartmentChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.filterSubmit = this.filterSubmit.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  onDepartmentChange(event) {
    this.setState({
      selectedDepartment: event.target.value,
    });
  }

  onTitleChange(event) {
    this.setState({
      selectedTitle: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
  }

  filterSubmit(event) {
    {
      this.props.onFilter(
        this.state.selectedTitle,
        this.state.selectedDepartment
      );
    }
  }

  // sets both radio selectors back to normal
  resetFilter(event) {
    var ele = document.getElementsByName("title-group");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var elem = document.getElementsByName("department-group");
    for (var i = 0; i < elem.length; i++) elem[i].checked = false;

    this.setState({
      selectedTitle: undefined,
    });
    this.setState({
      selectedDepartment: undefined,
    });
    {
      this.props.onReset();
    }
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio-pillbox">
          <radiogroup className="radio">
            
            <div>
              <label
                className="Marketing"
                for="Marketing"
                className="radio-label">
                <input
                  onChange={this.onDepartmentChange}
                  type="radio"
                  name="department-group"
                  value="Marketing"
                  className="first"
                />
              </label>
              <p>Marketing</p>
            </div>

            <div>
              <label for="Operations">
                <input
                  onChange={this.onDepartmentChange}
                  type="radio"
                  name="department-group"
                  value="Operations"
                />
              </label>
              <p>Operations</p>
            </div>

            <div>
              <label for="Finance">
                <input
                  onChange={this.onDepartmentChange}
                  type="radio"
                  name="department-group"
                  value="Finance"
                />
              </label>
              <p>Finance</p>
            </div>

            <div>
              <label for="Engineering">
                <input
                  onChange={this.onDepartmentChange}
                  type="radio"
                  name="department-group"
                  value="Engineering"
                />
              </label>
              <p>Engineering</p>
            </div>
            <div>
              <label for="HR">
                <input
                  onChange={this.onDepartmentChange}
                  type="radio"
                  name="department-group"
                  value="HR"
                />
              </label>
              <p>HR</p>
            </div>
            <div>
              <label for="Other">
                <input
                  onChange={this.onDepartmentChange}
                  type="radio"
                  name="department-group"
                  value="Other"
                  className="last"
                />
              </label>
              <p>Other</p>
            </div>
          </radiogroup>
        </div>

{/* Radio Selector for employee title */}
        <div className="radio-Titlebox">
          <radiogroup>
            <div>
              <label for="Associate" className="radio-label">
                <input
                  onChange={this.onTitleChange}
                  type="radio"
                  name="title-group"
                  id="Associate"
                  value="Associate"
                  className="first"
                />
              </label>
              <p>Associate</p>
            </div>
            <div>
              <label for="Contractor">
                <input
                  onChange={this.onTitleChange}
                  type="radio"
                  name="title-group"
                  id="Contractor"
                  value="Contractor"
                />
              </label>
              <p>Contractor</p>
            </div>

            <div>
              <label for="Manager">
                <input
                  onChange={this.onTitleChange}
                  type="radio"
                  name="title-group"
                  id="Manager"
                  value="Manager"
                />
              </label>
              <p>Manager</p>
            </div>

            <div>
              <label for="Director">
                <input
                  onChange={this.onTitleChange}
                  type="radio"
                  name="title-group"
                  id="Director"
                  value="Director"
                />
              </label>
              <p>Director</p>
            </div>

            <div>
              <label for="Vice President">
                <input
                  onChange={this.onTitleChange}
                  type="radio"
                  name="title-group"
                  id="Vice President"
                  value="Vice President"
                />
              </label>
              <p>Vice President</p>
            </div>
            <div>
              <label for="CEO">
                <input
                  onChange={this.onTitleChange}
                  type="radio"
                  name="title-group"
                  id="CEO"
                  value="CEO"
                  className="last"
                />
              </label>
              <p>CEO</p>
            </div>
          </radiogroup>
        </div>

{/* Here we are enabling a real time badge that shows which department/title is selected on the filter */} 
        <div>
          <p className="DepartmentShifter">
            <span class="customBadge badge badge-light">Department: </span>{" "}
            <span class=" departmentBadge badge badge-pill ">
              {this.state.selectedDepartment}
            </span>
          </p>
          <p className="TitleShifter">
            {" "}
            <span class="customBadge badge badge-light">Title:</span>{" "}
            <span class="titleBadge badge ">{this.state.selectedTitle}</span>{" "}
          </p>

     {/* The following buttons search and reset the filter respectively  */}
          <button
            className="resetButtonShifter  btn-lg btn btn-outline-secondary"
            onClick={this.resetFilter}>
            Reset Filter{" "}
          </button>

          <button
            className="submitButtonShifter btn-lg btn btn-info"
            onClick={this.filterSubmit}
            type="submit">
            Search Directory
          </button>

        </div>
      </form>
    );
  }
}

export default Radio;
