import express from 'express'
import articles from './routes/articles';

const app = express();

app.use('/', express.static(__dirname + '/../dist'));

app.get('/hello', (req,res) => {
    return res.send('Can you hear me?');
});

app.use('/articles', articles);
// test
const server = app.listen(3000, () => {
    console.log('Express listening port 3000');
});