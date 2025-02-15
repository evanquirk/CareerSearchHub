$(document).ready(function () {
  let mainContent = $('main').html()
  let nav = $('header').html()
  let footer = $('footer').html()
  $('header').empty();
  $('main').empty();
  $('footer').empty();

  $('#login-button').click(() => {
    let password = $('#password').val()
    if (password === 'LHLCS') {
      setTimeout(() => {
        $('body').css('background-image', 'none');
        $('#login-form').hide();
        $('main').html(mainContent);
        $('header').html(nav);
        $('footer').html(footer);
        
        load()
      }, 400)
    } else {
      alert("Incorrect Password")
    }
  })

  // --- Login - Enter Key Stroke
  let input = document.getElementById("password");
  // let input = $('#password')
  input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("login-button").click();
    }
  });

})