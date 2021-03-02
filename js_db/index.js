var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");


const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000




var mysql  = require('mysql');
const DBConnection = require('./DBConnection.json');
var connection = mysql.createConnection(DBConnection);
 
connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
  });

app.use(bodyParser.json()); 

app.use('/exchangeRate', function (req, res) {
    res.sendFile('exchangeRate.html', { root: __dirname });
});

app.get('/hello', (req, res) => res.send('Hello World!'))

app.post("/test", (req, res) => { 
    let from = req.body.From;
    console.log("From: " + from);
    let to = req.body.To;
    console.log("To: " + to);
    let amount = req.body.Amount;
    console.log("Amount: "+ amount);
    //let query = `CALL innodb.NEW_CALC_AVG('usd', 'inr');`;
    let selectQuery = `SELECT avg(${from}) as ${from}, avg(${to}) as ${to} FROM innodb.currencies;`
    let result;
    connection.query(selectQuery, function (error, results, fields) {
        if (error) //error from db query
            res.status(500).json(error);
        else //it worked
            //resultAmount = amount*results[0][to];
            //res.send(`Converting ${from} to ${to} and the amount requested was ${amount}. The conversion rate is: ${results[0][to]}. The resultant amount will be : ${resultAmount}`); // wrap array in object to be parsed by unity
            var currentQuery= `SELECT ${from}, ${to} from innodb.currencies WHERE unique_date = (SELECT MAX(unique_date) FROM innodb.currencies)`
            connection.query(currentQuery, function (error, newResults, fields) {
              if (error) //error from db query
                res.status(500).json(error);
              else //it worked
                var averageConversion = (results[0][to]/results[0][from]).toFixed(4);
                var currentConversion = (newResults[0][to]/newResults[0][from]).toFixed(4); 
                resultAmount = (amount*currentConversion).toFixed(4);
                if(currentConversion < averageConversion)
                  res.send(`<b>Yes</b> we recommend converting your money today. <br />
                    Average conversion Rate ${from} to ${to} is <b> ${averageConversion}.</b><br /> 
                    Today's conversion rate is <b>${currentConversion}.</b><br />
                    The total amount you would receive is <b>${resultAmount} ${to}.</b>`);
                else
                  res.send(`<b>No</b> we do not recommend converting your money today. <br />
                    Average conversion Rate ${from} to ${to} is <b> ${averageConversion}.</b><br /> 
                    Today's conversion rate is <b>${currentConversion}.</b> <br />
                    The total amount you would receive is<b> ${resultAmount} ${to}.</b>`);
            });
    });
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//connection.end();
