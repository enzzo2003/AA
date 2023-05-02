const http = require('http');
const fs = require('fs');
const { google } = require('googleapis');

const credentials = JSON.parse(fs.readFileSync('sheets.json', 'utf-8'));
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const { client_email, private_key } = credentials;
const auth = new google.auth.JWT(client_email, null, private_key, SCOPES);

http.createServer((req, res) => {
  // Adicione os seguintes cabeçalhos para habilitar o CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Responda a solicitações de preflight com um status 200 OK
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/check-email') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { email } = JSON.parse(body);
      checkEmailInSheet(auth, email, (exists) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ exists }));
      });
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

function checkEmailInSheet(auth, email, callback) {
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = '1IaYIo6PwRK6i0Aola0Akxrd8VMlur1_OIWYGctTz4O4'; // Substitua pelo ID da sua planilha
  const range = 'Dados!A1:A681'; // Especifique o intervalo onde estão os e-mails

  sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      const emails = rows.map((row) => row[0]);
      if (emails.includes(email)) {
        callback(true);
      } else {
        callback(false);
      }
    } else {
      callback(false);
    }
  });
}
