const notFoundMiddleware = (req,res) => res.status(404).send("Route doesnot exists");

export default notFoundMiddleware;