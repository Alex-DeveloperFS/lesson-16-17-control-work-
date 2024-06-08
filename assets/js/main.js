// $(document).ready(function () {
//   $('.header-navbar__hamburger').on('click', function () {
//     $(this).toggleClass('active')
//     $('.header__navbar--list').toggleClass('active')
//   })
// })

$(document).ready(function () {
  $('.header-navbar__hamburger').on('click', function () {
    $(this).toggleClass('active')
    $('.header-navbar__list').stop(true, true).slideToggle(500)
  })
})