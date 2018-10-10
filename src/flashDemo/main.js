const homePage = function () {
    document.getElementById('h1-try').style.display = 'none';
    document.getElementById('h1-learn').style.display = 'none';
    document.getElementById('first-page').style.display = 'none';
    document.getElementById("second-page").style.display = 'block';
    document.getElementById("navbar").style.display = 'block';
    document.getElementById("about").style.display = 'none';
}

const goToHomePage = function () {
    document.getElementById('first-page').style.display = 'block';
    document.getElementById('h1-try').style.display = 'table-cell';
    document.getElementById('h1-learn').style.display = 'table-cell';
    document.getElementById("second-page").style.display = 'none';
    document.getElementById("navbar").style.display = 'none';
    document.getElementById("about").style.display = 'none';
}

const goToAboutPage = function () {
    document.getElementById("second-page").style.display = 'none';
    document.getElementById("about").style.display = 'block';
    document.getElementsByClassName("nav").style.display = 'block';
    document.getElementsByClassName("container-nav").style.display = 'block';
    document.getElementsById("navbar").style.display = 'block';
}

const goToSelectCategoryPage = function () {
    document.getElementById("second-page").style.display = 'none';
    document.getElementById("about").style.display = 'none';
    document.getElementsByClassName("nav").style.display = 'block';
    document.getElementsByClassName("container-nav").style.display = 'block';
    document.getElementsById("navbar").style.display = 'block';
    document.getElementsById("selectCategory").style.display = 'block';
}