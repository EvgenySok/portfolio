const text = require('textbelt');

console.log('console:', text)

text.send('34696112872', 'A sample text message!', undefined, function(err) {
  if (err) {
    console.log(err);
  }
});

// const request = require('request');
// request.post('https://textbelt.com/text', {
//   form: {
//     phone: '34696112872',
//     message: 'Hello world',
//     key: 'textbelt',
//   },
// }, (err, httpResponse, body) => {
//   console.log(JSON.parse(body));
// })
