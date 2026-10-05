import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("renders the portfolio landing page and primary CTA", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Seu cabelo");
  await expect(page.getByRole("link", { name: "Agendar pelo WhatsApp" })).toBeVisible();
  await expect(page.locator("#profissionais")).toContainText("Marcinha");
  await expect(page.locator("#profissionais")).toContainText("Lucy");
  await expect(page.getByRole("link", { name: "Todos os direitos reservados" })).toHaveAttribute(
    "href",
    "/direitos",
  );
});

test("opens the intellectual property page from the footer", async ({ page }) => {
  await page.goto("/direitos");

  await expect(
    page.getByRole("heading", { level: 1, name: "Direitos e propriedade intelectual" }),
  ).toBeVisible();
  const studioCta = page.getByRole("link", { name: "Entrar em contato com a KS Studio" });
  await expect(studioCta).toBeVisible();
  await expect(studioCta).toHaveAttribute("href", "https://kauanystudio.com/");
});

test("has no automatically detectable accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("keeps the mobile viewport free from horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const dimensions = await page.evaluate(() => ({
    body: document.body.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport);
});

test("keeps the rights page usable on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/direitos");

  await expect(
    page.getByRole("link", { name: "Malu Hair Studio — voltar ao início" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Entrar em contato com a KS Studio" })).toBeVisible();

  const dimensions = await page.evaluate(() => ({
    body: document.body.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport);
});
