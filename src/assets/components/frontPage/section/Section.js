import React from 'react'
import internship from '../../../img/itsharevision.png'
import ikobenhavn from '../../../img/ikobenhavn.png'
import karmen from '../../../img/karmen.png'
import oldportfolio from '../../../img/oldportfolio.png'
import parasite from '../../../img/parasite.png'


const Section = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl'>
                    Hjem
                </h1>
                <h2>
                    Tidligere projekter
                </h2>
                <div>
                    <div className='hideScrollbar flex overflow-x-scroll overflow-hidden gap-4 p-5 lg:p-3 lg:overscroll-x-none xl:overscroll-x-none' >
                        <a href="https://itsharevision.netlify.app" target="_blank" rel="noopener noreferrer">
                            <div className='w-[150px] h-[150px] rounded-l-lg rounded-tr-lg'
                                style={{
                                    backgroundImage: `url(${internship})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <p className='w-[150px] p-1 bg-primary text-accent rounded-tr-lg truncate' >
                                    IT-ShareVision
                                </p>
                            </div>
                        </a>
                        <a href="https://parasiteskoleprjekt.netlify.app" target="_blank" rel="noopener noreferrer">
                            <div className='w-[150px] h-[150px] rounded-l-lg rounded-tr-lg'
                                style={{
                                    backgroundImage: `url(${ikobenhavn})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <p className='w-[150px] p-1 bg-primary text-accent rounded-tr-lg truncate'>
                                    iKøbenhavn
                                </p>
                            </div>
                        </a>

                        <a href="https://karmenskoleprojekt.netlify.app" target="_blank" rel="noopener noreferrer">
                            <div className='w-[150px] h-[150px] rounded-l-lg rounded-tr-lg'
                                style={{
                                    backgroundImage: `url(${karmen})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <p className='w-[150px] p-1 bg-primary text-accent rounded-tr-lg truncate'>
                                    Karmen
                                </p>
                            </div>
                        </a>

                        <a href="https://sheilalygreweitlingportfolio.netlify.app" target="_blank" rel="noopener noreferrer">
                            <div className='w-[150px] h-[150px] rounded-l-lg rounded-tr-lg'
                                style={{
                                    backgroundImage: `url(${oldportfolio})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <p className='w-[150px] p-1 bg-primary text-accent rounded-tr-lg truncate'>
                                    Tidl. portfolio
                                </p>
                            </div>
                        </a>
                        <a href="https://parasiteskoleprjekt.netlify.app" target="_blank" rel="noopener noreferrer">
                            <div className='w-[150px] h-[150px] rounded-l-lg rounded-tr-lg'
                                style={{
                                    backgroundImage: `url(${parasite})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <p className='w-[150px] p-1 bg-primary text-accent rounded-tr-lg truncate'>
                                    Parasite
                                </p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <br />
                        <p>
                            Med en uddannelse som webudvikler, går jeg meget op i, at det ikke kun er funktionelt men også giver en god brugeroplevelse. Jeg vil gerne have at mine sider er pixel-perfect.
                            Jeg drømmer om at udvikle spændende, intuitive og brugbare webløsninger, der skaber en god brugeroplevelse.
                            <br />
                            <br />
                            Jeg bruger primært ReactJS og tailwindCSS, men dette ville ikke være muligt uden min rygrad af HTML og CSS, som jeg også nyder at kode og lege med.
                            Jeg har arbjedet med REST API'er på mi uddannelse som webudvikler, men ingen af dem er tilgængelige på denne side, da serverne kun var tilgængelige på uddannelsen.
                            <br />
                            <br />
                            Jeg sigter efter, ikke kun pixel-perfect udførelse, men også en clean kode. Hvis jeg ved, at der er andre der også skal arbejde med det jeg laver, så er det vigtigt, at koden er læsbar og at vi er enige om en naming convention.
                            Jeg vil gerne videregive god kode og godt humør.
                            <br />

                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Section