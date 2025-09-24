"use client";

import Link from "next/link";
import Inputbox from "../../../components/Inputbox";

export default function Homepage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">This is the /home page</h1>
      <Link href="/" className="text-blue-500 underline"> Go to / page.</Link>
      <Inputbox/>
    </div>
  );
}