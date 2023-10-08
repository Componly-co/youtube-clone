import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import {addAttributePlugin} from "@componly/vite-plugin"
//@ts-ignore
export default defineConfig(({ mode }) => {
  const config = {
    plugins: [addAttributePlugin(),react(), viteTsconfigPaths(), svgrPlugin()],
    mode: 'production',
    // define: {
    //   __VITE_DEV_SERVER__: true, // Enable Vite dev server in production
    // },
    
    build:{

      // rollupOptions: {
      //   external: ['@mui/icons-material',"@mantine/core"] // Mark @mui/icons-material as external
      // },
      sourcemap: false,

    }
  };

  return config;
});
