import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    swcPlugins: [
      [
        require.resolve("../dist/swc/tailSafeSwcPlugin.js"),
        {
          defaultProps: {
            display: 'flex',
            align: 'items-center'
          }
        }
      ]
    ]
  }
};

export default nextConfig;
