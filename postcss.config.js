const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    "plugins": isProduction
        ? [
            "postcss-flexbugs-fixes",
            [
                "postcss-preset-env",
                {
                    "autoprefixer": {
                        "flexbox": "no-2009"
                    },
                    "stage": 3,
                    "features": {
                        "custom-properties": false
                    }
                }
            ],
            [
                '@fullhuman/postcss-purgecss',
                {
                    content: [
                        './src/pages/**/*.{js,jsx,ts,tsx}',
                        './src/components/**/*.{js,jsx,ts,tsx}'
                    ],
                    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                    safelist: {
                        standard: ["html", "body"],
                        greedy: [
                            /card-.*$/,
                            /badge$/,
                            /btn$/,
                            /btn-.*$/,
                            /bg-.*$/,
                            /badge-.*$/,
                            /d-.*$/,
                            /h[123456]$/,
                            /p[setb]?-.*$/,
                            /m[setb]?-.*$/,
                            /text-.*$/,
                            /tooltip/
                        ]
                    }
                }
            ],
        ] : [
            // No transformations in development
        ]
}
