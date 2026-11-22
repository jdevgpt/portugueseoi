/* Ampliación de los apuntes A1 y A2: explicaciones extra, ejemplos traducidos y errores frecuentes.
   Se añade al final de cada tema.  Formato:
   ex: "frase en portugués | traducción"  (una por línea)
   er: "incorrecto | correcto | explicación"
   mas: HTML con explicación adicional */
(function () {
  const X = {
  /* ═════════════ A1 ═════════════ */
  "a1-alfabeto": {
    mas: `<p><b>Reglas de la tilde.</b> Se acentúan las palabras agudas terminadas en <i>-a(s), -e(s), -o(s), -em, -ens</i> (<i>sofá, café, avó, também, parabéns</i>) y todas las esdrújulas (<i>médico, música, rápido</i>). Las llanas solo llevan tilde si terminan en <i>-l, -r, -n, -x, -ps, -ão(s), -ã(s), -i(s), -us, -um</i> (<i>fácil, açúcar, órfão, lápis, vírus, álbum</i>).</p>
<p><b>Diptongos nasales.</b> Practica en voz alta: <i>pão – pães – põe – mãe – muito</i> (<i>muito</i> se pronuncia con nasal aunque no lleve tilde: [mũjtu]).</p>
<p><b>Deletrear.</b> Las letras se dicen: a, bê, cê, dê, é, efe, guê, agá, i, jota, capa, ele, eme, ene, ó, pê, quê, erre, esse, tê, u, vê, dâblio, xis, ípsilon, zê.</p>`,
    ex: `avó (abuela, «ó» abierta) · avô (abuelo, «ô» cerrada) | la tilde cambia el significado
pais (padres) · país (país) | sin/con tilde
está (verbo) · esta (demostrativo) | sin/con tilde
Como se escreve o seu apelido? — Gê, ó, eme, é, zê. | ¿Cómo se escribe su apellido? — G-O-M-E-Z.`,
    er: `Pronunciar «obrigado» con «o» española | [ubriˈgadu] | la o átona suena /u/
Leer «janela» con jota española | [ʒɐˈnɛlɐ] | j/g suenan como la «j» francesa
Pronunciar «casa» con /s/ | [ˈkazɐ] | s entre vocales suena /z/`
  },
  "a1-artigos": {
    mas: `<p><b>Cuándo NO se usa artículo:</b> en expresiones como <i>em casa, em Portugal, de manhã, a pé, de carro</i>; en titulares y anuncios; con <i>Portugal, Lisboa, Madrid</i> (la mayoría de ciudades).</p>
<p><b>Contracción con artículo indefinido:</b> <i>em + um = num</i> es obligatoria en la lengua hablada: <i>Moro <b>num</b> apartamento.</i> Con <i>de</i> es opcional: <i>Gosto <b>de um</b> / <b>dum</b> café forte.</i></p>
<p><b>Ojo con la preposición a + a:</b> se escribe <b>à</b> (con acento grave) y se pronuncia como una «a» abierta: <i>Vou <b>à</b> praia. Vou <b>às</b> compras.</i></p>`,
    ex: `A Maria vive no Porto com o irmão. | María vive en Oporto con su hermano.
Estou em casa. | Estoy en casa. (sin artículo)
Vou à farmácia e depois ao banco. | Voy a la farmacia y después al banco.
Ela trabalha numa escola perto da praia. | Ella trabaja en un colegio cerca de la playa.
Passeamos pelas ruas de Alfama. | Paseamos por las calles de Alfama.
Chego às oito e saio à uma. | Llego a las ocho y salgo a la una.`,
    er: `Vou a o cinema. | Vou ao cinema. | la contracción es obligatoria
Moro em a Rua Augusta. | Moro na Rua Augusta. | em + a = na
Vou a la praia. | Vou à praia. | el artículo femenino es «a»
Minha mãe chama-se Rosa. | A minha mãe chama-se Rosa. | en PT el posesivo lleva artículo`
  },
  "a1-genero-numero": {
    mas: `<p><b>Sustantivos con dos géneros:</b> <i>o/a estudante, o/a jornalista, o/a colega, o/a turista</i> (solo cambia el artículo).</p>
<p><b>Cambio de significado según el género:</b> <i>o capital</i> (dinero) / <i>a capital</i> (ciudad); <i>o cabeça</i> (líder) / <i>a cabeça</i> (parte del cuerpo).</p>
<p><b>Plural con cambio de vocal:</b> en algunas palabras la «o» tónica cerrada se abre en plural: <i>o ovo [ô] → os ovos [ó]</i>, <i>o olho → os olhos</i>, <i>o porto → os portos</i>, <i>novo → novos</i>.</p>
<p><b>Diminutivos:</b> <i>-inho/-inha</i> son muy frecuentes y expresan cariño: <i>um cafezinho, a casinha, obrigadinho, pertinho</i>.</p>`,
    ex: `Os hotéis desta cidade são caros. | Los hoteles de esta ciudad son caros.
Tenho dois cães e três gatos. | Tengo dos perros y tres gatos.
As lições de hoje são fáceis. | Las lecciones de hoy son fáciles.
Os alemães e os espanhóis chegaram. | Los alemanes y los españoles llegaron.
O leite está quente. | La leche está caliente. (masc. en PT)
A árvore é muito alta. | El árbol es muy alto. (fem. en PT)`,
    er: `A leite | O leite | masculino en portugués
O viagem | A viagem | las palabras en -gem son femeninas
Os animales | Os animais | -al → -ais
Os papels | Os papéis | -el tónica → -éis`
  },
  "a1-pronomes-sujeito": {
    mas: `<p><b>El tratamiento en Portugal es gradual:</b> de más cercano a más formal: <i>tu → (nombre) + 3.ª persona → você → o senhor / a senhora → o senhor doutor / a senhora engenheira</i>. Es muy frecuente dirigirse a alguien por su nombre en 3.ª persona: <i>A Ana quer mais café?</i> (¿Quieres más café, Ana? — en tono respetuoso).</p>
<p><b>Títulos:</b> en Portugal se usan mucho <i>doutor/a</i> (licenciados), <i>engenheiro/a</i>, <i>professor/a</i>: <i>Bom dia, senhor engenheiro.</i></p>
<p><b>A gente</b> = nós en registro coloquial, siempre con verbo en 3.ª singular: <i>A gente vai ao cinema.</i></p>`,
    ex: `Tu és de Lisboa? | ¿Eres de Lisboa? (informal)
O senhor é de Lisboa? | ¿Usted es de Lisboa? (formal)
A Sofia também vem? | ¿Tú también vienes, Sofía? (respetuoso)
Vocês querem jantar connosco? | ¿Queréis cenar con nosotros?
A gente vê-se amanhã. | Nos vemos mañana. (coloquial)`,
    er: `Você quer café? (a un amigo) | Queres café? | entre amigos se usa «tu»
Vós sois portugueses? | Vocês são portugueses? | «vós» no se usa hoy
A gente vamos | A gente vai | «a gente» lleva verbo en singular`
  },
  "a1-presente-regulares": {
    mas: `<p><b>Truco para memorizar:</b> la vocal temática aparece en todas las personas menos en <i>eu</i>: <i>fal<b>a</b>s, fal<b>a</b>, fal<b>a</b>mos, fal<b>a</b>m</i>; <i>com<b>e</b>s, com<b>e</b>…</i>; en <i>-ir</i> la «i» solo aparece en <i>nós</i> (<i>partimos</i>).</p>
<p><b>Pronunciación:</b> la terminación <i>-am</i> (falam) suena igual que <i>-ão</i>; la terminación <i>-em</i> (comem) suena [ɐ̃j].</p>
<p><b>Verbos con cambio vocálico</b> (solo en la pronunciación): <i>levar → levo [ɛ]</i>, <i>morar → moro [ɔ]</i>: la vocal tónica se abre en las formas acentuadas en la raíz.</p>`,
    ex: `Moro em Badajoz, mas trabalho em Elvas. | Vivo en Badajoz, pero trabajo en Elvas.
Ao sábado almoçamos com os meus pais. | Los sábados comemos con mis padres.
Eles vivem no centro e apanham o metro. | Viven en el centro y cogen el metro.
Tu bebes café sem açúcar? | ¿Tomas el café sin azúcar?
A loja abre às nove e fecha às sete. | La tienda abre a las nueve y cierra a las siete.
Gosto muito de viajar. | Me gusta mucho viajar.`,
    er: `Eu gusto de café | Eu gosto de café | el verbo es «gostar»
Gosto o futebol | Gosto do futebol | gostar rige «de»
Me gusta a praia | Gosto da praia | la estructura es «eu gosto de»
Agora como (ahora mismo) | Agora estou a comer | acción en curso: estar a + inf.`
  },
  "a1-ser-estar-ficar": {
    mas: `<p><b>Adjetivos que cambian de significado:</b> <i>ser bom</i> (ser buena persona/de calidad) / <i>estar bom</i> (estar sano/rico de sabor); <i>ser aborrecido</i> (ser aburrido) / <i>estar aborrecido</i> (estar molesto); <i>ser pronto</i>… en PT se dice <i>estar pronto</i> = estar listo.</p>
<p><b>Estado civil:</b> en Portugal se dice <i>ser casado</i> o <i>estar casado</i> (ambas correctas).</p>
<p><b>Ficar + adjetivo = cambio de estado</b>: equivale a «ponerse/quedarse»: <i>ficar nervoso, ficar triste, ficar sem dinheiro, ficar contente com</i>.</p>
<p><b>Ficar con lugares:</b> <i>Ficamos num hotel</i> (nos alojamos en un hotel).</p>`,
    ex: `A Inês é professora, mas hoje está de férias. | Inés es profesora, pero hoy está de vacaciones.
O jantar está pronto! | ¡La cena está lista!
Onde fica a Torre de Belém? | ¿Dónde está la Torre de Belém?
Fiquei muito contente com a notícia. | Me puse muy contento con la noticia.
Hoje fico em casa a descansar. | Hoy me quedo en casa descansando.
Esta sopa está muito boa. | Esta sopa está muy rica.`,
    er: `Estou espanhola | Sou espanhola | la nacionalidad va con «ser»
A estação está ao lado do hotel | A estação fica/é ao lado do hotel | lugares fijos: ficar o ser
Sou cansado | Estou cansado | estado temporal: estar
Me quedo en casa → Fico-me em casa | Fico em casa | ficar no es pronominal`
  },
  "a1-ter-haver": {
    mas: `<p><b>Expresiones con ter:</b> <i>ter saudades de</i> (echar de menos), <i>ter jeito para</i> (tener maña para), <i>ter graça</i> (tener gracia), <i>ter a certeza</i> (estar seguro), <i>ter vontade de</i> (tener ganas de), <i>ter cuidado</i>.</p>
<p><b>Haver en otros tiempos:</b> <i>houve</i> (hubo), <i>havia</i> (había), <i>vai haver</i> (va a haber).</p>
<p><b>Há quanto tempo…?</b> = ¿Cuánto tiempo hace que…? <i>Há quanto tempo estudas português? — Há dois anos.</i></p>`,
    ex: `Tenho saudades de Portugal. | Echo de menos Portugal.
Há muitos turistas em agosto. | Hay muchos turistas en agosto.
Não tenho a certeza. | No estoy seguro.
Tens jeito para a cozinha! | ¡Tienes maña para la cocina!
Ontem houve um acidente na ponte. | Ayer hubo un accidente en el puente.
Conhecemo-nos há dez anos. | Nos conocemos desde hace diez años.`,
    er: `Tem um supermercado aqui? | Há um supermercado aqui? | en PT europeo: haver`
  },
  "a1-irregulares-presente": {
    mas: `<p><b>Grupos para memorizar:</b></p>
<ul><li><b>-ço en «eu»:</b> fazer → faço, ouvir → ouço, pedir → peço, medir → meço, perder → perco.</li>
<li><b>Cambio e→i en «eu»:</b> preferir → prefiro, sentir → sinto, vestir → visto, seguir → sigo, servir → sirvo.</li>
<li><b>Cambio o→u en «eu»:</b> dormir → durmo, cobrir → cubro, tossir → tusso.</li>
<li><b>Muy irregulares:</b> ser, estar, ter, ir, vir, ver, dar, saber, pôr, haver.</li></ul>
<p><b>Ir vs vir:</b> <i>ir</i> = ir hacia allí; <i>vir</i> = venir hacia donde está el hablante: <i>Vens à festa? — Sim, vou!</i> (en portugués se responde con <i>vou</i>, igual que en español).</p>`,
    ex: `Faço ginástica três vezes por semana. | Hago gimnasia tres veces por semana.
Não posso ir, tenho de trabalhar. | No puedo ir, tengo que trabajar.
Sei falar inglês, mas não sei alemão. | Sé hablar inglés, pero no sé alemán.
Pões o casaco? Está frio. | ¿Te pones el abrigo? Hace frío.
Ouço rádio no carro. | Escucho la radio en el coche.
Eles vêm de Évora e vão para Lisboa. | Vienen de Évora y van a Lisboa.`,
    er: `Eu fazo | Eu faço | forma irregular
Eu sabo | Eu sei | forma irregular
Eu pono | Eu ponho | pôr → ponho
Eles vem | Eles vêm | plural con circunflejo`
  },
  "a1-estar-a": {
    mas: `<p><b>También para acciones temporales</b> (no solo «ahora mismo»): <i>Este mês estou a trabalhar de noite.</i></p>
<p><b>Con pronombres:</b> el pronombre va detrás del infinitivo: <i>Estou a <b>lavar-me</b>.</i> o, con negación, delante de estar: <i>Não <b>me</b> estou a sentir bem.</i></p>
<p><b>Verbos de estado</b> (ser, ter, saber, gostar, querer) normalmente no se usan con <i>estar a</i>: <i>Gosto deste filme</i> (no <s>estou a gostar</s>, aunque coloquialmente se oye).</p>`,
    ex: `O que estás a fazer? — Estou a ver um filme. | ¿Qué estás haciendo? — Estoy viendo una película.
Os miúdos estão a brincar no jardim. | Los niños están jugando en el jardín.
Estamos a pensar em mudar de casa. | Estamos pensando en mudarnos de casa.
Está a chover muito. | Está lloviendo mucho.
Ela está a aprender a conduzir. | Está aprendiendo a conducir.`,
    er: `Estou estudando | Estou a estudar | el gerundio es brasileño
Estou a estudo | Estou a estudar | detrás de «a» va el infinitivo
Estou estudar | Estou a estudar | falta la preposición «a»`
  },
  "a1-ir-infinitivo": {
    mas: `<p><b>Ir + ir:</b> en portugués se dice tranquilamente <i>Vou ir</i>, pero es más natural usar el presente: <i>Amanhã vou ao Porto.</i></p>
<p><b>Planes muy seguros:</b> el presente también expresa futuro: <i>O comboio parte às 10h.</i></p>
<p><b>Intención frustrada en pasado:</b> <i>ia + infinitivo</i>: <i>Ia telefonar-te, mas esqueci-me.</i> (Iba a llamarte, pero se me olvidó).</p>`,
    ex: `Vou estudar mais este ano. | Voy a estudiar más este año.
Vamos jantar fora hoje? | ¿Cenamos fuera hoy?
Ela vai ter um bebé em março. | Va a tener un bebé en marzo.
Acho que vai chover. | Creo que va a llover.
Ia sair, mas começou a chover. | Iba a salir, pero empezó a llover.`,
    er: `Vou a jantar | Vou jantar | sin preposición
Amanhã irei ao cinema (hablado) | Amanhã vou ao cinema | el futuro simple suena formal`
  },
  "a1-possessivos": {
    mas: `<p><b>Posesivo sin artículo:</b> en vocativos (<i>Meu amor!</i>), en algunas expresiones fijas (<i>em minha casa</i> o <i>na minha casa</i>) y detrás de <i>ser</i> para indicar pertenencia (<i>É meu</i>).</p>
<p><b>Con partes del cuerpo y ropa</b> se usa el artículo, no el posesivo, cuando el poseedor está claro: <i>Lavo as mãos. Tira o casaco.</i></p>
<p><b>Un amigo mío:</b> <i>um amigo meu</i>; <i>uns primos nossos</i>.</p>`,
    ex: `A minha irmã e o marido dela vivem em Faro. | Mi hermana y su marido viven en Faro.
Os vossos filhos são muito educados. | Vuestros hijos son muy educados.
Esta mala é tua? — Não, é dela. | ¿Esta maleta es tuya? — No, es suya (de ella).
Um amigo meu trabalha em Lisboa. | Un amigo mío trabaja en Lisboa.
Dói-me a cabeça. | Me duele la cabeza.`,
    er: `Meu carro é azul | O meu carro é azul | en PT con artículo
O seu carro (de él) → ambiguo | O carro dele | para 3.ª persona: dele/dela
Lavo as minhas mãos | Lavo as mãos | con partes del cuerpo, artículo`
  },
  "a1-demonstrativos": {
    mas: `<p><b>En el habla</b>, <i>esse</i> sustituye a menudo a <i>este</i>, pero en la escritura se mantiene la distinción.</p>
<p><b>Tiempo:</b> <i>este ano</i> (el actual), <i>nesse dia</i> (aquel día mencionado), <i>naquela altura</i> (en aquella época).</p>
<p><b>Referencia en el texto:</b> <i>isso</i> remite a lo que ha dicho el otro: <i>— Vou mudar de emprego. — Isso é ótimo!</i></p>`,
    ex: `Esta casa é minha e aquela é da minha avó. | Esta casa es mía y aquella es de mi abuela.
O que é isso que tens na mão? | ¿Qué es eso que tienes en la mano?
Naquela altura vivíamos em Coimbra. | En aquella época vivíamos en Coimbra.
Gosto muito dessa ideia. | Me gusta mucho esa idea.
Isto é para ti. | Esto es para ti.`,
    er: `De este livro | Deste livro | contracción obligatoria
Em esta rua | Nesta rua | em + esta = nesta
Esto é caro | Isto é caro | neutro: isto/isso/aquilo`
  },
  "a1-interrogativos": {
    mas: `<p><b>Que / O que:</b> delante de sustantivo se usa <i>que</i> (<i>Que livro?</i>); solo, <i>o que</i> (<i>O que queres?</i>). Al final de frase: <i>Queres o quê?</i></p>
<p><b>Porque, porquê, por que:</b> <i>Porque é que…?</i> (pregunta) · <i>…porquê?</i> (al final) · <i>porque</i> (respuesta) · <i>o porquê</i> (el motivo).</p>
<p><b>Qual vs que:</b> <i>Qual</i> pregunta por elección entre varios o por datos: <i>Qual é a tua morada?</i> (¿Cuál es tu dirección?).</p>`,
    ex: `Qual é o teu prato preferido? | ¿Cuál es tu plato preferido?
Que horas são? | ¿Qué hora es?
Com quem vais ao cinema? | ¿Con quién vas al cine?
Para onde vão nas férias? | ¿Adónde vais en vacaciones?
De quem é este casaco? | ¿De quién es esta chaqueta?
Quanto tempo demora a viagem? | ¿Cuánto tarda el viaje?`,
    er: `Qué queres? | O que queres? | se escribe sin tilde y con «o»
Que é a tua morada? | Qual é a tua morada? | para datos: qual
Porquê não vens? | Porque é que não vens? | «porquê» va al final`
  },
  "a1-preposicoes": {
    mas: `<p><b>Medios de transporte:</b> <i>de</i> + vehículo (<i>de carro, de comboio, de avião</i>) pero <i>a pé, a cavalo</i>.</p>
<p><b>Em vs a con verbos de movimiento:</b> en portugués se dice <i>chegar <b>a</b></i> (llegar a) y <i>entrar <b>em</b></i> (entrar en): <i>Cheguei a Lisboa. Entrei no café.</i></p>
<p><b>Desde / até:</b> <i>desde as 9 até às 18</i> (desde las 9 hasta las 18).</p>`,
    ex: `Vou para o trabalho de autocarro. | Voy al trabajo en autobús.
Entrei na loja e comprei pão. | Entré en la tienda y compré pan.
Cheguei a casa muito tarde. | Llegué a casa muy tarde.
O gato está debaixo da cama. | El gato está debajo de la cama.
A farmácia fica em frente ao banco. | La farmacia está enfrente del banco.
Trabalho das nove às cinco. | Trabajo de nueve a cinco.`,
    er: `Vou em carro | Vou de carro | transporte: de
Cheguei em Lisboa | Cheguei a Lisboa | llegar a (PT europeo)
Entrei a casa | Entrei em casa | entrar em`
  },
  "a1-negacao": {
    mas: `<p><b>Respuestas cortas:</b> se repite el verbo: <i>— Gostas? — Gosto. / Não gosto.</i> Decir solo «sim» suena seco.</p>
<p><b>Nem:</b> = ni / ni siquiera: <i>Não bebo café nem chá. Nem sei.</i></p>
<p><b>Pois não:</b> confirma una negación: <i>— Não é fácil. — Pois não.</i> (No, claro que no.)</p>`,
    ex: `Nunca vou ao ginásio ao domingo. | Nunca voy al gimnasio los domingos.
Já não moro em Madrid. | Ya no vivo en Madrid.
Ainda não sei. | Todavía no lo sé.
Não conheço ninguém nesta festa. | No conozco a nadie en esta fiesta.
Não como carne nem peixe. | No como carne ni pescado.`,
    er: `Todavia não sei | Ainda não sei | todavía = ainda
Não conheço a ninguém | Não conheço ninguém | sin «a»`
  },
  "a1-numeros": {
    mas: `<p><b>Decimales y precios:</b> la coma separa decimales: <i>2,50 € = dois euros e cinquenta (cêntimos)</i>.</p>
<p><b>Porcentajes:</b> <i>10 % = dez por cento</i>. <b>Fracciones:</b> <i>meio, um terço, um quarto</i>.</p>
<p><b>Años:</b> <i>1998 = mil novecentos e noventa e oito</i>; <i>2005 = dois mil e cinco</i>.</p>
<p><b>Teléfonos:</b> se leen de tres en tres: <i>912 345 678 = nove, um, dois…</i> o <i>novecentos e doze…</i></p>`,
    ex: `São trinta e dois euros e vinte. | Son treinta y dos euros con veinte.
Moro no número cento e quinze, terceiro direito. | Vivo en el número 115, tercero derecha.
Nasci em mil novecentos e oitenta e sete. | Nací en 1987.
Há duzentas e cinquenta pessoas na sala. | Hay doscientas cincuenta personas en la sala.
É a segunda vez que venho a Portugal. | Es la segunda vez que vengo a Portugal.`,
    er: `Dieciséis → dezesseis | dezasseis | forma de Portugal
Dois casas | Duas casas | concordancia en femenino
Duzentos pessoas | Duzentas pessoas | las centenas concuerdan`
  },
  "a1-saudacoes": {
    mas: `<p><b>Besos y saludos:</b> en Portugal se dan dos besos (empezando por la derecha) entre mujeres y entre hombre y mujer; entre hombres, apretón de manos o abrazo.</p>
<p><b>«Tudo bem?»</b> se responde <i>Tudo bem, e tu/contigo?</i> o <i>Tudo ótimo!</i>. <b>«Então?»</b> es un saludo informal muy común (¿Qué tal?).</p>
<p><b>Despedidas según el momento:</b> <i>Até já</i> (te veo en un rato), <i>Até logo</i> (más tarde hoy), <i>Até amanhã</i>, <i>Até à próxima</i>.</p>`,
    ex: `Olá, tudo bem? — Tudo, e contigo? | Hola, ¿qué tal? — Bien, ¿y tú?
Muito prazer em conhecê-lo. | Encantado de conocerle.
Apresento-te o meu namorado, o Pedro. | Te presento a mi novio, Pedro.
Desculpe, pode repetir, por favor? | Perdone, ¿puede repetir, por favor?
Obrigada pela ajuda! — De nada. | ¡Gracias por la ayuda! — De nada.`,
    er: `Encantado (al conocer a alguien) | Muito prazer | «encantado» suena exagerado
Obrigado (dicho por una mujer) | Obrigada | concuerda con quien habla
Buenas → Boas | Olá / Bom dia | «Boas!» es muy coloquial`
  },
  "a1-familia": {
    mas: `<p><b>Plurales que incluyen ambos sexos:</b> <i>os pais</i> (padre y madre), <i>os irmãos</i> (hermanos y hermanas), <i>os avós</i> (abuelos), <i>os tios</i>.</p>
<p><b>Familia política:</b> <i>o padrasto / a madrasta</i> (padrastro/madrastra), <i>o enteado</i> (hijastro), <i>o padrinho / a madrinha</i> (padrino/madrina).</p>
<p><b>Describir:</b> se usa <i>ter</i> para rasgos físicos (<i>Tem olhos verdes</i>) y <i>ser</i> para características (<i>É alto</i>).</p>`,
    ex: `Tenho dois irmãos: um irmão e uma irmã. | Tengo dos hermanos: un hermano y una hermana.
Os meus avós vivem numa aldeia. | Mis abuelos viven en un pueblo.
A minha sobrinha tem cabelo ruivo e olhos azuis. | Mi sobrina tiene el pelo pelirrojo y los ojos azules.
O meu cunhado é muito simpático e divertido. | Mi cuñado es muy simpático y divertido.
Somos uma família pequena. | Somos una familia pequeña.`,
    er: `Tenho dois hermanos | Tenho dois irmãos | nh en portugués
A minha esposa (formal) | A minha mulher | más habitual en PT
Ele é cabelo louro | Ele tem cabelo louro | rasgos con «ter»`
  },
  "a1-tempo": {
    mas: `<p><b>Los días de la semana:</b> vienen de la liturgia (segunda-feira = segundo día). Se usan con artículo: <i>na segunda-feira</i> (el lunes), <i>às segundas</i> (los lunes).</p>
<p><b>Partes del día:</b> <i>de madrugada, de manhã, ao meio-dia, à tarde, ao fim da tarde, à noite</i>.</p>
<p><b>Frecuencia:</b> <i>todos os dias, todas as semanas, de 15 em 15 dias</i> (cada 15 días).</p>`,
    ex: `Na sexta-feira vou ao cinema. | El viernes voy al cine.
Às quartas tenho aula de português. | Los miércoles tengo clase de portugués.
Faço anos a 12 de julho. | Mi cumpleaños es el 12 de julio.
A reunião é às 15h30. | La reunión es a las 15:30.
No inverno anoitece cedo. | En invierno anochece pronto.`,
    er: `El lunes → O lunes | A segunda-feira | días con -feira
Março (con mayúscula) | março | los meses van en minúscula (AO90)
Son las dos y media → São duas e média | São duas e meia | «meia»`
  },
  "a1-comida": {
    mas: `<p><b>Platos típicos:</b> <i>bacalhau à Brás, caldo verde, francesinha</i> (Oporto), <i>cozido à portuguesa, arroz de pato, sardinhas assadas, bifana</i>, y de postre <i>arroz doce, pastel de nata, baba de camelo</i>.</p>
<p><b>Formas de cocinar:</b> <i>assado</i> (asado), <i>grelhado</i> (a la plancha/parrilla), <i>cozido</i> (cocido), <i>frito</i>, <i>estufado</i> (guisado), <i>no forno</i> (al horno), <i>mal passado / bem passado</i> (poco/muy hecho).</p>
<p><b>En la mesa:</b> <i>o garfo, a faca, a colher, o prato, o copo, o guardanapo</i>.</p>`,
    ex: `Ao pequeno-almoço como pão com manteiga. | En el desayuno como pan con mantequilla.
Queria um bife bem passado com batatas fritas. | Querría un filete muy hecho con patatas fritas.
Pode trazer-me um copo de água? | ¿Me puede traer un vaso de agua?
Não como carne, sou vegetariana. | No como carne, soy vegetariana.
O que há de sobremesa? | ¿Qué hay de postre?`,
    er: `Um vaso de água | Um copo de água | vaso = maceta
A salsa (para la pasta) | O molho | salsa = perejil
Polvo de chocolate | Chocolate em pó | polvo = pulpo`
  },
  "a1-casa": {
    mas: `<p><b>Tipologías:</b> en los anuncios aparecen <i>T0</i> (estudio), <i>T1</i> (un dormitorio), <i>T2</i>, <i>T3</i>… <i>Arrendar</i> = alquilar; <i>a renda</i> = el alquiler mensual; <i>o senhorio</i> = el casero.</p>
<p><b>Tareas domésticas:</b> <i>arrumar a casa</i> (ordenar), <i>limpar o pó</i> (quitar el polvo), <i>aspirar</i>, <i>lavar a loiça</i>, <i>estender a roupa</i>, <i>passar a ferro</i> (planchar), <i>fazer a cama</i>.</p>`,
    ex: `Vivo num T2 no terceiro andar sem elevador. | Vivo en un piso de dos dormitorios en el tercero sin ascensor.
A cozinha é pequena, mas tem muita luz. | La cocina es pequeña, pero tiene mucha luz.
Hoje tenho de arrumar o quarto. | Hoy tengo que ordenar el dormitorio.
O frigorífico está vazio. | La nevera está vacía.
A casa de banho fica ao fundo do corredor. | El baño está al fondo del pasillo.`,
    er: `O baño | A casa de banho | en PT europeo
A nevera | O frigorífico | en PT europeo
Alugar uma casa (como inquilino) | Arrendar uma casa | en Portugal se dice arrendar`
  },
  "a1-cidade": {
    mas: `<p><b>Imperativo para dar indicaciones:</b> <i>siga, vire, atravesse, suba, desça, continue</i> (formas de <i>você</i>) o <i>segue, vira, atravessa</i> (tu).</p>
<p><b>Transporte:</b> en Lisboa, el <i>Navegante</i> es el abono; en Oporto, el <i>Andante</i>. El <i>bilhete</i> se valida (<i>validar</i>) al entrar.</p>
<p><b>Distancias:</b> <i>Fica a 5 minutos a pé</i> (está a 5 minutos andando), <i>a dois quarteirões</i> (a dos manzanas).</p>`,
    ex: `Desculpe, como vou para a Sé? | Perdone, ¿cómo voy a la catedral?
Vire à esquerda e siga sempre em frente. | Gire a la izquierda y siga todo recto.
A paragem fica depois dos semáforos. | La parada está después del semáforo.
Apanho o elétrico 28 todos os dias. | Cojo el tranvía 28 todos los días.
Quanto custa um bilhete de ida e volta? | ¿Cuánto cuesta un billete de ida y vuelta?`,
    er: `Coger el autobús → colher o autocarro | Apanhar o autocarro | verbo «apanhar»
O ônibus / o trem | O autocarro / o comboio | formas de Portugal
Vou em pé | Vou a pé | a pé`
  },
  "a1-rotina": {
    mas: `<p><b>Expresar la secuencia:</b> <i>primeiro, depois, a seguir, mais tarde, por fim</i>.</p>
<p><b>Horas aproximadas:</b> <i>por volta das oito</i> (sobre las ocho), <i>lá para as nove</i> (hacia las nueve).</p>
<p><b>Profesiones en femenino:</b> <i>a médica, a juíza, a engenheira, a presidente</i> (o <i>presidenta</i>, menos común).</p>`,
    ex: `Acordo às sete e levanto-me logo. | Me despierto a las siete y me levanto enseguida.
Primeiro tomo duche, depois visto-me. | Primero me ducho, después me visto.
Saio de casa por volta das oito. | Salgo de casa sobre las ocho.
À noite deito-me tarde. | Por la noche me acuesto tarde.
Ela é advogada e trabalha num escritório. | Es abogada y trabaja en un despacho.`,
    er: `Me levanto às sete | Levanto-me às sete | pronombre detrás
Ducho-me | Tomo duche | «duchar-se» no se usa
Trabalho de camareiro | Sou empregado de mesa | camarero en PT`
  },
  "a1-roupa": {
    mas: `<p><b>Verbos de ropa:</b> <i>vestir</i> (ponerse ropa que se mete por el cuerpo), <i>calçar</i> (zapatos, calcetines, guantes), <i>pôr</i> (en general), <i>tirar / despir</i> (quitarse), <i>usar / levar</i> (llevar puesto).</p>
<p><b>Tallas:</b> <i>Que número calça?</i> (¿Qué número de zapato?), <i>Que tamanho veste?</i></p>
<p><b>Valorar:</b> <i>Fica-te bem / mal</i>, <i>é largo / apertado</i> (ancho / estrecho), <i>curto / comprido</i>.</p>`,
    ex: `Calço o 38. | Calzo un 38.
Esta camisola fica-me larga. | Este jersey me queda ancho.
Vou pôr um casaco porque está frio. | Voy a ponerme una chaqueta porque hace frío.
Tem esta saia num tamanho mais pequeno? | ¿Tiene esta falda en una talla más pequeña?
Gosto de vestir roupa confortável. | Me gusta vestir ropa cómoda.`,
    er: `A camisola (como camiseta) | A t-shirt | camisola = jersey
Este pantalón | Estas calças | siempre en plural
Largo (longitud) | Comprido | largo = ancho`
  },
  "a1-corpo": {
    mas: `<p><b>Doer funciona como «doler»:</b> <i>Dói-me a cabeça</i> / <i>Doem-me as costas</i> (concuerda con lo que duele).</p>
<p><b>Ter dores de</b> + parte del cuerpo es igual de frecuente: <i>Tenho dores de dentes.</i></p>
<p><b>Urgencias:</b> el teléfono de emergencias es el <b>112</b>; la línea de salud <b>SNS 24</b> (808 24 24 24).</p>`,
    ex: `Doem-me os pés de tanto andar. | Me duelen los pies de tanto andar.
Tenho dores de garganta e tosse. | Tengo dolor de garganta y tos.
Estou constipado, tenho o nariz entupido. | Estoy resfriado, tengo la nariz tapada.
Parti o braço a jogar futebol. | Me rompí el brazo jugando al fútbol.
Precisa de ir ao médico. | Tiene que ir al médico.`,
    er: `Me duele a cabeça | Dói-me a cabeça | pronombre detrás
Dói-me os pés | Doem-me os pés | concordancia en plural
Estou constipado (estreñido) | Estou com prisão de ventre | constipado = resfriado`
  },
  "a1-clima": {
    mas: `<p><b>Estar + sustantivo:</b> <i>está sol, está calor, está frio, está vento</i>; también <i>faz sol, faz frio</i> (menos frecuente en Portugal).</p>
<p><b>Previsiones:</b> <i>Amanhã vai estar sol. Vai chover no Norte. Possibilidade de aguaceiros</i> (chubascos).</p>
<p><b>Expresiones:</b> <i>Está um calor de morrer. Está um frio de rachar.</i></p>`,
    ex: `Hoje está muito calor em Lisboa. | Hoy hace mucho calor en Lisboa.
No inverno chove muito no Norte. | En invierno llueve mucho en el norte.
Amanhã vai estar nublado. | Mañana estará nublado.
Leva o guarda-chuva, está a chover. | Llévate el paraguas, está lloviendo.
Estão 35 graus à sombra. | Hace 35 grados a la sombra.`,
    er: `Hace calor → Faz calor (muy brasileño) | Está calor | en PT europeo
Está chovendo | Está a chover | gerundio brasileño`
  },
  "a1-funcoes-sociais": {
    mas: `<p><b>Pedir con cortesía:</b> <i>Queria…</i>, <i>Podia…?</i>, <i>Era possível…?</i>, <i>Se faz favor</i>. Para llamar al camarero: <i>Se faz favor!</i></p>
<p><b>Aceptar / rechazar:</b> <i>Com todo o gosto!</i> (¡Con mucho gusto!) · <i>Que pena, não posso.</i> · <i>Fica para a próxima.</i> (Lo dejamos para otra vez).</p>
<p><b>Mostrar interés:</b> <i>A sério?</i> (¿En serio?), <i>Que bom!</i>, <i>Que chatice!</i> (¡Qué fastidio!).</p>`,
    ex: `Se faz favor, pode trazer a conta? | Por favor, ¿puede traer la cuenta?
Queres vir jantar lá a casa no sábado? | ¿Quieres venir a cenar a casa el sábado?
Com todo o gosto! | ¡Con mucho gusto!
Que pena, já tenho planos. Fica para a próxima. | Qué pena, ya tengo planes. Otra vez será.
Combinado, até sábado! | ¡Quedamos así, hasta el sábado!`,
    er: `Quiero un café (suena brusco) | Queria um café | cortesía con imperfecto
Diga? (al teléfono) | Estou? / Sim? | fórmula portuguesa`
  },

  /* ═════════════ A2 ═════════════ */
  "a2-pps-regulares": {
    mas: `<p><b>Pretérito perfeito simples = «hablé» y casi siempre «he hablado».</b> Es el tiempo más usado para hablar del pasado.</p>
<p><b>Ya / todavía no:</b> <i>Já almoçaste? — Já. / Ainda não.</i> (¿Has comido ya? — Sí. / Todavía no).</p>
<p><b>Pronunciación:</b> <i>falámos</i> lleva la «a» abierta; <i>falamos</i> (presente) la tiene cerrada.</p>`,
    ex: `Ontem jantei com uns amigos. | Ayer cené con unos amigos.
Já acabaste o trabalho? | ¿Ya has terminado el trabajo?
No ano passado visitámos os Açores. | El año pasado visitamos las Azores.
Esta manhã cheguei atrasada. | Esta mañana he llegado tarde.
Nunca comi bacalhau com natas. | Nunca he comido bacalao con nata.
Eles mudaram de casa em março. | Se mudaron de casa en marzo.`,
    er: `Hoje tenho comido peixe | Hoje comi peixe | «he comido» = perfeito simples
Chegei | Cheguei | -gar → -guei
Começei | Comecei | -çar → -cei`
  },
  "a2-pps-irregulares": {
    mas: `<p><b>Modelo «tive»:</b> muchos irregulares hacen <i>-e</i> en eu y ele: <i>tive/teve, estive/esteve, pude/pôde, soube/soube, trouxe/trouxe, disse/disse</i>.</p>
<p><b>Quis y fiz:</b> sin -e final en eu: <i>quis, fiz, pus</i>; y en ele: <i>quis, fez, pôs</i>.</p>
<p><b>Ver/vir en pasado</b> es el gran trampa: <i>vi / viste / viu</i> (ver) vs <i>vim / vieste / veio</i> (vir).</p>`,
    ex: `Fui a Lisboa de comboio e vim de autocarro. | Fui a Lisboa en tren y volví en autobús.
O que fizeste no fim de semana? | ¿Qué hiciste el fin de semana?
Estive doente toda a semana. | He estado enfermo toda la semana.
Ela não pôde vir à festa. | No pudo venir a la fiesta.
Pusemos a mesa e jantámos. | Pusimos la mesa y cenamos.
Soube ontem a notícia. | Me enteré ayer de la noticia. (saber en pasado = enterarse)`,
    er: `Eu hice → Eu fize | Eu fiz | forma irregular
Ele pode (pasado) | Ele pôde | pasado con circunflejo
Ele vio | Ele viu | ver → viu`
  },
  "a2-imperfeito": {
    mas: `<p><b>Imperfecto «de cortesía»:</b> <i>Queria, podia, gostava</i> suavizan peticiones y es lo normal en tiendas y bares.</p>
<p><b>Imperfecto en lugar del condicional:</b> en la lengua hablada: <i>Se pudesse, ia contigo</i> (Si pudiera, iría contigo).</p>
<p><b>Imperfecto progresivo:</b> <i>estava a + infinitivo</i> = «estaba haciendo»: <i>Estava a dormir quando ligaste.</i></p>`,
    ex: `Quando era pequeno, morava no campo. | Cuando era pequeño, vivía en el campo.
Todos os verões íamos à praia da Nazaré. | Todos los veranos íbamos a la playa de Nazaré.
A minha avó fazia um arroz doce delicioso. | Mi abuela hacía un arroz con leche delicioso.
Gostava de marcar uma consulta. | Me gustaría pedir cita.
Eu estava a cozinhar e o telefone tocou. | Yo estaba cocinando y sonó el teléfono.`,
    er: `Eu estava estudando | Eu estava a estudar | forma europea
Nós falavamos | Nós falávamos | tilde en nós`
  },
  "a2-perfeito-vs-imperfeito": {
    mas: `<p><b>Verbos que cambian de matiz:</b> <i>conhecia</i> (conocía) / <i>conheci</i> (conocí por primera vez); <i>sabia</i> (sabía) / <i>soube</i> (me enteré); <i>queria</i> (quería) / <i>quis</i> (intenté, quise).</p>
<p><b>Duración cerrada = perfeito:</b> <i>Vivi dez anos em Lisboa</i> (ya no vivo allí). <b>Contexto abierto = imperfeito:</b> <i>Vivia em Lisboa quando nos conhecemos.</i></p>`,
    ex: `Conheci o meu marido quando trabalhava em Braga. | Conocí a mi marido cuando trabajaba en Braga.
Estava sol, por isso fomos à praia. | Hacía sol, por eso fuimos a la playa.
Morei dois anos em Évora. | Viví dos años en Évora.
Enquanto eu lia, ele via televisão. | Mientras yo leía, él veía la tele.
Sabia que ela era portuguesa, mas só soube ontem que era do Porto. | Sabía que era portuguesa, pero hasta ayer no me enteré de que era de Oporto.`,
    er: `Ontem estava no cinema (salida puntual) | Ontem fui ao cinema | hecho puntual: perfeito
Quando tive 10 anos | Quando tinha 10 anos | la edad en el pasado: imperfeito`
  },
  "a2-perfeito-composto": {
    mas: `<p><b>Tres ideas clave del perfeito composto:</b> 1) repetición (<i>tenho ido muito ao cinema</i>); 2) continuidad hasta ahora (<i>tenho estado doente</i>); 3) suele ir con marcadores como <i>ultimamente, nos últimos tempos, desde que…</i></p>
<p><b>Nunca</b> se usa para una acción única: ❌ <i>Tenho visto esse filme.</i> ✅ <i>Já vi esse filme.</i></p>`,
    ex: `Tenho dormido pouco esta semana. | Esta semana estoy durmiendo poco.
Temos falado muito de ti. | Hemos estado hablando mucho de ti.
Tens tido notícias do João? | ¿Has tenido noticias de Juan últimamente?
Não tenho feito nada de especial. | No he estado haciendo nada especial.
Desde que mudei de emprego, tenho andado mais feliz. | Desde que cambié de trabajo, estoy más feliz.`,
    er: `Já tenho estado em Lisboa | Já estive em Lisboa | experiencia única: perfeito simples
Esta manhã tenho tomado café | Esta manhã tomei café | acción única`
  },
  "a2-pronomes-complemento": {
    mas: `<p><b>Lhe para usted:</b> <i>lhe</i> sirve para «le» y para «a usted»: <i>Posso ajudá-lo?</i> (¿Puedo ayudarle? — a un señor) · <i>Posso ajudá-la?</i> (a una señora).</p>
<p><b>Con preposición, formas tónicas:</b> <i>para mim, contigo, sem ele, connosco, convosco</i>.</p>
<p><b>Acento al perder la -r:</b> -ar → <i>-á-lo</i> (comprá-lo), -er → <i>-ê-lo</i> (fazê-lo, vê-lo), -ir → <i>-i-lo</i> (abri-lo, sem tilde).</p>`,
    ex: `Conheces a Rita? — Conheço-a muito bem. | ¿Conoces a Rita? — La conozco muy bien.
Onde está o livro? Não o encontro. | ¿Dónde está el libro? No lo encuentro.
Vou fazê-lo amanhã. | Lo voy a hacer mañana.
Ofereci-lhe flores. | Le regalé flores.
Este presente é para ti. Comprei-to em Lisboa. | Este regalo es para ti. Te lo compré en Lisboa.
Vens comigo ou com eles? | ¿Vienes conmigo o con ellos?`,
    er: `Comprei-o-lhe | Comprei-lho | lhe + o = lho
Vou fazer-o | Vou fazê-lo | -r + o → -lo
Para eu | Para mim | tras preposición: mim
Com nós | Connosco | forma especial`
  },
  "a2-colocacao-pronomes": {
    mas: `<p><b>Resumen visual:</b></p>
<table><tr><th>Situación</th><th>Posición</th><th>Ejemplo</th></tr>
<tr><td>Frase afirmativa simple</td><td>verbo-pronombre</td><td>Vejo-te amanhã.</td></tr>
<tr><td>Negación</td><td>pronombre verbo</td><td>Não te vejo.</td></tr>
<tr><td>Pregunta con interrogativo</td><td>pronombre verbo</td><td>Quando te vejo?</td></tr>
<tr><td>Pregunta sí/no</td><td>verbo-pronombre</td><td>Vês-me?</td></tr>
<tr><td>Subordinada (que, quando, se…)</td><td>pronombre verbo</td><td>Acho que te vejo.</td></tr>
<tr><td>Adverbio atractor (já, só, também…)</td><td>pronombre verbo</td><td>Também te vejo.</td></tr>
<tr><td>Infinitivo con preposición</td><td>pegado al infinitivo</td><td>Vim para te ver / ver-te.</td></tr></table>
<p class="peq">Con <i>para, de, sem</i> + infinitivo ambas posiciones son correctas.</p>`,
    ex: `Lembras-te de mim? | ¿Te acuerdas de mí?
Não me lembro do nome dele. | No me acuerdo de su nombre.
Diz-me a verdade. | Dime la verdad.
Espero que te sintas melhor. | Espero que te sientas mejor.
Só nos vemos ao fim de semana. | Solo nos vemos el fin de semana.
Ninguém me disse nada. | Nadie me dijo nada.`,
    er: `Me chamo Ana | Chamo-me Ana | afirmativa: detrás
Não lembro-me | Não me lembro | negación: delante
Já disse-te | Já te disse | «já» atrae el pronombre`
  },
  "a2-imperativo": {
    mas: `<p><b>Usos del imperativo:</b> instrucciones (recetas, indicaciones), consejos, invitaciones (<i>Entre! Sente-se!</i>) y órdenes.</p>
<p><b>En recetas</b> se usa mucho el infinitivo o el «você»: <i>Descascar as batatas</i> / <i>Descasque as batatas</i>.</p>
<p><b>Fórmulas fijas:</b> <i>Faça favor!</i> (¡Pase! / ¡Adelante!), <i>Olhe…</i> (Mire…), <i>Diga!</i> (¡Dígame!), <i>Vá lá!</i> (¡Venga!).</p>`,
    ex: `Abra a janela, por favor. | Abra la ventana, por favor.
Não te esqueças das chaves! | ¡No te olvides de las llaves!
Siga em frente e vire na segunda à direita. | Siga recto y gire en la segunda a la derecha.
Tenham calma! | ¡Tened calma!
Faça favor de se sentar. | Siéntese, por favor.
Não fumem aqui. | No fuméis aquí.`,
    er: `Não fala alto! | Não fales alto! | el negativo usa el subjuntivo
Diz-me (você) | Diga-me | «você» → forma de subjuntivo
Senta-se! (a un amigo) | Senta-te! | «tu» → te`
  },
  "a2-reflexivos": {
    mas: `<p><b>Recíproco:</b> <i>Eles conhecem-se há anos</i> (se conocen). <i>Vemo-nos amanhã</i> (nos vemos).</p>
<p><b>Verbos pronominales en ES pero no en PT:</b> <i>acordar</i> (despertarse), <i>ir embora</i> (irse), <i>adormecer</i> (dormirse), <i>casar</i> (casarse), <i>calar</i> (callarse, aunque <i>calar-se</i> también existe).</p>
<p><b>Verbos pronominales en PT pero no en ES:</b> <i>rir-se</i> (reír), <i>sorrir</i> (sonreír, sin pronombre).</p>`,
    ex: `Como se chama o teu professor? | ¿Cómo se llama tu profesor?
Esqueci-me do guarda-chuva no café. | Se me olvidó el paraguas en el café.
Não te preocupes, eu trato disso. | No te preocupes, yo me encargo.
Divertimo-nos muito na festa. | Nos divertimos mucho en la fiesta.
Vamos embora, já é tarde. | Vámonos, ya es tarde.`,
    er: `Me esqueci | Esqueci-me | pronombre detrás
Levantamos-nos | Levantamo-nos | se pierde la -s`
  },
  "a2-comparativos": {
    mas: `<p><b>«Que» o «do que»:</b> ambas formas son correctas; <i>do que</i> es la más frecuente en Portugal.</p>
<p><b>Superlativo con -íssimo:</b> <i>lindo → lindíssimo, caro → caríssimo, amável → amabilíssimo, feliz → felicíssimo</i>.</p>
<p><b>Expresiones:</b> <i>cada vez mais</i> (cada vez más), <i>quanto mais… mais…</i> (cuanto más… más…), <i>o mais depressa possível</i> (lo antes posible).</p>`,
    ex: `O Porto é mais pequeno do que Lisboa. | Oporto es más pequeño que Lisboa.
Esta é a praia mais bonita do Algarve. | Esta es la playa más bonita del Algarve.
O meu irmão é tão alto como eu. | Mi hermano es tan alto como yo.
O exame foi facílimo! | ¡El examen fue facilísimo!
Cada vez há mais turistas em Lisboa. | Cada vez hay más turistas en Lisboa.
Quanto mais estudo, mais aprendo. | Cuanto más estudio, más aprendo.`,
    er: `Mais bom | Melhor | comparativo irregular
Tão alto que eu | Tão alto como eu | igualdad: como/quanto
O mais melhor | O melhor | ya es superlativo`
  },
  "a2-futuro-condicional": {
    mas: `<p><b>Futuro de probabilidad:</b> <i>Serão umas três horas</i> (serán las tres). <b>Condicional de probabilidad en el pasado:</b> <i>Teria uns vinte anos</i> (tendría unos veinte años).</p>
<p><b>Condicional para consejos:</b> <i>Eu, no teu lugar, falaria com ele.</i></p>
<p><b>Con pronombres:</b> mesóclise (<i>dir-lhe-ei</i>) en registro formal; en el habla: <i>vou dizer-lhe</i>.</p>`,
    ex: `Amanhã estará bom tempo em todo o país. | Mañana hará buen tiempo en todo el país.
Gostaria de saber o preço. | Me gustaría saber el precio.
Seria possível mudar a data? | ¿Sería posible cambiar la fecha?
No teu lugar, não diria nada. | En tu lugar, no diría nada.
Quem será aquele homem? | ¿Quién será aquel hombre?`,
    er: `Haceré → Fazerei | Farei | futuro irregular
Diré → Dizerei | Direi | futuro irregular`
  },
  "a2-por-para": {
    mas: `<p><b>Expresiones con por:</b> <i>por acaso</i> (por casualidad), <i>por exemplo, por isso, por enquanto</i> (de momento), <i>por favor, pelo menos</i> (al menos), <i>por fim</i>.</p>
<p><b>Expresiones con para:</b> <i>para sempre, para já</i> (de momento), <i>para variar</i>.</p>
<p><b>Estar por / estar para:</b> <i>A casa está por limpar</i> (aún sin limpiar) / <i>Estou para sair</i> (estoy a punto de salir).</p>`,
    ex: `Obrigado por tudo! | ¡Gracias por todo!
Saí cedo para apanhar o comboio. | Salí temprano para coger el tren.
Viajámos pela costa alentejana. | Viajamos por la costa alentejana.
Para mim, um galão, se faz favor. | Para mí, un galão, por favor.
Por enquanto está tudo bem. | De momento está todo bien.
Pelo menos não choveu. | Al menos no llovió.`,
    er: `Por a manhã | Pela manhã | por + a = pela
Obrigado para a ajuda | Obrigado pela ajuda | agradecer: por
Estudo por aprender | Estudo para aprender | finalidad: para`
  },
  "a2-indefinidos": {
    mas: `<p><b>Algum detrás del sustantivo = ninguno:</b> <i>Não tenho dinheiro algum</i> = no tengo ningún dinero (énfasis).</p>
<p><b>Qualquer coisa / qualquer pessoa:</b> cualquier cosa / cualquier persona.</p>
<p><b>Outro sin «un»:</b> <i>Quero outro café</i> (quiero otro café).</p>`,
    ex: `Tens alguma dúvida? | ¿Tienes alguna duda?
Não há nenhum problema. | No hay ningún problema.
Toda a gente gosta de pastéis de nata. | A todo el mundo le gustan los pasteles de nata.
Trabalho todos os dias menos ao domingo. | Trabajo todos los días menos el domingo.
Podes vir a qualquer hora. | Puedes venir a cualquier hora.
Alguém viu as minhas chaves? | ¿Alguien ha visto mis llaves?`,
    er: `Todo está bem | Está tudo bem | «todo» neutro = tudo
Todo o mundo | Toda a gente | expresión portuguesa
Um otro café | Outro café | sin «um» normalmente`
  },
  "a2-perifrases": {
    mas: `<p><b>Ir + gerundio:</b> en Portugal se usa para progresión gradual: <i>Vai melhorando</i> (va mejorando). Pero lo normal es <i>ir + infinitivo</i> para futuro.</p>
<p><b>Ficar a + infinitivo:</b> quedarse haciendo algo: <i>Fiquei a ver televisão.</i></p>
<p><b>Chegar a + infinitivo:</b> llegar a hacer algo: <i>Cheguei a pensar que não vinhas.</i></p>`,
    ex: `Acabei de jantar. | Acabo de cenar.
Deixei de comer doces. | Dejé de comer dulces.
Costumamos ir à praia ao domingo. | Solemos ir a la playa los domingos.
Voltei a ver o meu antigo professor. | Volví a ver a mi antiguo profesor.
Fiquei a conversar com eles até tarde. | Me quedé hablando con ellos hasta tarde.
Deves descansar mais. | Deberías descansar más.`,
    er: `Acabo de chegar | Acabei de chegar | en PT va en pasado
Suelo → Solo jantar | Costumo jantar | «soler» = costumar`
  },
  "a2-conectores": {
    mas: `<p><b>Organizar un texto (A2–B1):</b> introducción (<i>Em primeiro lugar…</i>), desarrollo (<i>Além disso…, Por outro lado…</i>), conclusión (<i>Em conclusão…, Em suma…, Por fim…</i>).</p>
<p><b>Apesar de + infinitivo / sustantivo:</b> <i>Apesar de estar cansado, fui.</i> <i>Apesar do frio, saímos.</i></p>`,
    ex: `Gosto do meu trabalho, mas o ordenado é baixo. | Me gusta mi trabajo, pero el sueldo es bajo.
Como estava a chover, ficámos em casa. | Como estaba lloviendo, nos quedamos en casa.
Apesar do frio, fomos passear. | A pesar del frío, fuimos a pasear.
Primeiro lavas os legumes, depois cortas. | Primero lavas las verduras, después las cortas.
Estudei muito; portanto, espero passar. | Estudié mucho; por tanto, espero aprobar.`,
    er: `Todavia (= todavía) | Ainda | todavia = sin embargo
Apesar de que está frio | Apesar de estar frio / Embora esteja frio | estructura portuguesa`
  },
  "a2-viagens": {
    mas: `<p><b>En el aeropuerto:</b> <i>fazer o check-in, despachar a mala</i> (facturar), <i>a bagagem de mão</i>, <i>o controlo de segurança</i>, <i>o voo está atrasado / foi cancelado</i>.</p>
<p><b>En el hotel:</b> <i>Tem quartos livres? Está incluído o pequeno-almoço? A que horas é o check-out?</i></p>`,
    ex: `Queria despachar esta mala. | Querría facturar esta maleta.
O voo para Lisboa está atrasado meia hora. | El vuelo a Lisboa lleva media hora de retraso.
Tem um quarto duplo com vista para o mar? | ¿Tiene una habitación doble con vistas al mar?
Fiquei num alojamento local em Lagos. | Me alojé en un apartamento turístico en Lagos.
Adorámos a viagem aos Açores. | Nos encantó el viaje a las Azores.`,
    er: `Facturar a mala | Despachar a mala | verbo portugués
Quarto de matrimónio | Quarto de casal | expresión portuguesa`
  },
  "a2-compras": {
    mas: `<p><b>NIF / contribuinte:</b> en Portugal te preguntan <i>Quer contribuinte?</i> (¿quiere poner el NIF en la factura?).</p>
<p><b>Devoluciones:</b> <i>Posso trocar? Tem o talão? Só fazemos vale</i> (solo damos vale de compra).</p>
<p><b>Expresiones:</b> <i>Está em promoção. Leve 3, pague 2. Está esgotado</i> (agotado).</p>`,
    ex: `Queria meio quilo de queijo, se faz favor. | Querría medio kilo de queso, por favor.
Posso pagar com MB WAY? | ¿Puedo pagar con MB WAY?
Este casaco está em saldo? | ¿Este abrigo está rebajado?
Queria trocar estas calças, são pequenas. | Querría cambiar estos pantalones, son pequeños.
Fica com o troco. | Quédese con la vuelta.`,
    er: `Sacar dinheiro | Levantar dinheiro | expresión portuguesa
O cajeiro | O multibanco | cajero automático en PT`
  },
  "a2-saude": {
    mas: `<p><b>SNS:</b> el Serviço Nacional de Saúde. Se pide cita en el <i>centro de saúde</i>; para urgencias leves, línea <i>SNS 24</i>.</p>
<p><b>Posología:</b> <i>de oito em oito horas</i> (cada ocho horas), <i>em jejum</i> (en ayunas), <i>depois das refeições</i>, <i>três vezes ao dia</i>.</p>`,
    ex: `Queria marcar uma consulta com o médico de família. | Querría pedir cita con el médico de cabecera.
Tome este xarope três vezes ao dia. | Tome este jarabe tres veces al día.
Torci o pé a correr. | Me torcí el pie corriendo.
Sou alérgico à penicilina. | Soy alérgico a la penicilina.
Sinto-me tonto e enjoado. | Me siento mareado y con náuseas.`,
    er: `Pedir cita | Marcar uma consulta | expresión portuguesa
A tirita | O penso | en PT europeo`
  },
  "a2-trabalho": {
    mas: `<p><b>Buscar trabajo:</b> <i>procurar emprego, enviar o currículo, candidatar-se a uma vaga</i> (solicitar un puesto), <i>ter experiência em</i>.</p>
<p><b>Condiciones:</b> <i>contrato a termo / sem termo</i> (temporal / indefinido), <i>recibos verdes</i> (autónomo), <i>o subsídio de férias</i> (paga extra de vacaciones).</p>`,
    ex: `Candidatei-me a uma vaga de rececionista. | Me presenté a un puesto de recepcionista.
Trabalho a tempo inteiro num banco. | Trabajo a tiempo completo en un banco.
Tenho uma reunião com a minha chefe às dez. | Tengo una reunión con mi jefa a las diez.
Ela chumbou a matemática. | Suspendió matemáticas.
Estou no segundo ano do curso de Direito. | Estoy en segundo de Derecho.`,
    er: `Suspendi o exame | Chumbei no exame | suspender = chumbar
A carreira (universitaria) | O curso | carrera = curso`
  },
  "a2-lazer": {
    mas: `<p><b>Invitar y proponer:</b> <i>E se fôssemos…? Apetece-te…? Que tal irmos…?</i></p>
<p><b>Apetecer:</b> = apetecer/tener ganas, como en español: <i>Apetece-me um gelado.</i></p>
<p><b>Expresar gusto:</b> <i>Adoro, gosto imenso, não me importo, detesto, não suporto</i>.</p>`,
    ex: `Apetece-te ir ao cinema logo à noite? | ¿Te apetece ir al cine esta noche?
Ao fim de semana gosto de fazer caminhadas na serra. | El fin de semana me gusta hacer senderismo en la sierra.
Jogo ténis com uma amiga às terças. | Juego al tenis con una amiga los martes.
O concerto foi fixe! | ¡El concierto fue genial!
Não suporto filmes de terror. | No soporto las películas de terror.`,
    er: `Jogar a guitarra | Tocar guitarra | instrumentos: tocar`
  },
  "a2-tecnologia": {
    mas: `<p><b>Mensajes:</b> <i>mandar mensagem, ligar, fazer uma videochamada, estar sem rede</i> (sin cobertura), <i>ficar sem bateria</i>.</p>
<p><b>Internet:</b> <i>a palavra-passe, o utilizador</i> (usuario), <i>iniciar sessão, terminar sessão, carregar</i> (pulsar y también recargar el móvil).</p>`,
    ex: `Liga-me quando chegares. | Llámame cuando llegues.
Fiquei sem bateria no telemóvel. | Me quedé sin batería en el móvil.
Esqueci-me da palavra-passe. | Se me olvidó la contraseña.
Carrega no botão e espera. | Pulsa el botón y espera.
Partilhei as fotos no grupo. | Compartí las fotos en el grupo.`,
    er: `O celular | O telemóvel | en Portugal
A senha (PT: código) | A palavra-passe | contraseña en PT`
  },
  "a2-falsos-amigos": {
    mas: `<p><b>Más falsos amigos útiles:</b> <i>a apólice</i> (la póliza), <i>o escritório</i> (la oficina), <i>a borracha</i> (la goma), <i>o ninho</i> (el nido), <i>a raça</i> (la raza), <i>o sobrenome</i> (BR: apellido), <i>o balcão</i> (el mostrador; balcón = varanda), <i>a pastelaria</i> (también cafetería), <i>a firma</i> (la empresa), <i>cair</i> (caer) vs <i>calhar</i> (tocar en suerte).</p>`,
    ex: `Que esquisito, a porta está aberta. | Qué raro, la puerta está abierta.
Fiquei embaraçada com a pergunta. | Me quedé cortada con la pregunta.
Empresta-me a tua borracha? | ¿Me prestas tu goma?
O escritório fica no quinto andar. | La oficina está en el quinto piso.
Pega no casaco, vamos sair. | Coge la chaqueta, vamos a salir.`,
    er: `Estou embaraçada (embarazada) | Estou grávida | embaraçada = avergonzada
Esta comida está esquisita (exquisita) | Esta comida está deliciosa | esquisito = raro`
  },
  "a2-pe-pb": {
    mas: `<p><b>Pronunciación:</b> el portugués de Brasil abre las vocales átonas y pronuncia <i>-de/-te</i> como «yi/chi» (<i>cidade</i> [siˈdadʒi]); el europeo las reduce mucho ([siˈðað]).</p>
<p><b>Para el examen de la EOI:</b> usa siempre la norma europea (tu, estar a, ênclise, vocabulario de Portugal). Entender el brasileño es útil, pero no lo escribas.</p>`,
    ex: `PT: Estou a ver a novela. · BR: Estou vendo a novela. | Estoy viendo la telenovela.
PT: Dá-me o telemóvel. · BR: Me dá o celular. | Dame el móvil.
PT: Apanhei o comboio. · BR: Peguei o trem. | Cogí el tren.`
  },
  "a2-expressoes": {
    mas: `<p><b>Más expresiones frecuentes:</b> <i>não há crise</i> (no pasa nada), <i>é canja</i> (está chupado), <i>andar à nora</i> (estar perdido), <i>pôr-se a andar</i> (largarse), <i>dar uma mãozinha</i> (echar una mano), <i>ir com os porcos</i> (irse al garete), <i>ser um pão sem sal</i> (ser un soso).</p>`,
    ex: `Isso é canja! | ¡Eso está chupado!
Podes dar-me uma mãozinha? | ¿Me echas una mano?
Se calhar chove amanhã. | A lo mejor llueve mañana.
Meti água na entrevista. | Metí la pata en la entrevista.
Tanto faz, escolhe tu. | Da igual, elige tú.`
  },
  "a2-narrar": {
    mas: `<p><b>Marcadores para ordenar el relato:</b> <i>No início…, Logo a seguir…, Entretanto…</i> (mientras tanto), <i>Pouco depois…, Afinal…</i> (al final resultó que), <i>No fim…</i></p>
<p><b>Reacciones del oyente:</b> <i>A sério? E depois? Não acredito! Que sorte! Que azar!</i></p>`,
    ex: `No início foi difícil, mas depois habituei-me. | Al principio fue difícil, pero después me acostumbré.
Entretanto começou a chover. | Mientras tanto empezó a llover.
Afinal o restaurante estava fechado. | Al final resultó que el restaurante estaba cerrado.
Já estiveste em Sintra? — Já, fui lá no verão. | ¿Has estado en Sintra? — Sí, fui en verano.`
  },
  "a2-email": {
    mas: `<p><b>Estructura del correo en el examen A2 (60-80 palabras):</b> saludo → motivo → 2-3 ideas desarrolladas → petición o propuesta → despedida. Cuida los conectores y el tratamiento (tu / formal).</p>
<p><b>Frases útiles:</b> <i>Obrigada pela tua mensagem. Fiquei muito contente com a notícia. Infelizmente, não vou poder… Espero ver-te em breve. Diz alguma coisa!</i></p>`,
    ex: `Obrigada pelo teu e-mail! | ¡Gracias por tu correo!
Infelizmente não vou poder ir ao teu casamento. | Por desgracia no voy a poder ir a tu boda.
Gostaria de saber mais informações sobre o curso. | Me gustaría saber más información sobre el curso.
Fico a aguardar a sua resposta. | Quedo a la espera de su respuesta.`
  },
  "a2-gestoes": {
    mas: `<p><b>Pedir aclaraciones:</b> <i>Como? Pode repetir? Pode falar mais devagar? O que quer dizer…?</i></p>
<p><b>Reclamar con cortesía:</b> <i>Lamento, mas…, Gostaria de fazer uma reclamação, Não é isto que pedi, Exijo falar com o responsável</i> (registro fuerte).</p>`,
    ex: `Pode dizer-me a que horas fecha? | ¿Me puede decir a qué hora cierra?
É preciso marcar com antecedência? | ¿Hay que reservar con antelación?
Desculpe, mas não foi isto que pedi. | Perdone, pero esto no es lo que pedí.
Queria falar com o gerente, se faz favor. | Querría hablar con el encargado, por favor.`
  }
  ,
  /* ═════════════ B1 ═════════════ */
  "b1-conj-presente": {
    ex: `Espero que tenhas um bom dia. | Espero que tengas un buen día.
É importante que venham todos. | Es importante que vengan todos.
Não creio que ele saiba a verdade. | No creo que él sepa la verdad.
Talvez vamos ao Porto amanhã. | Quizá vayamos a Oporto mañana.
Quero que me digas o que se passa. | Quiero que me digas qué pasa.`,
    er: `Espero que estás bem | Espero que estejas bem | «esperar que» + conjuntivo
Talvez vou | Talvez vá | «talvez» delante del verbo + conjuntivo
Que tu fices (ficar) | Que tu fiques | -car → -que`
  },
  "b1-conj-usos": {
    ex: `Duvido que consigas acabar hoje. | Dudo que consigas acabar hoy.
Embora esteja a chover, vamos sair. | Aunque esté lloviendo, vamos a salir.
Procuro alguém que fale alemão. | Busco a alguien que hable alemán.
Caso não possas vir, avisa-me. | En caso de que no puedas venir, avísame.
Oxalá não chova no casamento! | ¡Ojalá no llueva en la boda!`,
    er: `Acho que seja difícil | Acho que é difícil | opinión afirmativa: indicativo
Não acho que é difícil | Não acho que seja difícil | opinión negativa: conjuntivo
Embora está cansado | Embora esteja cansado | embora + conjuntivo`
  },
  "b1-conj-imperfeito": {
    ex: `Se eu ganhasse a lotaria, viajava pelo mundo. | Si ganara la lotería, viajaría por el mundo.
Pedi-lhe que me ajudasse. | Le pedí que me ayudara.
Ele fala como se fosse o chefe. | Habla como si fuera el jefe.
Quem me dera que estivesses aqui! | ¡Ojalá estuvieras aquí!
Era importante que chegássemos a horas. | Era importante que llegáramos a tiempo.`,
    er: `Se eu tinha dinheiro, comprava | Se eu tivesse dinheiro, comprava | condición irreal: conjuntivo
Se eu tivera tempo | Se eu tivesse tempo | -ra no es subjuntivo en PT
Pediu que venha | Pediu que viesse | concordancia de tiempos`
  },
  "b1-conj-futuro": {
    ex: `Quando acabares o trabalho, liga-me. | Cuando termines el trabajo, llámame.
Se puderes, traz pão. | Si puedes, trae pan.
Assim que souber o resultado, aviso-te. | En cuanto sepa el resultado, te aviso.
Faz como quiseres. | Hazlo como quieras.
Quem quiser pode vir connosco. | Quien quiera puede venir con nosotros.
Enquanto estiveres doente, não vás trabalhar. | Mientras estés enfermo, no vayas a trabajar.`,
    er: `Quando chegues | Quando chegares | futuro do conjuntivo
Se tenho tempo, vou (futuro) | Se tiver tempo, vou | condición futura
Quando eu ter tempo | Quando eu tiver tempo | ter es irregular`
  },
  "b1-infinitivo-pessoal": {
    ex: `É melhor saíres já. | Es mejor que salgas ya.
Comprei bilhetes para irmos ao teatro. | Compré entradas para que vayamos al teatro.
Depois de jantarem, foram passear. | Después de cenar, se fueron a pasear.
Obrigada por me terem ajudado. | Gracias por haberme ayudado.
Ao entrarmos, vimos o Rui. | Al entrar, vimos a Rui.`,
    er: `Para que tu saberes | Para saberes / Para que saibas | o infinitivo o conjuntivo
Queremos irmos | Queremos ir | tras querer/poder no se flexiona`
  },
  "b1-mais-que-perfeito": {
    ex: `Quando liguei, ela já tinha saído. | Cuando llamé, ella ya había salido.
Nunca tinha visto o mar antes. | Nunca había visto el mar antes.
Disse-me que tinha perdido o emprego. | Me dijo que había perdido el trabajo.
Já tínhamos jantado quando eles chegaram. | Ya habíamos cenado cuando llegaron.`,
    er: `Quando cheguei, o comboio partiu (antes) | … o comboio já tinha partido | anterioridad: mais-que-perfeito
Tinha dito-lhe | Tinha-lhe dito | pronombre con el auxiliar`
  },
  "b1-condicionais": {
    ex: `Se tiveres fome, há sopa no frigorífico. | Si tienes hambre, hay sopa en la nevera.
Se eu fosse a ti, não dizia nada. | Yo que tú, no diría nada.
Se tivesses estudado, tinhas passado. | Si hubieras estudiado, habrías aprobado.
Caso haja greve, trabalhamos em casa. | Si hay huelga, trabajamos desde casa.
A não ser que chova, vamos à praia. | A menos que llueva, vamos a la playa.`,
    er: `Si yo tendría → Se eu teria | Se eu tivesse | nunca condicional tras «se»
Se tivesse sabido, vinha (pasado) | … tinha vindo / teria vindo | resultado en pasado`
  },
  "b1-passiva": {
    ex: `A Torre de Belém foi construída no século XVI. | La Torre de Belém fue construida en el siglo XVI.
O suspeito foi preso ontem. | El sospechoso fue detenido ayer.
A encomenda já foi entregue. | El pedido ya ha sido entregado.
Arrendam-se apartamentos. | Se alquilan apartamentos.
O museu está fechado às segundas. | El museo está cerrado los lunes.`,
    er: `Vende-se casas | Vendem-se casas | concordancia con el sujeto
Foi entregado | Foi entregue | con ser: participio corto`
  },
  "b1-discurso-indireto": {
    ex: `«Estou cansada.» → Ela disse que estava cansada. | Dijo que estaba cansada.
«Vou ligar-te amanhã.» → Disse que me ia ligar no dia seguinte. | Dijo que me llamaría al día siguiente.
«Fizeste os trabalhos?» → Perguntou-me se tinha feito os trabalhos. | Me preguntó si había hecho los deberes.
«Não te atrases!» → Pediu-me que não me atrasasse. | Me pidió que no me retrasara.`,
    er: `Perguntou que se eu gostava | Perguntou se eu gostava | sin «que»
Disse que amanhã vinha (contado días después) | Disse que no dia seguinte ia | cambio de referencias`
  },
  "b1-relativos": {
    ex: `A cidade onde nasci é pequena. | La ciudad donde nací es pequeña.
O colega com quem trabalho é de Braga. | El compañero con quien trabajo es de Braga.
A senhora cujo filho é médico mora aqui. | La señora cuyo hijo es médico vive aquí.
Não percebi o que disseste. | No entendí lo que dijiste.
É a razão pela qual me mudei. | Es la razón por la que me mudé.`,
    er: `O livro que te falei | O livro de que te falei | preposición delante
A pessoa que falei com | A pessoa com quem falei | preposición + quem
Cuyo (concordando con el poseedor) | cuja filha | concuerda con lo poseído`
  },
  "b1-conectores": {
    ex: `Embora goste de Lisboa, prefiro viver no campo. | Aunque me gusta Lisboa, prefiero vivir en el campo.
Visto que não há bilhetes, vamos noutro dia. | Ya que no hay entradas, vamos otro día.
Não só fala inglês, mas também alemão. | No solo habla inglés, sino también alemán.
Saí mais cedo a fim de apanhar o comboio. | Salí antes para coger el tren.
Em suma, foi uma experiência positiva. | En resumen, fue una experiencia positiva.`,
    er: `Embora é caro | Embora seja caro | embora + conjuntivo
Para que tu sabes | Para que saibas | finalidad + conjuntivo`
  }
  };

  const tabla = (txt) => `<table class="ampl-ej">` + txt.trim().split("\n").map((l) => {
    const [a, b] = l.split("|").map((s) => s.trim());
    return `<tr><td lang="pt">${a}</td><td>${b || ""}</td></tr>`;
  }).join("") + `</table>`;
  const errores = (txt) => `<table class="ampl-er"><tr><th>❌ Incorrecto</th><th>✅ Correcto</th><th>Por qué</th></tr>` + txt.trim().split("\n").map((l) => {
    const [a, b, c] = l.split("|").map((s) => s.trim());
    return `<tr><td><s>${a}</s></td><td><b>${b}</b></td><td class="peq">${c || ""}</td></tr>`;
  }).join("") + `</table>`;

  const NUEVOS = {
    A1: { bloque: "gramatica", tema: { id: "a1-quantificadores", titulo: "Cuantificadores: muito, pouco, bastante, demasiado", html: `
<p>Funcionan como en español: con sustantivos concuerdan en género y número; con adjetivos, verbos y adverbios son invariables.</p>
<table><tr><th></th><th>Con sustantivo (variable)</th><th>Con adjetivo / verbo (invariable)</th></tr>
<tr><td>muito</td><td>muito tempo, muita gente, muitos amigos, muitas vezes</td><td>muito bom · trabalho muito</td></tr>
<tr><td>pouco</td><td>pouco dinheiro, poucas pessoas</td><td>pouco caro · durmo pouco</td></tr>
<tr><td>bastante</td><td>bastante trabalho, bastantes livros</td><td>bastante longe · estudas bastante</td></tr>
<tr><td>demasiado</td><td>demasiado açúcar, demasiadas coisas</td><td>demasiado cedo · comes demasiado</td></tr>
<tr><td>tanto</td><td>tanto frio, tantas perguntas</td><td>(tão bonito) · falas tanto!</td></tr></table>
<ul><li><b>Um pouco de</b> = un poco de: <i>Queria um pouco de água.</i></li>
<li><b>Imenso</b> (coloquial PT) = muchísimo: <i>Gostei imenso!</i> · <i>Há imensa gente.</i></li>
<li><b>Mais / menos</b> son invariables: <i>mais pessoas, menos água</i>.</li></ul>
<div class="ojo"><b>Ojo:</b> delante de adjetivo se usa <b>tão</b>, no <i>tanto</i>: <i>É tão simpático!</i></div>` } },
    A2: { bloque: "gramatica", tema: { id: "a2-adverbios", titulo: "Adverbios de modo, tiempo y lugar", html: `
<h4>Adverbios en -mente</h4>
<p>Se forman sobre el femenino del adjetivo: <i>rápido → rapidamente, lento → lentamente, fácil → facilmente, feliz → felizmente</i>. Al perder el acento del adjetivo, se escriben sin tilde: <i>rápida → rapidamente, prática → praticamente</i>.</p>
<p>Si hay dos seguidos, solo el último lleva <i>-mente</i>: <i>Falou clara e calmamente.</i></p>
<h4>Adverbios de tiempo</h4>
<p>agora, já, logo (luego), depois, antes, cedo (temprano), tarde, ainda, sempre, nunca, entretanto (mientras tanto), dantes (antes), hoje em dia (hoy en día), atualmente, finalmente.</p>
<h4>Adverbios de lugar</h4>
<p>aqui/cá, aí, ali/lá, perto, longe, dentro, fora, em cima, em baixo, à frente, atrás, algures (en algún sitio), nenhures (en ningún sitio).</p>
<h4>Adverbios de modo y cantidad</h4>
<p>bem, mal, depressa (deprisa), devagar (despacio), assim, melhor, pior, quase, só/apenas, sobretudo, mesmo (de verdad).</p>
<div class="ej">Fala mais devagar, por favor. · Chegámos cedo e saímos tarde. · Hoje em dia toda a gente tem telemóvel. · Ele fala português perfeitamente. · Está mesmo frio!</div>
<div class="ojo"><b>Falsos amigos:</b> <i>logo</i> = luego/después (y en «até logo») · <i>atualmente</i> = actualmente · <i>dantes</i> = antes, antiguamente · <i>mesmo</i> = de verdad / incluso / mismo.</div>` } }
  };
  Object.keys(NUEVOS).forEach((n) => {
    const niv = (window.APUNTES || {})[n]; if (!niv) return;
    const b = niv.bloques.find((x) => x.id === NUEVOS[n].bloque);
    if (b && !b.temas.some((t) => t.id === NUEVOS[n].tema.id)) b.temas.push(NUEVOS[n].tema);
  });

  window.AMPLIAR = function (temas) {
    Object.values(window.APUNTES || {}).forEach((niv) => niv.bloques.forEach((b) => b.temas.forEach((t) => {
      const x = X[t.id] || (temas && temas[t.id]);
      if (!x || t._ampliado) return;
      let h = `<div class="ampliacion">`;
      if (x.mas) h += `<h4>Para saber más</h4>${x.mas}`;
      if (x.ex) h += `<h4>Más ejemplos</h4>${tabla(x.ex)}`;
      if (x.er) h += `<h4>Errores frecuentes</h4>${errores(x.er)}`;
      h += `</div>`;
      t.html += h;
      t._ampliado = true;
    })));
  };
})();
