function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $(".box").css("display","none");
  $(".data").css("display","block");
  $("#pic").attr('src',profile.getImageUrl());
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());
  
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      $(".data").css("display","none");
      $(".box").css("display","block");
      console.log('User signed out.');
    });
  }