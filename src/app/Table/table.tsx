"use client";
import "./table.css";

import React, { use, useState } from "react";
// import type { TableProps } from "antd";
// import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import { StudentsContext } from "@/context/studentcontext";
import { useRouter } from "next/navigation";

function StudentTable() {
  const router = useRouter();
  const { allStudents, setAllStudents } = StudentsContext();

  const [filterStudent, setFilterStudent] = useState([]);

  return (
    <>
      <table className="user-table">
        <thead>
          <th>Father Name</th>
          <th>Name</th>
          <th>Roll Number</th>
          <th>Details</th>
          <th>Operation</th>
        </thead>

        {allStudents.map((student, id) => {
          return (
            <tbody key={id}>
            {/* <tr> */}
              <td>{student.name}</td>
              <td>{student.fatherName}</td>
              <td>{student.rollNumber}</td>
              <td
                className="seedetails"
                onClick={() => {
                  router.push(`/student/${student.rollNumber}`)
                }}
              >
                see details
              </td>
              <td
                className="deleteStudent"
                onClick={() => {
                  let cloneStudents = [...allStudents];
                  cloneStudents.splice(id,1)
                  setAllStudents([...cloneStudents])
                }}
              >
                delete
              </td>
            {/* </tr> */}
            </tbody>

          );
        })}
      </table>
    </>
  );
}

export default StudentTable;
