let isDarkMode = false;

function switchModes() {
    if (isDarkMode === false) {
        var a = document.getElementsByTagName("a");
        // console.log('aaaa', a);
        for (let i = 0; i < a.length; i++) {
            a[i].style.setProperty("color", "white")
        }
        var b = document.getElementsByTagName("b");
        for (let i = 0; i < b.length; i++) {
            b[i].style.setProperty("color", "white")
        }
        var h1 = document.getElementsByTagName("h1");
        for (let i = 0; i < h1.length; i++) {
            h1[i].style.setProperty("color", "white")
        }
        var h2 = document.getElementsByTagName("h2");
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.setProperty("color", "white")
        }
        document.getElementById("mainBox").style.setProperty("background", "#b5b2b2")
        document.getElementById("modeButton").innerHTML = "Dark Mode"
        isDarkMode === false

    } else {
        isDarkMode === true
    }
}