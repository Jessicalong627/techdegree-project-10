var users = document.getElementById("users");
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://randomuser.me/api/?nat=us&results=12&inc=name,email,location,dob,picture,phone&noinfo');
ourRequest.onload = function() {
  var data = JSON.parse(ourRequest.responseText);

    var l = data.results.length;
    for(var i = 0; i < l; i++) {

      users.insertAdjacentHTML('beforeend', '<p><img src="'+
                               data.results[i].picture.medium +'" data-pic='+
                               data.results[i].picture.large +' data-name="'+
                               data.results[i].name.first + ' ' +
                               data.results[i].name.last + '" data-email="'+
                               data.results[i].email +'"><span class="user-name">'+
                               data.results[i].name.first + ' ' +
                               data.results[i].name.last + '<br> ' +
                               data.results[i].email + '<br> ' +
                              data.results[i].location.city + '</span></p>');


    }
};
ourRequest.send();




users.addEventListener('click', function(e) {
  let target = e.target;
  let data_src = target.getAttribute('data-pic');
  let data_name = target.getAttribute('data-name');
  let data_email = target.getAttribute('data-email');

  const modal = document.getElementById('myModal');
  let span = document.getElementsByClassName("close")[0];
  const content = document.getElementsByClassName("modal-content")[0];
      modal.style.display = "block";

      content.innerHTML += '<h3 class="profile__name">'+ data_name +'</h3>';
      content.innerHTML += '<span class="profile__email">'+ data_email +'</span>';

      span.addEventListener('click', function() {
          modal.style.display = "none";
      });

      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      };



  });
