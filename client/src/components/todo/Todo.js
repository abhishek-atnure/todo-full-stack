import React, { useState } from "react";
import "./todo.css";
import Modal from "react-modal";

export default function Todo({ todo, user_id }) {
  const [description, setDescription] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpen = () => {
    setModalIsOpen(true);
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  const editTodos = async (todo_id) => {
    const body = { description, todo_id };
    const response = await fetch(`/api/todo/${user_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    await response.json();
  };

  const deleteTodo = async (todo_id) => {
    try {
      console.log(todo_id);
      const response = await fetch(`/api/todo/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo_id,
          user_id,
        }),
      });

      const data = await response.json();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="todo-content">
      <p>{todo.description}</p>
      <span>due on {new Date(todo.due_date).toISOString().slice(0, 10)}</span>
      <div className="todo-btns">
        <button
          id="edit-btn"
          onClick={() => {
            modalOpen();
          }}
        >
          Edit
        </button>
        <button id="delete-btn" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>

        {/*modal content */}

        <div className="modal">
          <Modal
            style={{
              overlay: {
                position: "fixed",
                inset: "0px",

                "backdrop-filter": "blur(6px)",
              },
              content: {
                position: "none",
                margin: "150px auto",
                inset: "22%",
                border: "1px solid black",
                background: "white",
                overflow: "auto",
                outline: "none",
                padding: "40px",
                width: "70%",
                "backdrop-filter": "blur(10px)",
                height: "41vh",
              },
            }}
            isOpen={modalIsOpen}
          >
            <div className="modal-content">
              <h3>Edit todo</h3>
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => handleChange(e)}
                required
              ></input>

              <div className="modal-btn-div">
                <button
                  id="modal-btn"
                  onClick={() => {
                    setModalIsOpen(false);
                    editTodos(todo.id);
                  }}
                >
                  {" "}
                  Save Changes
                </button>

                <button id="modal-btn" onClick={() => setModalIsOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
