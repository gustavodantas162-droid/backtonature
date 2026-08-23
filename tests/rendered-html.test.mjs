import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const checkout = "https://pay.cakto.com.br/36xkx9j_1059298";

test("keeps every sales CTA connected to the Cakto checkout", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, new RegExp(`const CHECKOUT_HREF = "${checkout}"`));
  assert.match(page, /href=\{CHECKOUT_HREF\}/);
  assert.doesNotMatch(page, /checkout em breve|href="#oferta"/i);
});

test("uses the restrained Plano Selva visual treatment", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Tudo o que você recebe/);
  assert.match(page, /R\$ 47,90/);
  assert.doesNotMatch(page, /Sua IA personalizada|instant-cta|Novos detalhes/i);
  assert.doesNotMatch(css, /jungle-depth|jungle-light|perspective:|translateZ|backdrop-filter/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});
