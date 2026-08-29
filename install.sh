#!/bin/bash

set -e

DEST="/var/www/jargedon"

sudo mkdir -p "$DEST"
sudo cp index.html 404.html hanna-notes.html "$DEST/"
sudo chmod -R 755 "$DEST"

echo "Installed to $DEST"
