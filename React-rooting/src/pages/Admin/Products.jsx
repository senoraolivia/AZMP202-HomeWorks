import { Link } from 'react-router-dom';

function Products() {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
  ];

  return (
    <div>
      <h1>Products</h1>
      <Link to="/admin/products/add">Add Product</Link>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - <Link to={`/admin/products/edit/${product.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

