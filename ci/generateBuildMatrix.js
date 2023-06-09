"use strict";

const path = require('path');
const fs = require('fs');

const getAffectedClients = (filesAdded, filesModified, filesRenamed) => {
  const files = new Set([...filesAdded, ...filesModified, ...filesRenamed]);
  const clients = fs
    .readdirSync(path.resolve(__dirname, 'apps'), { withFileTypes: true })
    .filter((dirent) => {
      if (!dirent.isDirectory()) {
        return;
      }

      return files.has(path.join('apps', dirent.name));
    })
    .map((dirent) => dirent.name);

  return clients;
};

const generateBuildMatrix = (filesAdded, filesModified, filesRenamed) => {
  const clients = getAffectedClients(filesAdded, filesModified, filesRenamed);

  return clients.length 
    ? { include: clients }
    : null;
};

module.exports = generateBuildMatrix;
