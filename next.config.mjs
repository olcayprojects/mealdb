/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: "export",
    images :{
        unoptimized: true,

       // domains:["www.themealdb.com"]
    },
    basePath: isProd ? '/mealdb' : '',
};

export default nextConfig;
