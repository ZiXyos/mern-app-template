const env = process.env.NODE_ENV || 'dev';

const dev: any = {
    app: {
        env,
        port: 8080
    }
};

const prod: any = {
    app: {
        env,
        port: 80
    }
};

const config: any = {
	dev,
	prod,
};

export default config[env];