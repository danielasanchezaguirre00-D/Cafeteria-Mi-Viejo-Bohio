import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import {
  FichaTecnica,
  ProductoServicio,
  RolPersonal,
  SegmentoCliente,
  TipoOferta,
  TipoPublico,
} from '../types/ficha';

interface FichaEditorProps {
  ficha: FichaTecnica;
  onChange: (updated: FichaTecnica) => void;
}

type EditorTab =
  | 'identificacion'
  | 'responsable'
  | 'oferta'
  | 'tamano'
  | 'cadena'
  | 'clientes';

const TABS: { id: EditorTab; num: string; label: string }[] = [
  { id: 'identificacion', num: '01', label: 'Nombre y ubicación' },
  { id: 'responsable', num: '02', label: 'Responsable' },
  { id: 'oferta', num: '03', label: 'Productos / servicios' },
  { id: 'tamano', num: '04', label: 'Tamaño y operación' },
  { id: 'cadena', num: '05', label: 'Cadena de suministro' },
  { id: 'clientes', num: '06', label: 'Clientes' },
];

const PUBLICO_OPTIONS: TipoPublico[] = [
  'Aprendices',
  'Instructores',
  'Funcionarios',
  'Trabajadores',
  'Comunidad',
  'Visitantes',
  'Empresas',
  'Otro',
];

const inputClass =
  'w-full bg-white border border-[#D6D3CD] px-3 py-2 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#14532D] focus:ring-1 focus:ring-[#14532D] transition-colors';

const labelClass = 'block text-xs font-medium text-[#44403C] mb-1.5';

export const FichaEditor: React.FC<FichaEditorProps> = ({ ficha, onChange }) => {
  const [activeTab, setActiveTab] = useState<EditorTab>('identificacion');

  const updateField = <K extends keyof FichaTecnica>(key: K, value: FichaTecnica[K]) => {
    onChange({ ...ficha, [key]: value });
  };

  const addProductoServicio = () => {
    const newItem: ProductoServicio = {
      id: `item-${Date.now()}`,
      nombre: '',
      tipo: 'Producto',
      categoria: '',
      unidadMedida: '',
      descripcion: '',
    };
    updateField('oferta', {
      ...ficha.oferta,
      items: [...ficha.oferta.items, newItem],
    });
  };

  const updateProductoServicio = (
    id: string,
    patch: Partial<ProductoServicio>,
  ) => {
    updateField('oferta', {
      ...ficha.oferta,
      items: ficha.oferta.items.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    });
  };

  const removeProductoServicio = (id: string) => {
    updateField('oferta', {
      ...ficha.oferta,
      items: ficha.oferta.items.filter((item) => item.id !== id),
    });
  };

  const addRolPersonal = () => {
    const newRol: RolPersonal = {
      id: `rol-${Date.now()}`,
      rol: '',
      cantidad: 1,
      dedicacion: 'Tiempo completo',
    };
    updateField('tamano', {
      ...ficha.tamano,
      personalDetalle: [...ficha.tamano.personalDetalle, newRol],
    });
  };

  const updateRolPersonal = (id: string, patch: Partial<RolPersonal>) => {
    updateField('tamano', {
      ...ficha.tamano,
      personalDetalle: ficha.tamano.personalDetalle.map((r) =>
        r.id === id ? { ...r, ...patch } : r,
      ),
    });
  };

  const removeRolPersonal = (id: string) => {
    updateField('tamano', {
      ...ficha.tamano,
      personalDetalle: ficha.tamano.personalDetalle.filter((r) => r.id !== id),
    });
  };

  const addSegmento = (tipo: TipoPublico = 'Aprendices') => {
    const newSeg: SegmentoCliente = {
      id: `seg-${Date.now()}`,
      nombre: '',
      tipoPublico: tipo,
      participacionPorcentaje: 10,
      frecuenciaUso: '',
      necesidadesClave: '',
      canalAtencion: '',
    };
    updateField('clientes', {
      ...ficha.clientes,
      segmentos: [...ficha.clientes.segmentos, newSeg],
    });
  };

  const updateSegmento = (id: string, patch: Partial<SegmentoCliente>) => {
    updateField('clientes', {
      ...ficha.clientes,
      segmentos: ficha.clientes.segmentos.map((s) => (s.id === id ? { ...s, ...patch } : s)),
    });
  };

  const removeSegmento = (id: string) => {
    updateField('clientes', {
      ...ficha.clientes,
      segmentos: ficha.clientes.segmentos.filter((s) => s.id !== id),
    });
  };

  const totalPorcentaje = ficha.clientes.segmentos.reduce(
    (sum, s) => sum + (Number(s.participacionPorcentaje) || 0),
    0,
  );

  return (
    <div className="bg-white border border-[#E7E5E0]">
      {/* Navegación por secciones del editor */}
      <div
        role="tablist"
        aria-label="Secciones de edición de la ficha técnica"
        className="flex flex-wrap border-b border-[#E7E5E0] bg-[#FAF8F4]"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2.5 text-xs font-medium whitespace-nowrap shrink-0 border-b-2 transition-colors cursor-pointer ${
                isActive
                  ? 'border-[#14532D] text-[#14532D] bg-white'
                  : 'border-transparent text-[#57534E] hover:text-[#1C1917] hover:bg-white/60'
              }`}
            >
              <span className="font-mono mr-1.5 opacity-75">{tab.num}</span>
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="p-6 space-y-6">
        {/* TAB 01: NOMBRE Y UBICACIÓN */}
        {activeTab === 'identificacion' && (
          <div className="space-y-5">
            <div>
              <h2 className="font-[var(--font-display)] text-lg font-semibold text-[#1C1917]">
                01. Nombre, ubicación y metadatos
              </h2>
              <p className="text-xs text-[#57534E] mt-1">
                Datos generales que identifican la unidad productiva, empresa o servicio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#F0EEE9]">
              <div>
                <label className={labelClass} htmlFor="doc-codigo">
                  Código del documento
                </label>
                <input
                  id="doc-codigo"
                  type="text"
                  className={`${inputClass} font-mono`}
                  value={ficha.codigo}
                  onChange={(e) => updateField('codigo', e.target.value)}
                  placeholder="Ej. FT-OPE-001"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="doc-version">
                  Versión
                </label>
                <input
                  id="doc-version"
                  type="text"
                  className={`${inputClass} font-mono`}
                  value={ficha.version}
                  onChange={(e) => updateField('version', e.target.value)}
                  placeholder="1.0"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="doc-fecha">
                  Fecha de actualización
                </label>
                <input
                  id="doc-fecha"
                  type="date"
                  className={`${inputClass} font-mono`}
                  value={ficha.fechaActualizacion}
                  onChange={(e) => updateField('fechaActualizacion', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="doc-sector">
                Sector económico o área de actividad
              </label>
              <input
                id="doc-sector"
                type="text"
                className={inputClass}
                value={ficha.sector}
                onChange={(e) => updateField('sector', e.target.value)}
                placeholder="Ej. Servicios de alimentación, manufactura textil, agroindustria..."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#F0EEE9]">
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="id-nombre">
                  Nombre de la empresa, unidad o servicio
                </label>
                <input
                  id="id-nombre"
                  type="text"
                  className={inputClass}
                  value={ficha.identificacion.nombre}
                  onChange={(e) =>
                    updateField('identificacion', { ...ficha.identificacion, nombre: e.target.value })
                  }
                  placeholder="Ej. Cafetería Central Punto Verde"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="id-tipo">
                  Tipo de unidad
                </label>
                <input
                  id="id-tipo"
                  type="text"
                  className={inputClass}
                  value={ficha.identificacion.tipoUnidad}
                  onChange={(e) =>
                    updateField('identificacion', {
                      ...ficha.identificacion,
                      tipoUnidad: e.target.value,
                    })
                  }
                  placeholder="Ej. Unidad productiva / Taller / Establecimiento"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="id-sede">
                  Sede o entidad a la que pertenece
                </label>
                <input
                  id="id-sede"
                  type="text"
                  className={inputClass}
                  value={ficha.identificacion.sedeOEntidad}
                  onChange={(e) =>
                    updateField('identificacion', {
                      ...ficha.identificacion,
                      sedeOEntidad: e.target.value,
                    })
                  }
                  placeholder="Ej. Centro de Formación Agroindustrial"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="id-dir">
                  Dirección exacta o ubicación interna
                </label>
                <input
                  id="id-dir"
                  type="text"
                  className={inputClass}
                  value={ficha.identificacion.direccion}
                  onChange={(e) =>
                    updateField('identificacion', {
                      ...ficha.identificacion,
                      direccion: e.target.value,
                    })
                  }
                  placeholder="Ej. Bloque B, Primer Nivel — Plazoleta Central"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="id-ciudad">
                  Ciudad y departamento
                </label>
                <input
                  id="id-ciudad"
                  type="text"
                  className={inputClass}
                  value={ficha.identificacion.ciudadDepartamento}
                  onChange={(e) =>
                    updateField('identificacion', {
                      ...ficha.identificacion,
                      ciudadDepartamento: e.target.value,
                    })
                  }
                  placeholder="Ej. Armenia, Quindío"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="id-cobertura">
                  Cobertura geográfica
                </label>
                <input
                  id="id-cobertura"
                  type="text"
                  className={inputClass}
                  value={ficha.identificacion.coberturaGeografica}
                  onChange={(e) =>
                    updateField('identificacion', {
                      ...ficha.identificacion,
                      coberturaGeografica: e.target.value,
                    })
                  }
                  placeholder="Ej. Campus principal y eventos locales"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 02: RESPONSABLE O LÍDER */}
        {activeTab === 'responsable' && (
          <div className="space-y-5">
            <div>
              <h2 className="font-[var(--font-display)] text-lg font-semibold text-[#1C1917]">
                02. Responsable o líder
              </h2>
              <p className="text-xs text-[#57534E] mt-1">
                Persona encargada de la dirección operativa, calidad y coordinación.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#F0EEE9]">
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="resp-nombre">
                  Nombre completo del responsable o líder
                </label>
                <input
                  id="resp-nombre"
                  type="text"
                  className={inputClass}
                  value={ficha.responsable.nombreCompleto}
                  onChange={(e) =>
                    updateField('responsable', {
                      ...ficha.responsable,
                      nombreCompleto: e.target.value,
                    })
                  }
                  placeholder="Ej. Marta Lucía Restrepo Giraldo"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="resp-cargo">
                  Cargo o rol
                </label>
                <input
                  id="resp-cargo"
                  type="text"
                  className={inputClass}
                  value={ficha.responsable.cargo}
                  onChange={(e) =>
                    updateField('responsable', { ...ficha.responsable, cargo: e.target.value })
                  }
                  placeholder="Ej. Líder operativa / Instructora encargada"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="resp-dep">
                  Dependencia o área
                </label>
                <input
                  id="resp-dep"
                  type="text"
                  className={inputClass}
                  value={ficha.responsable.dependencia}
                  onChange={(e) =>
                    updateField('responsable', {
                      ...ficha.responsable,
                      dependencia: e.target.value,
                    })
                  }
                  placeholder="Ej. Bienestar al Aprendiz / Producción"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="resp-correo">
                  Correo de contacto
                </label>
                <input
                  id="resp-correo"
                  type="email"
                  className={inputClass}
                  value={ficha.responsable.correo}
                  onChange={(e) =>
                    updateField('responsable', { ...ficha.responsable, correo: e.target.value })
                  }
                  placeholder="correo@entidad.edu.co"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="resp-tel">
                  Teléfono o extensión
                </label>
                <input
                  id="resp-tel"
                  type="text"
                  className={inputClass}
                  value={ficha.responsable.telefono}
                  onChange={(e) =>
                    updateField('responsable', { ...ficha.responsable, telefono: e.target.value })
                  }
                  placeholder="+57 (606) 745 8210"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="resp-horario">
                  Horario de atención
                </label>
                <input
                  id="resp-horario"
                  type="text"
                  className={inputClass}
                  value={ficha.responsable.horarioAtencion}
                  onChange={(e) =>
                    updateField('responsable', {
                      ...ficha.responsable,
                      horarioAtencion: e.target.value,
                    })
                  }
                  placeholder="Ej. Lunes a viernes 07:00 – 17:00"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 03: PRODUCTOS O SERVICIOS OFRECIDOS */}
        {activeTab === 'oferta' && (
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-[var(--font-display)] text-lg font-semibold text-[#1C1917]">
                  03. Productos o servicios ofrecidos
                </h2>
                <p className="text-xs text-[#57534E] mt-1">
                  Portafolio principal y propuesta de valor entregada al usuario final.
                </p>
              </div>
              <button
                type="button"
                onClick={addProductoServicio}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-[#14532D] text-white hover:bg-[#166534] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                Agregar ítem
              </button>
            </div>

            <div className="pt-2 border-t border-[#F0EEE9]">
              <label className={labelClass} htmlFor="oferta-propuesta">
                Resumen o propuesta de valor
              </label>
              <textarea
                id="oferta-propuesta"
                rows={2}
                className={inputClass}
                value={ficha.oferta.propuestaValor}
                onChange={(e) =>
                  updateField('oferta', { ...ficha.oferta, propuestaValor: e.target.value })
                }
                placeholder="Describe brevemente qué diferencia a los productos o servicios..."
              />
            </div>

            <div className="divide-y divide-[#E7E5E0] border-t border-b border-[#E7E5E0]">
              {ficha.oferta.items.map((item, idx) => (
                <div key={item.id} className="py-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-[#57534E]">Ítem #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeProductoServicio(item.id)}
                      className="inline-flex items-center gap-1 text-xs text-[#78716C] hover:text-[#991B1B] transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Eliminar
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <div>
                      <label className={labelClass}>Tipo</label>
                      <select
                        className={inputClass}
                        value={item.tipo}
                        onChange={(e) =>
                          updateProductoServicio(item.id, { tipo: e.target.value as TipoOferta })
                        }
                      >
                        <option value="Producto">Producto</option>
                        <option value="Servicio">Servicio</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Nombre del producto o servicio</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={item.nombre}
                        onChange={(e) => updateProductoServicio(item.id, { nombre: e.target.value })}
                        placeholder="Ej. Menú Ejecutivo"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Unidad de medida</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={item.unidadMedida}
                        onChange={(e) =>
                          updateProductoServicio(item.id, { unidadMedida: e.target.value })
                        }
                        placeholder="Ej. Ración / Unidad"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Categoría</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={item.categoria}
                        onChange={(e) =>
                          updateProductoServicio(item.id, { categoria: e.target.value })
                        }
                        placeholder="Ej. Alimentación"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label className={labelClass}>Descripción</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={item.descripcion}
                        onChange={(e) =>
                          updateProductoServicio(item.id, { descripcion: e.target.value })
                        }
                        placeholder="Características, componentes o alcance del servicio..."
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 04: TAMAÑO (PERSONAL Y VOLUMEN DE OPERACIÓN) */}
        {activeTab === 'tamano' && (
          <div className="space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-[var(--font-display)] text-lg font-semibold text-[#1C1917]">
                  04. Tamaño y personal
                </h2>
                <p className="text-xs text-[#57534E] mt-1">
                  Personal vinculado por rol y, opcionalmente, volumen aproximado de operación.
                </p>
              </div>
              <label className="inline-flex items-center gap-2 text-xs text-[#44403C] cursor-pointer select-none pt-1">
                <input
                  type="checkbox"
                  checked={!ficha.tamano.ocultarVolumenOperacion}
                  onChange={(e) =>
                    updateField('tamano', {
                      ...ficha.tamano,
                      ocultarVolumenOperacion: !e.target.checked,
                    })
                  }
                  className="accent-[#14532D] w-4 h-4"
                />
                Incluir volumen y capacidad operativa
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#F0EEE9]">
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="tam-clasif">
                  Clasificación o escala general
                </label>
                <input
                  id="tam-clasif"
                  type="text"
                  className={inputClass}
                  value={ficha.tamano.clasificacion}
                  onChange={(e) =>
                    updateField('tamano', { ...ficha.tamano, clasificacion: e.target.value })
                  }
                  placeholder="Ej. Punto formativo en quiosco"
                />
              </div>

              {!ficha.tamano.ocultarVolumenOperacion && (
                <>
                  <div>
                    <label className={labelClass} htmlFor="tam-diario">
                      Capacidad o volumen diario aproximado
                    </label>
                    <input
                      id="tam-diario"
                      type="text"
                      className={inputClass}
                      value={ficha.tamano.capacidadDiaria}
                      onChange={(e) =>
                        updateField('tamano', { ...ficha.tamano, capacidadDiaria: e.target.value })
                      }
                      placeholder="Ej. 420 – 480 raciones diarias"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="tam-mensual">
                      Volumen mensual aproximado
                    </label>
                    <input
                      id="tam-mensual"
                      type="text"
                      className={inputClass}
                      value={ficha.tamano.volumenMensual}
                      onChange={(e) =>
                        updateField('tamano', { ...ficha.tamano, volumenMensual: e.target.value })
                      }
                      placeholder="Ej. 9.500 – 10.500 servicios al mes"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="tam-m2">
                      Área física e infraestructura
                    </label>
                    <input
                      id="tam-m2"
                      type="text"
                      className={inputClass}
                      value={ficha.tamano.infraestructuraM2}
                      onChange={(e) =>
                        updateField('tamano', {
                          ...ficha.tamano,
                          infraestructuraM2: e.target.value,
                        })
                      }
                      placeholder="Ej. 145 m² distribuidos en 3 zonas"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="tam-turnos">
                      Turnos de operación
                    </label>
                    <input
                      id="tam-turnos"
                      type="text"
                      className={inputClass}
                      value={ficha.tamano.turnosOperacion}
                      onChange={(e) =>
                        updateField('tamano', { ...ficha.tamano, turnosOperacion: e.target.value })
                      }
                      placeholder="Ej. 2 turnos escalonados"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="tam-obs">
                      Observaciones sobre picos o estacionalidad
                    </label>
                    <textarea
                      id="tam-obs"
                      rows={2}
                      className={inputClass}
                      value={ficha.tamano.observacionesVolumen}
                      onChange={(e) =>
                        updateField('tamano', {
                          ...ficha.tamano,
                          observacionesVolumen: e.target.value,
                        })
                      }
                    />
                  </div>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-[#E7E5E0] space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-[#1C1917]">
                  Desglose de personal ({ficha.tamano.personalDetalle.reduce((a, b) => a + (Number(b.cantidad) || 0), 0)}
                  {ficha.tamano.personalDetalle.some((p) => p.cantidad === null)
                    ? ' + rotación variable'
                    : ' personas'}
                  )
                </h3>
                <button
                  type="button"
                  onClick={addRolPersonal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#14532D] text-white hover:bg-[#166534] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Agregar rol
                </button>
              </div>

              <div className="divide-y divide-[#F0EEE9] border-t border-b border-[#E7E5E0]">
                {ficha.tamano.personalDetalle.map((per) => (
                  <div key={per.id} className="py-3 grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                    <div className="sm:col-span-5">
                      <label className={labelClass}>Rol o cargo</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={per.rol}
                        onChange={(e) => updateRolPersonal(per.id, { rol: e.target.value })}
                        placeholder="Ej. Auxiliar de producción"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label className={labelClass}>Cantidad (vacío = rotación)</label>
                      <input
                        type="number"
                        min={0}
                        className={`${inputClass} font-mono tabular-nums`}
                        value={per.cantidad === null ? '' : per.cantidad}
                        placeholder="Según rotación"
                        onChange={(e) =>
                          updateRolPersonal(per.id, {
                            cantidad:
                              e.target.value === ''
                                ? null
                                : Math.max(0, Number(e.target.value) || 0),
                          })
                        }
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label className={labelClass}>Dedicación</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={per.dedicacion}
                        onChange={(e) => updateRolPersonal(per.id, { dedicacion: e.target.value })}
                        placeholder="Tiempo completo"
                      />
                    </div>
                    <div className="sm:col-span-1 flex justify-end pb-1">
                      <button
                        type="button"
                        onClick={() => removeRolPersonal(per.id)}
                        title="Eliminar rol"
                        aria-label="Eliminar rol"
                        className="p-2 text-[#78716C] hover:text-[#991B1B] transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 05: CADENA DE SUMINISTRO */}
        {activeTab === 'cadena' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-[var(--font-display)] text-lg font-semibold text-[#1C1917]">
                05. Descripción de la cadena de suministro
              </h2>
              <p className="text-xs text-[#57534E] mt-1">
                Detalla los cinco eslabones: proveedores, insumos, producción/transformación, almacenamiento y distribución.
              </p>
            </div>

            <div className="pt-2 border-t border-[#F0EEE9]">
              <label className={labelClass} htmlFor="cad-resumen">
                Visión general de la cadena
              </label>
              <textarea
                id="cad-resumen"
                rows={2}
                className={inputClass}
                value={ficha.cadenaSuministro.resumenGeneral}
                onChange={(e) =>
                  updateField('cadenaSuministro', {
                    ...ficha.cadenaSuministro,
                    resumenGeneral: e.target.value,
                  })
                }
              />
            </div>

            {/* 5.1 Proveedores */}
            <fieldset className="pt-4 border-t border-[#E7E5E0] space-y-3">
              <legend className="text-sm font-semibold text-[#14532D] pr-2">
                5.1 Proveedores
              </legend>
              <div>
                <label className={labelClass}>Descripción de la red de proveedores</label>
                <textarea
                  rows={2}
                  className={inputClass}
                  value={ficha.cadenaSuministro.proveedores.descripcion}
                  onChange={(e) =>
                    updateField('cadenaSuministro', {
                      ...ficha.cadenaSuministro,
                      proveedores: {
                        ...ficha.cadenaSuministro.proveedores,
                        descripcion: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>
                    Proveedores o actores clave (uno por línea)
                  </label>
                  <textarea
                    rows={3}
                    className={inputClass}
                    value={ficha.cadenaSuministro.proveedores.actoresClave.join('\n')}
                    onChange={(e) =>
                      updateField('cadenaSuministro', {
                        ...ficha.cadenaSuministro,
                        proveedores: {
                          ...ficha.cadenaSuministro.proveedores,
                          actoresClave: e.target.value.split('\n'),
                        },
                      })
                    }
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <label className={labelClass}>Frecuencia de abastecimiento</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={ficha.cadenaSuministro.proveedores.frecuenciaAbastecimiento}
                      onChange={(e) =>
                        updateField('cadenaSuministro', {
                          ...ficha.cadenaSuministro,
                          proveedores: {
                            ...ficha.cadenaSuministro.proveedores,
                            frecuenciaAbastecimiento: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Criterios de selección</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={ficha.cadenaSuministro.proveedores.criteriosSeleccion}
                      onChange={(e) =>
                        updateField('cadenaSuministro', {
                          ...ficha.cadenaSuministro,
                          proveedores: {
                            ...ficha.cadenaSuministro.proveedores,
                            criteriosSeleccion: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            {/* 5.2 Insumos */}
            <fieldset className="pt-4 border-t border-[#E7E5E0] space-y-3">
              <legend className="text-sm font-semibold text-[#14532D] pr-2">
                5.2 Insumos y materias primas
              </legend>
              <div>
                <label className={labelClass}>Descripción de recepción e insumos</label>
                <textarea
                  rows={2}
                  className={inputClass}
                  value={ficha.cadenaSuministro.insumos.descripcion}
                  onChange={(e) =>
                    updateField('cadenaSuministro', {
                      ...ficha.cadenaSuministro,
                      insumos: {
                        ...ficha.cadenaSuministro.insumos,
                        descripcion: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Principales insumos (uno por línea)</label>
                  <textarea
                    rows={3}
                    className={inputClass}
                    value={ficha.cadenaSuministro.insumos.principalesInsumos.join('\n')}
                    onChange={(e) =>
                      updateField('cadenaSuministro', {
                        ...ficha.cadenaSuministro,
                        insumos: {
                          ...ficha.cadenaSuministro.insumos,
                          principalesInsumos: e.target.value.split('\n'),
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <label className={labelClass}>Control de calidad en recepción</label>
                  <textarea
                    rows={3}
                    className={inputClass}
                    value={ficha.cadenaSuministro.insumos.controlCalidad}
                    onChange={(e) =>
                      updateField('cadenaSuministro', {
                        ...ficha.cadenaSuministro,
                        insumos: {
                          ...ficha.cadenaSuministro.insumos,
                          controlCalidad: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </fieldset>

            {/* 5.3 Producción o transformación */}
            <fieldset className="pt-4 border-t border-[#E7E5E0] space-y-3">
              <legend className="text-sm font-semibold text-[#14532D] pr-2">
                5.3 Producción o transformación
              </legend>
              <div>
                <label className={labelClass}>Descripción del proceso productivo</label>
                <textarea
                  rows={2}
                  className={inputClass}
                  value={ficha.cadenaSuministro.produccionTransformacion.descripcion}
                  onChange={(e) =>
                    updateField('cadenaSuministro', {
                      ...ficha.cadenaSuministro,
                      produccionTransformacion: {
                        ...ficha.cadenaSuministro.produccionTransformacion,
                        descripcion: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Procesos clave (uno por línea)</label>
                  <textarea
                    rows={3}
                    className={inputClass}
                    value={ficha.cadenaSuministro.produccionTransformacion.procesosClave.join('\n')}
                    onChange={(e) =>
                      updateField('cadenaSuministro', {
                        ...ficha.cadenaSuministro,
                        produccionTransformacion: {
                          ...ficha.cadenaSuministro.produccionTransformacion,
                          procesosClave: e.target.value.split('\n'),
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <label className={labelClass}>Equipamiento principal</label>
                  <textarea
                    rows={3}
                    className={inputClass}
                    value={ficha.cadenaSuministro.produccionTransformacion.equipamientoPrincipal}
                    onChange={(e) =>
                      updateField('cadenaSuministro', {
                        ...ficha.cadenaSuministro,
                        produccionTransformacion: {
                          ...ficha.cadenaSuministro.produccionTransformacion,
                          equipamientoPrincipal: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </fieldset>

            {/* 5.4 Almacenamiento */}
            <fieldset className="pt-4 border-t border-[#E7E5E0] space-y-3">
              <legend className="text-sm font-semibold text-[#14532D] pr-2">
                5.4 Almacenamiento
              </legend>
              <div>
                <label className={labelClass}>Descripción de bodegaje y resguardo</label>
                <textarea
                  rows={2}
                  className={inputClass}
                  value={ficha.cadenaSuministro.almacenamiento.descripcion}
                  onChange={(e) =>
                    updateField('cadenaSuministro', {
                      ...ficha.cadenaSuministro,
                      almacenamiento: {
                        ...ficha.cadenaSuministro.almacenamiento,
                        descripcion: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Condiciones de conservación</label>
                  <input
                    type="text"
                    className={inputClass}
                    value={ficha.cadenaSuministro.almacenamiento.condicionesConservacion}
                    onChange={(e) =>
                      updateField('cadenaSuministro', {
                        ...ficha.cadenaSuministro,
                        almacenamiento: {
                          ...ficha.cadenaSuministro.almacenamiento,
                          condicionesConservacion: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <label className={labelClass}>Método de control de inventario</label>
                  <input
                    type="text"
                    className={inputClass}
                    value={ficha.cadenaSuministro.almacenamiento.metodoInventario}
                    onChange={(e) =>
                      updateField('cadenaSuministro', {
                        ...ficha.cadenaSuministro,
                        almacenamiento: {
                          ...ficha.cadenaSuministro.almacenamiento,
                          metodoInventario: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </fieldset>

            {/* 5.5 Distribución */}
            <fieldset className="pt-4 border-t border-[#E7E5E0] space-y-3">
              <legend className="text-sm font-semibold text-[#14532D] pr-2">
                5.5 Distribución
              </legend>
              <div>
                <label className={labelClass}>Descripción de entrega y distribución</label>
                <textarea
                  rows={2}
                  className={inputClass}
                  value={ficha.cadenaSuministro.distribucion.descripcion}
                  onChange={(e) =>
                    updateField('cadenaSuministro', {
                      ...ficha.cadenaSuministro,
                      distribucion: {
                        ...ficha.cadenaSuministro.distribucion,
                        descripcion: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Canales de entrega (uno por línea)</label>
                  <textarea
                    rows={3}
                    className={inputClass}
                    value={ficha.cadenaSuministro.distribucion.canalesEntrega.join('\n')}
                    onChange={(e) =>
                      updateField('cadenaSuministro', {
                        ...ficha.cadenaSuministro,
                        distribucion: {
                          ...ficha.cadenaSuministro.distribucion,
                          canalesEntrega: e.target.value.split('\n'),
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <label className={labelClass}>Tiempos y condiciones de despacho</label>
                  <textarea
                    rows={3}
                    className={inputClass}
                    value={ficha.cadenaSuministro.distribucion.tiemposDespacho}
                    onChange={(e) =>
                      updateField('cadenaSuministro', {
                        ...ficha.cadenaSuministro,
                        distribucion: {
                          ...ficha.cadenaSuministro.distribucion,
                          tiemposDespacho: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </fieldset>
          </div>
        )}

        {/* TAB 06: SEGMENTO DE CLIENTES */}
        {activeTab === 'clientes' && (
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-[var(--font-display)] text-lg font-semibold text-[#1C1917]">
                  06. Segmento de clientes al que atiende
                </h2>
                <p className="text-xs text-[#57534E] mt-1">
                  Públicos objetivo (aprendices, funcionarios, comunidad, visitantes, empresas). Total actual:{' '}
                  <span
                    className={`font-mono tabular-nums font-semibold ${
                      totalPorcentaje === 100 ? 'text-[#14532D]' : 'text-[#B45309]'
                    }`}
                  >
                    {totalPorcentaje}%
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => addSegmento('Aprendices')}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium bg-[#14532D] text-white hover:bg-[#166534] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                Agregar segmento
              </button>
            </div>

            <div className="pt-2 border-t border-[#F0EEE9]">
              <label className={labelClass} htmlFor="cli-resumen">
                Resumen del mercado o población atendida
              </label>
              <textarea
                id="cli-resumen"
                rows={2}
                className={inputClass}
                value={ficha.clientes.resumenGeneral}
                onChange={(e) =>
                  updateField('clientes', { ...ficha.clientes, resumenGeneral: e.target.value })
                }
              />
            </div>

            <div className="divide-y divide-[#E7E5E0] border-t border-b border-[#E7E5E0]">
              {ficha.clientes.segmentos.map((seg, idx) => (
                <div key={seg.id} className="py-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-[#57534E]">Segmento #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeSegmento(seg.id)}
                      className="inline-flex items-center gap-1 text-xs text-[#78716C] hover:text-[#991B1B] transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Eliminar
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-6 gap-3">
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Tipo de público</label>
                      <select
                        className={inputClass}
                        value={seg.tipoPublico}
                        onChange={(e) =>
                          updateSegmento(seg.id, { tipoPublico: e.target.value as TipoPublico })
                        }
                      >
                        {PUBLICO_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-3">
                      <label className={labelClass}>Descripción del segmento</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={seg.nombre}
                        onChange={(e) => updateSegmento(seg.id, { nombre: e.target.value })}
                        placeholder="Ej. Aprendices e instructores en formación"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Participación (%)</label>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        className={`${inputClass} font-mono tabular-nums`}
                        value={seg.participacionPorcentaje}
                        onChange={(e) =>
                          updateSegmento(seg.id, {
                            participacionPorcentaje: Math.max(
                              0,
                              Math.min(100, Number(e.target.value) || 0),
                            ),
                          })
                        }
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Frecuencia de atención</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={seg.frecuenciaUso}
                        onChange={(e) => updateSegmento(seg.id, { frecuenciaUso: e.target.value })}
                        placeholder="Ej. Diaria / Semanal"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Canal de atención</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={seg.canalAtencion}
                        onChange={(e) => updateSegmento(seg.id, { canalAtencion: e.target.value })}
                        placeholder="Ej. Mostrador principal"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Necesidades clave</label>
                      <input
                        type="text"
                        className={inputClass}
                        value={seg.necesidadesClave}
                        onChange={(e) =>
                          updateSegmento(seg.id, { necesidadesClave: e.target.value })
                        }
                        placeholder="Ej. Precio accesible y rapidez"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
