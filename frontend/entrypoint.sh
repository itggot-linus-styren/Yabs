#!/bin/bash
set -e # Exit immediately if a command returns non-zero

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
