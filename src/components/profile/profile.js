import React, { useState, useEffect } from "react";
import "./profile.css";
import { Person } from "@material-ui/icons";

export default function Profile() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInfo")));
    setLoading(false);
  }, []);

  return (
    <div className="profileContainer">
      <span className="title">Profile</span>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="welcomeWrapper">
            <span className="title">
              Welcome back, <b>{user.name}</b>
            </span>
            <button className="button">
              <Person className="icon" />
            </button>
          </div>
          <div className="detailsContainer">
            <div className="profileInfo">
              <span className="desc">
                <b>Companies of interest:</b>
                <ul className="interests">
                  {user.coi.map((t) => {
                    return <li>{t}</li>;
                  })}
                </ul>
              </span>
              <span className="desc">
                <b>School:</b> {user.university}
              </span>
              <span className="desc">
                <b>Tech of interest:</b>
                <ul className="interests">
                  {user.techstack.map((t) => {
                    return <li>{t}</li>;
                  })}
                </ul>
              </span>
            </div>
            <div className="buttonsWrapper">
              <button className="button">
                <span className="title">Edit details</span>
              </button>
              <button className="button">
                <span className="title">Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
