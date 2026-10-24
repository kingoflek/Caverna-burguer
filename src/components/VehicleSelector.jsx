import React, { useState } from 'react';
import { Search, Car, Calendar, SlidersHorizontal, CheckCircle2, RotateCcw } from 'lucide-react';
import { 
  VEHICLE_BRANDS, 
  getModelsByBrand, 
  getYearsForModel, 
  HEADLIGHT_SIDES 
} from '../data/products';

export default function VehicleSelector({ onSelectVehicleFilter, currentFilters }) {
  const [selectedBrand, setSelectedBrand] = useState(currentFilters?.brand || 'all');
  const [selectedModel, setSelectedModel] = useState(currentFilters?.model || 'all');
  const [selectedYear, setSelectedYear] = useState(currentFilters?.year || 'all');
  const [selectedSide, setSelectedSide] = useState(currentFilters?.side || 'all');

  const availableModels = getModelsByBrand(selectedBrand);
  const availableYears = getYearsForModel(selectedModel !== 'all' ? selectedModel : null);

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    setSelectedModel('all');
    setSelectedYear('all');
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    setSelectedModel(model);
    setSelectedYear('all');
  };

  const handleApplyFilter = (e) => {
    e.preventDefault();
    if (onSelectVehicleFilter) {
      onSelectVehicleFilter({
        brand: selectedBrand,
        model: selectedModel,
        year: selectedYear,
        side: selectedSide,
      });
    }

    const catElement = document.querySelector('#catalogo');
    if (catElement) {
      const headerOffset = 90;
      const elementPosition = catElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleQuickBrandClick = (brand) => {
    setSelectedBrand(brand);
    setSelectedModel('all');
    setSelectedYear('all');
    if (onSelectVehicleFilter) {
      onSelectVehicleFilter({
        brand: brand,
        model: 'all',
        year: 'all',
        side: 'all',
      });
    }
    const catElement = document.querySelector('#catalogo');
    if (catElement) {
      catElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setSelectedBrand('all');
    setSelectedModel('all');
    setSelectedYear('all');
    setSelectedSide('all');
    if (onSelectVehicleFilter) {
      onSelectVehicleFilter({
        brand: 'all',
        model: 'all',
        year: 'all',
        side: 'all',
      });
    }
  };

  return (
    <section id="seletor-veiculo" className="relative py-8 bg-secret-surface border-y border-secret-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-redaccent-950/80 border border-redaccent-800/60 text-redaccent-400">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-lg sm:text-xl text-white">
                Faróis por Veículo
              </h2>
              <p className="text-xs text-secret-muted">
                Selecione a marca, modelo e ano do seu carro para ver apenas peças compatíveis
              </p>
            </div>
          </div>

          {(selectedBrand !== 'all' || selectedModel !== 'all' || selectedYear !== 'all' || selectedSide !== 'all') && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-secret-subtle hover:text-white transition-colors self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpar seleção</span>
            </button>
          )}
        </div>

        {/* SELECTOR FORM */}
        <form onSubmit={handleApplyFilter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
          
          {/* MARCA */}
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1.5">
              1. Marca do Veículo
            </label>
            <select
              value={selectedBrand}
              onChange={handleBrandChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-secret-card border border-secret-border text-white text-xs sm:text-sm focus:outline-none focus:border-redaccent-500"
            >
              <option value="all">Todas as Marcas</option>
              {VEHICLE_BRANDS.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* MODELO */}
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1.5">
              2. Modelo
            </label>
            <select
              value={selectedModel}
              onChange={handleModelChange}
              disabled={selectedBrand === 'all' && availableModels.length === 0}
              className="w-full px-3.5 py-2.5 rounded-xl bg-secret-card border border-secret-border text-white text-xs sm:text-sm focus:outline-none focus:border-redaccent-500 disabled:opacity-50"
            >
              <option value="all">Todos os Modelos</option>
              {availableModels.map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>

          {/* ANO */}
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1.5">
              3. Ano do Carro
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-secret-card border border-secret-border text-white text-xs sm:text-sm focus:outline-none focus:border-redaccent-500"
            >
              <option value="all">Todos os Anos</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* LADO DE INSTALAÇÃO */}
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1.5">
              4. Posição / Lado
            </label>
            <select
              value={selectedSide}
              onChange={(e) => setSelectedSide(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-secret-card border border-secret-border text-white text-xs sm:text-sm focus:outline-none focus:border-redaccent-500"
            >
              {HEADLIGHT_SIDES.map(side => (
                <option key={side.id} value={side.id}>{side.name}</option>
              ))}
            </select>
          </div>

          {/* SUBMIT BUTTON */}
          <div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-redaccent-600/30 transition-all h-[42px]"
            >
              <Search className="w-4 h-4" />
              <span>Filtrar Faróis</span>
            </button>
          </div>

        </form>

        {/* QUICK BRAND CHIPS */}
        <div className="mt-5 pt-4 border-t border-secret-border/50 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle mr-1">
            Marcas Rápidas:
          </span>
          {VEHICLE_BRANDS.map(brand => (
            <button
              key={brand}
              type="button"
              onClick={() => handleQuickBrandClick(brand)}
              className={`text-xs px-3 py-1 rounded-lg border transition-colors ${
                selectedBrand.toLowerCase() === brand.toLowerCase()
                  ? 'bg-redaccent-900/60 border-redaccent-500 text-white font-bold'
                  : 'bg-secret-card hover:bg-secret-cardHover border-secret-border text-secret-muted hover:text-white'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
