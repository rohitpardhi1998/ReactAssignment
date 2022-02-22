import React from "react";
import { Table, Button } from "react-bootstrap";

function List() {
  let allList = JSON.parse(localStorage.getItem("contactlist"));

  function deleteList() {
    let validate = window.confirm("please confirm do you want to delete");
    if (validate) {
      localStorage.removeItem("contactlist");
      alert(" deleted");
    } else {
      alert("contact not deleted");
    }
  }
  return (
    <div>
      <h1 className="head">My Contact list </h1>

      {!localStorage.getItem("contactlist") ? (
        <div className="List_Page">
          <h2>No contact found </h2>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-6 m-auto p-5">
              <Table striped variant="light">
                <tbody>
                  <tr>
                    <td> Name</td>
                    <td> Phone</td>
                    <td> Action</td>
                  </tr>

                  {allList.map((contact) => (
                    <tr key={contact.name}>
                      <td>{contact.name}</td>
                      <td>{contact.mnumber}</td>
                      <td>
                        <Button onClick={deleteList}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
