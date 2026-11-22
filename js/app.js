(function () {
  "use strict";

  const NIVELES = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const DATOS = window.APUNTES || {};
  const CLAVE = "apuntesPT.v1";

  const $ = (s) => document.querySelector(s);
  const norm = (t) => (t || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  /* ── Estado persistente ── */
  let estado = { nivel: "A1", sel: [], portada: true, indice: true, salto: false };
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE) || "null");
    if (g) estado = Object.assign(estado, g);
  } catch (e) { /* sin almacenamiento */ }
  if (!DATOS[estado.nivel]) estado.nivel = NIVELES.find((n) => DATOS[n]) || "A1";
  const sel = new Set(estado.sel);

  function guardar() {
    estado.sel = [...sel];
    try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (e) { /* ignorar */ }
  }

  /* Índice rápido de temas */
  const TEMAS = {};
  NIVELES.forEach((n) => {
    if (!DATOS[n]) return;
    DATOS[n].bloques.forEach((b) => b.temas.forEach((t) => {
      TEMAS[t.id] = { nivel: n, bloque: b, tema: t, texto: norm(t.titulo + " " + t.html.replace(/<[^>]+>/g, " ")) };
    }));
  });
  // limpiar ids que ya no existan
  [...sel].forEach((id) => { if (!TEMAS[id]) sel.delete(id); });

  const cuentaNivel = (n) => [...sel].filter((id) => TEMAS[id].nivel === n).length;

  /* ── Pintar niveles ── */
  function pintarNiveles() {
    const nav = $("#niveles");
    nav.innerHTML = "";
    NIVELES.forEach((n) => {
      const b = document.createElement("button");
      b.className = "nivel" + (n === estado.nivel ? " activo" : "");
      b.disabled = !DATOS[n];
      b.title = DATOS[n] ? DATOS[n].nombre : "Próximamente";
      const c = cuentaNivel(n);
      b.innerHTML = n + (c ? `<span class="cuenta">${c}</span>` : "");
      b.addEventListener("click", () => { estado.nivel = n; $("#buscar").value = ""; guardar(); pintarTodo(); });
      nav.appendChild(b);
    });
    const d = DATOS[estado.nivel];
    $("#descNivel").innerHTML = d ? `<b>${d.nivel} · ${d.nombre}.</b> ${d.descripcion}` : "";
  }

  /* ── Pintar bloques y temas ── */
  function pintarBloques() {
    const cont = $("#bloques");
    cont.innerHTML = "";
    const d = DATOS[estado.nivel];
    if (!d) return;
    const q = norm($("#buscar").value.trim());
    let hay = false;

    d.bloques.forEach((b) => {
      const temas = b.temas.filter((t) => !q || TEMAS[t.id].texto.includes(q));
      if (!temas.length) return;
      hay = true;
      const sec = document.createElement("section");
      sec.className = "bloque";

      const cab = document.createElement("div");
      cab.className = "bloque-cab";
      const chkB = document.createElement("input");
      chkB.type = "checkbox";
      chkB.setAttribute("aria-label", "Seleccionar todo el bloque " + b.titulo);
      const nSel = temas.filter((t) => sel.has(t.id)).length;
      chkB.checked = nSel === temas.length;
      chkB.indeterminate = nSel > 0 && nSel < temas.length;
      chkB.addEventListener("change", () => {
        temas.forEach((t) => chkB.checked ? sel.add(t.id) : sel.delete(t.id));
        guardar(); pintarTodo();
      });
      cab.appendChild(chkB);
      cab.insertAdjacentHTML("beforeend", `<h2>${b.titulo}</h2><span class="n">${nSel}/${temas.length}</span>`);
      sec.appendChild(cab);

      temas.forEach((t) => {
        const fila = document.createElement("div");
        fila.className = "tema";
        const id = "chk-" + t.id;
        fila.innerHTML = `<input type="checkbox" id="${id}" ${sel.has(t.id) ? "checked" : ""}><label for="${id}">${t.titulo}</label><button class="ver" type="button">Ver</button>`;
        fila.querySelector("input").addEventListener("change", (e) => {
          e.target.checked ? sel.add(t.id) : sel.delete(t.id);
          guardar(); pintarTodo();
        });
        fila.querySelector(".ver").addEventListener("click", () => abrirLector(t));
        sec.appendChild(fila);
      });
      cont.appendChild(sec);
    });

    if (!hay) cont.innerHTML = `<div class="bloque vacio">No hay temas que coincidan con la búsqueda.</div>`;
  }

  function pintarTotal() {
    $("#totalSel").textContent = sel.size;
    const ok = vista === "ejercicios" ? !!lote : sel.size > 0;
    $("#btnPdf").disabled = !ok;
    $("#btnPdf").style.opacity = ok ? 1 : 0.5;
    $("#btnPdf").textContent = vista === "ejercicios" ? "Descargar ejercicios" : "Descargar PDF";
    document.querySelector(".barra").style.display = (vista === "traductor" || vista === "examenes") ? "none" : "";
    pintarInfoEj();
  }

  function pintarTodo() { pintarNiveles(); pintarBloques(); pintarTotal(); }

  /* ── Lector ── */
  function envolverTablas(el) {
    el.querySelectorAll("table").forEach((tb) => {
      if (tb.parentElement.classList.contains("tabla-scroll")) return;
      const w = document.createElement("div");
      w.className = "tabla-scroll";
      tb.parentNode.insertBefore(w, tb);
      w.appendChild(tb);
    });
  }
  function abrirLector(t) {
    $("#lectorTitulo").textContent = t.titulo;
    const c = $("#lectorCuerpo");
    c.innerHTML = t.html;
    envolverTablas(c);
    c.scrollTop = 0;
    abrir("#modalLector");
  }
  function abrir(s) { $(s).classList.add("abierto"); }
  function cerrar(m) { m.classList.remove("abierto"); }
  document.querySelectorAll(".modal").forEach((m) => {
    m.addEventListener("click", (e) => { if (e.target === m || e.target.hasAttribute("data-cerrar")) cerrar(m); });
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") document.querySelectorAll(".modal.abierto").forEach(cerrar); });

  /* ── Herramientas ── */
  $("#buscar").addEventListener("input", pintarBloques);
  $("#btnTodo").addEventListener("click", () => {
    const q = norm($("#buscar").value.trim());
    DATOS[estado.nivel].bloques.forEach((b) => b.temas.forEach((t) => { if (!q || TEMAS[t.id].texto.includes(q)) sel.add(t.id); }));
    guardar(); pintarTodo();
  });
  $("#btnNada").addEventListener("click", () => {
    [...sel].forEach((id) => { if (TEMAS[id].nivel === estado.nivel) sel.delete(id); });
    guardar(); pintarTodo();
  });
  $("#btnLimpiar").addEventListener("click", () => {
    if (!sel.size) return;
    sel.clear(); guardar(); pintarTodo();
  });

  /* ── PDF ── */
  const nivelesSel = () => NIVELES.filter((n) => cuentaNivel(n) > 0);

  $("#btnPdf").addEventListener("click", () => {
    if (!sel.size) return;
    if (vista === "ejercicios") { imprimirEjercicios(); return; }
    $("#optPortada").checked = estado.portada;
    $("#optIndice").checked = estado.indice;
    $("#optSalto").checked = estado.salto;
    $("#resumenPdf").innerHTML = `Vas a generar <b>${sel.size}</b> tema${sel.size > 1 ? "s" : ""} de ${nivelesSel().join(", ")}.`;
    abrir("#modalPdf");
  });

  function construirImpresion() {
    const imp = $("#impresion");
    const nivs = nivelesSel();
    const fecha = new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
    let html = "";

    if (estado.portada) {
      html += `<section class="portada">
        <img src="icons/icon-512.png" alt="" style="width:38mm;height:38mm;border-radius:6mm">
        <div class="bandas"></div>
        <h1>Apuntes de Portugués</h1>
        <h2>Nivel ${nivs.join(" · ")} · Escuela Oficial de Idiomas</h2>
        <p>${sel.size} temas · Portugués europeo<br>${fecha}</p>
      </section>`;
    }

    const orden = [];
    nivs.forEach((n) => DATOS[n].bloques.forEach((b) => {
      const ts = b.temas.filter((t) => sel.has(t.id));
      if (ts.length) orden.push({ n, b, ts });
    }));

    if (estado.indice) {
      html += `<section class="indice"><h2>Índice</h2>`;
      let num = 0;
      orden.forEach(({ n, b, ts }) => {
        html += `<h3>${n} · ${b.titulo}</h3><ol start="${num + 1}">` + ts.map((t) => `<li>${t.titulo}</li>`).join("") + `</ol>`;
        num += ts.length;
      });
      html += `</section>`;
    }

    let primero = true, num = 0;
    orden.forEach(({ n, b, ts }) => ts.forEach((t) => {
      num++;
      const salto = estado.salto && !primero;
      html += `<article class="tema-imp${salto ? " salto" : ""}">
        <div class="cab-imp"><h2>${estado.indice ? num + ". " : ""}${t.titulo}</h2><span>${n} · ${b.titulo}</span></div>
        <div class="apunte">${t.html}</div>
      </article>`;
      primero = false;
    }));
    imp.innerHTML = html;
    return nivs;
  }

  $("#btnGenerar").addEventListener("click", () => {
    estado.portada = $("#optPortada").checked;
    estado.indice = $("#optIndice").checked;
    estado.salto = $("#optSalto").checked;
    guardar();
    const nivs = construirImpresion();
    cerrar($("#modalPdf"));
    const tituloAnt = document.title;
    document.title = "Apuntes Portugues " + nivs.join("-");
    const restaurar = () => { document.title = tituloAnt; window.removeEventListener("afterprint", restaurar); };
    window.addEventListener("afterprint", restaurar);
    // pequeña espera para que carguen imágenes de la portada
    setTimeout(() => window.print(), 250);
  });


  /* ═════════════ Pestañas ═════════════ */
  let vista = "apuntes";
  let lote = null; // ejercicios generados
  document.querySelectorAll("#pestanas button").forEach((b) => b.addEventListener("click", () => {
    vista = b.dataset.vista;
    document.querySelectorAll("#pestanas button").forEach((x) => x.classList.toggle("activa", x === b));
    document.querySelectorAll(".vista").forEach((v) => v.classList.toggle("activa", v.id === "vista-" + vista));
    pintarTotal();
    window.scrollTo(0, 0);
    if (vista === "traductor") setTimeout(() => $("#trTexto").focus(), 50);
  }));

  /* ═════════════ Ejercicios ═════════════ */
  const EJ = window.EJERCICIOS || {};
  const GL = window.GLOSARIO || [];
  const VB = window.VERBOS || { lista: [], pessoas: [], tiempos: {} };
  const barajar = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const azar = (a) => a[Math.floor(Math.random() * a.length)];

  // Qué verbos y tiempos se practican en cada tema de verbos
  const PLAN_VERBOS = {
    "a1-verbos-reg": { f: (x) => x.nivel === "A1" && !x.irregular, t: ["pres"] },
    "a1-verbos-irr": { f: (x) => x.nivel === "A1" && x.irregular, t: ["pres"] },
    "a2-verbos-pps": { f: () => true, t: ["pps"] },
    "a2-verbos-imp": { f: (x) => x.irregular || x.nivel === "A1", t: ["imp"] },
    "a2-verbos-futcond": { f: (x) => x.nivel === "A1", t: ["fut", "cond"] },
    "a2-verbos-impv": { f: () => true, t: ["impv"] },
    "a2-verbos-part": { f: () => true, t: ["part"] },
    "a2-verbos-fichas": { f: (x) => x.irregular, t: ["pres", "pps", "imp", "fut", "cond"] }
  };
  const IMPV_P = ["tu", "você", "vocês"];

  function generarTema(id, n) {
    if (EJ[id]) {
      const its = barajar(EJ[id].items).slice(0, n);
      return { inst: EJ[id].inst, items: its };
    }
    const pv = PLAN_VERBOS[id];
    if (pv) {
      const pool = VB.lista.filter(pv.f);
      const usados = new Set(), items = [];
      for (let k = 0; k < n * 6 && items.length < n; k++) {
        const v = azar(pool), t = azar(pv.t);
        let p, s;
        if (t === "part") { p = `${v.inf} → particípio: ___`; s = v.v.part; }
        else if (t === "impv") { const i = Math.floor(Math.random() * 3); p = `(${IMPV_P[i]}) ${v.inf} → imperativo: ___`; s = v.v.impv[i]; }
        else { const i = Math.floor(Math.random() * 5); p = `${VB.pessoas[i]} · ${v.inf} (${VB.tiempos[t]}) → ___`; s = v.v[t][i]; }
        if (usados.has(p)) continue;
        usados.add(p); items.push({ p, s });
      }
      return { inst: "Conjuga o verbo na pessoa e no tempo indicados.", items };
    }
    if (id === "a1-verbos-vocab" || id === "a2-verbos-vocab") {
      const pool = VB.lista.filter((x) => x.nivel === (id.startsWith("a1") ? "A1" : "A2"));
      return { inst: "Traduz o verbo para português (infinitivo).", items: barajar(pool).slice(0, n).map((v) => ({ p: `${v.es} → ___`, s: v.inf })) };
    }
    const gl = GL.filter((g) => g.tema === id);
    if (gl.length) {
      const its = barajar(gl).slice(0, n).map((g, i) => i % 2 === 0
        ? { p: `<i>${g.es}</i> → ___`, s: g.pt }
        : { p: `<i>${g.pt}</i> → ___ (em espanhol)`, s: g.es });
      return { inst: "Traduz (espanhol ↔ português de Portugal).", items: its };
    }
    return null;
  }

  function ordenSel() {
    const out = [];
    NIVELES.forEach((n) => { if (DATOS[n]) DATOS[n].bloques.forEach((b) => b.temas.forEach((t) => { if (sel.has(t.id)) out.push({ n, b, t }); })); });
    return out;
  }

  function pintarInfoEj() {
    const k = sel.size;
    $("#ejInfo").innerHTML = k
      ? `Se crearán ejercicios de los <b>${k}</b> tema${k > 1 ? "s" : ""} que tienes marcados en <b>Apuntes</b> (${nivelesSel().join(", ")}).`
      : `Primero marca en la pestaña <b>Apuntes</b> los temas que quieres repasar.`;
    $("#btnEjGenerar").disabled = !k;
    $("#btnEjGenerar").style.opacity = k ? 1 : 0.5;
  }

  const hueco = (p) => p.includes("___") ? p.replace(/___/g, '<span class="hueco"></span>') : p + ' <span class="hueco"></span>';

  function htmlLote(conSol) {
    let num = 0, h = "";
    lote.secciones.forEach((sec, si) => {
      h += `<div class="ej-sec"><h3><span class="ej-num">${si + 1}</span> ${sec.titulo} <small>${sec.nivel}</small></h3><p class="ej-inst">${sec.inst}</p><ol start="${num + 1}">`;
      sec.items.forEach((it) => { h += `<li>${hueco(it.p)}${conSol ? ` <span class="sol">${it.s}</span>` : ""}</li>`; });
      h += `</ol></div>`;
      num += sec.items.length;
    });
    return h;
  }

  let verSol = false;
  function pintarLote() {
    $("#ejPreview").innerHTML = lote ? `<div class="tarjeta ejercicios">${htmlLote(verSol)}</div>` : "";
    $("#btnEjSol").disabled = !lote;
    $("#btnEjSol").textContent = verSol ? "Ocultar soluciones" : "Ver soluciones";
  }

  $("#btnEjGenerar").addEventListener("click", () => {
    const n = +$("#ejNum").value;
    const secciones = [];
    ordenSel().forEach(({ n: niv, t }) => {
      const g = generarTema(t.id, n);
      if (g && g.items.length) secciones.push({ titulo: t.titulo, nivel: niv, inst: g.inst, items: g.items });
    });
    lote = { secciones: $("#ejMezclar").checked ? barajar(secciones) : secciones, niveles: nivelesSel() };
    verSol = false;
    $("#btnEjGenerar").textContent = "Otra tanda";
    pintarLote(); pintarTotal();
  });
  $("#btnEjSol").addEventListener("click", () => { verSol = !verSol; pintarLote(); });

  function imprimirEjercicios() {
    if (!lote) return;
    const total = lote.secciones.reduce((a, s) => a + s.items.length, 0);
    let num = 0, sol = "";
    lote.secciones.forEach((sec, si) => {
      sol += `<div class="sol-sec"><b>${si + 1}. ${sec.titulo}</b><ol start="${num + 1}">` + sec.items.map((it) => `<li>${it.s}</li>`).join("") + `</ol></div>`;
      num += sec.items.length;
    });
    $("#impresion").innerHTML = `
      <section class="hoja-ej">
        <div class="cab-ej"><div><h1>Exercícios de revisão</h1><p>Português europeu · Nível ${lote.niveles.join(" · ")} · ${total} perguntas</p></div><div class="fecha-ej">Data: ____________</div></div>
        <div class="ejercicios">${htmlLote(false)}</div>
      </section>
      <section class="hoja-sol"><h1>Soluções</h1><div class="cols-sol">${sol}</div></section>`;
    const tituloAnt = document.title;
    document.title = "Exercicios Portugues " + lote.niveles.join("-");
    const restaurar = () => { document.title = tituloAnt; window.removeEventListener("afterprint", restaurar); };
    window.addEventListener("afterprint", restaurar);
    setTimeout(() => window.print(), 150);
  }

  /* ═════════════ Traductor ═════════════ */
  let esApt = true; // dirección español → portugués
  const DIC = GL.map((g) => ({ es: g.es, pt: g.pt, nota: g.nota, tema: g.tema }))
    .concat(VB.lista.map((v) => ({ es: v.es, pt: v.inf, nota: "verbo", tema: "" })));
  DIC.forEach((d) => { d.nes = norm(d.es); d.npt = norm(d.pt); });
  const tituloTema = (id) => (TEMAS[id] ? TEMAS[id].tema.titulo : "");

  function buscarDic(q) {
    const nq = norm(q.trim());
    if (nq.length < 2) return [];
    const res = [];
    DIC.forEach((d) => {
      const src = esApt ? d.nes : d.npt;
      const partes = src.split(/\s*[\/;,]\s*|\s+/);
      let sc = 0;
      if (src === nq || src.replace(/^(el|la|los|las|o|a|os|as) /, "") === nq) sc = 4;
      else if (src.split(/\s*[\/;]\s*/).some((x) => x === nq || x.replace(/^(el|la|los|las|o|a|os|as) /, "") === nq)) sc = 3.5;
      else if (src.startsWith(nq)) sc = 3;
      else if (partes.includes(nq)) sc = 2.5;
      else if (src.includes(nq)) sc = 1;
      if (sc) res.push({ d, sc });
    });
    return res.sort((a, b) => b.sc - a.sc || a.d.es.length - b.d.es.length).slice(0, 25).map((r) => r.d);
  }

  function pintarTraductor() {
    const q = $("#trTexto").value;
    const r = buscarDic(q);
    $("#trOnline").innerHTML = "";
    if (!q.trim()) { $("#trResultados").innerHTML = `<p class="peq gris">Busca en el glosario de la app (${DIC.length} palabras y expresiones de A1–A2, todas en portugués de Portugal).</p>`; return; }
    if (!r.length) { $("#trResultados").innerHTML = `<p class="peq gris">No está en el glosario. Prueba con la traducción por Internet.</p>`; return; }
    $("#trResultados").innerHTML = r.map((d) => `
      <div class="tr-item">
        <div class="tr-dest">${esApt ? d.pt : d.es}</div>
        <div class="tr-orig">${esApt ? d.es : d.pt}</div>
        ${d.nota || d.tema ? `<div class="tr-nota">${d.nota ? "⚠️ " + d.nota : ""}${d.nota && d.tema ? " · " : ""}${d.tema ? "📖 " + tituloTema(d.tema) : ""}</div>` : ""}
      </div>`).join("");
  }

  $("#trTexto").addEventListener("input", pintarTraductor);
  $("#btnSwap").addEventListener("click", () => {
    esApt = !esApt;
    $("#dirOrigen").textContent = esApt ? "Español" : "Portugués (PT)";
    $("#dirDestino").textContent = esApt ? "Portugués (PT)" : "Español";
    pintarTraductor();

  /* ═════════════ Exámenes oficiales ═════════════ */
  const EXA = (window.EXAMENES && window.EXAMENES.grupos) || [];
  const ICONO = { pdf: "📄", audio: "🎧", sol: "✅", web: "🔗" };
  let exNivel = "A2";
  function pintarExamenes() {
    const niv = ["Todos", "A2", "B1", "B2", "C1"];
    $("#exNiveles").innerHTML = niv.map((n) => `<button class="nivel${n === exNivel ? " activo" : ""}" data-n="${n}">${n}</button>`).join("");
    $("#exNiveles").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => { exNivel = b.dataset.n; pintarExamenes(); }));
    $("#exLista").innerHTML = EXA.map((g) => {
      const its = g.items.filter((i) => exNivel === "Todos" || i.nivel === exNivel || i.nivel === "Todos");
      if (!its.length) return "";
      return `<section class="bloque ex-grupo"><div class="bloque-cab"><h2>${g.titulo}</h2></div><p class="peq ex-desc">${g.desc}</p>` +
        its.map((i) => `<a class="ex-item" href="${i.url}" target="_blank" rel="noopener"><span class="ex-ico">${ICONO[i.tipo] || "🔗"}</span><span class="ex-nom">${i.nombre}</span><span class="ex-niv">${i.nivel === "Todos" ? "" : i.nivel}</span></a>`).join("") +
        `</section>`;
    }).join("") || `<div class="bloque vacio">No hay modelos para este nivel.</div>`;
  }
  pintarExamenes();
  });
  $("#btnOnline").addEventListener("click", async () => {
    const q = $("#trTexto").value.trim();
    const out = $("#trOnline");
    if (!q) { out.innerHTML = `<p class="peq gris">Escribe primero una palabra o frase.</p>`; return; }
    if (!navigator.onLine) { out.innerHTML = `<p class="peq gris">Sin conexión: la traducción por Internet no está disponible.</p>`; return; }
    out.innerHTML = `<p class="peq gris">Traduciendo…</p>`;
    try {
      const par = esApt ? "es|pt-PT" : "pt-PT|es";
      const r = await fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(q) + "&langpair=" + encodeURIComponent(par));
      const j = await r.json();
      const t = j && j.responseData && j.responseData.translatedText;
      if (!t) throw new Error("sin resultado");
      const div = document.createElement("div");
      div.className = "tr-item online";
      div.innerHTML = `<div class="tr-dest"></div><div class="tr-nota">Traducción automática (MyMemory). Puede contener formas de Brasil: compruébala con los apuntes.</div>`;
      div.querySelector(".tr-dest").textContent = t;
      out.innerHTML = ""; out.appendChild(div);
    } catch (e) {
      out.innerHTML = `<p class="peq gris">No se ha podido traducir ahora mismo. Inténtalo más tarde.</p>`;
    }
  });
  pintarTraductor();

  /* ═════════════ Exámenes oficiales ═════════════ */
  const EXA = (window.EXAMENES && window.EXAMENES.grupos) || [];
  const ICONO = { pdf: "📄", audio: "🎧", sol: "✅", web: "🔗" };
  let exNivel = "A2";
  function pintarExamenes() {
    const niv = ["Todos", "A2", "B1", "B2", "C1"];
    $("#exNiveles").innerHTML = niv.map((n) => `<button class="nivel${n === exNivel ? " activo" : ""}" data-n="${n}">${n}</button>`).join("");
    $("#exNiveles").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => { exNivel = b.dataset.n; pintarExamenes(); }));
    $("#exLista").innerHTML = EXA.map((g) => {
      const its = g.items.filter((i) => exNivel === "Todos" || i.nivel === exNivel || i.nivel === "Todos");
      if (!its.length) return "";
      return `<section class="bloque ex-grupo"><div class="bloque-cab"><h2>${g.titulo}</h2></div><p class="peq ex-desc">${g.desc}</p>` +
        its.map((i) => `<a class="ex-item" href="${i.url}" target="_blank" rel="noopener"><span class="ex-ico">${ICONO[i.tipo] || "🔗"}</span><span class="ex-nom">${i.nombre}</span><span class="ex-niv">${i.nivel === "Todos" ? "" : i.nivel}</span></a>`).join("") +
        `</section>`;
    }).join("") || `<div class="bloque vacio">No hay modelos para este nivel.</div>`;
  }
  pintarExamenes();

  pintarTodo();

  /* ── PWA: offline + aviso de nueva versión ── */
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    let recargando = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (recargando) return;
      recargando = true;
      location.reload();
    });
    navigator.serviceWorker.register("sw.js").then((reg) => {
      const avisar = (w) => {
        $("#aviso").classList.add("visible");
        $("#btnActualizar").onclick = () => w.postMessage("actualizar");
      };
      if (reg.waiting && navigator.serviceWorker.controller) avisar(reg.waiting);
      reg.addEventListener("updatefound", () => {
        const nw = reg.installing;
        nw.addEventListener("statechange", () => {
          if (nw.state === "installed" && navigator.serviceWorker.controller) avisar(nw);
        });
      });
      // comprobar actualizaciones al volver a la app y cada hora
      document.addEventListener("visibilitychange", () => { if (!document.hidden) reg.update(); });
      setInterval(() => reg.update(), 60 * 60 * 1000);
    }).catch(() => { /* sin SW */ });
  }
})();
