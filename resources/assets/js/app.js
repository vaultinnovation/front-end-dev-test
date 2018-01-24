function init() {
    
    $.ajax({
        url: "/catapi.php",
        success: function(data){
            var json = JSON.parse(data).data.images;
            var source   = $("#cat-template").html();
            var template = Handlebars.compile(source);
            var html = template(json);
            $("#cat-grid").html(html);
        },
        error: function(e) {
            console.log("error");
        }
    });
    
    responsive();
}

function responsive() {
    if($(window).width() <= 425) {
        $(".hamburger").removeClass("hide");
    } else {
        $(".hamburger").addClass("hide");
    }
}

function hamburger() {
    if($(".hamburger").hasClass('collapsed')) {
        $(".hamburger").addClass('is-active');  
    } else {
        $(".hamburger").removeClass('is-active');
    }
}

$(window).resize(responsive);
$(".hamburger").click(hamburger);

init();
