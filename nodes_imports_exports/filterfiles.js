const fs = require('fs')
const path = require('path')

fs.readdir(folder, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
