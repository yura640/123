module.exports = {
    "get": {
        "/user": require("./controllers/usersController").getUsers
    },
    "post": {
        "/user": require("./controllers/usersController").setUsers
    }
};