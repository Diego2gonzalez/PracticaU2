
const mailchimpTx = require("mailchimp_transactional")("c2d84babb94b4966913fb9e342497678-us18");

async function run() {
  const response = await mailchimpTx.users.ping();
  console.log(response);
}

run();