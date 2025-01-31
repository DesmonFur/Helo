module.exports = {
  // getAll: (req, res) => {
  //     const db = req.app.get("db");
  //     db.get_all().then(result => {
  //       res.status(200).send(result);
  //   })
  // },
  getOne: (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    // console.log(req.query);
    const db = req.app.get("db");
    db.get_one([id]).then(result => {
      res.status(200).send(result);
      // db.get_all([id]).then(result => {
      //   res.status(200).send(result);
      // });
    });
  },
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    console.log(req.body);
    const newUser = await db.create_account([username, password]);

    res.status(201).send(newUser);
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password, id} = req.body;
    const user = await db.find_user([username, password,]);
    console.log(req.body);
    res.status(200).send(user);
  },
  post: async (req, res) => {
    const db = req.app.get("db");
  }
};
