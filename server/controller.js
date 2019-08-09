module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const newUser = await db.create_account([username, password]);
    res
      .status(201)
      .send(newUser)
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const user = await db.find_user([username, password]);
    res
      .status(200)
      .send({
        user: user,
        message: "logged in"
      })
  }
};
