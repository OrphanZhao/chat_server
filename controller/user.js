module.exports = (app) => {
  app.get("/user", (req, res) => {
    res.send("ok");
  });
};
