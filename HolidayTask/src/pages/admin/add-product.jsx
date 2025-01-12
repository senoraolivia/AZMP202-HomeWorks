import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '../../components/Layout/index';
// import styles from '../../styles/AddProduct.module.css';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  image: Yup.string().url('Invalid URL').required('Image URL is required'),
  rating: Yup.number().min(0).max(5).required('Rating is required'),
  reviews: Yup.number().min(0).required('Number of reviews is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().min(0).required('Price is required'),
});

const AddProduct = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert('Product added successfully');
        resetForm();
      } else {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout title="Add Product | E-commerce App">
      <div className={styles.container}>
        <h1>Add New Product</h1>
        <Formik
          initialValues={{
            title: '',
            image: '',
            rating: 0,
            reviews: 0,
            description: '',
            price: 0,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="title">Title</label>
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" className={styles.error} />
              </div>

              <div>
                <label htmlFor="image">Image URL</label>
                <Field type="text" name="image" />
                <ErrorMessage name="image" component="div" className={styles.error} />
              </div>

              <div>
                <label htmlFor="rating">Rating</label>
                <Field type="number" name="rating" min="0" max="5" step="0.1" />
                <ErrorMessage name="rating" component="div" className={styles.error} />
              </div>

              <div>
                <label htmlFor="reviews">Number of Reviews</label>
                <Field type="number" name="reviews" min="0" />
                <ErrorMessage name="reviews" component="div" className={styles.error} />
              </div>

              <div>
                <label htmlFor="description">Description</label>
                <Field as="textarea" name="description" />
                <ErrorMessage name="description" component="div" className={styles.error} />
              </div>

              <div>
                <label htmlFor="price">Price</label>
                <Field type="number" name="price" min="0" step="0.01" />
                <ErrorMessage name="price" component="div" className={styles.error} />
              </div>

              <button type="submit" disabled={isSubmitting}>
                Add Product
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default AddProduct;

