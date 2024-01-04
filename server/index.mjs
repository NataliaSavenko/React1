import express from 'express'
import PostRoutes from './routes/posts.mjs'
import CommentRoutes from './routes/comments.mjs';

import dbConnection from './db/index.mjs'

dbConnection.on('error',()=>console.log('DB connect error'));
dbConnection.on('connected',()=>console.log('DB connect'));

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('<h3>Hello World!</h3>')
})

app.use('',PostRoutes);

app.use('',CommentRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

