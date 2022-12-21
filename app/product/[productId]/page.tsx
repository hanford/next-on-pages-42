export default function RootPage({ params: { productId } }) {
  return (
    <div>
      <h1>Product page: {productId}</h1>
    </div>
  );
}
