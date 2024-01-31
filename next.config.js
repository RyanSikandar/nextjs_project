/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:"export"
    redirects: async()=>{return[
        {
            // for dynamic pages add : before the dynamic part
            source:"/seller",
            destination:"/",
            permanent: false
        }
    ]}
}

module.exports = nextConfig
