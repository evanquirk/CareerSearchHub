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
  $('.ai').hide()

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
    $('.ai').hide()
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
    $('.ai').hide()
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
    $('.ai').hide()
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
    $('.ai').hide()
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
    $('.ai').hide()
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
    $('.ai').hide()
  })

  // Workshops === Videos
  $('.Videos').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.interviewskills').hide()
    $('.strategy').hide()
    $('.networking').hide()
    $('.boards').hide()
    $('.video').slideDown()
    $('.Category-card').hide()
    $('.techstuff').hide()
    $('.ai').hide()
  })

  $('.Tech').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.interviewskills').hide()
    $('.strategy').hide()
    $('.networking').hide()
    $('.boards').hide()
    $('.techstuff').slideDown()
    $('.video').hide()
    $('.Category-card').hide()
    $('.ai').hide()
  })
  $('.UsingAI').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.interviewskills').hide()
    $('.strategy').hide()
    $('.networking').hide()
    $('.boards').hide()
    $('.techstuff').hide()
    $('.video').hide()
    $('.Category-card').hide()
    $('.ai').slideDown()
  })
}
