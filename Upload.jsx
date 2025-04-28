
import React from "react";

export const Upload = ({ onUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        onUpload(data);
      } catch (error) {
        alert("Erro ao ler o arquivo. Certifique-se de que é um JSON válido.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded cursor-pointer">
        Escolher arquivo JSON
        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    </div>
  );
};
