const SSH = require('simple-scp');

const serverConfig = {
  test: {
    host: '1.2.3.4',
    port: 22,
    username: 'root',
    password: '123456'
  },
  prod: {
    host: '1.2.3.4',
    port: 22,
    username: 'root',
    password: '123456'
  }
};

const deploy = new SSH(serverConfig.test);
deploy.dest('dist', '/usr/share/nginx/html/admin/');
