export interface SignItem {
  id: string;
  letter: string;
  desc: string;
  tip: string;
  color: string;
  img?: string;
  imgCropTop?: boolean;
  expectedFile?: string;
  category?: string;
}

export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  accentColor: string;
  signs: SignItem[];
}

export interface FactItem {
  number: string;
  title: string;
  text: string;
}

export interface TimelineItem {
  label: string;
  text: string;
}

export const MODULES_DATA: ModuleItem[] = [
  {
    id: 'abecedario',
    number: '01',
    title: 'Abecedario Dactilológico',
    subtitle: 'Las 27 letras y dígrafos (LL, RR) del alfabeto en LSV',
    accentColor: '#C53030',
    intro:
      '<strong>Abecedario dactilológico:</strong> Sistema de representación manual de las letras del alfabeto venezolano, incluyendo la Ñ y los dígrafos LL y RR. Cada seña posee una configuración específica de la mano.',
    signs: [
      { id: 'abc-a', letter: 'A', desc: 'Puño cerrado, pulgar al lado', tip: 'Cierra los cuatro dedos sobre la palma y mantén el pulgar recto pegado al lateral del índice.', color: '#0A1628', img: 'assets/aistudio/a2_c7d216f2.jpg', expectedFile: 'a2.jpg' },
      { id: 'abc-b', letter: 'B', desc: 'Mano plana, dedos juntos', tip: 'Extiende los cuatro dedos verticalmente unidos y dobla el pulgar cruzando el centro de la palma.', color: '#0A1628', img: 'assets/aistudio/b2_8463c519.jpg', expectedFile: 'b2.jpg' },
      { id: 'abc-c', letter: 'C', desc: 'Mano curvada en forma de C', tip: 'Arquea todos los dedos juntos y opón el pulgar formando una media luna clara mirando de lado.', color: '#0A1628', img: 'assets/aistudio/c2_9ba8e1ce.jpg', expectedFile: 'c2.jpg' },
      { id: 'abc-d', letter: 'D', desc: 'Índice arriba, demás al pulgar', tip: 'Levanta el índice recto mientras las yemas del medio, anular y meñique tocan la punta del pulgar.', color: '#0A1628', img: 'assets/aistudio/d2_07a7c785.jpg', expectedFile: 'd2.jpg' },
      { id: 'abc-e', letter: 'E', desc: 'Dedos curvados tocando el pulgar', tip: 'Flexiona las falanges de los cuatro dedos hacia abajo apoyando las puntas sobre el pulgar doblado.', color: '#0A1628', img: 'assets/aistudio/e2_a4dea0d6.jpg', expectedFile: 'e2.jpg' },
      { id: 'abc-f', letter: 'F', desc: 'Índice y pulgar en círculo', tip: 'Une las puntas del índice y pulgar en aro; extiende hacia arriba los dedos medio, anular y meñique.', color: '#0A1628', img: 'assets/aistudio/f2_8f93a43e.jpg', expectedFile: 'f2.jpg' },
      { id: 'abc-g', letter: 'G', desc: 'Índice y pulgar extendidos', tip: 'Orienta la mano horizontalmente con el índice y el pulgar paralelos apuntando hacia un lado.', color: '#0A1628', img: 'assets/aistudio/g2_9a20c5e7.jpg', expectedFile: 'g2.jpg' },
      { id: 'abc-h', letter: 'H', desc: 'Índice y medio juntos', tip: 'Extiende índice y medio juntos en posición horizontal, con el resto de los dedos recogidos.', color: '#0A1628', img: 'assets/aistudio/h1_72233633.jpg', expectedFile: 'h1.jpg' },
      { id: 'abc-i', letter: 'I', desc: 'Meñique extendido', tip: 'Forma un puño suave y eleva únicamente el dedo meñique completamente recto.', color: '#0A1628', img: 'assets/aistudio/i1_c2e0d0cb.jpg', expectedFile: 'i1.jpg' },
      { id: 'abc-j', letter: 'J', desc: 'Meñique con movimiento', tip: 'Parte de la configuración de la I y traza en el aire una curva descendente en forma de J.', color: '#0A1628', img: 'assets/aistudio/j1_a11b0e3b.jpg', expectedFile: 'j1.jpg' },
      { id: 'abc-k', letter: 'K', desc: 'Índice arriba, medio al lado', tip: 'Extiende el índice arriba y el medio inclinado hacia adelante; apoya el pulgar entre la base de ambos.', color: '#0A1628', img: 'assets/aistudio/k1_afe41c25.jpg', expectedFile: 'k1.jpg' },
      { id: 'abc-l', letter: 'L', desc: 'Índice y pulgar en L', tip: 'Extiende el índice hacia arriba y el pulgar lateralmente en ángulo recto de 90 grados.', color: '#0A1628', img: 'assets/aistudio/l1_8096d104.jpg', expectedFile: 'l1.jpg' },
      { id: 'abc-ll', letter: 'LL', desc: 'L con desplazamiento lateral', tip: 'Mantén la configuración de la L y desliza la mano horizontalmente de un lado a otro.', color: '#0A1628', img: 'assets/aistudio/ll1_67e5199d.jpg', expectedFile: 'll1.jpg' },
      { id: 'abc-m', letter: 'M', desc: 'Tres dedos sobre el pulgar', tip: 'Dobla los dedos índice, medio y anular hacia adelante cubriendo el pulgar recogido debajo.', color: '#0A1628', img: 'assets/aistudio/m1_212359b9.jpg', expectedFile: 'm1.jpg' },
      { id: 'abc-n', letter: 'N', desc: 'Dos dedos sobre el pulgar', tip: 'Dobla únicamente índice y medio sobre el pulgar recogido; anular y meñique quedan cerrados.', color: '#0A1628', img: 'assets/aistudio/n1_8ef4e404.jpg', expectedFile: 'n1.jpg' },
      { id: 'abc-nh', letter: 'Ñ', desc: 'N con movimiento oscilatorio', tip: 'Adopta la postura de la N y añade un movimiento curvo lateral de muñeca.', color: '#0A1628', img: 'assets/aistudio/c3b11_d31a5b20.jpg', expectedFile: 'c3b11.jpg' },
      { id: 'abc-o', letter: 'O', desc: 'Todos los dedos en O', tip: 'Curva todos los dedos juntos hasta tocar la yema del pulgar formando un óvalo cerrado.', color: '#0A1628', img: 'assets/aistudio/o1_299cf60e.jpg', expectedFile: 'o1.jpg' },
      { id: 'abc-p', letter: 'P', desc: 'Como K hacia abajo', tip: 'Mantén la configuración exacta de la K pero rota la muñeca apuntando los dedos hacia abajo.', color: '#0A1628', img: 'assets/aistudio/p1_3ad02ddd.jpg', expectedFile: 'p1.jpg' },
      { id: 'abc-q', letter: 'Q', desc: 'Como G hacia abajo', tip: 'Orienta la postura de índice y pulgar paralelos apuntando verticalmente hacia el suelo.', color: '#0A1628', img: 'assets/aistudio/q1_9b26c29e.jpg', expectedFile: 'q1.jpg' },
      { id: 'abc-r', letter: 'R', desc: 'Índice y medio cruzados', tip: 'Extiende índice y medio hacia arriba cruzando el dedo medio por encima del índice.', color: '#0A1628', img: 'assets/aistudio/r1_f7c622e7.jpg', expectedFile: 'r1.jpg' },
      { id: 'abc-rr', letter: 'RR', desc: 'R con movimiento lateral', tip: 'Mantén índice y medio cruzados como en la R y desplaza la mano suavemente hacia los lados.', color: '#0A1628', img: 'assets/aistudio/rr1_99b194de.jpg', expectedFile: 'rr1.jpg' },
      { id: 'abc-s', letter: 'S', desc: 'Puño con pulgar adelante', tip: 'Cierra todos los dedos en puño firme y cruza el pulgar horizontalmente por delante de ellos.', color: '#0A1628', img: 'assets/aistudio/s1_4ea1efa2.jpg', expectedFile: 's1.jpg' },
      { id: 'abc-t', letter: 'T', desc: 'Pulgar entre índice y medio', tip: 'Cierra el puño colocando la punta del pulgar asomando entre el dedo índice y el dedo medio.', color: '#0A1628', img: 'assets/aistudio/t1_ec36042f.jpg', expectedFile: 't1.jpg' },
      { id: 'abc-u', letter: 'U', desc: 'Índice y medio juntos', tip: 'Extiende índice y medio verticales completamente pegados uno al otro.', color: '#0A1628', img: 'assets/aistudio/u1_ac0567da.jpg', expectedFile: 'u1.jpg' },
      { id: 'abc-v', letter: 'V', desc: 'Índice y medio en V', tip: 'Extiende índice y medio verticales separados formando una V clara.', color: '#0A1628', img: 'assets/aistudio/v1_afcf8e3c.jpg', expectedFile: 'v1.jpg' },
      { id: 'abc-w', letter: 'W', desc: 'Tres dedos arriba', tip: 'Extiende índice, medio y anular abiertos; sujeta el meñique doblado con el pulgar.', color: '#0A1628', img: 'assets/aistudio/1795039810801_2c5bca3d.jpg', imgCropTop: true, expectedFile: 'w1.jpg' },
      { id: 'abc-x', letter: 'X', desc: 'Índice en gancho', tip: 'Con la mano en puño, levanta el dedo índice doblándolo en forma de gancho.', color: '#0A1628', img: 'assets/aistudio/x1_8bf1301a.jpg', expectedFile: 'x1.jpg' },
      { id: 'abc-y', letter: 'Y', desc: 'Pulgar y meñique', tip: 'Extiende simultáneamente el pulgar y el meñique hacia afuera manteniendo los tres dedos centrales cerrados.', color: '#0A1628', img: 'assets/aistudio/y1_342be6a3.jpg', expectedFile: 'y1.jpg' },
      { id: 'abc-z', letter: 'Z', desc: 'Índice dibujando Z', tip: 'Extiende el dedo índice y traza en el espacio frontal el recorrido diagonal de la letra Z.', color: '#0A1628', img: 'assets/aistudio/z1_ce4428bb.jpg', expectedFile: 'z1.jpg' },
    ],
  },
  {
    id: 'numeros',
    number: '02',
    title: 'Números Dactilológicos',
    subtitle: 'Del 0 al 10 en LSV',
    accentColor: '#D69E2E',
    intro:
      '<strong>Números en LSV:</strong> Representación numérica con configuraciones manuales específicas que permiten contar, indicar edades, horas y cantidades con claridad visual.',
    signs: [
      { id: 'num-0', letter: '0', desc: 'Puño cerrado en forma de O', tip: 'Forma una O cerrada con los dedos y realiza un pequeño giro circular con la muñeca.', color: '#B7791F', img: 'assets/signs/num-0.jpg' },
      { id: 'num-1', letter: '1', desc: 'Solo índice extendido', tip: 'Mantén la palma hacia adelante o hacia ti con el dedo índice completamente recto.', color: '#B7791F', img: 'assets/signs/num-1.jpg' },
      { id: 'num-2', letter: '2', desc: 'Índice y medio en V', tip: 'Extiende índice y medio separados formando una V limpia.', color: '#B7791F', img: 'assets/signs/num-2.jpg' },
      { id: 'num-3', letter: '3', desc: 'Tres dedos extendidos', tip: 'Extiende tres dedos verticales separados con firmeza.', color: '#B7791F', img: 'assets/signs/num-3.jpg' },
      { id: 'num-4', letter: '4', desc: 'Cuatro dedos, pulgar dentro', tip: 'Extiende los cuatro dedos principales separados y dobla el pulgar sobre la palma.', color: '#B7791F', img: 'assets/signs/num-4.jpg' },
      { id: 'num-5', letter: '5', desc: 'Mano completamente abierta', tip: 'Extiende los cinco dedos abiertos de forma natural.', color: '#B7791F', img: 'assets/signs/num-5.jpg' },
      { id: 'num-6', letter: '6', desc: 'Cinco más uno', tip: 'Muestra la palma abierta con cinco dedos en una mano y el índice extendido en la otra.', color: '#B7791F', img: 'assets/signs/num-6.jpg' },
      { id: 'num-7', letter: '7', desc: 'Cinco más dos', tip: 'Muestra cinco dedos en una mano y dos dedos en V en la otra.', color: '#B7791F', img: 'assets/signs/num-7.jpg' },
      { id: 'num-8', letter: '8', desc: 'Cinco más tres', tip: 'Muestra cinco dedos en una mano y tres dedos extendidos en la otra.', color: '#B7791F', img: 'assets/signs/num-8.jpg' },
      { id: 'num-9', letter: '9', desc: 'Cinco más cuatro', tip: 'Muestra cinco dedos en una mano y cuatro dedos extendidos en la otra.', color: '#B7791F', img: 'assets/signs/num-9.jpg' },
      { id: 'num-10', letter: '10', desc: 'Ambas manos abiertas', tip: 'Extiende los diez dedos mostrando ambas palmas abiertas al frente.', color: '#B7791F', img: 'assets/signs/num-10.jpg' },
    ],
  },
  {
    id: 'saludos',
    number: '03',
    title: 'Saludos y Despedidas',
    subtitle: 'Cómo saludar y despedirse en LSV',
    accentColor: '#2F855A',
    intro:
      '<strong>Saludos y despedidas:</strong> Fórmulas directas para iniciar y cerrar conversaciones cotidianas, acompañadas siempre de contacto visual y expresión facial amable.',
    signs: [
      { id: 'sal-hola', letter: 'Hola', desc: 'Mano desde la frente hacia afuera', tip: 'Lleva el canto de la mano abierta a la sien y sepárala hacia afuera con sonrisa.', color: '#2F855A', img: 'assets/signs/sal-hola.jpg' },
      { id: 'sal-buenos-dias', letter: 'Buenos Días', desc: 'Mano abierta subiendo', tip: 'Eleva suavemente la mano plana desde la barbilla acompañando el saludo con expresión amable.', color: '#2F855A', img: 'assets/signs/sal-buenos-dias.jpg' },
      { id: 'sal-buenas-tardes', letter: 'Buenas Tardes', desc: 'Mano en arco horizontal', tip: 'Lleva la mano desde la barbilla hacia abajo y al costado con un gesto suave.', color: '#2F855A', img: 'assets/signs/sal-buenas-tardes.jpg' },
      { id: 'sal-buenas-noches', letter: 'Buenas Noches', desc: 'Manos cerrando al centro', tip: 'Parte desde la barbilla y cruza ambas manos suavemente frente al pecho.', color: '#2F855A', img: 'assets/signs/sal-buenas-noches.jpg' },
      { id: 'sal-como-estas', letter: '¿Cómo estás?', desc: 'Mano girando y bajando abierta', tip: 'Gira los dedos unidos hacia arriba y proyecta la mano abierta hacia el frente con expresión interrogativa.', color: '#2F855A', img: 'assets/signs/sal-como-estas.jpg' },
      { id: 'sal-bienvenido', letter: 'Bienvenido', desc: 'Arco amplio con mano hacia adentro', tip: 'Traza un arco suave invitando hacia tu lado con la palma abierta y gesto receptivo.', color: '#2F855A', img: 'assets/signs/sal-bienvenido.jpg' },
      { id: 'sal-hasta-luego', letter: 'Hasta Luego', desc: 'Giro en cintura y V desde el ojo', tip: 'Inicia con la mano junto a la cintura y proyecta índice y medio en V desde cerca del ojo hacia adelante.', color: '#2F855A', img: 'assets/signs/sal-hasta-luego.jpg' },
      { id: 'sal-adios', letter: 'Adiós / Chao', desc: 'Mano abierta saludando lateralmente', tip: 'Agita suavemente la palma abierta al costado del pecho despidiéndote con amabilidad.', color: '#2F855A', img: 'assets/signs/sal-adios.jpg' },
    ],
  },
  {
    id: 'cortesia',
    number: '04',
    title: 'Cortesía y Expresiones',
    subtitle: 'Agradecer, pedir permiso y expresar estados',
    accentColor: '#2B6CB0',
    intro:
      '<strong>Cortesía y estados:</strong> Palabras clave de respeto, agradecimiento y respuesta cotidiana que complementan todo diálogo en Lengua de Señas Venezolana.',
    signs: [
      { id: 'sal-por-favor', letter: 'Por Favor', desc: 'Palmas juntas al pecho', tip: 'Junta ambas palmas frente al pecho con gesto amable de petición.', color: '#2B6CB0', img: 'assets/signs/sal-por-favor.jpg' },
      { id: 'sal-gracias', letter: 'Gracias', desc: 'Mano desde la barbilla', tip: 'Apoya los dedos planos en la barbilla y proyecta la mano hacia abajo sobre la otra palma.', color: '#2B6CB0', img: 'assets/signs/sal-gracias.jpg' },
      { id: 'sal-de-nada', letter: 'De Nada', desc: 'Pulgar desde el mentón hacia afuera', tip: 'Coloca el pulgar debajo de la barbilla y muévelo en arco hacia adelante con naturalidad.', color: '#2B6CB0', img: 'assets/signs/sal-de-nada.jpg' },
      { id: 'sal-permiso', letter: 'Permiso', desc: 'Mano en la barbilla inclinada', tip: 'Lleva la mano hacia el mentón acompañando el gesto cortés de paso.', color: '#2B6CB0', img: 'assets/signs/sal-permiso.jpg' },
      { id: 'sal-lo-siento', letter: 'Perdón / Lo Siento', desc: 'Mano en círculo sobre la otra palma', tip: 'Gira suavemente la mano en círculos sobre la palma contraria o el pecho con expresión empática.', color: '#2B6CB0', img: 'assets/signs/sal-perdon.jpg' },
      { id: 'sal-bien', letter: 'Bien', desc: 'Pulgar arriba con mano cerrada', tip: 'Eleva el dedo pulgar con firmeza manteniendo los demás dedos cerrados frente al pecho.', color: '#2B6CB0', img: 'assets/signs/sal-bien.jpg' },
      { id: 'sal-mal', letter: 'Mal', desc: 'Pulgar hacia abajo', tip: 'Orienta el pulgar apuntando hacia abajo acompañado de expresión facial acorde.', color: '#2B6CB0', img: 'assets/signs/sal-mal.jpg' },
      { id: 'sal-mejor', letter: 'Mejor', desc: 'Mano plana cambiando a pulgar arriba', tip: 'Desliza la mano desde la postura abierta hasta cerrar el puño elevando el pulgar.', color: '#2B6CB0', img: 'assets/signs/sal-mejor.jpg' },
      { id: 'sal-bueno', letter: 'Bueno', desc: 'Dedos desde la boca abriendo al frente', tip: 'Toca suavemente cerca de los labios con los dedos agrupados y abre la palma hacia adelante.', color: '#2B6CB0', img: 'assets/signs/sal-bueno.jpg' },
      { id: 'sal-silencio', letter: 'Silencio', desc: 'Índice vertical sobre los labios', tip: 'Coloca el dedo índice recto frente a la boca indicando calma o silencio.', color: '#2B6CB0', img: 'assets/signs/sal-silencio.jpg' },
    ],
  },
  {
    id: 'familia',
    number: '05',
    title: 'La Familia',
    subtitle: 'Miembros del núcleo familiar',
    accentColor: '#805AD5',
    intro:
      '<strong>Vocabulario familiar:</strong> Señas para identificar a los miembros de la familia, diferenciando usualmente la zona superior del rostro y la barbilla.',
    signs: [
      { id: 'fam-familia', letter: 'Familia', desc: 'Manos dibujando círculo', tip: 'Forma la configuración con ambas manos y traza un círculo hacia el centro del pecho.', color: '#6B46C1', img: 'assets/signs/fam-familia.jpg' },
      { id: 'fam-papa', letter: 'Papá', desc: 'Mano junto a la frente y barbilla', tip: 'Acerca la mano en configuración de LSV tocando suavemente con el movimiento característico.', color: '#6B46C1', img: 'assets/signs/fam-papa.jpg' },
      { id: 'fam-mama', letter: 'Mamá', desc: 'Manos junto a las mejillas', tip: 'Acerca los dedos a ambos lados del rostro con expresión afectuosa.', color: '#6B46C1', img: 'assets/signs/fam-mama.jpg' },
      { id: 'fam-hijo', letter: 'Hijo', desc: 'Manos frente al pecho', tip: 'Coloca ambas manos al frente indicando el vínculo directo filial.', color: '#6B46C1', img: 'assets/signs/fam-hijo.jpg' },
      { id: 'fam-abuela', letter: 'Abuela', desc: 'Mano en el mentón', tip: 'Apoya suavemente los dedos flexionados debajo de la barbilla.', color: '#6B46C1', img: 'assets/signs/fam-abuela.jpg' },
      { id: 'fam-hermano', letter: 'Hermano', desc: 'Antebrazos unidos al centro', tip: 'Cruza o acerca ambos brazos paralelos frente al pecho señalando cercanía fraternal.', color: '#6B46C1', img: 'assets/signs/fam-hermano.jpg' },
      { id: 'fam-bebe', letter: 'Bebé', desc: 'Brazos meciendo', tip: 'Coloca un antebrazo sobre el otro y mécelos suavemente frente al pecho.', color: '#6B46C1', img: 'assets/signs/fam-bebe.jpg' },
    ],
  },
  {
    id: 'colores',
    number: '06',
    title: 'Los Colores',
    subtitle: 'Colores básicos en LSV',
    accentColor: '#3182CE',
    intro:
      '<strong>Colores en LSV:</strong> Muchos colores se articulan combinando la letra dactilológica inicial cerca de la barbilla o los labios con un leve movimiento distintivo.',
    signs: [
      { id: 'col-amarillo', letter: 'Amarillo', desc: 'Configuración en la sien', tip: 'Acerca los dedos a la altura de la sien o mejilla con un giro corto.', color: '#D69E2E', img: 'assets/signs/col-amarillo.jpg' },
      { id: 'col-azul', letter: 'Azul', desc: 'Letra A junto a la mejilla', tip: 'Forma la configuración junto al pómulo o sien realizando un movimiento suave.', color: '#3182CE', img: 'assets/signs/col-azul.jpg' },
      { id: 'col-rojo', letter: 'Rojo', desc: 'Índice tocando los labios', tip: 'Desliza la yema del índice suavemente hacia abajo rozando el labio inferior.', color: '#E53E3E', img: 'assets/signs/col-rojo.jpg' },
      { id: 'col-negro', letter: 'Negro', desc: 'Manos juntas al centro', tip: 'Une las manos frente al pecho con el movimiento distintivo del color negro.', color: '#1A202C', img: 'assets/signs/col-negro.jpg' },
      { id: 'col-blanco', letter: 'Blanco', desc: 'Mano abierta en el pecho', tip: 'Apoya la palma abierta sobre el pecho y deslízala hacia un lado cerrando los dedos.', color: '#64748B', img: 'assets/signs/col-blanco.jpg' },
      { id: 'col-marron', letter: 'Marrón', desc: 'Mano junto a la barbilla', tip: 'Coloca los dedos horizontalmente debajo del mentón con un toque corto.', color: '#744210', img: 'assets/signs/col-marron.jpg' },
    ],
  },
  {
    id: 'dias',
    number: '07',
    title: 'Días de la Semana',
    subtitle: 'Lunes a Domingo en LSV',
    accentColor: '#B7791F',
    intro:
      '<strong>Días de la semana:</strong> Cada día combina la letra dactilológica inicial con un movimiento circular o rítmico específico en el espacio neutral.',
    signs: [
      { id: 'dia-lunes', letter: 'Lunes', desc: 'Mano señalando lateralmente', tip: 'Extiende los dedos en configuración horizontal frente al pecho.', color: '#B7791F', img: 'assets/signs/dia-lunes.jpg' },
      { id: 'dia-martes', letter: 'Martes', desc: 'Manos alternadas al frente', tip: 'Coloca ambas manos juntas al centro con movimiento rítmico lateral.', color: '#B7791F', img: 'assets/signs/dia-martes.jpg' },
      { id: 'dia-miercoles', letter: 'Miércoles', desc: 'Manos alternando en el pecho', tip: 'Realiza un movimiento vertical alternado con ambas manos frente al pecho.', color: '#B7791F', img: 'assets/signs/dia-miercoles.jpg' },
      { id: 'dia-jueves', letter: 'Jueves', desc: 'Puños al centro con giro', tip: 'Alinea ambas manos frente al torso con movimiento corto alternado.', color: '#B7791F', img: 'assets/signs/dia-jueves.jpg' },
      { id: 'dia-viernes', letter: 'Viernes', desc: 'Dedo tocando la mano', tip: 'Acerca la mano en configuración de LSV tocando suavemente la base.', color: '#B7791F', img: 'assets/signs/dia-viernes.jpg' },
      { id: 'dia-sabado', letter: 'Sábado', desc: 'Puño junto a la mejilla', tip: 'Apoya los nudillos suavemente junto a la mejilla con expresión natural.', color: '#B7791F', img: 'assets/signs/dia-sabado.jpg' },
      { id: 'dia-domingo', letter: 'Domingo', desc: 'Mano en la frente', tip: 'Coloca la mano a la altura de la frente realizando un movimiento corto.', color: '#B7791F', img: 'assets/signs/dia-domingo.jpg' },
    ],
  },
  {
    id: 'vocabulario',
    number: '08',
    title: 'Vocabulario y Verbos',
    subtitle: 'Acciones esenciales en LSV',
    accentColor: '#C53030',
    intro:
      '<strong>Verbos y acciones:</strong> Señas fundamentales para expresar acciones cotidianas y actividades diarias dentro de una conversación en LSV.',
    signs: [
      { id: 'voc-ayudar', letter: 'Ayudar', desc: 'Puño sobre palma hacia arriba', tip: 'Apoya un puño cerrado con el pulgar arriba sobre la palma contraria y elévalos juntos.', color: '#C53030', img: 'assets/signs/voc-ayudar.jpg' },
      { id: 'voc-compartir', letter: 'Compartir', desc: 'Manos alternadas al centro', tip: 'Desliza una mano abierta de ida y vuelta frente a la otra a la altura del pecho.', color: '#C53030', img: 'assets/signs/voc-compartir.jpg' },
      { id: 'voc-difundir', letter: 'Difundir', desc: 'Índice desde los labios', tip: 'Proyecta el gesto desde la boca hacia adelante representando comunicar o difundir.', color: '#C53030', img: 'assets/signs/voc-difundir.jpg' },
      { id: 'voc-aprender', letter: 'Aprender', desc: 'Mano hacia la frente', tip: 'Eleva la mano abierta hacia la frente simbolizando asimilar conocimiento.', color: '#C53030', img: 'assets/signs/voc-aprender.jpg' },
      { id: 'voc-comer', letter: 'Comer', desc: 'Dedos agrupados hacia la boca', tip: 'Une las yemas de los dedos y llévalas repetidamente cerca de los labios.', color: '#C53030', img: 'assets/signs/voc-comer.jpg' },
      { id: 'voc-beber', letter: 'Beber', desc: 'Pulgar acercándose a la boca', tip: 'Con los dedos recogidos y el pulgar extendido, inclina la mano hacia la boca simulando beber.', color: '#C53030', img: 'assets/signs/voc-beber.jpg' },
      { id: 'voc-dormir', letter: 'Dormir', desc: 'Palma apoyada en la mejilla', tip: 'Apoya la mano abierta junto a la mejilla e inclina ligeramente la cabeza.', color: '#C53030', img: 'assets/signs/voc-dormir.jpg' },
      { id: 'voc-doler', letter: 'Doler', desc: 'Mano vibrando o girando', tip: 'Coloca los dedos abiertos con tensión suave y muévelos brevemente señalando malestar.', color: '#C53030', img: 'assets/signs/voc-doler.jpg' },
      { id: 'voc-hacer', letter: 'Hacer', desc: 'Ambas manos girando al frente', tip: 'Con las manos en puño suave frente al torso, realiza pequeños giros circulares alternados.', color: '#C53030', img: 'assets/signs/voc-hacer.jpg' },
      { id: 'voc-estar', letter: 'Estar', desc: 'Mano plana bajando al espacio neutral', tip: 'Desciende la palma extendida horizontalmente frente al pecho marcando presencia.', color: '#C53030', img: 'assets/signs/voc-estar.jpg' },
    ],
  },
  {
    id: 'pronombres',
    number: '09',
    title: 'Pronombres Personales',
    subtitle: 'Identificación de personas en la oración',
    accentColor: '#1A365D',
    intro:
      '<strong>Pronombres en LSV:</strong> Se articulan señalando hacia el referente en el espacio real o asignando puntos espaciales claros para indicar de quién se habla.',
    signs: [
      { id: 'pro-yo', letter: 'Yo', desc: 'Índice apuntando al pecho', tip: 'Señala con el dedo índice hacia el centro de tu propio pecho.', color: '#1A365D', img: 'assets/signs/pro-yo.jpg' },
      { id: 'pro-tu', letter: 'Tú', desc: 'Índice apuntando al frente', tip: 'Señala directamente hacia la persona con la que conversas manteniendo contacto visual.', color: '#1A365D', img: 'assets/signs/pro-tu.jpg' },
      { id: 'pro-el-ella', letter: 'Él / Ella', desc: 'Pulgar o índice al costado', tip: 'Apunta hacia un lateral indicando a una tercera persona presente o referida en el espacio.', color: '#1A365D', img: 'assets/signs/pro-el-ella.jpg' },
      { id: 'pro-nosotros', letter: 'Nosotros', desc: 'Índice trazando arco circular', tip: 'Traza un pequeño círculo con el índice incluyendo a tu grupo frente al pecho.', color: '#1A365D', img: 'assets/signs/pro-nosotros.jpg' },
      { id: 'pro-ustedes', letter: 'Ustedes', desc: 'Índice barriendo de lado a lado', tip: 'Desplaza el dedo índice horizontalmente señalando al grupo de interlocutores.', color: '#1A365D', img: 'assets/signs/pro-ustedes.jpg' },
      { id: 'pro-quien', letter: '¿Quién?', desc: 'Índice bajo la barbilla', tip: 'Apoya la yema del índice junto al mentón con movimiento corto y cejas ligeramente fruncidas.', color: '#1A365D', img: 'assets/signs/pro-quien.jpg' },
    ],
  },
  {
    id: 'relaciones',
    number: '10',
    title: 'Relaciones y Vínculos',
    subtitle: 'Lazos afectivos, pareja y amistad',
    accentColor: '#B7791F',
    intro:
      '<strong>Relaciones y vínculos:</strong> Señas para expresar lazos cercanos entre personas mediante configuraciones simétricas de unión con ambas manos.',
    signs: [
      { id: 'rel-esposos', letter: 'Esposos', desc: 'Meñiques entrelazados', tip: 'Entrelaza los dedos meñiques de ambas manos frente al pecho simbolizando unión matrimonial.', color: '#B7791F', img: 'assets/signs/rel-esposos.jpg' },
      { id: 'rel-novios', letter: 'Novios', desc: 'Índices unidos en arco', tip: 'Inclina ambos dedos índices hasta tocar las puntas formando una casita o techo al centro.', color: '#B7791F', img: 'assets/signs/rel-novios.jpg' },
      { id: 'rel-amigos', letter: 'Amigos', desc: 'Manos estrechadas suavemente', tip: 'Sujeta o entrelaza ambas manos juntas frente al torso expresando cercanía y amistad.', color: '#B7791F', img: 'assets/signs/rel-amigos.jpg' },
      { id: 'rel-familiares', letter: 'Familiares', desc: 'Índices girando enfrentados', tip: 'Coloca ambos índices enfrentados y traza un círculo suave uniendo el vínculo familiar.', color: '#B7791F', img: 'assets/signs/rel-familiares.jpg' },
    ],
  },
  {
    id: 'vocabulario-general',
    number: '11',
    title: 'Expresiones y Vocabulario LSV',
    subtitle: 'Preguntas, adverbios, frases útiles, verbos y sustantivos cotidianos',
    accentColor: '#1A365D',
    intro:
      '<strong>Vocabulario ampliado en LSV:</strong> Señas cotidianas organizadas por categoría gramatical para enriquecer tus conversaciones: preguntas, expresiones frecuentes, conectores, adverbios, verbos de acción y sustantivos.',
    signs: [
      // Preguntas
      { id: 'dic-cual', letter: '¿Cuál?', desc: 'Ambas manos alternando al centro', tip: 'Alterna verticalmente ambas manos cerradas con pulgar arriba frente al pecho y expresión interrogativa.', color: '#1A365D', category: 'Preguntas', img: 'assets/signs/dic-cual.jpg' },
      { id: 'dic-cual-dos', letter: '¿Cuál de los dos?', desc: 'Índice señalando entre dos dedos', tip: 'Sostén dos dedos de una mano abiertos mientras alternas la elección con la otra mano.', color: '#1A365D', category: 'Preguntas', img: 'assets/signs/dic-cual-dos.jpg' },
      { id: 'dic-donde-q', letter: '¿Dónde?', desc: 'Índice girando suavemente al frente', tip: 'Realiza un pequeño círculo horizontal con el dedo índice manteniendo cejas interrogativas.', color: '#1A365D', category: 'Preguntas', img: 'assets/signs/dic-donde-q.jpg' },
      { id: 'dic-donde-vives', letter: '¿Dónde vives?', desc: 'Manos subiendo desde el pecho', tip: 'Eleva ambas manos cerradas por el pecho indicando habitar o vivir con gesto de pregunta.', color: '#1A365D', category: 'Preguntas', img: 'assets/signs/dic-donde-vives.jpg' },
      { id: 'dic-por-que', letter: '¿Por qué?', desc: 'Mano abriendo y desplazándose desde la frente', tip: 'Alterna las manos al centro con movimiento interrogativo marcado en el rostro.', color: '#1A365D', category: 'Preguntas', img: 'assets/signs/dic-por-que.jpg' },

      // Expresiones e Interjecciones
      { id: 'dic-a-la-orden', letter: 'A la orden', desc: 'Palmas juntas al pecho inclinándose', tip: 'Une las manos frente al pecho con gesto amable de disposición y servicio.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-a-la-orden.jpg' },
      { id: 'dic-bienvenido', letter: '¡Bienvenido!', desc: 'Mano en círculo y abrazo amplio', tip: 'Traza un movimiento receptivo desde afuera hacia el pecho con expresión cordial.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-bienvenido.jpg' },
      { id: 'dic-como-tu-quieres', letter: 'Como tú quieres', desc: 'Manos midiendo al frente', tip: 'Alterna las manos hacia adelante indicando acuerdo con la preferencia del otro.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-como-tu-quieres.jpg' },
      { id: 'dic-ensename', letter: '¡Enséñame!', desc: 'Mano proyectada hacia uno mismo', tip: 'Trae la mano en puño abierto desde el frente hacia tu propia cabeza o rostro.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-ensename.jpg' },
      { id: 'dic-gracias', letter: '¡Gracias!', desc: 'Mano desde los labios al frente', tip: 'Toca la barbilla con los dedos planos y extiende la mano hacia el interlocutor.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-gracias.jpg' },
      { id: 'dic-mayor-edad', letter: 'Mayor de edad', desc: 'Mano elevándose sobre el nivel de la cabeza', tip: 'Sube la palma plana hacia arriba desde un lado del rostro señalando madurez.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-mayor-edad.jpg' },
      { id: 'dic-mejor-nada', letter: '¡Mejor nada!', desc: 'Ambas manos abriendo en rechazo suave', tip: 'Cruza y abre las manos desde el pecho acompañando con gesto de negación ligera.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-mejor-nada.jpg' },
      { id: 'dic-menor-edad', letter: 'Menor de edad', desc: 'Palma bajando frente al pecho', tip: 'Desciende la mano plana horizontalmente marcando menor estatura o edad.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-menor-edad.jpg' },
      { id: 'dic-mirame', letter: '¡Mírame!', desc: 'Dos dedos apuntando hacia tus ojos', tip: 'Coloca índice y medio en V apuntando directo hacia tu rostro llamando la atención visual.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-mirame.jpg' },
      { id: 'dic-no-se-nada', letter: 'No sé nada', desc: 'Índice girando sobre la palma contraria', tip: 'Haz un gesto circular junto a la otra mano expresando desconocimiento total.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-no-se-nada.jpg' },
      { id: 'dic-no-sirve', letter: 'No sirve', desc: 'Mano desde el mentón hacia afuera', tip: 'Desliza el dorso de los dedos bajo la barbilla sacando la mano con rostro de rechazo.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-no-sirve.jpg' },
      { id: 'dic-pregunto', letter: 'Pregunto', desc: 'Índice elevándose en gancho', tip: 'Dibuja un signo de interrogación en el aire con el dedo índice.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-pregunto.jpg' },
      { id: 'dic-quiero-preguntar', letter: 'Quiero preguntar', desc: 'Mano hacia el pecho y seña de pregunta', tip: 'Combina el gesto de deseo hacia el pecho con la proyección interrogativa del índice.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-quiero-preguntar.jpg' },
      { id: 'dic-se-acaba-dinero', letter: 'Se acaba el dinero', desc: 'Índice arriba y dedos cerrándose', tip: 'Combina la mano rozando la palma y cerrando los dedos indicando que algo se agota.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-se-acaba-dinero.jpg' },
      { id: 'dic-se-fue', letter: 'Se fue', desc: 'Mano proyectada rápidamente al costado', tip: 'Desplaza la mano abierta hacia afuera indicando partida o ausencia.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-se-fue.jpg' },
      { id: 'dic-sinverguenza', letter: '¡Sinvergüenza!', desc: 'Mano pasando bajo el mentón hacia afuera', tip: 'Desliza la mano debajo de la barbilla hacia adelante con expresión enfática.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-sinverguenza.jpg' },
      { id: 'dic-vamonos', letter: '¡Vámonos!', desc: 'Ambas manos desplazándose al lado', tip: 'Mueve las manos abiertas juntas hacia un costado invitando a salir de inmediato.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-vamonos.jpg' },
      { id: 'dic-no-tengo-nada', letter: 'No tengo nada', desc: 'Índice bajo la barbilla con gesto negativo', tip: 'Toca la parte inferior del mentón con el índice y acompáñalo con negación suave.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-no-tengo-nada.jpg' },
      { id: 'dic-no-tengo-plata', letter: 'No tengo plata', desc: 'Índice bajo la barbilla y gesto de dinero', tip: 'Marca negación desde el mentón expresando falta de dinero.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-no-tengo-plata.jpg' },
      { id: 'dic-paciencia', letter: '¡Paciencia!', desc: 'Pulgar bajando suavemente por la barbilla', tip: 'Desliza el pulgar hacia abajo desde los labios hasta el pecho transmitiendo calma.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-paciencia.jpg' },
      { id: 'dic-perdon', letter: '¡Perdón!', desc: 'Manos unidas o rozando la palma', tip: 'Gira una mano sobre la otra frente al pecho con expresión sincera de disculpa.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-perdon.jpg' },
      { id: 'dic-permiso', letter: '¡Permiso!', desc: 'Mano en la barbilla inclinada hacia afuera', tip: 'Coloca el canto de la mano en la barbilla o frente al torso pidiendo paso cortésmente.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-permiso.jpg' },
      { id: 'dic-por-favor', letter: '¡Por favor!', desc: 'Palmas juntas al centro del pecho', tip: 'Junta ambas palmas verticalmente frente al pecho con gesto cordial de solicitud.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-por-favor.jpg' },
      { id: 'dic-venga', letter: '¡Venga!', desc: 'Mano llamando hacia sí mismo', tip: 'Extiende la mano y recógela hacia tu cuerpo invitando a acercarse.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-venga.jpg' },
      { id: 'dic-yo-voy', letter: 'Yo voy', desc: 'Mano girando desde el pecho hacia adelante', tip: 'Proyecta la mano inclinada desde el hombro hacia el frente indicando desplazamiento.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-yo-voy.jpg' },
      { id: 'dic-acuerdo', letter: 'Acuerdo', desc: 'Índices o manos bajando juntas al centro', tip: 'Desciende ambas manos simultáneamente hasta unirlas frente al pecho.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-acuerdo.jpg' },
      { id: 'dic-amigo', letter: 'Amigo', desc: 'Manos estrechadas al centro', tip: 'Entrelaza ambas manos con un leve movimiento amistoso frente al pecho.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-amigo.jpg' },
      { id: 'dic-atencion', letter: 'Atención', desc: 'Palmas paralelas a ambos lados del rostro', tip: 'Coloca ambas manos abiertas a los costados de los ojos proyectándolas hacia adelante.', color: '#2B6CB0', category: 'Expresiones', img: 'assets/signs/dic-atencion.jpg' },

      // Conectores y Adverbios
      { id: 'dic-por', letter: 'Por', desc: 'Índice pasando junto a la frente', tip: 'Lleva el dedo índice extendido hacia la sien con movimiento recto hacia adelante.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-por.jpg' },
      { id: 'dic-sin', letter: 'Sin', desc: 'Manos cruzadas separándose en el pecho', tip: 'Cruza las manos frente al pecho y sepáralas hacia afuera marcando ausencia.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-sin.jpg' },
      { id: 'dic-porque', letter: 'Porque', desc: 'Índices chocando suavemente', tip: 'Acerca el índice extendido frente al rostro dando un toque corto explicativo.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-porque.jpg' },
      { id: 'dic-sino', letter: 'Sino', desc: 'Índice alternando lateralmente', tip: 'Desplaza el dedo índice de un lado a otro marcando contraste entre dos opciones.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-sino.jpg' },
      { id: 'dic-y', letter: 'Y', desc: 'Mano recogiendo los dedos al centro', tip: 'Extiende la mano abierta horizontalmente y cierra los dedos hacia el pulgar al desplazarla.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-y.jpg' },
      { id: 'dic-adelante', letter: 'Adelante', desc: 'Manos avanzando desde el costado', tip: 'Proyecta ambas manos inclinadas hacia adelante en dirección frontal.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-adelante.jpg' },
      { id: 'dic-algo', letter: 'Algo', desc: 'Índice oscilando suavemente junto al rostro', tip: 'Mueve el dedo índice suavemente al costado de la boca o mejilla.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-algo.jpg' },
      { id: 'dic-alguna-vez', letter: 'Alguna vez', desc: 'Índices hacia arriba con giro suave', tip: 'Eleva ambos dedos índices paralelos realizando un pequeño desplazamiento vertical.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-alguna-vez.jpg' },
      { id: 'dic-algunos', letter: 'Algunos', desc: 'Manos alternando verticalmente al pecho', tip: 'Alterna los dedos hacia arriba marcando cantidad parcial.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-algunos.jpg' },
      { id: 'dic-antes', letter: 'Antes', desc: 'Mano retrocediendo hacia el pecho', tip: 'Lleva la palma trasera suavemente hacia atrás sobre la otra mano indicando tiempo pasado.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-antes.jpg' },
      { id: 'dic-aqui', letter: 'Aquí', desc: 'Índices apuntando abajo frente al pecho', tip: 'Señala firme hacia el espacio inmediato debajo del torso.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-aqui.jpg' },
      { id: 'dic-asi', letter: 'Así', desc: 'Mano abierta desplazándose lateralmente', tip: 'Mueve la mano con dedos abiertos hacia el costado explicando modo o manera.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-asi.jpg' },
      { id: 'dic-cada-uno', letter: 'Cada uno', desc: 'Puños con pulgar arriba en saltos cortos', tip: 'Desplaza un puño frente al otro en pequeños arcos repetidos.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-cada-uno.jpg' },
      { id: 'dic-dentro', letter: 'Dentro', desc: 'Mano entrando en la cavidad de la otra', tip: 'Introduce los dedos agrupados dentro del hueco formado por la mano contraria.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-dentro.jpg' },
      { id: 'dic-despacio', letter: 'Despacio', desc: 'Palmas bajando suavemente al frente', tip: 'Desciende ambas palmas abiertas con ritmo pausado frente al pecho.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-despacio.jpg' },
      { id: 'dic-donde-adv', letter: 'Donde', desc: 'Mano marcando el lugar sobre la palma', tip: 'Señala con el dedo curvado hacia el punto sobre la otra mano indicando ubicación.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-donde-adv.jpg' },
      { id: 'dic-nunca', letter: 'Nunca', desc: 'Mano trazando descenso vertical directo', tip: 'Baja la mano plana en ángulo recto acompañando con expresión firme.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-nunca.jpg' },
      { id: 'dic-siempre', letter: 'Siempre', desc: 'Puños al centro con movimiento constante', tip: 'Mantén ambas manos alineadas frente al torso indicando continuidad.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-siempre.jpg' },
      { id: 'dic-tal-vez', letter: 'Tal vez', desc: 'Palma girando suavemente al costado', tip: 'Eleva una mano al lado del hombro y rótala suavemente mostrando duda.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-tal-vez.jpg' },
      { id: 'dic-tambien', letter: 'También', desc: 'Índice bajando hasta tocar la otra mano', tip: 'Desciende el dedo índice doblado hasta encontrarse con la otra mano al frente.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-tambien.jpg' },
      { id: 'dic-tampoco', letter: 'Tampoco', desc: 'Índice desde el pecho hacia el frente', tip: 'Mueve el índice paralelo al pecho en señal negativa compartida.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-tampoco.jpg' },
      { id: 'dic-todos', letter: 'Todos', desc: 'Ambas manos abriendo en arco amplio', tip: 'Extiende ambos brazos en un círculo inclusivo de atrás hacia adelante.', color: '#2F855A', category: 'Conectores y Adverbios', img: 'assets/signs/dic-todos.jpg' },

      // Verbos
      { id: 'dic-abrazar', letter: 'Abrazar', desc: 'Brazos cruzados apretando el pecho', tip: 'Cruza ambos brazos sobre tu torso imitando un abrazo cálido.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-abrazar.jpg' },
      { id: 'dic-aceptar', letter: 'Aceptar', desc: 'Palmas abriendo y atrayendo al pecho', tip: 'Recoge ambas manos desde adelante cerrándolas suavemente contra el pecho.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-aceptar.jpg' },
      { id: 'dic-agruparse', letter: 'Agruparse', desc: 'Manos cerrando al centro frente al pecho', tip: 'Junta ambas manos curvadas acercándolas desde los lados hacia el centro.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-agruparse.jpg' },
      { id: 'dic-apagar', letter: 'Apagar', desc: 'Ambas manos cerrando hacia abajo', tip: 'Baja y cierra los dedos abiertos simultáneamente simulando apagar una luz.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-apagar.jpg' },
      { id: 'dic-apostar', letter: 'Apostar', desc: 'Puños bajando en golpecito suave', tip: 'Desciende las manos juntas en paralelo frente al pecho.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-apostar.jpg' },
      { id: 'dic-aprender', letter: 'Aprender', desc: 'Mano tomando hacia la frente', tip: 'Lleva los dedos desde afuera cerrándose al tocar la frente.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-aprender.jpg' },
      { id: 'dic-aprovechar', letter: 'Aprovechar', desc: 'Puño subiendo frente al pecho', tip: 'Eleva la mano cerrada con pulgar al costado en un movimiento firme hacia arriba.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-aprovechar.jpg' },
      { id: 'dic-atraer', letter: 'Atraer', desc: 'Mano curvada trayendo hacia sí', tip: 'Extiende la mano curvada y llévala hacia el pecho atrayendo el gesto.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-atraer.jpg' },
      { id: 'dic-averiguar', letter: 'Averiguar', desc: 'Mano girando suavemente al frente', tip: 'Mueve la mano cerrada hacia adelante realizando pequeños desplazamientos indagatorios.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-averiguar.jpg' },
      { id: 'dic-avisar', letter: 'Avisar', desc: 'Mano saliendo desde la otra palma', tip: 'Proyecta una mano plana por encima de la otra hacia el interlocutor.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-avisar.jpg' },
      { id: 'dic-bailar', letter: 'Bailar', desc: 'Dos dedos balanceándose sobre la palma', tip: 'Apoya índice y medio como piernas sobre la palma contraria y balancealos con ritmo.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-bailar.jpg' },
      { id: 'dic-caminar', letter: 'Caminar', desc: 'Índice y medio alternando como pasos', tip: 'Desliza dos dedos en V imitando pasos por encima de la otra palma.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-caminar.jpg' },
      { id: 'dic-comenzar', letter: 'Comenzar', desc: 'Puños girando al unísono al frente', tip: 'Sostén ambas manos cerradas con pulgares arriba y llévalas hacia abajo al iniciar.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-comenzar.jpg' },
      { id: 'dic-comer', letter: 'Comer', desc: 'Dedos agrupados acercándose a la boca', tip: 'Junta las yemas de los dedos y llévalas suavemente hacia los labios.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-comer.jpg' },
      { id: 'dic-comunicar', letter: 'Comunicar', desc: 'Manos alternando desde los labios al frente', tip: 'Saca alternadamente los dedos en O desde cerca de la boca hacia afuera.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-comunicar.jpg' },
      { id: 'dic-dejar', letter: 'Dejar', desc: 'Manos abriendo desde el pecho hacia un lado', tip: 'Suelta suavemente las manos hacia afuera simulando soltar o dejar algo.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-dejar.jpg' },
      { id: 'dic-descontar', letter: 'Descontar', desc: 'Mano bajando en arco sobre la palma', tip: 'Desliza los dedos sobre la otra mano en movimiento descendente.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-descontar.jpg' },
      { id: 'dic-felicitar', letter: 'Felicitar', desc: 'Manos cruzándose con entusiasmo al pecho', tip: 'Entrelaza o aprieta ambas manos abiertas frente al pecho con sonrisa.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-felicitar.jpg' },
      { id: 'dic-filmar', letter: 'Filmar', desc: 'Mano girando junto al ojo', tip: 'Acerca la mano en aro al ojo y realiza un movimiento circular con la otra mano como manivela.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-filmar.jpg' },
      { id: 'dic-fundar', letter: 'Fundar', desc: 'Mano agarrando la muñeca contraria', tip: 'Sujeta la muñeca mientras elevas la mano abierta marcando inicio firme.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-fundar.jpg' },
      { id: 'dic-ganar', letter: 'Ganar', desc: 'Puños cerrándose hacia el pecho', tip: 'Atrae la mano extendida cerrando el puño con firmeza hacia el cuerpo.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-ganar.jpg' },
      { id: 'dic-gritar', letter: 'Gritar', desc: 'Mano proyectada con fuerza desde la boca', tip: 'Abre la mano desde los labios hacia adelante acompañando con expresión intensa.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-gritar.jpg' },
      { id: 'dic-gustar', letter: 'Gustar', desc: 'Mano deslizándose abajo sobre el pecho', tip: 'Apoya los dedos en el pecho y desciéndelos suavemente con rostro agradable.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-gustar.jpg' },
      { id: 'dic-hacer', letter: 'Hacer', desc: 'Puños alternando sobre sí mismos', tip: 'Coloca una mano sobre otra en puño y realiza un giro rítmico corto.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-hacer.jpg' },
      { id: 'dic-inventar', letter: 'Inventar', desc: 'Mano abierta subiendo desde la sien', tip: 'Lleva los dedos abiertos desde la frente hacia arriba simulando crear una idea.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-inventar.jpg' },
      { id: 'dic-investigar', letter: 'Investigar', desc: 'Índices moviéndose de lado a lado al centro', tip: 'Desplaza ambos dedos horizontales frente al torso en exploración metódica.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-investigar.jpg' },
      { id: 'dic-inyectar', letter: 'Inyectar', desc: 'Simulación de jeringa en el brazo', tip: 'Apoya la mano contraria en el antebrazo presionando el pulgar como émbolo.', color: '#C53030', category: 'Verbos', img: 'assets/signs/dic-inyectar.jpg' },

      // Lugares y Sustantivos
      { id: 'dic-aviso', letter: 'Aviso', desc: 'Índice trazando círculo hacia un costado', tip: 'Señala con el dedo a la altura del rostro realizando una advertencia visual.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-aviso.jpg' },
      { id: 'dic-balcon', letter: 'Balcón', desc: 'Brazos apoyados formando baranda', tip: 'Coloca los antebrazos paralelos frente al pecho simulando el borde de un balcón.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-balcon.jpg' },
      { id: 'dic-bano', letter: 'Baño', desc: 'Mano junto a la nariz u oreja', tip: 'Coloca la configuración junto al rostro con un pequeño toque distintivo.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-bano.jpg' },
      { id: 'dic-base', letter: 'Base', desc: 'Mano plana deslizada debajo de la otra', tip: 'Sostén una mano horizontal y pasa la otra plana debajo formando un cimiento.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-base.jpg' },
      { id: 'dic-calle', letter: 'Calle', desc: 'Palmas juntas paralelas bajando al frente', tip: 'Coloca ambas manos paralelas como rieles y prolóngalas hacia adelante.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-calle.jpg' },
      { id: 'dic-cama', letter: 'Cama', desc: 'Manos frente al pecho formando rectángulo', tip: 'Dibuja un plano horizontal ancho al frente representando una cama.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-cama.jpg' },
      { id: 'dic-camara', letter: 'Cámara', desc: 'Manos en L encuadrando junto al rostro', tip: 'Coloca ambas manos simulando sostener una cámara frente a los ojos.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-camara.jpg' },
      { id: 'dic-caracter', letter: 'Carácter', desc: 'Mano rozando el brazo con firmeza', tip: 'Desliza los dedos sobre el antebrazo acompañado de expresión seria.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-caracter.jpg' },
      { id: 'dic-caradura', letter: 'Caradura', desc: 'Mano pasando por la mejilla con fuerza', tip: 'Lleva el canto de la mano sobre la mejilla con expresión enfática.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-caradura.jpg' },
      { id: 'dic-casa', letter: 'Casa', desc: 'Puntas de dedos unidas formando techo', tip: 'Une las manos inclinadas arriba formando la silueta de un techo frente al pecho.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-casa.jpg' },
      { id: 'dic-comerciante', letter: 'Comerciante', desc: 'Puños alternando verticalmente al pecho', tip: 'Sube y baja ambos puños frente al torso en intercambio activo.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-comerciante.jpg' },
      { id: 'dic-competencia', letter: 'Competencia', desc: 'Pulgares alternando arriba y abajo', tip: 'Alterna ambos puños con el pulgar extendido enfrentados frente al pecho.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-competencia.jpg' },
      { id: 'dic-concurso', letter: 'Concurso', desc: 'Puños subiendo y bajando frente al pecho', tip: 'Realiza un movimiento vertical alternado entre ambas manos en puño.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-concurso.jpg' },
      { id: 'dic-consejo', letter: 'Consejo', desc: 'Manos proyectando orientación desde el pecho', tip: 'Lleva las manos cerradas desde el torso hacia abajo abriéndose suavemente.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-consejo.jpg' },
      { id: 'dic-cortina', letter: 'Cortina', desc: 'Manos cerrándose o abriendo verticalmente', tip: 'Simula descorrer una tela vertical a la altura de los hombros.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-cortina.jpg' },
      { id: 'dic-cuerpo', letter: 'Cuerpo', desc: 'Palmas recorriendo desde hombros al torso', tip: 'Pasa ambas manos abiertas bajando suavemente por delante del pecho.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-cuerpo.jpg' },
      { id: 'dic-curso', letter: 'Curso', desc: 'Mano sobre el dorso girando al frente', tip: 'Desliza la mano en movimiento circular ordenado sobre la palma base.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-curso.jpg' },
      { id: 'dic-derecho', letter: 'Derecho (Ley)', desc: 'Índice bajando recto sobre la palma', tip: 'Marca firme con el canto o dedo vertical sobre la palma contraria indicando norma o ley.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-derecho.jpg' },
      { id: 'dic-deuda', letter: 'Deuda', desc: 'Dedo tocando suavemente la palma extendida', tip: 'Toca la palma contraria con el dedo inclinado marcando obligación pendiente.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-deuda.jpg' },
      { id: 'dic-diputado', letter: 'Diputado', desc: 'Mano alzada con desplazamiento vertical', tip: 'Eleva la mano cerrada a la altura del hombro con breve vaivén vertical.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-diputado.jpg' },
      { id: 'dic-direccion', letter: 'Dirección', desc: 'Mano plana desplazándose sobre la otra', tip: 'Desliza la mano horizontalmente al frente marcando ubicación o rumbo.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-direccion.jpg' },
      { id: 'dic-directo', letter: 'Directo', desc: 'Mano plana lanzada recto al frente', tip: 'Proyecta la mano vertical hacia adelante en línea recta sin desvíos.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-directo.jpg' },
      { id: 'dic-doble', letter: 'Doble', desc: 'Índice y medio extendiéndose al costado', tip: 'Parte con dos dedos en V y desplázalos hacia un lado indicando duplicidad.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-doble.jpg' },
      { id: 'dic-dolar', letter: 'Dólar', desc: 'Mano trazando línea horizontal junto a la otra', tip: 'Pasa los dedos sobre el dorso de la mano contraria indicando moneda extranjera.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-dolar.jpg' },
      { id: 'dic-droga', letter: 'Droga', desc: 'Mano cerrada cerca de la nariz/boca', tip: 'Lleva los dedos agrupados cerca del rostro con el gesto distintivo.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-droga.jpg' },
      { id: 'dic-educacion', letter: 'Educación', desc: 'Mano desplazándose desde la frente al frente', tip: 'Eleva y abre la mano junto a la sien indicando formación y saber.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-educacion.jpg' },
      { id: 'dic-ejemplo', letter: 'Ejemplo', desc: 'Mano junto a la barbilla proyectada', tip: 'Mueve los dedos agrupados desde el mentón hacia adelante mostrando un caso.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-ejemplo.jpg' },
      { id: 'dic-error', letter: 'Error', desc: 'Mano en Y girando suavemente en el mentón', tip: 'Apoya pulgar o nudillos en la barbilla realizando un breve giro de equivocación.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-error.jpg' },
      { id: 'dic-estrella', letter: 'Estrella', desc: 'Índices alternando hacia arriba', tip: 'Alterna ambos dedos índices apuntando al cielo como destellos.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-estrella.jpg' },
      { id: 'dic-estudiante', letter: 'Estudiante', desc: 'Seña de aprender combinada con persona', tip: 'Toma conocimiento hacia la frente y desciende las manos marcando persona.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-estudiante.jpg' },
      { id: 'dic-extranjero', letter: 'Extranjero', desc: 'Mano subiendo y girando junto al cuello', tip: 'Realiza un movimiento suave hacia abajo desde el costado indicando procedencia externa.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-extranjero.jpg' },
      { id: 'dic-farmacia', letter: 'Farmacia', desc: 'Mano haciendo giro junto al cuello/frente', tip: 'Desplaza la mano cerca del rostro representando el símbolo farmacéutico.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-farmacia.jpg' },
      { id: 'dic-fiesta', letter: 'Fiesta', desc: 'Manos balanceándose alegremente al frente', tip: 'Mueve ambas manos configuradas a los costados con ritmo festivo y sonrisa.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-fiesta.jpg' },
      { id: 'dic-fila', letter: 'Fila', desc: 'Manos paralelas formando una hilera', tip: 'Coloca ambas palmas alineadas frente al torso señalando orden en fila.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-fila.jpg' },
      { id: 'dic-filmadora', letter: 'Filmadora', desc: 'Mano girando junto al ojo sujetando cámara', tip: 'Simula sostener y operar una cámara de video con la mano al lado del rostro.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-filmadora.jpg' },
      { id: 'dic-flor', letter: 'Flor', desc: 'Dedos agrupados acercándose bajo la nariz', tip: 'Acerca los dedos unidos suavemente a ambos lados de la nariz simulando oler una flor.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-flor.jpg' },
      { id: 'dic-historia', letter: 'Historia', desc: 'Mano en movimiento vertical frente al pecho', tip: 'Desplaza la configuración verticalmente marcando hechos del pasado.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-historia.jpg' },
      { id: 'dic-idea', letter: 'Idea', desc: 'Meñique saliendo desde la frente hacia arriba', tip: 'Apoya la punta del meñique junto a la sien y elévalo como una chispa mental.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-idea.jpg' },
      { id: 'dic-iglesia', letter: 'Iglesia', desc: 'Puño apoyado sobre el dorso de la otra mano', tip: 'Coloca la mano cerrada suavemente sobre la otra formando base de templo.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-iglesia.jpg' },
      { id: 'dic-iglesia-catolica', letter: 'Iglesia católica', desc: 'Señal de la cruz sobre el pecho', tip: 'Traza la cruz frente al cuerpo con el índice o dedo correspondiente.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-iglesia-catolica.jpg' },
      { id: 'dic-ingreso', letter: 'Ingreso', desc: 'Mano plana entrando debajo de la otra', tip: 'Introduce la mano suavemente por debajo de la palma contraria indicando entrada.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-ingreso.jpg' },
      { id: 'dic-intercambio', letter: 'Intercambio', desc: 'Puños cruzándose en movimiento opuesto', tip: 'Intercambia la posición de ambas manos frente al pecho simulando un canje.', color: '#B7791F', category: 'Lugares y Sustantivos', img: 'assets/signs/dic-intercambio.jpg' },
    ],
  },
  {
    id: 'frases',
    number: '12',
    title: 'Practicar Frases',
    subtitle: 'Combina pronombres, preguntas, verbos, lugares y cortesía en oraciones LSV',
    accentColor: '#C53030',
    intro:
      '<strong>Práctica final de frases en LSV:</strong> Aquí tienes las señas clave de enlace para repasar antes de armar y practicar oraciones completas paso a paso en la sección interactiva inferior.',
    signs: [
      { id: 'fr-hola', letter: 'Hola', desc: 'Saludo inicial hacia el frente', tip: 'Inicia siempre las conversaciones con contacto visual y saludo claro.', color: '#2F855A', img: 'assets/signs/sal-hola.jpg' },
      { id: 'fr-como-estas', letter: '¿Cómo estás?', desc: 'Pregunta amable por el estado', tip: 'Acompaña la seña con cejas ligeramente elevadas o expresión cálida.', color: '#2F855A', img: 'assets/signs/sal-como-estas.jpg' },
      { id: 'fr-bien', letter: 'Bien', desc: 'Pulgar arriba frente al pecho', tip: 'Respuesta rápida y directa de bienestar.', color: '#2B6CB0', img: 'assets/signs/sal-bien.jpg' },
      { id: 'fr-gracias', letter: '¡Gracias!', desc: 'Mano proyectada desde la barbilla', tip: 'Expresión esencial de cortesía al cerrar una respuesta.', color: '#2B6CB0', img: 'assets/signs/dic-gracias.jpg' },
      { id: 'fr-por-favor', letter: '¡Por favor!', desc: 'Palmas juntas al pecho', tip: 'Úsalo al inicio o cierre de una petición.', color: '#2B6CB0', img: 'assets/signs/dic-por-favor.jpg' },
      { id: 'fr-yo', letter: 'Yo', desc: 'Índice apuntando a tu pecho', tip: 'Establece el sujeto de primera persona.', color: '#1A365D', img: 'assets/signs/pro-yo.jpg' },
      { id: 'fr-nosotros', letter: 'Nosotros', desc: 'Arco circular frente al pecho', tip: 'Incluye a todo tu grupo presente.', color: '#1A365D', img: 'assets/signs/pro-nosotros.jpg' },
      { id: 'fr-donde', letter: '¿Dónde?', desc: 'Índice en círculo interrogativo', tip: 'Las partículas interrogativas en LSV suelen ubicarse al final de la frase.', color: '#1A365D', img: 'assets/signs/dic-donde-q.jpg' },
      { id: 'fr-por-que', letter: '¿Por qué?', desc: 'Manos alternando con gesto de duda', tip: 'Acompaña con cejas fruncidas de pregunta abierta.', color: '#1A365D', img: 'assets/signs/dic-por-que.jpg' },
      { id: 'fr-quiero-preguntar', letter: 'Quiero preguntar', desc: 'Deseo seguido de pregunta', tip: 'Ideal para pedir una aclaración en clase o en la calle.', color: '#2B6CB0', img: 'assets/signs/dic-quiero-preguntar.jpg' },
      { id: 'fr-ensename', letter: '¡Enséñame!', desc: 'Mano proyectada hacia uno mismo', tip: 'Muy útil para aprender nuevas señas directamente.', color: '#2B6CB0', img: 'assets/signs/dic-ensename.jpg' },
      { id: 'fr-aprender', letter: 'Aprender', desc: 'Mano tomando hacia la frente', tip: 'Combínalo con LSV o con "despacio" al practicar.', color: '#C53030', img: 'assets/signs/dic-aprender.jpg' },
      { id: 'fr-caminar', letter: 'Caminar', desc: 'Dos dedos avanzando como pasos', tip: 'Útil en frases sobre salidas y recorridos.', color: '#C53030', img: 'assets/signs/dic-caminar.jpg' },
      { id: 'fr-casa', letter: 'Casa', desc: 'Dedos formando el techo del hogar', tip: 'Indica destino o lugar familiar.', color: '#B7791F', img: 'assets/signs/dic-casa.jpg' },
      { id: 'fr-bano', letter: 'Baño', desc: 'Seña junto al rostro', tip: 'Combínalo con "¿Dónde?" y "Por favor".', color: '#B7791F', img: 'assets/signs/dic-bano.jpg' },
      { id: 'fr-despacio', letter: 'Despacio', desc: 'Palmas descendiendo con calma', tip: 'Perfecto para pedir que te hablen más lento en señas.', color: '#2F855A', img: 'assets/signs/dic-despacio.jpg' },
    ],
  },
];

export const FACTS_DATA: FactItem[] = [
  {
    number: '01',
    title: 'Reconocimiento Oficial',
    text: 'La LSV es reconocida oficialmente en Venezuela desde la Ley para las Personas con Discapacidad (2007).',
  },
  {
    number: '02',
    title: 'No es Universal',
    text: 'Cada país tiene su propia lengua de señas. La LSV es diferente a la ASL o la LSM.',
  },
  {
    number: '03',
    title: 'Lengua Completa',
    text: 'La LSV es una lengua completa con gramática, sintaxis y estructura propia.',
  },
  {
    number: '04',
    title: 'Comunicación Integral',
    text: 'Usa todo el cuerpo: manos, expresión facial y movimiento corporal.',
  },
  {
    number: '05',
    title: 'Intérpretes Certificados',
    text: 'En Venezuela existen intérpretes formados en universidades como la UCV y la UNE.',
  },
  {
    number: '06',
    title: 'Nombres en Señas',
    text: 'La comunidad sorda suele "bautizar" a las personas con una seña particular basada en sus características.',
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    label: 'Reconocimiento Legal',
    text: 'La LSV está reconocida en la Ley para las Personas con Discapacidad (2007) y en la Constitución.',
  },
  {
    label: 'Contacto Visual y Respeto',
    text: 'Mantén siempre el contacto visual directo con la persona sorda, incluso si hay un intérprete presente.',
  },
  {
    label: 'Lengua Completa',
    text: 'La LSV no es mímica. Es una lengua con gramática, sintaxis y estructura lingüística propia.',
  },
  {
    label: 'Componentes No Manuales',
    text: 'La expresión facial, el movimiento corporal y la buena iluminación del rostro son parte esencial del mensaje.',
  },
  {
    label: 'Comunidad Sorda',
    text: 'En Venezuela existen aproximadamente 350.000 personas sordas que utilizan la LSV.',
  },
  {
    label: 'Formación de Intérpretes',
    text: 'Universidades como la UCV y UNE ofrecen formación en interpretación de LSV.',
  },
];
