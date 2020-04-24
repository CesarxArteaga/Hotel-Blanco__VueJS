<template>
    <div class="container-home">
        <div class="home-img-bckg">
            <div class="home-color-bckg">
                <div class="content">
                <h1 class="TituloHome font-DM">Disfruta de cada momento de la vida</h1>
                </div>
            </div>
        </div>
        <div class="estancias">
            <h2 class="subtitulo font-DM">Habitaciones de lujo para el maximo confort de nuestros clientes</h2>
            <VueSlickCarousel v-bind="options">
                    <div v-for="(e,index) in estanciasobj" v-bind:key="index">
                        <img class="img-slide" :src="e.img" alt="img">
                        
                    </div> 
            </VueSlickCarousel> 
           <router-link to="/estancias" class="btn-go-estancias">Ver todas las estancias</router-link>
        </div>

        <div class="restaurant">
            <div class="restaurant-cover">
                <div class="restaurant-content">
                    <div class="restaurant-title font-DM">Restaurant ★★★★★</div>
                    <div class="restaurant-info">
                        Contamos con un restaurant cinco estrellas en donde podra degustar de los platillos mas
                        exquisitos que el hotel puede ofrecer. <br><br>
                        Tiene a disposicion a los mejores chefs de la ciudad, quienes cuentan con muchos años de experiencia
                        en el arte culinario. <br><br>
                        Platos a la carta - Reposteria - Postres - Bebidas - Cocteles 
                    </div>
                </div>
            </div>
        </div>

        <div class="hotel">
            <div class="hotel-history">
                <img class="logo" src="../assets/logo-negro.png" alt="">
                <div class="history">
                    Desde 1.994 brindamos el mejor servicio de hoteleria de la ciudad. En estos más de 20 años de vida, podemos sentirnos orgullosos de la calidad de nuestro servicio.
                <br><br>
                Empezamos como una residencia de medianas extensiones que albergarba vistantes de todas partes del país. Con el paso del tiempo nuestro establecimiento fue tomando renombre y fama. Por tal motivo expandimos nuetras instalaciones y a día de hoy somos prenferencia de muchos vistantes nacionales e 
                internacionales.
                <br><br>
                Brindamos la mejor experiencia en hotelera y con un gran número de clientes que nos respaldan.
                </div>
            </div>
            <div class="hotel-foto">
                <img src="../assets/hotel.jpg" alt="Blancoo" width="100%">
            </div>
        </div>


        <div class="clientes">
            <h2 class="clientes-title font-DM">Esto dicen nuestros clientes...</h2>
            <div class="clientes-scroll">
                <div class="clientes-wrap">
                    <div class="cliente-item" v-for="(c,index) in clientes" :key="index">
                        <div class="cliente-foto">
                            <img :src="c.urlfoto">
                        </div>
                        <div class="cliente-content">
                           <h3>{{c.nombre}}</h3>
                            <p class="opinion">{{c.opinion}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="reserva">
            <div class="form-wrapper">
                
                <form>
                    <h3 class="titulo-reserva" style="font-family: sans-serif; margin-bottom: 25px">Reserva una habitación</h3>
                <div class=""><label >Llegada </label><input type="date"></div>
                <div><label>Salida </label><input type="date"></div>
               <div class=""><label>Habitaciones </label><input list="browsers"  size="4" name="browser">
                                        <datalist id="browsers">
                                            <option value="1"/>
                                            <option value="2"/>
                                            <option value="4"/>
                                        </datalist></div>
                <div class=""><button class="btn-reserva" @click.prevent="">Reservar</button></div>
            </form>
            </div>
        </div>

    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'Home',
    components: {VueSlickCarousel},
    data(){
        return{
            estanciasobj : [{img: require('../assets/estancia1.jpg') , titulo_estancia: 'dormitorio'},
            {img: require('../assets/estancia2.jpg'), titulo_estancia: 'salas'},
            {img: require('../assets/estancia3.jpg'), titulo_estancia: 'comedor'}], 
            options:{
                slidesToShow: 2, 
                slidesToScroll: 1,
                infinite: false,
                focusOnSelect: true,
                responsive: [{
                    "breakpoint": 720,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                    }
                }]
            },
            clientes:[{urlfoto: 'https://pbs.twimg.com/media/D2rVDFXWkAE2hx7.jpg', nombre: 'Clara', opinion: 'Siempre vengo a este hotel. Es simplemente perfecto!'},
            {urlfoto: 'https://pixinvent.com/demo/vuexy-vuejs-laravel-admin-template/demo-5/images/user-13.jpg?005c80e1c92c2c0bc620bf3168f9a53c', nombre: 'Daniela', opinion: 'Desde la primera vez que me hospede, me tratan de maravilla!'},
            {urlfoto: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png', nombre: 'Luis', opinion: 'Siempre vengo a este hotel. Es simplemente perfecto!'}],
        }
    },    
}

</script>

<style scoped>
    .container-home{
        margin: 0 auto;
    }
    .font-DM{
       font-family: 'DM Serif Text', serif;
    }
    .home-img-bckg{
        width: 100%;
        height: 700px;
        background-image: url('../assets/cover.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .home-color-bckg{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.25);
      
    }
    .content{
        max-width: 1100px;
        height: 100%;
        display: flex;
        margin: 0 auto;
    }
    .TituloHome{
        color: white;
        margin: 0;
        font-size: 44pt;
        font-weight: normal;
        width: 700px;
        margin: auto 0;
    }
    .estancias{
        max-width: 1100px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 25px;
        }
    .img-slide{
        width: 450px;
        height: 600px;
        margin: 0 auto;
    }
    
    .subtitulo{
        font-size: 28pt;
        max-width: 900px;
        margin: 0 auto;
        margin-bottom: 30px;
        text-align: center;
        color: black;
    }
    .btn-go-estancias{
        background-color: black;
        color: white;
        font-size: 14pt;
        font-family: sans-serif;
        text-decoration: none;
        padding: 15px 25px;
        display: table;
        margin: 0 auto;
    }

    .restaurant{
        width: 100%;
        box-sizing: border-box;
        padding: 25px;
    }

    .restaurant-cover{
        width: 100%;
        height: 600px;
        background-image: url('../assets/restaurant-cover.jpg');
        background-position: center center;
        background-size: cover;
        position: relative;
    }

    .restaurant-content{
        width: 100%;
        height: 40%;
        position: absolute;
        bottom: 0;
        display: flex;
    }

    .restaurant-content *{
        color: white;
    }

    .restaurant-title{
        width: 50%;
        font-size: 32pt;
        text-align: center;
        margin: auto 0;
    }
    .restaurant-info{
        width: 50%;
        font-family: sans-serif;
        box-sizing: border-box;
        padding: 30px;

    }

    .hotel{
        display: flex;
        max-width: 1100px;
         border-top: 2px dotted gray;
         border-bottom: 2px dotted gray;
        box-sizing: border-box;
        margin: 0 auto;
        padding: 50px 0px;
    }
    .hotel-history, .hotel-foto{
        width: 50%;
        padding: 70px 15px;
        margin: auto 0;
        font-family: sans-serif;
        color: black;
    }
.hotel-history .logo{
        display: block;
        margin: 0 auto;
        padding-bottom: 50px;
    }
    .clientes{
        max-width: 1100px;
        margin: 0 auto;
        padding: 50px 0px;
    }

    .clientes-title{
        font-size: 30pt;
        color: black;
        
    }

    .clientes-scroll{
        overflow-x: scroll;
        -ms-overflow-style: none;
  white-space: nowrap;
    }
    .clientes-scroll::-webkit-scrollbar {
    display: none;
}

    .clientes-wrap{
        width: fit-content;
        display: flex;
    }
    .cliente-item{
        border: 1px solid gainsboro;
        width: auto;
        box-sizing: border-box;
        margin: 15px;
        padding: 30px 0px;
        width: 500px;
        display: flex;
    }

    .cliente-foto{
       width: 50%;
       text-align: center;
    }
    .cliente-item img{
        width: 130px;
        height: 130px;
        object-fit: cover;
        
    }

    .cliente-content{
        width: 50%;
    }
    .opinion{
        white-space: initial;
    }
    .reserva{
        width: 100%;
        margin-top: 25px;
        padding: 80px 0px;
        background-color: rgba(0, 0, 0, 0.9);
    }
    .form-wrapper{
        max-width: 1100px;
        background-color: rgba(255, 255, 255, 0.973);
        margin: 0 auto;
        padding: 60px 0px;
    }
    form{
        width: fit-content;
        box-sizing: border-box;
        margin: 0 auto;
        padding-bottom: 25px;
    }
    .btn-reserva{
        background-color: orange;
        color: black;
        font-weight: bold;
        border: none;
        border-radius: 0;
        font-size: 12pt;
        padding: 10px 30px;
        cursor: pointer;
    }
    form *{
        margin-right: 10px;
        font-family: sans-serif;
    }
    form div{
        display: contents;
    }
@media only screen and (max-width: 720px) {
  .container-home{
    width: 100%;
  }
  .home-img-bckg{
    height: 600px;
  }
  .content{
      text-align: center;
      padding: 10px;
  }
  .TituloHome{
    font-size: 30pt;
  }
  .subtitulo{
      font-size: 22pt;
  }

    .img-slide{
        width: 300px;
        height: 450px;
    }

    .restaurant-cover{
        height: 500px;
    }
  .restaurant-content{
     display: block;
     bottom: initial;
     height: fit-content;
     box-sizing: border-box;
     padding: 20px 10px;
  }
  .restaurant-title{
      width: 100%;
      height: 150px;
  }
  .restaurant-info{
      width: 100%;
      text-align: center;
      padding: 0;
  }

.hotel{
    display: block;
   padding: 20px 10px;
}
  .hotel-history, .hotel-foto{
      width: auto;
      padding: 20px;
      text-align: center;}
.clientes{
    padding: 20px 10px;
}
.clientes-title{
    margin: 0;
    font-size: 22pt;
    text-align: center;
}
.cliente-item{
    width: 200px;
    display: block;
    text-align: center;
}
.cliente-foto, .cliente-content{
    width: 100%;
}
.opinion{
    padding: 0px 10px;
}
.form-wrapper{
    width: fit-content;
    padding: 20px;
}
form{
    text-align: center;
}

form div{
    display: block;
    box-sizing: border-box;
    padding: 15px 5px;
    margin: 0;
}
}
</style>