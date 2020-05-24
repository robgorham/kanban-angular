const { exec } = require("child_process");
console.log('hello world');
function killThis( process ) {
    console.log(`Killing ${process}`);
    
}
function cb( err, out, stderr ) {
    const arr = out.split('\n').filter(str => str.indexOf('node') !== -1);
    console.log(`arr: ${JSON.stringify(arr)}`);
    const killThis = arr[0].slice(0, 5);
    console.log(`killThis: ${JSON.stringify(killThis)}`);
    // killThis(killThis);
    exec(`kill ${killThis}`);
}


const l = exec(`ps`, cb);