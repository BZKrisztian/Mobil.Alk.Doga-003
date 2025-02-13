export const calcSurfaceArea = (radius, height) => {
    if (radius && height) {
      const r = parseFloat(radius);
      const h = parseFloat(height);
      return (2 * Math.PI * r * (r + h)).toFixed(2);
    }
    return "Hiba, helytelen formatum.";
  };
  