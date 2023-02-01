const SessionModel = require('../models/session-model');

exports.validateSession = async (req, res, next) => {
    if (await SessionModel.checkSession(req.sessionID)) {
        next();
        return;
    }

    res.render('login', {error: 'PLEASE LOG IN TO ACCESS THIS PAGE'})
};