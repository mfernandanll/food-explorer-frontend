import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./styles";
import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";

interface FoodItemProps extends InputHTMLAttributes<HTMLInputElement>{
  isNew?: boolean;
  onClick?: () => void;
}

export const FoodItem = forwardRef(
  function FoodItem(
    {isNew = false, onClick, ...rest}: FoodItemProps,
    ref: LegacyRef<HTMLInputElement>
  ) {
    function handleAddItem(event: React.KeyboardEvent<HTMLInputElement>) {
      if (event.key == "Enter") {
        event.preventDefault();
        
        onClick?.();
      }
    }
  
    return (
      <Container $isNew={isNew}>
        <input type="text" onKeyDown={handleAddItem} readOnly={!isNew} {...rest} />
  
        <button
          type="button"
          onClickCapture={onClick}
        >
          {isNew ? <Plus /> : <Minus />}
        </button>
      </Container>
    )
  }
)
