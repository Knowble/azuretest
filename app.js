const express = require( 'express' );
const app = express();
var port = process.env.PORT
app.use( express.json() );

app.get( '/', ( req, res ) => {
    res.send("hello word");
} );


app.post( '/', ( req, res ) => {
    console.log( 'received webhook', req.body );
    res.sendStatus( 200 );
} );

app.listen(port, () => console.log( 'Node.js server started on port 9000.' ) );