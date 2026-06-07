"use server"
 async function handleClick1(params) {
    console.log("Hello")
    const promise=new Promise((res,rej)=>{
      setTimeout(()=>{
        rej("Promise is resolved")
      },4000);
    })
    return promise;
  }

export default handleClick1;