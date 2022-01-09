import React, { useState, useEffect } from "react";
import "./upcomingInterviewWidget.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UpcomingInterviewWidget() {
  const Button = ({ type }) => {
    return <button className={"button " + type}>{type}</button>;
  };

  const [applications, setApplications] = useState([]);

  const getAllApplications = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const { data } = await axios.get(
        "http://localhost:5000/api/dashboard",
        {},
        config
      );

      console.log(data);

      setApplications(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllApplications();
  }, []);

  return (
    <div className="upcomingInterviewWidget">
      <h3 className="interviewTitle">Upcoming Interview</h3>
      <Link to="/personalJobDashBoard" className="sidebarLink">
        <table className="interviewTable">
          <tr className="interviewRow">
            <th className="interviewTableHeader">Role</th>
            <th className="interviewTableHeader">Date</th>
            <th className="interviewTableHeader">Company</th>
            <th className="interviewTableHeader">Status</th>
          </tr>

          {applications.map((a) => {
            return (
              <tr className="interviewRow">
                <td className="job">
                  <img alt="" src></img>
                  <span className="interviewRole">{a.jobTitle}</span>
                </td>
                <td className="interviewDate">{a.dateApplied}</td>
                <td className="interviewCompany">{a.company}</td>
                <td className="status">
                  {" "}
                  <Button type={a.stage} />
                </td>
              </tr>
            );
          })}
        </table>
      </Link>
    </div>
  );
}
