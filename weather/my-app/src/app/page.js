"use client";
import Image from "next/image";

import { Header } from "./components/assets/Header";
import { Homescreen } from "./homescreen";
import { useEffect, useState } from "react";

const imgArr = ["Home.png", "Pin.png", "Vector 19 (Stroke).png", "User.png"];
export default function Home() {
  return (
    <div className="flex flex-col w-[1440px] justify-center m-auto">
      <Header />
      <Homescreen />
    </div>
  );
}
