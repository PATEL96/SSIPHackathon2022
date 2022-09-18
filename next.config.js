/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.india.gov.in', 'upload.wikimedia.org', 'encrypted-tbn0.gstatic.com', 'amritmahotsav.mygov.in'],
  }
}