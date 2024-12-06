// jest.config.cjs
module.exports = {
  preset: "ts-jest", // Укажите, если вы используете TypeScript; можно убрать, если нет
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // Используем babel-jest для обработки файлов
  },
  transformIgnorePatterns: [
    "/node_modules/(?!edge-paths/).*", // Разрешить обработку edge-paths
  ],
  testEnvironment: "node", // Установите, если вашему проекту требуется окружение Node
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
