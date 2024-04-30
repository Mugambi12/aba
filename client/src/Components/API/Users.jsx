import React from "react";

class Users extends React.Component {
  state = {
    users: [],
    error: null,
  };

  componentDidMount() {
    fetch("/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ users: data });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        this.setState({ error: "Failed to fetch users." });
      });
  }

  render() {
    const { users, error } = this.state;

    return (
      <div>
        <h1>Users</h1>
        <p>This is a list of users.</p>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
