function Product({ image, text }) {
  return (
    <div>
      <p>{text}</p>
      <img src={image} />
    </div>
  );
}

export default Product;
