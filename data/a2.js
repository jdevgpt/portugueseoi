/* Apuntes de Portugués europeo – Nivel A2 (EOI) */
window.APUNTES = window.APUNTES || {};
window.APUNTES.A2 = {
  nivel: "A2",
  nombre: "Básico A2",
  descripcion: "Narrar en pasado, describir experiencias, dar instrucciones y resolver gestiones habituales (viajes, compras, salud, trabajo).",
  bloques: [
    /* ───────────────────────── GRAMÁTICA ───────────────────────── */
    {
      id: "gramatica", titulo: "Gramática",
      temas: [
        {
          id: "a2-pps-regulares", titulo: "Pretérito perfeito simples: verbos regulares",
          html: `
<p>Es el pasado de las <b>acciones terminadas</b>. Equivale al indefinido español (<i>hablé</i>) <u>y también</u> a la mayoría de usos del pretérito perfecto (<i>he hablado</i>).</p>
<table>
<tr><th></th><th>falar</th><th>comer</th><th>partir</th></tr>
<tr><td>eu</td><td>fal<b>ei</b></td><td>com<b>i</b></td><td>part<b>i</b></td></tr>
<tr><td>tu</td><td>fal<b>aste</b></td><td>com<b>este</b></td><td>part<b>iste</b></td></tr>
<tr><td>ele / você</td><td>fal<b>ou</b></td><td>com<b>eu</b></td><td>part<b>iu</b></td></tr>
<tr><td>nós</td><td>fal<b>ámos</b></td><td>com<b>emos</b></td><td>part<b>imos</b></td></tr>
<tr><td>eles / vocês</td><td>fal<b>aram</b></td><td>com<b>eram</b></td><td>part<b>iram</b></td></tr>
</table>
<div class="ojo"><b>Ojo:</b> en Portugal se distingue <i>nós falamos</i> (presente) de <i>nós fal<b>á</b>mos</i> (pasado) con tilde. En Brasil ambas se escriben <i>falamos</i>.</div>
<h4>Cambios ortográficos en «eu»</h4>
<p>-car → <b>-quei</b> (ficar → fiquei) · -gar → <b>-guei</b> (chegar → cheguei, pagar → paguei) · -çar → <b>-cei</b> (começar → comecei, almoçar → almocei)</p>
<h4>Marcadores</h4>
<p>ontem · anteontem · ontem à noite · na semana passada · no mês passado · no ano passado · há dois dias · em 2019 · hoje de manhã · já · ainda não</p>
<div class="ej"><b>Hoje comi</b> sardinhas. (Hoy he comido sardinas.)<br><b>Já viste</b> o filme? — <b>Ainda não</b> vi. (¿Ya has visto…? Todavía no la he visto.)</div>
`
        },
        {
          id: "a2-pps-irregulares", titulo: "Pretérito perfeito simples: verbos irregulares",
          html: `
<table class="compacta">
<tr><th>Infinitivo</th><th>eu</th><th>tu</th><th>ele/você</th><th>nós</th><th>eles/vocês</th></tr>
<tr><td><b>ser / ir</b></td><td>fui</td><td>foste</td><td>foi</td><td>fomos</td><td>foram</td></tr>
<tr><td><b>estar</b></td><td>estive</td><td>estiveste</td><td>esteve</td><td>estivemos</td><td>estiveram</td></tr>
<tr><td><b>ter</b></td><td>tive</td><td>tiveste</td><td>teve</td><td>tivemos</td><td>tiveram</td></tr>
<tr><td><b>fazer</b></td><td>fiz</td><td>fizeste</td><td>fez</td><td>fizemos</td><td>fizeram</td></tr>
<tr><td><b>dizer</b></td><td>disse</td><td>disseste</td><td>disse</td><td>dissemos</td><td>disseram</td></tr>
<tr><td><b>trazer</b></td><td>trouxe</td><td>trouxeste</td><td>trouxe</td><td>trouxemos</td><td>trouxeram</td></tr>
<tr><td><b>poder</b></td><td>pude</td><td>pudeste</td><td>pôde</td><td>pudemos</td><td>puderam</td></tr>
<tr><td><b>querer</b></td><td>quis</td><td>quiseste</td><td>quis</td><td>quisemos</td><td>quiseram</td></tr>
<tr><td><b>saber</b></td><td>soube</td><td>soubeste</td><td>soube</td><td>soubemos</td><td>souberam</td></tr>
<tr><td><b>vir</b></td><td>vim</td><td>vieste</td><td>veio</td><td>viemos</td><td>vieram</td></tr>
<tr><td><b>ver</b></td><td>vi</td><td>viste</td><td>viu</td><td>vimos</td><td>viram</td></tr>
<tr><td><b>pôr</b></td><td>pus</td><td>puseste</td><td>pôs</td><td>pusemos</td><td>puseram</td></tr>
<tr><td><b>dar</b></td><td>dei</td><td>deste</td><td>deu</td><td>demos</td><td>deram</td></tr>
<tr><td><b>haver</b></td><td colspan="5">houve (hubo)</td></tr>
</table>
<ul>
<li><b>Ser</b> e <b>ir</b> comparten formas, como en español: <i>Fui ao Porto</i> (ir) · <i>Foi um dia ótimo</i> (ser).</li>
<li>Diferencia una letra: <i>ele <b>pôde</b></i> (pasado) / <i>ele <b>pode</b></i> (presente) · <i>ele <b>pôs</b></i> / <i>por</i> (preposición).</li>
<li><b>Vir</b> y <b>ver</b>: <i>eu vim</i> (vine) / <i>eu vi</i> (vi) · <i>ele veio</i> (vino) / <i>ele viu</i> (vio).</li>
</ul>
`
        },
        {
          id: "a2-imperfeito", titulo: "Pretérito imperfeito",
          html: `
<table>
<tr><th></th><th>falar</th><th>comer</th><th>partir</th></tr>
<tr><td>eu</td><td>fal<b>ava</b></td><td>com<b>ia</b></td><td>part<b>ia</b></td></tr>
<tr><td>tu</td><td>fal<b>avas</b></td><td>com<b>ias</b></td><td>part<b>ias</b></td></tr>
<tr><td>ele / você</td><td>fal<b>ava</b></td><td>com<b>ia</b></td><td>part<b>ia</b></td></tr>
<tr><td>nós</td><td>fal<b>ávamos</b></td><td>com<b>íamos</b></td><td>part<b>íamos</b></td></tr>
<tr><td>eles / vocês</td><td>fal<b>avam</b></td><td>com<b>iam</b></td><td>part<b>iam</b></td></tr>
</table>
<h4>Solo 4 irregulares</h4>
<table>
<tr><td><b>ser</b></td><td>era, eras, era, éramos, eram</td></tr>
<tr><td><b>ter</b></td><td>tinha, tinhas, tinha, tínhamos, tinham</td></tr>
<tr><td><b>vir</b></td><td>vinha, vinhas, vinha, vínhamos, vinham</td></tr>
<tr><td><b>pôr</b></td><td>punha, punhas, punha, púnhamos, punham</td></tr>
</table>
<h4>Usos</h4>
<ul>
<li>Hábitos en el pasado: <i>Quando era criança, <b>passava</b> as férias na aldeia.</i></li>
<li>Descripciones en el pasado: <i>A casa <b>era</b> grande e <b>tinha</b> um jardim.</i></li>
<li>Acción en curso interrumpida: <i>Eu <b>estava a ler</b> quando o telefone tocou.</i></li>
<li><b>Cortesía</b> (muy frecuente en Portugal): <i><b>Queria</b> um café. <b>Podia</b> ajudar-me?</i></li>
<li>En la lengua hablada sustituye al condicional: <i>Se tivesse dinheiro, <b>comprava</b> uma casa.</i></li>
</ul>
<p class="peq">Marcadores: antigamente, dantes (antes), quando era pequeno, todos os anos, sempre, normalmente, naquele tempo.</p>
`
        },
        {
          id: "a2-perfeito-vs-imperfeito", titulo: "Perfeito vs. imperfeito: cómo narrar",
          html: `
<table>
<tr><th>Perfeito simples</th><th>Imperfeito</th></tr>
<tr><td>Acción puntual y terminada</td><td>Acción habitual o repetida</td></tr>
<tr><td>Hechos que hacen avanzar la historia</td><td>Descripción del contexto, personas, lugares</td></tr>
<tr><td>Acción que interrumpe</td><td>Acción interrumpida (en curso)</td></tr>
<tr><td><i>ontem, em 2010, de repente, um dia</i></td><td><i>sempre, todos os dias, antigamente, enquanto</i></td></tr>
</table>
<div class="ej"><b>Era</b> uma noite fria e <b>chovia</b> muito. Eu <b>estava</b> sozinha em casa e <b>via</b> televisão. De repente, alguém <b>bateu</b> à porta. <b>Levantei-me</b>, <b>abri</b> a porta e… <b>era</b> o meu irmão, que <b>chegou</b> do Brasil sem avisar!</div>
<div class="ojo"><b>Truco:</b> si en español usarías el imperfecto («llovía», «era»), en portugués también. Si usarías el indefinido o el pretérito perfecto («llamó», «he llamado»), en portugués va el <b>perfeito simples</b>.</div>
`
        },
        {
          id: "a2-perfeito-composto", titulo: "Pretérito perfeito composto (¡cuidado!)",
          html: `
<p>Se forma con <b>ter</b> (presente) + <b>participio</b>, pero <u>no equivale al pretérito perfecto español</u>.</p>
<p>Expresa una acción <b>repetida o continuada</b> que empezó en el pasado y llega hasta el presente (≈ «he estado + gerundio», «últimamente…»):</p>
<div class="ej"><b>Tenho trabalhado</b> muito ultimamente. (He estado trabajando mucho últimamente.)<br><b>Tem chovido</b> todos os dias. (Ha estado lloviendo todos los días.)<br>Não <b>te tenho visto</b> no ginásio. (No te he visto (últimamente) por el gimnasio.)</div>
<table>
<tr><th>Español</th><th>Portugués correcto</th><th>❌ Error típico</th></tr>
<tr><td>Hoy he comido pescado.</td><td>Hoje <b>comi</b> peixe.</td><td><s>Hoje tenho comido peixe.</s></td></tr>
<tr><td>¿Has estado alguna vez en Oporto?</td><td>Já <b>estiveste</b> no Porto?</td><td><s>Tens estado no Porto?</s></td></tr>
<tr><td>Últimamente he dormido mal.</td><td>Ultimamente <b>tenho dormido</b> mal.</td><td>—</td></tr>
</table>
<h4>Participios</h4>
<p>Regulares: <b>-ado</b> (falado), <b>-ido</b> (comido, partido).<br>
Irregulares: feito (fazer), dito (dizer), escrito (escrever), visto (ver), vindo (vir), posto (pôr), aberto (abrir), coberto (cobrir).<br>
Doble participio (el corto con <i>ser/estar</i>, el largo con <i>ter</i>): pago/pagado, ganho/ganhado, gasto/gastado, aceite/aceitado.</p>
`
        },
        {
          id: "a2-pronomes-complemento", titulo: "Pronombres de complemento directo e indirecto",
          html: `
<table>
<tr><th>Sujeto</th><th>C. directo</th><th>C. indirecto</th><th>Tras preposición</th></tr>
<tr><td>eu</td><td>me</td><td>me</td><td>mim (comigo)</td></tr>
<tr><td>tu</td><td>te</td><td>te</td><td>ti (contigo)</td></tr>
<tr><td>ele / ela / você</td><td>o / a</td><td>lhe</td><td>ele / ela / si (consigo)</td></tr>
<tr><td>nós</td><td>nos</td><td>nos</td><td>nós (connosco)</td></tr>
<tr><td>eles / elas / vocês</td><td>os / as</td><td>lhes</td><td>eles / elas (convosco)</td></tr>
</table>
<h4>Cambios de forma de o, a, os, as</h4>
<table>
<tr><th>Si el verbo termina en…</th><th>el pronombre pasa a…</th><th>Ejemplos</th></tr>
<tr><td>-r, -s, -z (que se pierden)</td><td>-lo, -la, -los, -las</td><td>comprar + o → <b>comprá-lo</b> · fazes + a → <b>faze-la</b> · fiz + o → <b>fi-lo</b></td></tr>
<tr><td>sonido nasal (-m, -ão, -õe)</td><td>-no, -na, -nos, -nas</td><td>compram + o → <b>compram-no</b> · dão + a → <b>dão-na</b> · põe + o → <b>põe-no</b></td></tr>
<tr><td>vocal / otro caso</td><td>sin cambio</td><td>compro + o → <b>compro-o</b> · vi + a → <b>vi-a</b></td></tr>
</table>
<h4>Combinación indirecto + directo</h4>
<p>me + o = <b>mo</b> · te + o = <b>to</b> · lhe(s) + o = <b>lho</b> · (y sus femeninos y plurales: ma, ta, lha, mos, tas, lhos…)</p>
<div class="ej">— Deste o livro à Ana? — Dei-<b>lho</b> ontem. (Se lo di ayer.)<br>— Emprestas-me a caneta? — Empresto-<b>ta</b> já.</div>
<p class="peq">En la lengua hablada estas contracciones se evitan a menudo omitiendo el directo: <i>— Deste-lhe o livro? — Dei.</i></p>
`
        },
        {
          id: "a2-colocacao-pronomes", titulo: "Colocación de los pronombres átonos",
          html: `
<p>Es uno de los rasgos más característicos del portugués europeo y un error muy común para hispanohablantes.</p>
<h4>1. Regla general: detrás del verbo (ênclise)</h4>
<p>En frases <b>afirmativas</b> el pronombre va <b>detrás</b> del verbo, unido con guion:</p>
<div class="ej">Chamo-<b>me</b> Laura. · Vejo-<b>te</b> amanhã. · Ele deu-<b>me</b> um presente. · Levanto-<b>me</b> cedo.</div>
<div class="ojo"><b>Ojo:</b> aunque la frase empiece con sujeto, el pronombre sigue yendo detrás: ✅ <i>Eu chamo-me Laura</i> ❌ <s>Eu me chamo Laura</s> (eso es brasileño).</div>
<h4>2. Delante del verbo (próclise), cuando hay un «atractor»</h4>
<ul>
<li><b>Negación</b>: não, nunca, ninguém, nada, nem → <i>Não <b>me</b> lembro. Nunca <b>o</b> vi.</i></li>
<li><b>Palabras interrogativas</b>: <i>Quem <b>te</b> disse? Como <b>se</b> chama?</i></li>
<li><b>Oraciones subordinadas</b> (que, se, quando, porque, como…): <i>Acho que <b>te</b> conheço. Quando <b>me</b> levanto, tomo café.</i></li>
<li><b>Ciertos adverbios</b> delante del verbo: já, também, ainda, só, sempre, talvez, bem, cá, lá → <i>Já <b>te</b> disse. Também <b>me</b> parece. Sempre <b>nos</b> encontramos aqui.</i></li>
<li><b>Indefinidos sujeto</b>: todos, alguém, tudo, ambos → <i>Todos <b>se</b> riram. Alguém <b>me</b> ligou.</i></li>
</ul>
<h4>3. Con perífrasis</h4>
<p>Pegado al infinitivo (o al auxiliar si hay atractor): <i>Vou ver-<b>te</b> amanhã. · Não <b>te</b> vou ver. · Quero conhecê-<b>la</b>.</i></p>
<h4>4. Con futuro y condicional (mesóclise)</h4>
<p>El pronombre se intercala: <i>dir-<b>te</b>-ei, far-<b>se</b>-ia</i>. Es formal y escrito; en la lengua hablada se evita con <i>ir + infinitivo</i>: <i>Vou dizer-te.</i></p>
`
        },
        {
          id: "a2-imperativo", titulo: "Imperativo",
          html: `
<h4>Imperativo afirmativo</h4>
<table>
<tr><th></th><th>falar</th><th>comer</th><th>abrir</th><th>Regla</th></tr>
<tr><td>tu</td><td>fala</td><td>come</td><td>abre</td><td>= 3.ª pers. del presente</td></tr>
<tr><td>você / o senhor</td><td>fale</td><td>coma</td><td>abra</td><td>raíz de «eu» + vocal cambiada</td></tr>
<tr><td>vocês</td><td>falem</td><td>comam</td><td>abram</td><td>ídem + m</td></tr>
</table>
<p class="peq">Para formar <i>você/vocês</i>: se toma la 1.ª persona del presente (<i>faç-o</i>) y se cambia la vocal: -ar → <b>-e</b>, -er/-ir → <b>-a</b>: <i>faça, diga, traga, peça, ouça, ponha, venha, tenha</i>.</p>
<h4>Imperativo negativo: todas las personas con la forma del subjuntivo</h4>
<div class="ej">Não <b>fales</b> tão alto! · Não <b>comas</b> isso. · Não <b>se preocupe</b>. · Não <b>façam</b> barulho.</div>
<h4>Irregulares</h4>
<table class="compacta">
<tr><th>Verbo</th><th>tu (afirm.)</th><th>você</th><th>vocês</th><th>tu (neg.)</th></tr>
<tr><td>ser</td><td>sê</td><td>seja</td><td>sejam</td><td>não sejas</td></tr>
<tr><td>estar</td><td>está</td><td>esteja</td><td>estejam</td><td>não estejas</td></tr>
<tr><td>ir</td><td>vai</td><td>vá</td><td>vão</td><td>não vás</td></tr>
<tr><td>dar</td><td>dá</td><td>dê</td><td>deem</td><td>não dês</td></tr>
<tr><td>saber</td><td>sabe</td><td>saiba</td><td>saibam</td><td>não saibas</td></tr>
<tr><td>querer</td><td>quer</td><td>queira</td><td>queiram</td><td>não queiras</td></tr>
<tr><td>fazer</td><td>faz</td><td>faça</td><td>façam</td><td>não faças</td></tr>
<tr><td>pôr</td><td>põe</td><td>ponha</td><td>ponham</td><td>não ponhas</td></tr>
<tr><td>vir</td><td>vem</td><td>venha</td><td>venham</td><td>não venhas</td></tr>
</table>
<p>Con pronombres: afirmativo → detrás (<i>Senta-te! Diga-me.</i>); negativo → delante (<i>Não te sentes. Não me diga!</i>).</p>
<p class="peq">Fórmulas para suavizar: <i>Podia/Pode… ?</i>, <i>Importa-se de…?</i>, <i>Faz favor de…</i>: <i>Importa-se de fechar a janela?</i></p>
`
        },
        {
          id: "a2-reflexivos", titulo: "Verbos pronominales y reflexivos",
          html: `
<table>
<tr><th></th><th>levantar-se (afirmativo)</th><th>negativo</th></tr>
<tr><td>eu</td><td>levanto-me</td><td>não me levanto</td></tr>
<tr><td>tu</td><td>levantas-te</td><td>não te levantas</td></tr>
<tr><td>ele / você</td><td>levanta-se</td><td>não se levanta</td></tr>
<tr><td>nós</td><td>levantamo-<b>nos</b> (pierde la -s)</td><td>não nos levantamos</td></tr>
<tr><td>eles / vocês</td><td>levantam-se</td><td>não se levantam</td></tr>
</table>
<p>Verbos frecuentes: chamar-se, levantar-se, deitar-se, vestir-se, sentar-se, lembrar-se (de), esquecer-se (de), preocupar-se (com), sentir-se, zangar-se, despedir-se, encontrar-se (com), divertir-se, queixar-se (de).</p>
<div class="ojo"><b>Diferencias con el español:</b> <i>lembrar-se de</i> (acordarse de) · <i>esquecer-se de</i> (olvidarse de) · <i>casar (com)</i> sin pronombre o <i>casar-se com</i> · <i>acordar</i> (despertarse) va sin pronombre · <i>ir embora</i> = irse.</div>
<p><b>Se impersonal/pasivo:</b> <i>Aqui fala-<b>se</b> português. Vendem-<b>se</b> casas. Não <b>se</b> pode fumar.</i></p>
`
        },
        {
          id: "a2-comparativos", titulo: "Comparativos y superlativos",
          html: `
<table>
<tr><th>Tipo</th><th>Estructura</th><th>Ejemplo</th></tr>
<tr><td>Superioridad</td><td>mais … (do) que</td><td>O Porto é mais pequeno do que Lisboa.</td></tr>
<tr><td>Inferioridad</td><td>menos … (do) que</td><td>Este carro é menos caro do que aquele.</td></tr>
<tr><td>Igualdad (adj./adv.)</td><td>tão … como / quanto</td><td>Ela é tão alta como o irmão.</td></tr>
<tr><td>Igualdad (sust.)</td><td>tanto/a/os/as … como</td><td>Tenho tantos livros como tu.</td></tr>
<tr><td>Igualdad (verbo)</td><td>… tanto como</td><td>Trabalho tanto como tu.</td></tr>
</table>
<h4>Comparativos irregulares</h4>
<p>bom → <b>melhor</b> · mau → <b>pior</b> · grande → <b>maior</b> · pequeno → <b>menor</b> / <b>mais pequeno</b> (muy usado en Portugal) · bem → melhor · mal → pior</p>
<h4>Superlativo</h4>
<ul>
<li>Relativo: <b>o/a mais … de</b>: <i>É o restaurante mais barato da cidade. É a melhor praia do Algarve.</i></li>
<li>Absoluto: <b>muito</b> + adj. o <b>-íssimo</b>: <i>muito caro = caríssimo · fácil → facílimo · difícil → dificílimo · bom → ótimo · mau → péssimo · rico → riquíssimo</i>.</li>
</ul>
`
        },
        {
          id: "a2-futuro-condicional", titulo: "Futuro y condicional simples",
          html: `
<table>
<tr><th></th><th>Futuro</th><th>Condicional</th></tr>
<tr><td>eu</td><td>falar<b>ei</b></td><td>falar<b>ia</b></td></tr>
<tr><td>tu</td><td>falar<b>ás</b></td><td>falar<b>ias</b></td></tr>
<tr><td>ele / você</td><td>falar<b>á</b></td><td>falar<b>ia</b></td></tr>
<tr><td>nós</td><td>falar<b>emos</b></td><td>falar<b>íamos</b></td></tr>
<tr><td>eles / vocês</td><td>falar<b>ão</b></td><td>falar<b>iam</b></td></tr>
</table>
<p>Solo tres irregulares (pierden <i>-ze-</i>): <b>fazer → farei / faria · dizer → direi / diria · trazer → trarei / traria</b>.</p>
<h4>Uso real</h4>
<ul>
<li>El <b>futuro simple</b> es más bien escrito o formal (previsiones, noticias, promesas): <i>Amanhã choverá no Norte.</i> En la conversación se usa <b>ir + infinitivo</b> o el presente.</li>
<li>El futuro expresa también probabilidad: <i>Onde estará o João?</i> (¿Dónde estará Juan?)</li>
<li>El <b>condicional</b> sirve para la cortesía y los deseos: <i><b>Gostaria</b> de reservar uma mesa. <b>Seria</b> possível…?</i> En la lengua hablada muchas veces se sustituye por el imperfecto: <i>Gostava de…</i></li>
</ul>
`
        },
        {
          id: "a2-por-para", titulo: "Por y para",
          html: `
<table>
<tr><th>POR (pelo, pela…)</th><th>PARA</th></tr>
<tr><td>Causa: <i>Obrigado <b>pela</b> ajuda.</i></td><td>Finalidad: <i>Estudo <b>para</b> aprender.</i></td></tr>
<tr><td>Lugar de paso: <i>Passámos <b>por</b> Coimbra.</i></td><td>Destino: <i>Vou <b>para</b> Lisboa.</i></td></tr>
<tr><td>Medio: <i>Mandei <b>por</b> e-mail.</i></td><td>Destinatario: <i>Este presente é <b>para</b> ti.</i></td></tr>
<tr><td>Precio / cambio: <i>Comprei-o <b>por</b> 20 euros.</i></td><td>Plazo: <i>O trabalho é <b>para</b> sexta.</i></td></tr>
<tr><td>Tiempo aproximado: <i><b>pela</b> manhã, <b>por</b> volta das 9h</i></td><td>Opinión: <i><b>Para</b> mim, é caro.</i></td></tr>
<tr><td>Agente de la pasiva: <i>escrito <b>por</b> Saramago</i></td><td>Comparación: <i>Está calor <b>para</b> novembro.</i></td></tr>
<tr><td>Frecuencia: <i>duas vezes <b>por</b> semana</i></td><td>Inminencia: <i>Está <b>para</b> chover.</i></td></tr>
</table>
<div class="ojo"><b>Ojo:</b> <i>por</i> se contrae con el artículo (<b>pelo, pela, pelos, pelas</b>); <i>para</i> no (en el habla se oye <i>pra</i>, pero no se escribe).</div>
`
        },
        {
          id: "a2-indefinidos", titulo: "Indefinidos",
          html: `
<table>
<tr><th>Afirmativos</th><th>Negativos</th></tr>
<tr><td>algum, alguma, alguns, algumas</td><td>nenhum, nenhuma</td></tr>
<tr><td>alguém (alguien)</td><td>ninguém (nadie)</td></tr>
<tr><td>algo / alguma coisa</td><td>nada</td></tr>
<tr><td>tudo (todo, invariable)</td><td>nada</td></tr>
<tr><td>sempre · em algum sítio</td><td>nunca · em nenhum sítio / lado</td></tr>
</table>
<h4>Todo / tudo</h4>
<ul>
<li><b>tudo</b> = «todo» neutro (todas las cosas): <i>Está tudo bem. Comi tudo.</i></li>
<li><b>todo/a + artículo + sust.</b> = entero: <i>todo o dia</i> (todo el día) · <i>toda a gente</i> (todo el mundo).</li>
<li><b>todos/as + os/as + sust.</b> = cada: <i>todos os dias</i> (todos los días).</li>
</ul>
<p>Otros: <b>cada</b> (invariable), <b>outro/a</b> (otro; <i>um outro</i> es posible), <b>vários/as</b>, <b>qualquer / quaisquer</b> (cualquier/a), <b>muito, pouco, bastante, demasiado</b>.</p>
<div class="ojo"><b>Ojo:</b> <i>toda a gente</i> = todo el mundo (en Brasil: <i>todo mundo</i>). <i>A gente</i> = nosotros (coloquial).</div>
`
        },
        {
          id: "a2-perifrases", titulo: "Perífrasis verbales frecuentes",
          html: `
<table>
<tr><th>Perífrasis</th><th>Significado</th><th>Ejemplo</th></tr>
<tr><td>estar a + inf.</td><td>acción en curso</td><td>Estou a cozinhar.</td></tr>
<tr><td>ir + inf.</td><td>futuro próximo</td><td>Vou sair.</td></tr>
<tr><td>acabar de + inf.</td><td>pasado inmediato</td><td>Acabei de chegar. (Acabo de llegar.)</td></tr>
<tr><td>começar a + inf.</td><td>inicio</td><td>Comecei a estudar em setembro.</td></tr>
<tr><td>deixar de + inf.</td><td>interrupción</td><td>Deixei de fumar.</td></tr>
<tr><td>voltar a + inf.</td><td>repetición</td><td>Voltei a ver o filme.</td></tr>
<tr><td>continuar a + inf.</td><td>continuidad</td><td>Continua a chover.</td></tr>
<tr><td>andar a + inf.</td><td>actividad prolongada</td><td>Ando a aprender guitarra.</td></tr>
<tr><td>costumar + inf.</td><td>hábito (soler)</td><td>Costumo jantar às oito.</td></tr>
<tr><td>ter de / ter que + inf.</td><td>obligación personal</td><td>Tenho de ir ao médico.</td></tr>
<tr><td>dever + inf.</td><td>obligación / probabilidad</td><td>Deves descansar. Deve estar em casa.</td></tr>
<tr><td>estar para + inf.</td><td>a punto de</td><td>O comboio está para partir.</td></tr>
</table>
<div class="ojo"><b>Ojo:</b> <i>Acabei de chegar</i> va en pasado en portugués (en español «acabo de llegar» va en presente).</div>
`
        },
        {
          id: "a2-conectores", titulo: "Conectores del discurso",
          html: `
<table>
<tr><th>Función</th><th>Conectores</th></tr>
<tr><td>Adición</td><td>e, também, além disso, nem… nem</td></tr>
<tr><td>Oposición</td><td>mas, porém, no entanto, contudo, todavia (sin embargo), apesar de</td></tr>
<tr><td>Causa</td><td>porque, como, visto que, já que</td></tr>
<tr><td>Consecuencia</td><td>por isso, portanto, então, assim</td></tr>
<tr><td>Tiempo</td><td>quando, enquanto, antes de, depois de, logo que, desde que, até</td></tr>
<tr><td>Orden</td><td>primeiro, em primeiro lugar, depois, a seguir, finalmente, por fim</td></tr>
<tr><td>Ejemplo</td><td>por exemplo, como</td></tr>
<tr><td>Condición</td><td>se, caso</td></tr>
</table>
<div class="ej">Gosto muito de Lisboa, <b>mas</b> é uma cidade cara. <b>Por isso</b>, quando vou lá, fico em casa de uns amigos. <b>Além disso</b>, assim aproveito para estar com eles.</div>
<div class="ojo"><b>Falso amigo:</b> <b>todavia</b> = sin embargo (no «todavía», que es <i>ainda</i>).</div>
`
        }
      ]
    },

    /* ───────────────────────── LÉXICO ───────────────────────── */
    {
      id: "lexico", titulo: "Léxico y vocabulario",
      temas: [
        {
          id: "a2-viagens", titulo: "Viajes y alojamiento",
          html: `
<table>
<tr><td>as férias · a viagem · viajar · fazer turismo</td><td>vacaciones · viaje · viajar · hacer turismo</td></tr>
<tr><td>a mala · a mochila · fazer a mala</td><td>maleta · mochila · hacer la maleta</td></tr>
<tr><td>o aeroporto · o voo · a partida · a chegada</td><td>aeropuerto · vuelo · salida · llegada</td></tr>
<tr><td>o cartão de embarque · a porta de embarque</td><td>tarjeta de embarque · puerta de embarque</td></tr>
<tr><td>o bilhete de ida / de ida e volta</td><td>billete de ida / de ida y vuelta</td></tr>
<tr><td>o hotel · a pensão · o alojamento local · o parque de campismo</td><td>hotel · pensión · apartamento turístico · camping</td></tr>
<tr><td>o quarto individual / duplo / de casal</td><td>habitación individual / doble (dos camas) / de matrimonio</td></tr>
<tr><td>com pequeno-almoço incluído · meia pensão</td><td>con desayuno · media pensión</td></tr>
<tr><td>a receção · a chave · fazer o check-in</td><td>recepción · llave · registrarse</td></tr>
<tr><td>a praia · a serra · o campo · a aldeia</td><td>playa · sierra/montaña · campo · pueblo</td></tr>
</table>
<h4>Hacer una reserva</h4>
<div class="ej">— Boa tarde, <b>queria reservar</b> um quarto de casal para o fim de semana de 12 a 14.<br>— Temos disponível. Com ou sem pequeno-almoço?<br>— Com pequeno-almoço, por favor. <b>Qual é o preço por noite?</b><br>— São 85 euros. <b>Em nome de quem</b> fica a reserva?</div>
`
        },
        {
          id: "a2-compras", titulo: "Compras, dinheiro y servicios",
          html: `
<table>
<tr><td>a loja · o centro comercial · o supermercado · a mercearia</td><td>tienda · centro comercial · supermercado · ultramarinos</td></tr>
<tr><td>o talho · a peixaria · a padaria · a pastelaria · a frutaria</td><td>carnicería · pescadería · panadería · pastelería · frutería</td></tr>
<tr><td>a drogaria · a papelaria · a livraria · a sapataria</td><td>droguería · papelería · librería · zapatería</td></tr>
<tr><td>os saldos · os descontos · a promoção</td><td>rebajas · descuentos · oferta</td></tr>
<tr><td>o preço · caro · barato · custar</td><td>precio · caro · barato · costar</td></tr>
<tr><td>pagar em dinheiro / com cartão / com MB WAY</td><td>pagar en efectivo / con tarjeta / con MB WAY</td></tr>
<tr><td>o multibanco · levantar dinheiro</td><td>cajero automático · sacar dinero</td></tr>
<tr><td>o troco · o talão · a fatura com NIF</td><td>cambio (vuelta) · tique · factura con NIF</td></tr>
<tr><td>trocar · devolver · o reembolso</td><td>cambiar · devolver · reembolso</td></tr>
</table>
<h4>Cantidades y envases</h4>
<p>um quilo de · meio quilo de · cem gramas de · um litro de · uma garrafa de · uma lata de · um pacote de · uma caixa de · uma dúzia de ovos · uma fatia de · um bocado de</p>
<div class="ej">— Quer o talão? — Sim, e <b>com contribuinte</b>, por favor. (con NIF en la factura)</div>
<div class="ojo"><b>Falsos amigos:</b> <b>o talho</b> = carnicería · <b>a mercearia</b> = tienda de ultramarinos · <b>levantar dinheiro</b> = sacar dinero · <b>o troco</b> = la vuelta.</div>
`
        },
        {
          id: "a2-saude", titulo: "Salud y médico",
          html: `
<table>
<tr><td>o centro de saúde · as urgências · o hospital</td><td>centro de salud · urgencias · hospital</td></tr>
<tr><td>marcar uma consulta · o médico de família</td><td>pedir cita · médico de cabecera</td></tr>
<tr><td>o cartão de utente / o número de utente</td><td>tarjeta sanitaria</td></tr>
<tr><td>a receita · o medicamento · o comprimido · o xarope</td><td>receta · medicamento · pastilla · jarabe</td></tr>
<tr><td>a pomada · as gotas · a injeção · o penso</td><td>pomada · gotas · inyección · tirita</td></tr>
<tr><td>estar constipado · ter gripe · a alergia</td><td>estar resfriado · tener gripe · alergia</td></tr>
<tr><td>partir uma perna · torcer o pé · cortar-se</td><td>romperse una pierna · torcerse el pie · cortarse</td></tr>
<tr><td>a dor · doer · tossir · espirrar · enjoar</td><td>dolor · doler · toser · estornudar · marearse</td></tr>
</table>
<h4>En la consulta</h4>
<div class="ej">— Então, <b>o que é que sente</b>?<br>— <b>Tenho dores</b> de garganta e febre desde ontem. <b>Dói-me</b> também o corpo todo.<br>— Vou receitar-lhe um antibiótico. <b>Tome</b> um comprimido de oito em oito horas durante sete dias.<br>— <b>Tenho de</b> ficar em casa? — Sim, <b>repouse</b> e beba muitos líquidos.</div>
<p class="peq">Recomendaciones: <i>deve descansar, é melhor não sair, convém beber água, não deve fumar</i>.</p>
`
        },
        {
          id: "a2-trabalho", titulo: "Trabajo y estudios",
          html: `
<table>
<tr><td>o emprego · o trabalho · o posto de trabalho</td><td>empleo · trabajo · puesto</td></tr>
<tr><td>a empresa · o escritório · a fábrica · a loja</td><td>empresa · oficina · fábrica · tienda</td></tr>
<tr><td>o/a patrão/patroa · o/a chefe · o/a colega</td><td>jefe/a · jefe · compañero/a</td></tr>
<tr><td>o ordenado / o salário · o horário · as horas extra</td><td>sueldo · horario · horas extra</td></tr>
<tr><td>o contrato · a tempo inteiro / a tempo parcial</td><td>contrato · a tiempo completo / parcial</td></tr>
<tr><td>a entrevista de emprego · o currículo · a candidatura</td><td>entrevista de trabajo · currículum · solicitud</td></tr>
<tr><td>estar desempregado · ser despedido · reformar-se</td><td>estar en paro · ser despedido · jubilarse</td></tr>
<tr><td>a reunião · o relatório · o prazo</td><td>reunión · informe · plazo</td></tr>
</table>
<h4>Estudios</h4>
<p>o ensino básico / secundário · a universidade · a faculdade · o curso (carrera) · a licenciatura · o mestrado · o doutoramento · a disciplina (asignatura) · o exame · a nota · passar / chumbar (aprobar / suspender) · a propina (tasa de matrícula) · a bolsa</p>
<div class="ojo"><b>Falsos amigos:</b> <b>a propina</b> = tasa académica (propina = <i>a gorjeta</i>) · <b>chumbar</b> = suspender · <b>o curso</b> = la carrera universitaria · <b>a disciplina</b> = la asignatura.</div>
`
        },
        {
          id: "a2-lazer", titulo: "Ocio, deporte y tiempo libre",
          html: `
<p><b>Actividades:</b> ir ao cinema / ao teatro / a um concerto · ver uma exposição · passear · dar uma volta · sair com os amigos · ir às compras · ler · ouvir música · tocar guitarra / piano · cozinhar · fazer jardinagem · jogar às cartas / xadrez · ir à praia · fazer caminhadas</p>
<p><b>Deportes:</b> jogar futebol / ténis / basquetebol · fazer natação / ciclismo / ioga · nadar · correr · andar de bicicleta · ir ao ginásio · fazer surf</p>
<div class="ojo"><b>Ojo:</b> <i>jogar</i> = jugar a un deporte o juego (<b>jogar à</b> bola, <b>às</b> cartas) · <i>brincar</i> = jugar (niños) y bromear · <i>tocar</i> = tocar un instrumento.</div>
<h4>Opinar y valorar</h4>
<p><i>Achei o filme ótimo / uma seca (un rollo). · Adorei! · Não gostei nada. · Foi giro (bonito, chulo). · Valeu a pena. · Na minha opinião…</i></p>
<p class="peq"><b>Giro/gira</b> es muy portugués: bonito, mono, guay (<i>Que vestido tão giro!</i>).</p>
`
        },
        {
          id: "a2-tecnologia", titulo: "Tecnología y comunicaciones",
          html: `
<table>
<tr><th>Portugal</th><th>Brasil</th><th>Español</th></tr>
<tr><td>o telemóvel</td><td>o celular</td><td>el móvil</td></tr>
<tr><td>o ecrã</td><td>a tela</td><td>la pantalla</td></tr>
<tr><td>o rato</td><td>o mouse</td><td>el ratón</td></tr>
<tr><td>o ficheiro</td><td>o arquivo</td><td>el archivo</td></tr>
<tr><td>a palavra-passe</td><td>a senha</td><td>la contraseña</td></tr>
<tr><td>o computador</td><td>o computador</td><td>el ordenador</td></tr>
<tr><td>a aplicação</td><td>o aplicativo</td><td>la aplicación</td></tr>
</table>
<p><b>Verbos:</b> ligar (llamar por teléfono; encender) · desligar (colgar; apagar) · carregar (cargar; pulsar) · descarregar (descargar) · enviar / mandar uma mensagem · navegar na internet · guardar · apagar (borrar) · partilhar (compartir).</p>
<div class="ej">Liga-me logo à noite. · Desliga a televisão! · Carrega no botão verde. · Esqueci-me da palavra-passe.</div>
`
        },
        {
          id: "a2-falsos-amigos", titulo: "Falsos amigos portugués–español",
          html: `
<table class="compacta">
<tr><th>Portugués</th><th>Significa</th><th>Y lo que parece se dice…</th></tr>
<tr><td>esquisito</td><td>raro</td><td>exquisito = delicioso, requintado</td></tr>
<tr><td>embaraçada</td><td>avergonzada, confusa</td><td>embarazada = grávida</td></tr>
<tr><td>borracha</td><td>goma de borrar</td><td>borracha = bêbeda</td></tr>
<tr><td>largo</td><td>ancho; plazoleta</td><td>largo = comprido</td></tr>
<tr><td>oficina</td><td>taller</td><td>oficina = escritório</td></tr>
<tr><td>escritório</td><td>oficina, despacho</td><td>escritorio = secretária</td></tr>
<tr><td>cena</td><td>escena</td><td>cena = jantar</td></tr>
<tr><td>polvo</td><td>pulpo</td><td>polvo = pó</td></tr>
<tr><td>rato</td><td>ratón</td><td>rato = momento, bocado</td></tr>
<tr><td>vaso</td><td>maceta; vaso sanguíneo</td><td>vaso = copo</td></tr>
<tr><td>acordar</td><td>despertar(se)</td><td>acordar = combinar, concordar</td></tr>
<tr><td>pegar</td><td>coger, agarrar</td><td>pegar = colar; bater</td></tr>
<tr><td>tirar</td><td>quitar, sacar (tirar uma foto)</td><td>tirar a la basura = deitar fora</td></tr>
<tr><td>prender</td><td>arrestar; sujetar</td><td>prender fuego = acender</td></tr>
<tr><td>assinatura</td><td>firma; suscripción</td><td>firma (empresa) = empresa</td></tr>
<tr><td>propina</td><td>tasa académica</td><td>propina = gorjeta</td></tr>
<tr><td>presunto</td><td>jamón</td><td>presunto = suposto</td></tr>
<tr><td>salsa</td><td>perejil</td><td>salsa = molho</td></tr>
<tr><td>talher</td><td>cubierto</td><td>taller = oficina</td></tr>
<tr><td>latido</td><td>ladrido</td><td>latido = batimento</td></tr>
<tr><td>brincar</td><td>jugar; bromear</td><td>brincar = saltar</td></tr>
<tr><td>todavia</td><td>sin embargo</td><td>todavía = ainda</td></tr>
<tr><td>apelido</td><td>apellido (PT) · apodo (BR)</td><td>apodo = alcunha</td></tr>
<tr><td>constipado</td><td>resfriado</td><td>estreñido = com prisão de ventre</td></tr>
<tr><td>exquisito</td><td colspan="2">no existe: usa <i>requintado, delicioso</i></td></tr>
</table>
`
        },
        {
          id: "a2-pe-pb", titulo: "Portugués de Portugal y de Brasil",
          html: `
<p>La EOI enseña la norma <b>europea</b>, pero conviene reconocer la brasileña.</p>
<h4>Gramática</h4>
<table>
<tr><th>Portugal</th><th>Brasil</th></tr>
<tr><td>Estou a falar.</td><td>Estou falando.</td></tr>
<tr><td>Chamo-me Ana. (pronombre detrás)</td><td>Me chamo Ana. (pronombre delante)</td></tr>
<tr><td>tu falas (informal) / o senhor fala</td><td>você fala (general)</td></tr>
<tr><td>a minha casa (con artículo)</td><td>minha casa (artículo opcional)</td></tr>
<tr><td>Vi-o ontem.</td><td>Vi ele ontem. (coloquial)</td></tr>
<tr><td>falámos (pasado) ≠ falamos</td><td>falamos (ambos)</td></tr>
</table>
<h4>Vocabulario</h4>
<table class="compacta">
<tr><th>Portugal</th><th>Brasil</th><th>Español</th></tr>
<tr><td>o pequeno-almoço</td><td>o café da manhã</td><td>desayuno</td></tr>
<tr><td>o autocarro</td><td>o ônibus</td><td>autobús</td></tr>
<tr><td>o comboio</td><td>o trem</td><td>tren</td></tr>
<tr><td>a casa de banho</td><td>o banheiro</td><td>cuarto de baño</td></tr>
<tr><td>o frigorífico</td><td>a geladeira</td><td>nevera</td></tr>
<tr><td>o sumo</td><td>o suco</td><td>zumo</td></tr>
<tr><td>a rapariga</td><td>a moça / garota</td><td>chica (¡en Brasil <i>rapariga</i> es ofensivo!)</td></tr>
<tr><td>o fato</td><td>o terno</td><td>traje</td></tr>
<tr><td>a bica</td><td>o cafezinho</td><td>café solo</td></tr>
<tr><td>o talho</td><td>o açougue</td><td>carnicería</td></tr>
<tr><td>a fila / a bicha*</td><td>a fila</td><td>cola</td></tr>
</table>
<p class="peq">* <i>Bicha</i> (cola) es tradicional en Portugal pero hoy se prefiere <i>fila</i>, porque en Brasil es un insulto.</p>
<p><b>Ortografía:</b> desde el Acuerdo Ortográfico (AO90) ambas normas se han acercado (<i>ação, ótimo, diretor</i>), pero persisten diferencias de acento: <i>António / Antônio, económico / econômico, facto / fato</i>.</p>
`
        },
        {
          id: "a2-expressoes", titulo: "Expresiones idiomáticas y coloquiales",
          html: `
<table>
<tr><th>Expresión</th><th>Significado</th></tr>
<tr><td>Está bem! / Pronto!</td><td>¡Vale! / Bueno, ya está</td></tr>
<tr><td>Fixe!</td><td>¡Guay!</td></tr>
<tr><td>Que giro!</td><td>¡Qué bonito / mono!</td></tr>
<tr><td>Que seca!</td><td>¡Qué rollo!</td></tr>
<tr><td>Estar com os azeites</td><td>Estar de mal humor</td></tr>
<tr><td>Ir dar uma volta</td><td>Ir a dar un paseo</td></tr>
<tr><td>Não faz mal.</td><td>No pasa nada.</td></tr>
<tr><td>Tanto faz.</td><td>Da igual.</td></tr>
<tr><td>Se calhar…</td><td>A lo mejor…</td></tr>
<tr><td>Pois é! / Pois.</td><td>¡Ya! / Eso es.</td></tr>
<tr><td>Ter lata</td><td>Tener cara (ser descarado)</td></tr>
<tr><td>Custar os olhos da cara</td><td>Costar un ojo de la cara</td></tr>
<tr><td>Meter água</td><td>Meter la pata</td></tr>
<tr><td>Fazer uma vaquinha</td><td>Hacer un bote (poner dinero entre todos)</td></tr>
<tr><td>Estar nas nuvens</td><td>Estar en las nubes</td></tr>
<tr><td>Ficar a ver navios</td><td>Quedarse con las ganas / plantado</td></tr>
<tr><td>Chover a potes</td><td>Llover a cántaros</td></tr>
</table>
<p class="peq">Muletillas muy portuguesas: <i>pá</i>, <i>tipo</i>, <i>então</i>, <i>pronto</i>, <i>olha</i>, <i>sabes?</i></p>
`
        }
      ]
    },

    /* ───────────────────────── FUNCIONES ───────────────────────── */
    {
      id: "funcoes", titulo: "Funciones comunicativas",
      temas: [
        {
          id: "a2-narrar", titulo: "Narrar experiencias y hablar del pasado",
          html: `
<h4>Estructura de un relato</h4>
<ol>
<li><b>Situar:</b> <i>No verão passado… / Há dois anos… / Quando era pequena…</i></li>
<li><b>Describir el contexto</b> (imperfeito): <i>Estava calor, a praia estava cheia…</i></li>
<li><b>Contar los hechos</b> (perfeito): <i>Primeiro fomos… depois visitámos… a seguir…</i></li>
<li><b>Un imprevisto:</b> <i>De repente… / Nesse momento… / Afinal…</i></li>
<li><b>Valorar:</b> <i>Foi uma experiência inesquecível. Adorei. Nunca mais volto lá!</i></li>
</ol>
<div class="ej">No ano passado <b>fui</b> a Lisboa com uns amigos. <b>Ficámos</b> num alojamento local em Alfama, que <b>era</b> pequeno mas muito giro. No primeiro dia <b>andámos</b> de elétrico e <b>comemos</b> pastéis de Belém. À noite <b>fomos</b> ouvir fado: <b>estava</b> tanta gente que quase não <b>conseguimos</b> entrar. <b>Foi</b> uma viagem fantástica!</div>
<h4>Experiencias</h4>
<p><i>— <b>Já</b> foste aos Açores? — Já, <b>fui</b> em 2022. / Não, <b>nunca</b> fui. / <b>Ainda não</b>, mas quero ir.</i></p>
`
        },
        {
          id: "a2-email", titulo: "Escribir mensajes y correos",
          html: `
<h4>Correo informal (a un amigo)</h4>
<div class="ej"><b>Olá, Joana!</b><br>Tudo bem contigo? Desculpa não ter escrito antes, mas tenho andado muito ocupada com o trabalho.<br>Escrevo-te porque no próximo mês vou a Coimbra e gostava muito de te ver. Estás livre no fim de semana de 15? Podíamos jantar juntas.<br>Dá notícias!<br><b>Um beijinho / Beijinhos,</b><br>Marta</div>
<h4>Correo formal</h4>
<div class="ej"><b>Exmos. Senhores,</b><br>Venho por este meio solicitar informações sobre os cursos de verão de língua portuguesa. Gostaria de saber as datas, o preço e se é possível ter alojamento.<br>Agradeço desde já a vossa atenção.<br><b>Com os melhores cumprimentos,</b><br>Marta Gómez</div>
<table>
<tr><th></th><th>Informal</th><th>Formal</th></tr>
<tr><td>Saludo</td><td>Olá… / Querido/a…</td><td>Exmo./a. Senhor/a… · Caro/a Sr./Sr.ª…</td></tr>
<tr><td>Inicio</td><td>Como estás? Espero que esteja tudo bem.</td><td>Venho por este meio… · Escrevo-lhe para…</td></tr>
<tr><td>Despedida</td><td>Beijinhos · Um abraço · Até breve</td><td>Com os melhores cumprimentos · Atenciosamente</td></tr>
</table>
`
        },
        {
          id: "a2-gestoes", titulo: "Gestiones: reservar, quejarse, pedir información",
          html: `
<h4>Pedir información</h4>
<p><i>Podia dizer-me…? · Gostaria de saber se… · Sabe se…? · A que horas abre/fecha…? · Onde posso comprar…? · É preciso marcar?</i></p>
<h4>Reservar en un restaurante</h4>
<div class="ej">— Restaurante O Pescador, boa noite.<br>— Boa noite. Queria reservar uma mesa para quatro pessoas para sábado, às oito e meia.<br>— Sábado às oito e meia… Pode ser na esplanada? (terraza)<br>— Pode, ótimo. Fica em nome de Gómez.</div>
<h4>En el restaurante</h4>
<p><i>Pode trazer a ementa / a carta, por favor? · Qual é o prato do dia? · Para mim, o bacalhau à Brás. · Pode trazer mais pão? · A conta, se faz favor.</i></p>
<p class="peq">En Portugal te ponen en la mesa el <b>couvert</b> (pan, aceitunas, queso…): se cobra si lo comes. Puedes decir: <i>Não, obrigado, pode levar.</i></p>
<h4>Quejarse con educación</h4>
<div class="ej">Desculpe, mas <b>a sopa está fria</b>. · <b>Pedi</b> o peixe grelhado e <b>trouxeram-me</b> carne. · <b>Não estou satisfeito com</b> o serviço. · <b>Queria fazer uma reclamação</b>: o quarto não estava limpo. · Pode dar-me o <b>livro de reclamações</b>?</div>
`
        }
      ]
    }
  ]
};
