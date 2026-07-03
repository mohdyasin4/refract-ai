// lib/heroui-plugin.js
const { heroui } = require("@heroui/react");
const plugin = require("tailwindcss/plugin");

const originalPlugin = heroui({
  themes: {
    dark: {
      colors: {
        primary: {
          DEFAULT: "#BEF264",
          foreground: "#000000",
        },
        focus: "#BEF264",
      },
    },
  },
});

// Wrap the handler function to intercept and patch addUtilities calls for Tailwind v4
const wrappedHandler = (api) => {
  const { addBase, addUtilities } = api;

  const patchedAddUtilities = (utilities, options) => {
    const baseStyles = {};
    const validUtilities = {};

    Object.entries(utilities).forEach(([selector, styles]) => {
      // Tailwind v4 requires utilities to be single, simple class names starting with a dot.
      // Any compound, attribute, or relational selectors (e.g. .dark [data-theme="dark"]) go to addBase.
      const isSimpleClass = /^\.[a-zA-Z0-9_-]+$/.test(selector);

      if (isSimpleClass) {
        validUtilities[selector] = styles;
      } else {
        baseStyles[selector] = styles;
      }
    });

    if (Object.keys(baseStyles).length > 0) {
      addBase(baseStyles);
    }
    if (Object.keys(validUtilities).length > 0) {
      addUtilities(validUtilities, options);
    }
  };

  // Call the original HeroUI plugin handler with our patched addUtilities interceptor
  return originalPlugin.handler({
    ...api,
    addUtilities: patchedAddUtilities,
  });
};

module.exports = plugin(wrappedHandler, originalPlugin.config);
