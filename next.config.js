module.exports = () => {
  return {
    images: {
      domains: [
        "firebasestorage.googleapis.com",
        "github.com",
        "image.unsplash.com",
      ],
      reactStrictMode: true,
      devIndicators: {
        buildActivity: false,
      },
      module: {
        rules: [
          {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "images/[hash]-[name].[ext]",
                },
              },
            ],
          },
        ],
      },
    },
  };
};
