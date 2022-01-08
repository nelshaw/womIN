import React from "react";

const ReadOnlyRow = ({ application, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{application.jobTitle}</td>
      <td>{application.company}</td>
      <td>{application.dateApplied}</td>
      <td>{application.stage}</td>
      <td>{application.jobPosting}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, application)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(application.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;