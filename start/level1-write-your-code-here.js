/*
    Implement the functions below so that the prince can
    reach his beloved princess.

    HINT: use the BROWSER DEVELOPER TOOLS.
*/



function getStairsMovementDirection(stairNumber, isClimbingStairs) {
 /* Implement the function to return "left", "right", "up", "down"
       based on the values of the parameters "stairNumber" and "isClimbingStairs"
       so that prince will descend and ascend the stairs.
       HINT: to avoid writing a lot of if else, if else, if else...
       you can see if the stair number can be divided by a certain number
    */

   if (isClimbingStairs === false) {
    if (stairNumber % 2 === 0) {
        return "down"
    }
    else {
        return "right"   
    };
   };

   if (isClimbingStairs === true) {
    if (stairNumber % 2 === 0) {
        return "up"
    }
    else {
        return "right"   
    };
   };
};

function getZigZagMovementDirection(step) {
 /* Implement the function to return "left", "right", "up", "down"
       based on the values of the parameters "step" so that prince will reach the keyboard symbol on the map.
       HINT: to avoid writing a lot of if else, if else, if else...
       you can see if the step can be divided by a certain number for "up" and another number for "down"
    */

    if (step % 3 === 0) {
        if (step % 2 === 0) {
            return "up";
         }
         else {
            return "down";
        }
    } else { 
        return "right";
    }; 
};

function manuallyControl(key) {

    if (key === "ArrowRight") {
        moveDirection ("right")
        
    }

    if (key === "ArrowLeft") {
        moveDirection ("left")
        
    }

    if (key === "ArrowUp") {
        moveDirection ("up")
        
    }

    if (key === "ArrowDown") {
        moveDirection ("down")
        
    }

    // when moving the prince using the keyboard you can call the already implemented
    // function `moveDirection` with the STRING as PARAMETER `left`, `right`, `up`, `down`.
    console.log(`[manuallyControl] received key pressed: ${key}`)
}

function givePotion2Answer(list) {

}
