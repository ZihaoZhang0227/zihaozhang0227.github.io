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
        var p = document.getElementsByTagName("p")
        for (let i = 0; i < h2.length; i++) {
            p[i].style.setProperty("color", "white")
        }
        document.getElementById("mainBox").style.setProperty("background", "black")
        document.getElementById("mainBox").style.setProperty("color", "white")

        document.getElementById("modeButton").innerHTML = "Dark Mode"
        isDarkMode = true

    } else {
        document.getElementById("mainBox").style.setProperty("background", "#f2fbeb")
        document.getElementById("mainBox").style.setProperty("color", "black")
        var a = document.getElementsByTagName("a");
        // console.log('aaaa', a);
        for (let i = 0; i < a.length; i++) {
            a[i].style.setProperty("color", "black")
        }
        var b = document.getElementsByTagName("b");
        for (let i = 0; i < b.length; i++) {
            b[i].style.setProperty("color", "black")
        }
        var h1 = document.getElementsByTagName("h1");
        for (let i = 0; i < h1.length; i++) {
            h1[i].style.setProperty("color", "black")
        }
        var h2 = document.getElementsByTagName("h2");
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.setProperty("color", "black")
        }
        var p = document.getElementsByTagName("p")
        for (let i = 0; i < h2.length; i++) {
            p[i].style.setProperty("color", "black")
        }
        isDarkMode = false
    }
}
function btnRst_Click(params) {
    location.href = 'index.html' + "#" + params;
    console.log(444,location);
}