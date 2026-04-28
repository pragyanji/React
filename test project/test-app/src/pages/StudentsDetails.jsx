import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/StudentsDetails.css";

function StudentsDetails() {
    const [student, setStudent] = useState(null);
    const [studentId, setStudentId] = useState("");

    async function fetchStudentDetails(e) {
        e.preventDefault();
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/student/details/${studentId}`);
            setStudent(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching student details:", error);
        }
    }
    


    return (
        <div>
            <div className="student-search-container">
                <form onSubmit={(e) => { fetchStudentDetails(e);}}>
                    <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Search by name or ID" />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="student-details-container">
                <h1>Student Details</h1>
                {student && (
                    <table className="student-details-table">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{student.name}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>{student.age}</td>
                            </tr>
                            <tr>
                                <td>Student ID</td>
                                <td>{student.stu_id}</td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>{student.contact}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{student.email}</td>
                            </tr>
                            <tr>
                                <td>Parents' Name</td>
                                <td>{student.parents_name}</td>
                            </tr>
                            <tr>
                                <td>Batch</td>
                                <td>{student.batch}</td>
                            </tr>
                            <tr>
                                <td>Faculty</td>
                                <td>{student.faculty}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
            <div className="fee-details-header">
                <h1>Student Fee Details</h1>
            </div>
            {student && student.fees && student.fees.length > 0 ? (
                <div className="fee-details-container">
                    <table className="fee-details-table">
                        <thead>
                            <tr>
                                <th>Semester</th>
                                <th>Fee Amount</th>
                                <th>Paid Amount</th>
                                <th>Due Amount</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.fees.map((fee, index) => (
                                <tr key={index}>
                                    <td>{fee.semester}</td>
                                    <td>Rs. {fee.fee_amount}</td>
                                    <td>Rs. {fee.payed_amount}</td>
                                    <td>Rs. {fee.due_amount}</td>
                                    <td>{fee.pay_date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                student && <p style={{ textAlign: "center", marginTop: "20px" }}>No fee details available</p>
            )}
        </div>
    );
}

export default StudentsDetails;
