const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const salePrice = prices.map((num) => ({ price: num, salePrice: num / 2 }));
console.log('Price objects', salePrice);

const formattedPrice = prices.map((num) => `$${num.toFixed(2)}`);
console.log('Formatted prices', formattedPrice);
