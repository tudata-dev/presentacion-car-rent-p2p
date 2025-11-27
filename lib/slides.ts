export interface Slide {
  title: string
  content: string | string[]
}

export const slides: Slide[] = [
  {
    title: "Visión General de la Solución",
    content: [
      "**Marketplace peer-to-peer** que conecta propietarios de vehículos con arrendatarios temporales.",
      "Plataforma intermedia que habilita procesos completos: publicación, verificación, reserva, pago con custodia, firma electrónica y soporte.",
      "**MVP diseñado** para validar tres hipótesis críticas del modelo de negocio.",
    ],
  },
  {
    title: "Hipótesis Críticas del MVP",
    content: [
      "**Hipótesis 1:** Existe demanda suficiente de propietarios y arrendatarios en el mercado.",
      "**Hipótesis 2:** El modelo de comisión puede sostenerse con un flujo transaccional real.",
      "**Hipótesis 3:** La operación puede mantenerse dentro de un marco legal seguro y verificable.",
    ],
  },
  {
    title: "Arquitectura y Componentes",
    content: [
      "**Capa de presentación:** App móvil para propietarios y arrendatarios, Web-APP para administradores.",
      "**Backend distribuido** en servicios funcionales: autenticación, catálogos, reservas, pagos, seguros, notificaciones.",
      "**Datos separados** en base relacional, almacenamiento de objetos y data lake básico para telemetría.",
    ],
  },
  {
    title: "Identidad y Verificación",
    content: [
      "**Validación documental robusta:** cédula y licencia con biometría facial y *liveness detection*.",
      "**Validaciones automáticas** de SOAT y revisión técnico-mecánica del vehículo.",
      "**Firma electrónica** de contratos conforme a la Ley 527 de 1999.",
    ],
  },
  {
    title: "Pagos y Custodia (Escrow)",
    content: [
      "El arrendatario paga al momento de la reserva, fondos ingresan a **cuenta escrow** administrada por la plataforma.",
      "**Liberación de dinero** al propietario depende de *check-in exitoso*, ausencia de reclamos y evidencia cargada.",
      "Plataforma calcula automáticamente **comisiones, IVA y retenciones**.",
    ],
  },
  {
    title: "Seguros y Gestión de Riesgos",
    content: [
      "**Distribución de pólizas temporales** on-demand y coberturas complementarias al SOAT.",
      "**Módulo de siniestros** permite registrar incidentes, adjuntar evidencia y activar workflows de revisión.",
      "Documentación de compensaciones y **bloqueo de vehículos** cuando sea necesario.",
    ],
  },
  {
    title: "Compliance y Protección de Datos",
    content: [
      "**Políticas de privacidad** ajustadas a la Ley 1581 de 2012 sobre protección de datos personales.",
      "**Registro explícito de consentimientos** y repositorio de contratos con auditoría y trazabilidad.",
      "Prevención de cualquier interpretación como servicio de *transporte público*.",
    ],
  },
  {
    title: "Infraestructura y Seguridad",
    content: [
      "**Operación en proveedor cloud** con aislamiento entre ambientes y encriptación de datos.",
      "**Identity & Access Management** (IAM), WAF y defensas contra DDoS.",
      "Estrategias de *backup*, **recuperación** y cumplimiento con residencia de datos en Colombia.",
    ],
  },
  {
    title: "Perfiles del MVP: Propietario",
    content: [
      "**Descarga la app** y completa verificación robusta de identidad.",
      "**Publica vehículos** con fotografías, datos técnicos, reglas de uso, tarifas y disponibilidad.",
      "**Panel de control** con historial de reservas, saldo y pagos pendientes por liberar.",
    ],
  },
  {
    title: "Perfiles del MVP: Arrendatario",
    content: [
      "**Verificación mínima** de documento y licencia para comenzar.",
      "**Explora catálogo** por ciudad, fechas o tipo de vehículo y realiza reservas.",
      "**Pago inmediato** retenido en escrow, *check-in/out* con fotografías y firma digital.",
    ],
  },
  {
    title: "Perfiles del MVP: Administrador",
    content: [
      "**Supervisa operación completa** desde Web-APP: verificaciones KYC, control de reservas.",
      "**Autoriza liberaciones** de fondos, administra reclamos e incidentes.",
      "**Genera reportes** financieros para fines regulatorios y de conciliación.",
    ],
  },
  {
    title: "Reglas de Negocio",
    content: [
      "**Toda reserva** incluye contrato de intermediación **firmado digitalmente**.",
      "Para listar, propietario debe contar con **SOAT vigente** y aceptar pólizas complementarias.",
      "**Reglas explícitas:** límites de kilometraje, zonas de operación, prohibición de *transporte remunerado*.",
    ],
  },
  {
    title: "Riesgos y Mitigaciones",
    content: [
      "**Riesgos:** Interpretación regulatoria, fraude documental, siniestros, protección de datos.",
      "**Mitigaciones:** Contratos explícitos, KYC robusto, seguro on-demand, políticas de privacidad.",
      "**Flujo de pagos** con retenciones automáticas, IVA y conciliaciones.",
    ],
  },
  {
    title: "Flujos Operativos: Reserva y Pago",
    content: [
      "**Arrendatario** reserva vehículo y **paga inmediatamente**.",
      "Fondos pasan por pasarela de pago y quedan **retenidos en escrow**.",
      "Propietario **no recibe dinero** hasta después del *check-in exitoso*.",
    ],
  },
  {
    title: "Flujos Operativos: Liberación",
    content: [
      "**Liberación ocurre** solo después del *check-in exitoso* y revisión de evidencia.",
      "Plataforma calcula **comisiones, IVA y retenciones** antes de transferir saldo.",
      "Propietario puede **solicitar retiro** y sistema registra automáticamente contabilidad.",
    ],
  },
  {
    title: "Manejo de Incidentes",
    content: [
      "Si se reporta un incidente, **fondos permanecen retenidos**.",
      "**Equipo de operaciones** revisa evidencia y toma decisión.",
      "**Resultados posibles:** pago normal, compensación parcial, o reembolso al arrendatario.",
    ],
  },
  {
    title: "Roadmap: Fase 0 y 1",
    content: [
      "**Fase 0** (4-6 semanas): Preparación legal, diseño de UX, acuerdos con aseguradoras.",
      "**Fase 1** (10-14 semanas): Desarrollo de MVP, app móvil, panel admin, *piloto en una ciudad*.",
    ],
  },
  {
    title: "Roadmap: Fase 2 y 3",
    content: [
      "**Fase 2** (8-12 semanas): Optimización basada en datos, mayor automatización, integración con seguros.",
      "**Fase 3** (12-20 semanas): Marketplace completo, precios dinámicos, suscripciones, APIs para aliados.",
    ],
  },
]
