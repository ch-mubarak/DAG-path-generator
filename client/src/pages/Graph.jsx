import React, { useState } from "react";
import { createPath } from "../api/graph";
import DAG from "../components/DAG/DAG";
import Input from "../components/Input/Input";

const Graph = () => {
  const [graphPaths, setGraphPaths] = useState("");
  const [pending, setPending] = useState(false);
  const handleSubmit = async (graph) => {
    if (graph.trim().length === 0) return;
    try {
      setPending(true);
      //calling path generation api
      const { data } = await createPath(1, graph);
      setGraphPaths(data);
    } catch (error) {
      console.log(error);
    }
    setPending(false);
  };
  return (
    <>
      {/* {graphPaths && <DAG graphPaths={graphPaths} />} */}
      {pending && <h2>Loading....</h2>}
      <Input handleSubmit={handleSubmit} />
    </>
  );
};

export default Graph;
