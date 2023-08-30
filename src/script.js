const cartBtn = document.querySelector(".check-cart")
const thumnails = document.querySelectorAll(".prod-thumb")
const cartModal = document.querySelector(".cart-modal")
const lightBox = document.querySelector(".product-modal")
const quantity = document.querySelector(".qty")
const next = document.querySelectorAll(".next-container")
const prev = document.querySelectorAll(".prev-container")
const cartQty = document.querySelector(".cart-qty-display")
const cartItem = document.querySelector(".cart-item")
const checkout = document.querySelector(".checkout")
const activeLightBox = document.querySelector(".main-modal-active")
const activeMainImg = document.querySelector(".main-active")
const navItems = document.querySelectorAll(".nav-item")
const navItem = document.querySelector(".nav-items")
const menus = document.querySelector(".menu")

// console.log(menus)
menus.addEventListener("click", ()=>{
  document.querySelector(".open-menu").classList.toggle('hide');
  document.querySelector(".close-menu").classList.toggle('hide');
  navItem.classList.toggle('toggle')
  document.querySelector(".menu-overlay").classList.toggle('toggle')
})
document.querySelector(".main-img").addEventListener('click', ()=>{
    lightBox.classList.add('show');
})

document.querySelector(".close-modal").addEventListener('click', ()=>{
    lightBox.classList.remove('show');
})

cartBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('off');
    cartModal.classList.contains('off') ? cartBtn.style.fill = '#a8afbf': cartBtn.style.fill = '#000';
    
})
document.querySelector(".container").addEventListener("click", (e)=>{
  if(e.target !== cartBtn ){
    cartModal.classList.add('off');
    cartModal.classList.contains('off') ? cartBtn.style.fill = '#a8afbf': cartBtn.style.fill = '#000';
  }
  console.log(e.target)
})

document.querySelector("#plus").addEventListener('click', ()=>{
    quantity.textContent++;
})

document.querySelector("#minus").addEventListener('click', ()=>{
    if (quantity.textContent > 0){
        quantity.textContent--;
    };
})

document.querySelector(".add-to-cart").addEventListener('click', ()=>{
    if(quantity.textContent > 0){
        cartQty.classList.remove('hide');
        cartQty.textContent = quantity.textContent;
        quantity.textContent = 0;

        cartItem.innerHTML = `
        <img
          src="../images/image-product-1-thumbnail.jpg"
          alt=""
          class="cart-img"
        />
        <div class="cart-details">
          <p class="cart-item-name">Fall Limited Edition Sneakers</p>
          <div class="cart-pricing">
            <p class="cart-qty-details">
              <span class="cart-item-price">$125.00</span> x
              <span class="cart-item-qty">${cartQty.textContent}</span>
            </p>
            <p class="cart-item-total">$${cartQty.textContent * 125}</p>
          </div>
        </div>
        <img src="../images/icon-delete.svg" alt="" class="del-cart-item" />`;

        checkout.classList.remove("hide");

        document.querySelector('.del-cart-item').addEventListener("click", ()=>{
                cartQty.classList.add("hide");
                cartItem.innerHTML = `<p class="empty-cart">Your cart is empty</p>`;
                checkout.classList.add("hide");
        })
    }
})

thumnails.forEach(thumbnail=>{
  thumbnail.addEventListener('click', ()=>{
    thumnails.forEach(thumb=> {
      thumb.classList.remove('active-slide');
    });

    let activeSlide = document.querySelectorAll(`#${thumbnail.id}`);

    activeSlide.forEach(slide=>{
      slide.classList.add('active-slide');
    })

    if(thumbnail.id === 'one'){      
      activeLightBox.style.transform = 'translateX(0)';
      activeMainImg.style.transform = 'translateX(0)';
    } else if(thumbnail.id === 'two'){
      activeLightBox.style.transform = 'translateX(-100%)';
      activeMainImg.style.transform = 'translateX(-100%)';
    }else if(thumbnail.id === 'three'){          
      activeLightBox.style.transform = 'translateX(-200%)';
      activeMainImg.style.transform = 'translateX(-200%)';
    }else if(thumbnail.id === 'four'){      
      activeLightBox.style.transform = 'translateX(-300%)';
      activeMainImg.style.transform = 'translateX(-300%)';
    }

  })
})

let curImg = 0;

prev.forEach(prevBtn=>{
  prevBtn.addEventListener('click', ()=>{
    curImg--;
    updateSlide();
  })
})
next.forEach(nextBtn=>{
  nextBtn.addEventListener('click', ()=>{
    curImg++;
    updateSlide();
  })
})


let updateSlide = ()=>{
  if(curImg <0){
      curImg = thumnails.length -5;
    } else if(curImg > thumnails.length -5){
        curImg = 0;
    }

  activeLightBox.style.transform = `translateX(-${curImg * 100}%)`;
  activeMainImg.style.transform = `translateX(-${curImg * 100}%)`;

  thumnails.forEach(thumbnail=>{
    thumbnail.classList.remove('active-slide');
  })

  let activeSlide = document.querySelectorAll(`#${thumnails[curImg].id}`);

    activeSlide.forEach(slide=>{
      slide.classList.add('active-slide');
    })
}

