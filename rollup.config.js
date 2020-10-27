export default {
    input: 'index.js',
    treeshake: false,
    output: {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
    },
}
