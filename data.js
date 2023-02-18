const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
}


module.exports = {
    ROLE: ROLE,
    users: [
        { id: 1, name: 'Niko', role: ROLE.ADMIN },
        { id: 2, name: 'Saul', role: ROLE.BASIC },
        { id: 1, name: 'Raul', role: ROLE.BASIC },
    ],
    projects: [
        { id: 1, name: 'Niko\'s project', userId: 1},
        { id: 2, name: 'Saul\'s project', userId: 2},
        { id: 3, name: 'Raul\'s project', userId: 3},
    ]
}