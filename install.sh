#!/bin/bash

set -e

DEST="/var/www/jargedon"

sudo mkdir -p "$DEST"
sudo cp index.html 404.html hanna-notes.html style.css theme.js "$DEST/"
sudo chmod 755 "$DEST"
sudo chmod 644 "$DEST/"*

echo "Installed to $DEST"
