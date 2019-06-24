
axios.get(http://localhost:3000/api/products) .then(res) => {
  console.log('res', res.data);
  // let products = res.data
}
console.log("Hello from JS");
// document.console.log(document);

// get id from html, we pass id name into
let wrap = document.getElementById('wrap')

console.log(wrap)

// window.onload allowing us to put scipt on the head of html



// window.onload = () => {
//    console.log('window is loaded')
// }

// add element on browser
//writing html element on javaScript File insert() next to Sidebar
//take 2 paramenter beforebegin, afterEnd, afterBeginning

// window.onload = () => {
//  let sidebar = document.getElementById('sidebar')
//  sidebar.insertAdjacentHTML('beforeEnd',`<h1>Promotion</h1>`)
// }

window.onload = () => {
 let sale = document.getElementById('sale')
 sale.insertAdjacentHTML('afterEnd',`<h1>Promotion</h1>`)
}

//getElementsByTagName getElementsByTagName('ul') = arrayof [ul, ul]
// window.onload = () => {
//  let ul = document.getElementsByTagName('ul')[0]
//  ul.insertAdjacentHTML('beforeEnd',`<li>
//    <a href="#">Wallet</a>
//  </li>`)
// console.log(ul);
// }

window.onload = () => {
  let ul = document.getElementsByTagName('ul')[0]
 let categories = ['Wallets','Bags', 'Shoes', 'Umbrella']
 categories.forEach((c) => {
   ul.insertAdjacentHTML('beforeEnd',`
   <li>
    <a href="#">${c}</a></li>
    `)
 })
}

//

window.onload = () => {
 let products = document.getElementById('products')
  let prod = [{description: 'NIKE', price: 199, model: 'AirSpeed',
  description: 'ADIDAS', price: 299, model: 'AirSpeed'
    }]

 prod.forEach((p) => {
   products.insertAdjacentHTML('beforeEnd',`
   <div class="product">
     <div class="product-image">
       <i class="far fa-star"></i>
     </div>
     <div class="product-extras">
       <div class="description">
         <h4>${p.description}</h4>
         <small>${p.model}</small>
       </div>
       <div class="price">
         <span>${p.price}</span>
         <a href="#" class="button">shop now</a>
       </div>
     </div>
   </div>`
 )

 })

}
