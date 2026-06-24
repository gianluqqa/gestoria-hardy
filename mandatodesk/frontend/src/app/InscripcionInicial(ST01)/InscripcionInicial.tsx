"use client";

import React, { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "fundamentos", label: "Fundamentos" },
  { id: "st01", label: "ST 01D" },
  { id: "documentacion", label: "Documentación" },
  { id: "casos", label: "Casos especiales" },
  { id: "checklist", label: "Checklist interactivo" },
  { id: "devolucion", label: "Qué devuelve el Registro" },
  { id: "errores", label: "Errores frecuentes" },
];

const STEPS = [
  {
    num: 1,
    title: "Preparación de documentación",
    desc: "El Comerciante Habitualista (concesionaria) o el Mandatario reúne toda la documentación requerida según el tipo de inscripción.",
  },
  {
    num: 2,
    title: "Confección de la ST 01D digital",
    desc: "Se carga en el sistema informático de ACARA. Se verifican datos del vehículo y del adquirente. Se imprime en los documentos de ACARA.",
  },
  {
    num: 3,
    title: "Pago de aranceles e impuestos",
    desc: "Bancarizado obligatorio para Comerciantes Habitualistas, Mandatarios y Mero Presentantes. Optativo para usuarios que actúan por derecho propio. La fecha de emisión del recibo oficial es la fecha de petición.",
  },
  {
    num: 4,
    title: "Presentación en el Registro Seccional",
    desc: "El RS debe despachar el trámite el mismo día de su presentación o dentro de las 24 hs. (Título II, Cap. I, Secc. 1ª, art. 14 DNTR).",
  },
  {
    num: 5,
    title: "Documentación que devuelve el Registro",
    desc: "Título de Propiedad (CAT) · Cédula de Identificación · Código de Dominio (placas metálicas) · Factura de compra original · Oblea Ley de Tránsito (Ley 24449/95) · Certificado de titularidad de oblea · Formulario municipal (ej. 1057 en Santa Fe).",
  },
];

const DOCS_TABLE = [
  { id: "a", doc: "ST 01D", detail: "Digital, uso exclusivo nacionales. Para importados: ST 01D importados." },
  { id: "b", doc: "ST 12D (verificación)", detail: "Verificación policial del vehículo." },
  { id: "c", doc: "Alta en Rentas", detail: "En Santa Fe: Formulario Municipal Nº 1057. Respetar convenios DNRPA–DGR." },
  { id: "d", doc: "F 59", detail: "Según calidad: mero presentante, mandatario, habitualista." },
  { id: "e", doc: "Factura de compra", detail: "Original + 2 copias. Electrónica: no puede enmendarse. Adquisición en condominio: una factura por adquirente (o global si mismo carácter IVA)." },
  { id: "f", doc: "Certificado de Fábrica digital", detail: "Lo emite la terminal. Aprobado por Dirección Nacional." },
  { id: "g", doc: "DNI del adquirente", detail: "Fotocopia certificada por concesionario. Extranjero sin radicación: pasaporte o cédula." },
  { id: "h", doc: "Estatuto/Contrato societario", detail: "Si es persona jurídica. Agregar último acta de designación de cargos + copia simple DNI del firmante/apoderado." },
  { id: "i", doc: "CUIT / CUIL", detail: "Del adquirente, persona humana o jurídica." },
  { id: "j", doc: "Declaración jurada UIF", detail: "Sobre el origen lícito de los fondos." },
];

const CASOS = [
  {
    title: "Automotores Subastados",
    tag: { label: "Frecuente", type: "warn" },
    defaultOpen: true,
    content: (
      <>
        <p className="mb-2">Vehículos vendidos en subasta pública por organismos o bancos oficiales autorizados.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Certificado de Subasta</strong> (original + 2 copias): expedido por el ente subastante. El RS lo constata.</li>
          <li>Copias de notas del organismo subastante informando si estuvo inscripto antes.</li>
          <li>Fotografías de frente y laterales, intervenidas por la autoridad subastante.</li>
          <li><strong>ST 05</strong> (no ST 01).</li>
          <li><strong>Peritaje policial</strong> (verificación).</li>
          <li>Informe de la DNRPA sobre dominio anterior.</li>
        </ul>
        <div className="mt-3 border-l-2 border-amber-600 bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 rounded px-3 py-2 text-sm">
          <strong className="block mb-1">Si faltan codificaciones en motor/chasis</strong>
          El encargado asignará RPA/RPM y autorizará grabado. Luego se realiza un segundo peritaje que confirme el grabado correcto y que el vehículo es el mismo. Recién entonces se inscribe y se entregan título, cédula y placas.
        </div>
      </>
    ),
  },
  {
    title: "Armados Fuera de Fábrica (AFF)",
    tag: { label: "Complejo", type: "error" },
    content: (
      <>
        <p className="mb-2">Automotores ensamblados por particulares con partes de otros vehículos o repuestos nuevos. <strong>Carecen de marca y modelo año.</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>ST 05</strong>.</li>
          <li>Motor y chasis: <strong>solo</strong> se justifican con Certificado de Fábrica o Importación + factura.</li>
          <li>Otras partes esenciales: facturas de compra con firmas certificadas.</li>
          <li>Si el vendedor no es fabricante/distribuidor oficial: cadena de adquisición avalada por <strong>contador público + escribano</strong>.</li>
          <li>Informe técnico mecánico.</li>
          <li>Fotografías del AFF, visadas por la planta verificadora.</li>
          <li>Certificado de domicilio.</li>
          <li>Declaración jurada en la ST 05: autenticidad de documentación + trámite bajo exclusiva responsabilidad del peticionante.</li>
          <li>Toda la documentación + 5 juegos de copias se eleva a la <strong>Dirección Nacional</strong> para aprobación.</li>
        </ul>
        <div className="mt-3 border-l-2 border-red-700 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-300 rounded px-3 py-2 text-sm">
          <strong className="block mb-1">Importante</strong>
          La DNRPA se reserva el derecho de ampliar la requisitoria. El pago del arancel NO implica la aprobación del trámite.
        </div>
      </>
    ),
  },
  {
    title: "Importados usados (ciudadano que regresa al país)",
    tag: { label: "Importante", type: "default" },
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Argentinos con residencia mínima de 2 años en el exterior que regresan definitivamente, y extranjeros con residencia permanente (Res. AFIP 3109/2011).</li>
        <li><strong>1 solo automotor usado por persona</strong>, mayor de 18 años o emancipada.</li>
        <li>Debe estar registrado a nombre del beneficiario en el exterior con mínimo <strong>3 meses antes</strong> del ingreso al país.</li>
        <li>Ingresa libre de derechos si no supera <strong>USD 15.000</strong>; si supera, paga tributos.</li>
        <li>Arribo: hasta 3 meses antes o hasta 6 meses después del ingreso de la persona.</li>
        <li>La ST 01D la emite la <strong>Delegación DNRPA en Aduana</strong>. El Mandatario interviene desde ahí.</li>
        <li><strong>No se requiere factura</strong>. La ST 01D la firma el beneficiario como importador <em>y</em> adquirente.</li>
        <li><strong>No puede transferirse por 2 años</strong> desde la nacionalización. Debe constar en el Título.</li>
      </ul>
    ),
  },
  {
    title: "Automotores para Personas con Discapacidad",
    tag: { label: "Frecuente", type: "default" },
    content: (
      <>
        <p className="mb-2">Ley 19279 y modificatorias. Régimen de contribución estatal para la adquisición de automotores nuevos.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Adjuntar <strong>Disposición del Servicio Nacional de Rehabilitación</strong> (Certificado de Discapacidad).</li>
          <li>Constar en el título: inembargable y sin posibilidad de venta/donación/permuta por <strong>30 meses (nacionales)</strong> o <strong>4 años (importados)</strong>.</li>
          <li>Para transferir después de ese plazo: presentar certificación de <strong>libre disponibilidad</strong> del Servicio de Rehabilitación.</li>
          <li>Solicitar exención de patentes con copia certificada del Certificado de Discapacidad en el Formulario de Rentas.</li>
        </ul>
        <div className="mt-3 border-l-2 border-green-700 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-300 rounded px-3 py-2 text-sm">
          <strong className="block mb-1">Excepción embargabilidad</strong>
          Si el automotor fue adquirido a crédito en cuotas y afectado por Contrato de Prenda, <em>sí puede ser embargado</em> por el acreedor prendario.
        </div>
      </>
    ),
  },
  {
    title: "Motovehículos",
    tag: { label: "Frecuente", type: "default" },
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Se inscriben en el <strong>Registro Nacional con competencia exclusiva en Motovehículos</strong>.</li>
        <li>Mismos requisitos que automotores. ST 01D.</li>
        <li>Se autoriza la expedición de <strong>Cédula de Autorizado a Conducir</strong>.</li>
        <li>Para traslado a más de <strong>100 km</strong> del lugar de adquisición: autorización para conducir emitida por el Registro, vigencia <strong>7 días corridos</strong>.</li>
        <li>Formularios de menor costo que los de automotores.</li>
        <li>Pago de patentes: se realiza con <strong>posterioridad</strong> a la inscripción, en el municipio correspondiente.</li>
      </ul>
    ),
  },
  {
    title: "Ley 19.640 — Tierra del Fuego",
    tag: { label: "Especial", type: "default" },
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>En la ST 01, sección Observaciones: consignar que está sometido al régimen de la Ley 19.640.</li>
        <li>Verificación: se realiza en <strong>Tierra del Fuego</strong> (salvo que la documentación acredite verificación por autoridad aduanera).</li>
        <li>No puede haber cambio de radicación sin constancia de <strong>desafectación del régimen</strong> emitida por Aduana.</li>
        <li>Importados: no pueden transferirse ni desafectarse por <strong>5 años</strong>. Nacionales: restricción de desafectación por <strong>3 años</strong>.</li>
        <li>No pueden permanecer fuera de Tierra del Fuego más de <strong>120 días</strong> totales/año, en no más de <strong>5 salidas</strong>, sin superar <strong>60 días corridos</strong> por salida.</li>
      </ul>
    ),
  },
  {
    title: "Automotores adjudicados por rifas",
    tag: null,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Inscripción a nombre del beneficiario indicado en el <strong>certificado o acta de sorteo</strong>, firmado por el representante legal de la entidad autorizada.</li>
        <li>El acta debe consignar: número sorteado, nombre/apellido/documento del adjudicatario y descripción del automotor.</li>
        <li>Factura de venta a nombre de la entidad rifadora.</li>
        <li>Acto administrativo de la autoridad que autorizó la rifa (copia autenticada o certificada por escribano).</li>
      </ul>
    ),
  },
  {
    title: "Transporte de carga y pasajeros",
    tag: null,
    content: (
      <>
        <p className="mb-2">Camión, chasis con cabina, tractor, furgón, pickup, acoplado, semiacoplado, transporte de pasajeros, etc.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Declaración jurada de afectación a transporte de carga o pasajeros, con firma certificada por escribano o encargado de registro.</li>
          <li>Dentro de los <strong>90 días</strong>: presentar habilitación por autoridad competente. Si no se cumple, el RS no inscribirá otro trámite sobre ese dominio hasta abonar la multa (Disp. Nº 363/01).</li>
        </ul>
      </>
    ),
  },
];

const DEVOLUCION_ITEMS = [
  { icon: "📄", title: "Título de Propiedad del Automotor (CAT)", desc: "Documento que acredita el dominio. En casos especiales (discapacidad, importados con restricción, Tierra del Fuego) se consignan leyendas de inembargabilidad o restricción de transferencia directamente en el título." },
  { icon: "🪪", title: "Cédula de Identificación", desc: 'Habilita la circulación del vehículo. En importados con restricciones (ej. repatriación, régimen diplomático) se asienta la leyenda "Único autorizado a conducir". Sin cédula el vehículo no puede circular legalmente.' },
  { icon: "🔢", title: "Código de Dominio (placas metálicas)", desc: "Las placas de identificación que reflejan el número de dominio asignado al automotor. En inscripciones por importación directa o verificación en planta, puede solicitarse previamente un juego de placas provisorias." },
  { icon: "📃", title: "Factura de Compra original", desc: "El Registro devuelve el original de la factura de compra una vez intervenido el trámite. Es el documento que acredita la adquisición del vehículo." },
  { icon: "🏷️", title: "Oblea Ley de Tránsito (Ley 24.449/95)", desc: "Cuando corresponda según la categoría del vehículo. Acredita el cumplimiento de los requisitos de la Ley Nacional de Tránsito y Seguridad Vial." },
  { icon: "📋", title: "Certificado de titularidad de oblea", desc: "Documento complementario a la oblea de la Ley de Tránsito, que certifica la titularidad del vehículo en relación a dicha oblea." },
  { icon: "📑", title: "Formulario municipal (ej. 1057 en Santa Fe)", desc: "La parte municipal del trámite. En la Provincia de Santa Fe se utiliza el Formulario Municipal Nº 1057 u el que correspondiere según la jurisdicción." },
];

const ERRORES = [
  { type: "error", title: "Error #1 — Usar ST 01D de nacionales para un importado", desc: "Son formularios distintos. La ST 01D para nacionales NO puede usarse en trámites de importados. El sistema lo rechaza, pero el error ya puede haber retrasado el trámite y generado costos adicionales." },
  { type: "error", title: "Error #2 — Olvidar el F 59", desc: "El F 59 acredita la calidad del presentante. Sin él, el Registro no puede determinar si el pago bancarizado es obligatorio u optativo, y el trámite queda observado." },
  { type: "error", title: "Error #3 — Presentar factura enmendada", desc: "La factura electrónica no puede enmendarse. Si tiene correcciones, debe tramitarse una nota de crédito y una nueva factura. El Registro rechaza facturas con enmiendas." },
  { type: "warn", title: "Error #4 — Confundir la fecha de pago con la fecha de petición", desc: "El pago bancarizado previo es solo un pago parcial. La fecha que importa para todos los efectos (incluyendo vencimientos, prioridades) es la de emisión del recibo oficial del RS." },
  { type: "warn", title: "Error #5 — No agregar el acta de designación de cargos en personas jurídicas", desc: "El estatuto social no es suficiente. Siempre debe acompañarse el último acta de designación de autoridades y copia del DNI del firmante o apoderado." },
  { type: "warn", title: "Error #6 — Olvidar la declaración jurada UIF", desc: "Es obligatoria en todas las inscripciones iniciales. La omisión genera observación registral y demora el trámite." },
  { type: "warn", title: "Error #7 — En AFF: justificar partes esenciales con facturas simples", desc: "Motor y chasis nuevos solo se justifican con Certificado de Fábrica o Importación + factura. Si el vendedor no es fabricante/distribuidor, se exige la cadena completa avalada por contador y escribano. Una factura sola no alcanza." },
  { type: "ok", title: "Observación registral frecuente — Modelo año", desc: "Si el vehículo tiene modelo año diferente al año de fabricación declarado, verificar si aplica alguna circular (DN 1/16 o 45/16). Sin la declaración jurada del fabricante, el RS observará el trámite." },
];

const COMPARATIVA = [
  { tipo: "Nacional (0km)", form: "ST 01D nacionales", factura: "Sí, obligatoria", certif: "Certificado de Fábrica" },
  { tipo: "Importado (0km)", form: "ST 01D importados", factura: "Sí, obligatoria", certif: "Certificado de Importación" },
  { tipo: "Importación directa", form: "ST 01 importados", factura: "No (si inscribe en favor del declarado en despacho)", certif: "Certificado de Importación + despacho aduanero" },
  { tipo: "Importado usado (repatriación)", form: "ST 01D (emite DNRPA en Aduana)", factura: "No", certif: "Documentación aduanera" },
  { tipo: "Subastado", form: "ST 05", factura: "No", certif: "Certificado de Subasta" },
  { tipo: "AFF", form: "ST 05", factura: "Sí (todas las partes)", certif: "Certif. fábrica/import. por motor y chasis" },
  { tipo: "Clásico", form: "ST 05", factura: "—", certif: "Constancia de Origen del Registro de Clásicos" },
  { tipo: "Motovehículo", form: "ST 01D", factura: "Sí", certif: "Certificado de Fábrica" },
];

const CHECKLIST_NACIONAL = [
  "ST 01D digital (confeccionada en sistema ACARA)",
  "ST 12D — verificación policial",
  "Alta en Rentas — Formulario Municipal 1057 (Santa Fe)",
  "F 59 (calidad del presentante)",
  "Factura de compra — original + 2 copias (o acto jurídico equivalente)",
  "Certificado de Fábrica digital",
  "DNI adquirente — fotocopia certificada por concesionario",
  "Estatuto/Contrato social + último acta designación cargos + DNI firmante (si persona jurídica)",
  "CUIT / CUIL del adquirente",
  "Declaración jurada UIF (origen lícito de fondos)",
  "Pago bancarizado de aranceles (si mandatario/habitualista)",
];

const CHECKLIST_IMPORTADO = [
  "ST 01D para importados (no la de nacionales)",
  "Certificado de Importación (reemplaza al de Fábrica)",
  "Despacho de importación aduanero (IVA 21%, percepción 8/9%, Ganancias 3%)",
  "Firmas certificadas en Registro o ante escribano",
];

const CHECKLIST_SUBASTA = [
  "ST 05 (no ST 01)",
  "Certificado de Subasta — original + 2 copias",
  "Copias de notas del organismo subastante (dominio anterior)",
  "Fotografías frente y laterales intervenidas por autoridad subastante",
  "Peritaje policial",
  "Informe DNRPA sobre dominio anterior",
  "DNI/CUIT adquirente + demás requisitos generales",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

interface CalloutProps {
  type?: "info" | "warn" | "error" | "ok";
  title?: string;
  children: React.ReactNode;
}

function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = {
    info: "border-blue-600 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-200",
    warn: "border-amber-600 bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300",
    error: "border-red-700 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-300",
    ok: "border-green-700 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-300",
  };
  return (
    <div className={`border-l-4 rounded-md px-4 py-3 my-4 text-sm ${styles[type as keyof typeof styles]}`}>
      {title && <strong className="block mb-1">{title}</strong>}
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-bold text-blue-700 dark:text-blue-400 border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
      {children}
    </h2>
  );
}

interface CardProps {
  title?: string | React.ReactNode;
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 mb-4">
      {title && <div className="text-sm font-bold text-blue-700 dark:text-blue-400 mb-2">{title}</div>}
      {children}
    </div>
  );
}

interface TagProps {
  label: string;
  type?: "default" | "warn" | "error" | "ok";
}

function Tag({ label, type = "default" }: TagProps) {
  const styles = {
    default: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
    warn: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
    error: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
    ok: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ml-2 ${styles[type as keyof typeof styles]}`}>
      {label}
    </span>
  );
}

interface AccordionProps {
  title: string;
  tag?: { label: string; type?: "default" | "warn" | "error" | "ok" } | null;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Accordion({ title, tag, children, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <details
      open={open}
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
      className="border border-gray-200 dark:border-gray-700 rounded-xl mb-2 overflow-hidden"
    >
      <summary className="flex justify-between items-center px-4 py-3 text-sm font-bold cursor-pointer bg-white dark:bg-gray-800 list-none select-none">
        <span>
          {title}
          {tag && <Tag label={tag.label} type={tag.type as any} />}
        </span>
        <span className="text-gray-400 text-xs">{open ? "▾" : "▸"}</span>
      </summary>
      <div className="px-4 py-3 text-sm bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        {children}
      </div>
    </details>
  );
}

interface ChecklistItemProps {
  text: string;
  checked: boolean;
  onToggle: () => void;
}

function ChecklistItem({ text, checked, onToggle }: ChecklistItemProps) {
  return (
    <li
      onClick={onToggle}
      className="flex items-start gap-3 py-2 border-b border-gray-100 dark:border-gray-700 last:border-none text-sm cursor-pointer select-none"
    >
      <div className={`w-5 h-5 flex-shrink-0 rounded border flex items-center justify-center mt-0.5 transition-all ${checked ? "bg-green-600 border-green-600 text-white" : "border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900"}`}>
        {checked && <span className="text-xs">✓</span>}
      </div>
      <span className={checked ? "line-through text-gray-400" : "text-gray-700 dark:text-gray-300"}>{text}</span>
    </li>
  );
}

export interface ChecksState {
  nacional?: Record<number, boolean>;
  importado?: Record<number, boolean>;
  subasta?: Record<number, boolean>;
}

interface ChecklistGroupProps {
  title: string;
  items: string[];
  stateKey: keyof ChecksState;
  checks: ChecksState;
  setChecks: React.Dispatch<React.SetStateAction<ChecksState>>;
}

function ChecklistGroup({ title, items, stateKey, checks, setChecks }: ChecklistGroupProps) {
  const toggle = (i: number) => {
    setChecks((prev: ChecksState) => ({ ...prev, [stateKey]: { ...prev[stateKey], [i]: !prev[stateKey]?.[i] } }));
  };
  const reset = () => {
    setChecks((prev: ChecksState) => ({ ...prev, [stateKey]: {} }));
  };
  return (
    <div className="mb-6">
      <h3 className="font-bold text-base mb-2 mt-4">{title}</h3>
      <ul className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4">
        {items.map((item, i) => (
          <ChecklistItem key={i} text={item} checked={!!checks[stateKey]?.[i]} onToggle={() => toggle(i)} />
        ))}
      </ul>
      <button onClick={reset} className="text-xs text-gray-400 underline mt-2 cursor-pointer bg-transparent border-none">↺ Resetear checklist</button>
    </div>
  );
}

// ─── Section Components ───────────────────────────────────────────────────────

function Fundamentos() {
  return (
    <section>
      <SectionTitle>¿Qué es la Inscripción Inicial?</SectionTitle>
      <Card title="Definición legal">
        <p className="text-sm">Es el acto registral —también llamado <strong>matriculación</strong>— por el cual se constituye, a favor de su primer titular:</p>
        <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
          <li>El <strong>derecho real de dominio</strong> sobre el automotor, al que se le asigna un código de dominio.</li>
          <li>Se le <strong>abre el Legajo B</strong> en el Registro Seccional de radicación.</li>
          <li>Se expide el <strong>Título del Automotor</strong> y la <strong>Cédula de Identificación</strong>.</li>
        </ul>
      </Card>

      <Callout type="info" title="Clave para el Mandatario">
        El dominio no preexiste: se <em>crea</em> con la inscripción. Sin inscripción, no hay propiedad registrada. Este es el eje conceptual de toda la materia.
      </Callout>

      <h3 className="font-bold text-base mt-5 mb-3">Flujo general del trámite</h3>
      <div className="flex flex-col gap-0">
        {STEPS.map((step, idx) => (
          <div key={step.num} className="flex gap-4 relative">
            {idx < STEPS.length - 1 && (
              <div className="absolute left-[15px] top-9 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
            )}
            <div className="w-8 h-8 rounded-full bg-blue-700 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 z-10">{step.num}</div>
            <div className="pb-5 flex-1">
              <strong className="block text-sm font-bold mb-1">{step.title}</strong>
              <p className="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-bold text-base mt-5 mb-2">Controles que realiza el Registro</h3>
      <Card>
        <p className="text-sm">Desde la Circular DN 12/17, el Registro <strong>NO</strong> controla la coincidencia entre el comerciante que comercializó el vehículo y el que adquirió la ST 01D: ese control lo hace automáticamente el sistema informático de ACARA. El Encargado procesa el trámite en forma definitiva dentro de las 24 hs. de recibido.</p>
      </Card>

      <h3 className="font-bold text-base mt-5 mb-2">Modelo año del vehículo</h3>
      <p className="text-sm">Por Circs. DN 1/2016 y 45/2016, los fabricantes pueden solicitar a la DNRPA inscribir stock del año anterior como modelo del año siguiente. Condiciones: fabricados desde el 1° de abril del año correspondiente, VIN con dígito 10 correcto, declaración jurada del fabricante. Válido para inscripciones hasta el <strong>31 de marzo</strong> del año siguiente al modelo original.</p>
    </section>
  );
}

function ST01() {
  return (
    <section>
      <SectionTitle>Solicitud Tipo 01D — El corazón del trámite</SectionTitle>
      <Callout type="info" title="¿Qué es la ST 01D?">
        Es el formulario digital de uso exclusivo para inscripciones iniciales de automotores nacionales e importados. Reemplazó al formato papel. Se adquiere y confecciona a través del sistema informático de ACARA (Asociación de Concesionarios de Automotores de la República Argentina).
      </Callout>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card title="¿Quiénes la usan?">
          <ul className="text-sm pl-4 list-disc space-y-1">
            <li>Comerciantes Habitualistas inscriptos en el registro DNRPA (concesionarias)</li>
            <li>Empresas terminales (fabricantes)</li>
            <li>Importadores directos y eventualitas (autorizados por DNRPA)</li>
            <li>Mandatarios matriculados (F 59)</li>
            <li>Mero Presentante (F 59)</li>
          </ul>
        </Card>
        <Card title="Pasos para confeccionarla">
          <ol className="text-sm pl-4 list-decimal space-y-1">
            <li>Adquirir la ST 01D y ST 12 digitales en ACARA</li>
            <li>Consignar número de certificado de fabricación/importación</li>
            <li>Consignar número de ST (debe ser del propio comerciante)</li>
            <li>Verificar datos del automotor</li>
            <li>Ingresar CUIT/CUIL del adquirente</li>
            <li>Controlar datos antes de imprimir</li>
            <li>Imprimir en documentos de ACARA</li>
            <li>Firmar en original (Comerciante Habitualista + adquirente si certifica)</li>
          </ol>
        </Card>
      </div>

      <h3 className="font-bold text-base mt-5 mb-2">Casos especiales de la ST 01D</h3>
      <Accordion title="Sociedades de hecho">
        <p>Se confecciona una ST 01D a nombre de la sociedad de hecho <strong>y otra adicional por cada dos socios</strong>. Es decir, una ST 01 digital cada dos socios para consignar sus datos.</p>
      </Accordion>
      <Accordion title="Importación directa (no por habitualista)">
        <p>Cuando el comprador declarado en despacho <strong>no es terminal ni representante oficial</strong>, se usa la <strong>ST 01 para importados</strong>. Las firmas se certifican en el Registro o ante escribano (no ante el comerciante). <strong>No se requiere factura</strong> si la inscripción es a favor del mismo comprador declarado en despacho.</p>
      </Accordion>
      <Accordion title="Comerciantes Habitualistas (inscripción a su favor)">
        <p>Por Disp. DN 143/17, cuando la inscripción es a favor de la terminal, comprador en despacho o concesionaria oficial y <strong>no está orientada al uso en vía pública</strong>, se puede solicitar que no se emita la Cédula de Identificación ni el Título. No pagan el arancel correspondiente a esos documentos. Atención: sin cédula, el vehículo no puede circular.</p>
      </Accordion>

      <Callout type="warn" title="F 59 — Fundamental para el Mandatario">
        El F 59 identifica la calidad del presentante: Mero Presentante, Mandatario Matriculado o Comerciante Habitualista. Siempre debe adjuntarse. Error frecuente: olvidarlo o presentar el tipo incorrecto.
      </Callout>
    </section>
  );
}

function Documentacion() {
  return (
    <section>
      <SectionTitle>Documentación a presentar en el Registro</SectionTitle>
      <Callout type="info" title="Base común a toda Inscripción Inicial de automotor nacional">
        Los ítems siguientes son el núcleo de cualquier trámite de II. Los casos especiales agregan requisitos adicionales sobre esta base.
      </Callout>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse mt-3">
          <thead>
            <tr>
              <th className="text-left text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200 dark:border-gray-700 py-2 px-2">#</th>
              <th className="text-left text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200 dark:border-gray-700 py-2 px-2">Documento</th>
              <th className="text-left text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200 dark:border-gray-700 py-2 px-2">Detalle clave</th>
            </tr>
          </thead>
          <tbody>
            {DOCS_TABLE.map((row) => (
              <tr key={row.id} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                <td className="py-2 px-2 align-top text-gray-500">{row.id}</td>
                <td className="py-2 px-2 align-top font-semibold">{row.doc}</td>
                <td className="py-2 px-2 align-top text-gray-600 dark:text-gray-400">{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="font-bold text-base mt-5 mb-2">Documentación adicional para importados</h3>
      <Card>
        <p className="text-sm mb-2">La documentación es idéntica a la de nacionales, más:</p>
        <ul className="text-sm pl-4 list-disc space-y-1">
          <li><strong>Despacho de importación aduanero</strong>: debe figurar el pago de IVA (21%), percepción adicional (8% o 9% según condición DGI) y anticipo Ganancias (3%).</li>
          <li><strong>Certificado de Importación</strong> (en lugar del certificado de fábrica).</li>
          <li>Las firmas en la ST 01 para importados se certifican ante el Registro o escribano (el habitualista puede certificar si realizó la gestión de importación).</li>
        </ul>
      </Card>

      <h3 className="font-bold text-base mt-5 mb-2">Pago de aranceles — Reglas clave</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Callout type="error" title="Obligatorio bancarizado">
          Comerciantes Habitualistas, Mandatarios y Mero Presentantes deben pagar aranceles e impuestos mediante pago bancarizado (cheque certificado, débito, homebanking, transferencia).
        </Callout>
        <Callout type="ok" title="Optativo para usuario particular">
          El usuario que peticiona por derecho propio puede pagar en efectivo (con las limitaciones de Disp. DN 190/16).
        </Callout>
      </div>
      <Callout type="warn" title="Fecha de petición registral">
        El pago electrónico previo es pago parcial. La fecha que cuenta para todos los efectos legales es la de emisión del <strong>recibo de aranceles oficial</strong> e imposición del cargo por el RS.
      </Callout>
    </section>
  );
}

function CasosEspeciales() {
  return (
    <section>
      <SectionTitle>Casos especiales — Los más relevantes en práctica</SectionTitle>
      {CASOS.map((caso, i) => (
        <Accordion key={i} title={caso.title} tag={caso.tag as AccordionProps["tag"]} defaultOpen={caso.defaultOpen}>
          {caso.content}
        </Accordion>
      ))}
    </section>
  );
}

function Checklist() {
  const [checks, setChecks] = useState<ChecksState>({ nacional: {}, importado: {}, subasta: {} });
  return (
    <section>
      <SectionTitle>Checklist interactivo</SectionTitle>
      <p className="text-sm text-gray-500 mb-4">Hacé clic en cada ítem para marcarlo como verificado. Ideal para preparar el expediente antes de ir al Registro.</p>
      <ChecklistGroup title="✅ Inscripción Inicial — Automotor Nacional" items={CHECKLIST_NACIONAL} stateKey="nacional" checks={checks} setChecks={setChecks} />
      <ChecklistGroup title="✅ Adicionales para Importados" items={CHECKLIST_IMPORTADO} stateKey="importado" checks={checks} setChecks={setChecks} />
      <ChecklistGroup title="✅ Automotor Subastado" items={CHECKLIST_SUBASTA} stateKey="subasta" checks={checks} setChecks={setChecks} />
    </section>
  );
}

function Devolucion() {
  return (
    <section>
      <SectionTitle>¿Qué devuelve el Registro al finalizar la Inscripción Inicial?</SectionTitle>
      <Callout type="info" title="Plazo de procesamiento">
        El Registro Seccional procesa el trámite en forma definitiva dentro de las <strong>24 horas</strong> de recibido (Título II, Cap. I, Secc. 1ª, art. 14 DNTR). Una vez aprobado, entrega la siguiente documentación al peticionante:
      </Callout>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {DEVOLUCION_ITEMS.map((item, i) => (
          <Card key={i} title={`${item.icon} ${item.title}`}>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
          </Card>
        ))}
      </div>
      <Callout type="warn" title="Casos en que NO se emite Cédula ni Título">
        Por Disp. DN 143/17, cuando la inscripción inicial es a favor de una terminal, comprador declarado en despacho o concesionaria oficial, y el vehículo <strong>no está destinado a circular en la vía pública</strong>, se puede optar por no solicitar la emisión de la Cédula de Identificación y el Título. En ese caso, no se abona el arancel correspondiente a dichos documentos. Atención: sin cédula, el vehículo no puede circular.
      </Callout>
      <Callout type="ok" title="Clave para el examen">
        El Registro entrega <strong>7 ítems</strong>: Título (CAT) · Cédula · Placas (código de dominio) · Factura original · Oblea Ley 24.449/95 · Certificado de titularidad de oblea · Formulario municipal. Memorizalos en ese orden.
      </Callout>
    </section>
  );
}

function Errores() {
  return (
    <section>
      <SectionTitle>Errores frecuentes y observaciones registrales</SectionTitle>
      {ERRORES.map((e, i) => (
        <Callout key={i} type={e.type as CalloutProps["type"]} title={e.title}>{e.desc}</Callout>
      ))}

      <h3 className="font-bold text-base mt-6 mb-3">Tabla comparativa rápida — ST según tipo de II</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {["Tipo de inscripción", "Formulario", "¿Factura?", "Certif. origen"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wider text-gray-500 border-b-2 border-gray-200 dark:border-gray-700 py-2 px-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARATIVA.map((row, i) => (
              <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-none">
                <td className="py-2 px-2 align-top font-medium">{row.tipo}</td>
                <td className="py-2 px-2 align-top text-gray-600 dark:text-gray-400">{row.form}</td>
                <td className="py-2 px-2 align-top text-gray-600 dark:text-gray-400">{row.factura}</td>
                <td className="py-2 px-2 align-top text-gray-600 dark:text-gray-400">{row.certif}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const SECTION_COMPONENTS = {
  fundamentos: Fundamentos,
  st01: ST01,
  documentacion: Documentacion,
  casos: CasosEspeciales,
  checklist: Checklist,
  devolucion: Devolucion,
  errores: Errores,
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function InscripcionInicial() {
  const [active, setActive] = useState<keyof typeof SECTION_COMPONENTS>("fundamentos");
  const ActiveSection = SECTION_COMPONENTS[active];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Header */}
        <header className="border-b-2 border-blue-700 pb-4 mb-8">
          <h1 className="text-xl font-bold text-blue-700 dark:text-blue-400 tracking-tight">
            Inscripción Inicial — Guía Práctica del Mandatario
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Asociación Empresaria de Rosario · Prof. Dra. Clarisa V. Machado · Edición 2026
          </p>
        </header>

        {/* Nav */}
        <nav className="flex flex-wrap gap-2 mb-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id as keyof typeof SECTION_COMPONENTS)}
              className={`px-3 py-1.5 rounded-full text-xs border transition-all font-medium cursor-pointer ${
                active === item.id
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Active section */}
        <ActiveSection />
      </div>
    </div>
  );
}