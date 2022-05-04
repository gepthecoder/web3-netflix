let fs = require("fs");
let axios = require("axios");

let media = ["nice game.mp4"];
let ipfsArray =  [];
let promises = [];

for (let i = 0; i < media.length; i++) {
    promises.push(
        new Promise((res, rej) => {
            fs.readFile(`${__dirname}/export/${media[i]}`, (err, data) => {
                if(err) rej();
                ipfsArray.push(
                    {
                        path: `media/${i}`,
                        content: data.toString("base64"),
                    });
                    res();
            });
        })
    );
}

// when we resolve our promises we can use axios to post to ipfs

Promise.all(promises).then(() => {
    axios.post(
        "https://deep-index.moralis.io/api/v2/ipfs/uploadFolder",
        ipfsArray,
        {
            headers: {
            "X-API-KEY": "zWqbKMg7Das2YYXSODdvGSQfO2gin0RrqD3szVFKbt0v0W7Wai6TlB65ELItvurj",
            "Content-Type": "application/json",
            accept: "application/json"
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity 
        }
    ).then((res) => {
        console.log(res.data);
    }).catch((error) => {
        console.log(error)
    });
});