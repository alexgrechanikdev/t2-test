import { type FC } from "react";
import type { ICardProps } from "../../types";
import { getDeclension } from "../../utils/text-utils";
import {
  MOUSE_VARIANT,
  PORTIONS_VARIANT,
  STATUS_DEFAULT,
  STATUS_DISABLED,
  STATUS_SELECTED,
} from "../../constants";
import "./style.css";

export const ProductCard: FC<ICardProps> = ({
  slogan,
  title,
  taste,
  portions,
  present,
  weight,
  img,
  status,
  description,
  onClick,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  hoveredText,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
  };
  return (
    <div className={`card_wrapper card_wrapper_${status}`}>
      <div
        className={`card card_${status} ${
          isHovered && status === STATUS_SELECTED && "card_selected_hover"
        }`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {status === STATUS_DISABLED && <div className="overlay"></div>}
        <div className="card_texts_wrapper">
          <div className="card_title_wrapper">
            {isHovered && status === STATUS_SELECTED ? (
              <p className="hover_question_text">{hoveredText}</p>
            ) : (
              <p className="card_slogan">{slogan}</p>
            )}
            <div>
              <h2 className="card_title">{title}</h2>
              <h3 className="card_taste_text">{`с ${taste}`}</h3>
            </div>
          </div>
          <div className="card_info_wrapper">
            <p>{`${portions} ${getDeclension(portions, PORTIONS_VARIANT)}`}</p>
            <p>{`${present > 1 ? present : ""} ${getDeclension(
              present,
              MOUSE_VARIANT
            )} в подарок`}</p>
            {portions >= 100 && present >= 5 && <p>заказчик доволен</p>}
          </div>
        </div>
        <img className="card_image" src={img} alt="Cat" />
        <div
          className={`card_weight card_weight_${status} ${
            isHovered && status === STATUS_SELECTED
              ? "card_weight_selected_hover"
              : ""
          }`}
        >
          {weight}
          <p>кг</p>
        </div>
      </div>
      <div className="card_description_wrapper">
        <p
          className={`card_description ${
            status === STATUS_DISABLED && "card_description_disabled"
          }`}
        >
          {status === STATUS_DEFAULT && "Чего сидишь? Порадуй котэ,"}
          {status === STATUS_SELECTED && description}
          {status === STATUS_DISABLED && `Печалька, с ${taste} закончился.`}
        </p>
        {status === STATUS_DEFAULT && (
          <>
            <a
              className={`card_description_link_${status}`}
              href="#"
              onClick={handleClick}
            >
              купи
            </a>
            .
          </>
        )}
      </div>
    </div>
  );
};
