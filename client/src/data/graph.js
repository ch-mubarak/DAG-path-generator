export const graphPaths = {
  paths: [
    [1, 2, 6],
    [1, 3, 6],
    [1, 3, 7],
    [1, 4, 7],
    [1, 4, 8],
    [1, 5, 8],
  ],
};

export const myGraphData = {
  1: [2, 3, 4, 5],
  2: [6],
  3: [6, 7],
  4: [7, 8],
  5: [8],
};

export const graphData = {
  A: { from: "A", to: "B" },
  B: { from: "B", to: "C" },
  C: { from: "C", to: "D" },
  D: { from: "D", to: "E" },
  E: { from: "E", to: "F" },
  F: { from: "B", to: "G" },
  G: { from: "D", to: "H" },
  H: { from: "G", to: "I" },
};
