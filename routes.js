module.exports = function(app) {

app.get('/', function(request, response) { response.sendFile(__dirname + '/views/index.html') });
  // Post a file.
app.get('/adore', function(request, response) {response.sendFile(__dirname + '/views/adore.html') });
app.get('/kekbot',function(request, response) {response.send("<script> location.href = \"https://discordapp.com/oauth2/authorize?client_id=493708199447363584&permissions=8&scope=bot\" </script>") });
app.get('/nyancat',function(request, response) {response.send("<script> location.href = \"https://discord.gg/k9yCf22\" </script>") });
}