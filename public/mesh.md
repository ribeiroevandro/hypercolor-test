---
title: Mesh Gradient Generator
description: Documentation for the mesh gradient generator route.
---

# Mesh Gradient Generator

The `/mesh` page is the most interactive editor in Hypercolor. Instead of a simple linear, conic, or radial class combination, it builds a composed background from a base color plus multiple radial gradient stops.

## Main controls

- a background color selector
- a toggle to show or hide on-canvas stop controls
- an action to add a new stop
- a randomize action
- a per-stop editor for position, size, and color
- a remove action for each stop

## Default workflow

On mount, the page randomizes itself and creates six starting stops. Each stop stores:

- a color name
- a transparent size value
- a left position
- a top position

## Preview behavior

The mesh preview renders the generated CSS and can optionally show draggable handles. When controls are visible, users can drag stops directly on the canvas to change their position.

## Export behavior

This route supports:

- copy CSS
- download an image

It does not expose Tailwind class copying because the result is built from generated inline CSS rather than a simple utility-class string.

## Gradient model

The final background is composed from:

- one background color
- a comma-separated list of radial gradients

Each radial gradient uses the stop position and size currently stored in the editor state.

## Supporting files

- route logic lives in `pages/mesh.vue`
- draggable preview behavior lives in `components/MeshPreview.vue`
- export actions are handled by `components/ActionSave.vue`
