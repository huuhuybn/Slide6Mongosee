var express = require('express');
var router = express.Router();
var mongo = require('mongoose')

main().catch(err => console.log(err));
async function main() {
  await mongo.connect('mongodb+srv://admin:admin123@cluster0.jkglkic.mongodb.net/');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const sv
    = new mongo.Schema({
  name: String,
  diaChi : String
});
/* GET home page. */
router.get('/', async function(req, res, next) {
  const SinhVien = mongo.model('SinhVien', sv);

  const data = await SinhVien.find({})
  console.log(data)

  res.render('index', { title: 'Express', data : data });
});

module.exports = router;
