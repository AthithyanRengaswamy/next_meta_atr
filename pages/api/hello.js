// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const os = require('os');

export default function handler(req, res) {
  const details = {
    version: process.version,
    pid: process.pid,
    cpu: os.cpus(),
    version: os.version(),
    platform: os.platform(),
    freemem: os.freemem()
  };
  res.status(200).json(details)
}
