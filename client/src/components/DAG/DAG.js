import React, { useEffect, useState } from "react";
import "./DAG.css";
import { Graph } from "react-d3-graph";
import { graphPaths } from "../../data/graph";

const DAG = () => {
  // const [paths, setPaths] = useState([]);
  const [data, setData] = useState({
    nodes: [],
    links: [],
  });

  // const data = {
  //   nodes: [
  //     { id: 1 },
  //     { id: 2 },
  //     { id: 3 },
  //     { id: 4 },
  //     { id: 5 },
  //     { id: 6 },
  //     { id: 7 },
  //     { id: 8 },
  //   ],
  //   links: [
  //     { source: 1, target: 2 },
  //     { source: 2, target: 6 },
  //     { source: 1, target: 3 },
  //     { source: 3, target: 6 },
  //     { source: 3, target: 7 },
  //     { source: 4, target: 7 },
  //     { source: 1, target: 4 },
  //     { source: 4, target: 8 },
  //     { source: 1, target: 5 },
  //     { source: 5, target: 8 },
  //   ],
  // };
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
      links: [...new Set(links)],
    });
  }, []);
  // the graph configuration, just override the ones you need
  const myConfig = {
    directed: true,
    nodeHighlightBehavior: true,
    node: {
      color: "lightgreen",
      size: 800,
      labelPosition: "center",
      highlightStrokeColor: "blue",
    },
    link: {
      strokeWidth: 2.3,
      highlightColor: "lightblue",
    },
  };

  console.log(data);
  return (
    <div className="graph">
      <Graph
        id="graph-id" // id is mandatory
        data={data}
        config={myConfig}
      />
    </div>
  );
};

export default DAG;
