import Session from './models/session-model'

app.use(session({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 10000 * 60 * 60 * 3},
    store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    ttl: 60 * 60 * 3
    }),
    genid: (req) => shortid.generate()
}));
app.use(async(req, res, next) => {
    if (await SessionModel.checkSession(req.sessionID)) {
        res.locals.loggedIn = true
    }
    next();
});