import React, { useState } from "react";
import "./networkWidget.css";
import { Person } from "@material-ui/icons";
import axios from "axios";

export default function NetworkWidget() {
  const [loading, setLoading] = useState(false);
  const [mentors, setMentors] = useState([]);

  const getMentors = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      setLoading(true);

      const user = JSON.parse(localStorage.getItem("userInfo"));
      const promises = [];

      promises.push(
        axios.get(
          "http://localhost:5000/api/users/mentor/uni/" + user.university,
          config
        )
      );
      user.coi.map((c) => {
        promises.push(
          axios.get(
            "http://localhost:5000/api/users/mentor/company/" + c,
            config
          )
        );
      });
      user.techstack.map((c) => {
        promises.push(
          axios.get(
            "http://localhost:5000/api/users/mentor/techstack/" + c,
            config
          )
        );
      });

      var allData = [];

      Promise.all(promises).then((res) => {
        res.map((d) => {
          allData = [...allData, ...d.data];
        });
      });

      Promise.allSettled(promises).then((res) => {
        allData = allData.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.email === value.email)
        );
        setMentors(allData);
      });
    } catch (err) {
      console.log("Error getting users" + err);
    }

    setLoading(false);
  };

  React.useEffect(() => {
    getMentors();
  }, []);

  return (
    <div className="networkWidget">
      <span className="title">Network</span>

      <ul className="connectionList">
        {loading && <h1>Loading...</h1>}
        {mentors.map((m) => {
          return (
            <li key={m.email} className="connection">
              <div className="userInfo">
                <span className="name">{m.name}</span>
                <span className="role">
                  <b>Company:</b> {m.company}
                </span>
                <span className="role">
                  <b>School:</b> {m.university}
                </span>
                <span className="role">
                  <b>Interested in:</b>
                  <ul className="interests">
                    {m.techstack.map((t) => {
                      return <li>{t}</li>;
                    })}
                  </ul>
                </span>
              </div>
              <button className="button">
                <Person className="icon" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
