import React, { useState } from "react";
import { createPath } from "../api/graph";
import DAG from "../components/DAG/DAG";
import "./Graph.css";
import { ErrorBoundary } from "../components/ErrorBoundry/ErrorBoundry";
import Input from "../components/Input/Input";

const Graph = () => {
  const [graphPaths, setGraphPaths] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (start, graph) => {
    try {
      setError("");
      setPending(true);
      //calling path generation api
      const { data } = await createPath(start, graph);
      setGraphPaths(data?.graphPaths);
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message);
      setGraphPaths(null);
    }
    setPending(false);
  };
  return (
    <div className="graph">
      <ErrorBoundary>
        <DAG graphPaths={graphPaths} error={error} pending={pending} />
      </ErrorBoundary>
      <Input handleSubmit={handleSubmit} />
    </div>
  );
};

export default Graph;
