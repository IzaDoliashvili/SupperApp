const products = [
    {   image: "Image/baby-food/food1.png",
        brand: "HIPP",
        description: "ჰიპპ  20 გ",
        price: 72,
        age: "0-3 months",
        bulk: "15-30 g",
        rating: 5
    },
    {
        image: "Image/baby-food/food1.png",
        brand: "BabyBio",
        description: "ბეიბი ბიო  80 გ",
        price: 50,
        age: "3-6 months",
        bulk: "75-100 g",
        rating: 4
    },
    {
        image: "Image/baby-food/food1.png",
        brand: "Plasmon",
        description: "პლასმონი 200 გ",
        price: 150,
        age: "6-9 months",
        bulk: "100-300 g",
        rating: 3
    },
    {
        image: "Image/baby-food/food1.png",
        brand: "Humana",
        description: "ჰუმანა  400 გ",
        price: 120,
        age: "9-12 months",
        bulk: "300-500 g",
        rating: 2
    },
    {
        image: "Image/baby-food/food1.png",
        brand: "Heinz",
        description: "ჰეინზ  700 გ",
        price: 80,
        age: "1-3 years",
        bulk: "500-1000 g",
        rating: 1
    },
    {
        image: "Image/baby-food/food1.png",
        brand: "Nestle",
        description: "ნესტლე  200 გ",
        price: 90,
        age: "3-5 years",
        bulk: "100-300 g",
        rating: 5
    }
];


document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const filters = document.querySelectorAll('.filter');
    const priceInputs = document.querySelectorAll('.price-input');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.brand = product.brand;
        productCard.dataset.price = product.price;
        productCard.dataset.age = product.age;
        productCard.dataset.bulk = product.bulk;
        productCard.dataset.rating = product.rating;

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.description}">
            <div class="rating"><i class="fas fa-star"></i> ${product.rating}.0</div>
            <div class="heart-icon">
                <img src="../Image/baby-care-image/Shape.png" alt="">
            </div>
            <div class="details">
                <div class="brand">${product.brand}</div>
                <div class="description">${product.description}</div>
                <div class="price">
                    <span class="new-price">${product.price}.00₾</span>
                    
                </div>
                <div class="button">
                    <button>კალათაში დამატება</button>
                </div>
                <div id="baby-care-hidden-button">
                    <a href="#"><img src="../Image/baby-care-image/Icon Left.png" alt="">დამატება</a>
                </div>
            </div>
        `;

        productGrid.appendChild(productCard);
    });

    filters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });

    priceInputs.forEach(input => {
        input.addEventListener('input', filterProducts);
    });
});

function filterProducts() {
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    const filters = document.querySelectorAll('.filter');
    const activeFilters = {
        brands: [],
        ages: [],
        bulks: [],
        ratings: [],
        minPrice: minPrice ? parseFloat(minPrice) : null,
        maxPrice: maxPrice ? parseFloat(maxPrice) : null,
    };

    filters.forEach(filter => {
        if (filter.type === 'checkbox' && filter.checked) {
            if (filter.classList.contains('brand')) {
                activeFilters.brands.push(filter.dataset.filter);
            } else if (filter.classList.contains('age')) {
                activeFilters.ages.push(filter.dataset.filter);
            } else if (filter.classList.contains('bulk')) {
                activeFilters.bulks.push(filter.dataset.filter);
            } else if (filter.classList.contains('rating')) {
                activeFilters.ratings.push(parseInt(filter.dataset.filter));
            }
        }
    });

    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const productBrand = product.dataset.brand;
        const productPrice = parseFloat(product.dataset.price);
        const productAge = product.dataset.age;
        const productBulk = product.dataset.bulk;
        const productRating = parseInt(product.dataset.rating);

        let show = true;

        if (activeFilters.minPrice !== null && productPrice < activeFilters.minPrice) {
            show = false;
        }

        if (activeFilters.maxPrice !== null && productPrice > activeFilters.maxPrice) {
            show = false;
        }

        if (activeFilters.brands.length > 0 && !activeFilters.brands.includes(productBrand)) {
            show = false;
        }

        if (activeFilters.ages.length > 0 && !activeFilters.ages.includes(productAge)) {
            show = false;
        }

        if (activeFilters.bulks.length > 0 && !activeFilters.bulks.includes(productBulk)) {
            show = false;
        }

        if (activeFilters.ratings.length > 0 && !activeFilters.ratings.includes(productRating)) {
            show = false;
        }

        product.style.display = show ? 'block' : 'none';
    });
}