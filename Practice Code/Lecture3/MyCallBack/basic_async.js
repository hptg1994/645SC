let x = 25;

for (let i = 0; i < 10; i++) {
    console.log('Loop is running');
    process.nextTick(() => {
        console.log(`i (inside nextTick)is ${i}`); // already put into the queue but will not run immediately!!!
    });
}

console.log("This is synchronous");
console.log(x / 12);
console.log(`x / 2 is ${x/2}`);

//do synchronously !
for (let i = 0; i < 10; i++) {
    console.log('Loop is running');
    console.log(`i is ${i}`); // already put into the queue but will not run immediately!!!
}

console.log("====================");


// 所以，首先这个是在讲用process.nextTick()，可以在所有的程序都完成了的时候，这个特定的function会启动！ 
