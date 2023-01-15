var rating = "";

$(".btn1").click(function(){
    rating = document.getElementById(this.id).innerHTML;
    document.getElementById(this.id).classList.add("btn-selected");
});

$(".btn").click(function(){
    $(".card").css("display", "none");
    $(".thankyou-box").css("display", "block");
    $("h6").text("You selected " + rating + " out of 5");
});
