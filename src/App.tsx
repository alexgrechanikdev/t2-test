import { useCallback, useEffect, useState } from "react";
import { Container } from "./components/container";
import { fetchData } from "./api/api";
import type { IProduct } from "./types";
import { ProductCard } from "./components/card";
import { STATUS_DISABLED } from "./constants";
import "./App.css";

function App() {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [hasMouseLeftSinceSelection, setHasMouseLeftSinceSelection] = useState<
    Record<number, boolean>
  >({});

  useEffect(() => {
    async function getData() {
      const data = await fetchData();

      setProducts(data);
    }

    void getData();
  }, []);

  const handleClick = (item: IProduct) => {
    const newProducts = products.map((product) => {
      if (item.id === product.id) {
        const newProduct = {
          ...item,
          status: item.status === "default" ? "selected" : "default",
        };

        setSelectedProducts((prev) => {
          const isCurrentlySelected = prev.includes(item.id);

          if (isCurrentlySelected) {
            return prev.filter((id) => id !== item.id);
          } else {
            return [...prev, item.id];
          }
        });

        setHasMouseLeftSinceSelection((prev) => ({
          ...prev,
          [item.id]: false,
        }));

        return newProduct;
      }

      return product;
    });

    setProducts(newProducts);
  };

  const handleMouseEnter = useCallback((productId: number) => {
    setHoveredProduct(productId);
  }, []);

  const handleMouseLeave = useCallback(
    (productId: number) => {
      setHoveredProduct(null);
      if (selectedProducts.includes(productId)) {
        setHasMouseLeftSinceSelection((prev) => ({
          ...prev,
          [productId]: true,
        }));
      }
    },
    [selectedProducts]
  );

  const shouldApplyHover = useCallback(
    (productId: number): boolean => {
      const isHovered = hoveredProduct === productId;
      const isSelected = selectedProducts.includes(productId);
      if (!isSelected) {
        return isHovered;
      } else {
        return isHovered && hasMouseLeftSinceSelection[productId] === true;
      }
    },
    [hoveredProduct, selectedProducts, hasMouseLeftSinceSelection]
  );

  return (
    <div className="gradient">
      <Container>
        <div className="inner_wrapper">
          <div className="page_title_wrapper">
            <h1 className="page_title">Ты сегодня покормил кота?</h1>
          </div>
          <div className="cards_wrapper">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                {...item}
                onClick={
                  item.status === STATUS_DISABLED
                    ? undefined
                    : () => handleClick(item)
                }
                isHovered={shouldApplyHover(item.id)}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
