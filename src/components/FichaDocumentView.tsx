import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FichaTecnica } from '../types/ficha';
import { hasVariablePersonal, totalPersonal } from '../utils/exportFicha';

interface FichaDocumentViewProps {
  ficha: FichaTecnica;
  compact?: boolean;
}

const SEGMENT_SHADES = [
  'bg-[#14532D]',
  'bg-[#292524]',
  'bg-[#78716C]',
  'bg-[#A8A29E]',
  'bg-[#44403C]',
  'bg-[#D6D3CD]',
];

export const FichaDocumentView: React.FC<FichaDocumentViewProps> = ({ ficha, compact = false }) => {
  const totalStaff = totalPersonal(ficha);
  const variableStaff = hasVariablePersonal(ficha);
  const totalPorcentaje = ficha.clientes.segmentos.reduce(
    (sum, seg) => sum + (Number(seg.participacionPorcentaje) || 0),
    0,
  );

  return (
    <article
      aria-label="Documento oficial de ficha técnica"
      className={`print-sheet bg-white border border-[#E7E5E0] text-[#1C1917] ${
        compact ? 'p-6 sm:p-8' : 'p-8 sm:p-12 lg:p-14'
      }`}
    >
      {/* Cabecera Institucional del Documento */}
      <header className="pb-8 border-b border-[#D6D3CD]">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#57534E] font-mono tabular-nums mb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-[#14532D]">{ficha.codigo || 'FT-001'}</span>
            <span aria-hidden="true">·</span>
            <span>Versión {ficha.version || '1.0'}</span>
            <span aria-hidden="true">·</span>
            <span>Actualización: {ficha.fechaActualizacion || 'Sin fecha'}</span>
          </div>
          <span>{ficha.sector || 'Sector sin especificar'}</span>
        </div>

        <div className="flex items-start justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#57534E] mb-2">
              Ficha Técnica de Caracterización Operativa
            </p>
            <h1 className="font-[var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#1C1917] text-balance leading-[1.15]">
              {ficha.identificacion.nombre || 'Nombre de la unidad o empresa'}
            </h1>
            <p className="mt-2.5 text-sm sm:text-base text-[#57534E]">
              {ficha.identificacion.tipoUnidad || 'Tipo de unidad productiva o de servicio'}
              {ficha.identificacion.ciudadDepartamento
                ? ` — ${ficha.identificacion.ciudadDepartamento}`
                : ''}
            </p>
          </div>

          <div
            className="hidden sm:flex shrink-0 w-12 h-12 border border-[#D6D3CD] items-center justify-center text-[#14532D]"
            aria-hidden="true"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
        </div>
      </header>

      {/* 01 y 02: Identificación y Responsable */}
      <div
        id="sec-identificacion"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-[#E7E5E0] print-break-avoid scroll-mt-24"
      >
        {/* 01. Nombre y Ubicación */}
        <section className="lg:col-span-7">
          <h2 className="font-[var(--font-display)] text-lg sm:text-xl font-semibold text-[#1C1917] mb-4">
            01. Nombre y ubicación
          </h2>
          <dl className="divide-y divide-[#F0EEE9] border-t border-b border-[#F0EEE9] text-sm">
            <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
              <dt className="text-[#57534E] font-medium">Nombre oficial</dt>
              <dd className="sm:col-span-2 text-[#1C1917] font-medium">
                {ficha.identificacion.nombre || '—'}
              </dd>
            </div>
            <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
              <dt className="text-[#57534E] font-medium">Sede o entidad</dt>
              <dd className="sm:col-span-2 text-[#1C1917]">
                {ficha.identificacion.sedeOEntidad || '—'}
              </dd>
            </div>
            <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
              <dt className="text-[#57534E] font-medium">Dirección exacta</dt>
              <dd className="sm:col-span-2 text-[#1C1917]">
                {ficha.identificacion.direccion || '—'}
              </dd>
            </div>
            <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
              <dt className="text-[#57534E] font-medium">Ciudad / Depto.</dt>
              <dd className="sm:col-span-2 text-[#1C1917]">
                {ficha.identificacion.ciudadDepartamento || '—'}
              </dd>
            </div>
            <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
              <dt className="text-[#57534E] font-medium">Cobertura</dt>
              <dd className="sm:col-span-2 text-[#1C1917]">
                {ficha.identificacion.coberturaGeografica || '—'}
              </dd>
            </div>
          </dl>
        </section>

        {/* 02. Responsable o Líder */}
        <section className="lg:col-span-5">
          <h2 className="font-[var(--font-display)] text-lg sm:text-xl font-semibold text-[#1C1917] mb-4">
            02. Responsable o líder
          </h2>
          <dl className="divide-y divide-[#F0EEE9] border-t border-b border-[#F0EEE9] text-sm">
            <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
              <dt className="text-[#57534E] font-medium">Líder a cargo</dt>
              <dd className="sm:col-span-2 text-[#1C1917] font-medium">
                {ficha.responsable.nombreCompleto || '—'}
              </dd>
            </div>
            <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
              <dt className="text-[#57534E] font-medium">Cargo</dt>
              <dd className="sm:col-span-2 text-[#1C1917]">{ficha.responsable.cargo || '—'}</dd>
            </div>
            <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
              <dt className="text-[#57534E] font-medium">Dependencia</dt>
              <dd className="sm:col-span-2 text-[#1C1917]">
                {ficha.responsable.dependencia || '—'}
              </dd>
            </div>
            <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
              <dt className="text-[#57534E] font-medium">Correo</dt>
              <dd className="sm:col-span-2 text-[#1C1917] break-all font-mono text-xs pt-0.5">
                {ficha.responsable.correo || '—'}
              </dd>
            </div>
            <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
              <dt className="text-[#57534E] font-medium">Teléfono</dt>
              <dd className="sm:col-span-2 text-[#1C1917] font-mono text-xs tabular-nums pt-0.5">
                {ficha.responsable.telefono || '—'}
              </dd>
            </div>
            <div className="py-2.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
              <dt className="text-[#57534E] font-medium">Horario</dt>
              <dd className="sm:col-span-2 text-[#1C1917]">
                {ficha.responsable.horarioAtencion || '—'}
              </dd>
            </div>
          </dl>
        </section>
      </div>

      {/* 03. Productos o Servicios Ofrecidos */}
      <section
        id="sec-oferta"
        className="py-8 border-b border-[#E7E5E0] print-break-avoid scroll-mt-24"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
          <h2 className="font-[var(--font-display)] text-lg sm:text-xl font-semibold text-[#1C1917]">
            03. Productos o servicios ofrecidos
          </h2>
          <span className="text-xs font-mono tabular-nums text-[#57534E]">
            {ficha.oferta.items.length} {ficha.oferta.items.length === 1 ? 'ítem registrado' : 'ítems registrados'}
          </span>
        </div>

        {ficha.oferta.propuestaValor && (
          <p className="text-sm text-[#44403C] leading-relaxed max-w-3xl mb-5">
            {ficha.oferta.propuestaValor}
          </p>
        )}

        {ficha.oferta.items.length === 0 ? (
          <p className="text-sm text-[#78716C] italic py-4 border-t border-b border-[#F0EEE9]">
            No hay productos o servicios registrados en esta ficha.
          </p>
        ) : (
          <div className="overflow-x-auto border-t border-[#D6D3CD]">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#E7E5E0] text-xs text-[#57534E] font-medium">
                  <th className="py-2.5 pr-4 font-medium w-24">Tipo</th>
                  <th className="py-2.5 pr-4 font-medium">Producto / Servicio</th>
                  <th className="py-2.5 pr-4 font-medium">Categoría</th>
                  <th className="py-2.5 pr-4 font-medium">Unidad</th>
                  <th className="py-2.5 font-medium">Descripción operativa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EEE9]">
                {ficha.oferta.items.map((item) => (
                  <tr key={item.id} className="align-top">
                    <td className="py-3 pr-4 font-mono text-xs text-[#14532D] font-medium whitespace-nowrap">
                      {item.tipo}
                    </td>
                    <td className="py-3 pr-4 font-medium text-[#1C1917]">
                      {item.nombre || 'Sin nombre'}
                    </td>
                    <td className="py-3 pr-4 text-[#57534E]">{item.categoria || '—'}</td>
                    <td className="py-3 pr-4 text-[#57534E] font-mono text-xs tabular-nums">
                      {item.unidadMedida || '—'}
                    </td>
                    <td className="py-3 text-[#44403C] leading-relaxed">
                      {item.descripcion || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* 04. Tamaño (Personal y opcionalmente Volumen de Operación) */}
      <section
        id="sec-tamano"
        className="py-8 border-b border-[#E7E5E0] print-break-avoid scroll-mt-24"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-5">
          <h2 className="font-[var(--font-display)] text-lg sm:text-xl font-semibold text-[#1C1917]">
            {ficha.tamano.ocultarVolumenOperacion
              ? '04. Tamaño y personal'
              : '04. Tamaño: personal y volumen de operación'}
          </h2>
          <span className="text-xs text-[#57534E]">
            {ficha.tamano.clasificacion || 'Escala operativa sin clasificar'}
          </span>
        </div>

        {/* Franja de 4 métricas clave (solo cuando se incluye volumen de operación) */}
        {!ficha.tamano.ocultarVolumenOperacion && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E7E5E0] divide-y sm:divide-y-0 sm:divide-x divide-[#E7E5E0] bg-[#FAF8F4]/60 mb-6">
            <div className="p-4">
              <p className="text-xs text-[#57534E] mb-1">Personal vinculado</p>
              <p className="font-mono text-xl font-medium text-[#1C1917] tabular-nums">
                {variableStaff
                  ? `${totalStaff} + aprendices`
                  : `${totalStaff} ${totalStaff === 1 ? 'persona' : 'personas'}`}
              </p>
            </div>
            <div className="p-4">
              <p className="text-xs text-[#57534E] mb-1">Capacidad diaria aprox.</p>
              <p className="text-sm font-semibold text-[#1C1917] tabular-nums">
                {ficha.tamano.capacidadDiaria || '—'}
              </p>
            </div>
            <div className="p-4">
              <p className="text-xs text-[#57534E] mb-1">Volumen mensual aprox.</p>
              <p className="text-sm font-semibold text-[#1C1917] tabular-nums">
                {ficha.tamano.volumenMensual || '—'}
              </p>
            </div>
            <div className="p-4">
              <p className="text-xs text-[#57534E] mb-1">Área e infraestructura</p>
              <p className="text-sm font-semibold text-[#1C1917] tabular-nums">
                {ficha.tamano.infraestructuraM2 || '—'}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div
            className={`${
              ficha.tamano.ocultarVolumenOperacion ? 'lg:col-span-12' : 'lg:col-span-7'
            } overflow-x-auto`}
          >
            <table className="w-full text-left border-collapse text-sm border-t border-[#D6D3CD]">
              <thead>
                <tr className="border-b border-[#E7E5E0] text-xs text-[#57534E]">
                  <th className="py-2 pr-4 font-medium">Rol o cargo operativo</th>
                  <th className="py-2 pr-4 font-medium text-right w-32">Cantidad</th>
                  <th className="py-2 font-medium">Dedicación</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0EEE9]">
                {ficha.tamano.personalDetalle.map((per) => (
                  <tr key={per.id}>
                    <td className="py-2.5 pr-4 text-[#1C1917]">{per.rol || 'Rol sin definir'}</td>
                    <td className="py-2.5 pr-4 text-right font-mono tabular-nums text-[#1C1917] font-medium whitespace-nowrap">
                      {per.cantidad === null ? 'Según rotación' : per.cantidad}
                    </td>
                    <td className="py-2.5 text-[#57534E]">{per.dedicacion || '—'}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-[#D6D3CD] font-medium">
                  <td className="py-2.5 pr-4 text-[#1C1917]">Total equipo operativo</td>
                  <td className="py-2.5 pr-4 text-right font-mono tabular-nums text-[#14532D] whitespace-nowrap">
                    {variableStaff ? `${totalStaff} + rotación` : totalStaff}
                  </td>
                  <td className="py-2.5 text-xs text-[#57534E]">
                    {variableStaff ? 'Encargada y aprendices en formación' : 'Personas activas'}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {!ficha.tamano.ocultarVolumenOperacion && (
            <div className="lg:col-span-5 border-t border-[#D6D3CD] pt-3 space-y-3 text-sm">
              <div>
                <p className="text-xs font-medium text-[#57534E]">Régimen de turnos</p>
                <p className="text-[#1C1917] mt-0.5">{ficha.tamano.turnosOperacion || '—'}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#57534E]">Comportamiento de la demanda</p>
                <p className="text-[#44403C] mt-0.5 leading-relaxed">
                  {ficha.tamano.observacionesVolumen || 'Sin observaciones adicionales.'}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 05. Descripción de la Cadena de Suministro */}
      <section id="sec-cadena" className="py-8 border-b border-[#E7E5E0] scroll-mt-24">
        <div className="mb-4">
          <h2 className="font-[var(--font-display)] text-lg sm:text-xl font-semibold text-[#1C1917]">
            05. Descripción de la cadena de suministro
          </h2>
          {ficha.cadenaSuministro.resumenGeneral && (
            <p className="mt-2 text-sm text-[#44403C] leading-relaxed max-w-3xl">
              {ficha.cadenaSuministro.resumenGeneral}
            </p>
          )}
        </div>

        {/* Diagrama secuencial de los 5 eslabones */}
        <div
          aria-label="Flujo de la cadena de suministro"
          className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6 py-3 px-3 bg-[#FAF8F4] border border-[#E7E5E0] text-xs"
        >
          {[
            { num: '5.1', label: 'Proveedores' },
            { num: '5.2', label: 'Insumos' },
            { num: '5.3', label: 'Producción / Transf.' },
            { num: '5.4', label: 'Almacenamiento' },
            { num: '5.5', label: 'Distribución' },
          ].map((stage, idx, arr) => (
            <div key={stage.num} className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="font-mono text-[#14532D] font-medium block">{stage.num}</span>
                <span className="font-medium text-[#1C1917] truncate block">{stage.label}</span>
              </div>
              {idx < arr.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-[#A8A29E] shrink-0 hidden sm:block" />
              )}
            </div>
          ))}
        </div>

        <div className="divide-y divide-[#E7E5E0] border-t border-b border-[#E7E5E0]">
          {/* 5.1 Proveedores */}
          <div className="py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 print-break-avoid">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-[#14532D] font-medium">5.1 Eslabón de origen</p>
              <h3 className="font-semibold text-[#1C1917] text-base mt-0.5">Proveedores</h3>
              <p className="text-xs text-[#57534E] mt-1">
                {ficha.cadenaSuministro.proveedores.frecuenciaAbastecimiento || 'Frecuencia no definida'}
              </p>
            </div>
            <div className="lg:col-span-9 space-y-2.5 text-sm">
              <p className="text-[#1C1917] leading-relaxed">
                {ficha.cadenaSuministro.proveedores.descripcion || '—'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <p className="text-xs font-medium text-[#57534E] mb-1">Actores clave</p>
                  <ul className="space-y-1 text-xs text-[#44403C]">
                    {ficha.cadenaSuministro.proveedores.actoresClave.filter(Boolean).length > 0 ? (
                      ficha.cadenaSuministro.proveedores.actoresClave.filter(Boolean).map((actor, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#14532D] font-mono">–</span>
                          <span>{actor}</span>
                        </li>
                      ))
                    ) : (
                      <li>—</li>
                    )}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#57534E] mb-1">Criterios de selección</p>
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {ficha.cadenaSuministro.proveedores.criteriosSeleccion || '—'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5.2 Insumos */}
          <div className="py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 print-break-avoid">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-[#14532D] font-medium">5.2 Eslabón de entrada</p>
              <h3 className="font-semibold text-[#1C1917] text-base mt-0.5">
                Insumos y materias primas
              </h3>
            </div>
            <div className="lg:col-span-9 space-y-2.5 text-sm">
              <p className="text-[#1C1917] leading-relaxed">
                {ficha.cadenaSuministro.insumos.descripcion || '—'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <p className="text-xs font-medium text-[#57534E] mb-1">Principales insumos</p>
                  <ul className="space-y-1 text-xs text-[#44403C]">
                    {ficha.cadenaSuministro.insumos.principalesInsumos.filter(Boolean).length > 0 ? (
                      ficha.cadenaSuministro.insumos.principalesInsumos.filter(Boolean).map((ins, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#14532D] font-mono">–</span>
                          <span>{ins}</span>
                        </li>
                      ))
                    ) : (
                      <li>—</li>
                    )}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#57534E] mb-1">Control en recepción</p>
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {ficha.cadenaSuministro.insumos.controlCalidad || '—'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5.3 Producción o Transformación */}
          <div className="py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 print-break-avoid">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-[#14532D] font-medium">5.3 Eslabón central</p>
              <h3 className="font-semibold text-[#1C1917] text-base mt-0.5">
                Producción o transformación
              </h3>
            </div>
            <div className="lg:col-span-9 space-y-2.5 text-sm">
              <p className="text-[#1C1917] leading-relaxed">
                {ficha.cadenaSuministro.produccionTransformacion.descripcion || '—'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <p className="text-xs font-medium text-[#57534E] mb-1">Procesos clave</p>
                  <ul className="space-y-1 text-xs text-[#44403C]">
                    {ficha.cadenaSuministro.produccionTransformacion.procesosClave.filter(Boolean).length >
                    0 ? (
                      ficha.cadenaSuministro.produccionTransformacion.procesosClave
                        .filter(Boolean)
                        .map((proc, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-[#14532D] font-mono">–</span>
                            <span>{proc}</span>
                          </li>
                        ))
                    ) : (
                      <li>—</li>
                    )}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#57534E] mb-1">Equipamiento principal</p>
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {ficha.cadenaSuministro.produccionTransformacion.equipamientoPrincipal || '—'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5.4 Almacenamiento */}
          <div className="py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 print-break-avoid">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-[#14532D] font-medium">5.4 Eslabón de resguardo</p>
              <h3 className="font-semibold text-[#1C1917] text-base mt-0.5">Almacenamiento</h3>
            </div>
            <div className="lg:col-span-9 space-y-2.5 text-sm">
              <p className="text-[#1C1917] leading-relaxed">
                {ficha.cadenaSuministro.almacenamiento.descripcion || '—'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <p className="text-xs font-medium text-[#57534E] mb-1">
                    Condiciones de conservación
                  </p>
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {ficha.cadenaSuministro.almacenamiento.condicionesConservacion || '—'}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#57534E] mb-1">Método de inventario</p>
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {ficha.cadenaSuministro.almacenamiento.metodoInventario || '—'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5.5 Distribución */}
          <div className="py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 print-break-avoid">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-[#14532D] font-medium">5.5 Eslabón de entrega</p>
              <h3 className="font-semibold text-[#1C1917] text-base mt-0.5">Distribución</h3>
            </div>
            <div className="lg:col-span-9 space-y-2.5 text-sm">
              <p className="text-[#1C1917] leading-relaxed">
                {ficha.cadenaSuministro.distribucion.descripcion || '—'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <p className="text-xs font-medium text-[#57534E] mb-1">Canales de entrega</p>
                  <ul className="space-y-1 text-xs text-[#44403C]">
                    {ficha.cadenaSuministro.distribucion.canalesEntrega.filter(Boolean).length > 0 ? (
                      ficha.cadenaSuministro.distribucion.canalesEntrega.filter(Boolean).map((canal, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#14532D] font-mono">–</span>
                          <span>{canal}</span>
                        </li>
                      ))
                    ) : (
                      <li>—</li>
                    )}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#57534E] mb-1">Tiempos de despacho</p>
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {ficha.cadenaSuministro.distribucion.tiemposDespacho || '—'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Segmento de Clientes */}
      <section id="sec-clientes" className="pt-8 print-break-avoid scroll-mt-24">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
          <h2 className="font-[var(--font-display)] text-lg sm:text-xl font-semibold text-[#1C1917]">
            06. Segmento de clientes al que atiende
          </h2>
          <span className="text-xs font-mono tabular-nums text-[#57534E]">
            {totalPorcentaje > 0 ? `Suma declarada: ${totalPorcentaje}%` : 'Participación % por definir'}
          </span>
        </div>

        {ficha.clientes.resumenGeneral && (
          <p className="text-sm text-[#44403C] leading-relaxed max-w-3xl mb-5">
            {ficha.clientes.resumenGeneral}
          </p>
        )}

        {/* Barra proporcional con texto explícito */}
        {ficha.clientes.segmentos.length > 0 && totalPorcentaje > 0 && (
          <div className="mb-6">
            <div className="h-2.5 w-full flex overflow-hidden bg-[#F0EEE9]">
              {ficha.clientes.segmentos.map((seg, idx) => {
                const width = Math.max(0, (Number(seg.participacionPorcentaje) / totalPorcentaje) * 100);
                return (
                  <div
                    key={seg.id}
                    style={{ width: `${width}%` }}
                    className={`${SEGMENT_SHADES[idx % SEGMENT_SHADES.length]} h-full`}
                    title={`${seg.tipoPublico}: ${seg.participacionPorcentaje}%`}
                  />
                );
              })}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-2.5 text-xs text-[#57534E]">
              {ficha.clientes.segmentos.map((seg, idx) => (
                <div key={seg.id} className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 inline-block ${SEGMENT_SHADES[idx % SEGMENT_SHADES.length]}`}
                    aria-hidden="true"
                  />
                  <span className="font-medium text-[#1C1917]">{seg.tipoPublico}</span>
                  <span className="font-mono tabular-nums">{seg.participacionPorcentaje}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="overflow-x-auto border-t border-[#D6D3CD]">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#E7E5E0] text-xs text-[#57534E]">
                <th className="py-2.5 pr-4 font-medium">Público objetivo</th>
                <th className="py-2.5 pr-4 font-medium">Descripción del segmento</th>
                <th className="py-2.5 pr-4 font-medium text-right">Part.</th>
                <th className="py-2.5 pr-4 font-medium">Frecuencia</th>
                <th className="py-2.5 pr-4 font-medium">Canal de atención</th>
                <th className="py-2.5 font-medium">Necesidades y expectativas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EEE9]">
              {ficha.clientes.segmentos.map((seg) => (
                <tr key={seg.id} className="align-top">
                  <td className="py-3 pr-4 font-medium text-[#14532D] whitespace-nowrap">
                    {seg.tipoPublico}
                  </td>
                  <td className="py-3 pr-4 font-medium text-[#1C1917]">
                    {seg.nombre || '—'}
                  </td>
                  <td className="py-3 pr-4 text-right font-mono tabular-nums text-[#1C1917] whitespace-nowrap">
                    {seg.participacionPorcentaje > 0 ? `${seg.participacionPorcentaje}%` : 'Por definir'}
                  </td>
                  <td className="py-3 pr-4 text-[#57534E]">{seg.frecuenciaUso || '—'}</td>
                  <td className="py-3 pr-4 text-[#57534E]">{seg.canalAtencion || '—'}</td>
                  <td className="py-3 text-[#44403C] leading-relaxed">
                    {seg.necesidadesClave || '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pie formal del documento */}
      <footer className="mt-10 pt-5 border-t border-[#D6D3CD] flex flex-wrap items-center justify-between gap-4 text-xs text-[#78716C]">
        <span>
          Documento generado para caracterización operativa · {ficha.identificacion.sedeOEntidad || 'Unidad operativa'}
        </span>
        <span className="font-mono tabular-nums">
          {ficha.codigo || 'FT-001'} · Rev. {ficha.version || '1.0'}
        </span>
      </footer>
    </article>
  );
};
