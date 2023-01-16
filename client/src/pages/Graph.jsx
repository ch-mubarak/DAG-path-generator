import React, { useState } from "react";
import { createPath } from "../api/graph";
import DAG from "../components/DAG/DAG";
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
      setGraphPaths(data);
    } catch (error) {
      console.log(error);
      setGraphPaths(null);
    }
    setPending(false);
  };
  return (
    <>
      {graphPaths && (
        <ErrorBoundary>
          <DAG graphPaths={graphPaths} />
        </ErrorBoundary>
      )}
      {pending && <h2>Loading....</h2>}
      <Input handleSubmit={handleSubmit} />
    </>
  );
};

export default Graph;
