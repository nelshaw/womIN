import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input type="text" name="jobTitle" required="required" placeholder="Enter a job title..." value={editFormData.jobTitle} onChange={handleEditFormChange}/>
      </td>
      <td>
        <input type="text" name="company" required="required" placeholder="Enter a company..." value={editFormData.company} onChange={handleEditFormChange}/>
      </td>
      <td>
        <input type="date" name="dateApplied" required="required" value={editFormData.dateApplied} onChange={handleEditFormChange}/>
      </td>
      <td>
        <input type="text" name="stage" required="required" placeholder="Enter your current stage..." value={editFormData.stage} onChange={handleEditFormChange}/>
      </td>
      <td>
        <input type="url" name="jobPosting" required="required" placeholder="Enter the job posting link..." value={editFormData.jobPosting} onChange={handleEditFormChange}/>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;