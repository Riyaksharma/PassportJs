const { mongoosePassword } = process.env;
module.exports = {
  MONGOURI: `mongodb+srv://Riya:${mongoosePassword}@cluster1.6wvv0p9.mongodb.net/?retryWrites=true&w=majority`,
};
