import express from 'express'

import { createServer, Server } from 'http';
import socketIo from 'socket.io';




interface IMessage {
    from: string;
    content: string;
    sendAt: string;
    sistem: boolean;
}

interface IClient {
    name: string,
    socketId: string
}


class App {
    public app: express.Application | undefined;
    public server: Server | undefined;
    private io: SocketIO.Server | undefined;
    public PORT: number = 8100;

    private clients: IClient[] = []


    constructor() {
        this.routes();
        this.sockets();
        this.listen();
    }

    routes() {
        this.app = express();
        this.app.route("/").get((req, res) => {
            res.sendFile(__dirname + '/index.html');
        });

        this.app.route('/users').get((req, res) => {
            res.send({ clients: this.clients })
        });

        this.app.route('/send').post((req, res) => {
            this.io && this.io.emit('chat message', { sistem: true, content: "TESTE", from: "sistem", sendAt: 1595908198454 });
        });


    }

    private sockets(): void {
        this.server = createServer(this.app);
        this.io = socketIo(this.server);
    }


    private listen(): void {
        let interval: any;

        this.io &&
            this.io.on('connection', (socket: SocketIO.Socket) => {
                console.log('New User Connected ' + socket.handshake.query.name + " " + socket.id);

                this.clients.push({ name: socket.handshake.query.name, socketId: socket.id });


                this.io && this.io.emit('chat message', { sistem: true, from: 'SISTEM', content: `${socket.handshake.query.name} Joined!`, sendAt: Date.now() });
                this.io && this.io.emit('list users', { clients: this.clients });



                socket.on('send message', (msg: IMessage) => {
                    this.io && this.io.emit('chat message', msg);
                    console.log(msg)
                });

                socket.on('disconnect', (socket: any) => {

                    var clientList = this.io?.clients().connected;

                    for (let i = 0; i < this.clients.length; i++) {
                        let check = clientList ? clientList[this.clients[i].socketId] : { vazio: true }

                        if (!check) {
                            this.io && this.io.emit('chat message', { sistem: true, from: 'SISTEM', content: `${this.clients[i].name} Left!`, sendAt: Date.now() });

                            this.clients.splice(i, 1)
                            this.io && this.io.emit('list users', { clients: this.clients });
                            break;
                        }
                    }
                    console.log('User disconnected');
                });


            });
    }


}

export default new App();

// const app: express.Application = express();


// app.use(express.static(__dirname));
// app.use(cors());
// app.use(bodyParser.json())



// app.get('/', (req: Request, res: Response) => {
//     res.sendFile(__dirname + '/index.html');
// })

// app.use('/chat', routes)


// export default app;




