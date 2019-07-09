$('.form').find('input, textarea').on('keyup blur focus', function (e) {

    var $this = $(this),
        label = $this.prev('label');

    if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.removeClass('highlight');
        }
    } else if (e.type === 'focus') {

        if ($this.val() === '') {
            label.removeClass('highlight');
        }
        else if ($this.val() !== '') {
            label.addClass('highlight');
        }
    }

});

$('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});


// slider function


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//open update listing window

function myFunction() {
    window.open("update.html");
}

//open post property window
function openPost() {
    window.open("post.html");
}



//open pdashboard  window
function dashBoard() {
    window.open("dashboard.html");
}


//open hlogin window
function runCheck() {
    window.open("login.html");
}


//open pro log in  window
function runCheck1() {
    window.open("prologin.html");
}

function runCheck2() {
    window.open("dashboard.html");
}
//open home page
function openWin() {
    window.open("index.html")
}

// open property page

function proPerty() {
    window.open("property.html")
}

// send message to Agent

function reachAgent() {
    window.open("contact.html")
}