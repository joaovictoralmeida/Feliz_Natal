import Image from "next/image"
import Gifts from "../../../../public/images/illustration-1.svg"

export default function Content() {
    return (
        <div className="flex flex-col items-center font-archivo ">
            <div className="flex w-[1216px] justify-center py-20 mac:w-11/12 md:w-[327px]">
                <div className="flex flex-col text-center gap-10 items-center">
                    <h1 className="text-[40px] font-semibold md:text-3xl">Tempo limitado</h1>
                    <p className="text-xl md:text-lg">Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
                    <div>
                        <h1 className="text-6xl text-[#CD3C32] font-semibold md:text-3xl ">10d -24h - 01m  - 52s</h1>
                    </div>
                        <Image
                        src={Gifts}
                        alt="Gifts"
                        />

                </div>
            </div>
        </div>
    )
}