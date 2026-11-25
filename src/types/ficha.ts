export type TipoOferta = 'Producto' | 'Servicio';

export interface ProductoServicio {
  id: string;
  nombre: string;
  tipo: TipoOferta;
  categoria: string;
  unidadMedida: string;
  descripcion: string;
}

export interface RolPersonal {
  id: string;
  rol: string;
  cantidad: number | null;
  dedicacion: string;
}

export type TipoPublico =
  | 'Aprendices'
  | 'Instructores'
  | 'Funcionarios'
  | 'Trabajadores'
  | 'Comunidad'
  | 'Visitantes'
  | 'Empresas'
  | 'Otro';

export interface SegmentoCliente {
  id: string;
  nombre: string;
  tipoPublico: TipoPublico;
  participacionPorcentaje: number;
  frecuenciaUso: string;
  necesidadesClave: string;
  canalAtencion: string;
}

export interface FichaTecnica {
  id: string;
  codigo: string;
  version: string;
  fechaActualizacion: string;
  sector: string;
  identificacion: {
    nombre: string;
    tipoUnidad: string;
    sedeOEntidad: string;
    direccion: string;
    ciudadDepartamento: string;
    coberturaGeografica: string;
  };
  responsable: {
    nombreCompleto: string;
    cargo: string;
    dependencia: string;
    correo: string;
    telefono: string;
    horarioAtencion: string;
  };
  oferta: {
    propuestaValor: string;
    items: ProductoServicio[];
  };
  tamano: {
    ocultarVolumenOperacion?: boolean;
    clasificacion: string;
    personalDetalle: RolPersonal[];
    capacidadDiaria: string;
    volumenMensual: string;
    infraestructuraM2: string;
    turnosOperacion: string;
    observacionesVolumen: string;
  };
  cadenaSuministro: {
    resumenGeneral: string;
    proveedores: {
      descripcion: string;
      actoresClave: string[];
      frecuenciaAbastecimiento: string;
      criteriosSeleccion: string;
    };
    insumos: {
      descripcion: string;
      principalesInsumos: string[];
      controlCalidad: string;
    };
    produccionTransformacion: {
      descripcion: string;
      procesosClave: string[];
      equipamientoPrincipal: string;
    };
    almacenamiento: {
      descripcion: string;
      condicionesConservacion: string;
      metodoInventario: string;
    };
    distribucion: {
      descripcion: string;
      canalesEntrega: string[];
      tiemposDespacho: string;
    };
  };
  clientes: {
    resumenGeneral: string;
    segmentos: SegmentoCliente[];
  };
}
