function load() {
  $('.application').hide()
  $('.github').hide()
  $('.interviewskills').hide()
  $('.networking').hide()
  $('.strategy').hide()
  $('.resume').hide()
  $('.boards').hide()
  $('.video').hide()
  $('.techstuff').hide()

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
    $('.video').hide()
    $('.Category-card').slideDown()
    $('.techstuff').hide()
  })

  // Get Started === Strategy
  $('.Strategy').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.interviewskills').hide()
    $('.strategy').slideDown()
    $('.networking').hide()
    $('.boards').hide()
    $('.video').hide()
    $('.Category-card').hide()
    $('.techstuff').hide()
  })

  // Docs === Applications
  $('.Applications').on('click', function () {
    $('.github').hide()
    $('.interviewskills').hide()
    $('.networking').hide()
    $('.strategy').hide()
    $('.application').slideDown()
    $('.boards').hide()
    $('.video').hide()
    $('.Category-card').hide()
    $('.techstuff').hide()
  })

  $('.JobBoards').on('click', function () {
    $('.github').hide()
    $('.interviewskills').hide()
    $('.networking').hide()
    $('.strategy').hide()
    $('.boards').slideDown()
    $('.application').hide()
    $('.video').hide()
    $('.Category-card').hide()
    $('.techstuff').hide()
  })

  $('.GitHub').on('click', function () {
    $('.application').hide()
    $('.interviewskills').hide()
    $('.networking').hide()
    $('.strategy').hide()
    $('.github').slideDown()
    $('.boards').hide()
    $('.video').hide()
    $('.Category-card').hide()
    $('.techstuff').hide()
  })

  $('.Interviews').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.networking').hide()
    $('.strategy').hide()
    $('.interviewskills').slideDown()
    $('.boards').hide()
    $('.video').hide()
    $('.Category-card').hide()
    $('.techstuff').hide()
  })

  $('.Networking').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.interviewskills').hide()
    $('.strategy').hide()
    $('.networking').slideDown()
    $('.boards').hide()
    $('.video').hide()
    $('.Category-card').hide()
    $('.techstuff').hide()
  })

  // Workshops === Videos
  $('.Videos').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.interviewskills').hide()
    $('.strategy').hide()
    $('.networking').hide()
    $('.boards').hide()
    $('.video').show()
    $('.Category-card').hide()
    $('.techstuff').hide()
  })

  $('.Tech').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.interviewskills').hide()
    $('.strategy').hide()
    $('.networking').hide()
    $('.boards').hide()
    $('.techstuff').show()
    $('.video').hide()
    $('.Category-card').hide()
  })
}
