var express = require('express')
var app = express()

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

app.get('/:id?', function(req, res) {
    var date = false;
    if(req.params.id !== undefined){
        if(!isNaN(parseInt(req.params.id))){
            date =new Date(req.params.id*1000);
        }else {
            date =new Date(req.params.id);
        }
    }
    
    var date1 = (date)?Math.floor(date.getTime()/1000):null;
    var date2 = (date)?(monthNames[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()):null;
    res.send({ "unix": date1, "natural": date2 });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port '+process.env.PORT);
});