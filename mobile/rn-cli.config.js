module.exports = {
    getTransformModulePath() {
        return require.resolve("react-mobile-typescript-transformer");
    },
    getSourceExts() {
        return ["ts", "tsx"];
    }
};
