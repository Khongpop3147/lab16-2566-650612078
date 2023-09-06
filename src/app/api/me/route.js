import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Khongpop Yakhongo",
    studentId: "650612078",
  });
};
