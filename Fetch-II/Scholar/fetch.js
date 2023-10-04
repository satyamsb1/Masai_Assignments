async function getData() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        let root = document.getElementById("root");
        data.forEach(({id, title, image, rating, description, category }) => {
            let div = document.createElement("div");
            div.setAttribute('id', "main")
             let titlet = document.createElement("h1");
             titlet.innerText = `Title: ${title}`;
             let img = document.createElement("img");
             img.setAttribute('src', image);
             let cat = document.createElement("h5");
             cat.innerText = category;
             let desc = document.createElement("p");
             desc.innerText = description;
            let rat = document.createElement("p");
            rat.innerText = `Rating: ${rating.rate} stars`;
            div.append(titlet, img, cat, desc, rat);
            
            root.append(div);
        });
    } catch (error) {
        console.log(error)
    }
    
}

getData();