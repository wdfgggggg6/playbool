// استعادة النقاط المخزنة من localStorage
document.addEventListener("DOMContentLoaded", () => {
  const pointCells = document.querySelectorAll(".point-cell");

  // استعادة النقاط من localStorage
  pointCells.forEach((cell, index) => {
    const savedPoints = localStorage.getItem(`points-${index}`);
    if (savedPoints !== null) {
      cell.textContent = savedPoints;
    }
  });

  // حفظ النقاط عند تعديلها
  pointCells.forEach((cell, index) => {
    cell.addEventListener("input", () => {
      const points = cell.textContent.trim();
      localStorage.setItem(`points-${index}`, points);
    });
  });
});
