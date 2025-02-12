import React from 'react'
import SoMe from './SoMe'
import CvPdf from './CvPdf'


const SectionWhoAmI = () => {
    return (
        <div>
            <div className='md:flex md:justify-between p-4'>
                <div className='border-[1px] p-9 m-9 rounded-xl md:w-4/5 bg-secondary text-accent border-primary '>
                    <h1 className='text-5xl'>Om mig </h1>
                    <br />
                    <p>
                        Det er vigtigt for mig, at møde andre mennesker i øjenhøjde og med et smil på læben.
                        Jeg vægter en ærlig dialog, hvor alle inkluderede føler sig set og hørt. Jeg er ikke bange for at tage fat og lave de opgaver, jeg bliver bedt om og min loaylitet er noget jeg er meget stolt af.
                        Jeg bliver der hvor jeg er.
                        <br />
                        <br />
                        Der må godt være højt humør og god humor, der hvor jeg er. Man skal kunne snakke sammen og lave kærlig drilleri, men samtidig have mulighed for at have en seriøs snak, der skaber tillid folk imellem.
                    </p>
                </div>
                <div className='border-[1px] p-9 m-9 rounded-xl md:w-1/5 bg-secondary text-accent border-primary'>
                    <h1 className='text-5xl'>Skills:</h1>
                    <ul>
                        <li>NPM</li>
                        <li>ReactJS</li>
                        <li>TailwindCSS</li>
                        <li>Vanilla JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>REST API</li>
                        <li>Figma</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
            <div className='text-center border-[1px] p-9 m-9 rounded-xl md:flex md:justify-around bg-secondary text-accent border-primary'>
                <div>
                    <h1>Hent mit CV:</h1>
                    <CvPdf />
                </div>
                <div>
                    <h1>Kontakt mig:</h1>
                    <SoMe />
                </div>
            </div>

        </div>
    )
}

export default SectionWhoAmI