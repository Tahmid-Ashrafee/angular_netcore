export interface Product {
    id: string;
    name: string;
    type: string;
    price: number;
    image: string | null; // Use 'string | null' to store the image data (as a base64 string) or null if no image is selected.
}
