import { useState } from 'react';
import theme from 'src/styles/theme';

type NodeColorType = keyof typeof theme.nodeColors
const useNodeColor = () => {
  const [nodeColor, setNodeColor] = useState<string>(theme.nodeColors.blue);

  const handleNodeColor = (color: NodeColorType) => {
    setNodeColor(theme.nodeColors[color]);
  };

  return { nodeColor, setNodeColor: handleNodeColor };
};

export default useNodeColor;
