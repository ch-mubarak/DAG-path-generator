import React, { useEffect, useState } from "react";
import "./DAG.css";
import { Graph } from "react-d3-graph";
import { graphPaths } from "../../data/graph";
import * as d3 from "d3";
import axios from "axios";

const DAG = () => {
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
  // the graph configuration, just override the ones you need
  const myConfig = {
    directed: true,
    nodeHighlightBehavior: true,
    node: {
      color: "#FBC252",
      size: 800,
      labelPosition: "center",
      highlightStrokeColor: "#FFFBAC",
    },
    link: {
      strokeWidth: 2.3,
      color:"#144272",
      highlightColor: "#EAFDFC",
    },
    d3: {
      gravity: -200,
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
