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

## Data source

The route is powered by `assets/data/gradientsFlag.js`, where each item provides:

- a display name
- a Tailwind-compatible gradient string

## Supporting files

- route logic lives in `pages/flags.vue`
- the grid renderer lives in `components/GradientGrid.vue`
- individual card behavior lives in `components/GradientCard.vue`
