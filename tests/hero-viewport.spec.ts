import { expect, test, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const OUTPUT_DIR = path.join("tests", "screenshots", "hero-viewport");

const VIEWPORTS = [
  { name: "iphone-se", width: 375, height: 667 },
  { name: "iphone-14", width: 390, height: 844 },
  { name: "iphone-14-landscape", width: 844, height: 390 },
  { name: "ipad", width: 768, height: 1024 },
  { name: "desktop-1280x720", width: 1280, height: 720 },
  { name: "desktop-1440x900", width: 1440, height: 900 },
] as const;

const SAFARI_TOOLBAR_HEIGHT = 48;

async function injectSafariToolbar(page: Page) {
  await page.evaluate((toolbarHeight) => {
    const existing = document.getElementById("playwright-safari-toolbar");
    if (existing) {
      existing.remove();
    }

    const toolbar = document.createElement("div");
    toolbar.id = "playwright-safari-toolbar";
    toolbar.setAttribute("aria-hidden", "true");
    toolbar.style.cssText = [
      "position: fixed",
      "left: 0",
      "right: 0",
      "bottom: 0",
      "height: " + toolbarHeight + "px",
      "background: rgba(28, 28, 30, 0.92)",
      "border-top: 1px solid rgba(255, 255, 255, 0.12)",
      "z-index: 99999",
      "pointer-events: none",
    ].join(";");
    document.body.appendChild(toolbar);
  }, SAFARI_TOOLBAR_HEIGHT);
}

async function assertHeroVisibleAboveToolbar(page: Page) {
  const hero = page.locator("#hero");
  const title = hero.locator("h1");
  const subtitle = hero.locator("p").first();
  const linkedIn = hero.locator('a[aria-label="LinkedIn"]');

  await expect(title).toBeVisible();
  await expect(subtitle).toBeVisible();
  await expect(linkedIn).toBeVisible();

  const titleBox = await title.boundingBox();
  const subtitleBox = await subtitle.boundingBox();
  const linkedInBox = await linkedIn.boundingBox();
  const viewport = page.viewportSize();

  expect(titleBox).not.toBeNull();
  expect(subtitleBox).not.toBeNull();
  expect(linkedInBox).not.toBeNull();
  expect(viewport).not.toBeNull();

  const visibleBottom = viewport!.height - SAFARI_TOOLBAR_HEIGHT;

  expect(titleBox!.y + titleBox!.height).toBeLessThanOrEqual(visibleBottom + 1);
  expect(linkedInBox!.y + linkedInBox!.height).toBeLessThanOrEqual(
    visibleBottom + 1,
  );
  expect(subtitleBox!.y + subtitleBox!.height).toBeLessThanOrEqual(
    visibleBottom + 1,
  );
}

async function assertArtworkCenteredInTopTwoThirds(page: Page) {
  const artwork = page.locator("#artwork");
  const artworkImage = artwork.locator("img").first();
  const caption = artwork.locator("img + div");

  await expect(artworkImage).toBeVisible();
  await expect(caption).toBeVisible();

  const imageBox = await artworkImage.boundingBox();
  const captionBox = await caption.boundingBox();
  const viewport = page.viewportSize();

  expect(imageBox).not.toBeNull();
  expect(captionBox).not.toBeNull();
  expect(viewport).not.toBeNull();

  const topRegionBottom = (viewport!.height * 2) / 3;
  const blockTop = imageBox!.y;
  const blockBottom = captionBox!.y + captionBox!.height;
  const blockCenter = (blockTop + blockBottom) / 2;
  const topRegionCenter = topRegionBottom / 2;

  expect(blockBottom).toBeLessThanOrEqual(topRegionBottom + 2);
  expect(blockTop).toBeGreaterThan(8);
  expect(Math.abs(blockCenter - topRegionCenter)).toBeLessThan(
    viewport!.height * 0.15,
  );
}

test.beforeAll(() => {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
});

for (const viewport of VIEWPORTS) {
  test(`hero layout @ ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await injectSafariToolbar(page);

    await assertHeroVisibleAboveToolbar(page);
    await assertArtworkCenteredInTopTwoThirds(page);

    await page.screenshot({
      path: path.join(OUTPUT_DIR, `${viewport.name}.png`),
      fullPage: false,
    });
  });
}
