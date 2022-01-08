import React from "react";
import "./upcomingInterviewWidget.css"
import { Link } from "react-router-dom";

export default function UpcomingInterviewWidget(){
    const Button = ({type}) =>{
        return <button className={"button " + type}>{type}</button>;
    }
    return(
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
                <tr className="interviewRow">
                    <td className="job">
                        <img src></img>
                        <span className="interviewRole"> SWE Intern</span>
                    </td>
                    <td className="interviewDate"> 01.08.2022</td>
                    <td className="interviewCompany"> Amazon</td>
                    <td className="status"> <Button type= "Offer"/></td>
                </tr>
                <tr className="interviewRow">
                    <td className="job">
                        <img src></img>
                        <span className="interviewRole"> SWE Intern</span>
                    </td>
                    <td className="interviewDate"> 01.08.2022</td>
                    <td className="interviewCompany"> LinkedIn</td>
                    <td className="status"> <Button type= "Rejected"/></td>
                </tr><tr className="interviewRow">
                    <td className="job">
                        <img src></img>
                        <span className="interviewRole"> SWE Intern</span>
                    </td>
                    <td className="interviewDate"> 01.08.2022</td>
                    <td className="interviewCompany"> Twitter</td>
                    <td className="status"> <Button type= "Pending"/></td>
                </tr><tr className="interviewRow">
                    <td className="job">
                        <img src></img>
                        <span className="interviewRole"> SWE Intern</span>
                    </td>
                    <td className="interviewDate"> 01.08.2022</td>
                    <td className="interviewCompany"> Google</td>
                    <td className="status"> <Button type= "Pending"/></td>
                </tr><tr className="interviewRow">
                    <td className="job">
                        <img src></img>
                        <span className="interviewRole"> SWE Intern</span>
                    </td>
                    <td className="interviewDate"> 01.08.2022</td>
                    <td className="interviewCompany"> Meta</td>
                    <td className="status"> <Button type= "Rejected"/></td>
                </tr>
            </table>
            </Link>
        </div>
    )
}