const { execSync } = require('child_process');
const { createReadStream } = require('fs');
const { createInterface } = require('readline');

var filePath = './dl.txt';

var stream = createReadStream(filePath, 'utf8');
var reader = createInterface({input: stream});

reader.on('line', (data) => {
  if(data) {
    execSync('yt-dlp -x --audio-format mp3 --xattrs --embed-thumbnail ' + data);
  }
});

