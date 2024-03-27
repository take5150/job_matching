import React, { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios";

export const Test = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const getTest = async () => {
      const res = await axiosInstance.get("/test");
      setTests(res.data);
    };
    getTest();
  }, []);

  return (
    <div>
      <h1>Test</h1>
      {tests.map((test) => (
        <div>
          <p>title: {test.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;
