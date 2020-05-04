function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
//close side navbar
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
//open and close navbar icons
  const iCON = document.getElementById('icon');
const icon2 = document.getElementById("close");
  iCON.addEventListener("click",function(){
      iCON.style.display="none";
      icon2.style.display="block";
      openNav();
  });
  icon2.addEventListener("click",function(){
    iCON.style.display="block";
    icon2.style.display="none";
    closeNav();
  });
   //scroll top function
   mybutton = document.getElementById("myBtn");
   window.addEventListener("scroll",scrollFunction)
   function scrollFunction() {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
       mybutton.style.display = "block";
     } else {
       mybutton.style.display = "none";
     }
   };

  // When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    };
//shrink navbar   
window.onscroll=function scrollFunction2() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navBar").style.padding = "0.05%";
     
      } else {
        document.getElementById("navBar").style.padding = "2%";
       
      }
    };
//character api 
const cont = document.getElementById("conts");
const showBtn = document.getElementById("charbtn");
const hideBtn = document.getElementById("charbtn2");
//recieve data from breakingbadapi 
const secondRequest = async () =>{
  const secondResponse = await fetch("https://breakingbadapi.com/api/characters");
  const secondData = await secondResponse.json();
  renderSecondData(secondData);
};
//create table
const renderSecondData = (secondData) =>{
  cont.innerHTML=`<div class="row mt-5">${secondData.map(function(person){
   if (person.category === "Breaking Bad"){
  return `
  <table >
	<thead>
	<tr>
  <th><strong>Category</strong></th>
  <th><strong>Name</strong></th>
  <th><strong>Nickname</strong></th>
  <th><strong>Job title</strong></th>
  <th><strong>Actor</strong></th>
  <th><strong>Image</strong></th>
	</tr>
	</thead>
	<tbody>
	<tr>
  <td >${person.category}</td>
  <td >${person.name}</td>
  <td >${person.nickname}</td>
  <td>${person.occupation}</td>
  <td>${person.portrayed}</td>
  <td><img  class="ml-5" src="${person.img}" style="width:50%; border: 1px solid black ; border-radius: 20%;"></td>
  </tr>
	</tbody>
</table>
  `
}}).join('')} </div>`
};
//show characters quotes
showBtn.addEventListener("click", function(){
  hideBtn.style.display="Block";
  this.style.display="none";
  cont.style.display="block";
  secondRequest();
})
//hide charactersquotes
hideBtn.addEventListener("click", function(){
  this.style.display="none";
  showBtn.style.display="block";
  cont.style.display="none";
})

//second breaking bad api (quotes)
const search = document.getElementById("search");
const ResultHtml = document.getElementById("match");
const button = document.getElementById("char2");
const showSearchDiv = document.getElementById("searchDiv")

//searchquote api
const request = async () => {
  const response = await fetch("https://www.breakingbadapi.com/api/quotes");
  const data = await response.json();
  renderYourData(data, search.value); 
}
          const renderYourData = async (data,  searchtext) => {
              //filter each data with properties "author";
              const x= data.filter(film=>{
                  const regex = new RegExp(`^${searchtext}`, 'gi');
              return  film.author.match(regex)
              });
          //render Html dom 
              const  retquote = () =>{
                //check if x has lenght
                  if(x.length){
                  ResultHtml.innerHTML =`<div class="row" id="RenderHtml"  >${x.map(function(bra){
           if(bra.author === "Jesse Pinkman"){   
              return `
              <div class="anime mt-5 col-md-3">
              <div class="anime mt-5">
              <h6 class="text-center"> ${bra.series}</h6>
             <div class="text-center"> <img src="./pikman.jpg " style="width:100%;"></div>
              <div class="sm text-center"><span><i class="mr-2" style="color:red">-</i></span>${bra.author}</div>
              <p class="text-center" style="font-size: 20px; font-family: fantasy; letter-spacing: 2px; border-bottom:2px solid red;"> " ${bra.quote} "</p>
              </div>
              <div class="fb-share-button text-right" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="fas fa-share" style:"color:white;"></i></a></div> 
              </div> 
              ` } //second  character
                  else if(bra.author=== "Walter White"){
                  return   `
                  <div class="anime mt-5 col-md-3">
                  <h6 class="text-center"> ${bra.series}</h6>
                 <div class="text-center"> <img src="./Walter.jpg " style="width:100%;"></div>
                  <div class="sm text-center"><span><i class="mr-2" style="color:red">-</i></span>${bra.author}</div>
                  <p class="text-center" style="font-size: 20px; font-family: fantasy; letter-spacing: 2px; border-bottom:2px solid red;"> " ${bra.quote} "</p>
                  <div class="fb-share-button text-right" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="fas fa-share" style:"color:white;"></i></a></div>
                  </div>
                  `} //third character
                  else if(bra.author === "Skyler White"){
                      return    `
                      <div class="anime mt-5 col-md-3">
                      <h6 class="text-center"> ${bra.series}</h6>
                     <div class="text-center"> <img src="./skyler.jpg " style="width:100%;"></div>
                      <div class="sm text-center"><span><i class="mr-2" style="color:red">-</i></span>${bra.author}</div>
                      <p class="text-center" style="font-size: 20px; font-family: fantasy; letter-spacing: 2px; border-bottom:2px solid red;"> " ${bra.quote} "</p>
                      <div class="fb-share-button text-right" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="fas fa-share" style:"color:white;"></i></a></div>
                      </div>
                      `
                       }//fourth character

          else if(bra.author === "Saul Goodman"){
              return    `
                  <div class="anime mt-5 col-md-3">
                  <h6 class="text-center"> ${bra.series}</h6>
                 <div class="text-center"> <img src="./saul.png " style="width:100%;"></div>
                  <div class="sm text-center"><span><i class="mr-2" style="color:red">-</i></span>${bra.author}</div>
                  <p class="text-center" style="font-size: 20px; font-family: fantasy; letter-spacing: 2px; border-bottom:2px solid red;"> " ${bra.quote} "</p>
                  <div class="fb-share-button text-right" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="fas fa-share" style:"color:white;"></i></a></div>
                  </div>
                  `
              } 
              //fifth character
              else if(bra.author=== "Mike Ehrmantraut"){
              return    `
                  <div class="anime mt-5 col-md-3">
                  <h6 class="text-center"> ${bra.series}</h6>
                 <div class="text-center"> <img src="./ssm.jpg " style="width:100%;"></div>
                  <div class="sm text-center"><span><i class="mr-2" style="color:red">-</i></span>${bra.author}</div>
                  <p class="text-center" style="font-size: 20px; font-family: fantasy; letter-spacing: 2px;border-bottom:2px solid red;"> " ${bra.quote} "</p>
                  <div class="fb-share-button text-right" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="fas fa-share" style:"color:white;"></i></a></div>
                  </div>
                  `
              } 
              //sixsth character
              else if(bra.author=== "Hector Salamanca"){
               return   `
                  <div class="anime mt-5 col-md-3">
                  <h6 class="text-center"> ${bra.series}</h6>
                 <div class="text-center"> <img src="./salamanca.jpg " style="width:100%;"></div>
                  <div class="sm text-center"><span><i class="mr-2" style="color:red">-</i></span>${bra.author}</div>
                  <p class="text-center" style="font-size: 20px; font-family: fantasy; letter-spacing: 2px;border-bottom:2px solid red;"> " ${bra.quote} "</p>
                  <div class="fb-share-button text-right" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="fas fa-share" style:"color:white;"></i></a></div>
                  </div>
                  `
              } 
               //seventh character
              else if(bra.author=== "Gus Fring"){
                  return    `
                  <div class="anime mt-5 col-md-3">
                  <h6 class="text-center"> ${bra.series}</h6>
                 <div class="text-center"> <img src="./gus.jpg " style="width:100%;"></div>
                  <div class="sm text-center"><span><i class="mr-2" style="color:red">-</i></span>${bra.author}</div>
                  <p class="text-center" style="font-size: 20px; font-family: fantasy; letter-spacing: 2px;border-bottom:2px solid red;"> " ${bra.quote} "</p>
                  <div class="fb-share-button text-right" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="fas fa-share" style:"color:white;"></i></a></div>
                  </div>
                  `
              } 
              //eight character
              else if(bra.author=== "Jimmy McGill"){
                  return    `
                  <div class="anime mt-5 col-md-3">
                  <h6 class="text-center"> ${bra.series}</h6>
                 <div class="text-center"> <img src="./jimie.jpg " style="width:100%;"></div>
                  <div class="sm text-center"><span><i class="mr-2" style="color:red">-</i></span>${bra.author}</div>
                  <p class="text-center" style="font-size: 20px; font-family: fantasy; letter-spacing: 2px;border-bottom:2px solid red;"> " ${bra.quote} "</p>
                  <div class="fb-share-button text-right" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="fas fa-share" style:"color:white;"></i></a></div>
                  </div>
                  `}
                  //ninth character
                  else if(bra.author=== "Kim Wexler"){
                      return    `
                      <div class="anime mt-5 col-md-3">
                      <h6 class="text-center"> ${bra.series}</h6>
                     <div class="text-center"> <img src="./kim.jpg " style="width:100%;"></div>
                      <div class="sm text-center"><span><i class="mr-2" style="color:red">-</i></span>${bra.author}</div>
                      <p class="text-center" style="font-size: 20px; font-family: fantasy; letter-spacing: 2px;border-bottom:2px solid red;"> " ${bra.quote} "</p>
                      <div class="fb-share-button text-right" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="fas fa-share" style:"color:white;"></i></a></div>
                      </div>
                      `} 
                      //tenth character
                      else if(bra.author=== "Chuck McGill"){
                          return    `
                          <div class="anime mt-5 col-md-3">
                          <h6 class="text-center"> ${bra.series}</h6>
                         <div class="text-center"> <img src="./chuvk.jpg " style="width:100%;"></div>
                          <div class="sm text-center"><span><i class="mr-2" style="color:red">-</i></span>${bra.author}</div>
                          <p class="text-center" style="font-size: 20px; font-family: fantasy; letter-spacing: 2px;border-bottom:2px solid red;"> " ${bra.quote} "</p>
                          <div class="fb-share-button text-right" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="fas fa-share" style:"color:white;"></i></a></div>
                          </div>
                          `} 
                          
                  }).join("") } </div>`
              } else{
                   // if result did't found 
                  ResultHtml.innerHTML = `<div class="alert text-center mt-5" style="color:red;"><p>search result does not found</p></div>`
              };
              };
              retquote();
          };
          button.addEventListener("click", function(){
            //call function
             request();
             //scrolls 500px down 
             window.scrollBy(0, 500);
             //hide button
             showSearchDiv.style.display="block";

          })
          // call function on input
          search.addEventListener('input',request);
         
      
 //scrolling to the div

$(document).ready(function(){
  $("#abouttar").click(function() {
  $("html,body").animate({
      scrollTop: $("#abb").offset().top},
      'slow');
});
});

$(document).ready(function(){
  $("#searchquot").click(function() {
  $("html,body").animate({
      scrollTop: $("#Quotes").offset().top},
      'slow');
});
});

$(document).ready(function(){
  $("#characters").click(function() {
  $("html,body").animate({
      scrollTop: $("#character").offset().top},
      'slow');
});
});
$(document).ready(function(){
  $("#contact").click(function() {
  $("html,body").animate({
      scrollTop: $("#cont").offset().top},
      'slow');
});
});

$(document).ready(function(){
  $("#down").click(function() {
  $("html,body").animate({
      scrollTop: $("#abb").offset().top},
      'slow');
});
});
//lazy load images
const targetImages = document.querySelectorAll(".target > img")   
   const lazyLoad = (target) =>{
     const io = new IntersectionObserver((entries,observer)=>{
       entries.forEach((entry)=>{
         if(entry.isIntersecting){
           const img = entry.target
           const {src} = img.dataset
           img.setAttribute('src', src);
           observer.disconnect();
         }
       })
     })
     io.observe(target)
   }
 
  targetImages.forEach(lazyLoad);