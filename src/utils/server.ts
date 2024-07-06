
import express from 'express';
import cmd from 'node-cmd';
import crypto from 'crypto'; 
import bodyParser from 'body-parser';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

const onWebhook = (req: any, res: any) => {
  let hmac = crypto.createHmac('sha1', `${process.env.GIT_SECRET}`);
  let sig  = `sha1=${hmac.update(JSON.stringify(req.body)).digest('hex')}`;

  if (req.headers['x-github-event'] === 'push' && sig === req.headers['x-hub-signature']) {
    cmd.run('chmod 777 ./git.sh'); 
    
    cmd.get('./git.sh', (err: any, data: any) => {  
      if (data) {
        console.log(data);
      }
      if (err) {
        console.log(err);
      }
    })

    cmd.run('refresh');
  }

  return res.sendStatus(200);
}

app.post('/git', onWebhook);

app.get('/', function(request, response) {
  response.sendStatus(200);
});

const listener = app.listen(9876, function() {
  console.log('Your app is listening on port ' + 9876);
});
