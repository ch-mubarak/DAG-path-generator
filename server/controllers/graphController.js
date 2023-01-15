export const generatePaths = (req, res, next) => {
  try {
    const paths = [];
    const { graph } = req.body;
    if (!graph) {
      res.status(401);
      throw new Error("No data provided");
    }
    const start = 1;
    function createPaths(graph, start, path = []) {
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
    res.status(201).json(paths);
  } catch (error) {
    next(error);
  }
};
