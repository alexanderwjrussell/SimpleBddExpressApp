module.exports = {
    uri: '',
    host: '',
    connected: false,
    connect(mongoose, uri) {
      mongoose.Promise = global.Promise;
  
      mongoose.connection.on('connected', () => {
        console.log('Connected to Mongo');
        this.uri = `${mongoose.connection.host}:${mongoose.connection.port}`;
        this.connected = true;
      });
      //note: reconnect only works if mongod downtime is less then 10 sec; it's in mongoose config
      mongoose.connection.on('reconnected', () => {
        console.log('Reconnected to Mongo');
        this.connected = true;
      });
      mongoose.connection.on('error', e => {
        console.log(e);
        console.log('Mongo error!');
        this.connected = false;
      });
      mongoose.connection.on('disconnected', () => {
        console.log('Mongo disconnected!');
        this.connected = false;
      });
  
      return mongoose.connect(uri);
    },
    isConnected() {
      return this.connected;
    },
    getUri() {
      return this.uri;
    },
  };
  