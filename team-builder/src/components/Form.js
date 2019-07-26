import React, { useState, useEffect } from 'react';

const Form= ({
    members,
    addToMembers,
    idCount,
    setIdCount,
    memberToEdit,
    isEditing,
    editFalse,
    }) => {
        const [member, setMember] = useState({ name: "", email: "", role: "", imgUrl: ""});

        const inputHandler = event => {
            setMember({...member,[event.target.name]: event.target.value});
        };

        const submitHandler = event => {
            event.preventDefault();
            addToMembers(member);
            setIdCount(idCount + 1);
            setMember({ name: "", email: "", role: "", imgUrl: ""})
        }

        const editHandler = event => {
            event.preventDefault();
            let copy = members;
            let i = member.id -1;
            copy.splice(i,1,member);
            addToMembers(copy);
            setMember({ name: "", email: "", role: "", imgUrl: ""});
            editFalse();
        };

        useEffect(() => {
            if (isEditing) {
              const member2Edit = members.filter(
                member => member.id === memberToEdit
              )[0];
              setMember(member2Edit);
            }
          }, [isEditing, members, memberToEdit]);



          return (
            <form onSubmit={isEditing ? editHandler : submitHandler}>
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
                        value={member.name}
                        onChange={inputHandler}
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
                    value={member.email}
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleRole1">Role</label>
                  <input
                    type="role"
                    className="form-control"
                    name="role"
                    placeholder="Role"
                    onChange={inputHandler}
                    value={member.role}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleImgUrl1.com">Image</label>
                  <input
                    type="imageUrl"
                    className="form-control"
                    name="imgUrl"
                    placeholder="Image URL"
                    onChange={inputHandler}
                    value={member.imgUrl}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </fieldset>
            </form>
          );

    }

    export default Form;
  

      

