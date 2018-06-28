const { URL } = require('url');

module.exports = function (mongoose, uri) {

    let connected = false;

    mongoose.Promise = global.Promise;

    mongoose.connection.on('connected', () => {
        console.log('Connected to Mongo');
        connected = true;
    });
    mongoose.connection.on('reconnected', () => {
        console.log('Reconnected to Mongo');
        connected = true;
    });
    mongoose.connection.on('error', () => {
        console.log('Mongo error!');
        connected = false;
    });
    mongoose.connection.on('disconnected', () => {
        console.log('Mongo disconnected!');
        connected = false;
    });

    mongoose.connect(uri);

    const url = new URL(uri);
    const host = `${url.host}`;

    this.isConnected = () => connected;
    this.getHost = () => host;
};
