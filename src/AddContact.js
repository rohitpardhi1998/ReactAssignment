import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function AddContact() {
  const [contactlist, setContactlist] = useState(getDataFromLS());

  const [name, setName] = useState("");
  const [mnumber, setMnumber] = useState("");

  function getDataFromLS() {
    const data = localStorage.getItem("contactlist");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  function handleAddContact(e) {
    e.preventDefault();
    let mylist = {
      name: name,
      mnumber: mnumber,
    };

    setContactlist([...contactlist, mylist]);
    setName("");
    setMnumber("");
  }

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("contactlist", JSON.stringify(contactlist));
  }, [contactlist]);

  return (
    <div>
      <h1>AddContact Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 offset-sm-4 m-auto p-5">
            <form
              autoComplete="off"
              className="form-group"
              onSubmit={handleAddContact}
            >
              <input
                type="text"
                placeholder="Type Full Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br /> <br />
              <input
                type="number"
                placeholder="Type Mobile Number"
                className="form-control"
                value={mnumber}
                onChange={(e) => setMnumber(e.target.value)}
              />
              <br /> <br />
              <Button type="submit">Add Contact</Button>
              <br /> <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
