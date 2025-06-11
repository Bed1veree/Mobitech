import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PriceFilter = ({ onApplyFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const priceRanges = [
    { id: 'price-1', label: 'Menos de $1,000,000', value: [0, 1000000] },
    { id: 'price-2', label: '$1,000,000 - $2,000,000', value: [1000000, 2000000] },
    { id: 'price-3', label: '$2,000,000 - $3,000,000', value: [2000000, 3000000] },
    { id: 'price-4', label: '$3,000,000 - $4,000,000', value: [3000000, 4000000] },
    { id: 'price-5', label: 'Más de $4,000,000', value: [4000000, Infinity] }
  ];

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (rangeValue) => {
    if (selectedPrices.some(range => range[0] === rangeValue[0] && range[1] === rangeValue[1])) {
      setSelectedPrices(selectedPrices.filter(range => !(range[0] === rangeValue[0] && range[1] === rangeValue[1])));
    } else {
      setSelectedPrices([...selectedPrices, rangeValue]);
    }
  };

  const handleApplyFilters = () => {
    onApplyFilters(selectedPrices);
    setIsOpen(false);
  };

  const handleClearFilters = () => {
    setSelectedPrices([]);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleFilter}
        className="inline-flex items-center px-4 py-2 border border-blue-600 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filtrar
        {selectedPrices.length > 0 && (
          <span className="ml-2 bg-white text-blue-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {selectedPrices.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-72 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Filtrar por precio</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Cerrar</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-3 mb-6">
            {priceRanges.map((range) => (
              <div key={range.id} className="flex items-center">
                <input
                  id={range.id}
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  checked={selectedPrices.some(r => r[0] === range.value[0] && r[1] === range.value[1])}
                  onChange={() => handleCheckboxChange(range.value)}
                />
                <label htmlFor={range.id} className="ml-3 text-sm text-gray-700">
                  {range.label}
                </label>
              </div>
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleClearFilters}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              Limpiar filtros
            </button>
            <button
              onClick={handleApplyFilters}
              className="flex-1 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Aplicar filtros
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

PriceFilter.propTypes = {
  onApplyFilters: PropTypes.func.isRequired
};

export default PriceFilter;
