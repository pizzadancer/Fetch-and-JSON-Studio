function sortTimeInSpace(json) {
  // Display the astronauts sorted from most to least time in space.
  let originalAstronautObject = {}; 
  let astroTimeArray = [];
  for (let i = 0; i < json.length; i++) {
    originalAstronautObject[json[i].hoursInSpace] = json[i].id;
    astroTimeArray.push(json[i].hoursInSpace);
  }
  console.log(originalAstronautObject)
  let reversedAstroTimeArray = astroTimeArray.sort().reverse();
  console.log(reversedAstroTimeArray)
  let newAstronautIDs = [];
  for (let hours of reversedAstroTimeArray) {
    newAstronautIDs.push(originalAstronautObject[hours]);
  }
  console.log(newAstronautIDs)
  return newAstronautIDs
}

function init () {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then(function(json) {
      // console.log(json);
      // let index = 1;
      let sortedAstronautIDs = sortTimeInSpace(json); 
      console.log("sortedIDs " + sortedAstronautIDs);
      // have a list of astronaut ids
      // need to display them to the webpage
      console.log(json)
      for (let id of sortedAstronautIDs) {
        
        console.log(typeof id)
        // let name = json[id].firstName + " " + json[id].lastName;
        // console.log(name);
        let hoursInSpace = json[id].hoursInSpace;
        let active = json[id].active;
        let skills = json[id].skills.join(", ");
        let picture = json[id].picture;
        let profile = document.getElementById("container");
        profile.innerHTML += `
          <div class="astronaut">
            <div class="bio">
              <h3>${name}</h3>
              <ul>
                  <li>Hours in space: ${hoursInSpace}</li>
                  <li>Active: ${active}</li>
                  <li>Skills: ${skills}</li>
              </ul>
            </div>
            <img class="avatar" src="${picture}">
          </div>
        `
      }


      // for (let index = 0; index < json.length; index++) {
      //   let id = index;
      //   let name = json[id].firstName + " " + json[id].lastName;
      //   let hoursInSpace = json[id].hoursInSpace;
      //   let active = json[id].active;
      //   let skills = json[id].skills.join(", ");
      //   let picture = json[id].picture;
      //   let profile = document.getElementById("container");
      //   profile.innerHTML += `
      //     <div class="astronaut">
      //       <div class="bio">
      //         <h3>${name}</h3>
      //         <ul>
      //             <li>Hours in space: ${hoursInSpace}</li>
      //             <li>Active: ${active}</li>
      //             <li>Skills: ${skills}</li>
      //         </ul>
      //       </div>
      //       <img class="avatar" src="${picture}">
      //     </div>
      //   `
      // }
      
       
    });
  });
}
window.addEventListener("load", init);