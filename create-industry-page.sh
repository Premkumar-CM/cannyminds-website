#!/bin/bash
# Quick script to verify industry page structure
echo "Checking industry pages..."
for dir in app/industries/*/; do
  if [ -f "${dir}page.tsx" ]; then
    echo "✓ ${dir}page.tsx exists"
  else
    echo "✗ ${dir}page.tsx missing"
  fi
done
