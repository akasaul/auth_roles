const router = require('express').Router()
const { projects } = require('../data');
const {authUser, authRole} = require('../basicAuth')
const { canViewProject } = require('../permission/project');

router.get('/', (req, res) => {
    res.json(projects);
})

router.get('/:projectId', setProject, authUser, authGetProject, (req, res) => {
    res.json(req.project);
})

function setProject(req, res, next) {
    const projectId = parseInt(req.params.projectId);
    
    req.project = projects.find(project => project.id === projectId);

    if(req.project === null) {
        res.status(404);
        return res.send('Project not found')
    }

    next();
}

function authGetProject (req, res, next) {
    if(!canViewProject(req.user, req.project)) {
        res.status(401);
        return res.send('Not Allowed');
    }

    next();
}

module.exports = router;