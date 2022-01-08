import { nanoid } from "nanoid";
import "./personalJobDashboard.css";
import ReadOnlyRow from "./dashboardComponents/ReadOnlyRow";
import EditableRow from "./dashboardComponents/EditableRow";
import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";


function PersonalJobDashBoard(){
  const [applications, setApplications] = useState([]);
  const [addFormData, setAddFormData] = useState({
    jobTitle: "",
    company: "",
    dateApplied: "",
    stage: "",
    jobPosting: "",
  });

  const [editFormData, setEditFormData] = useState({
    jobTitle: "",
    company: "",
    dateApplied: "",
    stage: "",
    jobPosting: "",
  });

  const [editApplicationId, setEditApplicationId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  useEffect(() => {
    getAllApplications();
  }, []);

  const getAllApplications = async() => {
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
  }

  const handleAddFormSubmit = async(e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      console.log(addFormData.jobTitle);
      const { data } = await axios.post(
        "http://localhost:5000/api/dashboard",
        {
          jobTitle: addFormData.jobTitle,
          company: addFormData.company,
          dateApplied: addFormData.dateApplied,
          stage: addFormData.stage,
          jobPosting: addFormData.jobPosting,
        },
        config
      );

      setApplications([...applications, data]);

    } catch (err) {
      console.log(err);
    }
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedApplication = {
      id: editApplicationId,
      jobTitle: editFormData.jobTitle,
      company: editFormData.company,
      dateApplied: editFormData.dateApplied,
      stage: editFormData.stage,
      jobPosting: editFormData.jobPosting,
    };

    const newApplications = [...applications];

    const index = applications.findIndex((application) => application.id === editApplicationId);

    newApplications[index] = editedApplication;

    setApplications(newApplications);
    setEditApplicationId(null);
  };

  const handleEditClick = (event, application) => {
    event.preventDefault();
    setEditApplicationId(application.id);

    const formValues = {
        jobTitle: application.jobTitle,
        company: application.company,
        dateApplied: application.dateApplied,
        stage: application.stage,
        jobPosting: application.jobPosting,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditApplicationId(null);
  };

  const handleDeleteClick = async(applicationId) => {
    console.log(applicationId);
    const newApplications = [...applications];

    const index = applications.findIndex((application) => application.id === applicationId);

    newApplications.splice(index, 1);

    setApplications(newApplications);

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const { data } = await axios.delete(
        "http://localhost:5000/api/dashboard/",
        {},
        config
      );

      console.log(data);

      setApplications(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="interviewTableContainer">
      <form onSubmit={handleEditFormSubmit}>
      <h3 className="interviewPersonalTitle">Personal Interview</h3>
        <table className="interviewPersonalTable">
          <thead>
            <tr className="interviewTableHeader">
                <th className="interviewDashTableHeader">Job Title</th>
                <th className="interviewDashTableHeader">Company</th>
                <th className="interviewDashTableHeader">Date Applied</th>
                <th className="interviewDashTableHeader">Stage</th>
                <th className="interviewDashTableHeader">Job Posting</th>
                <th className="interviewDashTableHeader">Actions</th>
            </tr>
          </thead>
          <tbody className="interviewTableContent">
            {applications.map((application) => (
              <Fragment>
                {editApplicationId === application.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    application={application}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <div className="addNewInterview">
        <span className="addInterviewTitle">Add an application</span>
        <form className="timeTableUpdateForm" onSubmit={handleAddFormSubmit}>
          <div className="timeTableUpdateItem">
            <label>Job Title</label>
            <input
              type="text"
              className="timeTableInput"
              name="jobTitle"
              required="required"
              placeholder="Enter a job title..."
              onChange={handleAddFormChange} />
          </div>
          <div className="timeTableUpdateItem">
            <label>Company</label>
            <input 
              type="text" 
              className="timeTableInput"
              name="company" 
              required="required" 
              placeholder="Enter a company..." 
              onChange={handleAddFormChange} />
          </div>
          <div className="timeTableUpdateItem">
            <label>Date Applied</label>
            <input 
              type="date" 
              className="timeTableInput"
              name="dateApplied" 
              required="required" 
              onChange={handleAddFormChange} />
          </div>
          <div className="timeTableUpdateItem">
            <label>Stage</label>
            <input 
              type="text" 
              className="timeTableInput"
              name="stage" 
              required="required" 
              placeholder="Enter your current stage..." 
              onChange={handleAddFormChange} />
          </div>
          <div className="timeTableUpdateItem">
            <label>Job Posting</label>
            <input 
              type="url" 
              className="timeTableInput"
              name="jobPosting" 
              required="required" 
              placeholder="Enter the job posting link..." 
              onChange={handleAddFormChange} />
          </div>
          <button className="addTimetableButton" type="submit">Add</button>
        </form>
      </div>
      
    </div>
  );
};

export default PersonalJobDashBoard