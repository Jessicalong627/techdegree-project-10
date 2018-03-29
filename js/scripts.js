var users = document.getElementById("users");
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://randomuser.me/api/?nat=us&results=12&inc=name,email,location,dob,picture,phone&noinf');
ourRequest.onload = function() {
  var data = JSON.parse(ourRequest.responseText);

    var l = data.results.length;
    for(var i = 0; i < l; i++) {

      users.insertAdjacentHTML('beforeend', '<p><img src="'+
                               data.results[i].picture.medium +'" data-pic='+
                               data.results[i].picture.large +' data-name="'+
                               data.results[i].name.first + ' ' +
                               data.results[i].name.last + '" data-email="'+
                               data.results[i].email +'" data-location="' +
                               data.results[i].location.city + '" data-phone="' +
                               data.results[i].phone + '"><span class="user-name">'+
                               data.results[i].name.first + ' ' +
                               data.results[i].name.last + '<br> ' +
                               data.results[i].email + '<br> ' +
                              data.results[i].location.city + '</span></p>');


    }

};
ourRequest.send();



const modal = document.getElementById('myModal');
let span = document.getElementsByClassName("close")[0];
const content = document.getElementsByClassName("modal-content")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

users.addEventListener('click', function(e) {
  let target = e.target;
  let data_src = target.getAttribute('data-pic');
  let data_name = target.getAttribute('data-name');
  let data_email = target.getAttribute('data-email');
  let data_location = target.getAttribute('data-location');
  let data_phone = target.getAttribute('data-phone');


// photo
//name
// email
//city with bottom border

//phone
//address, state, zip
//Birthday 01/04/76

  if (target.nodeName === 'IMG') {
      modal.style.display = "block";
      content.innerHTML += '<img id="profile" src="' + data_src + '" alt="">';
      content.innerHTML += '<span class="name">'+ data_name +'</span>';
      content.innerHTML += '<span class="email">'+ data_email +'</span>';
      content.innerHTML += '<span class="location">'+ data_location +'</span>';
      content.innerHTML += '<span class="phone">'+ data_phone +'</span>';


}

  });
