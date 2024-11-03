// Task 2: Fetch Products from the API Using Fetch and Promises

fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => displayProducts(data)) // Display products
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('product-container').innerHTML = '<p>Failed to load products. Please try again later.</p>'; // Task 4: Handle Errors Gracefully
    });

 // Task 3: Display Product Details Dynamically
 
 function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear container

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        // Set inner HTML with product details
        productElement.innerHTML = `
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
            <h3>${product.fields.name}</h3>
            <p>${product.fields.company}</p>
            <p>$${(product.fields.price / 100).toFixed(2)}</p>
        `;

        productContainer.appendChild(productElement); // Adds product element to the product container
    });
}