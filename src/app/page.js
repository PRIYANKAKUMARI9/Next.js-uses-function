'use client'

export default function Home() {
const apple=()=>{
  alert("this is in function")
}
const hello=()=>{
 
}
  return (
    <main className="flex  flex-col items-center p-24">
     <h1 className=" bg-slate-800 text-red-600 p-6 mb-9 rounded-xl">Event Function and state learn</h1>
     <button onClick={apple} className=" text-white bg-red-600 p-2 rounded-md">click me</button>
{/*here is another function uses */}
     <div className=" bg-green-900 p-20 mt-9" ></div>
     <button onClick={hello} className=" bg-slate-700 mt-10 p-2 rounded-md text-white ">click change !!</button>
    </main>
  );
}
