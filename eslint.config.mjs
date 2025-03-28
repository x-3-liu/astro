import antfu from '@antfu/eslint-config'

export default antfu(
  // 1. 配置 @antfu/eslint-config 的选项
  {
    // 启用特定框架/库的集成
    astro: true, // For Astro projects
    unocss: true, // If using UnoCSS

    // *** 禁用 ESLint 的样式规则，让 Prettier 处理格式化 ***
    // 将 stylistic 设置为 false 可以避免 ESLint 规则 (如引号、分号、空格等) 与 Prettier 冲突。
    // 这是与 Prettier 集成时的推荐设置。
    stylistic: false,

    // 启用格式化插件集成 (通常是 Prettier)
    // 这会应用 eslint-plugin-format 或类似插件，确保 Prettier 作为 ESLint 的一部分运行（或确保应用 eslint-config-prettier）
    formatters: true,
  },

  // 2. (可选) 在这里添加你自己的、非样式相关的规则覆盖
  // 由于 stylistic 已设为 false，之前覆盖 style/* 规则的部分不再需要。
  // 如果你需要覆盖其他类型的规则 (例如 'no-console')，可以在这里添加。
  {
    rules: {
      // 示例：如果你想允许 console.log，可以取消注释下一行
      // 'no-console': 'off',
      // 之前覆盖的 style/* 规则可以移除，因为 stylistic: false 已经处理了它们
      // "style/eol-last": "off",
      // "style/no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }],
    },
  },
)
