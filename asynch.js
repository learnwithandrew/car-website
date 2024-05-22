// console.log("before");
// setTimeout(() => console.log("during"), 8000);
// console.log("after");

function fetchData(callback) {
    setTimeout(() => {
        const date = "Hello world!";
        callback(date);
    }, 1000)
}

fetchData((data) => {
    console.log(data);
})