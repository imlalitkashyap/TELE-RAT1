const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7559855627:AAH_63HgHGhFBEw4fnumx8BPmT2QGgMfs98',
  id: isNaN(parsedId) ? 6477656662 : parsedId // replace 12345.. with your telegram chat id
};
