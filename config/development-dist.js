module.exports = {
    apps: {
        api: {
            db: {
                host: 'localhost',
                user: 'docker',
                password: 'docker',
                database: 'docker-dev',
            },
            logs: {
                app: { Console: { timestamp: true, colorize: true, level: 'info' } },
                http: { Console: { timestamp: true, colorize: true } },
            },
            security: {
                rateLimitOptions: {
                    auth: {
                        adapter: 'memory',
                        duration: 60000,
                        max: 5,
                    },
                    api: {
                        adapter: 'memory',
                        duration: 3600000,
                        max: 2500,
                    },
                },
            },
        },
    },
};
