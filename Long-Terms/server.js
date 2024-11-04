const express = require('express');
const path = require('path');
const app = express();



const cors = require('cors');

// const app = express();
var multer = require('multer')

var storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './uploads/');
    },
    filename: function (request, file, callback) {
        console.log(file);
        callback(null, file.originalname)
    }
});

var upload = multer({ storage: storage });

app.post('/', upload.single('photo'), function (req, res) {

    console.log(req.body) // form fields
    console.log(req.file) // form files
    res.status(204).end()
});


app.use(cors());

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.status(200).send('File uploaded successfully.');
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/Long-Terms')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/Long-Terms/index.html'));
});

// Start the app by listening on the default Heroku port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
