import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline mb-4">Hello, from /</h1>
      <Link href="/home" test-id="homeLink" className="text-blue-500 underline mb-8"> Go to home page.</Link>
      <h2 className="text-2xl font-semibold mt-4">See Resume templates</h2>
      <Link href="/resumeTemplates" test-id="resumeLink" className="text-blue-500 underline"> Go to resume templates page.</Link>
    </div>
  );
}
