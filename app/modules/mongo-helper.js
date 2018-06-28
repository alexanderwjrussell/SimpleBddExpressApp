module.exports = {
  uri: '',
  host: '',
  connected: false,
  connect(mongoose, uri) {
    mongoose.Promise = global.Promise;

    mongoConnect(mongoose);
    mongoReconnect(mongoose);
    mongoError(mongoose);
    mongoDisconnected(mongoose);

    return mongoose.connect(uri);
  },
  isConnected() {
    return this.connected;
  },
  getUri() {
    return this.uri;
  },
};

function mongoConnect(mongoose) {
  mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo');
    this.uri = `${mongoose.connection.host}:${mongoose.connection.port}`;
    this.connected = true;
  });
}

function mongoReconnect(mongoose) {
  mongoose.connection.on('reconnected', () => {
    console.log('Reconnected to Mongo');
    this.connected = true;
  });
}

function mongoError(mongoose) {
  mongoose.connection.on('error', e => {
    console.log(e);
    console.log('Mongo error!');
    this.connected = false;
  });
}

function mongoDisconnected(mongoose) {
  mongoose.connection.on('disconnected', () => {
    console.log('Mongo disconnected!');
    this.connected = false;
  });
}
  