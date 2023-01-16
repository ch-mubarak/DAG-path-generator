import React, { useState } from "react";
import "./Input.css";
const Input = ({ handleSubmit }) => {
  const [graph, setGraph] = useState({});
  const [nodes, setNodes] = useState([1]);

  const handleAddNode = () => {
    setNodes((preNodes) => [...preNodes, preNodes.length + 1]);
  };
//   console.log(nodes);
  const handleRemoveNode = () => {
    if (nodes.length === 1) return;
    setNodes((preNodes) => preNodes.slice(0, -1));
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
  console.log(graph);
  return (
    <div className="input">
      <div>
        <button onClick={handleAddNode}>Add Node</button>
        <button onClick={handleRemoveNode}>Remove Node</button>
      </div>
      {nodes.map((node, index) => (
        <div key={index} className="nodes">
          <span>{node}</span>
          <input value={graph.node?.split(",")} name={node} onChange={handleChangeNode} />
        </div>
      ))}
      <button>Submit</button>
    </div>
  );
};

export default Input;
