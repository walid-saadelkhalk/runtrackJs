window.addEventListener("scroll", function() {
    var footer = document.querySelector("footer");
    var scrollPercentage = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight * 100;

    
    footer.style.backgroundColor = "hsl(" + scrollPercentage + ", 100%, 50%)";
});
