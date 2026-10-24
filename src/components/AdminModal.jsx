import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Plus, 
  Edit, 
  Trash2, 
  Download, 
  Check, 
  AlertCircle, 
  Tag, 
  ShieldCheck, 
  Eye, 
  EyeOff,
  Sparkles,
  Building2,
  FileCode
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, VEHICLE_BRANDS, HEADLIGHT_TYPES, HEADLIGHT_SIDES } from '../data/products';
import { STORE_CONFIG } from '../config/store';
import { formatPrice } from '../utils/format';

export default function AdminModal() {
  const { isAdminOpen, closeAdmin } = useCart();
  const [pinInput, setPinInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState(false);

  // Catálogo local no painel administrativo
  const [adminProducts, setAdminProducts] = useState(PRODUCTS);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  if (!isAdminOpen) return null;

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pinInput === STORE_CONFIG.adminPin || pinInput === 'secretparts2026') {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleToggleOffer = (id) => {
    setAdminProducts(prev =>
      prev.map(p => p.id === id ? { ...p, isOffer: !p.isOffer } : p)
    );
    showFeedback('Status de promoção atualizado!');
  };

  const handleToggleStock = (id, newStatus) => {
    setAdminProducts(prev =>
      prev.map(p => p.id === id ? { ...p, stockStatus: newStatus } : p)
    );
    showFeedback('Estoque atualizado!');
  };

  const handleTogglePublished = (id) => {
    setAdminProducts(prev =>
      prev.map(p => p.id === id ? { ...p, published: p.published === false ? true : false } : p)
    );
    showFeedback('Visibilidade atualizada!');
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(adminProducts, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `catalogo-secret-parts-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showFeedback('Arquivo JSON exportado com sucesso!');
  };

  const showFeedback = (msg) => {
    setFeedbackMsg(msg);
    setTimeout(() => setFeedbackMsg(''), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        onClick={closeAdmin}
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-5xl bg-secret-surface rounded-3xl overflow-hidden border border-secret-border shadow-secret-modal my-auto z-10 animate-fade-in flex flex-col max-h-[92vh]">
        
        {/* HEADER */}
        <div className="p-5 sm:p-6 bg-secret-card border-b border-secret-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-redaccent-950/80 border border-redaccent-800/60 text-redaccent-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                Painel Administrativo • Secret Parts
              </h3>
              <span className="text-xs text-secret-muted">
                Gestão rápida de produtos, preços, ofertas e estoque
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeAdmin}
            className="p-2 rounded-xl text-secret-subtle hover:text-white hover:bg-secret-surface transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* FEEDBACK TOAST */}
        {feedbackMsg && (
          <div className="bg-emerald-950 border-b border-emerald-800 text-emerald-300 text-xs py-2 px-6 flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>{feedbackMsg}</span>
          </div>
        )}

        {/* CONTENT */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
          
          {!isAuthenticated ? (
            /* PIN AUTHENTICATION FORM */
            <div className="max-w-md mx-auto py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-secret-card border border-secret-border flex items-center justify-center text-redaccent-400 mx-auto">
                <Lock className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-display font-bold text-lg text-white">
                  Acesso Restrito ao Gestor
                </h4>
                <p className="text-xs text-secret-muted mt-1">
                  Digite a senha de administrador configurada em <code className="text-redaccent-400">store.js</code>
                </p>
              </div>

              <form onSubmit={handlePinSubmit} className="space-y-3">
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Senha de acesso..."
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl bg-secret-card border border-secret-border text-center font-mono text-sm text-white focus:outline-none focus:border-redaccent-500"
                />
                {pinError && (
                  <p className="text-xs text-red-400 font-semibold">
                    Senha incorreta. Verifique o PIN em store.js.
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Entrar no Painel
                </button>
              </form>
            </div>
          ) : (
            /* ADMIN DASHBOARD */
            <div className="space-y-6">
              
              {/* TOP ACTION BAR */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-secret-card border border-secret-border">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase text-white">
                    Faróis Cadastrados:
                  </span>
                  <span className="px-2 py-0.5 rounded bg-redaccent-950 text-redaccent-400 font-bold text-xs border border-redaccent-800">
                    {adminProducts.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleExportJSON}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-secret-surface hover:bg-secret-border border border-secret-border text-white text-xs font-bold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Exportar Backup (JSON)</span>
                  </button>
                </div>
              </div>

              {/* PRODUCTS LIST TABLE */}
              <div className="overflow-x-auto rounded-2xl border border-secret-border bg-secret-card">
                <table className="w-full text-left text-xs text-secret-muted">
                  <thead className="bg-secret-surface text-[10px] font-bold uppercase tracking-wider text-secret-subtle border-b border-secret-border">
                    <tr>
                      <th className="py-3 px-4">Farol / Veículo</th>
                      <th className="py-3 px-4">SKU / OEM</th>
                      <th className="py-3 px-4">Preço Varejo</th>
                      <th className="py-3 px-4">Preço Atacado</th>
                      <th className="py-3 px-4">Estoque</th>
                      <th className="py-3 px-4 text-center">Promoção</th>
                      <th className="py-3 px-4 text-center">Visível</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-secret-border">
                    {adminProducts.map((prod) => (
                      <tr key={prod.id} className="hover:bg-secret-surface/50 transition-colors">
                        
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={prod.images?.[0] || './images/products/farol-onix.jpg'}
                              alt=""
                              className="w-10 h-10 rounded-lg object-cover bg-secret-dark flex-shrink-0"
                            />
                            <div className="min-w-0">
                              <span className="font-bold text-white block truncate max-w-xs">
                                {prod.name}
                              </span>
                              <span className="text-[10px] text-redaccent-400 font-semibold block">
                                {prod.vehicleBrand} {prod.vehicleModel} ({prod.yearStart}-{prod.yearEnd}) • {prod.sideLabel}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="py-3 px-4 font-mono text-[11px] text-white">
                          <div>{prod.sku}</div>
                          <div className="text-[10px] text-secret-subtle">OEM: {prod.oemCode}</div>
                        </td>

                        <td className="py-3 px-4 font-bold text-white">
                          {formatPrice(prod.price)}
                        </td>

                        <td className="py-3 px-4 text-secret-subtle">
                          {prod.wholesalePrice ? formatPrice(prod.wholesalePrice) : 'Sob consulta'}
                        </td>

                        <td className="py-3 px-4">
                          <select
                            value={prod.stockStatus}
                            onChange={(e) => handleToggleStock(prod.id, e.target.value)}
                            className="px-2 py-1 rounded bg-secret-surface border border-secret-border text-white text-[11px] focus:outline-none"
                          >
                            <option value="disponivel">Disponível</option>
                            <option value="poucas_unidades">Poucas Unidades</option>
                            <option value="sob_consulta">Sob Consulta</option>
                            <option value="indisponivel">Indisponível</option>
                          </select>
                        </td>

                        <td className="py-3 px-4 text-center">
                          <button
                            type="button"
                            onClick={() => handleToggleOffer(prod.id)}
                            className={`px-2 py-1 rounded text-[10px] font-bold uppercase transition-colors ${
                              prod.isOffer
                                ? 'bg-redaccent-600 text-white'
                                : 'bg-secret-surface text-secret-subtle border border-secret-border'
                            }`}
                          >
                            {prod.isOffer ? 'Oferta Ativa' : 'Não'}
                          </button>
                        </td>

                        <td className="py-3 px-4 text-center">
                          <button
                            type="button"
                            onClick={() => handleTogglePublished(prod.id)}
                            className={`p-1.5 rounded transition-colors ${
                              prod.published !== false
                                ? 'text-emerald-400 hover:bg-secret-surface'
                                : 'text-zinc-500 hover:bg-secret-surface'
                            }`}
                            title={prod.published !== false ? "Publicado no site" : "Oculto no site"}
                          >
                            {prod.published !== false ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          </button>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ANTIGRAVITY AUTOMATION GUIDE */}
              <div className="p-5 rounded-2xl bg-secret-card border border-secret-border space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-white">
                  <FileCode className="w-4 h-4 text-redaccent-400" />
                  <span>Como Atualizar Produtos Facilmente com o Antigravity</span>
                </div>
                <p className="text-secret-muted leading-relaxed">
                  Para cadastrar novos faróis em lote, alterar preços ou atualizar fotos, você pode solicitar diretamente ao Antigravity no chat:
                  <br />
                  <code className="text-redaccent-400 bg-secret-surface px-2 py-0.5 rounded mt-1 inline-block">
                    "Antigravity, adicione 10 novos faróis ao catálogo em src/data/products.js"
                  </code>
                </p>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
