import express from 'express';
import expressListEndpoints from 'express-list-endpoints';
import todo from './routes/todo'

const app = express();

app.use('/', todo)

app.listen(8000, () => {
    console.log('Listen on port 8000.');
    console.log(expressListEndpoints(app))
});

export default app;