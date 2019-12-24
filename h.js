/*var staticUrl = 'http://crossorigin.me/https://ksjazzguitar.github.io/data/techs.json';
$.getJSON(staticUrl, function (data) {
    console.log("This is an example of a static JSON file being served by a web server.")
    console.log(data);
});
*/

var dynamicUrl = 'https://history.muffinlabs.com/date';
$.getJSON(dynamicUrl, function (data) {
    console.log("This is an example of a dynamic JSON file being served by a web server.")
    console.log(data);
}).done(function (data) {
    $('#test').append(JSON.stringify(data.date))
    //  alert(data.data.Eventslength)
    //$('#monitor_data').append(JSON.stringify(data.data.length))
    for (var r = 0; r < 1; r++) {
        var math = Math.floor(Math.random() * (data.data.Events.length))
    //    $('#Birth' + r.toString()).append(math.toString())
        var e=JSON.stringify(data.data.Events[math].text)
        $('#Events' + r.toString()).append(e.substring(1,e.length-1))
        var event = JSON.stringify(data.data.Events[math].year)
        $('#Event' + r.toString() + 'year').append( event.substring(1,event.length-1)+"-");

        var math = Math.floor(Math.random() * (data.data.Births.length))
        var b=JSON.stringify(data.data.Births[math].text)
        $('#Birth' + r.toString()).append(b.substring(1,b.length-1))
        var birth = JSON.stringify(data.data.Births[math].year)
        $('#Birth' + r.toString() + 'year').append( birth.substring(1,birth.length-1)+"-");


        var math = Math.floor(Math.random() * (data.data.Deaths.length))
        var d=JSON.stringify(data.data.Deaths[math].text)
        $('#Death' + r.toString()).append(d.substring(1,d.length-1))
        var death = JSON.stringify(data.data.Deaths[math].year)
        $('#Death' + r.toString() + 'year').append( death.substring(1,death.length-1)+"-");
    }


    //  $('#monitor_data').append(JSON.stringify(data))



});