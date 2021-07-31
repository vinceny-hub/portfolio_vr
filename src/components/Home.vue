<template>
  <div id="app">
    <div class="container">
    <nav class="navbar1" v-on:click="buttonClick()">
     <h1>{{ msg }}</h1>
     
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Mes projets</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Mon parcours</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/tutorials-list" class="nav-link">Contact</router-link>
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

         <!-- <a  @mouseover="buttonClick">  -->
         <div active-click="" v-on:click="buttonClick()"  id="littleBox" class="boxX">
            <!-- <template v-slot:front class=""> -->

         
        
          
          <!-- </template> -->
          
          
        </div>
         <div  v-on:click="buttonClick()"  id="littleBoxLateral" class="boxLateralRight"></div>
        <!-- </a> -->
    <!-- <div class="boxX">
        <div class="box">
      <div class="box-inner">
        <div class="box-front">
          <h2>Face frontale</h2>
        </div>
        <div class="box-back">
          <h2>Face arrière</h2>
        </div>
      </div>
      </div>
    </div> -->
     <!-- <vue-flip  active-click=""    @mouseover="mouseOver" width="100vw" height="8vw" v-on:click="buttonClick()" v-bind="flipped" id="bannier" class="box-1" horizontal="true"> -->

          <!-- <div class="box">
              <div class="box-inner">
                <div class="box-front">
                  <h2>Face frontale</h2>
                </div>
                <div class="box-back">
                  <h2>Face arrière</h2>
                </div>
              </div>
            </div> -->
           
            <!-- <div class="box" active-click="" id="bannierDeep">
              <div class="box-inner"  v-on:click="active">
            
                <div class="box-front"  id="bannierFront">
                      <div class="box-t">
                  <h1 class="title_name">Vincent Robert</h1>
           <h2 class="sousTitre">Développeur Web</h2>
                      </div>
                </div>
                <div class="box-back"  id="bannierBack">
                      <div class="box-t">
                <h1 class="title_name">Vincent Robert</h1>
           <h2 class="sousTitre">Développeur Web</h2>
                      </div>
                </div>
               
              </div>
            </div> -->




             <div  active-click=""    v-on:click="buttonClick()" id="bannier" class="box-1" horizontal=true>
          <!-- <template v-slot:front class="front"> -->
            <div class="front"> 
             <!-- <div class="title_bar">-->
         <div class="title_container"> 
              <div class="title_box"> 
              <h1 class="title_name" id="titleNameFront">Vincent Robert</h1>
              <h2 class="sousTitre" id="sousTitreFront">Développeur Web</h2>
              </div>
         <!-- </div>-->
             </div> 
          </div>
          <!-- <template v-slot:back class="back">
             
         <div class="title_container"> 
         <div class="reverse back">
             <div class="title_box"> 
                <h1 class="title_name"  id="titleNameBack">Vincent Robert</h1>
           <h2 class="sousTitre"  id="sousTitreBack">Développeur Web</h2>
       
             </div>
         </div> 
         </div>
          </template> -->
        </div>


          <!-- <div v-on:click="buttonClick()" v-bind="flipped" id="bannier" class="box-1" horizontal="true">  -->
            <!-- <div class="front">             -->
              <!-- <div class="box-inner"> 
              <div class="title_box"> 
              <h1 class="title_name">Vincent Robert</h1>
              <h2 class="sousTitre">Développeur Web</h2>
              </div> -->
         <!-- </div>-->
              
          <!-- </div>  -->
          <!-- <template v-slot:back class="back"> -->
                <!-- <div class="title_bar">-->
         <!-- <div class="title_container">  -->
         <!-- <div class="reverse back"> -->
             <!-- <div class="box-back"> 
            <h1 class="title_name">Vincent Robert</h1>
           <h2 class="sousTitre">Développeur Web</h2> -->
         <!-- </div>-->
             <!-- </div> -->
         <!-- </div>  -->
             <!-- </div>
         </div>
        </div> -->
          <!-- </template> -->
        <!-- </vue-flip> -->
    <!-- <div class="box-1"  v-on:click="flipCard()">
       <div class="title_bar">
         <div class="title_container">
           <h1 class="title_name">Vincent Robert</h1>
           <h2 class="sousTitre">Développeur Web</h2>
          </div>
        </div>
    </div> -->
     
  
     
    <!-- <div class="box-2">
      <div class="side_bar"></div>
    </div> -->
    <div class="box-3">
         <!-- <div class="containerBoxLogo"> -->

      <!-- <img class="icoHtmlCssJs" src="../images/htmlcssjsCircle.png"> -->
      <!-- <img class="icoBootstrap icoBootstrapMarginLeft" src="../images/bootstrapS.png">
      <img class="icoBootstrap" src="../images/vue.png">
      <img class="icoNode" src="../images/nodejs.png"> -->
      <!-- <img class="icoMySql" src="../images/mysql.png">
      <img class="icoDB" src="../images/mongoDB.png">
      <img class="icoSeo" src="../images/seo.png"> -->
         <!-- </div> -->
       <h2 class="mondrianTheme"> Choose your Mondrian theme </h2>
        <div class="containerBox">
          
           <div   v-on:click="animate(), changeBodyBg(0)"  class="colorBox colorBox0" horizontal=true>
            <div class="frontBRY">            
              <div class="miniBoxFront"> 
                <div class="miniLittleBoxBRY"></div>
                <div class="miniBannierBRY"></div>
                <div class="miniSideBRY"></div>
              </div>           
            </div>                    
           </div>
            <div   v-on:click="animate(), changeBodyBg(1)"  class="colorBox colorBox0" horizontal=true>
            <div class="frontBRY">            
              <div class="miniBoxFront"> 
                 <div class="miniLittleBoxYBR"></div>
                <div class="miniBannierYBR"></div>
                <div class="miniSideYBR"></div>
              </div>           
            </div>                    
           </div>   
           <div   v-on:click="animate(), changeBodyBg(2)"  class="colorBox colorBox0" horizontal=true>
            <div class="frontBRY">            
              <div class="miniBoxFront"> 
                <div class="miniLittleBoxRYB"></div>
                <div class="miniBannierRYB"></div>
                <div class="miniSideRYB"></div>
              </div>           
            </div>                    
           </div>   
           <div   v-on:click="animate(), changeBodyBg(3)"  class="colorBox colorBox0" horizontal=true>
            <div class="frontBRY">            
              <div class="miniBoxFront"> 
                <div class="miniLittleBoxBYR"></div>
                <div class="miniBannierBYR"></div>
                <div class="miniSideBYR"></div>
              </div>           
            </div>                    
           </div>   
           <div   v-on:click="animate(), changeBodyBg(4)"  class="colorBox colorBox0" horizontal=true>
            <div class="frontBRY">            
              <div class="miniBoxFront"> 
                <div class="miniLittleBoxYRB"></div>
                <div class="miniBannierYRB"></div>
                <div class="miniSideYRB"></div>
              </div>           
            </div>                    
           </div>
            <div   v-on:click="animate(), changeBodyBg(5)"  class="colorBox colorBox0" horizontal=true>
            <div class="frontBRY">            
              <div class="miniBoxFront"> 
                 <div class="miniLittleBoxRBY"></div>
                <div class="miniBannierRBY"></div>
                <div class="miniSideRBY"></div>
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
        <h2 class="mesProjets">Mes projets</h2>
       <router-link to="/tutorials" class="">
      <div class="window window-1"><h2>Le coin de Titi</h2><p>Un réseau social d'entreprise, simple et facile à utiliser</p><p>Cliquez pour visiter l"application</p></div>
      </router-link>
        <router-link to="/tutorials" class="">
      <div class="window window-2"><h2>Teddies, les petits oursons</h2><p>Site e-commerce de ventes d'oursons en peluche</p><p>Cliquez pour visiter l"application</p></div>
      </router-link>
       <router-link to="/tutorials" class="">
      <div class="window window-2"><h2>La Chouette agence</h2><p>Optimisation d'un site déjà existant</p><p>Cliquez pour visiter l"application</p></div>
      </router-link>
      <router-link to="/tutorials" class="">
      <div class="window window-2"><h2>Ohmyfood</h2><p>Dynamisation d'une application d'avis gastronomique</p><p>Cliquez pour visiter l"application</p></div>
      </router-link>
      <router-link to="/tutorials" class="">
      <div class="window window-2"><h2>Reservia</h2><p>Création d'une maquette d'un site de réservation d'hébergements</p><p>Cliquez pour visiter l"application</p></div>
      </router-link>
          </div>

          <div class="container3">
               <h2 class="">Mon Parcours</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum autem temporibus exercitationem quis mollitia inventore assumenda nobis numquam similique doloremque aliquam, harum sunt, sapiente sed quidem praesentium iusto eligendi!</p>
          </div>

            <div class="container4">
               <h2 class="">Me contacter</h2>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, dolorem sapiente voluptate expedita quisquam perferendis? Reprehenderit nemo omnis rerum amet ducimus explicabo. Repudiandae labore quos mollitia doloribus earum. Nihil, maiores!</p>
          </div>


            <!-- <div class="box">
              <div class="box-inner">
                <div class="box-front">
                  <h1 class="title_name">Vincent Robert</h1>
           <h2 class="sousTitre">Développeur Web</h2>
                </div>
                <div class="box-back">
                <h1 class="title_name">Vincent Robert</h1>
           <h2 class="sousTitre">Développeur Web</h2>
                </div>
              </div>
            </div> -->



    </div>
    <footer class="box-4">
    </footer>
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
//             // this.active = !this.active;   
//             // this.flipped = !this.flipped
//              this.flipped  = true
//             //  this.resetFlip()
        
            
//             // this.buttonClick()
            
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

  //    var elTitmeNameBack = document.getElementById('titleNameBack');
  // elTitmeNameBack.style.animation = 'none';
  // elTitmeNameBack.offsetHeight; 
  // elTitmeNameBack.style.animation = null; 

  //   var elSousTitreBack = document.getElementById('sousTitreBack');
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
  // this.flipped  == !this.flipped ? false:true

  var elLittleBox = document.getElementById('littleBox');
  elLittleBox.style.animation = 'none';
  elLittleBox.offsetHeight; /* trigger reflow */
  elLittleBox.style.animation = null; 

   var ellittleBoxLateral = document.getElementById('littleBoxLateral');
  ellittleBoxLateral.style.animation = 'none';
  ellittleBoxLateral.offsetHeight; /* trigger reflow */
  ellittleBoxLateral.style.animation = null; 
  

},
    



changeBodyBg(value){
   // this.flipped  == !this.flipped ? false:true
        // location.reload()
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
  
         
          //  if(this.flipped){
          //    this.flipped == false
          //     // this.unflip()
            
          //       console.log(this.flipped)
          //  }
          
          this.resetFlip()
        
 },

 resetFlip(){
     if(this.flipped){
       
             this.flipped == false
              // this.unflip()
            
                console.log(this.flipped)
           }

 },
//  unflip(){
//   this.flipped  == false
  
         
//            if(this.flipped){
//               // let count = JSON.parse(localStorage.getItem('count'))
//               //  let val = count+1
//               // localStorage.setItem('count', val); 
//             this.buttonClick()
//                 console.log(this.flipped)
//            }
        
//  },
        
        buttonClick() {
        
           let count = JSON.parse(localStorage.getItem('count'))
     
         

          if(count >=4){
            let zero = 0
            localStorage.setItem('count', zero); 
          }
          else{
              let count = JSON.parse(localStorage.getItem('count'))
          //  localStorage.setItem('count', valeur); 
              let valeur = count+1
              localStorage.setItem('count', valeur); 
            
          }
        
           

           

          //  localStorage.setItem('count', valeur); 

          
          
          // let count = JSON.parse(localStorage.getItem('count'))
          console.log(count)
          // let increment = count + 1  
          // console.log(increment)                      
    // console.log(OP)
    // let init = []
    // let dataStr = JSON.stringify(data)
    // data = JSON.parse(dataStr)
    // if(count.length>0){ 
    // let increment = count.length
    // console.log(increment)
    // }
    // else{
    //   count = 1
    // }
      // let valeur = 0        
      // valeur+=increment;
      // document.getElementById('id').value=valeur;

      // console.log(valeur)
       this.myFunction(count)
       this.flip()
      //  this.flipBannier()
      },

// flipBannier(){

//   // let content = document.getElementById('bannierDeep').click();
//   //  content.toggleClass('active');
//    let content = document.getElementById('bannier').click();
//    content.toggleClass('active');
  

// },

      myFunction(count) {
        // var color = ["#3b609b", "#9b3b3b", "#3b9b81", "#7da5a4"];
       
        var colorSide = ["darkblue", "yellow","red", "darkblue","yellow","red"];
         var color =     ["red", "darkblue","yellow", "yellow", "red","darkblue"];
        var colorLittleBox = ["yellow","red", "darkblue", "red","darkblue","yellow"];
         var colorLittleBoxLateral = ["yellow","red", "darkblue", "red","darkblue","yellow"];
        // this.flipped = true
        
          //   let count = 0
          //   this.count = i+1
          // console.log(count)
              
  // var rand = Math.floor(Math.random() * color.length);
  // document.getElementById('bannierFront').style.background = color[count];
  //   document.getElementById('bannierBack').style.background = color[count];
        // document.getElementById('bannierDeep').style.background = color[count];
           document.getElementById('bannier').style.background = color[count];
    

    document.getElementById('side').style.background = colorSide[count];
    document.getElementById('littleBox').style.background = colorLittleBox[count];
    document.getElementById('littleBoxLateral').style.background = colorLittleBoxLateral[count];
    console.log(count)
     
     }
         },
           mounted(){

         
 this.local()      },
}


 

</script>




<style scoped>
/* html, body {
  margin: 0px !important;
  padding: 0px !important;
  background-color: #DCDCDC;
 }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; 
} */
/* .frontEx{
  width: 3vw;
  height: 3vw;
  background-color: royalblue;
}
.backEx{
  width: 3vw;
  height: 3vw;
  background-color: red;
} */


  .navbar1 .nav-link{
    /* margin-left: -75px; */
    /* margin-right: 11vw; */
    font-size: 20px;
  }
  
  .navbar1 li{
    margin-top: 0px;
  }
  /* .nav-link{
   border-top: transparent 1vw solid;
  } */
  .navbar1 .nav-link:hover{
   border-top: tomato 3px solid;
   padding-top: 10px;
  }
.littleBox1stLine{
   width:20vw;
  /* margin-top: 15vw; */
  display: flex;
  margin-top: -0.5vw;
  justify-content: space-around;
   /* margin-left: 1vw; *
  /* margin-right: 17vw; */
  

}

.containerBoxLogoSide2ndlineBackLittleBoxTop{
  display: flex;
  width: 100%;
  justify-content: space-around;
  /* margin-top: -0.5vw;
  margin-left: -0.45vw; */
}

.containerBoxLogoSide2ndlineBackLittleBoxMiddle{
  margin-top: -0.5vw;
  margin-left: -0vw;
}

.littleBox2ndLine{
   width:20vw;
  /* margin-top: 15vw; */
  display: flex;
 
  justify-content: space-around;
   /* margin-left: 1vw; */
  /* margin-right: 17vw; */
 

}
.icoBorder{
    border: solid black 3px;
}

.icoHtmlCssJs{
  /* position: absolute; */
  /* z-index: 1000; */
  margin-top: 10px;
  width: 70px;
  height: 70px;
  /* border: solid black 0.25vw; */
  padding: 1px;
  background-color:white;
}
/* .icoHtmlCssJsCircle{

    z-index: 1000;
  margin-top: 15vw;
  margin-left: 3vw;
  width: 4.5vw;
  height: 4.5vw;

} */

/* .icoBootstrap{
   z-index: 1000;
  margin-top: 1vw;
  width: 4.5vw;
  height: 4.5vw;
  padding: 0.1vw;

  
  background-color: white;

} */

/* .icoNode{
   z-index: 1000;
  margin-top: 1vw;
  width: 4.5vw;
  height: 4.5vw;
  padding: 0.1vw;

   
  background-color: white;

} */
.icoMySql{
   z-index: 1000;
  margin-top: 10px;
  width: 115px;
  height: 75px;
   padding: 0.1vw;

   /* border: solid black 0.2vw; */
  background-color: white;

}
.icoSeo{
   z-index: 1000;
  margin-top: 10px;
  width: 115px;
  height: 75px;
    padding:1px;

   /* border: solid black 0.2vw; */
  background-color: white;

}
.mondrianTheme{
  margin-top: 12px;
  font-size: 26px;
}

.icoBootstrapMarginLeft{
  margin-left: -0vw;
}
/* .icoNode{
    z-index: 1000;
  margin-top: 1vw;
  width: 6.5vw;
  height: 4.5vw;
} */
.icoDB{
   z-index: 1000;
  margin-top: 10px;
  width: 135px;
  height: 75px;
    padding: 1px;

   /* border: solid black 0.2vw; */
  background-color: white;

}

.containerBox{
  display: flex;
  flex-wrap: wrap;
  /* margin-right: 10px; */
  justify-content: space-around;
   margin-left: 4.25vw;
  margin-right: 4.25vw;
   /* width: 300px; */
  height: auto;
 
  /* margin-top: -2vw; */
  
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
  /* padding-left: 1vw; */
  /* padding-right: 1vw; */
  
  justify-content: space-around;
   /* margin-left: 1vw; */
  /* margin-right: 17vw; */
  
  
}
.containerBoxLogoSide2ndlineBack{
  width:20vw;
  margin-top: 1vw;
  display: flex;
 
  justify-content: space-around;
   /* margin-left: 1vw; */
  /* margin-right: 17vw; */
  
  
}

.containerBoxLogoSide2ndline{
  width:20vw;
  /* margin-top: vw; */
  display: flex;
 
  justify-content: space-around;
   /* margin-left: 1vw; */
  /* margin-right: 17vw; */
  
  
}

.colorBox{
  /* width: 90px;
  height: 90px; */
  /* border: solid 3px black; */
 
  /* margin-left: 3vw;
  margin-right: 3vw; */
  /* -webkit-animation:slideRL; */
 
  
}

.miniBoxFront{
    border: solid 3px black;
  width: 75px;
  height: 75px;
  display: grid;
   grid-template-columns: 30.3% 22% 8.3% 30.3% 8.3%;
  grid-template-rows: 15% 18.3% 16.6% 33% 16.6%;
  /* transform: rotateX(0deg) rotateY(0deg); */
  background-color: white;
  
}


.colorBox0{
  /* width: 75px;
  height: 75px; */
   /* display: grid;
  grid-template-columns: 1vw 2vw;
  grid-auto-rows: 1vw 2vw; */

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


/* .miniBox0{
  display: grid;
  grid-template-columns: 0.91vw 0.66vw 0.25vw 0.91vw 0.25vw;
  grid-template-rows: 0.45vw 0.55vw 0.5vw 1vw 0.5vw;
  /* transform: rotateX(180deg) rotateY(180deg); */
/* }  */
.miniBoxBack{
   width: 75px;
  height: 75px;
  display: grid;
  grid-template-columns: 30.3% 22% 8.3% 30.3% 8.3%;
  grid-template-rows: 15% 18.3% 16.6% 33% 16.6%;
  transform: rotateX(180deg) rotateY(180deg);
  background-color: white;
}

/* .front2{
  width: 3vw;
  height: 3vw;
  background-color: blue;
}
.back2{
  background-color: red;
   width: 3vw;
  height: 3vw;
} */

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
  /* margin-top: 45px; */
  margin-left: auto;
  margin-right: auto;
  /* padding-top: 30vw; */
  display: grid;
  grid-template-columns: 634px ;
  grid-template-rows: 28px 391.84px 391.84px 391.84px 391.84px 391.84px auto;
  grid-row-gap: 100px;

  overflow: hidden;
  justify-content: center;
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
.i2{
 position: relative;
  width: 18vw;
  height: 100vw;
  /* background-color: red; */
}
.i1{
  display: flex;
  flex-wrap: wrap;
 /* position: relative; */
 /* margin-top: 17vw; */
 margin-top: 250px;
  /* width: 270px;
  height: 9vw; */
  justify-content: space-around;
  /* background-color: red; */
  /* margin-left: 1vw; 
   margin-right: 1vw; */
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
  /* width: 500px; */
  /* height: 8vw; */
    /* width: 800px;
  height: 160px; */
  text-align: right;

}
/* .boxLateralRight{
  grid-column: 3/4;
  grid-row: 3/4;
} */

 /* .window-1{
   
   background-color: white;
    grid-column: 1/2;
   grid-row: 1/2;
   
 }
 .window-2{
   background-color: white;
  grid-row: 2/3;
   
 }
.window-3{
   background-color:white;
    grid-column: 1/2;
  grid-row: 3/4;
   
 } */

nav .nav-link{
 
 text-decoration: unset;
 /* font-size: 1.2vw; */
 color: black;
 
 }
nav li{
   list-style-type: none;
  margin-right: 3vw;
}

.navbar1{
  /* padding-right: 17vw; */
  padding-top:20px ; 
  display: flex;
  margin: auto;
  /* width: 100vw;*/
  /* height: 5vw; */
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
  transform: rotateX(180deg) rotateY(180deg);
}
.boxX{
  /* width: 20vw;
  height: 12.36vw; */
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
    /* width: 100%; */
  }

  to {
    margin-left: 0vw;
    /* /* width: 100%;  */
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

/* .front{
    width: 100vw;
   height: 8vw;
  
  
} */
.back{
  
  
   /* width: 100vw;
   height: 8vw; */
    margin-left: -950px;
    /* border-right:1vw solid black;  */
   

}

.box-3{
  /* z-index: 0; */
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
    /* 96%{
    border-top: 0.75vw solid black;
  }*/
   97.5%{
    border-top: 0.25vw solid black;
  }
  /*
   98%{
    border-top: 0.25vw solid black;
  }
   99.5%{
    border-top: 0.1vw solid black; 
  /* } */
  to {
     margin-top: 0vw; 
     /* border-top: unset; */
  
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
     /* border-top: unset; */
  
  }
}

.window{
  /* margin-top: 15vw;  */
  height: 391.84px;
  /* width: 750px; */
  /* font-size: 1.25vw; */
}
.window p{
  /* margin-top: 3.25vw; */
  /* font-size: 5vw; */
   /* transform: perspective(0vw) rotateX(90deg); */
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
     /* margin-top: 0vw;  */
    
  
  }
}
.window{
/* font-size: 9vw; */
 /* perspective: 200px; */
 border: solid 1.05vw black;
 /* box-shadow: 1vw 1vw 1vw black; */
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
    /* margin-top: 100vw; */
    transform: rotate3d(1, 2, -1, 180deg);
    background-color: black;
    /* transform: skew(90deg, 20deg); */
   
  }
   66%{
    background-color: black;
  }
   /* 50%{
       transform: rotate3d(1, 2, -1, 180deg);
   } */
 
  to {
      transform: rotate3d(0, 0, 0, 360deg);
       background-color: #DCDCDC;
     /* margin-top: 0vw;  */
    
  
  }
}
 /* .title_bar{ */
  /* position: relative;

  z-index: 10;
  width: 100vw;
  height: 10vw;
  background-color:red;
  animation-duration: 1.5s;
  animation-timing-function: ease-out; 
  animation-name: slideRL;
  grid-area: title_bar; */
/* } */
/* @keyframes slideRL {
  from {
    margin-left: 100vw;
    width: 100%;
  }

  to {
    margin-left: 0vw;
    width: 100%;
  }
} */
.title_container{
  
  /* position: relative; */
  /* padding-right: 10vw; */
 /* text-align: right;  */
  /* margin-left: 0; */
   /* width:100vw;
  height: 160px; */
  /* border-right: 1vw solid transparent;    */
  /* grid-column: 1/4;
  grid-row: 2/3; */
  /* animation-fill-mode: forwards;
  animation-delay: 3s;
   animation-duration: 0.25s;
  animation-timing-function: ease-in-out; 
  animation-name: border-bannierTB; */
}
  


/* 
@keyframes border-bannierTB {
  from {
   border-right: unset;
  }

  to {
    border-right: 1vw solid black;
    
  }
} */
.title_name{
  margin-top: 0px; 
  color: black;
  /* font-size: 5vw; */
  font-size: 76px;
  /* text-shadow: .1vw .1vw .5vw black; */
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
  /* font-size: 2.5vw; */
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
    /* margin-left: -105vw;
    width: 100%; */
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
/* .side_bar{ */
  /* margin-top: -15vw; */

  /* width: 20vw;
  height: 100vw; */
  /* background-color:blue; */
  /* animation-duration: 1.5s;
  animation-timing-function: ease-out;
   animation-fill-mode: forwards; 
  animation-name: slideBT; */
  
 
/* } */




.box {

width: 100vw;
height:18vw;
/* border: solid 1vw black; */
background-color: white;
/* border: 1px solid #eeeeee; */
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
  width:500px;
  height: 28px;
  /* margin-left: -0vw; */
  /* margin-bottom: -50vw; */
  text-align: left;
  margin-top: 75px;
  /* margin-bottom: 0px; */
  /* font-size: 2vw; */
  font-size: 26px;
   grid-column: 1/2;
   grid-row: 1/2;

}

     
 footer{
  /* width: 100vw;
  height: 5vw; */
  bottom: 0;
  background-color:grey;
   grid-column: 1/4;
   grid-row: 4/5;
} 


@media screen and (max-width: 1299px){


   .container2{
  /* margin-top: 45px;
  margin-left: auto;
  margin-right: auto; */
  /* padding-top: 30vw; */
  display: grid;
  grid-template-columns: 624px ;
  grid-template-rows: 28px 385.66px 385.66px 385.66px 385.66px 385.66px auto;
  /* grid-row-gap: 5vw; */

  /* overflow: hidden; */
  /* justify-content: center; */
 }

   /* .container2{ */
  /* margin-top: 5vw; */
  /* padding-top: 30vw; */
  /* display: grid;
  grid-template-columns: 50vw ;
  grid-template-rows: 2vw 15vw 15vw 15vw 15vw 15vw auto;
  grid-row-gap: 5vw;

  overflow: hidden;
  justify-content: space-around;
 } */
  /* .title_box{
    width: 67vw;
  } */
  /* .navbar1 .nav-link{
    margin-left: -10vw;
    margin-right: 11vw;
    font-size: 1.5vw;
  }
  
  .navbar1 li{
    margin-top: 0.25vw;
  }

  .i1{
    padding-top: 3vw;
  }
  .back{
    padding-bottom: 2.75vw;
  } */
/* .container{ */
  /* display: grid;
  grid-template-columns: [first] 20vw [line2] 70vw [line3] 10vw [end];
  grid-template-rows: [row1-start] 5vw [row1-end] 12.5vw [third-line] auto [third-line] 5vw [last-line];
  overflow: hidden;
 } */
 .container{
  display: grid;
  grid-template-columns: [first] 20vw [line2] 70vw [line3] 10vw [end];
  grid-template-rows: [row1-start] 80px [row1-end] 160px [third-line] 1fr[third-line] 80px [last-line];
  overflow: hidden;
 }
 
  .boxX{
  /* width: 12.36vw;
  height: 20vw; */
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
    /* width: 100%; */
  }

  to {
    margin-left: 0vw;
    /* width: 100%; */
  }
}
  /* .title_name{
  margin-top: 0.75vw;
 
  font-size: 5.25vw;
}
.sousTitre{

  font-size: 2.75vw;
 
} */

/* .i1{
  margin-right: auto;
  margin-left: auto;
} */


}
@media screen and (max-width: 1254px){
  .boxX{
    width: 125px;
  height: 202.25px; 
  }
}

@media screen and (max-width: 1023px){
  /* .title_box{
    margin-right: 50vw;
  } */
  /* .mondrianTheme{
  margin-top: 1vw;
  font-size: 2.5vw;
} */

.boxX{
  width: 12.36vw;
  height: 20vw;
   /* width: 130px;
  height: 210.34px; */
  transform: translate(-5.75vw, 20vw);
  
    animation-duration: 1.5s;
  animation-timing-function: ease-out; 
  animation-name: slideRL1023;
}
@keyframes slideRL1023 {
  from {
    margin-left: 100vw;
    /* width: 100%; */
  }

  to {
    margin-left: 0vw;
    /* width: 100%; */
  }
}

.containerBox{
  /* display: flex;
  flex-wrap: wrap;
  margin-right: 10px;
  justify-content: space-around; */
  /* height: 81px; */
   margin-left: 1vw;
  margin-right: 1vw;
 
}

.title_box{
  margin-left: 15vw;
}
 
.window{
  /* font-size: 1.75vw; */
  height: 286.77px;
  /* width: 50vw; */
}
.container2{
  /* margin-top: 5vw; */
  
  display: grid;
  grid-template-columns: 464px ;
  grid-template-rows: 28px 286.77px  286.77px  286.77px  286.77px  286.77px auto;
  /* grid-row-gap: 5vw; */
   /* grid-row-gap: 50px; */

  overflow: hidden;
  justify-content: space-around;
 }
  
   
  /* .navbar1 .nav-link{
    margin-left: -7vw;
    margin-right: 9vw;
    font-size: 1.75vw;
  } */
  
  /* .navbar1 li{
    margin-top: 0.55vw;
  } */

   /* .back{
    padding-bottom: 7vw;
  } */
  /* .container{
  display: grid;
  grid-template-columns: [first] 25vw [line2] 70vw [line3] 10vw [end];
  grid-template-rows: [row1-start] 7vw [row1-end] 17vw [third-line] auto [third-line] 5vw [last-line];
  overflow: hidden;
 } */
 /* .i1{
   width: 23vw;
   padding-top: 12vw;
  

 } */

 
 
  /* .container2{
  margin-top: 15vw;
 } */

  /* .box-3{
    margin-top: 50vw;
  } */

  /* .boxX{
     width: 12.36vw;
    height: 20vw;
     transform: translate(-10vw, 20.2vw);
  } */


  /* .box-2{ */
  /* padding-top: 9vw; */
  /* align-content: center;
  border: 13px solid black;
  margin-top: 0vw;
  background-color:darkblue; 
  grid-column: 1/2;
  grid-row: 1/4;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards; 
  animation-name: slideBT;
  } */
 /* #bannier{
  width: 100vw;
  height: 15vw;
} */

 /* .title_box{
  width:100vw;
  height: 15vw;
  margin-right:20vw;
} */
 /* .title_box{
    width: 74.25vw;
  } */

.title_name{
  /* margin-top: 1vw;
  margin-right: 27vw;
  font-size:8.25vw; */
    animation-duration: 2.5s;
  animation-timing-function: ease-in-out; 
  animation-name: slideRLText;
}
/* @keyframes slideRLText {
  from {
    margin-left: 100vw;
    width: 100%;
      transform: rotateX(0deg);
  }
  30%{
    transform: rotateX(180deg);
  }

  to {

    margin-left: -27vw;
    width: 100%;
    transform: rotateX(360deg);
  }
} */
.sousTitre{
  /* margin-right: 27vw;
  font-size: 4vw;
  margin-top: -7.5vw; */
   animation-duration: 2.75s;
  animation-timing-function: ease-in-out;
  animation-name: slideLRText;
}
/* @keyframes slideLRText {
  from {
    opacity: 0;
    margin-left: -105vw;
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
    margin-left: -27vw;
    width: 100%;
      transform: rotateX(360deg);
  }


} */
  /* .containerBox{
    display: flex;
    flex-wrap: wrap;
    width: px;
   height: 200px;
   justify-content: space-around;
     margin-left: auto;
    margin-right: auto;
  } */

  .box-1{
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


@media screen and (max-width: 909px)
{
  /* .box-2{
    width: 155px;
  } */
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


@media screen and (max-width: 767px)
{

 
  /* .container{
  display: grid;
  grid-template-columns: [first] 20vw [line2] 60vw [line3] 10vw [end];
  grid-template-rows: [row1-start] 10vw [row1-end] 25vw [third-line] auto [third-line] 5vw [last-line];
  overflow: hidden;
 } */
.i1{
  width: 17.9vw;
}
.title_box{
  margin-left: 15vw;
}
  /* .container2{
  margin-top: 5vw;
  
  display: grid;
  grid-template-columns: 67.5vw ;
  grid-template-rows: 2vw 15vw 15vw 15vw 15vw 15vw auto;
  grid-row-gap: 5vw;

  overflow: hidden;
  justify-content: space-around;
 } */
 .window{
   width: 65.5vw;
 }
.box-3{
  padding-top: 3vw;
}
/* .blueBox{
   grid-column: 1/2;
   grid-row: 1/2;
   background-color: darkblue;
   border-right: 1vw solid black;
    border-left: 1vw solid black;

} */

/* .mondrianTheme{
  margin-top: 1vw;
  font-size: 3vw;
} */

 
  /* .navbar1 .nav-link{
    margin-left: -10vw;
    margin-right: 11vw;
    font-size: 2.5vw;
  } */
  
  /* .navbar1 li{
    margin-top: 1vw;
  } */

.containerBox{
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 195px;
}
.window{
  width: 336px;
}
.container2{
  /* margin-top: 5vw; */
  
  display: grid;
  grid-template-columns: 345px ;
  grid-template-rows: 28px 286.77px  286.77px  286.77px  286.77px  286.77px auto;
  grid-row-gap: 7vw;
   /* grid-row-gap: 50px; */

  overflow: hidden;
  justify-content: space-around;
 }
  .mesProjets{
     margin-top: 3vw;
   /* font-size: 4.75vw; */
  
  
  }

/* #bannier{
  width: 100vw;
  height: 20vw;
} */
/* .box-2{
  padding-top: 250px;
  align-content: center; */
  /* border: 1vw solid black; */
  /* margin-top: 0vw; */
  /* background-color:darkblue; 
  grid-column: 1/2;
  grid-row: 1/4;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards; 
  animation-name: slideBT;
} */
/* @keyframes slideBT {
  from {
    margin-top: 100vw;
   
  }
 
  to {
     margin-top: -0vw; 
  
  }
} */
/* .title_box{ */
  /* width: 60vw;
  height: 8vw; */
  /* text-align: right;

} */


/* 
.title_box{
  width:100vw;
  height: 20vw;
  margin-right:20vw;
} */
/* .title_name{
  margin-top: 1vw;
  margin-right: 20vw;
  font-size: 10.25vw;
} */
/* .sousTitre{
  margin-right: 20vw;
  font-size: 5.25vw;
  margin-top: -9vw;
} */
/* .back{
  padding-bottom: 12vw;
} */
/* @keyframes slideRLText {
  from {
    margin-left: 100vw;
    width: 100%;
      transform: rotateX(0deg);
  }
  30%{
    transform: rotateX(180deg);
  }

  to {

    margin-left: -20vw;
    width: 100%;
    transform: rotateX(360deg);
  }
} */

/* @keyframes slideLRText {
  from {
    opacity: 0;
    margin-left: -105vw;
    width: 100%;
      transform: rotateX(0deg);
  }
  30%{
     opacity: 0; */
    /* margin-left: -105vw;
    width: 100%; */
      /* transform: rotateX(0deg);

  }
  49%{
    opacity: 0;
      transform: rotateX(180deg);
  }
  50%{
    opacity: 1;
  }

  to {
    margin-left: -20vw;
    width: 100%;
      transform: rotateX(360deg);
  }
} */



/* .i1{ */

  /* display: flex;
  flex-wrap:wrap; */
  /* padding-top: 30vw; */
 /* margin: auto;
  padding-top: 15vw; */
  /* height: 30vw;
  width: 18vw;
   */
 /* }  */

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

/* .icoNode{
   z-index: 1000;
  margin-top: 1vw;
  width: 7vw;
  height: 7vw;
  padding: 0.1vw;

 
  background-color: white;

}
.icoMySql{
   z-index: 1000;
  margin-top: 1vw;
  width: 12.25vw;
  height: 7vw;
   padding: 0.1vw;

 
  background-color: white;

}
.icoSeo{
   z-index: 1000;
  margin-top: 1vw;
  width: 12.25vw;
  height: 7vw;
    padding: 0.1vw;


  background-color: white;

}
.icoDB{
   z-index: 1000;
  margin-top: 1vw;
  width: 12.25vw;
  height: 7vw;
    padding: 0.1vw;

  
  
  background-color: white;

} 
.boxX{
   width: 13.9vw;
  height: 22.5vw;
   /* width: 130px;
  height: 210.34px; */
  /* transform: translate(-9vw, 10.25vw);
  
    animation-duration: 1.5s;
  animation-timing-function: ease-out; 
  animation-name: slideRL1023;
} */


/* .boxX{
  width: 12.36vw;
  height: 20vw;
   transform: translate(-10vw, 5.2vw);
     animation-duration: 1.5s;
  animation-timing-function: ease-out; 
  animation-name: slideRL767;
} */
/* .boxX{
  width: 20vw;
  height: 12.36vw;
  border: solid 1vw black;
  background-color: yellow;
  transform: translate(-5vw, 5.2vw);
   animation-duration: 1.5s;
  animation-timing-function: ease-out; 
  animation-name: slideRL;
} */


  /* .container{
  display: grid;
  grid-template-columns: [first] 30vw [line2] 60vw [line3] 10vw [end];
  grid-template-rows: [row1-start] 5vw [row1-end] 20vw [third-line] auto [third-line] 5vw [last-line];
  overflow: hidden;
 } */

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

@media screen and (max-width: 667px)
{
  .title_box{
    margin-left: 10vw;
  }
}
@media screen and (max-width: 617px)
{
  .title_box{
    margin-left: 5vw;
  }
}
@media screen and (max-width: 597px)

{

.boxX{
display: none;
}
  .container2{
  /* margin-top: 5vw; */
  
  /* display: grid;
  grid-template-columns: 64vw ;
  grid-template-rows: 5vw 64vw 64vw 64vw 64vw 64vw auto; */
  grid-row-gap: 7vw;
   /* grid-row-gap: 50px; */

  /* overflow: hidden;
  justify-content: space-around; */
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
/* } */
.box-1{
   border: 1vw solid black;
  border-left: unset;
  border-right: unset;
  
}
.box-2{
   /* border: 2vw solid black; */
  /* border-left: unset;
  border-right: unset; */
  
}

/* @media screen and (max-width: 499px)
{ */
  .mondrianTheme{
   font-size: 4.75vw;
  
  }
  .mesProjets{
     margin-top: 3vw;
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
  
  /* .navbar1 li{
    margin-top: 2vw;
  } */
  .containerBox{
    margin-top: -0vw;
  margin-left:1vw;
  margin-right: 1vw;
  display: flex;
  flex-wrap: wrap;
  width:62.25vw ;
  height: 45vw;
     /* width: 318px; */
    justify-content: space-around;

  
}
.miniBoxFront{
  margin-top: 0;
  width: 17vw;
  height:17vw;
  border:1vw solid black
}
.i1{
   margin-top:45vw;
 width: 23vw;
}

}

@media screen and (max-width: 541px)

{
.navbar1 .nav-link:hover{
  padding-top: 2vw;
}
.navbar1{
  /* height: 10vw; */
  padding-top: 5vw;
}
.boxX{
  display: none;
}


  .window{
  width: 64vw;
  height: 62.75vw;
  border-left: unset;
  border-right: unset;
}
.container2{
  /* margin-top: 5vw; */
  
  display: grid;
  grid-template-columns: 64vw ;
  grid-template-rows: 5vw 64vw 64vw 64vw 64vw 64vw auto;
  grid-row-gap: 7vw;
   /* grid-row-gap: 50px; */

  overflow: hidden;
  justify-content: space-around;
 }
}
    /* .container{
  display: grid;
  grid-template-columns: [first] 20vw [line2] 70vw [line3] 10vw [end];
  grid-template-rows: [row1-start] 10vw [row1-end] 25vw [third-line] auto [third-line] 5vw [last-line];
  overflow: hidden;
 }
 #bannier{
   height: 25vw;
 } */
 /* .title_name{
   padding-top: 3vw;
 
   font-size: 10vw;
 } */
 /* .sousTitre{

   font-size: 5vw;
 } */
 

 /* .boxX{
  width: 12.36vw;
  height: 20vw;
   transform: translate(-7vw, 20vw);
     animation-duration: 1.5s;
  animation-timing-function: ease-out; 
  animation-name: slideRL767;
} */



/* @media screen and (max-width: 767px){

      .container{
  display: grid;
  grid-template-columns: [first] 30vw [line2] 70vw [line3] 10vw [end];
  grid-template-rows: [row1-start] 5vw [row1-end] 20vw [third-line] 100vw [third-line] 5vw [last-line];
  overflow: hidden;
 } */
/* } */






</style>


