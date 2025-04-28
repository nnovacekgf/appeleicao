
import React from "react";
import { useDrag, useDrop } from "react-dnd";

export const CooperativaCard = ({ cooperativa, index, moveCard }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: "CARD",
    hover(item) {
      if (item.index === index) return;
      moveCard(item.index, index);
      item.index = index;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`p-6 rounded-lg shadow-lg bg-white transition-transform transform ${
        isDragging ? "scale-95 opacity-50" : "hover:scale-105"
      }`}
      style={{ cursor: "move" }}
    >
      <h2 className="text-xl font-semibold mb-2">{cooperativa.nome}</h2>
      <p className="text-gray-600">{cooperativa.localizacao}</p>
    </div>
  );
};
