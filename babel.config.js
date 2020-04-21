module.exports = {
  presets: [
    '@babel/preset-env', // javascript moderno pra javascript antigo
    '@babel/preset-react' // adiciona funcionalidades do react na conversão acima
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}