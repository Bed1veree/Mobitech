import React from 'react';

const TerminosCondiciones = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Términos y Condiciones</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Última actualización: {new Date().toLocaleDateString('es-CO', {day: 'numeric', month: 'long', year: 'numeric'})}
            </p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introducción</h2>
              <p className="text-gray-600 mb-4">
                Bienvenido a Tienda de Celulares. Estos términos y condiciones rigen el uso de nuestro sitio web y la compra de productos a través de nuestra plataforma. Al acceder a nuestro sitio web o realizar una compra, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con estos términos y condiciones o cualquier parte de los mismos, no debe utilizar nuestro sitio web.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Uso del Sitio</h2>
              <p className="text-gray-600 mb-4">
                Nuestro sitio web solo se puede utilizar para fines legales y de manera que no cause daño o perjuicio a terceros. El uso del sitio de cualquier manera que cause, o pueda causar, daño al sitio o deterioro de la disponibilidad o accesibilidad del sitio está prohibido.
              </p>
              <p className="text-gray-600 mb-4">
                Usted no debe utilizar nuestro sitio web de ninguna manera que sea ilegal, fraudulenta o perjudicial, ni en conexión con cualquier propósito o actividad ilegal, fraudulenta o perjudicial.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Productos y Precios</h2>
              <p className="text-gray-600 mb-4">
                Todos los productos se muestran de buena fe y nos esforzamos por garantizar que la información sobre los productos y los precios sea precisa. Sin embargo, no podemos garantizar que todos los productos estén disponibles y que no haya errores en la información sobre precios o productos.
              </p>
              <p className="text-gray-600 mb-4">
                Nos reservamos el derecho de rechazar cualquier pedido realizado a través de nuestro sitio. En caso de que el precio publicado sea incorrecto, nos pondremos en contacto con usted para informarle del precio correcto y darle la opción de continuar con la compra al precio correcto o cancelar el pedido.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Compras y Pagos</h2>
              <p className="text-gray-600 mb-4">
                Al realizar una compra, usted declara que tiene al menos 18 años de edad y que la información proporcionada durante el proceso de compra es verdadera y precisa.
              </p>
              <p className="text-gray-600 mb-4">
                Aceptamos varios métodos de pago, que se mostrarán durante el proceso de compra. Al proporcionar la información de pago, usted confirma que está autorizado a utilizar el método de pago elegido.
              </p>
              <p className="text-gray-600 mb-4">
                El pago se procesará inmediatamente después de confirmar su pedido. La propiedad de los productos pasará a usted solo cuando hayamos recibido el pago completo.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Envíos y Entregas</h2>
              <p className="text-gray-600 mb-4">
                Haremos todo lo posible para entregar los productos dentro del plazo especificado. Sin embargo, no podemos garantizar tiempos de entrega exactos y no seremos responsables de ningún retraso que esté fuera de nuestro control.
              </p>
              <p className="text-gray-600 mb-4">
                El riesgo de pérdida o daño de los productos pasa a usted en el momento de la entrega o cuando se dejan en la dirección de entrega proporcionada.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Cancelaciones y Devoluciones</h2>
              <p className="text-gray-600 mb-4">
                Puede cancelar su pedido antes de que sea enviado poniéndose en contacto con nuestro servicio de atención al cliente. Una vez que el pedido ha sido enviado, deberá seguir nuestra política de devoluciones.
              </p>
              <p className="text-gray-600 mb-4">
                Tiene derecho a devolver los productos dentro de los 14 días siguientes a la recepción si no está satisfecho. Los productos deben estar en su estado original, sin usar y en su embalaje original.
              </p>
              <p className="text-gray-600 mb-4">
                Consulte nuestra Política de Devoluciones para obtener más información sobre cómo devolver un producto y recibir un reembolso.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Garantía</h2>
              <p className="text-gray-600 mb-4">
                Todos los productos vienen con la garantía del fabricante. En caso de defecto o mal funcionamiento cubierto por la garantía, le ayudaremos a procesar la reclamación con el fabricante.
              </p>
              <p className="text-gray-600 mb-4">
                La garantía no cubre daños causados por uso indebido, accidente, modificación o cualquier otra condición no derivada de defectos en el material o la mano de obra.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Limitación de Responsabilidad</h2>
              <p className="text-gray-600 mb-4">
                En la medida permitida por la ley, excluimos todas las representaciones y garantías relacionadas con nuestro sitio web y su contenido.
              </p>
              <p className="text-gray-600 mb-4">
                No seremos responsables de ninguna pérdida o daño indirecto, consecuente o especial que surja de o esté relacionado con el uso de nuestro sitio web o la compra de productos a través de nuestro sitio.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Modificaciones de los Términos y Condiciones</h2>
              <p className="text-gray-600 mb-4">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
              </p>
              <p className="text-gray-600 mb-4">
                Es su responsabilidad revisar estos términos y condiciones periódicamente. El uso continuado de nuestro sitio web después de la publicación de cambios constituirá su aceptación de dichos cambios.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Ley Aplicable</h2>
              <p className="text-gray-600 mb-4">
                Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de Colombia, y cualquier disputa relacionada con estos términos y condiciones estará sujeta a la jurisdicción exclusiva de los tribunales de Colombia.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Contacto</h2>
              <p className="text-gray-600 mb-4">
                Si tiene alguna pregunta sobre estos términos y condiciones, póngase en contacto con nosotros a través de:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Correo electrónico: andresfabian416@gmail.com</li>
                <li>Teléfono: (310) 808 0414</li>
                <li>Dirección: Calle46#28f26, Cali, Colombia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminosCondiciones;
