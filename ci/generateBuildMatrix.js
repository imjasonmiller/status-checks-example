"use strict";

const path = require("path");
const fs = require("fs");

/**
 * Clients that should always be included as part of the matrix strategy
 */
const DEFAULT_CLIENTS = ["apps/foo"];

const getAffectedClients = (filesAdded, filesModified, filesRenamed) => {
  const files = new Set([
    ...filesAdded,
    ...filesModified,
    ...filesRenamed,
    ...DEFAULT_CLIENTS,
  ]);
  const clients = fs
    .readdirSync(path.resolve(process.cwd(), "apps"), { withFileTypes: true })
    .filter((dirent) => {
      if (!dirent.isDirectory()) {
        return false;
      }

      return files.has(path.join("apps", dirent.name));
    })
    .map((dirent) => ({ app: dirent.name }));

  return clients;
};

const generateBuildMatrix = (filesAdded, filesModified, filesRenamed) => {
  const clients = getAffectedClients(filesAdded, filesModified, filesRenamed);

  return clients.length ? { include: clients } : null;
};

module.exports = generateBuildMatrix;
