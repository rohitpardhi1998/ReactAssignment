import React from "react";
import { Table, Button } from "react-bootstrap";

function EditContact() {
  let allList = JSON.parse(localStorage.getItem("contactlist"));

  return (
    <div>
      <h1 className="head">EditContact list </h1>
      {!localStorage.getItem("contactlist") ? (
        <h1> Nothing to edit </h1>
      ) : (
        <>
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
                          <Button>Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div>
            <h1>Update Contact</h1>
            {allList.map((item) => (
              <>
                <input type="text" defaultValue={item.name} />
                <br /> <br />
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default EditContact;
