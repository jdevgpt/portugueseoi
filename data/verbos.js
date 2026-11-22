/* Verbos conjugados (portugués europeo) + temas de tablas para A1 y A2.
   Las formas regulares se generan; las irregulares se indican a mano. */
(function () {
  "use strict";
  const PESSOAS = ["eu", "tu", "ele / você", "nós", "eles / vocês"];

  // [infinitivo, español, nivel, irregularidades]
  const LISTA = [
    // ── Irregulares ──
    ["ser", "ser", "A1", { pres: "sou és é somos são", pps: "fui foste foi fomos foram", imp: "era eras era éramos eram", impv: "sê seja sejam", part: "sido" }],
    ["estar", "estar", "A1", { pres: "estou estás está estamos estão", pps: "estive estiveste esteve estivemos estiveram", impv: "está esteja estejam" }],
    ["ter", "tener", "A1", { pres: "tenho tens tem temos têm", pps: "tive tiveste teve tivemos tiveram", imp: "tinha tinhas tinha tínhamos tinham" }],
    ["ir", "ir", "A1", { pres: "vou vais vai vamos vão", pps: "fui foste foi fomos foram", impv: "vai vá vão" }],
    ["vir", "venir", "A1", { pres: "venho vens vem vimos vêm", pps: "vim vieste veio viemos vieram", imp: "vinha vinhas vinha vínhamos vinham", part: "vindo" }],
    ["fazer", "hacer", "A1", { pres: "faço fazes faz fazemos fazem", pps: "fiz fizeste fez fizemos fizeram", fut: "far", part: "feito" }],
    ["dizer", "decir", "A1", { pres: "digo dizes diz dizemos dizem", pps: "disse disseste disse dissemos disseram", fut: "dir", part: "dito" }],
    ["trazer", "traer", "A1", { pres: "trago trazes traz trazemos trazem", pps: "trouxe trouxeste trouxe trouxemos trouxeram", fut: "trar" }],
    ["poder", "poder", "A1", { pres: "posso podes pode podemos podem", pps: "pude pudeste pôde pudemos puderam" }],
    ["querer", "querer", "A1", { pres: "quero queres quer queremos querem", pps: "quis quiseste quis quisemos quiseram", impv: "quer queira queiram" }],
    ["saber", "saber", "A1", { pres: "sei sabes sabe sabemos sabem", pps: "soube soubeste soube soubemos souberam", impv: "sabe saiba saibam" }],
    ["dar", "dar", "A1", { pres: "dou dás dá damos dão", pps: "dei deste deu demos deram", impv: "dá dê deem" }],
    ["ver", "ver", "A1", { pres: "vejo vês vê vemos veem", pps: "vi viste viu vimos viram", part: "visto" }],
    ["ler", "leer", "A1", { pres: "leio lês lê lemos leem" }],
    ["pôr", "poner", "A1", { pres: "ponho pões põe pomos põem", pps: "pus puseste pôs pusemos puseram", imp: "punha punhas punha púnhamos punham", fut: "por", part: "posto", tema: "er" }],
    ["sair", "salir", "A1", { pres: "saio sais sai saímos saem", pps: "saí saíste saiu saímos saíram", imp: "saía saías saía saíamos saíam", part: "saído" }],
    ["ouvir", "oír", "A1", { pres: "ouço ouves ouve ouvimos ouvem" }],
    ["pedir", "pedir", "A1", { pres: "peço pedes pede pedimos pedem" }],
    ["dormir", "dormir", "A1", { pres: "durmo dormes dorme dormimos dormem" }],
    ["preferir", "preferir", "A1", { pres: "prefiro preferes prefere preferimos preferem" }],
    ["perder", "perder", "A1", { pres: "perco perdes perde perdemos perdem" }],
    ["conhecer", "conocer", "A1", { pres: "conheço conheces conhece conhecemos conhecem" }],
    ["vestir", "vestir", "A1", { pres: "visto vestes veste vestimos vestem" }],
    ["sentir", "sentir", "A2", { pres: "sinto sentes sente sentimos sentem" }],
    ["subir", "subir", "A2", { pres: "subo sobes sobe subimos sobem" }],
    ["seguir", "seguir", "A2", { pres: "sigo segues segue seguimos seguem" }],
    ["servir", "servir", "A2", { pres: "sirvo serves serve servimos servem" }],
    ["valer", "valer", "A2", { pres: "valho vales vale valemos valem" }],
    ["crer", "creer", "A2", { pres: "creio crês crê cremos creem" }],
    ["cair", "caer", "A2", { pres: "caio cais cai caímos caem", pps: "caí caíste caiu caímos caíram", imp: "caía caías caía caíamos caíam", part: "caído" }],
    ["rir", "reír", "A2", { pres: "rio ris ri rimos riem" }],
    // ── Regulares ──
    ["falar", "hablar", "A1"], ["morar", "vivir (residir)", "A1"], ["trabalhar", "trabajar", "A1"],
    ["estudar", "estudiar", "A1"], ["gostar (de)", "gustar", "A1"], ["chamar-se", "llamarse", "A1"],
    ["jantar", "cenar", "A1"], ["almoçar", "comer (al mediodía)", "A1"], ["acordar", "despertarse", "A1"],
    ["levantar-se", "levantarse", "A1"], ["chegar", "llegar", "A1"], ["ficar", "quedarse; estar situado", "A1"],
    ["comprar", "comprar", "A1"], ["pagar", "pagar", "A1", { part: "pago" }], ["apanhar", "coger (transporte)", "A1"],
    ["tomar", "tomar", "A1"], ["começar", "empezar", "A1"], ["viajar", "viajar", "A1"],
    ["comer", "comer", "A1"], ["beber", "beber", "A1"], ["viver", "vivir", "A1"],
    ["escrever", "escribir", "A1", { part: "escrito" }], ["aprender", "aprender", "A1"], ["correr", "correr", "A1"],
    ["vender", "vender", "A1"], ["responder", "responder", "A1"],
    ["partir", "partir; romper", "A1"], ["abrir", "abrir", "A1", { part: "aberto" }], ["decidir", "decidir", "A1"],
    ["assistir (a)", "asistir; ver (tv, partido)", "A1"], ["discutir", "discutir", "A1"], ["dividir", "dividir; compartir", "A1"],
    ["esperar", "esperar", "A2"], ["precisar (de)", "necesitar", "A2"], ["pensar (em)", "pensar", "A2"],
    ["lembrar-se (de)", "acordarse", "A2"], ["esquecer-se (de)", "olvidarse", "A2"], ["encontrar", "encontrar", "A2"],
    ["deixar", "dejar", "A2"], ["passar", "pasar", "A2"], ["mudar", "cambiar; mudarse", "A2"],
    ["ganhar", "ganar", "A2", { part: "ganho" }], ["gastar", "gastar", "A2", { part: "gasto" }], ["ligar", "llamar (tel.); encender", "A2"],
    ["desligar", "colgar; apagar", "A2"], ["mandar", "enviar; mandar", "A2"], ["marcar", "reservar; pedir cita", "A2"],
    ["procurar", "buscar", "A2"], ["perguntar", "preguntar", "A2"], ["andar", "andar", "A2"],
    ["acabar", "acabar", "A2"], ["voltar", "volver", "A2"], ["visitar", "visitar", "A2"],
    ["receber", "recibir", "A2"], ["conseguir", "conseguir", "A2", { pres: "consigo consegues consegue conseguimos conseguem" }], ["sofrer", "sufrir", "A2"],
    ["devolver", "devolver", "A2"], ["permitir", "permitir", "A2"], ["resolver", "resolver", "A2"]
  ];

  const sp = (s) => s.split(" ");
  function raiz(inf) { return inf.replace(/ \(.*\)$/, "").replace(/-se$/, ""); }
  function tipoDe(r, irr) { return (irr && irr.tema) || (r.endsWith("ar") ? "ar" : r.endsWith("er") ? "er" : "ir"); }
  // ajuste ortográfico ante e: c→qu, g→gu, ç→c
  function suaveE(st) {
    if (st.endsWith("c")) return st.slice(0, -1) + "qu";
    if (st.endsWith("g")) return st.slice(0, -1) + "gu";
    if (st.endsWith("ç")) return st.slice(0, -1) + "c";
    return st;
  }

  function conjugar(entry) {
    const [infTxt, es, nivel, irr = {}] = entry;
    const inf = raiz(infTxt);
    const t = tipoDe(inf, irr);
    const st = inf.slice(0, -2);
    const v = {};
    const R = {
      ar: { pres: ["o", "as", "a", "amos", "am"], pps: ["ei", "aste", "ou", "ámos", "aram"], imp: ["ava", "avas", "ava", "ávamos", "avam"], part: "ado" },
      er: { pres: ["o", "es", "e", "emos", "em"], pps: ["i", "este", "eu", "emos", "eram"], imp: ["ia", "ias", "ia", "íamos", "iam"], part: "ido" },
      ir: { pres: ["o", "es", "e", "imos", "em"], pps: ["i", "iste", "iu", "imos", "iram"], imp: ["ia", "ias", "ia", "íamos", "iam"], part: "ido" }
    }[t];
    v.pres = irr.pres ? sp(irr.pres) : R.pres.map((e) => st + e);
    v.pps = irr.pps ? sp(irr.pps) : R.pps.map((e, i) => (i === 0 && t === "ar" ? suaveE(st) : st) + e);
    v.imp = irr.imp ? sp(irr.imp) : R.imp.map((e) => st + e);
    const fs = irr.fut || inf;
    v.fut = ["ei", "ás", "á", "emos", "ão"].map((e) => fs + e);
    v.cond = ["ia", "ias", "ia", "íamos", "iam"].map((e) => fs + e);
    v.part = irr.part || st + R.part;
    if (irr.impv) v.impv = sp(irr.impv);
    else {
      const eu = v.pres[0].slice(0, -1); // raíz de «eu»
      const base = t === "ar" ? suaveE(eu) + "e" : eu + "a";
      v.impv = [v.pres[2], base, base + "m"];
    }
    // ── Tiempos de B1 ──
    // presente do conjuntivo (a partir de la forma de «você» del imperativo)
    if (inf === "ir") v.cpres = sp("vá vás vá vamos vão");
    else if (inf === "dar") v.cpres = sp("dê dês dê demos deem");
    else {
      const pc = v.impv[1], vo = pc.slice(-1), stc = pc.slice(0, -1);
      v.cpres = [stc + vo, stc + vo + "s", stc + vo, stc + vo + "mos", stc + vo + "m"];
    }
    // imperfeito e futuro do conjuntivo (a partir de «eles» del perfeito)
    const b = v.pps[4].replace(/ram$/, "");
    const ult = b.slice(-1);
    const ACC = irr.pps ? { a: "á", e: "é", i: "í", o: "ô" } : { a: "á", e: "ê", i: "í", o: "ô" };
    const bN = ACC[ult] ? b.slice(0, -1) + ACC[ult] : b;
    v.cimp = [b + "sse", b + "sses", b + "sse", bN + "ssemos", b + "ssem"];
    const sinAc = (f) => f.replace(/ír$/, "ir").replace(/írmos$/, "irmos");
    v.cfut = [sinAc(b + "r"), b + "res", sinAc(b + "r"), sinAc(b + "rmos"), b + "rem"];
    // infinitivo pessoal
    const ip = inf === "pôr" ? "por" : inf;
    v.infp = [inf, ip + "es", inf, ip + "mos", ip + "em"];
    // mais-que-perfeito composto
    v.mqp = ["tinha", "tinhas", "tinha", "tínhamos", "tinham"].map((a) => a + " " + v.part);
    return { inf: infTxt, es, nivel, irregular: !!(irr.pres || irr.pps), v };
  }

  const VERBOS = LISTA.map(conjugar);
  window.VERBOS = { lista: VERBOS, pessoas: PESSOAS, tiempos: {
    pres: "presente", pps: "pretérito perfeito simples", imp: "pretérito imperfeito",
    fut: "futuro", cond: "condicional", impv: "imperativo", part: "particípio",
    cpres: "presente do conjuntivo", cimp: "imperfeito do conjuntivo", cfut: "futuro do conjuntivo",
    infp: "infinitivo pessoal", mqp: "mais-que-perfeito composto"
  } };

  /* ── Generación de tablas HTML ── */
  const tablaPersonas = (verbos, tiempo) =>
    `<table class="compacta verbos"><tr><th>Verbo</th>${PESSOAS.map((p) => `<th>${p}</th>`).join("")}</tr>` +
    verbos.map((x) => `<tr><td><b>${x.inf}</b><br><span class="peq">${x.es}</span></td>${x.v[tiempo].map((f) => `<td>${f}</td>`).join("")}</tr>`).join("") +
    `</table>`;

  const tablaImperativo = (verbos) =>
    `<table class="compacta verbos"><tr><th>Verbo</th><th>tu</th><th>você / o senhor</th><th>vocês</th><th>não (tu)</th></tr>` +
    verbos.map((x) => {
      const neg = x.v.impv[1].replace(/m$/, "") + "s";
      return `<tr><td><b>${x.inf}</b></td><td>${x.v.impv[0]}</td><td>${x.v.impv[1]}</td><td>${x.v.impv[2]}</td><td>não ${neg}</td></tr>`;
    }).join("") + `</table>`;

  const ficha = (x) =>
    `<h4>${x.inf} <span class="peq">(${x.es})</span></h4><table class="compacta verbos"><tr><th></th><th>Presente</th><th>Perf. simples</th><th>Imperfeito</th><th>Futuro</th><th>Condicional</th></tr>` +
    PESSOAS.map((p, i) => `<tr><td>${p}</td><td>${x.v.pres[i]}</td><td>${x.v.pps[i]}</td><td>${x.v.imp[i]}</td><td>${x.v.fut[i]}</td><td>${x.v.cond[i]}</td></tr>`).join("") +
    `<tr><td colspan="6" class="peq">Particípio: <b>${x.v.part}</b> · Imperativo: <b>${x.v.impv.join(" / ")}</b></td></tr></table>`;

  const A1 = VERBOS.filter((x) => x.nivel === "A1");
  const A1reg = A1.filter((x) => !x.irregular);
  const A1irr = A1.filter((x) => x.irregular);
  const todos = VERBOS;
  const irregulares = VERBOS.filter((x) => x.irregular);

  const vocabPrep = `
<h4>Vocabulário: verbos com preposição</h4>
<table class="compacta"><tr><th>Português</th><th>Español</th><th>Exemplo</th></tr>
<tr><td>gostar <b>de</b></td><td>gustar</td><td>Gosto <b>de</b> música.</td></tr>
<tr><td>precisar <b>de</b></td><td>necesitar</td><td>Preciso <b>de</b> ajuda.</td></tr>
<tr><td>lembrar-se <b>de</b></td><td>acordarse de</td><td>Lembras-te <b>da</b> Ana?</td></tr>
<tr><td>esquecer-se <b>de</b></td><td>olvidarse de</td><td>Esqueci-me <b>das</b> chaves.</td></tr>
<tr><td>pensar <b>em</b></td><td>pensar en</td><td>Penso muito <b>em</b> ti.</td></tr>
<tr><td>acreditar <b>em</b></td><td>creer en</td><td>Não acredito <b>nisso</b>.</td></tr>
<tr><td>assistir <b>a</b></td><td>ver, asistir a</td><td>Assisti <b>ao</b> jogo.</td></tr>
<tr><td>chegar <b>a</b></td><td>llegar a</td><td>Cheguei <b>a</b> casa tarde.</td></tr>
<tr><td>casar <b>com</b></td><td>casarse con</td><td>Casou <b>com</b> um italiano.</td></tr>
<tr><td>sonhar <b>com</b></td><td>soñar con</td><td>Sonhei <b>contigo</b>.</td></tr>
<tr><td>gozar <b>com</b></td><td>burlarse de</td><td>Estás a gozar <b>comigo</b>?</td></tr>
<tr><td>preocupar-se <b>com</b></td><td>preocuparse por</td><td>Não te preocupes <b>com</b> isso.</td></tr>
<tr><td>apaixonar-se <b>por</b></td><td>enamorarse de</td><td>Apaixonou-se <b>por</b> ela.</td></tr>
<tr><td>ir <b>ter com</b></td><td>ir a ver a (quedar con)</td><td>Vou ter <b>com</b> o Rui ao café.</td></tr>
</table>`;

  const temasA1 = [
    { id: "a1-verbos-reg", titulo: "Presente: verbos regulares más comunes",
      html: `<p>Los ${A1reg.length} verbos regulares más frecuentes del nivel A1, conjugados en <b>presente de indicativo</b>. Fíjate en que todos siguen el modelo <i>falar / comer / partir</i>.</p>` + tablaPersonas(A1reg, "pres") },
    { id: "a1-verbos-irr", titulo: "Presente: verbos irregulares más comunes",
      html: `<p>Los verbos irregulares imprescindibles de A1 en <b>presente de indicativo</b>. Muchos solo cambian en la persona <i>eu</i>.</p>` + tablaPersonas(A1irr, "pres") +
      `<div class="ojo"><b>Haver</b> solo se usa en 3.ª persona como «hay»: <i>há</i> (presente), <i>houve</i> (perfeito), <i>havia</i> (imperfeito).</div>` },
    { id: "a1-verbos-vocab", titulo: "Vocabulario: verbos con preposición (A1)", html: vocabPrep }
  ];

  const temasA2 = [
    { id: "a2-verbos-pps", titulo: "Pretérito perfeito simples: tabla de verbos",
      html: `<p>${todos.length} verbos frecuentes en <b>pretérito perfeito simples</b>.</p>` + tablaPersonas(todos, "pps") },
    { id: "a2-verbos-imp", titulo: "Pretérito imperfeito: tabla de verbos",
      html: `<p>En imperfeito solo hay 4 irregulares (<i>ser, ter, vir, pôr</i>); el resto es regular.</p>` + tablaPersonas(todos.filter((x) => x.irregular || x.nivel === "A1"), "imp") },
    { id: "a2-verbos-futcond", titulo: "Futuro y condicional: tablas de verbos",
      html: `<p>Se forman sobre el infinitivo. Solo <i>fazer, dizer, trazer</i> (y <i>pôr</i>) cambian la raíz.</p><h4>Futuro</h4>` +
        tablaPersonas(todos.filter((x) => x.nivel === "A1").slice(0, 26), "fut") + `<h4>Condicional</h4>` + tablaPersonas(todos.filter((x) => x.nivel === "A1").slice(0, 26), "cond") },
    { id: "a2-verbos-impv", titulo: "Imperativo: tabla de verbos",
      html: `<p>Formas afirmativas de <i>tu, você, vocês</i> y negativa de <i>tu</i>.</p>` + tablaImperativo(todos) },
    { id: "a2-verbos-part", titulo: "Participios",
      html: `<p>Regulares en <b>-ado / -ido</b>; irregulares marcados en negrita.</p><table class="compacta verbos"><tr><th>Infinitivo</th><th>Particípio</th><th>Infinitivo</th><th>Particípio</th><th>Infinitivo</th><th>Particípio</th></tr>` +
        (() => { let f = ""; for (let i = 0; i < todos.length; i += 3) { f += "<tr>" + [0, 1, 2].map((k) => { const x = todos[i + k]; if (!x) return "<td></td><td></td>"; const irr = !/(ado|ido)$/.test(x.v.part); return `<td>${x.inf}</td><td>${irr ? "<b>" + x.v.part + "</b>" : x.v.part}</td>`; }).join("") + "</tr>"; } return f; })() + `</table>` },
    { id: "a2-verbos-fichas", titulo: "Fichas completas de verbos irregulares",
      html: `<p>Todos los tiempos de A2 para cada verbo irregular.</p>` + irregulares.map(ficha).join("") },
    { id: "a2-verbos-vocab", titulo: "Vocabulario: verbos nuevos de A2",
      html: `<p>Repasa también la tabla de verbos con preposición de A1.</p><h4>Verbos frecuentes de A2</h4><p>${VERBOS.filter((x) => x.nivel === "A2").map((x) => `<b>${x.inf}</b> (${x.es})`).join(" · ")}</p>` }
  ];

  const fichaB1 = (x) =>
    `<h4>${x.inf} <span class="peq">(${x.es})</span></h4><table class="compacta verbos"><tr><th></th><th>Pres. conjuntivo</th><th>Imperf. conjuntivo</th><th>Fut. conjuntivo</th><th>Infinitivo pessoal</th></tr>` +
    PESSOAS.map((p, i) => `<tr><td>${p}</td><td>${x.v.cpres[i]}</td><td>${x.v.cimp[i]}</td><td>${x.v.cfut[i]}</td><td>${x.v.infp[i]}</td></tr>`).join("") + `</table>`;
  const comunes = VERBOS.filter((x) => x.nivel === "A1");
  const temasB1 = [
    { id: "b1-verbos-cpres", titulo: "Presente do conjuntivo: tabla de verbos",
      html: `<p>Formas precedidas de <i>que</i>: <i>que eu fale, que tu fales…</i></p>` + tablaPersonas(todos, "cpres") },
    { id: "b1-verbos-cimp", titulo: "Imperfeito do conjuntivo: tabla de verbos",
      html: `<p>Se forma desde la 3.ª plural del perfeito simples (<i>fizeram → fizesse</i>).</p>` + tablaPersonas(comunes, "cimp") },
    { id: "b1-verbos-cfut", titulo: "Futuro do conjuntivo: tabla de verbos",
      html: `<p>Tras <i>se, quando, enquanto, assim que, quem, onde, como…</i> con valor de futuro.</p>` + tablaPersonas(comunes, "cfut") },
    { id: "b1-verbos-infp", titulo: "Infinitivo pessoal y mais-que-perfeito",
      html: `<p>El infinitivo pessoal es regular en todos los verbos.</p><h4>Infinitivo pessoal</h4>` + tablaPersonas(comunes.slice(0, 20), "infp") +
        `<h4>Mais-que-perfeito composto (ter en imperfeito + particípio)</h4>` + tablaPersonas(comunes.slice(0, 20), "mqp") },
    { id: "b1-verbos-fichas", titulo: "Fichas de verbos irregulares (tiempos de B1)",
      html: `<p>Los tiempos de conjuntivo y el infinitivo pessoal de los verbos irregulares más importantes.</p>` + irregulares.slice(0, 22).map(fichaB1).join("") }
  ];

  const A = window.APUNTES || {};
  if (A.A1) A.A1.bloques.push({ id: "verbos", titulo: "Verbos conjugados", temas: temasA1 });
  if (A.A2) A.A2.bloques.push({ id: "verbos", titulo: "Verbos conjugados", temas: temasA2 });
  if (A.B1) A.B1.bloques.push({ id: "verbos", titulo: "Verbos conjugados", temas: temasB1 });
})();
