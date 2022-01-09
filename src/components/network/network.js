import React, { useState } from "react";
import axios from "axios";
import "./network.css";

function Network() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [mentors, setMentors] = useState([]);
  const [uniM, setUniM] = useState([]);
  const [companyM, setCompanyM] = useState([]);
  const [techM, setTechM] = useState([]);

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

  const getMentorsByCompany = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      setLoading(true);

      const user = JSON.parse(localStorage.getItem("userInfo"));
      const promises = [];

      user.coi.map((c) => {
        promises.push(
          axios.get(
            "http://localhost:5000/api/users/mentor/company/" + c,
            config
          )
        );
      });

      var allData = [];

      Promise.all(promises).then((res) => {
        res.map((d) => {
          allData = [...allData, ...d.data];
          setCompanyM(allData);
        });
      });
    } catch (err) {
      console.log("Error getting users" + err);
    }

    setLoading(false);
  };

  const getMentorsByUni = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      setLoading(true);

      const user = JSON.parse(localStorage.getItem("userInfo"));
      const { data } = await axios.get(
        "http://localhost:5000/api/users/mentor/uni/" + user.university,
        config
      );
      setUniM(data);
    } catch (err) {
      console.log("Error getting users" + err);
    }

    setLoading(false);
  };

  const getMentorsByTechstack = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      setLoading(true);

      const user = JSON.parse(localStorage.getItem("userInfo"));
      const promises = [];

      user.techstack.map((c) => {
        promises.push(
          axios.get(
            "http://localhost:5000/api/users/mentor/techstack/" + c,
            config
          )
        );

        console.log("techstack", c);
      });

      var allTech = [];

      Promise.all(promises).then((res) => {
        res.map((d) => {
          const exists = allTech.some((v) => v.email === d.data.email);
          if (!exists) {
            allTech = d.data;
          }
          setTechM(allTech);
        });
      });
    } catch (err) {
      console.log("Error getting users" + err);
    }

    setLoading(false);
  };

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInfo")));
    getMentors();
    getMentorsByUni();
    getMentorsByCompany();
    getMentorsByTechstack();
  }, []);

  return (
    <div className="networkContainer">
      <h1>Welcome back, {user["name"]}</h1>
      {loading && <h1>Loading...</h1>}

      <h2>Your top mentor matches:</h2>
      <div className="topMentorContainer">
        {mentors.map((m) => {
          return (
            <div className="profile" key={m.email}>
              <h2>{m.name}</h2>
              <div>
                works at <b>{m.company}</b>
              </div>
              <div>
                went to <b>{m.university}</b>
              </div>
              <div>
                is interested in{" "}
                <b>
                  <ul>
                    {m.techstack.map((t) => {
                      return <li>{t}</li>;
                    })}
                  </ul>
                </b>
              </div>
            </div>
          );
        })}
      </div>

      <h2>Mentors that ...</h2>
      <div className="mentorContainer">
        <div className="companyContainer">
          <h2>... work at your dream company!</h2>
          {companyM.map((d) => {
            return (
              <div className="profile" key={d.email}>
                <h2>{d.name}</h2>
                <div>
                  works at <b>{d.company}</b>
                </div>
              </div>
            );
          })}
        </div>

        <div className="uniContainer">
          <h2>... went to the same school as you!</h2>
          {uniM.map((d) => {
            return (
              <div className="profile" key={d.email}>
                <h2>{d.name}</h2>
                <div>
                  went to <b>{d.university}</b>
                </div>
              </div>
            );
          })}
        </div>
        <div className="techContainer">
          <h2>... are interested in the same tech as you!</h2>
          {techM.map((d) => {
            return (
              <div className="profile" key={d.email}>
                <h2>{d.name}</h2>
                <div>
                  is interested in{" "}
                  <b>
                    <ul>
                      {d.techstack.map((t) => {
                        return <li>{t}</li>;
                      })}
                    </ul>
                  </b>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Network;
