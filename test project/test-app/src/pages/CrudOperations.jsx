import { useState } from "react";
import "../css/CrudOperations.css";
import Form from "../components/Form";

function CrudOperations() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [userdata, setuserdata] = useState([]);
  const [formmode, setformmode] = useState(null); // null | "create" | "update"
  const [editingId, seteditingId] = useState(null);

  function openCreateForm() {
    setformmode("create");
    seteditingId(null);
    setname("");
    setage("");
  }

  function openUpdateForm(user) {
    setformmode("update");
    seteditingId(user.id);
    setname(user.name);
    setage(user.age);
  }

  function closeForm() {
    setformmode(null);
    seteditingId(null);
    setname("");
    setage("");
  }

  function handleCreate(e) {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/user/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, age: age }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        closeForm();
        handleRead();
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  }

  function handleUpdate(e) {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/user/update/${editingId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, age: age }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        closeForm();
        handleRead();
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  }

  function handleRead() {
    fetch("http://127.0.0.1:8000/api/user/details/")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setuserdata(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }

  function handleDelete(e, user_id) {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/user/delete/${user_id}/`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        handleRead();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  }

  return (
    <div className="crud-container">
      <h1 className="crud-title">CRUD Operations</h1>

      {/* Show form for both Create and Update */}
      {formmode && (
        <Form
          title={formmode === "create" ? "Create User" : "Update User"}
          name={name}
          setname={setname}
          age={age}
          setage={setage}
          onSubmit={formmode === "create" ? handleCreate : handleUpdate}
          onCancel={closeForm}
          submitLabel={formmode === "create" ? "Create" : "Update"}
        />
      )}

      <div className="crud-actions">
        <button type="button" className="btn btn-create" onClick={openCreateForm}>
          + Create User
        </button>
        <button type="button" className="btn btn-read" onClick={handleRead}>
          Show Users
        </button>
      </div>

      <div className="user-list">
        {userdata.length > 0 && <h3 className="list-title">Users</h3>}
        <ul>
          {userdata.map((user) => (
            <li key={user.id} className="user-card">
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-age">Age: {user.age}</span>
              </div>
              <div className="user-actions">
                <button
                  type="button"
                  className="btn btn-edit"
                  onClick={() => openUpdateForm(user)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-delete"
                  onClick={(e) => handleDelete(e, user.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CrudOperations;
