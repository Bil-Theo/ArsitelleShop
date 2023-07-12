const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig();
  
  return {
    resolver: {
      sourceExts: [...sourceExts, 'svg'] // Ajoutez les extensions supplémentaires nécessaires, par exemple 'svg'
    }
    // Autres configurations...
  };
})();
