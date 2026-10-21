#!/usr/bin/env bash
# Build the Docker image for the DJND cluster, push it to Scaleway and pin the
# new tag in kustomize/kustomization.yaml. Then deploy with:
#   kubectl apply -k kustomize/
#
# Log in to the registry once beforehand:
#   docker login rg.fr-par.scw.cloud/djnd -u nologin --password-stdin <<< "$SCW_SECRET_TOKEN"
set -euo pipefail

cd "$(dirname "$0")/.."

IMAGE=rg.fr-par.scw.cloud/djnd/videoactivism-academy
# TODO: replace with the real hostname (keep in sync with kustomize/ingress.yaml)
SITE=${SITE:-https://videoaktivizem.danesjenovdan.si}

TAG=$(git rev-parse HEAD)
if [[ -n "$(git status --porcelain)" ]]; then
  TAG="$TAG-dirty-$(date +%Y%m%d%H%M%S)"
  echo "Warning: working tree has uncommitted changes, tagging as $TAG" >&2
fi

# Use the host network for RUN steps so `npm ci` reaches the registry the same
# way the host does, instead of through Docker's bridge network and DNS.
docker build \
  --network=host \
  --platform linux/amd64 \
  --build-arg SITE="$SITE" \
  -t "$IMAGE:$TAG" \
  -t "$IMAGE:latest" \
  .

docker push "$IMAGE:$TAG"
docker push "$IMAGE:latest"

sed -i "s/newTag: .*/newTag: '$TAG'/" kustomize/kustomization.yaml

echo "Pushed $IMAGE:$TAG and updated kustomize/kustomization.yaml."
echo "Deploy with: kubectl apply -k kustomize/"
