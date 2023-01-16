import React, { useEffect, useState } from "react";
import "./DAG.css";
import { Graph } from "react-d3-graph";
const DAG = ({ graphPaths }) => {
  const [data, setData] = useState({
    nodes: [],
    links: [],
  });

  useEffect(() => {
    const nodes = new Set();
    const links = graphPaths
      ?.map((path) => {
        path.forEach((node) => nodes.add(node));
        return path
          .map((node, index, path) => ({
            source: node,
            target: path[index + 1],
          }))
          .slice(0, -1);
      })
      .flat();

    //removing duplicate list
    const uniqueLinks = [
      ...new Set(links.map((link) => JSON.stringify(link))),
    ].map((link) => JSON.parse(link));

    console.log(uniqueLinks);
    setData({
      nodes: [...nodes].map((node) => ({ id: node })),
      links: uniqueLinks,
    });
  }, [graphPaths]);

  // the graph configuration
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
      color: "#144272",
      highlightColor: "#EAFDFC",
    },
    d3: {
      gravity: -200,
    },
  };

  return (
    <div className="dag">
      <Graph
        id="graph-id" // id is mandatory
        data={data}
        config={myConfig}
      />
    </div>
  );
};

export default DAG;
