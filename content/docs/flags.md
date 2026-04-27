---
title: World Flags
description: Documentation for the flag-inspired gradient gallery route.
---

# World Flags

The `/flags` page is a gallery of country and regional flag-inspired gradients. It is a browse-first route rather than a generator.

## What the page shows

- a banner introducing the collection
- a grid of preset flag-based gradient cards
- one card per entry in the flag gradient dataset

## How it differs from the homepage

The homepage exposes direction controls on its curated cards. The flags page does not. It presents fixed flag-inspired compositions and focuses on reference browsing instead of remixing direction presets.

## Export behavior

Each card still includes the standard save actions:

- copy Tailwind classes
- copy CSS
- download an image

## Key numbers

- 38 flag-inspired palettes are available on this route
- 3 export actions are available on every card
- 1 gallery route keeps the experience focused on browsing instead of editing

## Frequently asked questions

### How many flag-inspired palettes are available?

The flag gallery currently includes 38 palettes based on country and regional flag color combinations.

### Can users customize the flag gradients on this route?

No. The flags route is optimized for browsing preset compositions rather than editing them.

### What can users export from a flag card?

Users can copy the Tailwind class string, copy the CSS output, and download the visual as an image from each card.

## Data source

The route is powered by `assets/data/gradientsFlag.js`, where each item provides:

- a display name
- a Tailwind-compatible gradient string

## Supporting files

- route logic lives in `pages/flags.vue`
- the grid renderer lives in `components/GradientGrid.vue`
- individual card behavior lives in `components/GradientCard.vue`
