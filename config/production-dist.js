module.exports = {
    apps: {
        api: {
            logs: {
                app: {Console: { timestamp: true, level: 'info' }},
                http: {Console: { timestamp: true }},
            },
        },
    },
};
