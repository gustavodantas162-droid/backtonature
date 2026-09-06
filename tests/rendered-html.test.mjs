import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const checkout = "https://pay.cakto.com.br/36xkx9j_1059298";

test("connects every sales CTA to the approved Cakto checkout", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, new RegExp(`const CHECKOUT_HREF = "${checkout}"`));
  assert.match(page, /href=\{CHECKOUT_HREF\}/);
  assert.doesNotMatch(page, /36xoasa_1070318|checkout em breve/i);
});

test("positions the 21-day challenge as a one-time entry offer", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, /Reconstrua sua rotina de alimentação em/);
  assert.match(page, /PLANO SELVA • DESAFIO DE 21 DIAS/);
  assert.match(page, /pagamento único de R\$ 47,00/i);
  assert.doesNotMatch(page, /R\$ 47,90 por mês|ASSINATURA MENSAL|Condição de fundador/i);
});

test("shows the complete journey and real member-area components", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, /Jornada diária de 21 dias/);
  assert.match(page, /23 páginas na área de membros/);
  assert.match(page, /Lista de compras/);
  assert.match(page, /Modelos de refeições/);
  assert.match(page, /Plano Selva completo/);
  assert.match(page, /Comunidade da Selva/);
});

test("uses Ryan's story transparently instead of fabricated testimonials", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, /O desafio organiza, em 21 dias, os princípios que Ryan Stevan aplicou/);
  assert.match(page, /não uma garantia de resultado individual/i);
  assert.doesNotMatch(page, /depoimentos reais|alunos transformados|mais de \d+ pessoas/i);
});

test("uses the new Plano Selva 21 Dias product cover", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, /plano-selva-21-dias-cover\.png/);
  assert.match(page, /Capa do Plano Selva 21 Dias/);
});

test("keeps every FAQ answer inside accessible accordion markup", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, /Esta compra é um pagamento único de R\$ 47,00/);
  assert.match(page, /sem cobrança automática nesta compra/);
  assert.match(page, /aria-controls=\{`faq-answer-\$\{index\}`\}/);
  assert.match(page, /hidden=\{!isOpen\}/);
});

test("keeps the jungle atmosphere and excludes a floating mobile CTA", async () => {
  const [page, css] = await Promise.all([readFile(new URL("../app/page.tsx", import.meta.url), "utf8"), readFile(new URL("../app/globals.css", import.meta.url), "utf8")]);
  assert.match(css, /jungle-atmosphere\.png/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.doesNotMatch(page, /mobile-cta/);
  assert.doesNotMatch(css, /mobile-cta/);
});
