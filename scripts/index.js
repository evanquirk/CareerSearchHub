function load() {
  $('.application').hide()
  $('.github').hide()
  $('.interviewskills').hide()
  $('.networking').hide()
  $('.strategy').hide()
  $('.resume').hide()
  $('.boards').hide()

  // Return to Login Page
  $('.gohome').on('click', function () {
    location.reload();
  })

  // Return to Home Page
  $('.Home').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.interviewskills').hide()
    $('.strategy').hide()
    $('.networking').hide()
    $('.boards').hide()
    $('.Category-card').slideDown()
  })

  // Get Started === Strategy
  $('.Strategy').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.interviewskills').hide()
    $('.strategy').slideDown()
    $('.networking').hide()
    $('.boards').hide()
    $('.Category-card').hide()
  })

  // Docs === Applications
  $('.Applications').on('click', function () {
    $('.github').hide()
    $('.interviewskills').hide()
    $('.networking').hide()
    $('.strategy').hide()
    $('.application').slideDown()
    $('.boards').hide()
    $('.Category-card').hide()
  })

  $('.JobBoards').on('click', function () {
    $('.github').hide()
    $('.interviewskills').hide()
    $('.networking').hide()
    $('.strategy').hide()
    $('.boards').slideDown()
    $('.application').hide()
    $('.Category-card').hide()
  })

  $('.GitHub').on('click', function () {
    $('.application').hide()
    $('.interviewskills').hide()
    $('.networking').hide()
    $('.strategy').hide()
    $('.github').slideDown()
    $('.boards').hide()
    $('.Category-card').hide()
  })

  $('.Interviews').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.networking').hide()
    $('.strategy').hide()
    $('.interviewskills').slideDown()
    $('.boards').hide()
    $('.Category-card').hide()
  })

  $('.Networking').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.interviewskills').hide()
    $('.strategy').hide()
    $('.networking').slideDown()
    $('.boards').hide()
    $('.Category-card').hide()
  })

  $('.prepheading').on('click', function () {
    if ($('#prep').css('display') !== 'none')
      $('#prep').slideUp()
    else {
      $('#prep').slideDown()
    }
  })

  $('.culturefitheading').on('click', function () {
    if ($('#culturefit').css('display') !== 'none')
      $('#culturefit').slideUp()
    else {
      $('#culturefit').slideDown()
    }
  })

  $('.techinterviewheading').on('click', function () {
    if ($('#techinterview').css('display') !== 'none')
      $('#techinterview').slideUp()
    else {
      $('#techinterview').slideDown()
    }
  })

  $('.followupheading').on('click', function () {
    if ($('#followup').css('display') !== 'none')
      $('#followup').slideUp()
    else {
      $('#followup').slideDown()
    }
  })

  $('.vancouver').on('click', function () {
    if ($('#vancouver').css('display') !== 'none')
      $('#vancouver').slideUp()
    else {
      $('#vancouver').slideDown()
      $('#toronto').hide()
      $('#victoria').hide()
      $('#calgary').hide()
      $('#montreal').hide()
    }
  })

  $('.toronto').on('click', function () {
    if ($('#toronto').css('display') !== 'none')
      $('#toronto').slideUp()
    else {
      $('#toronto').slideDown()
      $('#vancouver').hide()
      $('#victoria').hide()
      $('#calgary').hide()
      $('#montreal').hide()
    }
  })

  $('.victoria').on('click', function () {
    if ($('#victoria').css('display') !== 'none')
      $('#victoria').slideUp()
    else {
      $('#victoria').slideDown()
      $('#vancouver').hide()
      $('#toronto').hide()
      $('#calgary').hide()
      $('#montreal').hide()
    }
  })

  $('.calgary').on('click', function () {
    if ($('#calgary').css('display') !== 'none')
      $('#calgary').slideUp()
    else {
      $('#calgary').slideDown()
      $('#vancouver').hide()
      $('#toronto').hide()
      $('#victoria').hide()
      $('#montreal').hide()
    }
  })

  $('.montreal').on('click', function () {
    if ($('#montreal').css('display') !== 'none')
      $('#montreal').slideUp()
    else {
      $('#montreal').slideDown()
      $('#vancouver').hide()
      $('#toronto').hide()
      $('#victoria').hide()
      $('#calgary').hide()
    }
  })
}
