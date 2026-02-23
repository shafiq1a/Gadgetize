

var products = [];

async function getData() {
  var res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
  var finRes = await res.json();
  products = finRes.data;
  console.log(products);
  disPro();
}

function disPro() {
  var allPro = ``;
  for (let i = 0; i < products.length; i++) {
    allPro +=`
        <div class="item">
          <div class="card">
            <div class="card-img">
              <img src="${products[i].imageCover}" alt="" />
            </div>
            <div class="card-info">
              <a href="#" class="card-title">${products[i].title.split(" ", 2).join(" ")}</a>
              <p>${products[i].description.split(/\s/, 5).join(" ")}</p>
              <div class="card-rate">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>(${products[i].ratingsAverage} review)</span>
              </div>
              <div class="card-discount">
                <span>70000$</span>
                <span>${products[i].price}$</span>
              </div>
              <button>Add To Cart</button>
            </div>
            <div class="card-dis">-2%</div>
            <div class="card-controls">
              <div class="card-control-wish">
                <i class="fa-regular fa-heart"></i>
              </div>
              <div class="card-control-view">
                <i class="fa-regular fa-eye"></i>
              </div>
            </div>
          </div>
        </div>
       `;
  }

  document.getElementById("PopularProducts").innerHTML = allPro;
  document.getElementById("RecommendedProducts").innerHTML = allPro;
  document.getElementById("featuredProducts").innerHTML = allPro;

  $(".featured-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,        
    autoplayTimeout: 3000, 
    autoplayHoverPause: true,
    responsive:{
      0:{ items:1 },
      600:{ items:2 },
      1000:{ items:3 }
    }
  });

  $(".Products").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,        
    autoplayTimeout: 3000, 
    autoplayHoverPause: true,
    responsive:{
      0:{ items:1 },
      600:{ items:3 },
      1000:{ items:5 }
    }
  });

}



async function x(){
  console.log("Object");
  await getData();
  console.log("Ob");
}

x();





// 

$(document).ready(function(){
  $(".Latest-Blogs").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,       
    autoplayTimeout: 3000, 
    autoplayHoverPause: true,
    responsive:{
      0:{ items:1 },
      600:{ items:2 },
      1000:{ items:4 }
    }
  });
});

$('.category-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: false,
    responsive:{
        0:{ items:2 },
        600:{ items:4 },
        1000:{ items:7 }
    }
});


$('.brand-slider').owlCarousel({
    loop:true,
    margin:40,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayHoverPause:false,
    responsive:{
        0:{items:2},
        600:{items:3},
        1000:{items:5}
    }
});


//


