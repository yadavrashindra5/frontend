// app/dashboard/page.tsx

import Button from "@/components/Button";
import { Suspense } from "react";
import handleClick1 from "@/action";
import LikeButton from "@/components/LikeButton";
import { refresh } from "next/cache";

function Users() {
  return new Promise(async (resolve) => {
    await new Promise((res) => setTimeout(res, 3000));
    resolve(
      <div>
        <p>User A</p>
        <p>User B</p>
      </div>
    );
  });
}

export default function Page() {

  return (
    <div>
      <h1>Dashboard</h1>

      <Suspense fallback={<p>Loading users...</p>}>
        {/* streamed separately */}
        {/* @ts-expect-error Async Server Component */}
        <Users />
      </Suspense>
      {/* <Button handleClick={async()=>{
        const p = await handleClick1();
        console.log(p);
      }}/> */}
      <LikeButton />
      <Button handleClick={async (params) => {
        "use server"
        const promise=handleClick1()
        console.log(promise);
        refresh()
      }}/>
    </div>
  );
}