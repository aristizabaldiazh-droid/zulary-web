export default function TerminosPage() {
  return (
    <div className="container">
      <h1>Términos y Condiciones</h1>

      <div className="card" style={{ padding: 22, marginTop: 20 }}>
        <h3>1. Venta al por mayor</h3>
        <p>
          Zulary Internacional SAS realiza ventas exclusivamente al por mayor.
          El pedido mínimo es de 12 unidades por referencia.
        </p>

        <h3 style={{ marginTop: 20 }}>2. Precios</h3>
        <p>
          Todos los precios incluyen IVA conforme a la legislación colombiana.
        </p>

        <h3 style={{ marginTop: 20 }}>3. Pagos</h3>
        <p>
          El despacho se realiza una vez confirmado el pago por transferencia
          bancaria o método acordado.
        </p>

        <h3 style={{ marginTop: 20 }}>4. Envíos</h3>
        <p>
          Los envíos se realizan por Interrapidísimo, Coordinadora o
          Servientrega. Los tiempos dependen de la transportadora.
        </p>

        <h3 style={{ marginTop: 20 }}>5. Cambios y devoluciones</h3>
        <p>
          Solo se aceptan reclamaciones por defectos de fabricación dentro de
          las 24 horas posteriores a la entrega.
        </p>

        <div style={{ marginTop: 30, fontWeight: 700 }}>
          Zulary Internacional SAS  
          <br />
          Bogotá, Colombia
        </div>
      </div>
    </div>
  );
}
