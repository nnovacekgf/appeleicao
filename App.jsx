
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CooperativaCard } from "./CooperativaCard";
import { Upload } from "./Upload";

export default function App() {
  const [cooperativas, setCooperativas] = useState([]);

  const handleUpload = (newCooperativas) => {
    setCooperativas(newCooperativas);
  };

  const moveCard = (dragIndex, hoverIndex) => {
    const updatedCooperativas = [...cooperativas];
    const [removed] = updatedCooperativas.splice(dragIndex, 1);
    updatedCooperativas.splice(hoverIndex, 0, removed);
    setCooperativas(updatedCooperativas);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Organizador de Cooperativas</h1>
      <Upload onUpload={handleUpload} />
      <DndProvider backend={HTML5Backend}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full max-w-7xl">
          {cooperativas.map((cooperativa, index) => (
            <CooperativaCard
              key={index}
              index={index}
              cooperativa={cooperativa}
              moveCard={moveCard}
            />
          ))}
        </div>
      </DndProvider>
    </div>
  );
}
