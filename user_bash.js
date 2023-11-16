  use evse
  db.createUser({
    user: "evse-user",
    pwd: "user",
    roles: [
      "readWrite"
    ],
    passwordDigestor: "server"
  })
