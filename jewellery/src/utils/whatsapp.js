export function enquireOnWhatsApp(product) {
  const phone = "919443379960";
  const message = `
Hello Shri Raam Jewellery,

I'm interested in this product:

Name: ${product.title}
Product ID: ${product.id}

Image:
${window.location.origin}${product.images[0]}

Please share more details.
`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
