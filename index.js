function TypescriptPlugin (api) {
  api.chainWebpack((config) => {
    config.module
      .rule('typescript')
        .test(/\.tsx?$/)
        .use()
          .loader('ts-loader')
          .options({ appendTsSuffixTo: [/\.vue$/] });

    config.resolve.extensions
      .add('.ts');

    config.resolve.alias
      .set('vue$', require.resolve('vue/dist/vue.esm.js'));
  });
}

module.exports = TypescriptPlugin;
