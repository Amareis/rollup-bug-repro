export default [
    {
        input: 'complex/index.js',
        treeshake: false,
        output: {
            dir: 'dist/complex',
            format: 'esm',
            preserveModules: true,
        },
    },
    {
        input: 'simple/main.js',
        treeshake: false,
        output: {
            dir: 'dist/simple',
            format: 'esm',
            preserveModules: true,
        },
    },
]

