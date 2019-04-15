/* this is the code used to display an image that displays a modal image when clicked   */
var code1 = '\
<div class="col-6 col-md-4 col-lg-3">\
  <a data-target="#'
var code2 ='\
" data-toggle="modal" href="#" class="color-gray-darker td-hover-none">\
    <img src="';
var code3 = '\
"  class="img-fluid img ">\
  </a>\
</div>\
\
<div aria-hidden="true" aria-labelledby="myModalLabel" class="modal fade" id="'
var code4 = '\
" role="dialog" tabindex="-1" >\
  <div class="modal-dialog modal-xl" role="document" style="padding:10px 30px 10px 10px;">\
    <div class="modal-content" >\
      <div class="modal-body mb-0 p-0">\
       <img src="';
var code5 = '\
        " alt="" style="width:105%;">\
        <div style="background-color:rgb(255, 255, 255, .5); position:absolute; top:0; width:105%;">\
          <span style="margin:10px; display:inline-block;">image title</span>\
          <button class="btn btn-outline-defaul btn-rounded btn-md ml-4 text-center" data-dismiss="modal" style="float:right; margin:5px !important;" type="button">X</button>\
        </div>\
      </div>\
    </div>\
  </div>\
</div>'

function photo(myImage, id) {
  document.write(code1 + id + code2 + myImage + code3 + id + code4 + myImage + code5);
}


/* this is the code to create the header used on each page */
var mainHeader = '\
<header class="font sticky-top"> \
  <nav class="navbar navbar-expand-md navbar-light bg-light main-nav">\
    <span class="navbar-text mr-auto title">Ismael Villalobos</span>\
    <button class="btn shadow-none navbar-toggler" data-toggle="collapse" data-target="#collapses">\
      <span >&#9776;</span>\
    </button>\
    <div class="collapse navbar-collapse" id="collapses">\
      <ul class="navbar-nav ml-auto" >\
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>\
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>\
        <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>\
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>\
      </ul>\
    </div>\
  </nav>\
</header>';

function header() {
  document.write(mainHeader);
}
