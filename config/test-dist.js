const apiUrl = 'http://localhost:3010';
const frontendUrl = 'http://localhost:8081';

module.exports = {
    apps: {
        admin: {
            api_url: `${apiUrl}/admin/`,
        },
        api: {
            allowOrigin: [frontendUrl],
            db: {
                database: 'docker-test',
                host: 'localhost',
                password: 'docker',
                user: 'docker',
            },
            security: {
                xdomain: {
                    master: {
                        base_url: frontendUrl,
                    },
                },
            },
        },
        frontend: {
            api_url: `${apiUrl}/api`,
        },
    },
};
