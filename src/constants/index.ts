import cat from "../assets/images/cat.png";

export const STATUS_DEFAULT = "default";

export const STATUS_SELECTED = "selected";

export const STATUS_DISABLED = "disabled";

export const MOUSE_VARIANT = ["мышь", "мыши", "мышей"];

export const PORTIONS_VARIANT = ["порция", "порции", "порций"];

export const PRODUCT_DATA = [
  {
    id: 1,
    slogan: "Сказочное заморское яство",
    title: "Нямушка",
    taste: "фуа-гра",
    portions: 10,
    present: 1,
    weight: 0.5,
    img: cat,
    status: "default",
    description: "Печень утки разварная с артишоками.",
    hoveredText: "Котэ не одобряет?",
  },
  {
    id: 2,
    slogan: "Сказочное заморское яство",
    title: "Нямушка",
    taste: "рыбой",
    portions: 40,
    present: 2,
    weight: 2,
    img: cat,
    status: "default",
    description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    hoveredText: "Котэ не одобряет?",
  },
  {
    id: 3,
    slogan: "Сказочное заморское яство",
    title: "Нямушка",
    taste: "курой",
    portions: 100,
    present: 5,
    weight: 5,
    img: cat,
    status: "disabled",
    description: "Филе из цыплят с трюфелями в бульоне.",
    hoveredText: "Котэ не одобряет?",
  },
];
