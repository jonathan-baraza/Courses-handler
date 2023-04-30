import { NextResponse } from "next/server";
import allCourses from "./data.json";
import { courseType } from "@/app/Types";
import { v4 as uuidv4 } from "uuid";
export async function GET(request: Request) {
  return NextResponse.json(allCourses);
}

export async function POST(request: Request) {
  const { title, description, level, link }: courseType = await request.json();

  const newCourse = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };

  //push courses;
  return NextResponse.json({ message: "Course created" });
}
