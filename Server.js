const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public/dist/public"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

// app.get('/', (request, response) => {
//     var options = {
//         'locations': ["San Jose", "Los Angeles", "Dallas", "Tulsa"],
//         'languages': ["JavaScript", "Python", "Node", "Express"]
//         }
//     response.render("survey",options);
//     });
// app.post('/results', (request, response) => {
//     console.log(request.body)
    
//     response.render("info",request.body);
    // });
    

app.listen(8000, () => console.log("listening on port 8000"));
