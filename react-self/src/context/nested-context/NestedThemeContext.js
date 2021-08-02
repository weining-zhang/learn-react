import React from 'react';

import { themes } from '../dynamic-context/DynamicThemeContext';

// 从一个在组件树中嵌套很深的组件中更新 context 是很有必要的。在这种场景下，你可以通过 context 传递一个函数，使得 consumers 组件更新 context

// 确保传递给 createContext 的默认值数据结构是调用的 consumer 组件所能匹配的!
export const NestedThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}, 
});