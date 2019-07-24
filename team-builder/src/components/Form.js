import React, { useState } from 'react';

export default function Form(props) {
    const [user, setUser] = useState({ name: "", email: "", role: "", imgUrl: ""});

    function handleChange(event) {
        const updatedUser = { ...user, [event.target.name]: event.target.value };
        setUser(updatedUser);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.setTeamArray([...props.teamArray, user])

        console.log("user: ", user);
      }

      return (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Add Team Member</legend>
            <div className="form-group row">
              <label for="name" className="col-sm-2 col-form-label">
                Name
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleRole1">Role</label>
              <input
                type="role"
                className="form-control"
                name="role"
                placeholder="Role"
                onChange={handleChange}
                value={user.role}
              />
            </div>
            <div className="form-group">
              <label for="exampleImgUrl1.com">Image</label>
              <input
                type="imageUrl"
                className="form-control"
                name="imgUrl"
                placeholder="Image URL"
                onChange={handleChange}
                value={user.imgUrl}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      );

}