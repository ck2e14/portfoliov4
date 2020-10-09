const pairs = array => {
   if (!array) return;
   let consecutivePairCounter = 0;
   const amendedArray = array;
   if (amendedArray.length % 2 !== 0) {
      amendedArray.splice(-1, 1);
   }
   for (let i = 0; i < amendedArray.length; i += 2) {
      if (amendedArray[0] === amendedArray[1] - 1 || amendedArray[0] === amendedArray[1] + 1)
         consecutivePairCounter++;
   }
   return consecutivePairCounter;
};



const opts = {
   value1: "val1",
   value2: "val2"
}


// There are a couple ways to reduce the weight of this code block but for now it's fine :) Loop explanation:
// The loop starts at the first element in the array, and adds that element,
// plus the next element (index of i+1) to the currentPair array.
// It then checks for consecutiveness(word?), and increments our consecutivePairCounter
// if the if( ) condition evaluated to true
// After each pass through the loop it increments 'i' by 2 and repeats.
// This way it will grab the next actual pair.
