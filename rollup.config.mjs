export default {
    input: 'src/index.mjs',
    output: [
        {
            format: 'es',
            dir: 'dist',
            entryFileNames: '[name].mjs',
            preserveModules: true,
            preserveModulesRoot: 'src',
            interop: 'auto',
        },
        {
            format: 'cjs',
            dir: 'dist',
            entryFileNames: '[name].js',
            preserveModules: true,
            preserveModulesRoot: 'src',
            interop: 'auto',
        }
    ],
    external: ["react-responsive"],
};
