const express = require('express');
const app = express();
const {users} = require('./data')
const projectRouter = require('./routes/projects')
const {authRole, authUser} = require('./basicAuth')
const {ROLE} = require('./data')

app.use(express.json());
app.use(setUser);
app.use('/projects', projectRouter);

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/dashboard', authUser, (req, res) => {
    res.send('Dashboard Page')
})

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
    res.send('Admin Page');
})

function setUser(req, res, next) {
    const {userId} = req.body;
    if(userId) {
        req.user = users.find(user => user.id === userId);
    }
    next();
}

app.listen(5000, () => {
    console.log('server running at port 3000')
})