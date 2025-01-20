import Image from "next/image"
import Belt from "../../../../public/images/illustration.svg"

export default function Content_2() {
    return (
        <div className="flex flex-col items-center font-archivo">
            <div className="flex w-[1216px] justify-center py-20 mac:w-11/12 mac:flex mac:flex-col">
                <div className="flex justify-center gap-[200px] mac:flex-col mac:items-center">
                    <Image
                    src={Belt}
                    alt="Belt"
                    />

                    <div className="flex flex-col gap-10">
                        <h1 className="text-[40px] font-semibold mac:text-center md:text-3xl">Conectando generosidade <br/>
                        ao redor do mundos</h1>
                        <p className="text-2xl mac:text-center md:text-lg">Celebre a magia do Natal de uma maneira especial! Descubra a plataforma que permite a doação de presentes significativos para aqueles que mais precisam. Faça parte do movimento e compartilhe o verdadeiro espírito da generosidade.</p>
                        <div className="mac:flex mac:justify-center">
                            <button className="w-[240px] rounded-md py-[14px] px-[32px] bg-[#CD3C32] text-white uppercase hover:bg-[#681F1A] md:w-[327px]">Fazer uma Doação</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}