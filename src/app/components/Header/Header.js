import Image from "next/image"
import Natal from "../../../../public/images/logo.svg"
import Gift from "../../../../public/images/imagem.svg"

export default function Header() {
    return (
        <div className="flex flex-col font-archivo items-center bg-[#FFE9E8]">
            <div className="flex justify-center gap-32 w-[1216px] py-20 mac:flex-col mac:w-11/12 mac:items-center md:w-[327px]">
                <div className="flex flex-col gap-10 justify-center mac:items-center ">
                    <Image
                    src={Natal}
                    alt="Feliz Natal"
                    width={160}
                    height={38}
                    />
                    <h1 className="text-[40px] font-semibold mac:text-center md:text-3xl md:text-center">Uma <span className="text-[#CD3C32]">plataforma de doação</span> <br/> para espalhar alegria</h1>
                    <p className="text-2xl mac:text-center md:text-lg">Nessas festas de fim de ano mande um presente <br/> para a pessoa amada e compartilhe a alegria do Natal.</p>
                    <div className="mac:flex mac:justify-center "><button className="w-[240px] rounded-md py-[14px] px-[32px] bg-[#CD3C32] text-white uppercase hover:bg-[#681F1A] md:w-[327px]">Fazer uma doação</button></div>
                </div>
                <Image
                src={Gift}
                alt="Gift"
                width={500}
                height={339}
                />
            </div>
        </div>
    )
}