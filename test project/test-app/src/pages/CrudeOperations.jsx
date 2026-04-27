import { useState } from "react";

function CrudeOperations() {
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
    <div>
      <h1>Crude Operations</h1>

      {/* Show form for both Create and Update */}
      {formmode && (
        <div className="user-form">
          <h3>{formmode === "create" ? "Create User" : "Update User"}</h3>
          <form>
            <label>Enter your name:</label>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <label>Enter your age:</label>
            <input
              type="number"
              placeholder="age"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
            <button
              type="submit"
              onClick={formmode === "create" ? handleCreate : handleUpdate}
            >
              {formmode === "create" ? "Create" : "Update"}
            </button>
            <button type="button" onClick={closeForm}>
              Cancel
            </button>
          </form>
        </div>
      )}

      <button type="button" onClick={openCreateForm}>
        Create User
      </button>

      <div className="read-user-details">
        <button type="button" onClick={handleRead}>
          Show user details
        </button>
        <ul>
          {userdata.map((user) => (
            <li key={user.id}>
              <p>
                name = {user.name} age = {user.age}
              </p>
              <button type="button" onClick={(e) => handleDelete(e, user.id)}>
                Delete
              </button>
              <button type="button" onClick={() => openUpdateForm(user)}>
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CrudeOperations;
