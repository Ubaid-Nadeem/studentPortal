"use client";

import { StudentsContext } from "@/context/studentcontext";
import { useEffect, useState } from "react";
import { Card, Table, Spin } from "antd";

import { useRouter } from "next/navigation";

type Result = {
  test: string;
  totalMarks: number;
  obtainedMarks: number;
  isPassed: boolean;
};

type Fees = {
  month?: string;
  isPaid?: boolean;
};

type StudentType = {
  name: string;
  fatherName: string;
  rollNumber: number;
  course: string;
  timing: string;
  testResults: Result[];
  attendence: number;
  absent: number;
  location: string;
  feesStatus: Fees[];
  courseDuration: string;
};

export default function Details({ params: { studentid } }: any) {
  const router = useRouter();
  const { allStudents, setAllStudents } = StudentsContext();
  const [studentDetails, setStudentDetails] = useState<StudentType>();
  const [isloading, setIsloading] = useState(true);

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data: any = [];

  useEffect(() => {
    let [filterStudent] = allStudents.filter(
      (student: any) => student.rollNumber === Number(studentid)
    );
   

    if (filterStudent) {
      setStudentDetails(filterStudent);
      setIsloading(false);
    } else {
      router.push("/");
      setIsloading(false);
    }
  }, []);

  const columns = [
    {
      title: "Month",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "age",
      width: 150,
    },
  ];

  for (let i = 0; i < 12; i++) {
    if (studentDetails?.feesStatus[i].isPaid == true && studentDetails) {
      data.push({
        key: i,
        name: `${month[i]}`,
        age: "Paid",
      });
    } else {
      data.push({
        key: i,
        name: `${month[i]}`,
        age: "unPaid",
      });
    }
  }

  return (
    <>
      {isloading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin spinning={isloading} size="large" tip="Loading..."></Spin>
        </div>
      ) : (
        <div
          style={{
            background: "#ECECEC",
            width: "100%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            padding: "20px 0",
          }}
        >
          <p
            style={{
              textAlign: "left",
              width: 500,
              color: "blue",
              cursor: "pointer",
            }}
            onClick={()=>{
                router.push('/')
            }}
          >
            &lt; go back
          </p>
          <Card title='Student Details' bordered={true} style={{ width: 500 }}>
          <p style={{ padding: "5px" }}>
                  
                  <span style={{ fontWeight: "bold" }}>Name : </span>
                  {studentDetails?.name}
                </p>
            <p style={{ padding: "5px" }}>
                  
              <span style={{ fontWeight: "bold" }}>Father Name : </span>
              {studentDetails?.fatherName}
            </p>
            <p style={{ padding: "5px" }}>
                  
              <span style={{ fontWeight: "bold" }}>Roll Number : </span>    
              {studentDetails?.rollNumber}
            </p>
            <p style={{ padding: "5px" }}>
               
              <span style={{ fontWeight: "bold" }}>Course : </span>
              {studentDetails?.course}
            </p>
            <p style={{ padding: "5px" }}>
                  
              <span style={{ fontWeight: "bold" }}>Course Duration : </span>    
              {studentDetails?.courseDuration}
            </p>

            <p style={{ padding: "5px" }}>
                  
              <span style={{ fontWeight: "bold" }}>Branch Name : </span>    
              {studentDetails?.location}
            </p>
            <p style={{ padding: "5px" }}>
                  
              <span style={{ fontWeight: "bold" }}>Timing : </span>    
              {studentDetails?.timing}
            </p>
            <p style={{ padding: "5px" }}>
                  
              <span style={{ fontWeight: "bold" }}>Attendence : </span>    
              {studentDetails?.attendence}
            </p>
            <p style={{ padding: "5px" }}>
                  
              <span style={{ fontWeight: "bold" }}>Absent : </span>    
              {studentDetails?.absent}
            </p>
          </Card>

          <Card title="Fees Status" bordered={false} style={{ width: 500 }}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 3 }}
              // scroll={{ y: 240 }}
            />
          </Card>
          <Card title="Results" bordered={false} style={{ width: 500 }}>
            <p style={{ textAlign: "center" }}>Result not found</p>
          </Card>
        </div>
      )}
    </>
  );
}
