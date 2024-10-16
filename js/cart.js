// دالة لإضافة خدمة إلى السلة
function addToCart(serviceName, servicePrice) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cartItems.find(item => item.name === serviceName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ name: serviceName, price: servicePrice, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('تمت إضافة الخدمة إلى السلة!');
}

// دالة لعرض محتويات السلة
function displayCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTable = document.getElementById('cart-items');
    let totalPrice = 0;
    cartTable.innerHTML = '';
    
    cartItems.forEach(item => {
        let row = `<tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
                    <td>${item.price * item.quantity}</td>
                   </tr>`;
        cartTable.innerHTML += row;
        totalPrice += item.price * item.quantity;
    });
    
    document.getElementById('total-price').innerText = totalPrice;
}

// دالة لإتمام الشراء
function checkout() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length === 0) {
        alert('السلة فارغة!');
        return;
    }
    window.location.href = 'contact.html';
}

// عند تحميل الصفحة، عرض السلة
window.onload = displayCart;
