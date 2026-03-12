import React from "react";
import "./Gaming.css";

function Gaming() {
  return (
    <div className="gaming_contenedor">
      <h2>Computadoras para GAMING</h2>
      <div className="acerca-divider"></div>
     <div style={{padding:"10px 0"}}></div>
    
      <div className="gaming_secciones">
        <h3>gaming</h3>
        
        <p>
          Para computadoras gaming tenemos que entender que su costo de
          adquisición es hasta 5 veces más caro que el de una máquina de trabajo
          o estudio. Se presentan en versiones de escritorio y portátiles, y son
          equipos potentes diseñados para largas horas de diversión. Para eso,
          hay puntos muy claros que debes entender.
          <br />
          <br />
          Ya no es una máquina simplemente para ver videos o crear documentos de
          Office. Aquí ya necesitamos componentes específicos: procesadores
          potentes, memorias RAM, tarjetas de video (GPU) de alto rendimiento y
          tarjetas de red capaces de aprovechar al máximo el ancho de banda de
          internet. Todo esto es necesario para correr los juegos modernos sin
          que se congelen, para tener una interacción en línea sin
          interrupciones, y para disfrutar de tarjetas gráficas capaces de usar
          resoluciones 4K y mucho más.
          <br />
          <br />
          No se trata solo de jugar, sino de hacerlo con fluidez, con gráficos
          en su máxima expresión y sin que el equipo se quede atrás cuando la
          partida se pone intensa. Desde la velocidad de carga hasta la
          respuesta en línea, cada componente cuenta.
          <br />
          <br />
        </p>

        <div style={{ width: "90%" }}>
          <figure
           className="figure_seccion"
          >
            <p>
              <strong>Laptop o Escritorio ¿cuál elegir?:</strong>
            </p>
            <figcaption>
              — "Comprar una laptop es mejor porque así tienes todo en uno para
              trabajar y jugar". No siempre es cierto. Si eres editor de video,
              arquitecto o jugador empedernido, una laptop gaming de $1500 te
              dará el rendimiento de un escritorio de $800, pero con teclado
              caliente, sin posibilidad de actualizarla y en 3 años será
              obsoleta mientras el escritorio solo necesitará una nueva tarjeta
              gráfica. Es como elegir entre un helicóptero y una camioneta: el
              helicóptero (la laptop) puede ir a cualquier lado, pero la
              camioneta (el escritorio) carga más, se repara en cualquier taller
              y te sale mucho más barata para mover cosas pesadas todos los
              días.
            </figcaption>
          </figure>
        </div>

        {/* nuev */}
        <h3>Procesadores (CPU - Unidad Central de Procesamiento)</h3>
        <img
          src="https://i.pinimg.com/736x/12/8c/6a/128c6a3ecec06106908068c55b6279cd.jpg"
          alt="procesadores gaming"
        />
        <p>
          Si la computadora fuera un cuerpo humano, el procesador sería el
          cerebro. Es el encargado de realizar todas las operaciones y cálculos
          para que todo funcione: desde abrir el navegador hasta ejecutar la
          lógica detrás de un juego.
          <br />
          <br />
          En el mundo del gaming y streaming, el procesador es crucial por
          varias razones. Los juegos modernos no solo le piden a la tarjeta
          gráfica que dibuje los escenarios, también necesitan que el procesador
          calcule la física de los objetos, la inteligencia artificial de los
          enemigos y las acciones de todos los jugadores en línea al mismo
          tiempo.
          <br />
          <br />
          <strong>Núcleos vs. Velocidad:</strong> Es importante entender que un
          procesador tiene "núcleos" (como si fueran varios cerebritos dentro
          del mismo chip). Un procesador de 4 núcleos puede hacer 4 cosas a la
          vez. Hoy en día, para juegos modernos, necesitas al menos 6 núcleos.
          La "velocidad" se mide en GHz y determina qué tan rápido piensa cada
          núcleo. Para gaming buscas un equilibrio: suficientes núcleos para
          manejar múltiples tareas y alta velocidad para que el juego responda
          instantáneamente.
          <br />
          <br />
          <strong>Las dos marcas principales:</strong> En el mercado dominan dos
          fabricantes: Intel y AMD. Ambas son excelentes, pero tienen enfoques
          distintos:
          <br />- <strong>Intel:</strong> Tradicionalmente ofrece procesadores
          con velocidades muy altas por núcleo, lo que históricamente los hacía
          ideales para gaming puro. Sus modelos Core i5 son el punto ideal para
          la mayoría de jugadores, mientras que los Core i7 y Core i9 están
          pensados para quienes también hacen streaming o edición de video. Por
          ejemplo, un Intel Core i5-13400F puede mover cualquier juego actual
          sin problemas.
          <br />- <strong>AMD:</strong> Con su serie Ryzen, revolucionó el
          mercado ofreciendo más núcleos a precios competitivos. Los Ryzen 5 son
          los todoterreno para gaming, mientras que los Ryzen 7 y Ryzen 9
          brillan cuando necesitas trabajar (editar, renderizar, programar) y
          jugar en la misma máquina. Un Ryzen 5 7600X es un monstruo para gaming
          por su precio.
          <br />
          <br />
          <strong>El temido "cuello de botella":</strong> Esto pasa cuando tu
          procesador no es lo suficientemente rápido para alimentar de trabajo a
          tu tarjeta gráfica. Imagina una autopista: si pones un procesador muy
          básico (un camino de tierra) con una tarjeta gráfica ultrapotente (un
          Ferrari), el camino no dejará pasar suficiente información y el
          Ferrari (tu GPU) nunca alcanzará su máxima velocidad. Por eso es vital
          equilibrar ambos componentes.
          <br />
          <br />
          <strong>Qué comprar en 2024-2026:</strong>
          <br />- <em>Gaming básico (1080p):</em> Intel Core i5-12400F o AMD
          Ryzen 5 5600X.
          <br />- <em>Gaming serio + Streaming:</em> Intel Core i5-13600K o AMD
          Ryzen 7 7700X.
          <br />- <em>Máquinas extremas para 4K y edición:</em> Intel Core
          i7-13700K/ i9-14900K o AMD Ryzen 9 7900X/7950X.
          <br />
          <br />
          <div style={{ width: "90%" }}>
            <figure
              className="figure_seccion"
            >
              <p>
                <strong>Dato curioso para nuevos:</strong>
              </p>
              <figcaption>
                — Verás que muchos procesadores terminan en "F" en Intel o "X"
                en AMD. La F de Intel significa que NO tiene gráficos integrados
                (necesitas sí o sí una tarjeta gráfica aparte), mientras que los
                que no tienen letra o tienen "G" en AMD incluyen gráficos
                básicos que te pueden sacar de un apuro si tu tarjeta gráfica
                falla, pero no son suficientes para juegos pesados.
              </figcaption>
            </figure>
          </div>
          <br />
          <br />
        </p>
        <h3>Memoria RAM (Memoria de Acceso Aleatorio)</h3>
        <img
          src="https://i.pinimg.com/736x/dd/c7/fb/ddc7fb96b3b9725c518405a3171031dc.jpg"
          alt="memoria Ram"
        />
        <p>
          Si el procesador es el cerebro de la computadora, la memoria RAM sería
          su escritorio de trabajo. Imagina que estás haciendo un rompecabezas
          enorme: el escritorio es donde tienes todas las piezas extendidas para
          poder verlas y armarlas rápidamente. Mientras más grande sea tu
          escritorio (más RAM), más piezas (datos) puedes tener a la mano sin
          tener que guardarlas en un cajón cada vez que necesitas espacio.
          <br />
          <br />
          <strong>¿Pero qué hace exactamente?</strong> La RAM almacena
          temporalmente toda la información que el procesador necesita en cada
          momento: el mapa del juego en el que estás ahora, los modelos de los
          personajes, las texturas de los edificios, la música de fondo, y
          también todas las pestañas de Chrome que tienes abiertas. Cuando
          apagas la computadora, la RAM se vacía por completo (a diferencia del
          disco duro, que guarda las cosas para siempre).
          <br />
          <br />
          <strong>Capacidad: ¿Cuánta necesito realmente?</strong>
          <br />- <strong>8GB:</strong> Es el mínimo indispensable hoy en día.
          Alcanza justo para juegos livianos como Fortnite, League of Legends o
          CS:GO, pero si dejas Chrome abierto de fondo, la computadora empezará
          a "sudar" y rendirá menos. Quedó corto para los juegos modernos.
          <br />- <strong>16GB:</strong> Actualmente es el ESTÁNDAR DE ORO para
          gaming. Con 16GB puedes tener el juego pesado abierto, Discord,
          Spotify y un par de pestañas de Chrome sin que nada se trabe. Juegos
          como Call of Duty Warzone, Cyberpunk 2077 o Starfield funcionan
          cómodamente en 16GB. Si estás armando tu primera PC gamer, empieza
          aquí.
          <br />- <strong>32GB:</strong> Esto ya es para quienes hacen streaming
          mientras juegan, editan video, trabajan con máquinas virtuales o
          juegan títulos extremadamente pesados como Microsoft Flight Simulator
          con mods. También es ideal si te gusta dejar 50 pestañas de Chrome
          abiertas (porque todos lo hacemos). Es el "lujo razonable" que te
          prepara para el futuro.
          <br />- <strong>64GB o más:</strong> Esto es para estaciones de
          trabajo profesionales, edición de video en 8K, renderizado 3D o
          servidores. Para un jugador normal, es como comprar una casa de 10
          habitaciones viviendo solo: desperdicio de dinero.
          <br />
          <br />
          <strong>
            Velocidad: Ese número misterioso (3200MHz, 5600MHz...)
          </strong>
          <br />
          La velocidad de la RAM se mide en MHz (megahercios) y determina qué
          tan rápido puede pasarle información al procesador. Es como el ancho
          de una autopista: más MHz significa que caben más autos (datos) por
          segundo.
          <br />
          Para gaming, la velocidad importa, pero no tanto como la capacidad.
          Pasar de 2666MHz a 3200MHz sí notarás mejora. Pasar de 3200MHz a
          4000MHz la mejora es pequeña y depende mucho del procesador que
          tengas.
          <br />- <strong>DDR4:</strong> La tecnología que dominó los últimos
          años. Las velocidades típicas van de 2666MHz a 3600MHz. Es más
          económica y sigue siendo excelente para gaming.
          <br />- <strong>DDR5:</strong> La nueva generación. Arranca en 4800MHz
          y puede llegar a 8000MHz. Es más rápida y eficiente, pero requiere
          procesadores y placas madre modernas (series Intel de 12va generación
          en adelante o AMD Ryzen 7000 en adelante). Si estás armando PC nueva
          con presupuesto holgado, DDR5 es mejor inversión a futuro.
          <br />
          <br />
          <strong>Latencia (CL): El secreto que pocos conocen</strong>
          <br />
          Verás números como "CL16" o "CL18" en las especificaciones. CL
          significa "CAS Latency" y son los ciclos de reloj que tarda la RAM en
          responder a un pedido. Números más bajos (CL16) son más rápidos que
          números altos (CL18). Idealmente busca la latencia más baja posible
          dentro de tu presupuesto.
          <br />
          <br />
          <strong>Dual Channel: El truco para rendimiento gratis</strong>
          <br />
          Las memorias RAM trabajan mejor en pareja. Si pones dos módulos de 8GB
          en lugar de uno solo de 16GB, la computadora puede leer y escribir en
          ambos al mismo tiempo, DUPLICANDO el ancho de banda. Siempre que
          puedas, compra la RAM en pares (2x8GB, 2x16GB) para activar el "Dual
          Channel". Tu procesador te lo agradecerá con más rendimiento sin
          gastar un peso extra.
          <br />
          <br />
          <strong>Marcas confiables para no fallar:</strong>
          <br />
          Corsair, Kingston (HyperX Fury), G.Skill (Trident Z), Crucial
          (Ballistix), TeamGroup. Cualquiera de estas marcas ofrece garantía y
          calidad. Evita memorias genéricas sin marca reconocida, pueden dar
          errores extraños.
          <br />
          <br />
          <strong>Recomendaciones prácticas para comprar:</strong>
          <br />- <em>Gaming 1080p estable:</em> 16GB (2x8GB) DDR4 a 3200MHz
          CL16.
          <br />- <em>Gaming + Streaming / Edición casual:</em> 32GB (2x16GB)
          DDR4 a 3600MHz CL18 o DDR5 a 5600MHz CL36.
          <br />- <em>Máquina del futuro (2024+):</em> 32GB (2x16GB) DDR5 a
          6000MHz CL30 (este es el "punto dulce" actual para AMD Ryzen 7000).
          <br />
          <br />
          <div style={{ width: "90%" }}>
            <figure
              className="figure_seccion"
            >
              <p>
                <strong>Mito que debes olvidar:</strong>
              </p>
              <figcaption>
                — "Más RAM siempre hace la computadora más rápida". No es
                cierto. Si ya tienes 16GB y pasas a 32GB, pero solo usas 12GB en
                tu día a día, notarás cero diferencia. La RAM no acelera la
                máquina, solo evita que se frene cuando le pides más de lo que
                tiene. Es como tener una mesa más grande: no te hace armar el
                rompecabezas más rápido, pero evita que se te caigan piezas al
                piso cuando trabajas.
              </figcaption>
            </figure>
          </div>
          <br />
          <br />
        </p>
        <h3>Tarjeta Gráfica (GPU - Unidad de Procesamiento Gráfico)</h3>
        <img
          src="https://i.pinimg.com/736x/59/56/ad/5956ada195cf08dd5533f0622c26b779.jpg"
          alt="tarjeta grafica"
        />
        <p>
          Si el procesador es el cerebro y la RAM es el escritorio de trabajo,
          la tarjeta gráfica es el <strong>pincel del artista</strong>. Es el
          componente más importante para un PC gaming y también el que
          normalmente cuesta más dinero (a veces más que todos los otros
          componentes juntos).
          <br />
          <br />
          <strong>¿Qué hace exactamente?</strong> Mientras el procesador calcula
          la lógica del juego (cuánta vida tiene un enemigo, qué diálogo va a
          decir, hacia dónde se mueve un auto), la tarjeta gráfica se encarga de
          DIBUJAR todo lo que ves en la pantalla. Ella calcula cada píxel, cada
          sombra, cada reflejo, cada textura, cada pelo del personaje y cada
          hoja de los árboles. Sin una buena GPU, por más potente que sea tu
          procesador, verás un slideshow(serie ordenada de imágenes) en lugar de
          un juego fluido.
          <br />
          <br />
          <strong>
            Las dos marcas gigantes: NVIDIA vs AMD (y ahora Intel)
          </strong>
          <br />- <strong>NVIDIA (Serie RTX):</strong> Es la marca más popular y
          la que lidera la industria. Inventaron tecnologías como el{" "}
          <em>Ray Tracing</em> (iluminación realista) y el <em>DLSS</em> (una
          inteligencia artificial que hace que los juegos se vean bien pero
          rindan más rápido). Sus drivers (controladores) son muy estables y
          tienen funciones exclusivas para streamers (NVENC, que permite
          transmitir juegos sin afectar el rendimiento). Modelos van desde RTX
          3050 (gama entrada) hasta RTX 4090 (la bestia absoluta).
          <br />- <strong>AMD (Serie RX):</strong> Históricamente ofrecían más
          potencia bruta por menos dinero. Son como los "campeones de
          precio/rendimiento". Con las series RX 6000 y 7000 han mejorado mucho
          el Ray Tracing y tienen su propia tecnología llamada FSR (similar al
          DLSS, que funciona en más juegos y hasta en consolas). Si tu
          presupuesto es ajustado, aquí sueles encontrar las mejores gangas.
          Modelos van desde RX 6400 hasta RX 7900 XTX.
          <br />- <strong>Intel (Serie Arc):</strong> El nuevo jugador en el
          campo. Sus tarjetas Arc A750 y A770 han sorprendido por ofrecer muy
          buen rendimiento por dólar, especialmente en juegos nuevos que usan
          tecnologías modernas. Sin embargo, en juegos viejos o muy específicos
          pueden tener problemas de optimización. Son una opción interesante si
          te gusta experimentar y buscas ahorrar.
          <br />
          <br />
          <strong>
            VRAM: La memoria de la tarjeta (y por qué es tan importante)
          </strong>
          <br />
          Las tarjetas gráficas tienen su propia memoria, llamada VRAM (Video
          RAM). No es lo mismo que la RAM del sistema. Esta memoria guarda las
          texturas, los modelos 3D y los sombreadores que la GPU necesita en
          cada momento.
          <br />- <strong>4GB - 6GB:</strong> Hoy en día se queda justo. Para
          juegos competitivos livianos (Valorant, CS2, League of Legends)
          alcanza, pero juegos modernos en calidad media-alta ya piden más.
          <br />- <strong>8GB:</strong> El mínimo recomendable para 1080p en
          2024. Juegos como Hogwarts Legacy o Cyberpunk consumen cerca de
          7GB-8GB en calidad alta.
          <br />- <strong>10GB - 12GB:</strong> Ideal para 1440p (resolución
          intermedia). Te da margen para texturas ultra y respirar tranquilo.
          <br />- <strong>16GB o más:</strong> Para 4K, mods pesados, texturas
          de ultra alta resolución y preparación para el futuro. En 1080p es
          excesivo.
          <br />
          <br />
          <strong>Resoluciones y qué tarjeta necesitas:</strong>
          <br />- <strong>1080p (Full HD):</strong> Es la resolución más común.
          Buscas 60 FPS o más. Opciones: NVIDIA RTX 3060 / RTX 4060, AMD RX 6600
          / RX 7600, Intel Arc A750. Con estas corres TODO en ultra o alto.
          <br />- <strong>1440p (2K):</strong> El punto dulce actual. Imagen
          nítida sin exigir tanto como 4K. Necesitas más potencia: NVIDIA RTX
          3070 / RTX 4070, AMD RX 6700 XT / RX 7700 XT / RX 7800 XT.
          <br />- <strong>4K:</strong> La máxima calidad. Necesitas una bestia:
          NVIDIA RTX 4080 / RTX 4090, AMD RX 7900 XT / RX 7900 XTX. Y aún así, a
          veces tendrás que activar el DLSS/FSR para mantener 60 FPS estables.
          <br />
          <br />
          <strong>Tecnologías mágicas: DLSS, FSR y Ray Tracing</strong>
          <br />- <strong>Ray Tracing:</strong> Simula cómo rebota la luz en la
          vida real. Luces, sombras y reflejos se ven increíblemente realistas.
          El problema: consume muchísimo rendimiento. Por eso nacieron las
          siguientes tecnologías.
          <br />- <strong>DLSS (NVIDIA):</strong> El juego se renderiza a una
          resolución más baja (digamos 1080p) y una inteligencia artificial la
          escala a 4K en tiempo real, haciendo que se vea casi igual que 4K
          nativo pero funcionando mucho más rápido. Es como magia negra.
          Actualmente va por DLSS 3.5 que hasta mejora el Ray Tracing.
          <br />- <strong>FSR (AMD):</strong> Hace algo similar al DLSS, pero
          funciona en tarjetas NVIDIA, AMD e Intel (es abierto). No es tan
          avanzado como DLSS en calidad imagen, pero mejora constantemente y
          está en muchísimos juegos.
          <br />
          <br />
          <strong>
            ¿Qué significa que una tarjeta sea "OC" o "Ti" o "XT"?
          </strong>
          <br />- <strong>Ti (NVIDIA):</strong> Versión mejorada del mismo
          modelo. Una RTX 3060 Ti es más rápida que una RTX 3060 normal.
          <br />- <strong>Super (NVIDIA):</strong> Similar a Ti, un refresco de
          media generación con mejoras.
          <br />- <strong>XT (AMD):</strong> La versión más potente dentro de la
          misma serie. RX 6800 XT es superior a RX 6800.
          <br />- <strong>OC:</strong> Viene overclockeada de fábrica (un
          poquito más rápida que la versión estándar). Normalmente vale unos
          euros más.
          <br />
          <br />
          <strong>Marcas que fabrican las tarjetas:</strong>
          <br />
          NVIDIA y AMD diseñan los chips, pero otras empresas los montan y les
          ponen sus sistemas de refrigeración. Las marcas más confiables: ASUS
          (serie TUF/ROG), MSI (serie Gaming X), Gigabyte (serie Aorus), Zotac,
          EVGA (solo NVIDIA, ya no hace tarjetas nuevas pero las usadas son
          buenas), Sapphire (solo AMD y de las mejores), PowerColor (solo AMD).
          Cualquiera de estas es garantía de calidad.
          <br />
          <br />
          <strong>Recomendaciones por presupuesto (2026):</strong>
          <br />- <em>Presupuesto ajustado ($300-$400):</em> NVIDIA RTX 5060 o
          AMD Radeon RX 9060 XT / RX 7600 XT. Juegas todo en 1080p ultra con
          tecnologías DLSS 4.5 o FSR de última generación. La RTX 5060 con su
          memoria GDDR7 y DLSS 4.5 rinde incluso mejor que la anterior RTX 4060
          Ti en muchos títulos .
          <br />- <em>Presupuesto medio ($500-$700):</em> NVIDIA RTX 5070 ($549
          MSRP) o AMD Radeon RX 9070 ($549 MSRP) / RX 7800 XT. La RTX 5070
          ofrece un rendimiento excelente para 1440p, mientras que la RX 9070 se
          posiciona como una de las mejores opciones calidad-precio de la
          generación. Dominas el 1440p con tasas de fotogramas muy altas.
          <br />- <em>Gama alta ($800-$1200):</em> NVIDIA RTX 5070 Ti ($749
          MSRP) o AMD Radeon RX 9070 XT ($599 MSRP). La RTX 5070 Ti es el
          caballo de batalla para 1440p ultra a FPS competitivos. Pero la gran
          estrella es la RX 9070 XT, que ofrece un valor por dinero espectacular
          (puntuación 12/12 en benchmarks) y rinde cerca de la RTX 5080 por
          cientos de dólares menos. Ideal para 1440p extremo y asomarse al 4K.
          <br />- <em>Entusiasta ($1200+):</em> NVIDIA RTX 5080 ($999 MSRP) /
          RTX 5090 ($1999 MSRP) o AMD Radeon RX 7900 XTX. La RTX 5090 es la
          bestia absoluta, la única capaz de mover juegos como Styx: Blades of
          Greed a 60+ FPS en 4K nativo sin escalado. La RTX 5080 es muy potente,
          aunque algunos la critican por su relación precio/rendimiento frente a
          la generación anterior. La RX 7900 XTX sigue siendo una alternativa de
          primer nivel para 4K.
          <br />
          <br />
          <strong>Mito que debes olvidar:</strong> "Las tarjetas AMD se
          sobrecalientan" o "NVIDIA es solo para ricos". Hace años eso pudo ser
          cierto, pero hoy ambas marcas son excelentes. AMD ha mejorado mucho
          sus temperaturas y NVIDIA tiene opciones para todos los bolsillos.
          Compra la mejor tarjeta que entre en tu presupuesto,
          independientemente de la marca, y revisa reviews actuales en YouTube
          (canales como Gamers Nexus, Hardware Unboxed o TechSpot en español).
          <br />
          <br />
          <div style={{ width: "90%" }}>
            <figure
              className="figure_seccion"
            >
              <p>
                <strong>Un consejo final:</strong>
              </p>
              <figcaption>
                — La tarjeta gráfica es el componente que define cuántos FPS
                verás en los juegos. Si tienes un presupuesto limitado, es mejor
                gastar más aquí y comprar un procesador un poco más humilde
                (como un Ryzen 5 en lugar de un Ryzen 7) que al revés. Una RTX
                4060 con un Ryzen 5 te dará mucho más rendimiento en juegos que
                una RTX 3050 con un Ryzen 7.
              </figcaption>
            </figure>
          </div>
          <br />
          <br />
        </p>
        <h3>Disco Duro (Almacenamiento: SSD, NVMe, HDD)</h3>
        <img
          src="https://i.pinimg.com/736x/c2/e3/f2/c2e3f2c411072bf34ab5ef9e6a0bd83a.jpg"
          alt="disco duro gamming"
        />
        <p>
          Si el procesador es el cerebro y la RAM es el escritorio de trabajo,
          el disco duro es la <strong>biblioteca o el archivero</strong> de tu
          computadora. Es donde se guarda TODO de manera permanente: el sistema
          operativo (Windows), tus juegos, tus fotos, tus documentos, tus
          programas. Cuando apagas la PC, todo lo que guardaste aquí sigue ahí
          esperando al próximo encendido.
          <br />
          <br />
          <strong>La diferencia entre vivir en 1990 y vivir en 2026</strong>
          <br />
          Durante décadas usamos discos duros mecánicos (HDD). Son como un
          tocadiscos antiguo: tienen un brazo físico que lee datos de un disco
          metálico que gira. Esto es lento, hace ruido y vibra. Llegaron los SSD
          (discos de estado sólido) y cambiaron todo: no tienen partes móviles,
          son como memorias USB gigantes pero ultrarápidas. La diferencia es
          ABISMAL: un PC con SSD prende en 10 segundos; con HDD podía tardar 2
          minutos.
          <br />
          <br />
          Hoy en día,{" "}
          <strong>
            usar un HDD como disco principal es como andar en carreta en plena
            autopista
          </strong>
          . Simplemente no lo hagas. Pero hay varios tipos y es importante
          entenderlos.
          <br />
          <br />
          <strong>Tipos de discos que existen:</strong>
          <br />
          <br />
          <strong>1. HDD (Disco Duro Mecánico):</strong>
          <br />- <strong>Cómo es:</strong> Discos metálicos girando a 5400 o
          7200 revoluciones por minuto con una aguja leyendo los datos.
          <br />- <strong>Ventaja:</strong> Son BARATÍSIMOS por gigabyte. Puedes
          comprar 4TB (4 terabytes) por lo que cuesta un SSD de 1TB.
          <br />- <strong>Desventaja:</strong> Lentísimos para los estándares
          actuales. Un juego moderno puede tardar 3-5 minutos en cargar. Windows
          se siente lento y pesado.
          <br />- <strong>Útil para:</strong> Guardar fotos, videos, backups,
          archivos que no necesitas acceder rápido. O para tener una biblioteca
          gigante de juegos a los que juegas poco y no te importa esperar 3
          minutos al cargar.
          <br />
          <br />
          <strong>2. SSD SATA (2.5 pulgadas):</strong>
          <br />- <strong>Cómo es:</strong> Un cacharro sin partes móviles que
          se conecta igual que un disco duro viejo (por cable SATA).
          <br />- <strong>Ventaja:</strong> Mucho más rápido que HDD. Windows
          prende en 20-30 segundos, los programas abren al instante. Son
          económicos y compatibles con computadoras viejas.
          <br />- <strong>Desventaja:</strong> Están limitados por la velocidad
          del cable SATA (máximo unos 550 MB/s). Hoy en día existe algo mucho
          más rápido.
          <br />- <strong>Útil para:</strong> Revivir computadoras antiguas, o
          como disco secundario si tu placa no tiene espacio para más NVMe.
          <br />
          <br />
          <strong>3. SSD NVMe M.2 (EL REY ACTUAL):</strong>
          <br />- <strong>Cómo es:</strong> Una tarjetita que parece un chicle
          que se conecta DIRECTAMENTE a la placa madre, sin cables. Usa el bus
          PCI Express (el mismo de las tarjetas gráficas).
          <br />- <strong>Ventaja:</strong> VELOCIDAD BRUTAL. Hablamos de 3500
          MB/s en modelos normales (PCIe 3.0) y hasta 7000 MB/s o más en los
          nuevos (PCIe 4.0 y 5.0). Esto es 10 a 20 veces más rápido que un SSD
          SATA, y 50 veces más rápido que un HDD. Los juegos cargan en segundos,
          Windows prende en 5-8 segundos.
          <br />- <strong>Desventaja:</strong> Suelen ser un poco más caros que
          los SSD SATA (aunque la diferencia se ha reducido mucho). Algunos
          pueden calentarse si son muy rápidos (vienen con disipadores).
          <br />- <strong>Útil para:</strong> Todo. Es lo que DEBES comprar si
          estás armando una PC moderna. Ahí va Windows, tus juegos favoritos,
          tus programas pesados.
          <br />
          <br />
          <strong>¿PCIe 3.0, 4.0 o 5.0? ¿Qué significan esos números?</strong>
          <br />
          Son las generaciones del bus PCI Express. Cada nueva generación
          duplica la velocidad máxima teórica:
          <br />- <strong>PCIe 3.0:</strong> Hasta 3500 MB/s. Más que suficiente
          para juegos. Los tiempos de carga ya son rapidísimos. Económico.
          <br />- <strong>PCIe 4.0:</strong> Hasta 7000 MB/s. Notas la
          diferencia al copiar archivos enormes o en juegos que usan tecnologías
          como DirectStorage (que cargan escenarios en un instante). Recomendado
          para PCs nuevas de gama media o alta.
          <br />- <strong>PCIe 5.0:</strong> Hasta 10.000 MB/s o más. Todavía
          muy caro y caliente. Para entusiastas que trabajan con video 8K o
          edición profesional. En juegos apenas notas diferencia con 4.0.
          <br />
          <br />
          <strong>Capacidad: ¿Cuánto necesitas realmente?</strong>
          <br />
          Esto depende de cuántos juegos tengas instalados y de qué tipo:
          <br />- <strong>250GB:</strong> Quedó obsoleto para gaming. Solo para
          Windows y programas básicos. No alcanza ni para un Call of Duty
          moderno (¡pueden pesar más de 200GB!).
          <br />- <strong>500GB:</strong> El mínimo aceptable. Puedes tener
          Windows, programas y 2-3 juegos grandes. Si juegas a títulos
          competitivos pequeños, te puede servir, pero vivirás desinstalando.
          <br />- <strong>1TB (terabyte):</strong> El ESTÁNDAR ACTUAL. Te da
          espacio para Windows, tus programas y entre 5 y 8 juegos grandes, o
          muchos juegos indies. Es el punto dulce precio/capacidad.
          <br />- <strong>2TB:</strong> La comodidad. Ya no piensas en el
          espacio. Instalas todo lo que quieres sin miedo. Perfecto si juegas a
          muchos títulos AAA.
          <br />- <strong>4TB o más:</strong> Para coleccionistas digitales,
          editores de video o gente que quiere tener la biblioteca de Steam
          entera descargada. O combinar un SSD rápido de 1TB para Windows y
          juegos actuales + un HDD de 4TB para archivar juegos viejos, fotos y
          películas.
          <br />
          <br />
          <strong>DirectStorage: El futuro que ya llegó</strong>
          <br />
          Esta es una tecnología nueva de Microsoft (también en PlayStation 5 y
          Xbox) que permite que los juegos carguen datos directamente desde el
          SSD NVMe a la tarjeta gráfica, prácticamente sin molestar al
          procesador. ¿El resultado?
          <strong>Escenarios que se cargan en 1 segundo</strong> en lugar de 10,
          y la posibilidad de que los juegos tengan mundos enormes sin pantallas
          de carga. Para aprovecharlo necesitas un SSD NVMe (preferiblemente
          PCIe 3.0 o superior) y Windows 10/11 actualizado.
          <br />
          <br />
          <strong>Marcas confiables:</strong>
          <br />- <strong>NVMe/SSD de primera línea:</strong> Samsung (980, 990
          Pro), Western Digital (SN570, SN770, SN850), Kingston (KC3000, NV2),
          Crucial (P3, P5 Plus), Sabrent, SK Hynix (Platinum P41).
          <br />- <strong>HDD confiables:</strong> Seagate (BarraCuda), Western
          Digital (Blue, Black, Red), Toshiba (para discos grandes de backup).
          <br />
          <br />
          <strong>Recomendaciones prácticas para comprar:</strong>
          <br />- <em>PC nueva gama entrada:</em> SSD NVMe PCIe 3.0 de 1TB (ej:
          Crucial P3, WD Blue SN570). Rendimiento excelente por buen precio.
          <br />- <em>PC gama media/alta:</em> SSD NVMe PCIe 4.0 de 1TB o 2TB
          (ej: Samsung 980 Pro, WD Black SN770, Kingston KC3000). Velocidad
          bestial.
          <br />- <em>Máquina de edición profesional:</em> SSD NVMe PCIe 4.0/5.0
          de 2TB y disco HDD de 4-8TB para backups y archivo.
          <br />- <em>Si tienes PC vieja:</em> Cómprale un SSD SATA de 500GB o
          1TB aunque sea. La diferencia la vas a NOTAR como si hubieras comprado
          computadora nueva.
          <br />
          <br />
          <strong>Estrategia inteligente: El combo SSD + HDD</strong>
          <br />
          Si no tienes presupuesto para un SSD gigante de 4TB, la jugada maestra
          es:
          <br />
          1. Comprar un SSD NVMe de 500GB o 1TB para instalar Windows, programas
          y los juegos que estés jugando activamente (los que necesitan
          velocidad).
          <br />
          2. Comprar un HDD de 2TB o 4TB para guardar fotos, música, documentos,
          y juegos viejos o a los que juegas poco (donde no te importe que
          carguen más lento).
          <br />
          Así tienes lo mejor de ambos mundos: velocidad donde importa y
          capacidad barata donde no importa tanto.
          <br />
          <br />
          <strong>Mito que debes olvidar:</strong> "Los SSD se desgastan rápido
          y pierden datos". Esto era cierto en los primeros SSD de hace 15 años.
          Hoy en día, un SSD moderno puede durar décadas con uso normal,
          escribiendo y borrando datos constantemente. Es más probable que
          cambies de computadora antes de que el SSD falle. Los HDD mecánicos,
          con sus partes móviles, son en realidad MÁS propensos a romperse por
          golpes o caídas.
          <br />
          <br />
          <div style={{ width: "90%" }}>
            <figure
              className="figure_seccion"
            >
              <p>
                <strong>Dato curioso para nuevos:</strong>
              </p>
              <figcaption>
                — Verás que algunos discos SSD NVMe se calientan mucho cuando
                trabajan a máxima velocidad. Muchas placas madre vienen con
                disipadores metálicos para poner encima. Si el tuyo no tiene,
                compra un SSD que ya incluya disipador o cómpralo aparte. Si se
                calienta demasiado, se ralentiza solo para protegerse (esto se
                llama "thermal throttling").
              </figcaption>
            </figure>
          </div>
          <br />
          <br />
        </p>
        <h3>Tarjeta de Red (Conectividad: Internet y Red Local)</h3>
        <img
          src="https://i.pinimg.com/736x/77/c9/43/77c943ba3d290e70148eaecdfb007e4e.jpg"
          alt="tarjeta de red"
        />
        <p>
          Si el procesador es el cerebro y la RAM es el escritorio de trabajo,
          la tarjeta de red es la <strong>boca y los oídos</strong> de tu
          computadora hacia el mundo exterior. Es el componente que le permite
          hablar con otras computadoras, con el router de tu casa y, a través de
          él, con todo Internet.
          <br />
          <br />
          Puede parecer un componente aburrido comparado con la tarjeta gráfica
          o el procesador, pero una mala tarjeta de red arruina cualquier
          experiencia gaming. Da igual que tengas una RTX 4090 si en mitad de
          una partida competitiva te empiezas a "teleportar" porque la conexión
          se corta, o ves el stream en calidad papa porque se pixela cada dos
          por tres.
          <br />
          <br />
          <strong>Lo fundamental: Cable vs. WiFi</strong>
          <br />
          Antes de entrar en detalles técnicos, la primera decisión es cómo vas
          a conectar tu PC:
          <br />- <strong>Por cable (Ethernet):</strong> Es la opción REY. Nada
          supera al cable en estabilidad, velocidad y latencia (el famoso ping).
          Si tu ordenador está cerca del router, CONÉCTALO POR CABLE SIEMPRE. Es
          más barato, más fiable y no sufre interferencias.
          <br />- <strong>Por WiFi (inalámbrica):</strong> Es la comodidad.
          Cuando no puedes poner cable porque el router está lejos, en otro
          piso, o tu casa es un laberinto. La tecnología WiFi ha mejorado
          muchísimo, pero NUNCA será tan estable como un cable bien puesto. Eso
          sí, con el equipo adecuado, hoy puedes jugar online sin problemas por
          WiFi si no tienes otra opción.
          <br />
          <br />
          <strong>Parte 1: Tarjetas de Red por Cable (Ethernet)</strong>
          <br />
          La mayoría de las placas madre ya traen una tarjeta de red cableada
          integrada. Pero no todas son iguales. Hay diferentes velocidades:
          <br />
          <br />
          <strong>Ethernet 10/100 (Fast Ethernet):</strong>
          <br />
          - Velocidad máxima: 100 Mbps (megabits por segundo). - Esto es
          tecnología del año 2000. Si tu placa tiene esto, es que es muy vieja.
          Con 100 Mbps bajas archivos a 12 MB/s aproximadamente. Para gaming
          online es justo pero funcional, aunque hoy en día cualquier conexión a
          internet supera esa velocidad. Si tienes esto, actualiza.
          <br />
          <br />
          <strong>Gigabit Ethernet (1000 Mbps - 1 Gbps):</strong>
          <br />
          - Velocidad máxima: 1000 Mbps (1 gigabit por segundo). - Es el
          ESTÁNDAR ABSOLUTO hoy. El 99% de las placas madre modernas incluyen
          esto. Te da velocidad de bajada real de unos 110-120 MB/s (megabytes
          por segundo). Es más que suficiente para cualquier conexión doméstica
          (a menos que tengas fibra de más de 1 Gbps). Para gaming online, sobra
          y basta.
          <br />
          <br />
          <strong>2.5 GbE (2.5 Gigabit Ethernet):</strong>
          <br />
          - Velocidad máxima: 2500 Mbps (2.5 Gbps). - Empieza a ser común en
          placas madre de gama media y alta. Es para gente con conexiones de
          fibra muy rápidas (más de 1 Gbps) o para transferir archivos entre
          ordenadores dentro de casa a gran velocidad (por ejemplo, si tienes un
          NAS - servidor de almacenamiento). Para gaming online, todavía es
          excesivo.
          <br />
          <br />
          <strong>10 GbE (10 Gigabit Ethernet):</strong>
          <br />
          - Velocidad máxima: 10.000 Mbps (10 Gbps). - Esto ya es nivel pro. Lo
          usan estudios de cine, editores de video que mueven terabytes, o
          entusiastas extremos. Requiere cables especiales y switches muy caros.
          Para un jugador normal, es tirar el dinero.
          <br />
          <br />
          <strong>Los chipsets de red (marcas que importan):</strong>
          <br />
          En las tarjetas cableadas verás dos nombres principalmente: Realtek
          (los más comunes, económicos, hacen bien su trabajo) e Intel
          (considerados los mejores, más estables, menor consumo de CPU, los
          prefieren los profesionales). También hay Killer (que ahora es parte
          de Intel) que presume de priorizar el tráfico de juegos, aunque en la
          práctica la diferencia es pequeña.
          <br />
          <br />
          <strong>Parte 2: Tarjetas de Red Inalámbricas (WiFi)</strong>
          <br />
          Aquí la cosa se pone más interesante porque hay MUCHAS generaciones y
          estándares. Lo primero que debes saber: NO compres una tarjeta WiFi
          sin entender estas letras.
          <br />
          <br />
          <strong>Los estándares WiFi (por orden de aparición):</strong>
          <br />- <strong>WiFi 4 (802.11n):</strong> Viejo, lento. Si ves esto,
          huye. Max teórico 600 Mbps, pero en realidad mucho menos. No para
          gaming.
          <br />- <strong>WiFi 5 (802.11ac):</strong> El estándar que ha
          dominado la última década. Todavía se encuentra y es funcional. Buen
          rendimiento, pero se queda corto si vives en un edificio con muchas
          redes vecinas (saturación). Velocidad real buena de 300-600 Mbps en
          condiciones óptimas.
          <br />- <strong>WiFi 6 (802.11ax):</strong> El NUEVO REY. Es el que
          debes buscar hoy. Mejora enormemente el rendimiento cuando hay muchos
          dispositivos conectados, reduce la latencia y es más eficiente. Si vas
          a jugar por WiFi, que sea WiFi 6. Velocidades reales de 600-1200 Mbps
          fácilmente.
          <br />- <strong>WiFi 6E:</strong> Es WiFi 6 pero con una supermejora:
          usa una banda nueva de 6 GHz (además de las tradicionales 2.4 GHz y 5
          GHz). Esto es como tener una autopista completamente nueva y vacía
          para tu PC. Menos interferencias, menos latencia. Ideal para gaming y
          realidad virtual. Eso sí, necesitas un router que también sea WiFi 6E
          (son más caros).
          <br />- <strong>WiFi 7:</strong> Acaba de salir. Todavía muy caro y
          poco aprovechado. Para entusiastas extremos.
          <br />
          <br />
          <strong>Las bandas de frecuencia: 2.4 GHz vs 5 GHz vs 6 GHz</strong>
          <br />- <strong>2.4 GHz:</strong> Llega más lejos, atraviesa paredes
          mejor, pero es más lenta y está SATURADÍSIMA (microondas, Bluetooth,
          vecinos, todo usa esto). No la uses para jugar si puedes evitarlo.
          <br />- <strong>5 GHz:</strong> Menos alcance, pero MUCHA más
          velocidad y menos interferencias. Es la banda principal para gaming
          por WiFi.
          <br />- <strong>6 GHz (WiFi 6E/7):</strong> Menos alcance aún, pero
          limpia como agua recién nacida. La mejor para gaming de alta
          competición si estás cerca del router.
          <br />
          <br />
          <strong>Bluetooth: El amigo invisible</strong>
          <br />
          La mayoría de las tarjetas WiFi modernas incluyen Bluetooth integrado.
          Si usas mandos inalámbricos (de Xbox, PlayStation, Nintendo),
          auriculares Bluetooth o ratones inalámbricos, NECESITAS Bluetooth.
          Asegúrate de que la tarjeta que compras incluye Bluetooth (normalmente
          lo especifican: WiFi + BT).
          <br />
          <br />
          <strong>Tipos de tarjetas WiFi para PC de escritorio:</strong>
          <br />- <strong>Integradas en la placa madre:</strong> Muchas placas
          ya traen WiFi (suelen indicarlo con "AC" o "AX" en el nombre). Si tu
          placa no tiene, o la que tiene es vieja, puedes comprar una tarjeta
          aparte.
          <br />- <strong>Tarjetas PCIe:</strong> Se conectan dentro del PC, en
          una ranura (como una tarjeta gráfica pequeña). Son la MEJOR opción.
          Suelen tener mejores antenas y refrigeración. Ejemplos: TP-Link Archer
          TX3000E (WiFi 6), Asus PCE-AX58BT (WiFi 6), Intel Wi-Fi 6E AX210 (chip
          desnudo que puedes comprar e instalar).
          <br />- <strong>Adaptadores USB WiFi:</strong> Son prácticos (plug and
          play), pero general son PEORES. Se calientan, las antenas son
          pequeñas, pierden señal más fácil. Úsalos solo como última opción o
          para portátiles. Si compras USB, que sea WiFi 6 y con antena externa
          grande (tipo "dedo" o con base).
          <br />
          <br />
          <strong>Latencia (Ping): La obsesión del jugador</strong>
          <br />
          La latencia es el tiempo que tarda un paquete de datos en ir de tu PC
          al servidor del juego y volver. Se mide en milisegundos (ms).
          <br />
          - Menos de 20 ms: Excelente (jugadores profesionales). - 20-40 ms: Muy
          bueno (la mayoría de jugadores). - 40-60 ms: Aceptable, se puede jugar
          sin problemas. - 60-100 ms: Se empieza a notar algo de retraso. - Más
          de 100 ms: Comienzas a ver tirones y disparos que no aciertan.
          <br />
          La tarjeta de red influye en esto, pero también tu conexión a
          internet, la calidad del router, y la distancia a los servidores. Una
          buena tarjeta de red (especialmente WiFi 6 con buena señal) puede
          reducir tu latencia comparada con una vieja o un USB cutre.
          <br />
          <br />
          <strong>Optimización para gaming: QoS y Killer</strong>
          <br />
          Algunas tarjetas (y routers) tienen tecnologías como QoS (Quality of
          Service) o las polémicas tarjetas "Killer". Esto permite priorizar el
          tráfico del juego por encima de descargas de Windows Update o vídeos
          de YouTube. En la práctica, si tienes un router moderno, puedes
          configurar QoS ahí y no necesitas una tarjeta especial. Las tarjetas
          Killer han mejorado, pero no son mágicas.
          <br />
          <br />
          <strong>¿Necesito comprar una tarjeta de red aparte?</strong>
          <br />
          - Si tu PC ya tiene puerto Ethernet y lo vas a usar por cable: NO. El
          Gigabit Ethernet integrado es suficiente.
          <br />
          - Si tu PC ya tiene WiFi 5 o 6 integrado y funciona bien: NO.
          <br />
          - Si tu PC no tiene WiFi y NECESITAS WiFi: SÍ. Compra una buena
          tarjeta PCIe WiFi 6.
          <br />
          - Si tu WiFi es muy antiguo (WiFi 4) o va mal, se cae, tiene mucho
          ping: SÍ. Actualizar a WiFi 6 puede transformar tu experiencia gaming
          inalámbrica.
          <br />
          - Si eres streamer y necesitas estabilidad absoluta: Vale la pena
          invertir en una tarjeta Ethernet adicional Intel de alta calidad,
          aunque tengas integrada, por si la integrada falla o quieres dedicar
          un puerto solo para subir el stream y otro para jugar.
          <br />
          <br />
          <strong>Recomendaciones concretas para comprar:</strong>
          <br />- <em>Conexión por cable (estándar):</em> Usa la que viene en tu
          placa. Si es Realtek, bien. Si es Intel, mejor. No gastes dinero extra
          si ya la tienes.
          <br />- <em>
            Necesitas WiFi nuevo (mejor opción calidad-precio):
          </em>{" "}
          Tarjeta PCIe con chip Intel Wi-Fi 6 AX200 o AX210 (las venden marcas
          como TP-Link, Asus, Gigabyte bajo su nombre, pero llevan este chip por
          dentro). Ej: TP-Link Archer TX50E, Asus PCE-AX58BT.
          <br />- <em>
            Quieres lo mejor para gaming inalámbrico (futuro):
          </em>{" "}
          Tarjeta PCIe WiFi 6E con chip Intel AX211 o similar. Ej: TP-Link
          Archer TXE75E.
          <br />- <em>Opción USB (solo si no puedes abrir el PC):</em> Netgear
          Nighthawk A8000 (WiFi 6, USB 3.0), Asus USB-AX56 (WiFi 6). Busca que
          tengan antena externa.
          <br />
          <br />
          <strong>Mito que debes olvidar:</strong> "El WiFi nunca sirve para
          jugar". Falso. Con un buen router y una buena tarjeta WiFi 6 o 6E,
          situados estratégicamente, puedes jugar online sin apenas notar
          diferencia con el cable. Dicho esto, si puedes poner cable, PON CABLE.
          Pero si no puedes, el WiFi moderno es una alternativa perfectamente
          viable.
          <br />
          <br />
          <div style={{ width: "90%" }}>
            <figure
              className="figure_seccion"
            >
              <p>
                <strong>Un consejo final:</strong>
              </p>
              <figcaption>
                — La tarjeta de red es importante, pero el ROUTER es igual de
                importante. Puedes tener la mejor tarjeta del mundo, pero si tu
                router es el que te dio la compañía de internet hace 8 años y
                está en una esquina detrás del televisor, tendrás problemas. Si
                vas a jugar por WiFi, asegúrate de que tu router sea también
                WiFi 6 o al menos WiFi 5 de buena calidad, y colócalo en un
                lugar céntrico y elevado.
              </figcaption>
            </figure>
          </div>
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default Gaming;
