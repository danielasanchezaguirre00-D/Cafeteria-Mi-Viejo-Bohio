import { FichaTecnica } from '../types/ficha';

export const PRESET_FICHAS: FichaTecnica[] = [
  {
    id: 'cafe-mi-viejo-bohio',
    codigo: 'FT-BAR-001',
    version: '1.1',
    fechaActualizacion: '2026-11-24',
    sector: 'Servicios de Barismo y Cafetería Especializada',
    identificacion: {
      nombre: 'Café Mi Viejo Bohío',
      tipoUnidad: 'Quiosco de café — Programa Técnico en Servicios de Barismo',
      sedeOEntidad: 'Centro Agropecuario de Buga — SENA',
      direccion: 'Quiosco del Centro Agropecuario de Buga',
      ciudadDepartamento: 'Guadalajara de Buga, Valle del Cauca',
      coberturaGeografica:
        'Exclusivamente dentro del Centro Agropecuario de Buga (sin ventas externas ni domicilios)',
    },
    responsable: {
      nombreCompleto: 'Ana Ramírez',
      cargo: 'Encargada · Programa Técnico en Servicios de Barismo',
      dependencia: 'Programa Técnico en Servicios de Barismo — Centro Agropecuario de Buga',
      correo: 'No disponible',
      telefono: 'No disponible',
      horarioAtencion: 'Jueves y viernes de 7:00 am a 12:00 pm',
    },
    oferta: {
      propuestaValor:
        'Preparación de bebidas calientes y frías a base de café de origen y acompañamientos artesanales en el quiosco del Centro Agropecuario de Buga, con precios desde $2.500 hasta $10.000 pesos.',
      items: [
        {
          id: 'mvb-1',
          nombre: 'Cafés calientes preparados',
          tipo: 'Producto',
          categoria: 'Bebidas calientes de café',
          unidadMedida: 'Taza / Vaso · $2.500 – $10.000',
          descripcion: 'Americano, espresso, capuchino y café filtrado preparados al momento.',
        },
        {
          id: 'mvb-2',
          nombre: 'Bebidas frías y especiales de café',
          tipo: 'Producto',
          categoria: 'Bebidas frías de café',
          unidadMedida: 'Vaso · $2.500 – $10.000',
          descripcion: 'Malteadas, frappé de café y limonada de café.',
        },
        {
          id: 'mvb-3',
          nombre: 'Tortas artesanales',
          tipo: 'Producto',
          categoria: 'Repostería y acompañamiento',
          unidadMedida: 'Porción · $2.500 – $10.000',
          descripcion: 'Tortas elaboradas por una aprendiz de cocina del centro.',
        },
        {
          id: 'mvb-4',
          nombre: 'Servicio de barismo en quiosco',
          tipo: 'Servicio',
          categoria: 'Atención en punto',
          unidadMedida: 'Atención presencial',
          descripcion:
            'Preparación y venta directa en el quiosco del Centro Agropecuario de Buga por aprendices en formación.',
        },
      ],
    },
    tamano: {
      ocultarVolumenOperacion: true,
      clasificacion: 'Punto formativo en quiosco (encargada y aprendices en formación)',
      personalDetalle: [
        {
          id: 'mvb-p1',
          rol: 'Encargada del punto (Ana Ramírez)',
          cantidad: 1,
          dedicacion: 'Responsable y dirección del programa en el quiosco',
        },
        {
          id: 'mvb-p2',
          rol: 'Aprendices (Técnico en Servicios de Barismo)',
          cantidad: null,
          dedicacion: 'Atención, preparación y venta mientras aprenden (jueves y viernes de 7:00 am a 12:00 pm)',
        },
      ],
      capacidadDiaria: '',
      volumenMensual: '',
      infraestructuraM2: '',
      turnosOperacion: '',
      observacionesVolumen: '',
    },
    cadenaSuministro: {
      resumenGeneral:
        'El proveedor fijo es la Escuela Nacional de la Calidad del Café (SENA de Armenia), donde cultivan y realizan todo el proceso al café hasta enviarlo listo para iniciar la preparación en el quiosco del Centro Agropecuario de Buga.',
      proveedores: {
        descripcion:
          'Proveedor fijo de café: Escuela Nacional de la Calidad del Café (SENA de Armenia), quienes cultivan el café y le realizan todo el procesamiento previo para enviarlo listo para preparar. Los demás insumos como la leche provienen de proveedor gourmet y las tortas son elaboradas por una aprendiz de cocina.',
        actoresClave: [
          'Proveedor fijo de café: Escuela Nacional de la Calidad del Café — SENA de Armenia (cultivo y proceso completo)',
          'Orígenes manejados: Café La Sirenita de Armenia, cafés del Quindío y café de Águila Bache',
          'Proveedor Gourmet (leche y otros productos complementarios)',
          'Aprendiz de cocina del centro (elaboración de tortas)',
        ],
        frecuenciaAbastecimiento: 'Proveedor fijo: Escuela Nacional de la Calidad del Café (SENA Armenia)',
        criteriosSeleccion:
          'Café cultivado y procesado íntegramente por el SENA Armenia listo para preparación; perfiles sensoriales definidos (Quindío más dulce/aromático a panela y Águila Bache más ácido y frutal).',
      },
      insumos: {
        descripcion:
          'Café procesado y listo para preparación enviado desde Armenia, leche de línea gourmet y tortas artesanales.',
        principalesInsumos: [
          'Café La Sirenita de Armenia (listo para preparar)',
          'Cafés del Quindío (perfil más aromático, dulce y con notas a panela)',
          'Café de Águila Bache (perfil más ácido y frutal)',
          'Leche y otros productos complementarios de Gourmet',
          'Tortas elaboradas por aprendiz de cocina',
        ],
        controlCalidad:
          'Todo el cultivo y proceso previo del café se realiza en la Escuela Nacional de la Calidad del Café (SENA de Armenia), desde donde lo envían listo para iniciar la preparación.',
      },
      produccionTransformacion: {
        descripcion:
          'En el quiosco del Centro Agropecuario de Buga los aprendices, guiados por la encargada, realizan la transformación final del café ya procesado en bebidas preparadas mientras aprenden y atienden al público.',
        procesosClave: [
          'Preparación de cafés calientes: americano, espresso, capuchino y café filtrado',
          'Preparación de bebidas frías: malteadas, frappé de café y limonada de café',
          'Servicio y venta directa en barra por parte de los aprendices',
        ],
        equipamientoPrincipal:
          'Equipamiento de barismo instalado en el quiosco del Centro Agropecuario de Buga.',
      },
      almacenamiento: {
        descripcion:
          'Resguardo en el quiosco del Centro Agropecuario de Buga para el café listo para preparación, insumos lácteos y tortas.',
        condicionesConservacion:
          'Café almacenado en condiciones secas y protegidas; leche refrigerada y tortas protegidas para venta.',
        metodoInventario: 'No conocido (dato no suministrado en la entrevista).',
      },
      distribucion: {
        descripcion:
          'Venta y entrega exclusivamente presencial en el quiosco del Centro Agropecuario de Buga los jueves y viernes de 7:00 am a 12:00 pm, con precios entre $2.500 y $10.000 pesos. No realizan ventas fuera del SENA ni manejan ningún tipo de domicilio (ni dentro ni fuera del centro).',
        canalesEntrega: [
          'Atención presencial directa en el quiosco del Centro Agropecuario de Buga',
          'No realizan ventas fuera del SENA',
          'No manejan servicio a domicilio (ni dentro ni fuera del centro agropecuario)',
        ],
        tiemposDespacho: 'Preparación y entrega inmediata al momento del pedido en el quiosco.',
      },
    },
    clientes: {
      resumenGeneral:
        'Atiende exclusivamente dentro del Centro Agropecuario de Buga a aprendices, instructores y trabajadores.',
      segmentos: [
        {
          id: 'mvb-s1',
          nombre: 'Aprendices del Centro Agropecuario de Buga',
          tipoPublico: 'Aprendices',
          participacionPorcentaje: 0,
          frecuenciaUso: 'Jueves y viernes (7:00 am a 12:00 pm)',
          necesidadesClave: 'Cafés preparados, bebidas frías y tortas entre $2.500 y $10.000 pesos.',
          canalAtencion: 'Quiosco del Centro Agropecuario de Buga',
        },
        {
          id: 'mvb-s2',
          nombre: 'Instructores del centro y del programa',
          tipoPublico: 'Instructores',
          participacionPorcentaje: 0,
          frecuenciaUso: 'Jueves y viernes (7:00 am a 12:00 pm)',
          necesidadesClave: 'Café filtrado, espresso, americano y capuchino durante la jornada.',
          canalAtencion: 'Quiosco del Centro Agropecuario de Buga',
        },
        {
          id: 'mvb-s3',
          nombre: 'Trabajadores del Centro Agropecuario de Buga',
          tipoPublico: 'Trabajadores',
          participacionPorcentaje: 0,
          frecuenciaUso: 'Jueves y viernes (7:00 am a 12:00 pm)',
          necesidadesClave: 'Acceso rápido a bebidas calientes, frías y acompañamientos en el punto.',
          canalAtencion: 'Quiosco del Centro Agropecuario de Buga',
        },
      ],
    },
  },
  {
    id: 'cafeteria-institucional',
    codigo: 'FT-OPE-001',
    version: '1.2',
    fechaActualizacion: '2026-11-24',
    sector: 'Servicios de Alimentación y Gastronomía Institucional',
    identificacion: {
      nombre: 'Cafetería Central Punto Verde — Unidad de Bienestar y Servicio',
      tipoUnidad: 'Unidad de Servicio Gastronómico Institucional',
      sedeOEntidad: 'Centro de Formación Agroindustrial y Tecnológica',
      direccion: 'Bloque B, Primer Nivel — Plazoleta Central, Kilómetro 4 Vía Principal',
      ciudadDepartamento: 'Armenia, Quindío',
      coberturaGeografica: 'Campus principal, auditorios y eventos institucionales locales',
    },
    responsable: {
      nombreCompleto: 'Marta Lucía Restrepo Giraldo',
      cargo: 'Líder Operativa y Coordinadora de Servicio',
      dependencia: 'Subdirección Administrativa y Bienestar al Aprendiz',
      correo: 'cafeteria.puntoverde@institucion.edu.co',
      telefono: '+57 (606) 745 8210 · Ext. 142',
      horarioAtencion: 'Lunes a viernes 06:30 – 19:30 · Sábados 07:30 – 14:00',
    },
    oferta: {
      propuestaValor:
        'Alimentación balanceada, inocua y a precios accesibles para la jornada académica y laboral, integrando prácticas de aprovechamiento de insumos locales y atención ágil en horas pico.',
      items: [
        {
          id: 'prod-1',
          nombre: 'Menú Ejecutivo y Almuerzo Balanceado',
          tipo: 'Producto',
          categoria: 'Alimentación principal',
          unidadMedida: 'Ración / Plato servido',
          descripcion:
            'Proteína, carbohidrato, guarnición de vegetales frescos, sopa del día y bebida natural sin azúcar añadida.',
        },
        {
          id: 'prod-2',
          nombre: 'Desayunos y Medias Nueves Saludables',
          tipo: 'Producto',
          categoria: 'Panadería y cafetería',
          unidadMedida: 'Combo / Porción',
          descripcion:
            'Caldos, huevos al gusto, arepas artesanales, sándwiches integrales, frutas picadas y bebidas calientes.',
        },
        {
          id: 'prod-3',
          nombre: 'Cafetería de Especialidad y Bebidas Frías',
          tipo: 'Producto',
          categoria: 'Bebidas',
          unidadMedida: 'Vaso 8 oz – 12 oz',
          descripcion:
            'Café de origen regional preparado en espresso o filtrado, aromáticas naturales y jugos en pulpa.',
        },
        {
          id: 'serv-1',
          nombre: 'Servicio de Refrigerios y Catering para Eventos',
          tipo: 'Servicio',
          categoria: 'Atención institucional',
          unidadMedida: 'Evento / Paquete por asistente',
          descripcion:
            'Montaje y entrega programada de estaciones de café y refrigerios para jornadas académicas, comités y visitas técnicas.',
        },
      ],
    },
    tamano: {
      clasificacion: 'Mediana operación institucional (12 colaboradores)',
      personalDetalle: [
        {
          id: 'per-1',
          rol: 'Líder operativa y control de calidad',
          cantidad: 1,
          dedicacion: 'Tiempo completo',
        },
        {
          id: 'per-2',
          rol: 'Cocineros y auxiliares de preparación',
          cantidad: 4,
          dedicacion: 'Tiempo completo (2 turnos)',
        },
        {
          id: 'per-3',
          rol: 'Auxiliares de barra, caja y despacho',
          cantidad: 4,
          dedicacion: 'Tiempo completo',
        },
        {
          id: 'per-4',
          rol: 'Personal de lavado, aseo y desinfección',
          cantidad: 2,
          dedicacion: 'Tiempo completo',
        },
        {
          id: 'per-5',
          rol: 'Aprendiz en etapa productiva (Gastronomía)',
          cantidad: 1,
          dedicacion: 'Media jornada rotativa',
        },
      ],
      capacidadDiaria: '420 – 480 raciones y transacciones diarias',
      volumenMensual: '9.500 – 10.500 servicios mensuales (22 días hábiles)',
      infraestructuraM2: '145 m² (cocina caliente, cuarto frío, barra y zona de mesas)',
      turnosOperacion: '2 turnos escalonados (mañana y tarde)',
      observacionesVolumen:
        'La mayor demanda se concentra entre las 09:30–10:15 (descanso mañana) y 12:00–13:45 (franja de almuerzo).',
    },
    cadenaSuministro: {
      resumenGeneral:
        'Cadena corta orientada a proveedores regionales certificados, trazabilidad en recepción de perecederos, transformación bajo BPM (Buenas Prácticas de Manufactura) y entrega directa en punto.',
      proveedores: {
        descripcion:
          'Red de 14 proveedores activos entre asociaciones agropecuarias locales, distribuidores mayoristas de abarrotes, planta cárnica certificada y tostadora regional de café.',
        actoresClave: [
          'Asociación Hortofrutícola del Quindío (frutas y verduras frescas)',
          'Distribuidora Central de Abarrotes S.A.S. (granos, aceites y secos)',
          'Planta Cárnica y Láctea Regional con certificación INVIMA',
          'Unidad Productiva de Panadería del Centro (panadería y repostería)',
        ],
        frecuenciaAbastecimiento: 'Perecederos 3 veces/semana · Secos y envases quincenal',
        criteriosSeleccion:
          'Registro sanitario vigente, puntualidad en cadena de frío, precio competitivo y proximidad geográfica.',
      },
      insumos: {
        descripcion:
          'Recepción programada en muelle de servicio con verificación de peso, temperatura de llegada, fechas de vencimiento y estado organoléptico antes del ingreso a inventario.',
        principalesInsumos: [
          'Proteínas frescas (pollo, res, cerdo y huevo)',
          'Frutas, hortalizas, tubérculos y pulpas naturales',
          'Cereales, leguminosas, harinas y café tostado en grano',
          'Empaques biodegradables, servilletas y productos de desinfección grado alimentario',
        ],
        controlCalidad:
          'Planilla diaria de recepción, termómetro de punción calibrado (≤ 4 °C refrigerados / ≤ -18 °C congelados) y rechazo inmediato de lotes no conformes.',
      },
      produccionTransformacion: {
        descripcion:
          'Preparación diaria por lotes estandarizados siguiendo recetas estándar, separación estricta de áreas crudas y cocidas, y control de temperaturas de cocción y mantenimiento.',
        procesosClave: [
          'Lavado, desinfección y prealistamiento (mise en place) de vegetales',
          'Cocción programada en cocina caliente y hornos mixtos',
          'Porcionado estandarizado y emplatado o empaque para llevar',
          'Preparación en vivo de bebidas calientes y frías en barra',
        ],
        equipamientoPrincipal:
          'Estufa industrial de 6 puestos, horno convector, marmita basculante, máquina de espresso de 2 grupos y baño maría de conservación.',
      },
      almacenamiento: {
        descripcion:
          'Almacenamiento segmentado en tres zonas independientes con control diario de humedad, temperatura y rotación estricta bajo método PEPS (Primero en Entrar, Primero en Salir).',
        condicionesConservacion:
          'Cuarto frío de lácteos/cárnicos (0 °C a 4 °C), congelador (-18 °C), bodega seca ventilada sobre estibas plásticas.',
        metodoInventario: 'Kardex digital diario y conteo físico semanal con stock mínimo de seguridad de 4 días.',
      },
      distribucion: {
        descripcion:
          'Entrega inmediata al consumidor final en barra de autoservicio asistido y distribución interna en carros térmicos para eventos y salas de juntas dentro del campus.',
        canalesEntrega: [
          'Mostrador principal de atención presencial con doble línea de caja',
          'Punto exprés para bebidas y panadería en horas de descanso',
          'Entrega programada puerta a puerta dentro del centro para catering institucional',
        ],
        tiemposDespacho: 'Atención en barra < 3 minutos · Catering programado con 24 h de anticipación',
      },
    },
    clientes: {
      resumenGeneral:
        'Atiende a la comunidad interna y externa vinculada a las actividades formativas, administrativas y de extensión del centro.',
      segmentos: [
        {
          id: 'seg-1',
          nombre: 'Aprendices e instructores en formación',
          tipoPublico: 'Aprendices',
          participacionPorcentaje: 62,
          frecuenciaUso: 'Diaria (lunes a sábado)',
          necesidadesClave: 'Menús nutritivos, porciones completas, precios subsidiados o accesibles y rapidez en descansos cortos.',
          canalAtencion: 'Mostrador principal y punto exprés',
        },
        {
          id: 'seg-2',
          nombre: 'Funcionarios administrativos y personal de planta',
          tipoPublico: 'Funcionarios',
          participacionPorcentaje: 21,
          frecuenciaUso: 'Diaria (lunes a viernes)',
          necesidadesClave: 'Opciones ejecutivas variadas, café de especialidad y servicio ágil entre reuniones.',
          canalAtencion: 'Mostrador principal y pedidos programados',
        },
        {
          id: 'seg-3',
          nombre: 'Comunidad aledaña y familias de egresados',
          tipoPublico: 'Comunidad',
          participacionPorcentaje: 10,
          frecuenciaUso: 'Semanal o por jornadas abiertas',
          necesidadesClave: 'Acceso a productos frescos de calidad y espacios acogedores durante ferias o trámites.',
          canalAtencion: 'Punto exprés y zona de atención externa',
        },
        {
          id: 'seg-4',
          nombre: 'Visitantes, auditores y delegaciones externas',
          tipoPublico: 'Visitantes',
          participacionPorcentaje: 7,
          frecuenciaUso: 'Ocasional / por eventos',
          necesidadesClave: 'Refrigerios institucionales, presentación impecable y atención protocolaria en auditorios.',
          canalAtencion: 'Catering interno y sala de juntas',
        },
      ],
    },
  },
  {
    id: 'panaderia-escuela',
    codigo: 'FT-PRO-004',
    version: '1.0',
    fechaActualizacion: '2026-11-24',
    sector: 'Transformación Agroindustrial — Panificación',
    identificacion: {
      nombre: 'Taller de Panificación y Repostería — Espiga Real',
      tipoUnidad: 'Unidad Productiva Didáctica',
      sedeOEntidad: 'Complejo Tecnológico de Alimentos',
      direccion: 'Nave Industrial 3, Laboratorio de Cereales',
      ciudadDepartamento: 'Manizales, Caldas',
      coberturaGeografica: 'Campus universitario, puntos de venta propios y convenios locales',
    },
    responsable: {
      nombreCompleto: 'Carlos Andrés Mejía Osorio',
      cargo: 'Instructor Líder de Planta de Panificación',
      dependencia: 'Coordinación de Unidades Productivas y Agroindustria',
      correo: 'espigareal@centroagro.edu.co',
      telefono: '+57 (606) 881 4400 · Ext. 215',
      horarioAtencion: 'Lunes a viernes 06:00 – 16:00',
    },
    oferta: {
      propuestaValor:
        'Productos horneados de fermentación controlada que combinan formación práctica de aprendices con abastecimiento institucional y venta directa al público.',
      items: [
        {
          id: 'pan-1',
          nombre: 'Pan Funcional Integral y Masa Madre',
          tipo: 'Producto',
          categoria: 'Panadería artesanal',
          unidadMedida: 'Unidad 450 g',
          descripcion: 'Hogazas con fermentación de 18 horas, semillas andinas y cero conservantes artificiales.',
        },
        {
          id: 'pan-2',
          nombre: 'Línea de Galletería y Pasabocas Salados',
          tipo: 'Producto',
          categoria: 'Repostería institucional',
          unidadMedida: 'Bandeja × 24 unidades',
          descripcion: 'Palitos de queso, almojábanas, croissants y galletas de avena para cafeterías y eventos.',
        },
        {
          id: 'pan-3',
          nombre: 'Maquila y Pruebas de Formulación de Harinas',
          tipo: 'Servicio',
          categoria: 'Asistencia técnica',
          unidadMedida: 'Lote de prueba (10 kg)',
          descripcion: 'Desarrollo de fórmulas panificables para emprendedores locales y validación de vida útil.',
        },
      ],
    },
    tamano: {
      clasificacion: 'Pequeña planta semi-industrial (8 personas)',
      personalDetalle: [
        { id: 'pp-1', rol: 'Instructor líder y jefe de planta', cantidad: 1, dedicacion: 'Tiempo completo' },
        { id: 'pp-2', rol: 'Maestros panaderos operarios', cantidad: 2, dedicacion: 'Tiempo completo' },
        { id: 'pp-3', rol: 'Aprendices en rotación formativa', cantidad: 4, dedicacion: 'Jornada académica' },
        { id: 'pp-4', rol: 'Auxiliar de empaque y despacho', cantidad: 1, dedicacion: 'Tiempo completo' },
      ],
      capacidadDiaria: '650 – 800 piezas horneadas por jornada',
      volumenMensual: '14.500 unidades / ~3.2 toneladas de masa procesada',
      infraestructuraM2: '190 m² (área de pesaje, amasado, cuarto de crecimiento y horneo)',
      turnosOperacion: '1 turno productivo continuo (05:30 – 13:30) + limpieza',
      observacionesVolumen:
        'Incremento del 25% en temporadas de ferias empresariales y semanas de inducción académica.',
    },
    cadenaSuministro: {
      resumenGeneral:
        'Abastecimiento centralizado de harinas fortificadas y lácteos frescos, transformación por lotes trazables y distribución directa sin intermediarios.',
      proveedores: {
        descripcion:
          'Alianza con 6 proveedores principales: molinos harineros nacionales, productores lácteos locales y distribuidores de empaque alimentario.',
        actoresClave: [
          'Molinos del Magdalena (harinas de trigo y centeno)',
          'Cooperativa Lechera de Caldas (mantequilla, leche y queso fresco)',
          'Empaques EcoPack (bolsas kraft microperforadas)',
        ],
        frecuenciaAbastecimiento: 'Lácteos cada 48 horas · Harinas y secos mensual',
        criteriosSeleccion: 'Certificado de análisis de lote, estabilidad en gluten/humedad y cumplimiento de entregas.',
      },
      insumos: {
        descripcion:
          'Inspección de humedad en harinas, pureza de levaduras y verificación de temperatura en grasas y quesos.',
        principalesInsumos: [
          'Harina de trigo fortificada y harinas integrales',
          'Mantequilla sin sal, queso campesino y huevos',
          'Levaduras frescas, masa madre activa y mejoradores naturales',
        ],
        controlCalidad: 'Tamizado previo al pesaje y registro de lote por bache de producción.',
      },
      produccionTransformacion: {
        descripcion:
          'Flujo lineal: formulación, amasado en espiral, división, formado, fermentación controlada y horneo rotativo.',
        procesosClave: [
          'Pesaje exacto por fórmula porcentual panadera',
          'Fermentación en cámara a 28 °C y 75% de humedad relativa',
          'Horneo por convección y enfriamiento en escabiladeros',
        ],
        equipamientoPrincipal:
          'Amasadora espiral de 50 kg, divisora hidráulica, cámara de fermentación y 2 hornos rotativos de 18 latas.',
      },
      almacenamiento: {
        descripcion:
          'Bodega climatizada para harinas sobre estibas a 15 cm del piso y exhibición fresca de producto terminado en estantería cerrada.',
        condicionesConservacion: 'Secos a < 22 °C y humedad < 60%; producto horneado rotado en menos de 24 horas.',
        metodoInventario: 'Control de mermas por bache y registro PEPS de materia prima.',
      },
      distribucion: {
        descripcion:
          'Entrega temprana a cafeterías del campus, punto de venta propio en portería y pedidos institucionales.',
        canalesEntrega: [
          'Vitrina de venta directa en bloque administrativo',
          'Abastecimiento B2B interno a cafeterías del centro',
          'Entregas a emprendimientos aliados en la ciudad',
        ],
        tiemposDespacho: 'Primer despacho a las 07:15 a. m. y segundo corte a las 11:30 a. m.',
      },
    },
    clientes: {
      resumenGeneral:
        'Equilibrio entre consumo diario interno (aprendices y funcionarios) y compra de comunidad externa atraída por panadería artesanal.',
      segmentos: [
        {
          id: 'ps-1',
          nombre: 'Aprendices del complejo formativo',
          tipoPublico: 'Aprendices',
          participacionPorcentaje: 45,
          frecuenciaUso: 'Diaria',
          necesidadesClave: 'Productos frescos, económicos y energéticos para la jornada de taller.',
          canalAtencion: 'Cafeterías del campus',
        },
        {
          id: 'ps-2',
          nombre: 'Funcionarios e instructores',
          tipoPublico: 'Funcionarios',
          participacionPorcentaje: 25,
          frecuenciaUso: '3 a 5 veces por semana',
          necesidadesClave: 'Panes funcionales, integrales y presentaciones familiares para llevar.',
          canalAtencion: 'Vitrina de venta directa',
        },
        {
          id: 'ps-3',
          nombre: 'Comunidad del sector y vecinos',
          tipoPublico: 'Comunidad',
          participacionPorcentaje: 20,
          frecuenciaUso: 'Semanal',
          necesidadesClave: 'Pan artesanal sin conservantes a precio justo.',
          canalAtencion: 'Punto de portería',
        },
        {
          id: 'ps-4',
          nombre: 'Visitantes y delegaciones técnicas',
          tipoPublico: 'Visitantes',
          participacionPorcentaje: 10,
          frecuenciaUso: 'Por eventos y recorridos',
          necesidadesClave: 'Muestras gastronómicas y refrigerios institucionales.',
          canalAtencion: 'Pedidos programados',
        },
      ],
    },
  },
  {
    id: 'confeccion-dotacion',
    codigo: 'FT-TEX-009',
    version: '1.1',
    fechaActualizacion: '2026-11-24',
    sector: 'Manufactura Textil y Dotación Institucional',
    identificacion: {
      nombre: 'Taller de Confección y Patronaje — Hilo Técnico',
      tipoUnidad: 'Taller de Manufactura y Servicios Textiles',
      sedeOEntidad: 'Centro de Diseño, Confección y Moda',
      direccion: 'Piso 2, Ala Norte — Zona de Talleres Especializados',
      ciudadDepartamento: 'Medellín, Antioquia',
      coberturaGeografica: 'Área metropolitana y sedes regionales asociadas',
    },
    responsable: {
      nombreCompleto: 'Julián Esteban Montoya Vélez',
      cargo: 'Coordinador Técnico de Taller y Producción',
      dependencia: 'Área de Gestión Tecnológica y Producción Textil',
      correo: 'hilotecnico@centrotextil.edu.co',
      telefono: '+57 (604) 576 9020 · Ext. 308',
      horarioAtencion: 'Lunes a viernes 07:00 – 17:00',
    },
    oferta: {
      propuestaValor:
        'Confección de dotación institucional, prendas de seguridad básica y prototipado de colecciones con acabados industriales y patronaje digital.',
      items: [
        {
          id: 'tex-1',
          nombre: 'Batas de Laboratorio y Overoles de Taller',
          tipo: 'Producto',
          categoria: 'Dotación técnica',
          unidadMedida: 'Prenda terminada',
          descripcion: 'Confeccionados en dril antifluido o algodón 100%, costuras reforzadas y bordado institucional.',
        },
        {
          id: 'tex-2',
          nombre: 'Camisetas Polo y Chaquetas Corporativas',
          tipo: 'Producto',
          categoria: 'Imagen institucional',
          unidadMedida: 'Lote × 20 unidades',
          descripcion: 'Tela piqué de 220 g, tallaje completo XS–XXL para equipos académicos y brigadas.',
        },
        {
          id: 'tex-3',
          nombre: 'Patronaje Digital y Escalado CAD',
          tipo: 'Servicio',
          categoria: 'Diseño técnico',
          unidadMedida: 'Referencia escalada',
          descripcion: 'Digitalización de moldes, trazo optimizado y ficha de consumo de tela por talla.',
        },
      ],
    },
    tamano: {
      clasificacion: 'Taller modular de producción por lotes (15 personas)',
      personalDetalle: [
        { id: 'pt-1', rol: 'Coordinador técnico y patronista CAD', cantidad: 1, dedicacion: 'Tiempo completo' },
        { id: 'pt-2', rol: 'Operarios de máquina plana, fileteadora y collarín', cantidad: 8, dedicacion: 'Tiempo completo' },
        { id: 'pt-3', rol: 'Cortador y auxiliar de tizado', cantidad: 2, dedicacion: 'Tiempo completo' },
        { id: 'pt-4', rol: 'Inspectores de calidad, planchado y empaque', cantidad: 2, dedicacion: 'Tiempo completo' },
        { id: 'pt-5', rol: 'Aprendices en práctica supervisada', cantidad: 2, dedicacion: 'Media jornada' },
      ],
      capacidadDiaria: '90 – 120 prendas terminadas según complejidad',
      volumenMensual: '2.100 – 2.500 prendas mensuales',
      infraestructuraM2: '240 m² (mesa de corte de 10 m, módulo de confección y bodega)',
      turnosOperacion: '1 turno productivo diurno de lunes a viernes',
      observacionesVolumen:
        'Picos de producción al inicio de cada trimestre académico por entrega de dotación a nuevos ingresos.',
    },
    cadenaSuministro: {
      resumenGeneral:
        'Suministro textil desde fábricas nacionales, corte optimizado por software para reducir retal, ensamble en módulo lineal y despacho por lotes tallados.',
      proveedores: {
        descripcion:
          '6 proveedores textiles y de avíos ubicados en el Valle de Aburrá, garantizando reposición rápida de tonos institucionales.',
        actoresClave: [
          'Textiles del Norte S.A. (dril, antifluidos y piqué)',
          'Insumos & Avíos El Botón (hilos de poliéster, cierres, entretelas)',
          'Bordados Digitales Express (aplicación de emblemas)',
        ],
        frecuenciaAbastecimiento: 'Por orden de producción y reposición mensual de básicos',
        criteriosSeleccion: 'Solidez del color al lavado, ficha técnica textil certificada y cumplimiento de metraje.',
      },
      insumos: {
        descripcion:
          'Recepción y reposo de rollos de tela durante 24 horas previo al tendido para evitar encogimiento posterior.',
        principalesInsumos: [
          'Rollos de dril, popelina antifluido y tejido de punto piqué',
          'Conos de hilo calibre 40/2 y 120, botones, broches y reflectivos',
          'Bolsas reciclables individuales y cajas de cartón corrugado',
        ],
        controlCalidad: 'Revisión de rollo en mesa iluminada (detección de fallas de tejido y variación de tono).',
      },
      produccionTransformacion: {
        descripcion:
          'Manufactura modular: trazo CAD, tendido, corte vertical, preparación de piezas, ensamble en línea y terminación.',
        procesosClave: [
          'Trazo digital con aprovechamiento > 86% del ancho útil de tela',
          'Corte con cortadora vertical de cuchilla recta y etiquetado por paquete',
          'Ensamble en módulo de máquinas planas, fileteadoras de 4 hilos y presilladora',
        ],
        equipamientoPrincipal:
          'Plotter de patronaje, mesa de corte con cortadora vertical de 8", 10 máquinas planas electrónicas, 4 fileteadoras y 1 bordadora multicabezal.',
      },
      almacenamiento: {
        descripcion:
          'Estantería horizontal para rollos textiles cubiertos contra polvo y anaqueles clasificados por orden de pedido y talla.',
        condicionesConservacion: 'Ambiente seco (humedad relativa 45–55%), libre de luz solar directa.',
        metodoInventario: 'Control por código de referencia, lote de tintorería y conteo por tallas.',
      },
      distribucion: {
        descripcion:
          'Entrega consolidada por sedes en cajas rotuladas por talla y usuario, o entrega directa en ventanilla del taller.',
        canalesEntrega: [
          'Despacho directo a almacén general de la institución',
          'Entrega personalizada por listado en ventanilla del taller',
          'Mensajería local para clientes externos y empresas aliadas',
        ],
        tiemposDespacho: 'Lotes estándar en 8 a 12 días hábiles tras aprobación de muestra física',
      },
    },
    clientes: {
      resumenGeneral:
        'Principalmente orientado a dotación estudiantil y laboral, complementado con servicios a emprendedores locales.',
      segmentos: [
        {
          id: 'ts-1',
          nombre: 'Aprendices de áreas técnicas y laboratorios',
          tipoPublico: 'Aprendices',
          participacionPorcentaje: 55,
          frecuenciaUso: 'Trimestral (por ingreso)',
          necesidadesClave: 'Prendas resistentes, cómodas, con cumplimiento de normas de seguridad industrial.',
          canalAtencion: 'Entrega por ficha en ventanilla',
        },
        {
          id: 'ts-2',
          nombre: 'Funcionarios, instructores y personal de apoyo',
          tipoPublico: 'Funcionarios',
          participacionPorcentaje: 28,
          frecuenciaUso: 'Semestral / anual',
          necesidadesClave: 'Dotación institucional con tallaje preciso y excelente presentación.',
          canalAtencion: 'Almacén general',
        },
        {
          id: 'ts-3',
          nombre: 'Comunidad emprendedora y talleres aliados',
          tipoPublico: 'Comunidad',
          participacionPorcentaje: 12,
          frecuenciaUso: 'Por proyecto',
          necesidadesClave: 'Servicios de patronaje digital, escalado y confección de lotes piloto.',
          canalAtencion: 'Asesoría presencial en taller',
        },
        {
          id: 'ts-4',
          nombre: 'Visitantes y delegaciones en eventos',
          tipoPublico: 'Visitantes',
          participacionPorcentaje: 5,
          frecuenciaUso: 'Ocasional',
          necesidadesClave: 'Kits textiles conmemorativos (tulas, chalecos o gorras bordadas).',
          canalAtencion: 'Orden institucional',
        },
      ],
    },
  },
];

export function createBlankFicha(): FichaTecnica {
  const today = new Date().toISOString().split('T')[0];
  return {
    id: `ficha-${Date.now()}`,
    codigo: 'FT-NUEVA-001',
    version: '1.0',
    fechaActualizacion: today,
    sector: '',
    identificacion: {
      nombre: '',
      tipoUnidad: '',
      sedeOEntidad: '',
      direccion: '',
      ciudadDepartamento: '',
      coberturaGeografica: '',
    },
    responsable: {
      nombreCompleto: '',
      cargo: '',
      dependencia: '',
      correo: '',
      telefono: '',
      horarioAtencion: '',
    },
    oferta: {
      propuestaValor: '',
      items: [
        {
          id: `item-${Date.now()}`,
          nombre: '',
          tipo: 'Producto',
          categoria: '',
          unidadMedida: '',
          descripcion: '',
        },
      ],
    },
    tamano: {
      clasificacion: '',
      personalDetalle: [
        {
          id: `rol-${Date.now()}`,
          rol: '',
          cantidad: 1,
          dedicacion: 'Tiempo completo',
        },
      ],
      capacidadDiaria: '',
      volumenMensual: '',
      infraestructuraM2: '',
      turnosOperacion: '',
      observacionesVolumen: '',
    },
    cadenaSuministro: {
      resumenGeneral: '',
      proveedores: {
        descripcion: '',
        actoresClave: [''],
        frecuenciaAbastecimiento: '',
        criteriosSeleccion: '',
      },
      insumos: {
        descripcion: '',
        principalesInsumos: [''],
        controlCalidad: '',
      },
      produccionTransformacion: {
        descripcion: '',
        procesosClave: [''],
        equipamientoPrincipal: '',
      },
      almacenamiento: {
        descripcion: '',
        condicionesConservacion: '',
        metodoInventario: '',
      },
      distribucion: {
        descripcion: '',
        canalesEntrega: [''],
        tiemposDespacho: '',
      },
    },
    clientes: {
      resumenGeneral: '',
      segmentos: [
        {
          id: `seg-${Date.now()}`,
          nombre: 'Aprendices',
          tipoPublico: 'Aprendices',
          participacionPorcentaje: 50,
          frecuenciaUso: 'Diaria',
          necesidadesClave: '',
          canalAtencion: '',
        },
        {
          id: `seg-${Date.now() + 1}`,
          nombre: 'Funcionarios',
          tipoPublico: 'Funcionarios',
          participacionPorcentaje: 30,
          frecuenciaUso: 'Semanal',
          necesidadesClave: '',
          canalAtencion: '',
        },
        {
          id: `seg-${Date.now() + 2}`,
          nombre: 'Comunidad y visitantes',
          tipoPublico: 'Comunidad',
          participacionPorcentaje: 20,
          frecuenciaUso: 'Ocasional',
          necesidadesClave: '',
          canalAtencion: '',
        },
      ],
    },
  };
}
