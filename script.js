$(".mobile_menu_nav").hide()
$(".mob_btn_menu").click(function(){
    $(".mobile_menu_nav").slideToggle(500)
})

// Languge changes function
$(".btn_language").click(function(){
    if($(".txt_language").text() != "EN"){
        $(".txt_language").text("EN")
    }else{
        $(".txt_language").text("УК")
    }

    if($(".name_logo_one").text() == "Оренда"){
        $(".name_logo_one").text("Rent")
    }else{
        $(".name_logo_one").text("Оренда")
    }

    if($(".name_logo_two").text() == "АВТО"){
        $(".name_logo_two").text("CAR")
    }else{
        $(".name_logo_two").text("АВТО")
    }

    if($(".m1").text() == "Додому"){
        $(".m1").text("Home")
    }else{
        $(".m1").text("Додому")
    }

    if($(".m2").text() == "Резервація"){
        $(".m2").text("Reservation")
    }else{
        $(".m2").text("Резервація")
    }

    if($(".m3").text() == "АвтоПарк"){
        $(".m3").text("CarPark")
    }else{
        $(".m3").text("АвтоПарк")
    }

    if($(".m4").text() == "Умови оренди"){
        $(".m4").text("Lease terms")
    }else{
        $(".m4").text("Умови оренди")
    }

    if($(".m5").text() == "Новини"){
        $(".m5").text("News")
    }else{
        $(".m5").text("Новини")
    }

    if($(".m6").text() == "Контакти"){
        $(".m6").text("Contacts")
    }else{
        $(".m6").text("Контакти")
    }

    if($(".mob_btn_menu").text() == "МЕНЮ"){
        $(".mob_btn_menu").text("MENU")
    }else{
        $(".mob_btn_menu").text("МЕНЮ")
    }

    if($(".mob_m1").text() == "Додому"){
        $(".mob_m1").text("Home")
    }else{
        $(".mob_m1").text("Додому")
    }

    if($(".mob_m2").text() == "Резервація"){
        $(".mob_m2").text("Reservation")
    }else{
        $(".mob_m2").text("Резервація")
    }

    if($(".mob_m3").text() == "АвтоПарк"){
        $(".mob_m3").text("CarPark")
    }else{
        $(".mob_m3").text("АвтоПарк")
    }

    if($(".mob_m4").text() == "Умови оренди"){
        $(".mob_m4").text("Lease terms")
    }else{
        $(".mob_m4").text("Умови оренди")
    }

    if($(".mob_m5").text() == "Новини"){
        $(".mob_m5").text("News")
    }else{
        $(".mob_m5").text("Новини")
    }

    if($(".mob_m6").text() == "Контакти"){
        $(".mob_m6").text("Contacts")
    }else{
        $(".mob_m6").text("Контакти")
    }

    if($("h1").text() == "Дозвольте знайти для вас ідеальний автомобіль"){
        $("h1").text("Let me find the perfect car for you").css({
            "font-size": "60px"
        })
    }else{
        $("h1").text("Дозвольте знайти для вас ідеальний автомобіль").css({
            "font-size": "50px"
        })
    }
})