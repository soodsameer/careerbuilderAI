import { clsx } from "clsx";
import html2canvas from "html2canvas";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}





export const generatePDFUtility = async (element) => {
  if (!element) {
    console.error('No element provided for PDF generation');
    return;
  }

  sanitizeElementColors(element);
  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("resume.pdf");
  }).catch((err) => {
    console.error("PDF generation error:", err);
  });

  // const imgData = canvas.toDataURL('image/jpeg', 1.0);
  // pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);

  // const pageWidth = pdf.internal.pageSize.getWidth();
  // const pageHeight = pdf.internal.pageSize.getHeight();

  // const imgWidth = pageWidth;
  // const imgHeight = (canvas.height * imgWidth) / canvas.width;

  // pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  // pdf.save('download.pdf');
};


function sanitizeElementColors(element) {
  const elements = element.querySelectorAll('*');
  elements.forEach(function (el) {
    const style = window.getComputedStyle(el);
    const color = style.color;
    const bgColor = style.backgroundColor;

    if (color.includes('oklch')) {
      el.style.color = 'black';
    }
    if (bgColor.includes('oklch')) {
      el.style.backgroundColor = 'white';
    }
  });
}