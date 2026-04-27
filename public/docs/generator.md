---
title: Gradient Generator
description: Documentation for the standard Tailwind CSS gradient generator route.
---

# Gradient Generator

The `/generator` page is the standard custom gradient tool in Hypercolor. It lets users build a Tailwind CSS gradient by combining a direction preset with three color stops.

## Main controls

- one direction selector
- one `from` color selector
- one `via` color selector
- one `to` color selector
- a randomize action

## How it works

The page assembles the active gradient from:

- a direction class chosen from the shared direction options
- a `from-*` Tailwind utility
- a `via-*` Tailwind utility
- a `to-*` Tailwind utility

If the user randomizes the gradient, the page picks a new direction and new colors from the available option sets.

## Preview behavior

The current combination is rendered through `GeneratorPreview`. The route also includes a second preview panel with editable sample text so users can judge legibility against both light and dark surfaces.

## Export behavior

This route exposes the full standard export set:

- copy Tailwind classes
- copy CSS background output
- download the gradient as an image

## Supporting data

- direction presets come from `assets/data/directionOptions.js`
- available Tailwind gradient colors are built from `assets/data/tailwindColors.js`
- page logic lives in `pages/generator.vue`
