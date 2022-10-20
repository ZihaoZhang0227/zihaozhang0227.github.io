// I have taken on board all the comments people gave me during the presentation, including the fact that this project may not be possible for me because it requires a higher level of skill.
// To address this issue, I wanted to ensure as smooth an experience as possible without creating too many advanced technologies. So I asked my friends and family for permission and thought they would launch an anonymous pitch. I built in their submissions, and every time the user clicks the "Fish" button, they can be randomly selected, and of course I designed an egg that the "Fish" may encounter a fish at the same time (failure). I hope this is a good idea.
// I also thank my friends and family for making my site pretend to work.
var fun = function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;

            docEl.style.fontSize = 10 * (clientWidth / 1920) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
fun(document, window);

var txtlist = [
    {
        type:'1',
        id:'fish-box-1'
    },
    {
        type:'1',
        id:'fish-box-2'
    },
    {
        type:'1',
        id:'fish-box-3'
    },
    {
        type:'0',
        img:'./img/avatar/avatar1.png',
        content:`I'm a boy and I'm gay.
        My family is a relatively traditional rural family. The family does not know that I am gay, and I dare not let them know that I am gay. The consequences of this will be disastrous. I'm struggling, I'm struggling that I can't be ruined by a girl, let alone get my parents to accept that I'm gay. I don't understand how I should do it, I'm so lost and don't know if there are any friends like me.`
    },
    {
        type:'0',
        img:'./img/avatar/avatar2.png',
        content:`My boyfriend and I have known each other for two years, and I always thought he was very good, but I found that he likes to watch Internet celebrity beauties on TikTok. I am very disgusted with this kind of behavior, and I have quarreled with him, but it has not improved. I don't know how I can continue to communicate with him.`
    },
    {
        type:'1',
        id:'fish-box-1'
    },
    {
        type:'1',
        id:'fish-box-2'
    },
    {
        type:'1',
        id:'fish-box-3'
    },
    {
        type:'0',
        img:'./img/avatar/avatar3.png',
        content:`I am pregnant!!
        My husband and I have been together for three years. We have been looking forward to having our own children. We really like children. Yesterday I went to the hospital for a check-up and finally got pregnant. This is really the best gift I have given over the years, I am very happy, and I hope that strangers who picked up the drift bottle can have a happy day too.`
    },
    {
        type:'0',
        img:'./img/avatar/avatar4.png',
        content:`I always feel like my life is messed up.
        I've always felt like a failure, spending money lavishly without planning. The most important thing is that I am not good at socializing, and I am two points and one line between the company and my home every day. I live the same life every day, I'm numb, I'm tired.`
    },
    {
        type:'0',
        img:'./img/avatar/avatar5.png',
        content:`I met the boy I like today, although only in a hurry.
        I have liked him for a long time, he is my classmate, but I have been afraid to say it. I went out to eat today and met him on the way to the tram, but only said hello and left. I've decided, I'll confess to him. Hope I will succeed.`
    },
    {
        type:'0',
        img:'./img/avatar/avatar6.png',
        content:`I've been a little lost these days.
        I'm an undergraduate graduating in 2024, and I don't think what I'm learning now will determine my future career. This may be a question many people face, but I'm really struggling with this choice. I want to be a UI designer, or a front-end engineer, but I'm not sure which is more suitable for me.`
    },
    {
        type:'0',
        img:'./img/avatar/avatar7.png',
        content:`I got a raise today!!
        Today, my boss finally mentioned the salary increase to me. This is also my first salary increase since I became a regular intern. I am excited and happy. I'm really happy working here, and I hope strangers can get jobs they love too!!`
    }
]

function openBqbox(){
    document.getElementById("bqbox").style.display = "block";
}

function startBqbox(){
    document.getElementById("bqbox").style.display = "none";
    document.getElementById("buttlesf-1").style.display = "block";
    
    setTimeout(() => {
        document.getElementById("buttlesf-1").style.display = "none";
        document.getElementById("buttleboxbg-1").style.display = "block";
        setTimeout(() => {
            document.getElementById("buttleboxbg-1").style.display = "none";
        }, 2000);
    }, 1000);
    
}
function cancelBqbox(){
    document.getElementById("bqbox").style.display = "none";

}
function openNetwork(){
    document.getElementById("tool-network").style.display = "none";
    document.getElementById("network-1").style.display = "block";
    setTimeout(() => {
        document.getElementById("tool-network").style.display = "block";
        document.getElementById("network-1").style.display = "none";
        var indx = Math.round(Math.random()* (txtlist.length - 1));
        console.log(txtlist[indx])
        if(txtlist[indx].type == "0"){
            document.getElementById("bqbox2").style.display = "block";
            document.getElementById("bqbox2-avatar").src = txtlist[indx].img;
            document.getElementById("bqbox2-area").value = txtlist[indx].content;
        }
        if(txtlist[indx].type == "1"){
            document.getElementById(txtlist[indx].id).style.display = "block";
            setTimeout(() => {
                document.getElementById(txtlist[indx].id).style.display = "none";
            }, 2000);
        }
    }, 3000);

}

function replyBqbox2(){
    document.getElementById("bqbox2").style.display = "none";
    document.getElementById("bqbox").style.display = "block";
}

function throwbackBqbox2(){
    document.getElementById("bqbox2").style.display = "none";
    document.getElementById("buttlesf-1").style.display = "block";
    
    setTimeout(() => {
        document.getElementById("buttlesf-1").style.display = "none";
        document.getElementById("buttleboxbg-1").style.display = "block";
        setTimeout(() => {
            document.getElementById("buttleboxbg-1").style.display = "none";
        }, 2000);
    }, 1000);
}

function cancelBqbox2(){
    document.getElementById("bqbox2").style.display = "none";
}

function cancelMybottle(){
    document.getElementById("mybottle").style.display = "none";
}

function openMybottle(){
    document.getElementById("mybottle").style.display = "block";
}

function changeSelected1(){
    
    if(document.getElementById("selected-1").dataset.img == "./img/selected2_06.png"){
        document.getElementById("selected-1").src = "./img/selected1_06.png"
        document.getElementById("selected-1").dataset.img = "./img/selected1_06.png"
    }else{
        document.getElementById("selected-1").src = "./img/selected2_06.png"
        document.getElementById("selected-1").dataset.img = "./img/selected2_06.png"
    }
    
    
}