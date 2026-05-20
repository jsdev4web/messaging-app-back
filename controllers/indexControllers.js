

async function indexHome(req, res) {
    res.send("Base Home Page")
}

/* async function indexParam(req, res){
    console.log(JSON.stringify(req.params))
    console.log(JSON.stringify(req.query))
    res.send("Index Home Page")
} */

export { indexHome,  } //indexParam