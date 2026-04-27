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

## Key numbers

- 6 stops are created by default on first load
- 201 Tailwind-derived background colors are available to build the mesh
- 2 export actions are available: CSS copy and image download

## Step 1: Choose the background color

Set the base background color first so the rest of the mesh layers have a stable foundation.

## Step 2: Adjust the mesh stops

Move each stop, edit its size, and change its color until the composition feels balanced.

## Step 3: Export the mesh background

Copy the generated CSS or download the final mesh as an image once the preview matches your design goal.

## Frequently asked questions

### How many stops does the mesh generator create by default?

The mesh generator starts with six stops so users begin with a rich composition instead of an empty canvas.

### Can users drag the mesh stops directly on the preview?

Yes. When controls are visible, the preview exposes draggable handles for direct position editing.

### Why does the mesh route export CSS instead of Tailwind classes?

Mesh gradients are composed from multiple generated radial layers, so inline CSS is the most accurate export format.

## Supporting files

- route logic lives in `pages/mesh.vue`
- draggable preview behavior lives in `components/MeshPreview.vue`
- export actions are handled by `components/ActionSave.vue`
