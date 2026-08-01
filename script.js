alert("hello!欢迎登陆kxyjs!");

const menu=document.querySelector(".menu");
let aaa=false;
menu.addEventListener("click",function (e){
    const 汉堡菜单=document.querySelector(".汉堡菜单");
    if(aaa === false){
        aaa=true;
        汉堡菜单.innerHTML=`
            <li><a href="home.html">        首页             </a></li>
            <li><a href="about.html">   关于本系统          </a></li>
            <li><a href="ourweb.html">     我们其他的子网站     </a></li>
            <li><a href="friendweb.html">  友链        </a></li>
        `        
    }

    //const 状态
});
