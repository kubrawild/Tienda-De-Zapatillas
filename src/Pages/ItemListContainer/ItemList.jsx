import { ProductCard } from "../../components/ProductCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            title={elemento.title}
            description={elemento.description}
            price={elemento.price}
            id={elemento.id}
            img={elemento.img}
          />
        );
      })}

      <input type="file" />
    </div>
  );
};

export default ItemList;
