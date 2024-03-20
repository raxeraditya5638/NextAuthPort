import connectDB from "@/lib/mongodb";
import Homepage from "@/pages/Homepage";
import Image from "next/image";

export default function Home() {
  connectDB();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Homepage />
    </main>
  );
}
