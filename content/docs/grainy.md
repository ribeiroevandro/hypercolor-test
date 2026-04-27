---
title: Grainy Gradient Generator
description: Documentation for the grainy gradient generator route.
---

# Grainy Gradient Generator

The `/grainy` page uses the same core selection model as the standard generator, but presents the result as a textured background with a grain overlay.

## Main controls

- one direction selector
- one `from` color selector
- one `via` color selector
- one `to` color selector
- a randomize action

## How it differs from the standard generator

The grainy route still builds its gradient from Tailwind direction and color utilities, but the preview is rendered through `GrainyPreview`, which applies a noise texture over the selected gradient.

This makes the page more suitable for wallpaper-like or atmospheric backgrounds than for plain utility output.

## Preview behavior

- the gradient fills a large rounded canvas
- a noise overlay sits above the gradient
- randomization updates both the underlying gradient and the textured result

## Export behavior

This route currently supports:

- download an image

Unlike the standard generator, it does not expose Tailwind class copy or CSS copy actions in the visible controls.

## Key numbers

- 3 color stops define the underlying gradient
- 1 grain overlay adds the textured effect
- 201 Tailwind color options are available across the selectors

## Step 1: Choose the gradient direction

Select a direction preset first so the grain effect sits over the exact flow you want.

## Step 2: Mix the three gradient colors

Pick the from, via, and to colors to create the underlying blend that will show through the texture.

## Step 3: Export the textured result

Use the preview to judge the atmosphere and then download the grainy gradient as an image.

## Frequently asked questions

### How is the grainy generator different from the standard generator?

The grainy generator uses the same basic gradient controls but adds a visible textured overlay for a more atmospheric result.

### Can users still control the underlying colors?

Yes. The grain effect sits above the same three-stop Tailwind gradient model, so direction and color choices still control the final look.

### What export option is available on the grainy route?

The grainy route is optimized for image download so users can create wallpaper-style assets quickly.

## Supporting data

- direction presets come from `assets/data/directionOptions.js`
- available color classes are derived from `assets/data/tailwindColors.js`
- page logic lives in `pages/grainy.vue`
