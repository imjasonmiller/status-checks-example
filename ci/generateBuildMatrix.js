"use strict";

const path = require("path");
const fs = require("fs");

/**
 * Clients that should always be included as part of the matrix strategy
 */
const DEFAULT_CLIENTS = ["foo"];

const getAffectedClients = (filesAdded, filesModified, filesRenamed) => {
  const files = new Set([...filesAdded, ...filesModified, ...filesRenamed]);
  const clients = fs
    .readdirSync(path.resolve(process.cwd(), "apps"), { withFileTypes: true })
    .filter((dirent) => {
      if (!dirent.isDirectory()) {
        return;
      }

      return files.has(path.join("apps", dirent.name));
    })
    .map((dirent) => ({ app: dirent.name }));

  return clients;
};

const generateBuildMatrix = (filesAdded, filesModified, filesRenamed) => {
  const clients = Array.from(
    new Set([
      ...getAffectedClients(filesAdded, filesModified, filesRenamed),
      ...DEFAULT_CLIENTS,
    ])
  );

  return clients.length ? { include: clients } : null;
};

module.exports = generateBuildMatrix;
