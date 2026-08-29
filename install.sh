#!/bin/bash

set -e

DEST="/var/www/varden"

sudo mkdir -p "$DEST"
sudo cp index.html "$DEST/"
sudo chmod -R 755 "$DEST"

echo "Installed to $DEST"
