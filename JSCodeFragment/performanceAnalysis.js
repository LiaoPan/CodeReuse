maxCount = 1000;

start = new Date().getTime();

for (var i = 0; i < maxCount.length; i++) {
    maxCount[i];
    // performance the operation to be measured.

}

elapsed = new Date().getTime() - start;
// assert(true, "Measured time: " + elapsed);
console.log("Measured time: " + elapsed);
