import pypdf
import pypdfium2 as pdfium
import os

def process_pdf(pdf_num):
    pdf_path = f"c:\\Users\\nikhi\\OneDrive\\Desktop\\NST 5th Sem Notes\\AML\\pdfs\\{pdf_num}.pdf"
    output_text_path = f"C:\\Users\\nikhi\\.gemini\\antigravity-ide\\brain\\93ddd883-a55d-46b7-8358-38599bbd1967\\scratch\\aml{pdf_num}_pdf_content.txt"
    output_img_dir = f"C:\\Users\\nikhi\\.gemini\\antigravity-ide\\brain\\93ddd883-a55d-46b7-8358-38599bbd1967\\scratch\\rendered_aml{pdf_num}_pages"
    os.makedirs(output_img_dir, exist_ok=True)

    if not os.path.exists(pdf_path):
        print(f"File {pdf_path} does not exist")
        return

    reader = pypdf.PdfReader(pdf_path)
    print(f"PDF {pdf_num} - Total pages: {len(reader.pages)}")

    # Extract text
    with open(output_text_path, "w", encoding="utf-8") as f:
        for idx, page in enumerate(reader.pages):
            text = page.extract_text()
            f.write(f"--- PAGE {idx} ---\n")
            f.write(text if text else "[No Text]")
            f.write("\n\n")

    # Render all pages as images for model viewing
    doc = pdfium.PdfDocument(pdf_path)
    for idx in range(len(doc)):
        page = doc[idx]
        bitmap = page.render(scale=2)
        pil_img = bitmap.to_pil()
        pil_img.save(os.path.join(output_img_dir, f"page_{idx}.png"))
    print(f"Finished processing PDF {pdf_num}")

process_pdf(3)
process_pdf(4)
