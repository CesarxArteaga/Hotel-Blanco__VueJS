<template>
    <div class="navbar">
        <div class="content">
            <a class="logo" href="/"><img src="../assets/logo.png" alt="Blancoo"></a>
            <a class="collapse-button">☰</a>
            <div class="collapse hide-links">
                <div class="links">
                    <ul class="nav-ul">
                        <router-link class="link" to="/estancias">Estancias</router-link>
                        <router-link class="link" to="/about">Sobre Nosotros</router-link>
                        <router-link class="link" to="/contact">Contacto</router-link>
                    </ul>
                </div>
                    <div class="phone-link">
                        <span>
                            <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                <path fill="white" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                            </svg>
                        </span>
                        <router-link to="" class="link">+593 59247121</router-link>
                    </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}

window.$ = require('jquery')
window.JQuery = require('jquery')
$(document).ready(function(){
            var pos = 0;
            $(document).scroll(function() { 
                pos = $(this).scrollTop();
                if(pos > 50){
                    $( ".navbar" ).addClass("nav-color")
                }else{
                    $( ".navbar" ).removeClass("nav-color")
                }
            })
            
    $('.collapse-button').click(()=>{
        $('.collapse').toggleClass( "hide-links" );
    })
})

</script>

<style scoped>
.navbar{
    width: 100%;
    position: fixed;
    top: 0;
    padding-top: 25px;
    padding-bottom: 25px;
    height: 40px;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0);
    transition: 0.3s;
}
.nav-color{
    background: rgba(0, 0, 0, 1);
    
}
.collapse-button{
    color: white;
    font-size: 20pt;
    font-weight: bold;
    display: none;
}
.content{
    margin: 0 auto;
    max-width: 1100px;
    line-height: 50px;
}
.logo{
    width: 25%;
    float: left;
}
.links{
    float: left;
    width: 50%;
    font-family: sans-serif;
}
.links .nav-ul{
    width: fit-content;
    margin: 0 auto;
    padding: 0;
}

.link{
    color: white;
    text-decoration: none;
    padding: 0px 7px;
    font-weight: bold;
}
.phone-link{
    width: 25%;
    float: left;
    text-align: right;
    font-family: sans-serif;
}

@media only screen and (max-width: 720px){
.collapse{
    clear: both;
    background-color: black;
    width: 100%;
    height: 200px;
    overflow: hidden;
    transition: 0.2s;
}
.hide-links{
    height: 0;
    
}
.links{
    clear: both;
    width: 100%;
    background-color: black;

}
.link{
    display: block;
    text-align: center;
}
.link:hover{
    
background-color: grey;
}
.phone-link{
    clear: both;
    width: 100%;
    text-align: center;
    background-color: black;
}
.phone-link .link{
    display: inline;
}
.navbar{
    padding: 0;
    height: auto;
}
.collapse-button{
   position: absolute;
   right: 15px;
   display: block;
   cursor: pointer;
}
.content{
    padding: 10px;
    clear: both;
}

}
</style>