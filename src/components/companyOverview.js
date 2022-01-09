import React from "react";
 import "./companyOverview.css"

 export default function companyOverview(){
     return(
         <div className="reviewWidget">
             <div className="companyReviewTableSpecific">
             <h3 className="reviewTitle">Amazon Recent Company Question</h3>
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
            
            <div className="companyReviewTableSpecific">
                <h3 className="reviewTitle">Bell Recent Company Question</h3>
                <table className="reviewTable">
                <tr className="reviewRow">
                <th className="reviewTableHeader">Questions</th>  
                <th className="reviewTableHeader">Date</th>  
                <th className="reviewTableHeader">Difficulty</th> 
                <th className="reviewTableHeader">Frequency</th>   
                </tr>
                <tr className="reviewRow">
                    <td className="reviewJob">
                        <span className="reviewRole">Palindrome</span>
                    </td>
                    <td className="reviewDate"> 01.08.2022</td>
                    <td className="reviewLevel"> Easy</td>
                    <td className="questionFrequence"> 54% of applicants</td>
                </tr>
                <tr className="reviewRow">
                    <td className="reviewJob">
                        <span className="reviewRole">Binary Search</span>
                    </td>
                    <td className="reviewDate"> 01.08.2022</td>
                    <td className="reviewLevel"> Medium</td>
                    <td className="questionFrequence"> 90% of applicants</td>
                </tr>
                <tr className="reviewRow">
                    <td className="reviewJob">
                        <span className="reviewRole">Traversal</span>
                    </td>
                    <td className="reviewDate"> 01.08.2022</td>
                    <td className="reviewLevel"> Easy</td>
                    <td className="questionFrequence"> 5% of applicants</td>
                </tr>
                <tr className="reviewRow">
                    <td className="reviewJob">
                        <span className="reviewRole">DBFs</span>
                    </td>
                    <td className="reviewDate"> 01.08.2022</td>
                    <td className="reviewLevel"> Hard</td>
                    <td className="questionFrequence"> 9% of applicants</td>
                </tr>
                
                </table>
                </div>
            
                <div className="companyReviewTableSpecific">
                <h3 className="reviewTitle">Facebook Recent Company Question</h3>
                <table className="reviewTable">
                <tr className="reviewRow">
                <th className="reviewTableHeader">Questions</th>  
                <th className="reviewTableHeader">Date</th>  
                <th className="reviewTableHeader">Difficulty</th> 
                <th className="reviewTableHeader">Frequency</th>   
                </tr>
                <tr className="reviewRow">
                    <td className="reviewJob">
                        <span className="reviewRole">Graphs</span>
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
                        <span className="reviewRole">String Manipulation</span>
                    </td>
                    <td className="reviewDate"> 01.08.2022</td>
                    <td className="reviewLevel"> Hard</td>
                    <td className="questionFrequence"> 6% of applicants</td>
                </tr>
                <tr className="reviewRow">
                    <td className="reviewJob">
                        <span className="reviewRole">Bit Manipulation </span>
                    </td>
                    <td className="reviewDate"> 01.08.2022</td>
                    <td className="reviewLevel"> Easy</td>
                    <td className="questionFrequence"> 8% of applicants</td>
                </tr>
                
                </table>
                </div>
            
         </div>
     )
 } 
