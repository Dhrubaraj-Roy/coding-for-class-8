const express = require('express');
const app = express();
const main = require("./aiChatting");

app.use(express.json());
const historyofchat = {};

app.post('/chat', async(req, res)=>{
    const {id, msg} = req.body;
    if(!historyofchat[id]){
        historyofchat[id] = [];
        // {
        //     user123: []
        // }
    }


    const hist = historyofchat[id];

    const promt = [...hist, {
        role: 'user',
        content: msg
    }];

    const ans = await main(promt);

    hist.push({ role: 'user', content: msg });
    hist.push({ role: 'assistant', content: ans });

    res.send(ans)
}) 


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

