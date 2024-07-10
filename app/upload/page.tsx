import Header from "@/components/Header";
import ImageUpload from "@/components/Imageupload";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Upload Medical Image',
    description: 'A upload Page to upload Medical Images for Analysis.',
  }

export default function Page() {
    return(
        <>
        <Header />
        <div className="flex items-center justify-center h-[650px]">
            <ImageUpload />
        </div></>
    )
}