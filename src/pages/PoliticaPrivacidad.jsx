import React from 'react';

const PoliticaPrivacidad = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Última actualización: {new Date().toLocaleDateString('es-CO', {day: 'numeric', month: 'long', year: 'numeric'})}
            </p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introducción</h2>
              <p className="text-gray-600 mb-4">
                En Tienda de Celulares respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y le informará sobre sus derechos de privacidad y cómo la ley lo protege.
              </p>
              <p className="text-gray-600 mb-4">
                Esta política de privacidad se aplica a la información que recopilamos cuando utiliza nuestro sitio web, independientemente de cómo acceda a él.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Información que Recopilamos</h2>
              <p className="text-gray-600 mb-4">
                Podemos recopilar, utilizar, almacenar y transferir diferentes tipos de datos personales sobre usted, que hemos agrupado de la siguiente manera:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Datos de identidad:</strong> Incluye nombre, apellido, nombre de usuario o identificador similar.</li>
                <li><strong>Datos de contacto:</strong> Incluye dirección de facturación, dirección de entrega, correo electrónico y números de teléfono.</li>
                <li><strong>Datos financieros:</strong> Incluye detalles de tarjetas de pago (procesados de forma segura a través de nuestros proveedores de pago).</li>
                <li><strong>Datos de transacción:</strong> Incluye detalles sobre pagos hacia y desde usted, y otros detalles de productos y servicios que ha comprado de nosotros.</li>
                <li><strong>Datos técnicos:</strong> Incluye dirección IP, datos de inicio de sesión, tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que utiliza para acceder a nuestro sitio web.</li>
                <li><strong>Datos de perfil:</strong> Incluye su nombre de usuario y contraseña, compras o pedidos realizados por usted, sus intereses, preferencias, comentarios y respuestas a encuestas.</li>
                <li><strong>Datos de uso:</strong> Incluye información sobre cómo utiliza nuestro sitio web, productos y servicios.</li>
                <li><strong>Datos de marketing y comunicaciones:</strong> Incluye sus preferencias para recibir marketing de nosotros y de nuestros terceros, y sus preferencias de comunicación.</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Cómo Recopilamos sus Datos Personales</h2>
              <p className="text-gray-600 mb-4">
                Utilizamos diferentes métodos para recopilar datos de y sobre usted, incluyendo a través de:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Interacciones directas:</strong> Puede proporcionarnos sus datos de identidad, contacto y financieros al completar formularios o al comunicarse con nosotros por correo postal, teléfono, correo electrónico o de otra manera.</li>
                <li><strong>Tecnologías o interacciones automatizadas:</strong> A medida que interactúa con nuestro sitio web, podemos recopilar automáticamente datos técnicos sobre su equipo, acciones de navegación y patrones. Recopilamos estos datos personales mediante el uso de cookies, registros del servidor y otras tecnologías similares.</li>
                <li><strong>Terceros o fuentes disponibles públicamente:</strong> Podemos recibir datos personales sobre usted de varios terceros, como datos técnicos de proveedores de análisis, datos de contacto de proveedores de servicios y datos técnicos de proveedores de búsqueda.</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Cómo Utilizamos sus Datos Personales</h2>
              <p className="text-gray-600 mb-4">
                Solo utilizaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos sus datos personales en las siguientes circunstancias:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado con usted.</li>
                <li>Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos fundamentales no anulen esos intereses.</li>
                <li>Cuando necesitemos cumplir con una obligación legal o regulatoria.</li>
                <li>Cuando tengamos su consentimiento para hacerlo.</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Generalmente no nos basamos en el consentimiento como base legal para procesar sus datos personales, excepto en relación con el envío de comunicaciones de marketing directo de terceros a través de correo electrónico o mensaje de texto. Tiene derecho a retirar el consentimiento para el marketing en cualquier momento.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Divulgación de sus Datos Personales</h2>
              <p className="text-gray-600 mb-4">
                Podemos compartir sus datos personales con las partes que se indican a continuación para los fines establecidos en esta política de privacidad:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.</li>
                <li>Asesores profesionales, incluidos abogados, banqueros, auditores y aseguradores.</li>
                <li>Autoridades fiscales, reguladoras y otras autoridades.</li>
                <li>Terceros a quienes podamos elegir vender, transferir o fusionar partes de nuestro negocio o nuestros activos.</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Exigimos a todos los terceros que respeten la seguridad de sus datos personales y los traten de acuerdo con la ley. No permitimos que nuestros proveedores de servicios externos utilicen sus datos personales para sus propios fines y solo les permitimos procesar sus datos personales para fines específicos y de acuerdo con nuestras instrucciones.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Seguridad de Datos</h2>
              <p className="text-gray-600 mb-4">
                Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan, utilicen o accedan de manera no autorizada, se alteren o divulguen accidentalmente. Además, limitamos el acceso a sus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tienen una necesidad comercial de conocerlos. Solo procesarán sus datos personales según nuestras instrucciones y están sujetos a un deber de confidencialidad.
              </p>
              <p className="text-gray-600 mb-4">
                Hemos establecido procedimientos para tratar cualquier sospecha de violación de datos personales y le notificaremos a usted y a cualquier regulador aplicable de una violación cuando estemos legalmente obligados a hacerlo.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Retención de Datos</h2>
              <p className="text-gray-600 mb-4">
                Solo conservaremos sus datos personales durante el tiempo que sea necesario para cumplir con los fines para los que los recopilamos, incluido el cumplimiento de cualquier requisito legal, contable o de presentación de informes.
              </p>
              <p className="text-gray-600 mb-4">
                Para determinar el período de retención apropiado para los datos personales, consideramos la cantidad, naturaleza y sensibilidad de los datos personales, el riesgo potencial de daño por uso no autorizado o divulgación de sus datos personales, los fines para los cuales procesamos sus datos personales y si podemos lograr esos fines a través de otros medios, y los requisitos legales aplicables.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Sus Derechos Legales</h2>
              <p className="text-gray-600 mb-4">
                Bajo ciertas circunstancias, tiene derechos bajo las leyes de protección de datos en relación con sus datos personales, incluido el derecho a:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Solicitar acceso a sus datos personales.</li>
                <li>Solicitar la corrección de sus datos personales.</li>
                <li>Solicitar la eliminación de sus datos personales.</li>
                <li>Oponerse al procesamiento de sus datos personales.</li>
                <li>Solicitar la restricción del procesamiento de sus datos personales.</li>
                <li>Solicitar la transferencia de sus datos personales.</li>
                <li>Retirar el consentimiento.</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Si desea ejercer cualquiera de estos derechos, póngase en contacto con nosotros utilizando los datos de contacto proporcionados a continuación.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Nuestro sitio web utiliza cookies para distinguirlo de otros usuarios de nuestro sitio web. Esto nos ayuda a proporcionarle una buena experiencia cuando navega por nuestro sitio web y también nos permite mejorar nuestro sitio.
              </p>
              <p className="text-gray-600 mb-4">
                Puede configurar su navegador para rechazar todas o algunas cookies, o para alertarlo cuando los sitios web establecen o acceden a cookies. Si deshabilita o rechaza las cookies, tenga en cuenta que algunas partes de este sitio web pueden volverse inaccesibles o no funcionar correctamente.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Cambios a esta Política de Privacidad</h2>
              <p className="text-gray-600 mb-4">
                Cualquier cambio que hagamos a nuestra política de privacidad en el futuro se publicará en esta página. Se le notificará por correo electrónico o mediante un aviso destacado en nuestro sitio web antes de que el cambio entre en vigor y se actualice la fecha de "última actualización" en la parte superior de esta política de privacidad.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Contacto</h2>
              <p className="text-gray-600 mb-4">
                Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, póngase en contacto con nosotros a través de:
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

export default PoliticaPrivacidad;
