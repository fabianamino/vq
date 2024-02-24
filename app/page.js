'use client';
import { useEffect, useState } from "react";
import CategorySearch from "./_component/CategorySearch";
import HeroSection from "./_component/Hero";
import ModelList from "./_component/ModelList";
import GlobalApi from "./_utils/GlobalApi";

export default function Home() {

  const [modelList, setModelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetchData();
  },[])  


  const fetchData = () => {
    GlobalApi.getModel()
      .then(res => {
        console.log(res.data.data);
        setModelList(res.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching model data:", error);
        setError("Error fetching model data. Please try again later.");
        setLoading(false);
      });
  };
  
  return (
      <div className="container mx-auto mt-3">
        <HeroSection/>
        <CategorySearch />
        {/* Popular Model List */}
      {/* Check if data is loading */}
      {loading && <p>Loading...</p>}
      {/* Render error message if there's an error */}
      {error && <p>{error}</p>}
      {/* Render ModelList component if data is available */}
      {modelList.length > 0 && <ModelList modelList={modelList} />}
                    </div>
);
}
