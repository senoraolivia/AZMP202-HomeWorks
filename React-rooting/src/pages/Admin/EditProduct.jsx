import { useParams } from 'react-router-dom';

function EditProduct() {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Product {id}</h1>
      <form>
        <input type="text" placeholder="Product Name" required />
        <input type="number" placeholder="Price" required />
        <textarea placeholder="Description" required></textarea>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;

