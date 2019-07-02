var aboutme = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue rhoncus purus, vel accumsan magna mollis vitae. Sed elementum lectus quis iaculis faucibus. Nunc vestibulum pellentesque vehicula."
var servecies_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."

function createProgress(item, percent, name) {
    let progress_txt = document.createElement("div");
    let progress = document.createElement("div")
    let progress_bar = document.createElement("div")
    $(progress_txt).addClass("position-relative");
    $(progress_txt).append(" <span>" + name + "</span>");
    $(progress_txt).append($('<span>', { class: 'pos-abs-r' }).text(percent + "%"));

    $(progress).addClass("progress my-2");
    $(progress_bar).addClass("progress-bar");
    $(progress_bar).attr("style", "width:" + percent + "%;");
    $(progress_bar).attr("role", "progressbar");
    $(item).append(progress_txt)
    $(progress).append(progress_bar).addClass("my-2");
    $(item).append(progress);

}


function addImg(img) {
    let card = document.createElement("div");
    $(card).addClass("card");
    $(card).append($("<img></img>").attr("src", img).addClass("img-fluid"));

    $(".card-columns").append(card)
}

function createService(title, txt, icon) {

    let cardCol = document.createElement("div");
    $(cardCol).addClass("col-12 col-md-4 text-center");

    let cardIco = document.createElement("i");


    let card = document.createElement("div");
    $(card).addClass("card border-0 text-center my-5");

    let cardTitle = document.createElement("h5");
    $(cardTitle).addClass("card-title");
    $(cardTitle).text(title);

    $(cardIco).addClass(icon);
    console.log(cardIco);
    let cardText = document.createElement("p");
    $(cardText).addClass("card-text");
    $(cardText).text(txt);
    $(card).append(cardIco);
    $(card).append(cardTitle);
    $(card).append("<hr>");
    $(card).append(cardText);
    $(cardCol).append(card);
    $("#services_p").append(cardCol);

}

$(document).ready(function() {

    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('nav.navbar').addClass('active');
            $('nav.navbar .navbar-btn').removeClass('btn-outline-light').addClass('btn-primary');
        } else {
            $('nav.navbar').removeClass('active');
            $('#navigation').removeClass('in');
            $('nav.navbar .navbar-btn').addClass('btn-outline-light').removeClass('btn-primary');
        }
    });

    $("#home_p").addClass("text-center")
    $("#home_p").append("<p> hi i am <p>").addClass("d-block");
    $("#home_p").addClass("text-capitalize")
    $("#home_p").append("<p> mohamed nasser </p>").addClass("d-block");
    $("#home_p").append("<p> anime character and professional ninja </p>").addClass("d-block");

    //skills creation


    var skills = document.createElement("div");

    var professional = document.createElement("div");;

    $(skills).addClass("col-12 col-md-6");
    $(skills).append($("<h3> Technical Skills</h3>").addClass("mb-5"));
    createProgress(skills, 86, "javascript");
    createProgress(skills, 50, "javascript");
    createProgress(skills, 90, "javascript");
    createProgress(skills, 100, "python");
    $("#skills_p").append(skills);


    $(professional).addClass("col-12 col-md-6");
    $(professional).append($("<h3>Professional Skills</h3>").addClass("mb-5"));
    createProgress(professional, 69, "communication");
    createProgress(professional, 79, "teamwork");
    createProgress(professional, 90, "research");
    createProgress(professional, 21, "titan");
    $("#skills_p").append(professional);




    //about section

    var img = document.createElement("div");
    $(img).addClass("col-12 col-md-6 my-5");
    $(img).append($("<img></img>").attr("src", "./p1.jpg").addClass("img-fluid rounded-circle"))
    $("#about_p").append(img);

    var about_txt = document.createElement("div");
    $(about_txt).addClass("col-12 col-md-6 my-5 text-center");
    $(about_txt).append($("<p></p>").text(aboutme));
    $("#about_p").append(about_txt);



    //servecies section
    var servecies = document.createElement("div");

    $(servecies).addClass("col-12  my-5 text-center");
    $(servecies).append($("<h3>Our Servecies</h3>").addClass("mb-5"));

    $("#services_p").append(servecies);


    createService("Web Development", servecies_text, "fas fa-leaf mx-auto my-4 icon");

    createService("ninja trainig", servecies_text, "fas fa-leaf mx-auto my-4 icon");

    createService("other service", servecies_text, "fas fa-leaf mx-auto my-4 icon");


    createService("Web Development", servecies_text, "fas fa-leaf mx-auto my-4 icon");

    createService("ninja trainig", servecies_text, "fas fa-leaf mx-auto my-4 icon");

    createService("other service", servecies_text, "fas fa-leaf mx-auto my-4 icon");


    //gallery section

    addImg("img1.jpg");

    addImg("img2.jpg");

    addImg("img3.jpg");

    addImg("img4.jpg");

    addImg("img2.jpg");

    addImg("img3.jpg");



});