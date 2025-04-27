import { NextResponse } from 'next/server';
import { chromium } from 'playwright'; // or 'playwright-core' if you're deploying to Vercel

export async function POST(req) {
  try {
    const { html } = await req.json();
    console.log('Received HTML:', html.slice(0, 300)); // show first 300 chars

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: 'load' });
    console.log('HTML loaded into Playwright page.');

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    await browser.close();
    console.log('PDF generated.');

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    });
  } catch (err) {
    console.error('PDF generation error:', err);
    return new NextResponse('Failed to generate PDF', { status: 500 });
  }
}