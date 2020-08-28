import React from 'react';

export default function createDropIndicatorRender(prefixCls: string) {
  return function dropIndicatorRender(
    dropPosition: -1 | 0 | 1,
    dropLevelOffset: number,
    indent: number,
  ) {
    const style: React.CSSProperties = {
      pointerEvents: 'none',
      position: 'absolute',
    };
    if (dropPosition === -1) {
      style.top = 0;
      style.height = 2;
      style.right = 0;
      style.left = -dropLevelOffset * indent;
    } else if (dropPosition === 1) {
      style.bottom = 0;
      style.height = 2;
      style.right = 0;
      style.left = -dropLevelOffset * indent;
    } else {
      style.bottom = 0;
      style.height = 2;
      style.right = 0;
      style.left = indent;
    }
    return <div style={style} className={`${prefixCls}-drop-indicator`} />;
  };
}
