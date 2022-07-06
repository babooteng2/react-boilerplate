const jwt = {
  verify: () => {},
};
const User = {
  findById: () => {},
};
const checkToken = (req, res) => {
  console.log("data 1 ", req.cookies.token);
  const req_token = req.cookies.token;
  let auth = false;
  if (!req_token) return res.status(200).json({ message: "please login" });
  try {
    if (!jwt.verify(req_token, process.env.JWT_SECRET)) throw "token not valid";
    else auth = true;
  } catch (err) {
    console.log("Invalid token");
  }
  if (!auth)
    return res.status(400).json({ message: "token verification failed" });
  else {
    const data = jwt.verify(req_token, process.env.JWT_SECRET);
    User.findById(data._id).exec((err, user) => {
      if (err || !user)
        return res.status(400).json({ error: "User not found" });
    });
    const { _id, frefix, firstName, lastName, email, role, phone, customerId } =
      user;
    return res
      .status(200)
      .json({
        user: {
          _id,
          frefix,
          firstName,
          lastName,
          email,
          role,
          phone,
          customerId,
        },
      });
  }
};
