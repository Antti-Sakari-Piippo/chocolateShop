const nav = document.getElementById('nav')
const dropdown = document.getElementById('dropdown')
const hamburger = document.getElementById('hamburger')
const main = document.getElementById('main')
const nav__store = document.getElementById('nav__store')

let menuItems = `
<div class="flex">
  <div class="nav__store__links id="menu-content" flex">
    <ul>
      <li class="flex">
        <h3 class="underline">By Occasion</h3>
          <a href="#">Halloween Chocolates</a>
          <a href="#">Thanksgiving Chocolates</a>
          <a href="#">Christmas Chocolates</a>
          <a href="#">Hanukkah Chocolates</a>
          <a href="#">Birthday</a>
          <a href="#">Thinking of You</a>
          <a href="#">Thank You</a>
          <a href="#">Anniversary</a>
          <a href="#">Wedding & Party</a>
          <a href="#">Fall Chocolates</a>
      </li>
    </ul>
    <ul>
      <li class="flex">
        <h3 class="underline">Best Sellers</h3>
          <a href="#">Chocolate Gift Boxes</a>
          <a href="#">Chocolate of the Month</a>
          <a href="#">Gift Baskets & Sets</a>
          <a href="#">Virtual Gift Cards</a>
          <a href="#">Business Gifting</a>
          <a href="#">Gourmet Gifts</a>
          <a href="#">Chocolate Gift Jars</a>
          <a href="#">Vegan Gifts</a>
      </li>
    </ul>
    <ul>
      <li class="flex">
        <h3 class="underline"> Dietary</h3>
          <a href="#">Organic</a>
          <a href="#">Keto Friendly</a>
          <a href="#">Vegan</a>
          <a href="#">Milk free</a>
          <a href="#">Peanut free</a>
      </li>
    </ul>
    <ul>
      <li class="flex">
        <h3 class="underline">Collections</h3>
        <a href="#">Assortments</a>
        <a href="#">Handcrafted Chocolate</a>
        <a href="#">Chocolate Clusters</a>
        <a href="#">Chocolate Bars</a>
        <a href="#">Bulk Chocolates</a>
        <a href="#">Chocolate Squares</a>
        <a href="#">Chocolate Coins</a>
        <a href="#">Chocolate Snacks</a>
        <a href="#">Chocolates of Vermont</a>
      </li>
    </ul>
    <ul>
      <li class="flex">
        <h3 class="underline">Featured</h3>
        <a href="#">Sale</a>
        <a href="#">New Chocolates</a>
        <a href="#">Comfort Chocolates</a>
        <a href="#">Fall Chocolates</a>
        <a href="#">Fall Gift Boxes & More!</a>
        <a href="#">Chocolate Leaves</a>
        <a href="#">Chocolate Turkeys</a>
      </li>
    </ul>
    <ul>
      <li class="flex">
        <h3 class="underline">Type</h3>
        <a href="#">Fruits & Nuts</a>
        <a href="#">Dark Chocolate</a>
        <a href="#">Milk Chocolate</a>
        <a href="#">Baking Chocolate</a>
        <a href="#">Caramels</a>
        <a href="#">English Toffee</a>
        <a href="#">Peanut Butter</a>
      </li>
    </ul>
    <ul>
      <li class="flex">
        <div class="special-offer--holder">
        <h3 class="underline">Special Offer!</h3>
        <div class="special-offer">
          <img src="/images/chocolateSpecialOffer.webp" alt="Choco pawns special offer">
          <h3>Choco pawns</h3>
          <button class="btn-white-outline">view details</button>
        </div>
      </div>
      </li>
    </ul>
  </div>
</div>
`
nav__store.innerHTML = menuItems

dropdown.addEventListener(
  'click',
  function () {
    nav__store.classList.toggle('show_store')
    var expanded = this.getAttribute('aria-expanded') === 'true'
    this.setAttribute('aria-expanded', String(!expanded))
  },
  false
)
hamburger.addEventListener(
  'click',
  () => {
    nav.classList.add('show_nav')
  },
  false
)

main.addEventListener(
  'click',
  () => {
    nav.classList.remove('show_nav')
    nav__store.classList.remove('show_store')
  },
  false
)
