import React from "react";

export default function Form(props) {
    const { formValues, change, submit } = props;
    return (
        <div>
        <form onSubmit={submit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={change}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={change}
            />
          </label>
          <label htmlFor="role">
            Role
            <select name="role" value={formValues.role} onChange={change}>
            <option value="">------select role------</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
            <option value="tl">Team Lead</option>
          </select>
            {/* <input
              type="role"
              name="role"
              value={formValues.role}
              onChange={change} */}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }