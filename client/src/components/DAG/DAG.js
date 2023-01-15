import React, { useEffect, useState } from "react";
import "./DAG.css";
import { Graph } from "react-d3-graph";
import { graphPaths } from "../../data/graph";

const DAG = () => {
  // const [graph, setGraph] = useState({});
  // const [paths, setPaths] = useState([]);
  const [data, setData] = useState({
    nodes: [],
    links: [],
  });

  // setPaths(graphPaths);
  useEffect(() => {
    const nodes = new Set();
    const links = graphPaths
      .map((path) => {
        path.forEach((node) => nodes.add(node));
        return path
          .map((node, index, path) => ({
            source: node,
            target: path[index + 1],
          }))
          .slice(0, -1);
      })
      .flat();
    setData({
      nodes: [...nodes].map((node) => ({ id: node })),
      links,
    });
  }, []);

  console.log(data);
  // the graph configuration, just override the ones you need
  const myConfig = {
    directed: true,
    direction: "BT",
    nodeHighlightBehavior: true,
    node: {
      color: "lightgreen",
      size: 800,
      fontSize: 10,
      labelPosition: "center",
      highlightStrokeColor: "blue",
    },
    link: {
      strokeWidth: 2.3,
      highlightColor: "lightblue",
    },
    d3: {
      gravity: -300,
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
