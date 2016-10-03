var mymap = L.map('mapid').setView([37.76, -122.4], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/kailenswain/citj6hv5900432jpl71l60e06/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FpbGVuc3dhaW4iLCJhIjoiY2l0aTM2bnFtMDNzbzJ0bWt0Mzg5YjFicSJ9.yQONqVdtvpIp-BwioGDGdw',{
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'

}).addTo(mymap);

var marker = L.circle([37.7673, -122.39965]).addTo(mymap);


