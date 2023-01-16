import React, { useState } from "react";
import { createPath } from "../api/graph";
import DAG from "../components/DAG/DAG";
import "./Graph.css";
import { ErrorBoundary } from "../components/ErrorBoundry/ErrorBoundry";
import Input from "../components/Input/Input";

const Graph = () => {
  const [graphPaths, setGraphPaths] = useState(null);
  const [pending, setPending] = useState(false);
  const handleSubmit = async (graph) => {
    try {
      setPending(true);
      //calling path generation api
      const { data } = await createPath(1, graph);
      setGraphPaths(data?.graphPaths);
    } catch (error) {
      console.log(error);
      setGraphPaths(null);
    }
    setPending(false);
  };
  return (
    <div className="graph">
      <ErrorBoundary>
        <DAG graphPaths={graphPaths} />
      </ErrorBoundary>
      {pending && <h2>Loading....</h2>}
      <Input handleSubmit={handleSubmit} />
    </div>
  );
};

export default Graph;
