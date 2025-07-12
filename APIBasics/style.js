// let btn = document.querySelector("button");   //Random Cat Facts
// let para = document.querySelector("#result");

// let url = "https://catfact.ninja/fact";

// async function getFacts(){     //returns a promise
//     try{
//     let res = await axios.get(url);
//     return res.data.fact;
//     } catch(err){
//         return "there is some eror";
//     }
// }

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     para.innerText = fact;
// });


let btn = document.querySelector("button");   //Random dog Image
let img = document.querySelector("#result");

let url = "https://dog.ceo/api/breeds/image/random";

async function getImage(){     //returns a promise
    try{
    let res = await axios.get(url);
    return res.data.message;
    } catch(err){
        return "there is some eror";
    }
}

btn.addEventListener("click", async () => {
    let link = await getImage();
    img.setAttribute("src", link);
});


