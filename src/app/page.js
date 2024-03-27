"use client";
import Options from "@/components/modules/Options";
import HomePage from "@/components/templates/HomePage";
import axios from "axios";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Home() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fechData = async () => {
      const data = await axios.get(
        "https://devnight.ir/wp-json/wp/v2/Categories"
      );
      setCategory(data.data);
    };
    fechData();
  }, []);

  return (
    <div className="mx-2 md:mx-0">
      <HomePage />
      <Options />
    </div>
  );
}
