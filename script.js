let total = 0;

function addToCart(item, price) {
    const cartItems = document.getElementById("cartItems");

    const li = document.createElement("li");
    li.textContent = `${item} - ₹${price}`;

    cartItems.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}

function searchFood() {
    const search = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const name = card.querySelector("h3").textContent.toLowerCase();

        card.style.display = name.includes(search)
            ? "block"
            : "none";
    });
}