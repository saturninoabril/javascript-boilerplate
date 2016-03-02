module.exports = {
    apps: {
        api: {
            logs: {
                app: {Console: { timestamp: true, colorize: true, level: 'info' }},
                http: {Console: { timestamp: true, colorize: true }},
            },
        },
        frontend: {
            history: 'createHashHistory',
        },
    },
};
