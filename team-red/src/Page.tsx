export default function Page({
  Basket,
  Buy,
  Recommendations,
  sku = "",
}: {
  Basket?: React.ComponentType;
  Buy?: React.ComponentType;
  Recommendations?: React.ComponentType;
  sku?: string;
}) {
  return (
    <div style={{ outline: "3px dashed orangered" }}>
      <h1 id="store">The Model Store</h1>
      {Basket && <Basket />}
      <div id="image">image</div>
      <h2 id="name">name</h2>
      <div id="options">options</div>
      {Buy && <Buy />}
      {Recommendations && <Recommendations />}
    </div>
  );
}
