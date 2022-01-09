import React from "react";

const ReadOnlyRow = ({ application, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td className= "intervewTableText">{application.jobTitle}</td>
      <td className= "intervewTableText" >{application.company}</td>
      <td className= "intervewTableText">{application.dateApplied}</td>
      <td className= "intervewTableText">{application.stage}</td>
      <td className= "intervewTableText">{application.jobPosting}</td>
      <td>
        <button
          type="button"
          className="dashButton"
          onClick={(event) => handleEditClick(event, application)}
        >
          Edit
        </button>
        <button type="button"
        className="dashButton" onClick={() => handleDeleteClick(application.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;