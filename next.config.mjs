/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    images :{
        unoptimized: true,
        
        // domains:["www.themealdb.com"]
    },
    //basePath: '/mealdb',
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
