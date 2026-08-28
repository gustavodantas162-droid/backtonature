import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const checkout = "https://pay.cakto.com.br/36xoasa_1070318";

test("keeps every sales CTA connected to the Cakto checkout", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, new RegExp(`const CHECKOUT_HREF = "${checkout}"`));
  assert.match(page, /href=\{CHECKOUT_HREF\}/);
  assert.doesNotMatch(page, /checkout em breve|href="#oferta"/i);
});

test("positions the Community as the product and the Plano Selva as a deliverable", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /COMUNIDADE DA SELVA/);
  assert.match(page, /Plano Selva completo/);
  assert.match(page, /R\$ 47,90 por mês/);
  assert.match(page, /comunidade-selva-cover\.png/);
  assert.doesNotMatch(page, /Vitalício|Acesso vitalício|OFERTA DE LANÇAMENTO|PREÇO DE LANÇAMENTO/i);
  assert.match(layout, /Comunidade da Selva \| Um grupo para despertados/);
  assert.match(layout, /comunidade-selva-cover\.png/);
  assert.doesNotMatch(css, /jungle-depth|jungle-light|perspective:|translateZ|backdrop-filter/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});
