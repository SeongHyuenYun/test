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
      height: 2,
      right: 0,
    };
    switch (dropPosition) {
      case -1:
        style.top = 0;
        style.left = -dropLevelOffset * indent;
        break;
      case 1:
        style.bottom = 0;
        style.left = -dropLevelOffset * indent;
        break;
      case 0:
        style.bottom = 0;
        style.left = indent;
        break;
      default:
        break;
    }
    return <div style={style} className={`${prefixCls}-drop-indicator`} />;
  };
}
