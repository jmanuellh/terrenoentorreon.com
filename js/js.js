var map;
var marcador1;

var initMap = function () {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 25.580776, lng: -103.428467},
    zoom: 17,
    mapTypeId: 'hybrid'
  });
  marcador1 = new google.maps.Marker({
    map: map,
    position: {lat: 25.580776, lng: -103.428467},
    animation: google.maps.Animation.BOUNCE
    });
  
  
}

$(document).ready(function() {
  
  var app_id = '1760353000887125';
  //var login;
  var status;
  var modal = document.getElementById('myModal');
  var conocido = false;
  var nuevo = false;

  
    window.fbAsyncInit = function() {
    
      FB.init({
        appId     : app_id,
        status    : true,
        cookie    : true,
        xfbml     : true,
        version   : 'v2.7'
      });

      FB.Event.subscribe('auth.login', function (response) {
        //console.log("Se dedsencadeno un login");
        login();
        
      });
      FB.Event.subscribe('auth.statusChange', function (response) {
        //console.log("Se desencadeno Status Change");
        status = response.status;
        
      });
  };
//  <!--Facebook-->
//<div id="fb-root"></div>
//<script>
    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/es_LA/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
//</script>
  //
  var btnbuscar = function () {
    
    
    if (status === "connected") {
      
    } else {
      FB.login(function(response) {
      }, {scope: 'public_profile, email'});
      //login();
      //}, {scope: 'public_profile, email, user_birthday, user_education_history, user_location, user_work_history, user_website'});
      //$(modal).modal('show');
    }
  }
  
  var login = function(){
    //FB.api('/me',{fields: 'name, email, birthday, education, location, work, website'},
    FB.api('/me',{fields: 'name, email'}, function(response) {
      
      var nombre = response.name;
      var correo = response.email;
      //var nacimiento = response.birthday;
      //var educacion = response.education[response.education.length -1].school.name;
      //var residencia = response.location.name;
      //var trabajo = response.work[response.work.length -1].position.name + ", ";
        //trabajo += response.work[response.work.length -1].employer.name + ", ";
        //trabajo += response.work[response.work.length -1].location.name;
      //var web = response.website;
      var propiedad = "Interesado en la propiedad: "+$('#clave').text();
      var datos = [nombre, correo, propiedad];
      
      
      /*
      console.log("for javascript");
      for(var i = 0; i<7;i++){
        console.log(datos[i]);
      }*/
      $.ajax({
      type: "POST",
      url: "php/php.php",
      data: {datos: datos},
      success: function (d) {
        //console.log("Se envio un correo");
        //console.log(d);
        //window.location.href = "http://apiinmobiliaria.mx";
        $('.te-contactamos').append("Gracias!");
      }
      });

     });

      
  }

  /*var whats = function () {
    var queryselector = document.querySelector('.numero');
    console.log("queryselector "+queryselector);
    var rango = document.createRange();
    console.log("rango "+rango);
    var selectnode = rango.selectNode(queryselector);
    console.log("selectnode "+selectnode);
    var addrange = window.getSelection().addRange(rango);
    console.log("addrange "+addrange);
    var copy = document.execCommand('copy');
    console.log("copy "+copy);
  }*/
  
  //Remueve un objeto temporal que se creo para copiar el whatsapp
  /*var remover = function () {
    window.getSelection().removeAllRanges();
  }*/
  
  $('.te-contactamos').click(function(){
    btnbuscar();
    
  });
  /*$('.btn-whats').click(function () {
    whats();
    remover();
  });*/
  
  
});

