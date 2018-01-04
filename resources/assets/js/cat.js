/*
* MAKE ZE HAMBURGERS WORK
**/
var hamburger = document.querySelector(".hamburger"); //select the hamburger
  hamburger.addEventListener("click", function() { //watch for the click
    hamburger.classList.toggle("is-active"); //toggle the "is-active" class on the hamburger
  });

/*
* HANDLEBARS STUFF
**/
var source   = $('#catPicTemplate').html();
var template = Handlebars.compile(source);

var context = {catpics: [
    {catPicSrcUrl: "http://25.media.tumblr.com/tumblr_lzhyfx6Ig91r63pb5o1_250.gif", catPicId: "4h5"},
    {catPicSrcUrl: "http://25.media.tumblr.com/tumblr_lwypg7SN4f1r6b7kmo1_250.gif", catPicId: "6on"},
    {catPicSrcUrl: "http://25.media.tumblr.com/tumblr_ljo0v48wLL1qikh6fo1_500.gif", catPicId: "7rq"},
    {catPicSrcUrl: "http://25.media.tumblr.com/f1skSq6DEg7hghohd76fpzBCo1_400.gif", catPicId: "834"},
    {catPicSrcUrl: "http://24.media.tumblr.com/tumblr_m19op8td5T1r3qbvao1_400.gif", catPicId: "48l"},
    {catPicSrcUrl: "http://25.media.tumblr.com/tumblr_lhws8vhaie1qcn249o1_400.gif", catPicId: "7tk"},
    {catPicSrcUrl: "http://24.media.tumblr.com/tumblr_m23jqsnp7h1qzex9io1_400.gif", catPicId: "sv"},
    {catPicSrcUrl: "http://25.media.tumblr.com/tumblr_lt3xzei7CV1qdg99fo1_500.gif", catPicId: "gf"},
    {catPicSrcUrl: "http://25.media.tumblr.com/tumblr_latjtqu8wm1qbrje6o1_400.gif", catPicId: "4ku"},
    {catPicSrcUrl: "http://25.media.tumblr.com/tumblr_llfmcijg3Z1qc97bxo1_400.gif", catPicId: "4c5"},
    {catPicSrcUrl: "http://24.media.tumblr.com/tumblr_lee9m2htNt1qcn249o1_400.gif", catPicId: "80r"},
    {catPicSrcUrl: "http://24.media.tumblr.com/tumblr_m17qv5J4zO1qmfhcpo1_500.gif", catPicId: "agc"},
    {catPicSrcUrl: "http://25.media.tumblr.com/tumblr_lvob8aTaHd1qbe5pxo1_400.gif", catPicId: "9du"},
    {catPicSrcUrl: "http://25.media.tumblr.com/tumblr_les1x8EOG91qcn249o1_400.gif", catPicId: "808"},
    {catPicSrcUrl: "http://24.media.tumblr.com/tumblr_m3ovderxVT1r73wdao1_500.gif", catPicId: "3om"},
    {catPicSrcUrl: "http://24.media.tumblr.com/tumblr_m2lkfsY5O71r7r30ho1_400.gif", catPicId: "7ks"},
    {catPicSrcUrl: "http://25.media.tumblr.com/tumblr_m3ounor66v1r73wdao1_400.gif", catPicId: "3p1"},
    {catPicSrcUrl: "http://25.media.tumblr.com/tumblr_lnj73g8SYo1qint86o1_500.gif", catPicId: "4j1"},
    {catPicSrcUrl: "http://24.media.tumblr.com/tumblr_m2hg34ymdy1qejbiro1_400.gif", catPicId: "e2g"},
    {catPicSrcUrl: "http://25.media.tumblr.com/tumblr_m3ov52hIyF1r73wdao1_500.gif", catPicId: "3op"}
]}

for(var i = 0; i < context.catpics.length; i++){
    var newCatPic = template(context.catpics[i]);
    $('#catPicsGoHere').append(newCatPic);
}