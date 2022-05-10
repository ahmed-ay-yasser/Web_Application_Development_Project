$(document).ready(function(){
  //Show Login Page
  $('div#login').click(function(){
      $('div.login-form').addClass('popup');
  })

  //Hide Login Page
  $('div.login-form form .fa-xmark').click(function(){
      $('div.login-form').removeClass('popup');
  })

  //Login Popup Message
  $('div.login-form form .btn').click(function(){
    window.alert("Welcome back, Analyst!");
  })
});
