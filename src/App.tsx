import React, { useEffect, useState } from 'react';
import { Check, Copy, Download, FilePlus2, Printer, RotateCcw } from 'lucide-react';
import { FichaDocumentView } from './components/FichaDocumentView';
import { FichaEditor } from './components/FichaEditor';
import { createBlankFicha, PRESET_FICHAS } from './data/presets';
import { FichaTecnica } from './types/ficha';
import { downloadTextFile, formatFichaAsMarkdown } from './utils/exportFicha';

type ViewMode = 'documento' | 'dividido' | 'editar';

const STORAGE_KEY = 'ficha-tecnica-operativa-v4';

export default function App() {
  const [ficha, setFicha] = useState<FichaTecnica>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved) as FichaTecnica;
      }
    } catch {
      // Ignorar errores de almacenamiento local y usar plantilla inicial
    }
    return PRESET_FICHAS[0];
  });

  const [viewMode, setViewMode] = useState<ViewMode>('documento');
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ficha));
    } catch {
      // Ignorar si el almacenamiento local no está disponible
    }
  }, [ficha]);

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => {
      setNotice((prev) => (prev === message ? null : prev));
    }, 2600);
  };

  const handleSelectPreset = (presetId: string) => {
    const found = PRESET_FICHAS.find((p) => p.id === presetId);
    if (found) {
      setFicha(JSON.parse(JSON.stringify(found)) as FichaTecnica);
      showNotice(`Plantilla cargada: ${found.identificacion.nombre.split('—')[0].trim()}`);
    }
  };

  const handleNewBlank = () => {
    setFicha(createBlankFicha());
    setViewMode('editar');
    showNotice('Nueva ficha en blanco lista para diligenciar');
  };

  const handleResetDefault = () => {
    setFicha(JSON.parse(JSON.stringify(PRESET_FICHAS[0])) as FichaTecnica);
    showNotice('Ejemplo base restaurado');
  };

  const handleCopyMarkdown = async () => {
    const md = formatFichaAsMarkdown(ficha);
    try {
      await navigator.clipboard.writeText(md);
      showNotice('Contenido copiado al portapapeles');
    } catch {
      downloadTextFile(`${ficha.codigo || 'ficha-tecnica'}.md`, md, 'text/markdown;charset=utf-8');
      showNotice('Descargado como archivo Markdown');
    }
  };

  const handleDownloadMarkdown = () => {
    const md = formatFichaAsMarkdown(ficha);
    const slug = (ficha.codigo || 'ficha-tecnica').toLowerCase().replace(/[^a-z0-9-_]+/g, '-');
    downloadTextFile(`${slug}.md`, md, 'text/markdown;charset=utf-8');
    showNotice('Archivo .md descargado');
  };

  const handlePrint = () => {
    if (viewMode === 'editar') {
      setViewMode('documento');
      window.setTimeout(() => window.print(), 120);
    } else {
      window.print();
    }
  };

  const handleJumpToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (viewMode === 'editar') {
      setViewMode('documento');
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activePresetMatch = PRESET_FICHAS.some((p) => p.id === ficha.id) ? ficha.id : 'custom';

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#1C1917]">
      {/* Barra superior estricta de 3 zonas */}
      <header className="no-print sticky top-0 z-30 bg-[#FAF8F4]/95 backdrop-blur-sm border-b border-[#E7E5E0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zona 1: Wordmark */}
          <a
            href="#sec-identificacion"
            onClick={(e) => handleJumpToSection(e, 'sec-identificacion')}
            className="font-[var(--font-display)] text-lg sm:text-xl font-semibold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0"
          >
            Ficha Técnica
          </a>

          {/* Zona 2: 4 enlaces concisos de una línea */}
          <nav
            aria-label="Secciones de la ficha"
            className="hidden md:flex items-center gap-6 text-sm text-[#57534E]"
          >
            <a
              href="#sec-identificacion"
              onClick={(e) => handleJumpToSection(e, 'sec-identificacion')}
              className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Identificación
            </a>
            <a
              href="#sec-oferta"
              onClick={(e) => handleJumpToSection(e, 'sec-oferta')}
              className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Oferta y tamaño
            </a>
            <a
              href="#sec-cadena"
              onClick={(e) => handleJumpToSection(e, 'sec-cadena')}
              className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Cadena
            </a>
            <a
              href="#sec-clientes"
              onClick={(e) => handleJumpToSection(e, 'sec-clientes')}
              className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Clientes
            </a>
          </nav>

          {/* Zona 3: Acción primaria */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-[#14532D] text-white hover:bg-[#166534] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Imprimir / PDF
            </button>
          </div>
        </div>
      </header>

      {/* Barra de herramientas del espacio de trabajo */}
      <div className="no-print border-b border-[#E7E5E0] bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Selector de plantilla y modo de vista */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label htmlFor="preset-select" className="text-xs font-medium text-[#57534E] whitespace-nowrap">
                Plantilla base:
              </label>
              <select
                id="preset-select"
                value={activePresetMatch}
                onChange={(e) => {
                  if (e.target.value !== 'custom') {
                    handleSelectPreset(e.target.value);
                  }
                }}
                className="bg-[#FAF8F4] border border-[#D6D3CD] px-2.5 py-1.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#14532D] max-w-[260px] truncate"
              >
                {PRESET_FICHAS.map((preset) => (
                  <option key={preset.id} value={preset.id}>
                    {preset.identificacion.nombre.split('—')[0].trim()}
                  </option>
                ))}
                {activePresetMatch === 'custom' && (
                  <option value="custom">Ficha personalizada</option>
                )}
              </select>
            </div>

            <div
              role="group"
              aria-label="Modo de visualización"
              className="inline-flex items-center p-0.5 bg-[#F3F1EC] border border-[#E7E5E0]"
            >
              {(
                [
                  { id: 'documento', label: 'Documento' },
                  { id: 'dividido', label: 'Dividido' },
                  { id: 'editar', label: 'Editar datos' },
                ] as { id: ViewMode; label: string }[]
              ).map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setViewMode(mode.id)}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    viewMode === mode.id
                      ? 'bg-white text-[#1C1917] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  } ${mode.id === 'dividido' ? 'hidden xl:inline-block' : ''}`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          {/* Acciones de archivo y exportación */}
          <div className="flex flex-wrap items-center gap-2">
            {notice && (
              <span
                role="status"
                aria-live="polite"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#14532D] mr-2 whitespace-nowrap"
              >
                <Check className="w-3.5 h-3.5" />
                {notice}
              </span>
            )}

            <button
              type="button"
              onClick={handleNewBlank}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1C1917] border border-[#D6D3CD] bg-white hover:bg-[#FAF8F4] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FilePlus2 className="w-3.5 h-3.5 text-[#57534E]" />
              Nueva ficha
            </button>

            <button
              type="button"
              onClick={handleResetDefault}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1C1917] border border-[#D6D3CD] bg-white hover:bg-[#FAF8F4] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#57534E]" />
              Ejemplo
            </button>

            <button
              type="button"
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1C1917] border border-[#D6D3CD] bg-white hover:bg-[#FAF8F4] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5 text-[#57534E]" />
              Copiar texto
            </button>

            <button
              type="button"
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1C1917] border border-[#D6D3CD] bg-white hover:bg-[#FAF8F4] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#57534E]" />
              Descargar .md
            </button>
          </div>
        </div>
      </div>

      {/* Área principal */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-8">
        {viewMode === 'documento' && (
          <div className="max-w-[1040px] mx-auto">
            <FichaDocumentView ficha={ficha} />
          </div>
        )}

        {viewMode === 'editar' && (
          <div className="max-w-[960px] mx-auto">
            <FichaEditor ficha={ficha} onChange={setFicha} />
          </div>
        )}

        {viewMode === 'dividido' && (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            <div className="xl:col-span-5 xl:sticky xl:top-24">
              <FichaEditor ficha={ficha} onChange={setFicha} />
            </div>
            <div className="xl:col-span-7">
              <FichaDocumentView ficha={ficha} compact />
            </div>
          </div>
        )}
      </main>

      <footer className="no-print border-t border-[#E7E5E0] bg-[#FAF8F4] py-5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#78716C]">
          <span>Ficha Técnica Operativa · Todos los cambios se guardan automáticamente en este navegador</span>
          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'editar' ? 'documento' : 'editar')}
            className="text-[#14532D] font-medium hover:underline underline-offset-4 cursor-pointer"
          >
            {viewMode === 'editar' ? 'Ver documento completo' : 'Editar campos de la ficha'}
          </button>
        </div>
      </footer>
    </div>
  );
}
