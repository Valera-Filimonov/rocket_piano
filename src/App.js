import { useEffect, useRef, useState } from "react";
import useKeypress from 'react-use-keypress'
import useSound from 'use-sound'
import notaDo from './sound/zvuk-notyi-do.mp3'
import notaRe from './sound/zvuk-notyi-re.mp3'
import notaMi from './sound/zvuk-notyi-mi.mp3'
import notaFa from './sound/zvuk-notyi-fa.mp3'
import notaSol from './sound/zvuk-notyi-sol.mp3'
import notaLya from './sound/zvuk-notyi-lya.mp3'
import notaSi from './sound/zvuk-notyi-si.mp3'
import notaDoTwo from './sound/zvuk-notyi-do-vo-vtoroy-oktave.mp3'

const App = () => {

    const [playDo] = useSound(notaDo)
    const [playRe] = useSound(notaRe)
    const [playMi] = useSound(notaMi)
    const [playFa] = useSound(notaFa)
    const [playSol] = useSound(notaSol)
    const [playLya] = useSound(notaLya)
    const [playSi] = useSound(notaSi)
    const [playDoTwo] = useSound(notaDoTwo)

    useKeypress(['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'], (event) => {
        switch (event.key) {
            case 'z':
                console.log('z')
                playDo()
                break;
            case 'x':
                console.log('x')
                playRe()
                break;
            case 'c':
                console.log('c')
                playMi()
                break;
            case 'v':
                console.log('v')
                playFa()
                break;
            case 'b':
                console.log('b')
                playSol()
                break;
            case 'n':
                console.log('n')
                playLya()
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
