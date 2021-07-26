<template>
  <div id="app">
    <div class="container">
    <nav class="navbar1" v-on:click="buttonClick()">
     <h1>{{ msg }}</h1>
      <li class="">
      <router-link to="/" class="navbar-brand">Landing</router-link>
       </li>
       <li class="">
      <router-link to="/home" class="navbar-brand">Home</router-link>
       </li>
      <!-- <div class="navbar-nav mr-auto"> -->
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Mes projets</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Mon parcours</router-link>
        </li>
         <!-- <li class="nav-item">
          <router-link to="/tutorials-list" class="nav-link">TutorialsList</router-link>
        </li> -->
      <!-- </div> -->
    </nav>
    <!-- <div class="blueBox"></div> -->
   
      <vue-flip active-click=""  width: height: v-model="flipped"   v-on:click="buttonClick()"  id="side" class="box-2">
          <template v-slot:front class="">
        
            <div class="i1">
         

      <img class="icoHtmlCssJs" src="../images/html52001.png">
       <img class="icoHtmlCssJs" src="../images/css32400.png">
        <img class="icoHtmlCssJs" src="../images/js.png">
 
      <img class="icoBootstrap icoBootstrapMarginLeft" src="../images/bootstrap.png">
      <img class="icoBootstrap" src="../images/vuejs.png">
      <img class="icoNode" src="../images/node.png">

       <img class="icoMySql" src="../images/mysql.png">
         
        
      <img class="icoDB" src="../images/mongoDB.png">
          
       
      <img class="icoSeo" src="../images/seo.png">
   
     
            </div>
            
          </template>
          <template v-slot:back class="">

         
        
            <div class="i1">
         

      <img class="icoHtmlCssJs" src="../images/html52001.png">
       <img class="icoHtmlCssJs" src="../images/css32400.png">
        <img class="icoHtmlCssJs" src="../images/js.png">
 
      <img class="icoBootstrap icoBootstrapMarginLeft" src="../images/bootstrap.png">
      <img class="icoBootstrap" src="../images/vuejs.png">
      <img class="icoNode" src="../images/node.png">

       <img class="icoMySql" src="../images/mysql.png">
         
        
      <img class="icoDB" src="../images/mongoDB.png">
          
       
      <img class="icoSeo" src="../images/seo.png">
   
     
            </div>
            
          </template>
          
        </vue-flip>

         <!-- <a  @mouseover="buttonClick">  -->
         <vue-flip active-click=""  width: height:  v-model="flipped" v-on:click="buttonClick()"  id="littleBox" class="boxX">
            <template v-slot:front class="">

         
        
          
          </template>
          
          
        </vue-flip>
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




             <vue-flip  active-click=""    v-on:click="buttonClick()" v-model="flipped" id="bannier" class="box-1" horizontal=true>
          <template v-slot:front class="front">
             <!-- <div class="title_bar">-->
         <div class="title_container"> 
              <div class="title_box"> 
              <h1 class="title_name" id="titleNameFront">Vincent Robert</h1>
              <h2 class="sousTitre" id="sousTitreFront">Développeur Web</h2>
              </div>
         <!-- </div>-->
             </div> 
          </template>
          <template v-slot:back class="back">
                <!-- <div class="title_bar">-->
         <div class="title_container"> 
         <div class="reverse back">
             <div class="title_box"> 
                <h1 class="title_name"  id="titleNameBack">Vincent Robert</h1>
           <h2 class="sousTitre"  id="sousTitreBack">Développeur Web</h2>
         <!-- </div>-->
             </div>
         </div> 
         </div>
          </template>
        </vue-flip>


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
       
          <vue-flip  active-click=""  width="6vw" height="6vw"   v-on:click="animate(),changeBodyBg(0)" v-model="flippedBRY" class="colorBox colorBox0" horizontal=true>
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
          <vue-flip  active-click=""  width="6vw" height="6vw"  v-on:click="animate(), changeBodyBg(1)" v-model="flippedYBR"  class="colorBox colorBox0" horizontal=true>
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
      
          <vue-flip  active-click=""  width="6vw" height="6vw"  v-on:click="animate(), changeBodyBg(2)" v-model="flippedRYB" class="colorBox colorBox0" horizontal=true>
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
          <vue-flip  active-click=""  width="6vw" height="6vw" v-on:click="animate(), changeBodyBg(3)" v-model="flippedBYR" class="colorBox colorBox0" horizontal=true>
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
          <vue-flip  active-click=""  width="6vw" height="6vw"   v-on:click="animate(), changeBodyBg(4)" v-model="flippedYRB"  class="colorBox colorBox0" horizontal=true>
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
          <vue-flip  active-click=""  width="6vw" height="6vw" v-on:click="animate(), changeBodyBg(5)" v-model="flippedRBY" class="colorBox colorBox0" horizontal=true>
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
          </vue-flip>    
        </div>
      
      
      <div class="container2">
       <router-link to="/tutorials" class="">
      <div class="window window-1"><p>Projet 1</p></div>
      </router-link>
        <router-link to="/tutorials" class="">
      <div class="window window-2"><p>Projet 2</p></div>
      </router-link>
         <router-link to="/tutorials" class="">
      <div class="window window-3"><p>Projet 3</p></div>
      </router-link>
          </div>


            <div class="box">
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
            </div>



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
  elSousTitre.offsetHeight; /* trigger reflow */
  elSousTitre.style.animation = null; 

     var elTitmeNameBack = document.getElementById('titleNameBack');
  elTitmeNameBack.style.animation = 'none';
  elTitmeNameBack.offsetHeight; /* trigger reflow */
  elTitmeNameBack.style.animation = null; 

    var elSousTitreBack = document.getElementById('sousTitreBack');
  elSousTitreBack.style.animation = 'none';
  elSousTitreBack.offsetHeight; /* trigger reflow */
  elSousTitreBack.style.animation = null; 


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

.icoHtmlCssJs{
  /* position: absolute; */
  z-index: 1000;
  margin-top: 1vw;
  width: 4.5vw;
  height: 4.5vw;
  border: solid black 0.2vw;
  padding: 0.2vw;
  background-color:white;
}
.icoHtmlCssJsCircle{

    z-index: 1000;
  margin-top: 15vw;
  margin-left: 3vw;
  width: 4.5vw;
  height: 4.5vw;

}

.icoBootstrap{
   z-index: 1000;
  margin-top: 1vw;
  width: 4.5vw;
  height: 4.5vw;
  padding: 0.1vw;

   border: solid black 0.2vw;
  background-color: white;

}

.icoNode{
   z-index: 1000;
  margin-top: 1vw;
  width: 4.5vw;
  height: 4.5vw;
  padding: 0.1vw;

   border: solid black 0.2vw;
  background-color: white;

}
.icoMySql{
   z-index: 1000;
  margin-top: 1vw;
  width: 6vw;
  height: 4vw;
   padding: 0.1vw;

   border: solid black 0.2vw;
  background-color: white;

}
.icoSeo{
   z-index: 1000;
  margin-top: 1vw;
  width: 7vw;
  height: 4vw;
    padding: 0.1vw;

   border: solid black 0.2vw;
  background-color: white;

}
.mondrianTheme{
  margin-top: 1vw;
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
  margin-top: 1vw;
  width: 9vw;
  height: 4vw;
    padding: 0.1vw;

   border: solid black 0.2vw;
  background-color: white;

}

.containerBox{
  display: flex;
  justify-content: space-around;
   margin-left: 5vw;
  margin-right: 5vw;
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
  /* width: 3vw;
  height: 3vw; */
  border: solid 0.175vw black;
 
  /* margin-left: 3vw;
  margin-right: 3vw; */
  /* -webkit-animation:slideRL; */
 
  
}

.miniBoxFront{
  width: 6vw;
  height: 6vw;
  display: grid;
   grid-template-columns: 30.3% 22% 8.3% 30.3% 8.3%;
  grid-template-rows: 15% 18.3% 16.6% 33% 16.6%;
  /* transform: rotateX(0deg) rotateY(0deg); */
  background-color: white;
  
}


.colorBox0{
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
   width: 6vw;
  height: 6vw;
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
  grid-template-rows: [row1-start] 5vw [row1-end] 10vw [third-line] 100vw [third-line] 5vw [last-line];
  overflow: hidden;
 }
 .container2{
  margin-top: 0vw;
  padding-top: 5vw;
  display: grid;
  grid-template-columns: 35vw ;
  grid-template-rows: 15vw 15vw 15vw 15vw ;
  grid-row-gap: 5vw;

  overflow: hidden;
  justify-content: space-around;
 }

.box-2{
  align-content: center;
  border: 1vw solid black;
  
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
 position: relative;
 margin-top: 17vw;
  width: 18vw;
  height: 9vw;
  justify-content: space-around;
  /* background-color: red; */
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
  width: 60vw;
  height: 8vw;
  text-align: right;

}

 .window-1{
   
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
   
 }

nav a{
 
 text-decoration: unset;
 font-size: 1.2vw;
 color: black;
 font-weight: bold;
 }
nav li{
   list-style-type: none;
  margin-right: 3vw;
}

.navbar1{
  /* padding-right: 17vw; */
  padding-top:1vw ;
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
  width: 20vw;
  height: 12.36vw;
  border: solid 1vw black;
  background-color: yellow;
  transform: translate(-5vw, 5.2vw);
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
.box-1{
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

.front{
    width: 100vw;
   height: 8vw;
  
  
}
.back{
  
  
   width: 100vw;
   height: 8vw;
  
    border-right:1vw solid black; 
   

}

.box-3{
  text-align: center;
  border-right: 1vw solid black;;
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
    border-top: 1vw solid black;
   
  }
  92.5%{
    border-top: 1vw solid black;
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
.window p{
  margin-top: 3.25vw;
  font-size: 5vw;
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
   
  }
   30%{
      opacity: 0;
   }
 
  to {
     opacity: 1;
     /* margin-top: 0vw;  */
    
  
  }
}
.window{
/* font-size: 9vw; */
 /* perspective: 200px; */
 border: solid 1vw black;
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
  width:100vw;
  height: 8vw;
  border-right: 1vw solid transparent;  
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
  margin-top: 0vw; 
  color: black;
  font-size: 5vw;
  text-shadow: .1vw .1vw .5vw black;
  
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
  margin-top: -4.5vw;
  font-size: 2.5vw;
  text-shadow:5px 5px 10px black;
 
  animation-duration: 2.75s;
  animation-timing-function: ease-in-out;
  animation-name: slideLRText;
}
@keyframes slideLRText {
  from {
    opacity: 0;
    margin-left: -105vw;
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

     
 footer{
  /* width: 100vw;
  height: 5vw; */
  
  background-color:grey;
   grid-column: 1/4;
   grid-row: 4/5;
} 

@media screen and (max-width: 767px)
{

/* .blueBox{
   grid-column: 1/2;
   grid-row: 1/2;
   background-color: darkblue;
   border-right: 1vw solid black;
    border-left: 1vw solid black;

} */

    .container{
  display: grid;
  grid-template-columns: [first] 15vw [line2] 80vw [line3] 5vw [end];
  grid-template-rows: [row1-start] 5vw [row1-end] 20vw [third-line] 100vw [third-line] 5vw [last-line];
  overflow: hidden;
 }
#bannier{
  width: 100vw;
  height: 20vw;
}
.box-2{
  padding-top: 30vw;
  align-content: center;
  border: 1vw solid black;
  margin-top: 0vw;
  background-color:darkblue; 
  grid-column: 1/2;
  grid-row: 1/4;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards; 
  animation-name: slideBT;
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
  width: 60vw;
  height: 8vw;
  text-align: right;

}



.title_box{
  width:100vw;
  height: 20vw;
  margin-right:20vw;
}
.title_name{
  margin-top: 1vw;
  margin-right: 20vw;
  font-size: 10.25vw;
}
.sousTitre{
  margin-right: 20vw;
  font-size: 5.25vw;
  margin-top: -9vw;
}
.back{
  padding-bottom: 12vw;
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

    margin-left: -20vw;
    width: 100%;
    transform: rotateX(360deg);
  }
}

@keyframes slideLRText {
  from {
    opacity: 0;
    margin-left: -105vw;
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
    margin-left: -20vw;
    width: 100%;
      transform: rotateX(360deg);
  }
}

.i1{
  display: flex;
  flex-wrap:wrap;
  padding-top: 20vw;
  margin: auto;
  padding-top: 5vw;
  height: 30vw;
  width: 13vw;
  
}
.boxX{
  width: 12.36vw;
  height: 20vw;
   transform: translate(-10vw, 5.2vw);
     animation-duration: 1.5s;
  animation-timing-function: ease-out; 
  animation-name: slideRL767;
}
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



</style>


