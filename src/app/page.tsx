"use client";

import { StudentsContext } from "@/context/studentcontext";
import Portal from "./Home/page";

export default function Home() {
  let allStudentData = StudentsContext();

  return (
    <>
      <Portal />
    </>
  );
}
