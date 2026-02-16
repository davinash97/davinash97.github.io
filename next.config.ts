import type { NextConfig } from "next";
import path from "path";

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
	webpack: (config) => {
		config.resolve.alias["@data"] = path.join(__dirname, "src/app/data");
		return config;
	},
	devIndicators: false,
};

export default nextConfig;
