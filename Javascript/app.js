function printFEArray(arr) {
    arr.forEach(element => {
       console.log(element); 
    });
}

function printFLArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printWLArray(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i++]);
    }
}

function printDWLArray(arr) {
    let i = 0;
    do {
        console.log(arr[i++]);
    } while (i < arr.length);
}