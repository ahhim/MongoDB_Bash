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
