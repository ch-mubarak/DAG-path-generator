import React, { useState } from "react";
import "./Input.css";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { UilPlusCircle } from "@iconscout/react-unicons";
const Input = ({ handleSubmit }) => {
  const [graph, setGraph] = useState({ 1: [] });
  const [nodes, setNodes] = useState([1]);

  const handleAddNode = () => {
    setNodes((preNodes) => [...preNodes, preNodes.length + 1]);
    setGraph((prevGraph) => {
      return {
        ...prevGraph,
        [nodes.length + 1]: [],
      };
    });
  };

  const handleRemoveNode = () => {
    if (nodes.length === 1) return;
    setNodes((preNodes) => preNodes.slice(0, -1));
    setGraph((prevGraph) => {
      const newGraph = { ...prevGraph };
      delete newGraph[nodes.length];
      return newGraph;
    });
  };

  const handleChangeNode = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGraph((prevGraph) => {
      return {
        ...prevGraph,
        [name]: value?.split(","),
      };
    });
  };
  return (
    <div className="input">
      <div className="add-node">
        <UilPlusCircle onClick={handleAddNode} />
        <UilTrashAlt onClick={handleRemoveNode} />
      </div>
      {nodes.map((node, index) => (
        <div key={index} className="nodes">
          <span>{node}</span>
          {index === 0 ? (
            <input
              placeholder="2,3,5"
              defaultValue={[]}
              value={graph.node?.split(",")}
              name={node}
              onChange={handleChangeNode}
            />
          ) : (
            <input
              value={graph.node?.split(",")}
              defaultValue={[]}
              name={node}
              onChange={handleChangeNode}
            />
          )}
        </div>
      ))}
      <button onClick={() => handleSubmit(graph)}>Submit</button>
    </div>
  );
};

export default Input;
