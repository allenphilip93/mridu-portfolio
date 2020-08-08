const express = require('express')
const app = express();

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(process.env.PORT, () => {
  console.log('Example app listening on port ' + process.env.PORT + "!")
});