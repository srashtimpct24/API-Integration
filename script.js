const btn =
document.getElementById("fetchBtn").addEventListener("click",getDogImage);
function getDogImage (){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        document.getElementById("imageContainer").innerHTML =
        `<img src="${data.message}"alt="Dog Image"/>`;
    })

    .catch(error=>console.error("Error fetching data:",error));
}