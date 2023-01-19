export const generatePaths = (req, res, next) => {
  try {
    const paths = [];
    const { graph, start = 1 } = req.body;
    let visited = new Set();
    if (!graph) {
      res.status(401);
      throw new Error("Please provide starting node and graph data");
    }
    function createPaths(graph, start, path = []) {
      if (visited.has(start)) {
        res.status(401);
        throw new Error("Only Direct Acyclic graph is allowed");
      }
      visited.add(start);
      path.push(start);
      if (!graph[start]) {
        paths.push(path);
        return;
      }
      for (const neighbor of graph[start]) {
        createPaths(graph, neighbor, path.slice());
      }
    }
    createPaths(graph, start);
    res.status(201).json({ graphPaths: paths });
  } catch (error) {
    next(error);
  }
};
