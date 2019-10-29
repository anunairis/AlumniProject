// var container = document.getElementById("container");

// for (let i = 0; i < stories.length; i++) {
//     container.innerHTML += `
//     <div class="row col-lg-12"
//       <div class="">
//         <img src="` + stories[i].picture + `"/>
//       </div>

//       <div class="">
//         <p>` + stories[i].first_name + " " + stories[i].last_name + `</p>
//         <p>` + stories[i].course_attending + `</p>
//         <p>` + stories[i].my_success_story + `</p>
//       </div>
//     </div>
//   `;
//     console.log(stories[i]);
// }
// var container = document.getElementById("container");

// for (let i = 0; i < stories.length; i++) {
//     container.innerHTML += `
//     <h3>Get to know our alumni better</h3>
// <div class="container-fluid mt-5">
//   <div class="row d-flex flex-wrap"   
//     <div class="card-deck">
//       <div class="card mb-4 col-lg-5">

//         <div class="view overlay">
//           <img class="card-img-top" src="` + stories[i].picture + `" alt="Card image cap">
//           <a href="#!">
//             <div class="mask rgba-white-slight"></div>
//           </a>
//         </div>
//         <!-- Card content -->

//         <div class="card-body">
//           <h4 class="card-title">` + stories[i].first_name + " " + stories[i].last_name + `</h4>
//           <p class="card-text">` + stories[i].my_success_story + `</p>
//           <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
//           <button type="button" class="btn btn-primary btn-md">Get in touch</button>
//         </div>

//       </div>
//     </div>
//   </div>
// </div>
//   `;
// }

var container = document.getElementById("container");

for (let i = 0; i < stories.length; i++) {
    container.innerHTML += `
   <div class="col-lg-5 col-md-5 col-sm-12 mx-auto mt-5">
      <div class="card mb-2">

        <!--Card image-->
        <div class="view overlay">
          <img class="card-img-top" src="` + stories[i].picture + `" style="width:100%; height:38vh; object-fit:cover;">
          <a href="#!">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

        <!--Card content-->
        <div class="card-body">
          <!--Title-->
          <h4 class="card-title">` + stories[i].first_name + " " + stories[i].last_name + `</h4>
          <!--Text-->
          <p class="card-text">` + stories[i].my_success_story + `</p>
          <button type="button" class="btn btn-light-blue btn-md">Read more</button>
        </div>

      <!-- Card -->
      </div>
    </div>
  `;
}