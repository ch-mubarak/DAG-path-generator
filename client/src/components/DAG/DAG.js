import React from "react";
import "./DAG.css";
import { Graph } from "react-d3-graph";

const DAG = () => {
  // graph payload (with minimalist structure)
  const data = {
    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
    links: [
      { source: "Harry", target: "Sally" },
      { source: "Harry", target: "Alice" },
    ],
  };

  // the graph configuration, just override the ones you need
  const myConfig = {
    directed: true,
    nodeHighlightBehavior: true,
    node: {
      color: "lightgreen",
      size: 800,
      fontSize:10,
      labelPosition:"center",
      highlightStrokeColor: "blue",
    },
    link: {
      strokeWidth:2.3,
      highlightColor: "lightblue",
    },
  };

  const onClickNode = function (nodeId) {
    window.alert(`Clicked node ${nodeId}`);
  };

  const onClickLink = function (source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };
  return (
    <div className="graph">
      <Graph
        id="graph-id" // id is mandatory
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />
    </div>
  );
};

export default DAG;
