product = [{id:1, "title":"Ayakkabı", "name":"C-track New Season",price:122}]
 



function showProducts(){
    window.addEventListener("load",()=>{
        var urun_listesi = document.querySelector("#urun_listesi")
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data.products)
        let html = ''
        data.products.forEach(datas=> {
            let htmlSegment = `
            <div class="col">
                <div class="card me-3" style="width: 18rem">
                    <img src="${datas.images[0]}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${datas.brand}</h5>
                        <p class="card-text">${datas.title} ${datas.price}€.</p>
                        <a href="#" class="btn btn-primary">Sepete Ekle</a>
                    </div>
                </div>
            </div>
            `
            html += htmlSegment
            urun_listesi.innerHTML = html
        })
    });
})}
showProducts()