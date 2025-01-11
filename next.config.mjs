/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        domains:["www.themealdb.com"]
    },
    assetPrefix: isProd ? '/nextmeal/' : '',
    basePath: isProd ? '/nextmeal' : '',
    output: 'export'
};

export default nextConfig;
