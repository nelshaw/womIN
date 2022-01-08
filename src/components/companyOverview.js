import React from "react";
 import "./companyOverview.css"

 export default function companyOverview(){
     const Button = ({type}) =>{
         return <button className={"button " + type}>{type}</button>;
     }
     return(
         <div className="upcomingInterviewWidget">
             <table className="interviewTable">
                 <tr className="interviewRow">
                   <th className="interviewTableHeader">Questions</th>  
                   <th className="interviewTableHeader">Date</th>  
                   <th className="interviewTableHeader">Difficulty</th> 
                   <th className="interviewTableHeader">Frequency</th>   
                 </tr>
                 <tr className="interviewRow">
                     <td className="job">
                         <img src></img>
                         <span className="interviewRole">Linked Lists</span>
                     </td>
                     <td className="interviewDate"> 01.08.2022</td>
                     <td className="interviewCompany"> Hard</td>
                     <td className="status"> <Button type= "5% of applicants"/></td>
                 </tr>
                 <tr className="interviewRow">
                     <td className="job">
                         <img src></img>
                         <span className="interviewRole">Queues</span>
                     </td>
                     <td className="interviewDate"> 01.08.2022</td>
                     <td className="interviewCompany">Easy</td>
                     <td className="status"> <Button type= "90% of applicants"/></td>
                 </tr><tr className="interviewRow">
                     <td className="job">
                         <img src></img>
                         <span className="interviewRole">Stacks</span>
                     </td>
                     <td className="interviewDate"> 01.08.2022</td>
                     <td className="interviewCompany">Medium</td>
                     <td className="status"> <Button type= "10% of applicants"/></td>
                 </tr><tr className="interviewRow">
                     <td className="job">
                         <img src></img>
                         <span className="interviewRole">Binary Search Trees</span>
                     </td>
                     <td className="interviewDate"> 01.08.2022</td>
                     <td className="interviewCompany">Hard</td>
                     <td className="status"> <Button type= "2% of applicants"/></td>
                 </tr><tr className="interviewRow">
                     <td className="job">
                         <img src></img>
                         <span className="interviewRole">Hash Maps</span>
                     </td>
                     <td className="interviewDate"> 01.08.2022</td>
                     <td className="interviewCompany">Easy</td>
                     <td className="status"> <Button type= "5% of applicants"/></td>
                 </tr>
             </table>
         </div>
     )
 } 