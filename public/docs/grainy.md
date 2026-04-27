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

## Supporting data

- direction presets come from `assets/data/directionOptions.js`
- available color classes are derived from `assets/data/tailwindColors.js`
- page logic lives in `pages/grainy.vue`
