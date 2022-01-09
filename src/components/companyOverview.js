import React from "react";
 import "./companyOverview.css"

 export default function companyOverview(){
     return(
         <div className="reviewWidget">
            <h3 className="reviewTitle">Recent Company Question</h3>
            <table className="reviewTable">
            <tr className="reviewRow">
            <th className="reviewTableHeader">Questions</th>  
            <th className="reviewTableHeader">Date</th>  
            <th className="reviewTableHeader">Difficulty</th> 
            <th className="reviewTableHeader">Frequency</th>   
            </tr>
            <tr className="reviewRow">
                <td className="reviewJob">
                    <span className="reviewRole">Linked Lists</span>
                </td>
                <td className="reviewDate"> 01.08.2022</td>
                <td className="reviewLevel"> Hard</td>
                <td className="questionFrequence"> 5% of applicants</td>
            </tr>
            <tr className="reviewRow">
                <td className="reviewJob">
                    <span className="reviewRole">Queues</span>
                </td>
                <td className="reviewDate"> 01.08.2022</td>
                <td className="reviewLevel"> Medium</td>
                <td className="questionFrequence"> 100% of applicants</td>
            </tr>
            <tr className="reviewRow">
                <td className="reviewJob">
                    <span className="reviewRole">Stack</span>
                </td>
                <td className="reviewDate"> 01.08.2022</td>
                <td className="reviewLevel"> Hard</td>
                <td className="questionFrequence"> 56% of applicants</td>
            </tr>
            <tr className="reviewRow">
                <td className="reviewJob">
                    <span className="reviewRole">Binary Search Trees</span>
                </td>
                <td className="reviewDate"> 01.08.2022</td>
                <td className="reviewLevel"> Hard</td>
                <td className="questionFrequence"> 9% of applicants</td>
            </tr>
            
            </table>
         </div>
     )
 } 
