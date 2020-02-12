export default (template) => {
  const grid = [];
  const logoPadding = {
    x: Math.round(template.step.x * (template.logoPaddingPercent / 100)),
    y: Math.round(template.step.y * (template.logoPaddingPercent / 100)),
  };
  const step = {
    x: template.step.x + logoPadding.x * 2,
    y: template.step.y + logoPadding.y * 2,
  };
  const startY = template.height - template.padding - step.y / 2;
  let y = template.id !== 2 ? startY
    : Math.ceil((template.height - startY) / step.y) * step.y + startY;
  const minY = template.id !== 2 ? template.padding + step.y / 2
    : -(step.y / 2);
  const maxX = template.id !== 2 ? template.width - template.padding - step.x / 2
    : template.width + step.x / 2;
  let indexY = template.id !== 2 ? 0 : Math.ceil((template.height - startY) / step.y);
  const offset = { x: {}, y: {} };
  if (template.offset) {
    if (template.offset.x.even && Math.abs(template.offset.x.even) <= logoPadding.x) {
      offset.x.even = template.offset.x.even;
    }
    if (template.offset.x.odd && Math.abs(template.offset.x.odd) <= logoPadding.x) {
      offset.x.odd = template.offset.x.odd;
    }
    if (template.offset.y.even && Math.abs(template.offset.y.even) <= logoPadding.y) {
      offset.y.even = template.offset.y.even;
    }
    if (template.offset.y.odd && Math.abs(template.offset.y.odd) <= logoPadding.y) {
      offset.y.odd = template.offset.y.odd;
    }
  }
  while (y > minY) {
    const rowOrder = indexY % 2 === 0 ? 'even' : 'odd';
    const offsetY = offset.y[rowOrder] || 0;
    let startX = template.padding + step.x / 2;
    if (template.id !== 3) {
      startX -= (step.x / 2) * (indexY % 2);
    }
    let x;
    if (template.id === 2) {
      x = startX <= 0 ? startX : startX - Math.ceil(startX / step.x) * step.x;
    } else {
      x = startX >= (template.padding + step.x / 2) ? startX : startX + step.x;
    }
    const row = [];
    let indexX = 0;
    while (x < maxX) {
      const colOrder = indexX % 2 === 0 ? 'even' : 'odd';
      const offsetX = offset.x[colOrder] || 0;
      row.push({ x: x + offsetX, y: y + offsetY });
      x += step.x;
      indexX += 1;
    }
    if (row.length) {
      grid.push(row);
    }
    y -= step.y;
    indexY += 1;
  }
  return grid;
};
