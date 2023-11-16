rs.initiate()
  use admin
  db.createUser({
    user: "evse-admin",
    pwd: "admin",
    roles: [
      "read",
      "readWrite",
      "dbAdmin",
      "userAdmin",
      "clusterAdmin",
      "readAnyDatabase",
      "readWriteAnyDatabase",
      "userAdminAnyDatabase",
      "dbAdminAnyDatabase"
    ],
    passwordDigestor: "server"
  })
  use evse
  db.createUser({
    user: "evse-user",
    pwd: "user",
    roles: [
      "readWrite"
    ],
    passwordDigestor: "server"
  })
