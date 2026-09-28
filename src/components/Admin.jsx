
import { useState } from "react";

const API_URL =
  "https://teffect-backend.onrender.com/api/requests";


function Admin() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [requests, setRequests] = useState([]);


  const loadRequests = async () => {

    try {

      const response = await fetch(API_URL);

      const data = await response.json();

      setRequests(data);

    } catch (error) {

      console.error(error);

      alert(
        "Could not load customer requests."
      );

    }

  };


  const handleLogin = async (event) => {

    event.preventDefault();


    if (
      username !== "temitope" ||
      password !== "temitope1"
    ) {

      alert(
        "Incorrect username or password."
      );

      return;

    }


    setLoggedIn(true);

    await loadRequests();

  };


  const logout = () => {

    setLoggedIn(false);

    setUsername("");
    setPassword("");
    setRequests([]);

  };


  // =========================
  // LOGIN
  // =========================

  if (!loggedIn) {

    return (

      <div className="admin-login">

        <div className="login-box">

          <p className="admin-label">
            TEFFECT ADMIN
          </p>

          <h1>
            Admin Login
          </h1>

          <p>
            Login to manage customer footwear requests.
          </p>


          <form onSubmit={handleLogin}>

            <div className="form-group">

              <label>
                Username
              </label>

              <input
                type="text"
                value={username}
                onChange={(event) =>
                  setUsername(event.target.value)
                }
                placeholder="Enter username"
                required
              />

            </div>


            <div className="form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="Enter password"
                required
              />

            </div>


            <button type="submit">
              Login
            </button>

          </form>


          <a
            href="/"
            className="back-home"
          >
            ← Back to Website
          </a>

        </div>

      </div>

    );

  }


  // =========================
  // ADMIN DASHBOARD
  // =========================

  return (

    <div className="admin-page">

      <div className="admin-header">

        <div>

          <p className="admin-label">
            TEFFECT ADMIN
          </p>

          <h1>
            Customer Requests
          </h1>

          <p>
            Manage footwear requests from your customers.
          </p>

        </div>


        <div className="admin-actions">

          <button
            className="refresh-btn"
            onClick={loadRequests}
          >
            Refresh
          </button>


          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>


      <div className="request-count">

        <strong>
          {requests.length}
        </strong>

        <span>
          Total Requests
        </span>

      </div>


      {requests.length === 0 ? (

        <div className="empty-admin">

          <h2>
            No requests yet
          </h2>

          <p>
            Customer footwear requests will appear here.
          </p>

        </div>

      ) : (

        <div className="requests-grid">

          {requests.map((item) => (

            <div
              className="request-card"
              key={item.id}
            >

              <div className="request-top">

                <div>

                  <h2>
                    {item.name}
                  </h2>

                  <p className="request-email">
                    {item.email}
                  </p>

                </div>


                <span className="request-status">
                  {item.status}
                </span>

              </div>


              <div className="request-message">

                <span>
                  FOOTWEAR REQUEST
                </span>

                <p>
                  {item.message}
                </p>

              </div>


              <div className="request-date">

                Received:
                {" "}
                {new Date(
                  item.created_at
                ).toLocaleString()}

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default Admin;
