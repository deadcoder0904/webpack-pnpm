module.exports = {
  hooks: {
    readPackage (pkg) {
      if (pkg.name === 'inspectpack') {
        pkg.dependencies['babel-traverse'] = '^6.26.0'
      }
      return pkg
    }
  }
}