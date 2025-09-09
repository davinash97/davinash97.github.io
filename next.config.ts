import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "dummyimage.com",
				pathname: "/**",
			},
		],
	},
	devIndicators: false,
};

export default nextConfig;
