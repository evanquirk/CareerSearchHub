function load() {
  $('.application').hide()
  $('.github').hide()
  $('.interviewskills').hide()
  $('.networking').hide()
  $('.strategy').hide()
  $('.resume').hide()
  $('.boards').hide()
  $('.video').hide()

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
  })

  $('.Videos').on('click', function () {
    $('.application').hide()
    $('.github').hide()
    $('.interviewskills').hide()
    $('.strategy').hide()
    $('.networking').hide()
    $('.boards').hide()
    $('.video').show()
    $('.Category-card').hide()
  })
}
