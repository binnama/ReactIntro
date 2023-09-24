import SuperTitle from "./SuperTitle";

function ProductItem({ title }) {
  return (
    <article className="product_item">
      <span>Annonse: </span>
      <SuperTitle title={title} />
      <p>Et våpen alle burde ha!</p>
      <p>50 000,-</p>
    </article>
  );
}

export default ProductItem;
