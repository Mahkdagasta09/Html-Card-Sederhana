// api url
const api_url = "https://api.thingspeak.com/channels/2057337/feeds.json?api_key=V&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("Celsius").innerHTML = obj.field1;
      document.getElementById("Distance").innerHTML = obj.field2;
    });
}, 1000);

var card = $('.card_body');

setTimeout(function(){
  card.addClass('active');
}, 500);