import "./EstatePage.css";
import Estate from "./Estate";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { useState, useEffect } from "react";

const EstatePage = () => {
  const [data1, setData] = useState([]);


  useEffect(() => {
    setData(data.results);
  }, []);

  const { id } = useParams();
  function searchIndex(data1, id) {
    return data1.find(object => object.zpid == id);
  }
  const property = searchIndex(data1, id);
  return (
    <>
      {property && 
      <Estate value={property}></Estate>
      }
    </>
  );
};

export default EstatePage;
