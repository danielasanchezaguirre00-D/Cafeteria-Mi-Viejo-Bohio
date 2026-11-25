import { FichaTecnica } from '../types/ficha';

export function totalPersonal(ficha: FichaTecnica): number {
  return ficha.tamano.personalDetalle.reduce((acc, item) => acc + (Number(item.cantidad) || 0), 0);
}

export function hasVariablePersonal(ficha: FichaTecnica): boolean {
  return ficha.tamano.personalDetalle.some((item) => item.cantidad === null);
}

export function formatFichaAsMarkdown(ficha: FichaTecnica): string {
  const totalStaff = totalPersonal(ficha);
  const variableStaff = hasVariablePersonal(ficha);
  const totalLabel = variableStaff ? `${totalStaff} + rotación variable` : `${totalStaff} personas`;

  const lines: string[] = [
    `# FICHA TÉCNICA OPERATIVA: ${ficha.identificacion.nombre || 'Sin nombre'}`,
    '',
    `- **Código:** ${ficha.codigo || '—'} · **Versión:** ${ficha.version || '1.0'} · **Actualización:** ${ficha.fechaActualizacion || '—'}`,
    `- **Sector:** ${ficha.sector || '—'}`,
    '',
    '## 1. Nombre y Ubicación',
    `- **Nombre de la unidad / empresa:** ${ficha.identificacion.nombre || '—'}`,
    `- **Tipo de unidad:** ${ficha.identificacion.tipoUnidad || '—'}`,
    `- **Sede o entidad:** ${ficha.identificacion.sedeOEntidad || '—'}`,
    `- **Dirección exacta:** ${ficha.identificacion.direccion || '—'}`,
    `- **Ciudad / Departamento:** ${ficha.identificacion.ciudadDepartamento || '—'}`,
    `- **Cobertura geográfica:** ${ficha.identificacion.coberturaGeografica || '—'}`,
    '',
    '## 2. Responsable o Líder',
    `- **Nombre completo:** ${ficha.responsable.nombreCompleto || '—'}`,
    `- **Cargo:** ${ficha.responsable.cargo || '—'}`,
    `- **Dependencia / Área:** ${ficha.responsable.dependencia || '—'}`,
    `- **Correo electrónico:** ${ficha.responsable.correo || '—'}`,
    `- **Teléfono / Extensión:** ${ficha.responsable.telefono || '—'}`,
    `- **Horario de atención:** ${ficha.responsable.horarioAtencion || '—'}`,
    '',
    '## 3. Productos o Servicios Ofrecidos',
    ficha.oferta.propuestaValor ? `> ${ficha.oferta.propuestaValor}\n` : '',
    '| Tipo | Producto / Servicio | Categoría | Unidad | Descripción |',
    '| :--- | :--- | :--- | :--- | :--- |',
    ...ficha.oferta.items.map(
      (item) =>
        `| ${item.tipo} | ${item.nombre || '—'} | ${item.categoria || '—'} | ${item.unidadMedida || '—'} | ${item.descripcion || '—'} |`,
    ),
    '',
    ficha.tamano.ocultarVolumenOperacion
      ? '## 4. Tamaño y Personal'
      : '## 4. Tamaño (Personal y Volumen de Operación)',
    `- **Clasificación:** ${ficha.tamano.clasificacion || '—'}`,
    `- **Personal vinculado:** ${totalLabel}`,
    ...(ficha.tamano.ocultarVolumenOperacion
      ? []
      : [
          `- **Capacidad diaria estimada:** ${ficha.tamano.capacidadDiaria || '—'}`,
          `- **Volumen mensual aproximado:** ${ficha.tamano.volumenMensual || '—'}`,
          `- **Infraestructura:** ${ficha.tamano.infraestructuraM2 || '—'}`,
          `- **Turnos de operación:** ${ficha.tamano.turnosOperacion || '—'}`,
          ficha.tamano.observacionesVolumen ? `- **Observaciones:** ${ficha.tamano.observacionesVolumen}` : '',
        ]),
    '',
    '### Distribución del Personal',
    ...ficha.tamano.personalDetalle.map(
      (r) =>
        `- **${r.rol || 'Rol sin definir'}:** ${
          r.cantidad === null ? 'Según rotación' : `${r.cantidad} persona(s)`
        } (${r.dedicacion || '—'})`,
    ),
    '',
    '## 5. Descripción de la Cadena de Suministro',
    ficha.cadenaSuministro.resumenGeneral || '',
    '',
    '### 5.1 Proveedores',
    ficha.cadenaSuministro.proveedores.descripcion || '—',
    `- **Actores clave:** ${ficha.cadenaSuministro.proveedores.actoresClave.filter(Boolean).join('; ') || '—'}`,
    `- **Frecuencia de abastecimiento:** ${ficha.cadenaSuministro.proveedores.frecuenciaAbastecimiento || '—'}`,
    `- **Criterios de selección:** ${ficha.cadenaSuministro.proveedores.criteriosSeleccion || '—'}`,
    '',
    '### 5.2 Insumos y Materias Primas',
    ficha.cadenaSuministro.insumos.descripcion || '—',
    `- **Principales insumos:** ${ficha.cadenaSuministro.insumos.principalesInsumos.filter(Boolean).join('; ') || '—'}`,
    `- **Control de calidad en recepción:** ${ficha.cadenaSuministro.insumos.controlCalidad || '—'}`,
    '',
    '### 5.3 Producción o Transformación',
    ficha.cadenaSuministro.produccionTransformacion.descripcion || '—',
    `- **Procesos clave:** ${ficha.cadenaSuministro.produccionTransformacion.procesosClave.filter(Boolean).join('; ') || '—'}`,
    `- **Equipamiento principal:** ${ficha.cadenaSuministro.produccionTransformacion.equipamientoPrincipal || '—'}`,
    '',
    '### 5.4 Almacenamiento',
    ficha.cadenaSuministro.almacenamiento.descripcion || '—',
    `- **Condiciones de conservación:** ${ficha.cadenaSuministro.almacenamiento.condicionesConservacion || '—'}`,
    `- **Método de inventario:** ${ficha.cadenaSuministro.almacenamiento.metodoInventario || '—'}`,
    '',
    '### 5.5 Distribución',
    ficha.cadenaSuministro.distribucion.descripcion || '—',
    `- **Canales de entrega:** ${ficha.cadenaSuministro.distribucion.canalesEntrega.filter(Boolean).join('; ') || '—'}`,
    `- **Tiempos de despacho:** ${ficha.cadenaSuministro.distribucion.tiemposDespacho || '—'}`,
    '',
    '## 6. Segmento de Clientes que Atiende',
    ficha.clientes.resumenGeneral || '',
    '',
    '| Segmento / Público | Tipo | Participación | Frecuencia | Canal de Atención | Necesidades Clave |',
    '| :--- | :--- | :---: | :--- | :--- | :--- |',
    ...ficha.clientes.segmentos.map(
      (s) =>
        `| ${s.nombre || '—'} | ${s.tipoPublico} | ${s.participacionPorcentaje}% | ${s.frecuenciaUso || '—'} | ${s.canalAtencion || '—'} | ${s.necesidadesClave || '—'} |`,
    ),
  ];

  return lines.filter((line) => line !== undefined).join('\n');
}

export function downloadTextFile(filename: string, content: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
