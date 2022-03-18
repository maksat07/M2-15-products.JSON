function products() {
    fetch("products.json")
        .then((res) => {
            return res.json();
        }).then((product) => {
            product.forEach(element => {
                const productsTitle = document.querySelector(".products__inner");
                productsTitle.style.display = "flex";
                productsTitle.style.flexWrap = "wrap";

                const container = document.createElement("div");
                container.className = ("container");
                container.style.width = "350px";
                container.style.display = "flex";
                container.style.flexDirection = "column";
                container.style.backgroundColor = "fff";
                container.style.border = "5px solid #dce0e1";
                container.style.margin = "50px auto";
                container.style.backgroundColor = "white";
                container.style.textAlign = "center";
                container.style.borderRadius = "5px";
                container.style.padding = "1em";
                productsTitle.appendChild(container);

                const divImg = document.createElement("div");
                container.appendChild(divImg);

                const photo = document.createElement("img");
                photo.style.width = "200px";
                photo.style.height = "250px";
                photo.style.objectFit = "contain";
                divImg.appendChild(photo);

                const div1 = document.createElement("div");
                div1.className = ("div-1");
                div1.style.width = "330px";
                div1.style.height = "60px";
                div1.style.display = "flex";
                div1.style.borderBottom = "3px solid rgb(0, 0, 0)";
                div1.style.justifyContent = "space-between";
                div1.style.alignItems = "center";
                div1.style.padding = "10px";
                divImg.appendChild(div1);

                const h2 = document.createElement("h2");
                h2.style.fontSize = "15px";
                h2.style.width = "200px";
                div1.appendChild(h2);

                const h3 = document.createElement("h3");
                h3.style.fontSize = "15px";
                div1.appendChild(h3);

                const text = document.createElement("div");
                container.appendChild(text);

                const p = document.createElement("p");
                text.appendChild(p);

                photo.getAttribute("src");
                photo.src = element.img;
                h2.textContent = element.title;
                h3.textContent = element.price;
                p.textContent = element.desc;
                
            });
        })
}
products()