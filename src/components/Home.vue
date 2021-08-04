<template>
  <div id="app">
    <div class="container">
      <nav class="navbar1" v-on:click="buttonClick()">
      <h1>{{ msg }}</h1>
      
          <!-- <li class="nav-item">
            <router-link to="/tutorials" class="nav-link">Réalisations</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Mon parcours</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tutorials-list" class="nav-link">Contact</router-link>
          </li> -->
          <li class="nav-item">
            <a href="#realisations" class="nav-link">Réalisations</a>
          </li>
          <li class="nav-item">
            <a  href="#monParcours" class="nav-link">Mon parcours</a>
          </li>
          <li class="nav-item">
            <a   href="#meContacter" class="nav-link">Contact</a>
          </li>
        <!-- </div> -->
      </nav>
    <!-- <div class="blueBox"></div> -->   
      <vue-flip active-click=""  width: height: v-model="flipped"   v-on:click="buttonClick()"  id="side" class="box-2">
          <template v-slot:front class="">        
            <div class="i1">
              <img class="icoHtmlCssJs icoBorder" src="../images/html52001.png">
              <img class="icoHtmlCssJs  icoBorder" src="../images/css32400.png">
              <img class="icoHtmlCssJs  icoBorder" src="../images/js.png"> 
              <img class="icoBootstrap icoHtmlCssJs icoBootstrapMarginLeft  icoBorder" src="../images/bootstrap.png">
              <img class="icoBootstrap icoHtmlCssJs icoBorder" src="../images/vuejs.png">
              <img class="icoNode  icoBorder icoHtmlCssJs" src="../images/node.png">
              <img class="icoMySql  icoBorder" src="../images/mysql.png">       
              <img class="icoSeo  icoBorder" src="../images/seo.png">
              <img class="icoDB  icoBorder" src="../images/mongoDB.png">     
            </div>            
          </template>
          <template v-slot:back class="">        
            <div class="i1">
              <img class="icoHtmlCssJs  icoBorder" src="../images/html52001.png">
              <img class="icoHtmlCssJs  icoBorder" src="../images/css32400.png">
              <img class="icoHtmlCssJs  icoBorder" src="../images/js.png">
              <img class="icoBootstrap icoHtmlCssJs  icoBorder icoBootstrapMarginLeft" src="../images/bootstrap.png">
              <img class="icoBootstrap icoHtmlCssJs  icoBorder " src="../images/vuejs.png">
              <img class="icoNode icoHtmlCssJs  icoBorder" src="../images/node.png">
              <img class="icoMySql  icoBorder" src="../images/mysql.png">
              <img class="icoDB  icoBorder" src="../images/mongoDB.png">
              <img class="icoSeo  icoBorder" src="../images/seo.png">     
            </div>            
          </template>          
        </vue-flip>        
        <div active-click="" v-on:click="buttonClick()"  id="littleBox" class="boxX"></div>
        <div  v-on:click="buttonClick()"  id="littleBoxLateral" class="boxLateralRight"></div>
        <div  active-click=""    v-on:click="buttonClick()" id="bannier" class="box-1" horizontal=true>
          <div class="front">            
            <div class="title_container"> 
              <div class="title_box"> 
                <h1 class="title_name" id="titleNameFront">Vincent Robert</h1>
                <h2 class="sousTitre" id="sousTitreFront">Développeur Web</h2>
              </div>      
             </div> 
          </div>         
        </div>           
        <div class="box-3">
          <h2 class="mondrianTheme"> Choose your Mondrian theme </h2>
            <div class="containerBox">          
              <div v-on:click="animate(), changeBodyBg(0)"  class="colorBox colorBox0 boxes" horizontal=true>
                <div class="frontBRY">            
                  <div class="miniBoxFront"> 
                    <div class="miniLittleBoxBRY miniside0"  ></div>
                    <div class="miniBannierBRY minibannier0"  ></div>
                    <div class="miniSideBRY miniMiniBox0" ></div>
                  </div>           
                </div>                    
              </div>
              <div v-on:click="animate(), changeBodyBg(1)" id="miniAnim1" class="colorBox colorBox0 boxes" horizontal=true>
                <div class="frontBRY">            
                  <div class="miniBoxFront"> 
                    <div class="miniLittleBoxYBR miniside1"  id="miniSideAnim1"></div>
                    <div class="miniBannierYBR  minibannier1"  id="miniBanAnim1"></div>
                    <div class="miniSideYBR miniMiniBox1" id="miniBoxAnim1"></div>
                  </div>           
                </div>                    
              </div>   
              <div v-on:click="animate(), changeBodyBg(2)" id="miniAnim2" class="colorBox colorBox0 boxes" horizontal=true>
                <div class="frontBRY">            
                  <div class="miniBoxFront"> 
                    <div class="miniLittleBoxRYB miniside2"  id="miniSideAnim2"></div>
                    <div class="miniBannierRYB minibannier2" id="miniBanAnim2"></div>
                    <div class="miniSideRYB miniMiniBox2" id="miniBoxAnim2"></div>
                  </div>           
                </div>                    
              </div>   
              <div v-on:click="animate(), changeBodyBg(3)" id="miniAnim3" class="colorBox colorBox0 boxes" horizontal=true>
                <div class="frontBRY">            
                  <div class="miniBoxFront"> 
                    <div class="miniLittleBoxBYR miniside3"  id="miniBanAnim3"></div>
                    <div class="miniBannierBYR minibannier3"  id="miniBanAnim3"></div>
                    <div class="miniSideBYR miniMiniBox3" id="miniBoxAnim3"></div>
                  </div>           
                </div>                    
              </div>   
              <div v-on:click="animate(), changeBodyBg(4)" id="miniAnim4" class="colorBox colorBox0 boxes" horizontal=true>
                <div class="frontBRY">            
                  <div class="miniBoxFront"> 
                    <div class="miniLittleBoxYRB miniside4"   id="miniSideAnim4"></div>
                    <div class="miniBannierYRB minibannier4"  id="miniBanAnim4"></div>
                    <div class="miniSideYRB miniMiniBox4" id="miniBoxAnim4"></div>
                  </div>           
                </div>                    
              </div>
              <div v-on:click="animate(), changeBodyBg(5)" class="colorBox colorBox0 boxes" horizontal=true>
                <div class="frontBRY">            
                  <div class="miniBoxFront"> 
                    <div class="miniLittleBoxRBY miniside5" ></div>
                    <div class="miniBannierRBY minibannier5" ></div>
                    <div class="miniSideRBY miniMiniBox5" ></div>
                  </div>           
                </div>                    
              </div>
       
           <!-- <vue-flip  active-click=""  width="75px" height="75px"  v-on:click="animate(), changeBodyBg(0)" v-model="flippedBRY"  class="colorBox colorBox0" horizontal=true>
            <template v-slot:front class="frontBRY">            
              <div class="miniBoxFront"> 
                <div class="miniLittleBoxBRY"></div>
                <div class="miniBannierBRY"></div>
                <div class="miniSideBRY"></div>
            </div>           
            </template>
            <template v-slot:back class="backBRY">            
              <div class="miniBoxBack"> 
                <div class="miniLittleBoxBRY"></div>
                <div class="miniBannierBRY"></div>
                <div class="miniSideBRY"></div>      
              </div>  
            </template>           
           </vue-flip>
          <vue-flip  active-click=""  width="75px" height="75px"  v-on:click="animate(), changeBodyBg(1)" v-model="flippedYBR"  class="colorBox colorBox0" horizontal=true>
            <template v-slot:front class="backBRY">         
              <div class="miniBoxFront"> 
                <div class="miniLittleBoxYBR"></div>
                <div class="miniBannierYBR"></div>
                <div class="miniSideYBR"></div>
              </div>           
            </template>
            <template v-slot:back class="backBRY">            
              <div class="miniBoxBack"> 
                <div class="miniLittleBoxYBR"></div>
                <div class="miniBannierYBR"></div>
                <div class="miniSideYBR"></div>     
             </div>  
            </template>           
          </vue-flip>
      
          <vue-flip  active-click=""  width="75px" height="75px"  v-on:click="animate(), changeBodyBg(2)" v-model="flippedRYB" class="colorBox colorBox0" horizontal=true>
            <template v-slot:front class="frontBRY">          
              <div class="miniBoxFront"> 
                <div class="miniLittleBoxRYB"></div>
                <div class="miniBannierRYB"></div>
                <div class="miniSideRYB"></div>
              </div>            
            </template>
            <template v-slot:back class="backBRY">            
              <div class="miniBoxBack"> 
                <div class="miniLittleBoxRYB"></div>
                <div class="miniBannierRYB"></div>
                <div class="miniSideRYB"></div>      
              </div>  
            </template>           
          </vue-flip>
          <vue-flip  active-click=""  width="75px" height="75px" v-on:click="animate(), changeBodyBg(3)" v-model="flippedBYR" class="colorBox colorBox0" horizontal=true>
            <template v-slot:front class="frontBRY">            
              <div class="miniBoxFront"> 
                <div class="miniLittleBoxBYR"></div>
                <div class="miniBannierBYR"></div>
                <div class="miniSideBYR"></div>
              </div>            
            </template>
            <template v-slot:back class="backBRY">            
              <div class="miniBoxBack"> 
                <div class="miniLittleBoxBYR"></div>
                <div class="miniBannierBYR"></div>
                <div class="miniSideBYR"></div>      
              </div>  
            </template>           
          </vue-flip>
          <vue-flip  active-click=""  width="75px" height="75px"   v-on:click="animate(), changeBodyBg(4)" v-model="flippedYRB"  class="colorBox colorBox0" horizontal=true>
            <template v-slot:front class="frontBRY">         
              <div class="miniBoxFront"> 
                <div class="miniLittleBoxYRB"></div>
                <div class="miniBannierYRB"></div>
                <div class="miniSideYRB"></div>
              </div>             
            </template>
            <template v-slot:back class="backBRY">            
              <div class="miniBoxBack"> 
                <div class="miniLittleBoxYRB"></div>
                <div class="miniBannierYRB"></div>
                <div class="miniSideYRB"></div>      
              </div>  
            </template>           
          </vue-flip>
          <vue-flip  active-click=""  width="75px" height="75px" v-on:click="animate(), changeBodyBg(5)" v-model="flippedRBY" class="colorBox colorBox0" horizontal=true>
            <template v-slot:front class="frontBRY">          
              <div class="miniBoxFront"> 
                <div class="miniLittleBoxRBY"></div>
                <div class="miniBannierRBY"></div>
                <div class="miniSideRBY"></div>
              </div>            
            </template>
            <template v-slot:back class="backBRY">            
              <div class="miniBoxBack"> 
                <div class="miniLittleBoxRBY"></div>
                <div class="miniBannierRBY"></div>
                <div class="miniSideRBY"></div>      
              </div>  
            </template>           
          </vue-flip>     -->
            
        </div>       
      <div class="container2">
        <h2 id="realisations" class="mesProjets">Mes réalisations</h2>
          <a href="https://crud-social-network.herokuapp.com" class="nofill">     
            <div  class="window window-1" ><img src="../images/leCoinDeTiti.png" class="imgProjet">  
              <div class="vignette"></div>
              <div class="vignetteTexte ">
                <h2 class="">Le coin de Titi</h2>
                <p class=" sousTitreVignette">Un réseau social d'entreprise, simple et facile à utiliser</p>
                <p class=" cliquez">Cliquez pour visiter l'application</p>
              </div>
            </div>
          </a>
          <a href="https://vinceny-hub.github.io/-VincentRobert_5_25-01-2021-/index.html" class="nofill">
            <div class="window window-2"><img src="../images/teddies2.png" class="imgProjet"> 
              <div class="vignette"></div>
              <div class="vignetteTexte">
                <h2 class="">Teddies les petits oursons</h2>
                <p class="sousTitreVignette">Site e-commerce de ventes d'oursons en peluche</p>
                <p class="cliquez">Cliquez pour visiter l'application</p>
              </div>
            </div>
          </a>
          <a href="https://vinceny-hub.github.io/VincentRobert_4_06-12-2020/" class="nofill">
            <div class="window window-2">
              <img src="../images/laChouette.png" class="imgProjet"> 
              <div class="vignette"></div>
              <div class="vignetteTexte">
                <h2  class="">La Chouette agence</h2>
                <p class="sousTitreVignette">Optimisation d'un site déjà existant</p>
                <p class="cliquez">Cliquez pour visiter l'application</p>
              </div>
            </div>
          </a>
          <a href="https://vinceny-hub.github.io/VincentRobert_3_09-11-2020.-/" class="nofill">
            <div class="window window-2">
              <img src="../images/ohMyFood.png" class="imgProjet">
              <div class="vignette"></div>
              <div class="vignetteTexte">
                <h2  class="">Ohmyfood</h2>
                <p class="sousTitreVignette">Dynamisation d'une application d'avis gastronomique</p>
                <p class="cliquez">Cliquez pour visiter l'application</p>
              </div>
            </div>
      <!-- <h2>Ohmyfood</h2><p>Dynamisation d'une application d'avis gastronomique</p><p>Cliquez pour visiter l"application</p></div> -->
          </a>
          <a href="https://vinceny-hub.github.io/VincentRobert_2_10-10-2020./" class="nofill">
            <div class="window window-2">
              <img src="../images/reservia4.png" class="imgProjet">
              <div class="vignette"></div>
              <div class="vignetteTexte">
                <h2  class="">Reservia</h2>
                <p class="sousTitreVignette">Création d'une maquette d'un site de réservation</p>
                <p class="cliquez">Cliquez pour visiter l'application</p>
              </div>
            </div>
      <!-- <h2>Reservia</h2><p>Création d'une maquette d'un site de réservation d'hébergements</p><p>Cliquez pour visiter l"application</p></div> -->
          </a>
      </div>
      <div class="container3">
        <h2 id="monParcours" class="">Mon Parcours</h2>
          <p class="pitch">Électronicien de formation, mais ayant étudié la physique et les mathématiques à l'université, je suis devenu technicien en électronique au Grand Casino de Knokke, en Belgique flamande, afin d'acquérir une expérience à l'étranger. Par la suite, j'ai évolué en tant que <strong> responsable technique</strong> du parc machine à sous, tout en étant responsable de salle et chargé de l'accueil et de la fidélisation de la clientèle. Après cette expérience réussie, j'ai intégré l'entreprise <strong>DRGT Online</strong>, toujours en <strong>Belgique</strong>, dans laquelle je travaillais en tant que <strong> slot enginner</strong>. Mon rôle consistait à installer, configurer, programmer et réparer les équipements, les produits techniques et informatiques de l'ensemble des casinos belges. J'ai alors décidé de rejoindre mon épouse en <strong> Russie, à Saint-Pétersbourg</strong>, où j'ai appris le russe. Durant trois ans, j'y ai travaillé en tant que professeur de français et comme traducteur d'article du russe au français. Dans le même temps, j'ai suivi la formation <strong> développeur web d'openclassroom </strong> dont j'ai récemment obtenu le <strong> RNCP (bac+2)</strong>.</p>
      </div>
      <div id="meContacter" class="container4">
        <h2 class="">Me contacter</h2>
        <p>e-mail : <strong>vinceny@live.fr</strong></p>
        <p>Gsm : <strong>06 16 85 35 16</strong></p>          
      </div>
      </div>
      <footer class="box-4"></footer>
      <div class="container mt-3">
        <router-view />
      </div>  
    </div>
  </div>
</template>

<script>

import VueFlip from 'vue-flip';
export default {
  name: 'home',
  props: {
    msg: String
  },
  data() {
    return {
        flipped: false,
        flippedBRY: false,
        flippedYBR: false,
        flippedRYB: false,
        flippedBYR: false,
        flippedYRB: false,
        flippedRBY: false,
        active: false
        // unflipped: true
    };
},
  
components: {
'vue-flip': VueFlip
},

methods:{
//  mouseOver(){ 
//  this.flipped = !this.flipped
// this.buttonClick()
//         },
animate(){
var elTitmeName = document.getElementById('titleNameFront');
elTitmeName.style.animation = 'none';
elTitmeName.offsetHeight; /* trigger reflow */
elTitmeName.style.animation = null; 

var elSousTitre = document.getElementById('sousTitreFront');
elSousTitre.style.animation = 'none';
elSousTitre.offsetHeight; 
elSousTitre.style.animation = null; 

// var elTitmeNameBack = document.getElementById('titleNameBack');
// elTitmeNameBack.style.animation = 'none';
// elTitmeNameBack.offsetHeight; 
// elTitmeNameBack.style.animation = null; 

// var elSousTitreBack = document.getElementById('sousTitreBack');
// elSousTitreBack.style.animation = 'none';
// elSousTitreBack.offsetHeight; 
// elSousTitreBack.style.animation = null; 


// var elBannier = document.getElementById('bannierDeep');
// elBannier.style.animation = 'none';
// elBannier.offsetHeight; 
// elBannier.style.animation = null; 

var elBannier = document.getElementById('bannier');
elBannier.style.animation = 'none';
elBannier.offsetHeight; 
elBannier.style.animation = null; 

var elSlide = document.getElementById('side');
elSlide.style.animation = 'none';
elSlide.offsetHeight; /* trigger reflow */
elSlide.style.animation = null; 


var elLittleBox = document.getElementById('littleBox');
elLittleBox.style.animation = 'none';
elLittleBox.offsetHeight; /* trigger reflow */
elLittleBox.style.animation = null; 

var ellittleBoxLateral = document.getElementById('littleBoxLateral');
ellittleBoxLateral.style.animation = 'none';
ellittleBoxLateral.offsetHeight; /* trigger reflow */
ellittleBoxLateral.style.animation = null; 


//  var elMiniAnimate0 = document.getElementById('miniBanAnim0');
// elMiniAnimate0.style.animation = 'none';
// elMiniAnimate0.offsetHeight; /* trigger reflow */
// elMiniAnimate0.style.animation = null;
//  var elMiniAnimate1 = document.getElementById('miniBanAnim1');
// elMiniAnimate1.style.animation = 'none';
// elMiniAnimate1.offsetHeight; /* trigger reflow */
// elMiniAnimate1.style.animation = null;
//  var elMiniAnimate2 = document.getElementById('miniBanAnim2');
// elMiniAnimate2.style.animation = 'none';
// elMiniAnimate2.offsetHeight; /* trigger reflow */
// elMiniAnimate2.style.animation = null;
//  var elMiniAnimate3 = document.getElementById('miniBanAnim3');
// elMiniAnimate3.style.animation = 'none';
// elMiniAnimate3.offsetHeight; /* trigger reflow */
// elMiniAnimate3.style.animation = null;
//  var elMiniAnimate4 = document.getElementById('miniBanAnim4');
// elMiniAnimate4.style.animation = 'none';
// elMiniAnimate4.offsetHeight; /* trigger reflow */
// elMiniAnimate4.style.animation = null;
//  var elMiniAnimate5 = document.getElementById('miniBanAnim5');
// elMiniAnimate5.style.animation = 'none';
// elMiniAnimate5.offsetHeight; /* trigger reflow */
// elMiniAnimate5.style.animation = null;


},

changeBodyBg(value){
localStorage.setItem('count', value); 
if(value>=0 ){
this.flipped  == !this.flipped ? false:true
}
this.buttonClick()
this.resetFlip()
},

local(){
let valeur = 1
//  let count = JSON.parse(localStorage.getItem('count'))
localStorage.setItem('count', valeur); 
},

flip(){
this.flipped  == !this.flipped ? false:true
this.resetFlip()
},

resetFlip(){
if(this.flipped){
this.flipped == false
console.log(this.flipped)
}
},

buttonClick() {
let count = JSON.parse(localStorage.getItem('count'))
if(count >=4){
let zero = 0
localStorage.setItem('count', zero); 
}
else{
let count = JSON.parse(localStorage.getItem('count'))
let valeur = count+1
localStorage.setItem('count', valeur); 
}
console.log(count)
this.myFunction(count)
this.flip()
},
myFunction(count) {
var colorSide = ["darkblue", "yellow","red", "darkblue","yellow","red"];
var color =     ["red", "darkblue","yellow", "yellow", "red","darkblue"];
var colorLittleBox = ["yellow","red", "darkblue", "red","darkblue","yellow"];
var colorLittleBoxLateral = ["yellow","red", "darkblue", "red","darkblue","yellow"];

// var rand = Math.floor(Math.random() * color.length);
// document.getElementById('bannierFront').style.background = color[count];
// document.getElementById('bannierBack').style.background = color[count];
// document.getElementById('bannierDeep').style.background = color[count];
document.getElementById('bannier').style.background = color[count];
document.getElementById('side').style.background = colorSide[count];
document.getElementById('littleBox').style.background = colorLittleBox[count];
document.getElementById('littleBoxLateral').style.background = colorLittleBoxLateral[count];
console.log(count)
}
},
mounted(){
this.local()      
},
}
</script>

<style scoped>

.boxes{
transition: 300ms ease-out;
z-index: 0;
}
.boxes:hover{
transform: scale(1.045);
box-shadow: 5px 5px 5px;
}
.pitch{
margin-left: auto;
margin-right: auto;
width: 98%;
justify-items: space-around;
text-align: left;
}
.vignette{
width: 100%;
height: 30%;
opacity:0.9;
background:black;
transform: translate(0px, -100px);
}
.vignetteTexte{
transform: translate(0px, -235px);
text-decoration: unset;
color: white;
padding-top: 2px;
padding-bottom: 2px;
}
.vignetteTexte .sousTitreVignette{
margin-top: -17px;
}
.vignetteTexte .cliquez{
width: 250px;
height: 17px;
margin-left: auto;
margin-right: auto;
background-color: white;
font-size: 15px;
font-style:italic;
color: black;
}
.nofill{
text-decoration: unset;
}
.imgProjet{
height: 100%;
width: 100%;
object-fit: cover;
}
.navbar1 .nav-link{
transform: scale(1);
transition: 350ms ease-in-out;
border-top: transparent 3px solid;
padding-top: 10px;
font-size: 20px;
}
.navbar1 li{
margin-top: 0px;
}
.navbar1 .nav-link:hover{
border-top: tomato 3px solid;
padding-top: 10px;
}
.littleBox1stLine{
width:20vw;
display: flex;
margin-top: -0.5vw;
justify-content: space-around;
}
.containerBoxLogoSide2ndlineBackLittleBoxTop{
display: flex;
width: 100%;
justify-content: space-around;
}
.containerBoxLogoSide2ndlineBackLittleBoxMiddle{
margin-top: -0.5vw;
margin-left: -0vw;
}
.littleBox2ndLine{
width:20vw;
display: flex;
justify-content: space-around;
}
.icoBorder{
border: solid black 3px;
}
.icoHtmlCssJs{
margin-top: 10px;
width: 70px;
height: 70px;
padding: 1px;
background-color:white;
}
.icoMySql{
z-index: 1000;
margin-top: 10px;
width: 115px;
height: 75px;
padding: 0.1vw;
background-color: white;
}
.icoSeo{
z-index: 1000;
margin-top: 10px;
width: 115px;
height: 75px;
padding:1px;
background-color: white;
}
.mondrianTheme{
margin-top: 12px;
font-size: 26px;
}
.icoBootstrapMarginLeft{
margin-left: -0vw;
}
.icoDB{
z-index: 1000;
margin-top: 10px;
width: 135px;
height: 75px;
padding: 1px;
background-color: white;
}
.containerBox{
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-left: 4.25vw;
margin-right: 4.25vw;
height: auto;
}
.containerBoxLogo{
width:100%;
display: flex;
justify-content: space-between;
margin-left: 1vw;
margin-right: 17vw;
}
.containerBoxLogoSide{
width:20vw;
margin-top: 15.5vw;
display: flex;
justify-content: space-around;
}
.containerBoxLogoSide2ndlineBack{
width:20vw;
margin-top: 1vw;
display: flex;
justify-content: space-around;
}
.containerBoxLogoSide2ndline{
width:20vw;
display: flex;
justify-content: space-around;
}
.colorBox{
width: 78px;
height: 78px;
}
.miniBoxFront{
box-sizing: border-box;
border: solid 3px black;
width: 78px;
height: 78px;
display: grid;
grid-template-columns: 30.3% 22% 8.3% 30.3% 8.3%;
grid-template-rows: 15% 18.3% 16.6% 33% 16.6%;
background-color: white;
}
.colorBox0{
background-color:white; 
}
.colorBox1{
background-color:darkblue;
}
.colorBox2{
background-color:yellow;
}
.colorBox3{
background-color:yellow;
}
.colorBox4{
background-color: red;
}
.colorBox5{
background-color: darkblue;
}
.miniSideBRY{
background-color: darkblue;
grid-column: 1/2;
grid-row: 1/6;
border-right: 0.2vw solid black;
}
.miniBannierBRY{
z-index: 10;
background-color:red;
grid-column: 1/6;
grid-row: 2/3;
border: 0.2vw solid black; 
border-left: unset;
border-right: unset;
}
.miniLittleBoxBRY{
background-color:yellow;
grid-column: 3/5;
grid-row: 4/5;
z-index: 10;
border: 0.2vw solid black; 
}
.miniSideYBR{
background-color:yellow;
grid-column: 1/2;
grid-row: 1/6;
border-right: 0.2vw solid black;
}
.miniBannierYBR{
z-index: 10;
background-color:darkblue;
grid-column: 1/6;
grid-row: 2/3;
border: 0.2vw solid black; 
border-left: unset;
border-right: unset;
}
.miniLittleBoxYBR{
background-color:red;
grid-column: 3/5;
grid-row: 4/5;
z-index: 10;
border: 0.2vw solid black; 
}
.miniSideRYB{
background-color:red;
grid-column: 1/2;
grid-row: 1/6;
border-right: 0.2vw solid black;
}
.miniBannierRYB{
z-index: 10;
background-color:yellow;
grid-column: 1/6;
grid-row: 2/3;
border: 0.2vw solid black; 
border-left: unset;
border-right: unset;
}
.miniLittleBoxRYB{
background-color: darkblue;
grid-column: 3/5;
grid-row: 4/5;
z-index: 10;
border: 0.2vw solid black; 
}
.miniSideBYR{
background-color:darkblue;
grid-column: 1/2;
grid-row: 1/6;
border-right: 0.2vw solid black;
}
.miniBannierBYR{
z-index: 10;
background-color:yellow;
grid-column: 1/6;
grid-row: 2/3;
border: 0.2vw solid black; 
border-left: unset;
border-right: unset;
}
.miniLittleBoxBYR{
background-color: red;
grid-column: 3/5;
grid-row: 4/5;
z-index: 10;
border: 0.2vw solid black; 
}
.miniSideYRB{
background-color:yellow;
grid-column: 1/2;
grid-row: 1/6;
border-right: 0.2vw solid black;
}
.miniBannierYRB{
z-index: 10;
background-color:red;
grid-column: 1/6;
grid-row: 2/3;
border: 0.2vw solid black; 
border-left: unset;
border-right: unset;
}
.miniLittleBoxYRB{
background-color: darkblue;
grid-column: 3/5;
grid-row: 4/5;
z-index: 10;
border: 0.2vw solid black; 
}
.miniSideRBY{
background-color:red;
grid-column: 1/2;
grid-row: 1/6;
border-right: 0.2vw solid black;
}
.miniBannierRBY{
z-index: 10;
background-color:darkblue;
grid-column: 1/6;
grid-row: 2/3;
border: 0.2vw solid black; 
border-left: unset;
border-right: unset;
}
.miniLittleBoxRBY{
background-color: yellow;
grid-column: 3/5;
grid-row: 4/5;
z-index: 10;
border: 0.2vw solid black; 
}
.miniBoxBack{
width: 75px;
height: 75px;
display: grid;
grid-template-columns: 30.3% 22% 8.3% 30.3% 8.3%;
grid-template-rows: 15% 18.3% 16.6% 33% 16.6%;
transform: rotateX(180deg) rotateY(180deg);
background-color: white;
}
.miniSide0{
background-color: blue;
grid-column: 1/2;
grid-row: 1/6;
border-right: 0.2vw solid black;
}
.miniBannier0{
background-color:red;
grid-column: 1/6;
grid-row: 2/3;
border: 0.2vw solid black; 
border-left: unset;
border-right: unset;
}
.miniLittleBox0{
background-color:yellow;
grid-column: 3/5;
grid-row: 4/5;
z-index: 10;
border: 0.2vw solid black; 
}
.container{
display: grid;
grid-template-columns: [first] 20vw [line2] 60vw [line3] 20vw [end];
grid-template-rows: [row1-start] 80px [row1-end] 160px [third-line] 1fr[third-line] 80px [last-line];
overflow: hidden;
}
.container2{
margin-left: auto;
margin-right: auto;
display: grid;
grid-template-columns: 634px ;
grid-template-rows: 28px 391.84px 391.84px 391.84px 391.84px 391.84px auto;
grid-row-gap: 100px;
overflow: hidden;
justify-content: center;
}
.miniside0{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideRL;
}
.minibannier0{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideLR;
}
.miniMiniBox0{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideBT;
}
.miniside1{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideRL;
}
.minibannier1{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideLR;
}
.miniMiniBox1{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideBT;
}
.miniside2{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideRL;
}
.minibannier2{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideLR;
}
.miniMiniBox2{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideBT;
}
.miniside3{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideRL;
}
.minibannier3{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideLR;
}
.miniMiniBox3{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideBT;
}
.miniside4{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideRL;
}
.minibannier4{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideLR;
}
.miniMiniBox4{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideBT;
}
.miniside5{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideRL;
}
.minibannier5{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideLR;
}
.miniMiniBox5{
animation-duration: 3.2s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideBT;
}
.box-2{
z-index: 2;
align-content: center;
border: 1.05vw solid black;
background-color:darkblue; 
grid-column: 1/2;
grid-row: 1/4;
animation-duration: 1.5s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: slideBT;
}
.i1{
display: flex;
flex-wrap: wrap;
margin-top: 250px;
justify-content: space-around;
}
@keyframes slideBT {
from {
margin-top: 100vw;
}
to {
margin-top: -0vw; 
}
}
.title_box{
margin-left: 20vw;
text-align: right;
}
nav .nav-link{
text-decoration: unset;
color: black;
}
nav li{
list-style-type: none;
margin-right: 3vw;
}
.navbar1{
padding-top:20px ; 
display: flex;
margin: auto;
text-align: space-around;
background-color:#DCDCDC;
grid-column: 1/4;
grid-row: 1/2;
animation-fill-mode: forwards;
animation-duration: 1.5s;
animation-timing-function: ease-out; 
animation-name: slideRLNav;
}
@keyframes slideRLNav {
from {
margin-left: 100vw;
width: 100%;
}
to {
margin-left: 25vw;
width: 100%;
}
}
.reverse{
backface-visibility: hidden;
transform: rotateX(180deg) rotateY(180deg);
margin-top: 0.5vw;
}
.boxX{
z-index: 5;
width: 300px;
height: 185.41px;
border: solid 1.05vw black;
background-color: yellow;
transform: translate(-5vw, 12.25vw);
animation-duration: 1.5s;
animation-timing-function: ease-out; 
animation-name: slideRLLittleBox;
}
@keyframes slideRLLittleBox {
from {
margin-left: 100vw;
}
to {
margin-left: 0vw;
}
}
.box-1{
z-index: 3;
border: 1.05vw solid black;
border-left: unset;
border-right: unset;
position: relative;
background-color: red; 
grid-column: 1/4;
grid-row: 2/3;
animation-duration: 1.5s;
animation-timing-function: ease-out; 
animation-name: slideRL; 
}
.box-3{
text-align: center;
border-right: 1.05vw solid black;
background-color:white;
grid-column: 2/3;
grid-row: 3/4;
animation-duration: 3s;
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: mainBT;
}
@keyframes mainBT {
from {
margin-top: 100vw;
border-top: 1.05vw solid black;
}
92.5%{
border-top: 1.05vw solid black;
}
97.5%{
border-top: 0.25vw solid black;
}
to {
margin-top: 0vw; 
}
}
@keyframes anim {
from {
margin-top: 100vw;
border-top: 1vw solid black;
}
94%{
border-top: 1vw solid black;
}
to {
margin-top: 0vw; 
}
}
.window{
height: 100%;
width: 100%; 
overflow: hidden;
} 
.window p{
animation-duration: 2s;
animation-delay: 3s; 
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: windowp;
}
@keyframes windowp {
from {
opacity: 0;
color: black;
}
30%{
opacity: 0;
}
50%{
color: black;
}
to {
opacity: 1;
}
}
.window{
border: solid 0.1vw black;
border-radius: 0.1vw;
transform: perspective(0vw) rotateX(90deg);
animation-duration: 2s;
animation-delay: 3s; 
animation-timing-function: ease-out;
animation-fill-mode: forwards; 
animation-name: windowTwist;
}
@keyframes windowTwist {
from {
transform: rotate3d(1, 2, -1, 180deg);
background-color: black;
}
66%{
background-color: black;
}
to {
transform: rotate3d(0, 0, 0, 360deg);
  background-color: #DCDCDC;
}
}
.title_name{
margin-top: 0px; 
color: black;
font-size: 76px;
text-shadow: 3px 3px 7px black;
animation-duration: 2.5s;
animation-timing-function: ease-in-out; 
animation-name: slideRLText;
}
@keyframes slideRLText {
from {
margin-left: 100vw;
width: 100%;
transform: rotateX(0deg);
}
30%{
transform: rotateX(180deg);
}
to {
margin-left: 0vw;
width: 100%;
transform: rotateX(360deg);
}
}
@keyframes slideRL {
from {
margin-left: 100vw;
width: 100%;
}
to {
margin-left: 0vw;
width: 100%;
}
}
.sousTitre{
color: white;
margin-top: -65px;
font-size: 36px;
text-shadow:7px 7px 10px black;
animation-duration: 2.75s;
animation-timing-function: ease-in-out;
animation-name: slideLRText;
}
@keyframes slideLRText {
from {
opacity: 0;
margin-left: -205vw;
width: 100%;
transform: rotateX(0deg);
}
30%{
opacity: 0;
transform: rotateX(0deg);
}
49%{
opacity: 0;
transform: rotateX(180deg);
}
50%{
opacity: 1;
}
to {
margin-left: 0vw;
width: 100%;
transform: rotateX(360deg);
}
}
@keyframes slideLR {
from {
opacity: 0;
margin-left: -105vw;
width: 100%;
}
49%{
opacity: 0;
}
50%{
opacity: 1;
}
to {
margin-left: 0vw;
width: 100%;
}
}
.box {
width: 100vw;
height:18vw;
background-color: white;
perspective: 1000px;
border: 1vw solid black;
border-left: unset;
border-right: unset;
position: relative;
background-color: red; 
grid-column: 1/4;
grid-row: 2/3;
animation-duration: 1.5s;
animation-timing-function: ease-out; 
animation-name: slideRL; 
}
.box-t{
width: 60vw;
height: 8vw;
}
.box-inner {
position: relative;
width: 100vw;
height: 8vw;
text-align: right;
transition: transform 0.5s;
transform-style: preserve-3d;
}
.box:hover .box-inner {
transform: rotateX(180deg);
}
.box:active .box-inner {
transform: rotateX(180deg);
}
.box-front, .box-back {
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
}
.box-front {
background-color: red;
color: #111111;
}
.box-back {
background-color: red;
color: #eeeeee;
transform: rotateX(180deg);
}
.mesProjets{
width:auto;
height: 28px;
text-align: left;
margin-top: 75px;
grid-column: 1/2;
grid-row: 1/2;
transition: 350ms ease-in-out;
border-top: transparent 3px solid;
padding-top: 10px;
}
footer{
bottom: 0;
background-color:grey;
grid-column: 1/4;
grid-row: 4/5;
} 

@media screen and (max-width: 1299px){

.container2{
display: grid;
grid-template-columns: 624px ;
grid-template-rows: 28px 385.66px 385.66px 385.66px 385.66px 385.66px auto;
}
.container{
display: grid;
grid-template-columns: [first] 20vw [line2] 70vw [line3] 10vw [end];
grid-template-rows: [row1-start] 80px [row1-end] 160px [third-line] 1fr[third-line] 80px [last-line];
overflow: hidden;
}
.boxX{
z-index: 10;
width: 130px;
height: 210.34px;
transform: translate(-5vw, 5.2vw);
animation-duration: 1.5s;
animation-timing-function: ease-out; 
animation-name: slideRL1299;
}
@keyframes slideRL1299 {
from {
margin-left: 100vw;
}
to {
margin-left: 0vw;
}
}

}

@media screen and (max-width: 1254px){

.boxX{
width: 125px;
height: 202.25px; 
}

}

@media screen and (max-width: 1023px){

.vignette{
width: 100%;
height: 30%;
opacity:0.9;
background:black;
transform: translate(0px, -80px);
}
.vignetteTexte{
transform: translate(0px, -187px);
text-decoration: unset;
color: white;
padding-top: 2px;
padding-bottom: 2px;
}
.vignetteTexte .sousTitreVignette{
margin-top: -20px;
font-size: 15px;
}
.vignetteTexte .cliquez{
margin-top: -5px;
height: 15px;
font-size: 13px;
}
.boxX{
width: 12.36vw;
height: 20vw;
transform: translate(-5.75vw, 20vw);
animation-duration: 1.5s;
animation-timing-function: ease-out; 
animation-name: slideRL1023;
}
@keyframes slideRL1023 {
from {
margin-left: 100vw;
}
to {
margin-left: 0vw;
}
}
.containerBox{
margin-left: 1vw;
margin-right: 1vw;
}
.title_box{
margin-left: 15vw;
}
.window{
height: 286.77px;
}
.container2{
display: grid;
grid-template-columns: 464px ;
grid-template-rows: 28px 286.77px  286.77px  286.77px  286.77px  286.77px auto;
overflow: hidden;
justify-content: space-around;
}
.title_name{
animation-duration: 2.5s;
animation-timing-function: ease-in-out; 
animation-name: slideRLText;
}
.sousTitre{
animation-duration: 2.75s;
animation-timing-function: ease-in-out;
animation-name: slideLRText;
}
@keyframes slideRL {
from {
margin-left: 100vw;
width: 100%;
}
to {
margin-left: 0vw;
width: 100%;
}
}

}

@media screen and (max-width: 909px){

.icoHtmlCssJs{
width: 7vw;
height: 7vw;
padding: 1vw;
}
.icoMySql{
z-index: 1000;
margin-top: 1vw;
width: 12.25vw;
height: 7vw;
padding: 1vw;
background-color: white;
}
.icoSeo{
z-index: 1000;
margin-top: 1vw;
width: 12.25vw;
height: 7vw;
padding: 1vw;
background-color: white;
}
.icoDB{
z-index: 1000;
margin-top: 1vw;
width: 12.25vw;
height: 7vw;
padding: 1vw;
background-color: white;
} 
.icoBorder{
border: 0.5vw solid black;
}
}

@media screen and (max-width: 767px){

.vignette{
width: 100%;
height: 30%;
opacity:0.9;
background:black;
transform: translate(0px, -60px);
}
.vignetteTexte{
transform: translate(0px, -146px);
text-decoration: unset;
color: white;
padding-top: 2px;
padding-bottom: 2px;
}
.vignetteTexte h2{
font-size: 22px;
}
.vignetteTexte .sousTitreVignette{
font-size: 13px;
margin-top: -22px;
}
.vignetteTexte .cliquez{
width: 250px;
height: 15px;
margin-top: -11px;
margin-left: auto;
margin-right: auto;
background-color: white;
font-size: 13px;
font-style:italic;
color: black;
}
.i1{
width: 17.9vw;
}
.title_box{
margin-left: 15vw;
}
.window{
width: 65.5vw;
}
.box-3{
padding-top: 3vw;
}
.containerBox{
margin-left: auto;
margin-right: auto;
display: flex;
flex-wrap: wrap;
width: 300px;
height: 195px;
}
.window{
width: 100%;
height: 100%;
}
.container2{
display: grid;
grid-template-columns: 345px ;
grid-template-rows: 28px 213.22px  213.22px  213.22px  213.22px  213.22px auto;
grid-row-gap: 7vw;
overflow: hidden;
justify-content: space-around;
}
.mesProjets{
margin-top: 3vw;
}
.miniBoxFront{
width: 82px;
height: 82px;
}
.icoHtmlCssJs{
z-index: 1000;
margin-top: 1vw;
width: 7vw;
height: 7vw;
padding: 0.2vw;
background-color:white;
}
.icoHtmlCssJsCircle{
z-index: 1000;
margin-top: 15vw;
margin-left: 3vw;
width: 6vw;
height: 6vw;
}
.icoBootstrap{
z-index: 1000;
margin-top: 1vw;
width: 7vw;
height: 7vw;
padding: 0.1vw;
background-color: white;
}
@keyframes slideRL767 {
from {
margin-left: 100vw;
width: 12.36vw;
}
to {
margin-left: -0vw;
width: 12.36vw;
}
}

}

@media screen and (max-width: 667px){

.title_box{
margin-left: 10vw;
}

}

@media screen and (max-width: 617px) {
  
.title_box{
margin-left: 5vw;
}

}

@media (min-width: 598px)  {

.boxLateralRight{
display: none;
}

}

@media (min-width: 542px)  {

.nofill{
transition: 300ms ease-out;
}
.nofill:hover{
-webkit-transform: scale(1.05);
transform: scale(1.05);
}
.window{
display: inline-block;
height: 100%;
width: 100%; 
overflow: hidden;
transition: 300ms ease-out;
box-shadow:0.75vw 0.75vw 0.5vw gray;
transform: scale(1);
} 
.window:hover{
box-shadow: 1.25vw 1.25vw 1vw grey;
border: solid 1px black;
-webkit-transform: scale(2);
transform: scale(2);
}
.vignette{
transition: 300ms ease-out;
}
.vignetteTexte{
transition: 300ms ease-out;
}

}

@media screen and (max-width: 597px){

.boxX{
display: none;
}
.container2{
grid-row-gap: 7vw;
}
.icoHtmlCssJs{
width: 8vw;
height: 8vw;
padding: 1vw;
}
.icoMySql{
width: 14.25vw;
height: 8vw;
padding: 1vw;
}
.icoSeo{
width: 14.25vw;
height: 8vw;
padding: 1vw;
}
.icoDB{
width: 14.25vw;
height: 8vw;
padding: 1vw;
}
.container{
display: grid;
grid-template-columns: [first] 25vw [line2] 65vw [line3] 10vw [end];
grid-template-rows: [row1-start] 15vw [row1-end] 25vw [third-line] auto [third-line] 5vw [last-line];
overflow: hidden;
}
.boxLateralRight{
width: 100%;
height: 100%;
grid-column: 3/4;
grid-row: 3/4;
background-color: yellow;
}
.navbar1{
padding-left: 11vw;
}
.navbar1 .nav-link{
font-size: 3.75vw;
}
.title_name{
font-size: 12.75vw;
}
.sousTitre{
font-size: 6vw;
margin-top: -11vw;
}
.mondrianTheme{
font-size: 4.75vw;
}
.box-3{
padding-top: 3vw;
}
.navbar1 a{
margin-left: -10vw;
margin-right: 11vw;
font-size: 3vw;
}
.containerBox{
margin-top: -0vw;
margin-left:1vw;
margin-right: 1vw;
display: flex;
flex-wrap: wrap;
width:62.25vw ;
height: 45vw;
justify-content: space-around;
}
.miniBoxFront{
box-sizing: border-box;
margin-top: 0;
width: 19vw;
height:19vw;
border:1vw solid black
}
.colorBox{
width: 19vw;
height:19vw;
}
.i1{
margin-top:45vw;
width: 23vw;
}

}

@media screen and (max-width: 541px)

{

.vignette{
width: 100%;
height: 30%;
opacity:0.9;
background:black;
transform: translate(0px, -11vw);
}
.vignetteTexte{
transform: translate(0px, -27vw);
text-decoration: unset;
color: white;
padding-top: 2px;
padding-bottom: 2px;
}
.vignetteTexte h2{
font-size: 4.25vw;
}
.vignetteTexte .sousTitreVignette{
font-size: 2.35vw;
}
.vignetteTexte .cliquez{
width: 45vw;
height: 2.7vw;
margin-top: -1.90vw;
margin-left: auto;
margin-right: auto;
background-color: white;
font-size: 2.25vw;
font-style:italic;
color: black;
}
.navbar1 .nav-link:hover{
padding-top: 2vw;
}
.navbar1{
padding-top: 5vw;
}
.boxX{
display: none;
}
.window{
width: 100%;
height: 100%;
border-left: unset;
border-right: unset;
}
.container2{
display: grid;
grid-template-columns: 64vw ;
grid-template-rows: 5vw 39.55vw 39.55vw 39.55vw 39.55vw 39.55vw auto;
grid-row-gap: 7vw;
overflow: hidden;
justify-content: space-around;
}
}

@media screen and (max-width: 499px){

.vignetteTexte h2{
margin-top: 6vw;
}
.vignetteTexte p{
display: none;
}
.mesProjets{
padding-top: 0px;
}

}

@media screen and (max-width: 292px){ 

.mesProjets{
font-size: 7vw;
padding-top: 0px;
}

}

</style>


