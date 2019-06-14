const client = require('scp2');
const colors = require('colors');

class SSH {
  constructor(options = {}) {
    this.startTime = null;
    this.options = options;
    this.scp2 = client;
  }

  dest(local, remote) {
    let startDate = Date.now();
    let opts = { ...this.options, path: remote };
    console.log(colors.rainbow('\nStart upload, please wait...'));
    this.scp2.scp(local, opts, err => {
      if (err) throw err;
      console.log(colors.green(`Uploaded ${colors.red(local)} successfully in ${Date.now() - startDate}ms`));
    });
  }
}

module.exports = SSH;
