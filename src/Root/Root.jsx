import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { createContext } from "react";

 export const AllDonation = createContext([]);

    export default function Root() {
      const data = useLoaderData();

  return (
    <>
   <section className="max-w-[1380px] px-4 md:px-7 lg:px-5 mx-auto">

    <AllDonation.Provider value={data}>

    <Navbar/>
    <Outlet/>

    </AllDonation.Provider>
    
   </section>

    </>
  )
}
