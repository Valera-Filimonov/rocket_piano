import { useEffect, useRef, useState } from "react";
import useKeypress from 'react-use-keypress'
import useSound from 'use-sound'
import notaDo from './sound/zvuk-notyi-do.mp3'
import notaDoDiez from './sound/do-diez.mp3'
import notaRe from './sound/zvuk-notyi-re.mp3'
import notaReDiez from './sound/re-diez.mp3'
import notaMi from './sound/zvuk-notyi-mi.mp3'
import notaFa from './sound/zvuk-notyi-fa.mp3'
import notaFaDiez from './sound/fa-diez.mp3'
import notaSol from './sound/zvuk-notyi-sol.mp3'
import notaSolDiez from './sound/sol-diez.mp3'
import notaLya from './sound/zvuk-notyi-lya.mp3'
import notaLyaDiez from './sound/lya-diez.mp3'
import notaSi from './sound/zvuk-notyi-si.mp3'
import notaDoTwo from './sound/zvuk-notyi-do-vo-vtoroy-oktave.mp3'

const App = () => {

    const [playDo] = useSound(notaDo)
    const [playDoDiez] = useSound(notaDoDiez)
    const [playRe] = useSound(notaRe)
    const [playReDiez] = useSound(notaReDiez)
    const [playMi] = useSound(notaMi)
    const [playFa] = useSound(notaFa)
    const [playFaDiez] = useSound(notaFaDiez)
    const [playSol] = useSound(notaSol)
    const [playSolDiez] = useSound(notaSolDiez)
    const [playLya] = useSound(notaLya)
    const [playLyaDiez] = useSound(notaLyaDiez)
    const [playSi] = useSound(notaSi)
    const [playDoTwo] = useSound(notaDoTwo)

    useKeypress(['z', 's', 'x', 'd', 'c', 'v', 'g', 'b', 'h', 'n', 'j', 'm', ',', '.'], (event) => {
        switch (event.key) {
            case 'z':
                console.log('z')
                playDo()
                break;
            case 's':
                console.log('s')
                playDoDiez()
                break;
            case 'x':
                console.log('x')
                playRe()
                break;
            case 'd':
                console.log('d')
                playReDiez()
                break;
            case 'c':
                console.log('c')
                playMi()
                break;
            case 'v':
                console.log('v')
                playFa()
                break;
            case 'g':
                console.log('g')
                playFaDiez()
                break;
            case 'b':
                console.log('b')
                playSol()
                break;
            case 'h':
                console.log('h')
                playSolDiez()
                break;
            case 'n':
                console.log('n')
                playLya()
                break;
            case 'j':
                console.log('j')
                playLyaDiez()
                break;
            case 'm':
                console.log('m')
                playSi()
                break;
            case ',':
                console.log(',')
                playDoTwo()
                break;
            default:
                alert("нет таких значений")
        }
    })

    return (
    <>
      <h1>Привет, Солнце!</h1>
    </>
  );
}

export default App;
