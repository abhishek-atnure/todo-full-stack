module.exports = function (req, res, next) {
    const { email, fname, password } = req.body;

    function validuser_name(useruser_name) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(useruser_name);
    }

    if (req.path === "/signup") {
        console.log(!email.length);
        if (![email, fname, password].every(Boolean)) {
            return res.json("Missing Credentials");
        } else if (!validuser_name(email)) {
            return res.json("Invalid user_name");
        }
    } else if (req.path === "/login") {
        if (![email, password].every(Boolean)) {
            return res.json("Missing Credentials");
        } else if (!validuser_name(email)) {
            return res.json("Invalid user_name");
        }
    }

    next();
};