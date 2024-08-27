"use client";

import { createContext, useContext, useState } from "react";

const mainContext = createContext({});

export default function StudentContext({
  children,
}: {
  children: React.ReactNode;
}) {
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
    feesStatus: Fees[] ;
    courseDuration: string;
  };

  let fetchStudentData: StudentType[] = [
    {
      name: "Ubaid",
      fatherName: "Nadeem",
      rollNumber: 273610,
      course: "Full Stack Development",
      timing: "2pm to 4pm",
      testResults: [
        {
          test: "HTMl",
          totalMarks: 70,
          obtainedMarks: 100,
          isPassed: true,
        },
        {
          test: "CSS",
          totalMarks: 90,
          obtainedMarks: 100,
          isPassed: true,
        },
        {
          test: "Javascript 1",
          totalMarks: 85,
          obtainedMarks: 100,
          isPassed: true,
        },
        {
          test: "Javascript 2",
          totalMarks: 76,
          obtainedMarks: 100,
          isPassed: true,
        },
        {
          test: "ES6 Advanced",
          totalMarks: 84,
          obtainedMarks: 100,
          isPassed: true,
        },
      ],
      attendence: 30,
      absent: 10,
      courseDuration: "1 year",
      feesStatus: [
        {
          month: "January",
          isPaid: true,
        },
        {
          month: "February",
          isPaid: true,
        },
        {
          month: "March",
          isPaid: true,
        },
        {
          month: "March",
          isPaid: true,
        },
        {
          month: "April",
          isPaid: true,
        },
        {
          month: "May",
          isPaid: true,
        },
        {
          month: "June",
          isPaid: true,
        },
        {
          month: "July",
          isPaid: true,
        },
        {
          month: "August",
          isPaid: true,
        },
        
        {
          month: "September",
          isPaid: false,
        },
        {
          month: "October",
          isPaid: false,
        },
        {
          month: "November",
          isPaid: false,
        },
        {
          month: "December",
          isPaid: false,
        },
      ],
      location: "Bahadurabad (main branch)",
    },
    {
      name: "Usman",
      fatherName: "Naseem",
      rollNumber: 273612,
      course: "Full Stack Development",
      timing: "4pm to 6pm",
      testResults: [
        {
          test: "HTMl",
          totalMarks: 70,
          obtainedMarks: 100,
          isPassed: true,
        },
        {
          test: "CSS",
          totalMarks: 90,
          obtainedMarks: 100,
          isPassed: true,
        },
        {
          test: "Javascript 1",
          totalMarks: 85,
          obtainedMarks: 100,
          isPassed: true,
        },
        {
          test: "Javascript 2",
          totalMarks: 76,
          obtainedMarks: 100,
          isPassed: true,
        },
        {
          test: "ES6 Advanced",
          totalMarks: 84,
          obtainedMarks: 100,
          isPassed: true,
        },
      ],
      attendence: 30,
      absent: 10,
      courseDuration: "1 year",
      feesStatus: [
        {
          month: "January",
          isPaid: true,
        },
        {
          month: "February",
          isPaid: true,
        },
        {
          month: "March",
          isPaid: true,
        },
        {
          month: "March",
          isPaid: true,
        },
        {
          month: "April",
          isPaid: true,
        },
        {
          month: "May",
          isPaid: true,
        },
        {
          month: "June",
          isPaid: true,
        },
        {
          month: "July",
          isPaid: true,
        },
        {
          month: "August",
          isPaid: true,
        },
        
        {
          month: "September",
          isPaid: false,
        },
        {
          month: "October",
          isPaid: false,
        },
        {
          month: "November",
          isPaid: false,
        },
        {
          month: "December",
          isPaid: false,
        },
      ],
      location: "Bahadurabad (main branch)",
    },
  ];

  const [allStudents, setAllStudents] = useState(fetchStudentData);

  return (
    <mainContext.Provider value={{ allStudents, setAllStudents }}>
      {children}
    </mainContext.Provider>
  );
}

export const StudentsContext = () => useContext(mainContext);
