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

## Key numbers

- 3 color stops shape every standard gradient
- 1 direction selector controls the orientation
- 201 Tailwind color options are available across the stop pickers

## Step 1: Choose a direction preset

Start with the direction selector so the gradient flows in the exact horizontal, vertical, or diagonal direction you need.

## Step 2: Pick the from, via, and to colors

Use the three stop selectors to build a balanced gradient from the available Tailwind palette.

## Step 3: Export the result

Copy the Tailwind classes, copy the CSS background output, or download an image after the preview matches your target look.

## Frequently asked questions

### How many color stops does the standard generator use?

The standard generator uses three stops: from, via, and to.

### What can users export from the generator?

The route supports Tailwind class copy, CSS copy, and image download.

### Why is the randomize action useful?

It helps users discover strong combinations quickly when they want inspiration without manually testing every direction and color combination.

## Supporting data

- direction presets come from `assets/data/directionOptions.js`
- available Tailwind gradient colors are built from `assets/data/tailwindColors.js`
- page logic lives in `pages/generator.vue`
