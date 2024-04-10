import QRCode from 'qrcode';

export async function GET() {
  try {
    const address = '0x1ccb4Af913a5ef48Ca32047eEc8f1B94DE5dFAb0';
    const qrcodeBase64 = await QRCode.toDataURL(address, { errorCorrectionLevel: 'H', width: 800 });
    const buf = Buffer.from(qrcodeBase64.split(',')[1], 'base64');

    return new Response(buf);
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong in generage qrcode route!');
  }
}
