import React from "react";

export default function Form(props) {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Name
            <input type="text" name="name" />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name="email" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }