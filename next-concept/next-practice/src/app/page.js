// app/page.tsx (Server Component)
import Link from "next/link";
import ClientComp from "./ClientComp";


const Comp = () => {
  return <>
    <h1>Server Heading</h1>
    <div>
      <h1>Home</h1>
      <Link href="/about">Go to About</Link>
    </div>
    <ClientComp />
  </>
}

export default function Page() {
  console.log("HELLOßß")
  return (
    <div>
      <Comp/>
    </div>
  );
}