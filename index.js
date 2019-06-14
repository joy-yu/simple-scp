const client = require('scp2');
const colors = require('colors');

module.exports = class SSH {
  static scp2 = client;

  constructor(options = {}) {
    this.startTime = null;
    this.options = options;
  }

  dest(local, remote) {
    let startDate = Date.now();
    let opts = { ...this.options, path: remote };
    console.log(colors.rainbow('\nStart upload, please wait...'));
    client.scp(local, opts, err => {
      if (err) throw err;
      console.log(colors.green(`Uploaded ${colors.red(local)} successfully in ${Date.now() - startDate}ms`));
    });
  }
};
