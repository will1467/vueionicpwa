module.exports = {
    pwa: {
        workboxPluginMode: "GenerateSW",
        worbboxOptions: {
            navigateFallBack: "/index.html",
            runtimeCaching: [
                {
                    urlPattern: new RegExp("^https://api.zippopotam.us/us/"),
                    handler: "networkFirst",
                    options: {
                        networkTimeoutSeconds: 20,
                        cacheName: "api-cache",
                        cachableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }
            ]
        }
    }
};
