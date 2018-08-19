// DATA
var Flist = require("../data/friends");

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    // app.get("/api/hello", function (req, res) {
    //     var dD = { name: "Ian", last: "sanchez" };
    //     res.json(Flist);
    //     console.log("hello earth");
    //     var friendList = [{ num: 3 }, { num: 2 }, { num: 1 }];
    //     console.log(friendList);
    //     console.log(friendList[0].num);
    //     console.log(Flist);
    //     console.log("the data coming from the user: --> " + req[0]);
    // });

    app.post("/api/hello", function (req, res) {

        var ABStotal = [];
        var player1 = req.body;
        // Flist required contains data of friends to match with
        var lowScorer;
        // var lowScoreCompare = 0;

        for (var i = 0; i < Flist.length; i++) {
            ABStotal[i] = Math.abs(parseInt(player1.q1) - parseInt(Flist[i].Scores[0]));
            ABStotal[i] += Math.abs(parseInt(player1.q2) - parseInt(Flist[i].Scores[1]));
            ABStotal[i] += Math.abs(parseInt(player1.q3) - parseInt(Flist[i].Scores[2]));
            ABStotal[i] += Math.abs(parseInt(player1.q4) - parseInt(Flist[i].Scores[3]));
            ABStotal[i] += Math.abs(parseInt(player1.q5) - parseInt(Flist[i].Scores[4]));
            ABStotal[i] += Math.abs(parseInt(player1.q6) - parseInt(Flist[i].Scores[5]));
            ABStotal[i] += Math.abs(parseInt(player1.q7) - parseInt(Flist[i].Scores[6]));
            ABStotal[i] += Math.abs(parseInt(player1.q8) - parseInt(Flist[i].Scores[7]));
            ABStotal[i] += Math.abs(parseInt(player1.q9) - parseInt(Flist[i].Scores[8]));
            ABStotal[i] += Math.abs(parseInt(player1.q10) - parseInt(Flist[i].Scores[9]));

            if(i === 0){
                lowScorer = i;
            }else{
                lowScorer = ABStotal.indexOf(Math.min(ABStotal[lowScorer],ABStotal[i]));
            }
        };


        // TESTING ---- i know, it's alot but gives me my bearings! -----------------------------
        console.log("weeeeee!");
        console.log(lowScorer);
        console.log(player1.q1);
        console.log(parseInt(player1.q1));
        console.log(Math.abs(parseInt(player1.q1)));
        console.log("---");
        console.log("---");
        console.log(ABStotal[0] = Math.abs(parseInt(player1.q1) - parseInt(Flist[0].Scores[0])));
        console.log(ABStotal[0] = Math.abs(parseInt(player1.q2) - parseInt(Flist[0].Scores[1])));
        console.log(ABStotal[0] = Math.abs(parseInt(player1.q3) - parseInt(Flist[0].Scores[2])));
        console.log("min min min ---");
        console.log(ABStotal);
        console.log(Math.min([25,34,99,11]));

        console.log(player1.name);
        var dD = { name: "Ian", last: "sanchez" };
        console.log("hello earth");
        var friendList = [{ num: 3 }, { num: 2 }, { num: 1 }];
        console.log(friendList);
        console.log(friendList[0].num);
        console.log(Flist);
        console.log(req.body.name);
        console.log(Flist[lowScorer]);
        // -----------------------------------------

        // res.json(Flist);
        res.json(Flist[lowScorer]);
    });

    // app.get("/api/waitlist", function(req, res) {
    //   res.json(waitListData);
    // });

    // // API POST Requests
    // // Below code handles when a user submits a form and thus submits data to the server.
    // // In each of the below cases, when a user submits form data (a JSON object)
    // // ...the JSON is pushed to the appropriate JavaScript array
    // // (ex. User fills out a reservation request... this data is then sent to the server...
    // // Then the server saves the data to the tableData array)
    // // ---------------------------------------------------------------------------

    // app.post("/api/tables", function(req, res) {
    //   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    //   // It will do this by sending out the value "true" have a table
    //   // req.body is available since we're using the body-parser middleware
    //   if (tableData.length < 5) {
    //     tableData.push(req.body);
    //     res.json(true);
    //   }
    //   else {
    //     waitListData.push(req.body);
    //     res.json(false);
    //   }
    // });

    // // ---------------------------------------------------------------------------
    // // I added this below code so you could clear out the table while working with the functionality.
    // // Don"t worry about it!

    // app.post("/api/clear", function() {
    //   // Empty out the arrays of data
    //   tableData = [];
    //   waitListData = [];

    //   console.log(tableData);
    // });
};