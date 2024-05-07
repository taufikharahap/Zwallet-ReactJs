import React, { useState, useEffect } from "react";

import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";

function Home() {
  return (
        <main className="h-screen w-screen flex flex justify-center items-center bg-black/[0.9]">
          <h1 className="font-bold text-2xl text-primary bg-primary/[0.2] px-10 py-5 rounded-[3px] ">Halaman Home</h1>
        </main>
  );
}

export default Home;
