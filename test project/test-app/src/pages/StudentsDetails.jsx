import axios from "axios";
import React, { useState, useEffect } from "react";

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
            <div>
                <search>
                    <form onSubmit={(e) => { fetchStudentDetails(e);}}>
                    <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Search by name or ID" />
                    <button type="submit">Search</button>
                    </form>
                </search>
            </div>
            <div style={{ marginTop: "30px" }}>
                <h1>Student Details</h1>
                {student && (
                    <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ccc" }}>
                        <tbody>
                            <tr style={{ backgroundColor: "#f9f9f9" }}>
                                <td style={{ border: "1px solid #ccc", padding: "10px", fontWeight: "bold" }}>Name</td>
                                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{student.name}</td>
                            </tr>
                            <tr>
                                <td style={{ border: "1px solid #ccc", padding: "10px", fontWeight: "bold" }}>Age</td>
                                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{student.age}</td>
                            </tr>
                            <tr style={{ backgroundColor: "#f9f9f9" }}>
                                <td style={{ border: "1px solid #ccc", padding: "10px", fontWeight: "bold" }}>Student ID</td>
                                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{student.stu_id}</td>
                            </tr>
                            <tr>
                                <td style={{ border: "1px solid #ccc", padding: "10px", fontWeight: "bold" }}>Contact</td>
                                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{student.contact}</td>
                            </tr>
                            <tr style={{ backgroundColor: "#f9f9f9" }}>
                                <td style={{ border: "1px solid #ccc", padding: "10px", fontWeight: "bold" }}>Email</td>
                                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{student.email}</td>
                            </tr>
                            <tr>
                                <td style={{ border: "1px solid #ccc", padding: "10px", fontWeight: "bold" }}>Parents' Name</td>
                                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{student.parents_name}</td>
                            </tr>
                            <tr style={{ backgroundColor: "#f9f9f9" }}>
                                <td style={{ border: "1px solid #ccc", padding: "10px", fontWeight: "bold" }}>Batch</td>
                                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{student.batch}</td>
                            </tr>
                            <tr>
                                <td style={{ border: "1px solid #ccc", padding: "10px", fontWeight: "bold" }}>Faculty</td>
                                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{student.faculty}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <h1>Student Fee Details</h1>
            </div>
            {student && student.fees && student.fees.length > 0 ? (
                <div style={{ padding: "20px" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ccc" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#f0f0f0" }}>
                                <th style={{ border: "1px solid #ccc", padding: "10px" }}>Semester</th>
                                <th style={{ border: "1px solid #ccc", padding: "10px" }}>Fee Amount</th>
                                <th style={{ border: "1px solid #ccc", padding: "10px" }}>Paid Amount</th>
                                <th style={{ border: "1px solid #ccc", padding: "10px" }}>Due Amount</th>
                                <th style={{ border: "1px solid #ccc", padding: "10px" }}>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.fees.map((fee, index) => (
                                <tr key={index}>
                                    <td style={{ border: "1px solid #ccc", padding: "10px" }}>{fee.semester}</td>
                                    <td style={{ border: "1px solid #ccc", padding: "10px" }}>Rs. {fee.fee_amount}</td>
                                    <td style={{ border: "1px solid #ccc", padding: "10px" }}>Rs. {fee.payed_amount}</td>
                                    <td style={{ border: "1px solid #ccc", padding: "10px" }}>Rs. {fee.due_amount}</td>
                                    <td style={{ border: "1px solid #ccc", padding: "10px" }}>{fee.pay_date}</td>
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
