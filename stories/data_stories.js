var container = document.getElementById("container");

for (let i = 0; i < stories.length; i++) {
    container.innerHTML += `
    <img src="` + stories[i].picture + `"/>
            <p>` + stories[i].first_name + " " + stories[i].last_name + `</p>
            <p>` + stories[i].course_attending + `</p>
            <p>` + stories[i].my_success_story + `</p>
  `;
    console.log(stories[i]);
}






// container.innerHTML = "Gotcha!";


// var container = document.getElementById("container");

// for (let i = 0; i < stories.length; i++) {
//     container.innerHTML += `
//       <div class="row">
//             <p class="title_style text-white">` + stories[i].first_name + " " + stories[i].last_name + `</p>
//             <p class="text-white">` + stories[i].course_attending + `</p>
//             <p class="text-white">` + stories[i].my_success_story + `</p>
//     </div>
//   `;
//     console.log(stories[i]);
    // document.write(stories[i]);
// }

// container.innerHTML = "Gotcha!";