const btn = document.querySelector('#get-img');
const img = document.querySelector('#dog-img');

//url of api
const url = 'https://dog.ceo/api/breeds/image/random';

//adding click event on btn 
btn.addEventListener('click', async() => {
    let link = await getImage();
    img.setAttribute("src", link)
})

//async function to generate the link for getting image from api
async function getImage() {
    try {
        let res = await fetch(url);
        let data = await res.json()
        return data.message;
    } catch (error) {
        console.log("error : ", error)
        error("image not found")
    }

}

