'use strict';
const { exec } = require("child_process");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    afterCreate: async(event) => {
      console.log('hit');
      const { result, params } = event;
      exec(`cd /home/stokelyne/stokelyne && yarn build && pm2 restart all`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
    },
    afterUpdate: async(event) => {
      console.log('hit');
      const { result, params } = event;
      exec(`cd /home/stokelyne/stokelyne && yarn build && pm2 restart all`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
    },
    afterDelete: async(event) => {
      const { result, params } = event;
      exec(`cd /home/stokelyne/stokelyne && yarn build && pm2 restart all`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
    }
  }
};
