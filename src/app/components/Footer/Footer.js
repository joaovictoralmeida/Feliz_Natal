import Image from "next/image"
import Natal from "../../../../public/images/logo.svg"
import Twitter from "../../../../public/images/logo-twitter.svg"
import Whatsapp from "../../../../public/images/logo-whatsapp.svg"
import Instagram from "../../../../public/images/logo-instagram.svg"
import Facebook from "../../../../public/images/logo-facebook.svg"
import Google from "../../../../public/images/logo-google.svg"



export default function Footer() {
    return (
        <div className="flex flex-col items-center bg-[#FFE9E8]">
            <div className="flex w-[1216px] py-5 mac:w-11/12">
                <div className="flex flex-row w-full justify-between mac:flex-col mac:items-center mac:gap-5">
                    <div>
                        <Image
                            src={Natal}
                            alt="Feliz Natal"
                            width={160}
                            height={38}
                        />
                    </div>

                    <div className="flex gap-9">
                        <div className="bg-[#FFD5D3] w-10 h-10 rounded-full cursor-pointer">
                                <Image
                                src={Twitter}
                                alt="Twitter"
                                />
                        </div>
                        <div className="bg-[#FFD5D3] w-10 h-10 rounded-full cursor-pointer">
                            <Image
                            src={Whatsapp}
                            alt="Whatsapp"
                            />
                        </div>
                        <div className="bg-[#FFD5D3] w-10 h-10 rounded-full cursor-pointer">
                            <Image
                            src={Instagram}
                            alt="Instagram"
                            />
                        </div>
                        <div className="bg-[#FFD5D3] w-10 h-10 rounded-full cursor-pointer">
                            <Image
                            src={Facebook}
                            alt="Facebook"
                            />
                        </div>
                        <div className="bg-[#FFD5D3] w-10 h-10 rounded-full cursor-pointer">
                            <Image
                            src={Google}
                            alt="Google"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}