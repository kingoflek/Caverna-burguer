import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  RotateCcw, 
  Car, 
  Filter, 
  Check, 
  X, 
  Layers, 
  AlertCircle,
  HelpCircle,
  MessageCircle,
  ChevronDown
} from 'lucide-react';
import ProductCard from './ProductCard';
import { 
  PRODUCTS, 
  VEHICLE_BRANDS, 
  HEADLIGHT_TYPES, 
  HEADLIGHT_SIDES, 
  filterProducts, 
  getModelsByBrand, 
  getYearsForModel 
} from '../data/products';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export default function CatalogSection({ 
  searchQuery, 
  setSearchQuery, 
  vehicleFilters, 
  setVehicleFilters 
}) {
  // Estados de filtros internos
  const [selectedBrand, setSelectedBrand] = useState(vehicleFilters?.brand || 'all');
  const [selectedModel, setSelectedModel] = useState(vehicleFilters?.model || 'all');
  const [selectedYear, setSelectedYear] = useState(vehicleFilters?.year || 'all');
  const [selectedSide, setSelectedSide] = useState(vehicleFilters?.side || 'all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStock, setSelectedStock] = useState('all');
  const [onlyOffers, setOnlyOffers] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sincroniza se o VehicleSelector disparou filtros externos
  React.useEffect(() => {
    if (vehicleFilters) {
      if (vehicleFilters.brand !== undefined) setSelectedBrand(vehicleFilters.brand);
      if (vehicleFilters.model !== undefined) setSelectedModel(vehicleFilters.model);
      if (vehicleFilters.year !== undefined) setSelectedYear(vehicleFilters.year);
      if (vehicleFilters.side !== undefined) setSelectedSide(vehicleFilters.side);
    }
  }, [vehicleFilters]);

  // Modelos e anos dinâmicos
  const availableModels = useMemo(() => getModelsByBrand(selectedBrand), [selectedBrand]);
  const availableYears = useMemo(() => getYearsForModel(selectedModel !== 'all' ? selectedModel : null), [selectedModel]);

  // Aplicação dos filtros com o motor de filtragem
  const filteredProducts = useMemo(() => {
    return filterProducts({
      searchQuery,
      brand: selectedBrand,
      model: selectedModel,
      year: selectedYear,
      side: selectedSide,
      type: selectedType,
      stockStatus: selectedStock,
      onlyOffers,
      sortBy
    });
  }, [
    searchQuery,
    selectedBrand,
    selectedModel,
    selectedYear,
    selectedSide,
    selectedType,
    selectedStock,
    onlyOffers,
    sortBy
  ]);

  const visibleProducts = filteredProducts.slice(0, itemsPerPage);
  const hasMore = itemsPerPage < filteredProducts.length;

  const handleClearFilters = () => {
    if (setSearchQuery) setSearchQuery('');
    setSelectedBrand('all');
    setSelectedModel('all');
    setSelectedYear('all');
    setSelectedSide('all');
    setSelectedType('all');
    setSelectedStock('all');
    setOnlyOffers(false);
    setSortBy('featured');
    if (setVehicleFilters) {
      setVehicleFilters({ brand: 'all', model: 'all', year: 'all', side: 'all' });
    }
  };

  const hasActiveFilters = 
    Boolean(searchQuery) ||
    selectedBrand !== 'all' ||
    selectedModel !== 'all' ||
    selectedYear !== 'all' ||
    selectedSide !== 'all' ||
    selectedType !== 'all' ||
    selectedStock !== 'all' ||
    onlyOffers;

  const handleWhatsAppHelp = () => {
    const msg = `Olá Secret Parts! Não encontrei o farol específico para o meu veículo no catálogo online. Poderiam verificar a disponibilidade no estoque da distribuidora?`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="catalogo" className="py-14 sm:py-20 bg-secret-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-secret-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secret-card border border-secret-border mb-2">
              <span className="w-2 h-2 rounded-full bg-redaccent-500" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-secret-muted">
                Catálogo Exclusivo
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              Catálogo de Faróis Automotivos
            </h2>
            <p className="text-xs sm:text-sm text-secret-muted mt-1 max-w-2xl">
              Filtre por marca, modelo, ano e lado para encontrar a peça exata do seu carro. Todos os faróis com garantia legal e conferência de compatibilidade.
            </p>
          </div>

          {/* TOTAL RESULTS BADGE & MOBILE FILTER BUTTON */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-secret-muted bg-secret-surface px-3 py-2 rounded-xl border border-secret-border">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'farol cadastrado' : 'faróis encontrados'}
            </span>

            <button
              type="button"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-secret-card border border-secret-border text-white text-xs font-bold"
            >
              <SlidersHorizontal className="w-4 h-4 text-redaccent-500" />
              <span>Filtros {hasActiveFilters && '•'}</span>
            </button>
          </div>
        </div>

        {/* SEARCH AND QUICK FILTER BAR */}
        <div className="bg-secret-surface border border-secret-border rounded-2xl p-4 sm:p-5 mb-8 shadow-md space-y-4">
          
          {/* SEARCH INPUT ROW */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-secret-subtle absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery || ''}
                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                placeholder="Pesquisar por modelo, marca, código OEM, SKU ou descrição técnica..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-secret-card border border-secret-border text-white placeholder-secret-subtle text-xs sm:text-sm focus:outline-none focus:border-redaccent-500 focus:ring-1 focus:ring-redaccent-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery && setSearchQuery('')}
                  className="absolute right-3 top-3 text-secret-subtle hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* SORT BY DROPDOWN */}
            <div className="sm:w-56 flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-secret-card border border-secret-border text-white text-xs sm:text-sm focus:outline-none focus:border-redaccent-500"
              >
                <option value="featured">Ordenar: Destaques</option>
                <option value="price_asc">Menor Preço</option>
                <option value="price_desc">Maior Preço</option>
                <option value="year_desc">Veículos Mais Recentes</option>
                <option value="name">Nome (A - Z)</option>
              </select>
            </div>
          </div>

          {/* EXPANDED FILTER GRID (DESKTOP & CONDITIONAL MOBILE) */}
          <div className={`${mobileFilterOpen ? 'block' : 'hidden'} lg:block pt-3 border-t border-secret-border/60`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              
              {/* 1. MARCA */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                  Marca
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => {
                    setSelectedBrand(e.target.value);
                    setSelectedModel('all');
                    setSelectedYear('all');
                  }}
                  className="w-full px-2.5 py-2 rounded-lg bg-secret-card border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
                >
                  <option value="all">Todas as Marcas</option>
                  {VEHICLE_BRANDS.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* 2. MODELO */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                  Modelo
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => {
                    setSelectedModel(e.target.value);
                    setSelectedYear('all');
                  }}
                  disabled={selectedBrand === 'all' && availableModels.length === 0}
                  className="w-full px-2.5 py-2 rounded-lg bg-secret-card border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500 disabled:opacity-50"
                >
                  <option value="all">Todos os Modelos</option>
                  {availableModels.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* 3. ANO */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                  Ano
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-2.5 py-2 rounded-lg bg-secret-card border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
                >
                  <option value="all">Todos os Anos</option>
                  {availableYears.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              {/* 4. LADO */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                  Lado
                </label>
                <select
                  value={selectedSide}
                  onChange={(e) => setSelectedSide(e.target.value)}
                  className="w-full px-2.5 py-2 rounded-lg bg-secret-card border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
                >
                  {HEADLIGHT_SIDES.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>

              {/* 5. TIPO ÓPTICO */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                  Tipo Óptico
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-2.5 py-2 rounded-lg bg-secret-card border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
                >
                  {HEADLIGHT_TYPES.map(t => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
              </div>

              {/* 6. DISPONIBILIDADE */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                  Estoque
                </label>
                <select
                  value={selectedStock}
                  onChange={(e) => setSelectedStock(e.target.value)}
                  className="w-full px-2.5 py-2 rounded-lg bg-secret-card border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
                >
                  <option value="all">Todos</option>
                  <option value="disponivel">Pronta Entrega</option>
                  <option value="poucas_unidades">Poucas Unidades</option>
                  <option value="sob_consulta">Sob Consulta</option>
                </select>
              </div>

            </div>

            {/* TOGGLE APENAS OFERTAS E LIMPAR FILTROS */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 mt-3 border-t border-secret-border/40">
              <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-semibold text-white">
                <input
                  type="checkbox"
                  checked={onlyOffers}
                  onChange={(e) => setOnlyOffers(e.target.checked)}
                  className="w-4 h-4 rounded text-redaccent-600 focus:ring-redaccent-500 bg-secret-card border-secret-border"
                />
                <span>Exibir apenas Faróis em Promoção</span>
              </label>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="inline-flex items-center gap-1.5 text-xs text-redaccent-400 hover:text-redaccent-300 font-bold transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Limpar todos os filtros</span>
                </button>
              )}
            </div>

          </div>

        </div>

        {/* ACTIVE FILTERS TAGS */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle">
              Filtros ativos:
            </span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secret-card border border-secret-border text-xs text-white">
                Busca: "{searchQuery}"
                <X className="w-3 h-3 cursor-pointer text-secret-subtle hover:text-white" onClick={() => setSearchQuery && setSearchQuery('')} />
              </span>
            )}
            {selectedBrand !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secret-card border border-secret-border text-xs text-white">
                Marca: {selectedBrand}
                <X className="w-3 h-3 cursor-pointer text-secret-subtle hover:text-white" onClick={() => setSelectedBrand('all')} />
              </span>
            )}
            {selectedModel !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secret-card border border-secret-border text-xs text-white">
                Modelo: {selectedModel}
                <X className="w-3 h-3 cursor-pointer text-secret-subtle hover:text-white" onClick={() => setSelectedModel('all')} />
              </span>
            )}
            {selectedYear !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secret-card border border-secret-border text-xs text-white">
                Ano: {selectedYear}
                <X className="w-3 h-3 cursor-pointer text-secret-subtle hover:text-white" onClick={() => setSelectedYear('all')} />
              </span>
            )}
            {selectedSide !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secret-card border border-secret-border text-xs text-white">
                Lado: {HEADLIGHT_SIDES.find(s => s.id === selectedSide)?.name}
                <X className="w-3 h-3 cursor-pointer text-secret-subtle hover:text-white" onClick={() => setSelectedSide('all')} />
              </span>
            )}
            {selectedType !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secret-card border border-secret-border text-xs text-white">
                Tipo: {HEADLIGHT_TYPES.find(t => t.id === selectedType)?.name}
                <X className="w-3 h-3 cursor-pointer text-secret-subtle hover:text-white" onClick={() => setSelectedType('all')} />
              </span>
            )}
            {onlyOffers && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-redaccent-950/80 border border-redaccent-700 text-xs text-white">
                Apenas Ofertas
                <X className="w-3 h-3 cursor-pointer text-redaccent-300 hover:text-white" onClick={() => setOnlyOffers(false)} />
              </span>
            )}
          </div>
        )}

        {/* PRODUCTS GRID OR EMPTY STATE */}
        {filteredProducts.length === 0 ? (
          <div className="bg-secret-surface border border-secret-border rounded-3xl p-10 sm:p-16 text-center max-w-xl mx-auto space-y-5">
            <div className="w-16 h-16 rounded-full bg-secret-card border border-secret-border flex items-center justify-center text-secret-subtle mx-auto">
              <AlertCircle className="w-8 h-8 text-redaccent-400" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-display font-bold text-xl text-white">
                Nenhum farol encontrado para esses critérios
              </h3>
              <p className="text-xs sm:text-sm text-secret-muted leading-relaxed">
                Tente buscar apenas pelo modelo do carro (ex: "Onix", "Gol", "Corolla") ou limpe os filtros para visualizar todo o catálogo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleClearFilters}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-secret-card hover:bg-secret-cardHover border border-secret-border text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Limpar Todos os Filtros
              </button>

              <button
                type="button"
                onClick={handleWhatsAppHelp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar Farol no WhatsApp</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* PROGRESSIVE LOADING BUTTON */}
            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setItemsPerPage(prev => prev + 8)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-secret-card hover:bg-secret-cardHover border border-secret-border hover:border-redaccent-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Carregar Mais Faróis ({filteredProducts.length - visibleProducts.length} restantes)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
