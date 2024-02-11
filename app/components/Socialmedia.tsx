import Image from "next/image";

export default function Socialmedia({name}:{name:boolean}) {
    const links = [
        "linkedin.com/in/adesh-singh15",
        "github.com/devopmega",
        "twitter.com/adesh1510",
        "mail.google.com/mail/u/0/?fs=1&to=adeshsingh3002@gmail.com&tf=cm",
        "instagram.com/adesh7618",
        "facebook.com",
    ];
    const images = [
        "linkedin",
        "github",
        "twitter",
        "mail",
        "instagram",
        "facebook",
    ]

    return (
        <>
            {images.map((img, ind) => (
                <a className="w-20 flex gap-4 items-center transition-transform delay-150 duration-300 hover:scale-125" key={ind} href={`https://${links[ind]}`} target="_blank">
                    <Image src={`/img/${img}.png`} alt={img} width="32" height="32" />
                    {name && img}
                </a>
            ))}
        </>
    )
}