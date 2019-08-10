module.exports = {
  getAll: (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    db.get_all().then(result => {
      res.status(200).send(result);
    });
  },
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const newUser = await db.create_account([username, password]);
    res.status(201).send(newUser);
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const user = await db.find_user([username, password]);
    res.status(200).send(user);
  }
};
