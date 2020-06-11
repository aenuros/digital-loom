let loom = [
    ['|','|','|','|','|','|','|','|','|'],
  ['|','|','|','|','|','|','|','|','|'],
  ['|','|','|','|','|','|','|','|','|'],
  ['|','|','|','|','|','|','|','|','|'],
  ['|','|','|','|','|','|','|','|','|'],
  ['|','|','|','|','|','|','|','|','|'],
  ['|','|','|','|','|','|','|','|','|'],
  ['|','|','|','|','|','|','|','|','|'],
  ['|','|','|','|','|','|','|','|','|'],
  ['|','|','|','|','|','|','|','|','|'],
  ['|','|','|','|','|','|','|','|','|']
  ];
  
  
  // plain weave
  let plainweave = function() {
      let newloom = loom;
    for (let i = 0; i < newloom.length; i++) {
      if (i % 2 == 0) {
        for (let j = 0; j < newloom[i].length; j++) {
          if (j % 2 == 0) {
            newloom[i][j] = '-'
          } 
        }
      } else {
        for (let j = 0; j < newloom[i].length; j++) {
          if (j % 2 != 0) {
            newloom[i][j] = '-'
          } 
        }
      } 
    }
    console.log(newloom)
  }
  
//   plainweave()
  
  let basketweave = function(thickness) {
    let newloom = loom;
    const THICKNESS = thickness;
    let numberOfLines = newloom.length;
    let currentWeft = 0;
    while (numberOfLines > 0 ) {
      let number = 1;
      let innerCounter = 0;
  
      while(innerCounter < THICKNESS) {
        if (numberOfLines <= 0) {
          break;
        }
  
        let secondCounter = 0;
  
        for (let currentWarp = 0; currentWarp < newloom[currentWeft].length; currentWarp++) {
          if(secondCounter < THICKNESS) {
            newloom[currentWeft][currentWarp] = '-';
            secondCounter++;
          } else  {
            newloom[currentWeft][currentWarp] = '|';
            secondCounter++;
            if(secondCounter > THICKNESS * 2 - 1) {
                newloom[currentWeft][currentWarp] = '|';
              secondCounter = 0;
            }
          }
        }
  
        currentWeft++;
        innerCounter++;
        numberOfLines--;
        }
  
      number = THICKNESS;
      innerCounter = 0;
  
      while(innerCounter < THICKNESS) {
        if (numberOfLines <= 0) {
          break;
        }
        let secondCounter = 0;
        for (let currentWarp = 0; currentWarp < newloom[currentWeft].length; currentWarp++) {
          if(secondCounter < THICKNESS) {
            newloom[currentWeft][currentWarp] = '|';
            secondCounter++;
          } else {
            newloom[currentWeft][currentWarp] = '-';
            secondCounter++;
            if(secondCounter > THICKNESS * 2 - 1) {
                newloom[currentWeft][currentWarp] = '-';
              secondCounter = 0;
            }
          }
        }
  
        innerCounter++;
        currentWeft++;
        numberOfLines--;
      }
    }
    console.log(newloom);
  }
  
//   basketweave(2)
  
// old twill
//   let twill = function(number) {
//     let innerCounter = number;
//     for (i = 0; i < loom.length; i++) {
//       for(j = 0; j < loom[i].length; j++) {
  
//         if(innerCounter < 1) {
//           // has to be + 1 to compensate for mandatory subtraction at end of loop
//           innerCounter = number + 1;
//           // 'l' is unaltered
//         }
  
//         else if(innerCounter > 1) {
//           loom[i][j] = '-';
//         }
  
//         innerCounter--;
//       }
//     }
//     console.log(loom)
//   }

// this makes a twill that in this / direction
// not in the mood to make a twill that goes in this \ direction
let twill = function(repeat) {
    let newloom = loom;
    // lineMarker handles the offset of the repeat pattern necessary for the twill
    lineMarker = 0;
    for (let row = 0; row < newloom.length; row++) {
        // repeatCounter handles how many dashes versus line will appear sequentally on a line
        // lineMarker handles at which point in the dash/line sequence the line will begin
        repeatCounter = lineMarker;
        for (let thread = 0; thread < newloom[row].length; thread++) {
            if (repeatCounter < repeat) {
                newloom[row][thread] = "-";
            }
            if (repeatCounter >= repeat) {
                // this is the 'l' condition
                // doesn't do anything currently but it's good to have it marked anyway
            }
            repeatCounter++;
            // this makes sure you always have e.g. --||--, ---|||---, instead of --||||| or some other malformed sequence
            if (repeatCounter >= repeat * 2) {
                repeatCounter = 0;
            }
            
        }
        // END OF LINE
        lineMarker++;
        if (lineMarker >= repeat * 2) {
            lineMarker = 0;
        }
        
    }
    console.log(newloom)
}

// sateen is X threads over, one thread under
// the argument for sateen() is how many threads over, aka the part that catches the light
// sateen is similar to twill in that there is a displacement of the threads, resulting in a diagonal appearance
let sateen = function(partThatWillShow) {
    // TODO - must be at least 3 partThatWillShow. 2 or below won't work
    let newloom = loom;
    lineMarker = 0
    for (let row = 0; row < newloom.length; row++) {
        // repeatCounter handles how many dashes versus line will appear sequentally on a line
        // lineMarker handles at which point in the dash/line sequence the line will begin
        repeatCounter = lineMarker;
        for (let thread = 0; thread < newloom[row].length; thread++) {
            if (repeatCounter < partThatWillShow) {
                newloom[row][thread] = "-";
            }
            if (repeatCounter == partThatWillShow) {
                // this is the 'l' condition
                // doesn't do anything currently but it's good to have it marked anyway
            }
            repeatCounter++;
            // this makes sure you always have e.g. --||--, ---|||---, instead of --||||| or some other malformed sequence
            if (repeatCounter > partThatWillShow) {
                repeatCounter = 0;
            }
            
        }
        // END OF LINE

        lineMarker++;
        if (lineMarker >= partThatWillShow + 1) {
            lineMarker = 0;
        }
        
    }
    console.log(newloom)
} 


sateen(5)