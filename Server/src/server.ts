import app from './index'
import { Server } from 'http';
import ngrok from 'ngrok'


let port = process.env.PORT || app.PORT;
app.server &&
    app.server.listen(port, async function () {

        console.log("Generate tunnel url...")
        const url = await ngrok.connect(8100);
        console.log(`You can access by localhost:${port} or ${url}`)

        console.log(`server running in port:${port}`);
    });