let game_started = false

function rgbToHex(rgb) {
    // Convert the RGB string to an array of integers
    const rgbValues = rgb.match(/\d+/g).map(Number);
  
    // Convert each integer to its hexadecimal representation
    const hex = rgbValues
      .map((value) => {
        const hexValue = value.toString(16);
        return hexValue.length === 1 ? '0' + hexValue : hexValue;
      })
      .join('');
  
    return `#${hex.toUpperCase()}`;
  }

  const change_text = (text) => {
    document.getElementById('description').innerText = text
    document.getElementById('description').style.fontSize = "25px"
    document.getElementById('description').style.fontWeight = 800
  }
 
  const change_walls_colors = (classColor) => {
        [1, 2, 3, 4, 5].map((value) => {
            document.getElementById(`bloc${value}`).classList = classColor
        })
  }
  
  function getColorAtPointer() {
    document.addEventListener('mousemove', (event) => {
      const xPos = event.clientX;
      const yPos = event.clientY;
  
      const elementMouseIsOver = document.elementFromPoint(xPos, yPos);
      if (elementMouseIsOver) {
        const computedStyle = window.getComputedStyle(elementMouseIsOver);
        const color = computedStyle.getPropertyValue('background-color');
  
        // Convert the RGB color to its hexadecimal representation
        const hexColor = rgbToHex(color);

        if (hexColor == "#C1280D" && game_started){
            change_text("Bravo!")
            game_started = false
        }
        
        if (hexColor == "#0E8040" && game_started){
            change_walls_colors("walls-end")
            game_started = false
            change_text("Desole, vous avez perdu!")
        }
        
        if (hexColor == "#32D177"){
            game_started = true
            change_walls_colors("walls-start")
            change_text("Trouver La Sortie")
        }
        
        console.log('Color at pointer:', hexColor);
        // Use hexColor for further operations
      }
    });
  }
  
  // Call the function to start detecting the color at the pointer
  getColorAtPointer();
  