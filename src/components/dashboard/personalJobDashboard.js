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
    <div className="table-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Date Applied</th>
                <th>Stage</th>
                <th>Job Posting</th>
                <th>Actions</th>
            </tr>
          </thead>
          <tbody>
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

      <h2>Add an application</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type="text" name="jobTitle" required="required" placeholder="Enter a job title..." onChange={handleAddFormChange}/>
        <input type="text" name="company" required="required" placeholder="Enter a company..." onChange={handleAddFormChange}/>
        <input type="date" name="dateApplied" required="required" onChange={handleAddFormChange}/>
        <input type="text" name="stage" required="required" placeholder="Enter your current stage..." onChange={handleAddFormChange}/>
        <input type="url" name="jobPosting" required="required" placeholder="Enter the job posting link..." onChange={handleAddFormChange}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PersonalJobDashBoard