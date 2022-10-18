
//Get the framework for hapi.js
// import Hapi from 'hapi';

import { Server } from 'hapi';
const host = 'localhost';
const port = 3000;

// Lets create the server here
const server = Server({
    host: host,
    port: port
});

// Create an init method to start the server. 
const init = async () => {

    await server.start();
    console.log("Server up and running at port: " + port);

}

//Setup the routes
// import server from './routes/routes';

// require('./routes/routes')(server);

import CC from 'currency-converter-lt';

server.route({
    method: 'GET',
    path: '/currency/fromcurrency/tocurrency/{amounttoconvert}',
    handler: (request, h) => {
        
        let fromcurrency = "usd"; // us dollars

        let tocurrency ="ngn"; // nigerian naira 
        
        // const amounttoconvert = parseInt(request.params.amounttoconvert);
        
        let amounttoconvert = 1;

        let currencyconverter = new CC({
            from: fromcurrency,
            to: tocurrency,
            amount: amounttoconvert,
        })

        var data = {
            answer:   
            currencyconverter.convert(amounttoconvert).then ((Response) => {
                console.log(amounttoconvert + " " + fromcurrency 
                + " is equal to " + Response
                + " " + tocurrency
                )
            }),
        };

        return data;

        // let fromcurrency = "usd"; // us dollars

        // let tocurrency ="ngn"; // nigerian naira 
        
        // const amounttoconvert = parseInt(request.params.amounttoconvert);
        
        // let amounttoconvert = 1; 

        // let currencyconverter = new CC({
        //         from: fromcurrency,
        //         to: tocurrency,
        //         amount: amounttoconvert,
        //     })
            
        //     currencyconverter.convert().then ((Response) => {
        //         console.log(amounttoconvert + " " + fromcurrency 
        //         + " is equal to " + Response
        //         + " " + tocurrency
        //         )
        //     });
        }
});

// Call the init method.
init();
