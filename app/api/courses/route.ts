import { NextResponse } from "next/server";
import allCourses from "./data.json";
export async function GET(request: Request) {
  return NextResponse.json(allCourses);
}
